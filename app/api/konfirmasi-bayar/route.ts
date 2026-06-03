import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const CLOUD_NAME = "dejoaryri";
const CLOUD_KEY = "941387697763256";
const CLOUD_SECRET = process.env.CLOUDINARY_API_SECRET || "";
const TELEGRAM_BOT = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT = process.env.TELEGRAM_CHAT_ID || "7313902869";

async function uploadToCloudinary(file: File): Promise<string> {
  const timestamp = Math.floor(Date.now() / 1000);
  const publicId = `bukti_bayar_${Date.now()}`;

  const sigStr = `public_id=${publicId}&timestamp=${timestamp}${CLOUD_SECRET}`;
  const signature = createHash("sha1").update(sigStr).digest("hex");

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", CLOUD_KEY);
  formData.append("timestamp", String(timestamp));
  formData.append("public_id", publicId);
  formData.append("signature", signature);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData }
  );

  const data = await res.json();
  if (!data.secure_url) {
    throw new Error(data.error?.message || `Cloudinary upload failed (${res.status})`);
  }
  return data.secure_url;
}

async function sendToTelegram(photoUrl: string, caption: string): Promise<void> {
  const formData = new FormData();
  formData.append("chat_id", TELEGRAM_CHAT);
  formData.append("photo", photoUrl);
  formData.append("caption", caption);
  formData.append("parse_mode", "HTML");

  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT}/sendPhoto`,
    { method: "POST", body: formData }
  );

  const data = await res.json();
  if (!data.ok) {
    throw new Error(`Telegram error: ${data.description || "unknown"} (${res.status})`);
  }
}

async function sendDocumentToTelegram(pdfBytes: Uint8Array, filename: string): Promise<void> {
  // Convert via Buffer to avoid ArrayBufferLike TS strict issue
  const buf = Buffer.from(pdfBytes);
  const blob = new Blob([buf], { type: "application/pdf" });
  const formData = new FormData();
  formData.append("chat_id", TELEGRAM_CHAT);
  formData.append("document", blob, filename);
  formData.append("caption", "🏷️ <b>Label Pengiriman</b> — siap print A5!");

  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT}/sendDocument`,
    { method: "POST", body: formData }
  );

  const data = await res.json();
  if (!data.ok) {
    throw new Error(`Telegram sendDocument error: ${data.description || "unknown"} (${res.status})`);
  }
}

