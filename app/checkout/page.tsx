"use client";

import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function CheckoutForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const produk = searchParams.get("produk") || "";
  const warnaParam = searchParams.get("warna") || "";
  const namaParam = searchParams.get("nama") || "";
  const hargaParam = parseInt(searchParams.get("harga") || "0");

  const [nama, setNama] = useState(namaParam);
  const [wa, setWa] = useState("");
  const [alamat, setAlamat] = useState("");
  const [warna, setWarna] = useState(warnaParam);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fbq = (window as any).fbq;
    fbq?.("track", "InitiateCheckout", {
      content_ids: [produk],
      content_name: produk,
      content_type: "product",
      currency: "IDR",
      value: hargaParam,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!file) {
      setError("Foto bukti transfer wajib diupload");
      setLoading(false);
      return;
    }

    if (!/^0?\d{9,15}$/.test(wa.replace(/\s/g, ""))) {
      setError("Nomor WA tidak valid");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("wa", wa.replace(/\s/g, ""));
    formData.append("alamat", alamat);
    formData.append("produk", produk);
    formData.append("warna", warna);
    formData.append("harga", String(hargaParam));
    formData.append("foto_bukti", file);

    try {
      const res = await fetch("/api/konfirmasi-bayar", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        const fbq = (window as any).fbq;
        fbq?.("track", "Purchase", {
          content_ids: [produk],
          content_name: produk,
          content_type: "product",
          currency: "IDR",
          value: hargaParam,
        });
        const ttq = (window as any).ttq;
        ttq?.track("CompletePayment", {
          content_id: produk,
          content_name: produk,
          currency: "IDR",
          value: hargaParam,
        });
        setSuccess(true);
        setTimeout(() => router.push("/checkout/sukses"), 1500);
      } else {
        setError(data.error || "Gagal mengirim konfirmasi. Coba lagi.");
      }
    } catch {
      setError("Gagal terhubung ke server. Coba lagi.");
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-100 to-cyan-100 p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/90 backdrop-blur rounded-3xl p-10 max-w-md text-center shadow-2xl"
        >
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-2xl font-black text-purple-700 mb-2">
            Konfirmasi Terkirim!
          </h2>
          <p className="text-gray-600 mb-6">
            Pesanan akan diproses setelah pembayaran diverifikasi.
          </p>
          <p className="text-sm text-gray-400">Mengalihkan...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-cyan-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur border-b border-purple-100 sticky top-0 z-30">
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center gap-3">
          <button onClick={() => router.back()} className="text-2xl text-purple-600 hover:scale-110 transition-transform">
            ←
          </button>
          <span className="font-black text-lg text-purple-800" style={{ fontFamily: "var(--font-nunito)" }}>
            Checkout
          </span>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-6 py-8 space-y-6">
        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
        >
          <h2 className="font-black text-lg text-gray-800 mb-4">📋 Ringkasan Pesanan</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Produk</span>
              <span className="font-semibold text-gray-800">{produk}</span>
            </div>
            {warna && (
              <div className="flex justify-between">
                <span className="text-gray-500">Warna</span>
                <span className="font-semibold text-gray-800">{warna}</span>
              </div>
            )}
            <div className="border-t border-gray-100 pt-2 flex justify-between text-lg">
              <span className="font-bold text-gray-800">Total Bayar</span>
              <span className="font-black text-purple-700">
                Rp {hargaParam.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* QRIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
        >
          <h2 className="font-black text-lg text-gray-800 mb-2">💳 Bayar via QRIS</h2>
          <p className="text-sm text-gray-500 mb-4">
            Scan QRIS di bawah pakai <b>GoPay</b> / <b>OVO</b> / <b>Dana</b> / <b>Mobile Banking</b> apapun
          </p>
          <div className="flex justify-center mb-3">
            <img
              src="https://res.cloudinary.com/dejoaryri/image/upload/v1780454390/jogpro_qris.jpg"
              alt="QRIS Jogpro"
              className="w-56 h-56 object-contain rounded-xl shadow-md"
            />
          </div>
          <p className="text-center font-bold text-purple-700 text-lg">
            Rp {hargaParam.toLocaleString("id-ID")}
          </p>
          <p className="text-center text-xs text-gray-400 mt-1">
            Merchant: jogpro_3d (ShopeePay)
          </p>
          {/* Download QRIS Button */}
          <div className="flex justify-center mt-4">
            <a
              href="https://res.cloudinary.com/dejoaryri/image/upload/v1780454390/jogpro_qris.jpg"
              download="QRIS_Jogpro.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-50 text-purple-700 font-semibold text-sm hover:bg-purple-100 transition-all border border-purple-200 hover:scale-[1.02]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download QRIS
            </a>
          </div>
        </motion.div>

        {/* Transfer BCA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
        >
          <h2 className="font-black text-lg text-gray-800 mb-2">🏦 Atau Transfer BCA</h2>
          <p className="text-sm text-gray-500 mb-4">
            Transfer sejumlah <b className="text-purple-700">Rp {hargaParam.toLocaleString("id-ID")}</b> ke rekening berikut:
          </p>
          <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-gray-500 mb-0.5">BCA</p>
              <p className="font-black text-xl text-gray-800 tracking-widest">7805380306</p>
            </div>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("7805380306");
                const el = document.getElementById("copy-notif");
                if (el) { el.classList.remove("opacity-0"); setTimeout(() => el.classList.add("opacity-0"), 1500); }
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-purple-200 text-purple-700 font-semibold text-sm hover:bg-purple-100 transition-all hover:scale-[1.05] shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Salin
            </button>
          </div>
          <p id="copy-notif" className="text-center text-xs text-green-600 font-semibold mt-2 opacity-0 transition-opacity duration-300">
            ✅ Nomor rekening disalin!
          </p>
        </motion.div>

        {/* Form Konfirmasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100"
        >
          <h2 className="font-black text-lg text-gray-800 mb-4">
            📤 Konfirmasi Pembayaran
          </h2>
          <p className="text-xs text-gray-400 mb-4">
            Setelah transfer, upload bukti di bawah ya!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Siti Rahma"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                No. WhatsApp Aktif
              </label>
              <input
                type="tel"
                value={wa}
                onChange={(e) => setWa(e.target.value)}
                placeholder="Contoh: 08123456789"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Alamat Pengiriman <span className="text-red-400">*</span>
              </label>
              <textarea
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Contoh: Jl. Mawar No. 12, RT 03 RW 05, Kec. Lowokwaru, Malang, Jawa Timur 65141"
                required
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Warna (opsional)
              </label>
              <input
                type="text"
                value={warna}
                onChange={(e) => setWarna(e.target.value)}
                placeholder="Contoh: Pink"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Foto Bukti Transfer <span className="text-red-400">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer transition-all"
              />
              {file && (
                <p className="text-xs text-green-600 mt-1">
                  ✅ {file.name} ({(file.size / 1024).toFixed(0)} KB)
                </p>
              )}
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                ❌ {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl font-black text-white text-lg shadow-xl transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #db2777, #f59e0b)",
                fontFamily: "var(--font-nunito)",
              }}
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Mengirim...
                </span>
              ) : (
                "Kirim Konfirmasi Pembayaran"
              )}
            </button>
          </form>
        </motion.div>

        <div className="text-center pb-8">
          <p className="text-xs text-gray-400">
            Butuh bantuan?{" "}
            <a
              href="https://wa.me/628972523968"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold hover:underline"
            >
              Chat WA Jogpro
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-100 to-cyan-100">
          <div className="w-8 h-8 border-4 border-purple-300 border-t-purple-700 rounded-full animate-spin" />
        </div>
      }
    >
      <CheckoutForm />
    </Suspense>
  );
}