async function generateLabelPdf(
  nama: string,
  wa: string,
  alamat: string,
  produk: string,
  warna: string
): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // A5 landscape: 210mm × 148mm → 595.28 × 419.53 pts
  const page = pdfDoc.addPage([595.28, 419.53]);
  const { width, height } = page.getSize();

  // Background
  page.drawRectangle({
    x: 0, y: 0, width, height,
    color: rgb(0.98, 0.96, 1),
  });

  // Purple accent bar top
  page.drawRectangle({
    x: 0, y: height - 50, width, height: 50,
    color: rgb(0.36, 0.13, 0.71),
  });

  // Header text
  page.drawText("JOGPRO — Label Pengiriman", {
    x: 30, y: height - 38,
    size: 20,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Dashed border box
  const boxX = 25, boxY = 50, boxW = width - 50, boxH = height - 120;
  const dashLen = 8, gapLen = 4;
  for (let x = boxX; x < boxX + boxW; x += dashLen + gapLen) {
    const end = Math.min(x + dashLen, boxX + boxW);
    page.drawLine({ start: { x, y: boxY }, end: { x: end, y: boxY }, thickness: 1, color: rgb(0.7, 0.7, 0.7) });
    page.drawLine({ start: { x, y: boxY + boxH }, end: { x: end, y: boxY + boxH }, thickness: 1, color: rgb(0.7, 0.7, 0.7) });
  }
  for (let y = boxY; y < boxY + boxH; y += dashLen + gapLen) {
    const end = Math.min(y + dashLen, boxY + boxH);
    page.drawLine({ start: { x: boxX, y }, end: { x: boxX, y: end }, thickness: 1, color: rgb(0.7, 0.7, 0.7) });
    page.drawLine({ start: { x: boxX + boxW, y }, end: { x: boxX + boxW, y: end }, thickness: 1, color: rgb(0.7, 0.7, 0.7) });
  }

  // Label fields — left column
  const leftX = 50, rightX = 320, startY = boxY + boxH - 60;
  const rowH = 42;

  const fields: [string, string, boolean][] = [
    ["Nama", nama, true],
    ["WhatsApp", wa, false],
    ["Alamat", alamat, false],
    ["Produk", produk, false],
    ["Warna", warna, false],
  ];

  fields.forEach(([label, value, valueFont], i) => {
    const y = startY - i * rowH;
    // Label
    page.drawText(label, {
      x: leftX, y: y + 14,
      size: 11, font: fontBold, color: rgb(0.4, 0.4, 0.4),
    });
    // Value
    const vFont = valueFont ? fontBold : font;
    const lines = wrapText(value, font, 14, boxW - 90);
    lines.forEach((line, li) => {
      page.drawText(line, {
        x: leftX, y: y - 2 - li * 18,
        size: 14, font: vFont, color: rgb(0.15, 0.15, 0.15),
      });
    });
  });

  // Right side: QR / barcode placeholder + order info
  page.drawRectangle({
    x: rightX - 10, y: boxY + 20, width: 220, height: boxH - 40,
    borderColor: rgb(0.5, 0.5, 0.5),
    borderWidth: 1,
    color: rgb(1, 1, 1),
  });

  const now = new Date();
  const dateStr = now.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  const timeStr = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

  const infoLines = [
    { text: "ORDER INFO", font: fontBold, size: 11, color: rgb(0.5, 0.5, 0.5) },
    { text: "", font, size: 6, color: rgb(0, 0, 0) },
    { text: dateStr, font, size: 12, color: rgb(0.2, 0.2, 0.2) },
    { text: `Jam ${timeStr} WIB`, font, size: 11, color: rgb(0.4, 0.4, 0.4) },
    { text: "", font, size: 6, color: rgb(0, 0, 0) },
    { text: `Pemesan: ${nama}`, font, size: 10, color: rgb(0.3, 0.3, 0.3) },
  ];

  infoLines.forEach((line, i) => {
    page.drawText(line.text, {
      x: rightX + 10, y: boxY + boxH - 50 - i * 20,
      size: line.size, font: line.font, color: line.color,
    });
  });

  // Footer
  page.drawText("Cetak A5 (14.8 × 21 cm) — tempel di paket!", {
    x: 25, y: 18,
    size: 9, font,
    color: rgb(0.6, 0.6, 0.6),
  });

  return pdfDoc.save();
}

function wrapText(text: string, font: any, fontSize: number, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    const width = font.widthOfTextAtSize(test, fontSize);
    if (width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [text];
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const nama = formData.get("nama") as string;
    const wa = formData.get("wa") as string;
    const alamat = formData.get("alamat") as string;
    const produk = formData.get("produk") as string;
    const warna = (formData.get("warna") as string) || "-";
    const harga = formData.get("harga") as string;
    const foto = formData.get("foto_bukti") as File;

    if (!nama || !wa || !alamat || !produk || !foto) {
      return NextResponse.json(
        { success: false, error: "Nama, WA, Alamat, Produk, dan Foto bukti wajib diisi" },
        { status: 400 }
      );
    }

    // Upload foto ke Cloudinary
    let fotoUrl: string;
    try {
      fotoUrl = await uploadToCloudinary(foto);
    } catch (cloudErr: unknown) {
      const msg = cloudErr instanceof Error ? cloudErr.message : "Unknown";
      console.error("Cloudinary error:", msg);
      return NextResponse.json(
        { success: false, error: `Gagal upload foto: ${msg}` },
        { status: 502 }
      );
    }

    // Kirim notifikasi ke Telegram (foto bukti bayar)
    const nominal = parseInt(harga) || 0;
    const caption = [
      `🔔 <b>KONFIRMASI PEMBAYARAN BARU!</b>\n`,
      `👤 <b>Nama:</b> ${nama}`,
      `📱 <b>WA:</b> ${wa}`,
      `📍 <b>Alamat:</b> ${alamat}`,
      `📦 <b>Produk:</b> ${produk}`,
      `🎨 <b>Warna:</b> ${warna}`,
      `💰 <b>Nominal:</b> Rp ${nominal.toLocaleString("id-ID")}`,
      "",
      "Cek ShopeePay <b>jogpro_3d</b> untuk verifikasi ✅",
    ].join("\n");

    try {
      await sendToTelegram(fotoUrl, caption);
    } catch (tgErr: unknown) {
      const msg = tgErr instanceof Error ? tgErr.message : "Unknown";
      console.error("Telegram error:", msg);
      return NextResponse.json(
        { success: false, error: `Gagal kirim notif: ${msg}` },
        { status: 502 }
      );
    }

    // Generate & kirim label PDF A5
    let pdfError = "";
    try {
      const pdfBytes = await generateLabelPdf(nama, wa, alamat, produk, warna);
      const safeName = nama.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
      await sendDocumentToTelegram(pdfBytes, `Label_${safeName}.pdf`);
    } catch (pdfErr: unknown) {
      pdfError = pdfErr instanceof Error ? pdfErr.message : "Unknown";
      console.error("PDF label error:", pdfError);
    }

    return NextResponse.json({ success: true, pdfError: pdfError || undefined });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Konfirmasi bayar error:", message);
    return NextResponse.json(
      { success: false, error: `Server error: ${message}` },
      { status: 500 }
    );
  }
}
