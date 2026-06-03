"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ── WhatsApp ── */
const WA = "628972523968";
const WA_DEFAULT = `https://wa.me/${WA}?text=Halo%20Jogpro!%20Saya%20mau%20pesan%20Clickable%20gantungan%20tas%20custom%20nama`;

/* ── Color options ── */
type ColorOption = {
  name: string;
  emoji: string;
  bg: string;
  textColor: string;
  border: string;
  shadow: string;
  wa: string;
};

const colorOptions: ColorOption[] = [
  {
    name: "Pink",
    emoji: "🩷",
    bg: "#FF69B4",
    textColor: "#fff",
    border: "#FF1493",
    shadow: "0 4px 0 #C51B7D",
    wa: `https://wa.me/${WA}?text=Halo%20Jogpro!%20Saya%20mau%20pesan%20Clickable%20warna%20Pink`,
  },
  {
    name: "Hitam",
    emoji: "⚫",
    bg: "#1A1A2E",
    textColor: "#fff",
    border: "#000",
    shadow: "0 4px 0 #000",
    wa: `https://wa.me/${WA}?text=Halo%20Jogpro!%20Saya%20mau%20pesan%20Clickable%20warna%20Hitam`,
  },
  {
    name: "Biru",
    emoji: "🩵",
    bg: "#00B4D8",
    textColor: "#fff",
    border: "#0077B6",
    shadow: "0 4px 0 #0077B6",
    wa: `https://wa.me/${WA}?text=Halo%20Jogpro!%20Saya%20mau%20pesan%20Clickable%20warna%20Biru`,
  },
  {
    name: "Ungu",
    emoji: "💜",
    bg: "#7B2FBE",
    textColor: "#fff",
    border: "#5A189A",
    shadow: "0 4px 0 #5A189A",
    wa: `https://wa.me/${WA}?text=Halo%20Jogpro!%20Saya%20mau%20pesan%20Clickable%20warna%20Ungu`,
  },
  {
    name: "Hijau",
    emoji: "💚",
    bg: "#22C55E",
    textColor: "#fff",
    border: "#15803D",
    shadow: "0 4px 0 #15803D",
    wa: `https://wa.me/${WA}?text=Halo%20Jogpro!%20Saya%20mau%20pesan%20Clickable%20warna%20Hijau`,
  },
  {
    name: "Putih",
    emoji: "🤍",
    bg: "#FFF5E4",
    textColor: "#444",
    border: "#D4C5B0",
    shadow: "0 4px 0 #C8BAA6",
    wa: `https://wa.me/${WA}?text=Halo%20Jogpro!%20Saya%20mau%20pesan%20Clickable%20warna%20Putih`,
  },
];

/* ── Features ── */
const features = [
  {
    icon: "🖱️",
    title: "Clickable!",
    desc: "Bisa diklik-klik kayak mechanical keyboard sungguhan. Stres ilang, tangan senang!",
    bg: "linear-gradient(135deg,#FF006E,#C471ED)",
    darkText: false,
  },
  {
    icon: "✏️",
    title: "Custom Nama",
    desc: "Nama kamu, nama gebetan, atau kata favorit — huruf apapun bisa dibuat!",
    bg: "linear-gradient(135deg,#7B2FBE,#00B4D8)",
    darkText: false,
  },
  {
    icon: "💎",
    title: "Unik & Personal",
    desc: "Gantungan tas dengan identitasmu sendiri. Dijamin nggak bakal sama dengan punya orang lain!",
    bg: "linear-gradient(135deg,#FFE600,#FF9500)",
    darkText: true,
  },
  {
    icon: "🎒",
    title: "Cocok Untuk Semua",
    desc: "Tas sekolah, kuliah, kerja, ransel — pasang di mana saja, langsung keliatan aesthetic!",
    bg: "linear-gradient(135deg,#00B4D8,#22C55E)",
    darkText: true,
  },
];

/* ── Animations ── */
const fadeUp = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } };

/* ── WhatsApp SVG ── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── Sparkles decoration ── */
type SparkleItem = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
  size: number;
  color: string;
};

const sparkleItems: SparkleItem[] = [
  { top: "8%",  left: "4%",  delay: 0,   size: 26, color: "#FFE600" },
  { top: "15%", right: "5%", delay: 0.4, size: 20, color: "#FF006E" },
  { top: "60%", left: "4%",  delay: 0.8, size: 22, color: "#00B4D8" },
  { top: "70%", right: "6%", delay: 1.2, size: 18, color: "#FFE600" },
  { top: "38%", right: "3%", delay: 0.6, size: 20, color: "#ffffff" },
  { top: "50%", left: "2%",  delay: 1.0, size: 16, color: "#FF006E" },
];

function StarSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
    </svg>
  );
}

function Sparkles() {
  return (
    <>
      {sparkleItems.map((s, i) => (
        <span
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            top: s.top,
            bottom: s.bottom,
            left: s.left,
            right: s.right,
            animation: `sparkle-spin 3s ease-in-out ${s.delay}s infinite`,
            zIndex: 1,
          }}
        >
          <StarSVG size={s.size} color={s.color} />
        </span>
      ))}
    </>
  );
}

/* ═══════════════════════ MAIN PAGE ═══════════════════════ */
export default function GantunganTasPage() {
  const [nama, setNama] = useState("");
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);
  const [showNamaError, setShowNamaError] = useState(false);

  const namaClean = nama.trim().toUpperCase().replace(/[^A-Z0-9 ]/g, "");
  const hurufCount = namaClean.replace(/ /g, "").length;
  const validCount = Math.max(hurufCount, 3);
  const totalHarga = validCount * 5000;

  useEffect(() => {
    const fbq = (window as Window & { fbq?: Function }).fbq;
    fbq?.("track", "ViewContent", {
      content_ids: ["clickable-gantungan-tas"],
      content_name: "Clickable Gantungan Tas Custom Nama",
      content_type: "product",
      value: 45000,
      currency: "IDR",
    });
    const ttq = (window as Window & { ttq?: { track: Function } }).ttq;
    ttq?.track("ViewContent", {
      content_id: "clickable-gantungan-tas",
      content_name: "Clickable Gantungan Tas Custom Nama",
      content_type: "product",
      value: 45000,
      currency: "IDR",
    });

    const onWAClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a?.href.includes("wa.me")) return;
      fbq?.("track", "Contact");
      fbq?.("track", "InitiateCheckout", {
        content_ids: ["clickable-gantungan-tas"],
        content_name: "Clickable Gantungan Tas Custom Nama",
        content_type: "product",
        currency: "IDR",
        value: validCount * 5000,
        num_items: 1,
      });
      fbq?.("trackCustom", "WhatsAppClick", {
        page: location.pathname,
        text: a.innerText.trim(),
        product: "clickable-gantungan-tas",
      });
      ttq?.track("Contact", { content_name: a.innerText.trim(), content_type: "product" });
      ttq?.track("InitiateCheckout", {
        content_id: "clickable-gantungan-tas",
        content_name: "Clickable Gantungan Tas Custom Nama",
        currency: "IDR",
        value: validCount * 5000,
      });
    };
    document.addEventListener("click", onWAClick);
    return () => document.removeEventListener("click", onWAClick);
  }, []);

  const buildWaLink = (name: string, color: string) => {
    const text = `Halo Jogpro! Saya mau pesan Clickable gantungan tas custom nama ${name || "[NAMA]"} warna ${color}`;
    return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="overflow-x-hidden">

      {/* ═══════ HERO ═══════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#5B21B6 0%,#BE185D 50%,#F59E0B 100%)" }}
      >
        {/* Ambient blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "#FF006E", filter: "blur(90px)", animation: "blob-pulse 7s ease-in-out infinite", opacity: 0.3 }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "#00B4D8", filter: "blur(70px)", animation: "blob-pulse 9s ease-in-out 2s infinite", opacity: 0.3 }}
        />

        <Sparkles />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">

          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.5 }}
              className="inline-block text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5 text-black"
              style={{ background: "#FFE600" }}
            >
              ⌨️ Keycap × Gantungan Tas ⌨️
            </motion.span>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}
              className="font-black leading-none text-white mb-4 tracking-tight"
              style={{ fontSize: "clamp(3rem,9vw,5.5rem)", textShadow: "4px 4px 0 rgba(0,0,0,0.2)", fontFamily: "var(--font-nunito)" }}
            >
              CLICKABLE
              <br />
              <span style={{ color: "#FFE600" }}>Gantungan</span>
              <br />
              Tas Custom
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }}
              className="text-white/90 font-semibold mb-3"
              style={{ fontSize: "clamp(1rem,2.5vw,1.3rem)" }}
            >
              Custom nama sendiri, bisa diklik-klik! 🎮
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.25 }}
              className="text-white/75 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Gantungan tas berbentuk keycap mechanical keyboard — unik, personal, dan super satisfying buat ditekan. Cocok buat tas sekolah, kuliah, atau kerja!
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm text-white" style={{ background: "rgba(255,255,255,0.18)" }}>
                💰 Mulai Rp 15.000
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm text-white" style={{ background: "rgba(255,255,255,0.18)" }}>
                🎨 6 Pilihan Warna
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm text-white" style={{ background: "rgba(255,255,255,0.18)" }}>
                🖱️ Clickable!
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.35 }}
            >
              <a
                href="#preview-section"
                className="inline-flex items-center gap-3 font-black text-white rounded-full px-8 py-4 shadow-2xl transition-transform hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg,#7c3aed,#db2777)", boxShadow: "0 10px 36px rgba(123,47,190,0.45)", fontFamily: "var(--font-nunito)" }}
              >
                🔥 Pesan Sekarang — Rp 5.000/huruf
              </a>
              <p className="text-center text-sm text-white/70 mt-3">
                atau{" "}
                <a
                  href="#preview-section"
                  className="text-yellow-300 font-bold underline underline-offset-2 hover:text-yellow-100"
                >
                  bayar via QRIS 💳
                </a>
              </p>
              <p className="text-center text-sm text-white/50 mt-1">
                Ada pertanyaan?{" "}
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:underline"
                >
                  Chat WA 📱
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
              className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {colorOptions.map(c => (
                <span
                  key={c.name}
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: c.bg, color: c.textColor }}
                >
                  {c.emoji} {c.name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, x: 64 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1 flex justify-center relative max-w-sm lg:max-w-md w-full"
          >
            <div
              className="absolute inset-0 rounded-[2rem] scale-110 pointer-events-none"
              style={{ background: "rgba(255,255,255,0.2)", filter: "blur(36px)" }}
            />
            <img
              src="https://res.cloudinary.com/dejoaryri/image/upload/v1780453315/clickable_hero.png"
              alt="Clickable Gantungan Tas Custom Nama — Keycap Mechanical Keyboard di Tas Sekolah"
              className="relative w-full rounded-[2rem] object-cover"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.35)" }}
            />
            {/* Price badge */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }} animate={{ scale: 1, rotate: 12 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="absolute -top-5 -right-5 font-black text-center text-sm leading-snug px-4 py-3 rounded-full shadow-xl"
              style={{ background: "#FFE600", color: "#000", fontFamily: "var(--font-nunito)" }}
            >
              Rp 5.000<br />per huruf!
            </motion.div>
            {/* Keycap badge */}
            <motion.div
              initial={{ scale: 0, rotate: 10 }} animate={{ scale: 1, rotate: -8 }}
              transition={{ delay: 1.15, type: "spring", stiffness: 180 }}
              className="absolute -bottom-4 -left-4 text-xs font-black px-4 py-2 rounded-full text-white shadow-xl"
              style={{ background: "linear-gradient(135deg,#FF006E,#7B2FBE)" }}
            >
              ⌨️ Bisa Diklik!
            </motion.div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 lg:h-20">
            <path d="M0,72 C360,0 1080,72 1440,36 L1440,72 L0,72 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ═══════ CARA PESAN — INTERACTIVE ═══════ */}
      <section id="preview-section" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="font-black leading-tight mb-3"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontFamily: "var(--font-nunito)" }}
            >
              Coba Preview{" "}
              <span style={{ background: "linear-gradient(to right,#7B2FBE,#FF006E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Namamu!
              </span>
            </h2>
            <p className="text-gray-500 text-lg">Ketik nama → pilih warna → langsung order ✨</p>
          </motion.div>

          <motion.div
            variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-gray-100"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
          >
            {/* Fake macOS title bar */}
            <div className="px-6 py-3 flex items-center gap-2" style={{ background: "linear-gradient(135deg,#1A1A2E,#302b63)" }}>
              {(["#FF5F57", "#FEBC2E", "#28C840"] as const).map(c => (
                <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
              <span className="text-white/40 text-xs ml-2 font-mono">clickable-preview.tsx</span>
            </div>

            <div className="p-6 md:p-8" style={{ background: "#FAFAFA" }}>
              {/* Step 1 — Input nama */}
              <div className="mb-6">
                <label className="block text-sm font-black uppercase tracking-wider text-gray-700 mb-2">
                  ✏️ Step 1 — Ketik Namamu (maks. 10 huruf)
                  <span className="ml-2 text-red-500 text-xs normal-case font-bold tracking-normal">* Wajib diisi</span>
                </label>
                <input
                  type="text"
                  value={nama}
                  onChange={e => { setNama(e.target.value.slice(0, 10)); setShowNamaError(false); }}
                  placeholder="Contoh: AYLA"
                  className={`w-full px-5 py-4 rounded-2xl border-2 focus:outline-none text-xl font-black uppercase tracking-widest transition-colors bg-white ${showNamaError ? "border-red-400 bg-red-50 focus:border-red-500" : "border-gray-200 focus:border-purple-500"}`}
                  style={{ fontFamily: "var(--font-nunito)" }}
                  id="input-nama"
                />
                {showNamaError && (
                  <p className="text-red-500 text-sm font-bold mt-2">⚠️ Nama wajib diisi sebelum pesan!</p>
                )}
              </div>

              {/* Step 2 — Pilih warna */}
              <div className="mb-8">
                <p className="text-sm font-black uppercase tracking-wider text-gray-700 mb-3">
                  🎨 Step 2 — Pilih Warna
                </p>
                <div className="flex flex-wrap gap-4">
                  {colorOptions.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className="flex flex-col items-center gap-1.5 transition-transform hover:scale-110 active:scale-95"
                      aria-label={`Pilih warna ${c.name}`}
                    >
                      <div
                        className="w-10 h-10 rounded-full transition-all duration-200"
                        style={{
                          background: c.bg,
                          border: selectedColor.name === c.name ? "3px solid #7B2FBE" : `2px solid ${c.border}`,
                          boxShadow: selectedColor.name === c.name
                            ? "0 0 0 3px rgba(123,47,190,0.3), 0 4px 12px rgba(0,0,0,0.2)"
                            : "0 2px 8px rgba(0,0,0,0.1)",
                          transform: selectedColor.name === c.name ? "scale(1.25)" : "scale(1)",
                        }}
                      />
                      <span className={`text-xs font-bold transition-colors ${selectedColor.name === c.name ? "text-purple-700" : "text-gray-500"}`}>
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Keycap preview */}
              <div className="mb-8">
                <p className="text-sm font-black uppercase tracking-wider text-gray-700 mb-3">
                  👀 Step 3 — Ini Preview Gantunganmu!
                </p>
                <div
                  className="min-h-28 rounded-2xl p-6 flex flex-wrap justify-center items-center gap-2"
                  style={{ background: "linear-gradient(135deg,#1A1A2E,#302b63)" }}
                >
                  {namaClean.length > 0 ? (
                    namaClean.split("").map((char, i) =>
                      char === " " ? (
                        <div key={`sp-${i}`} className="w-4" />
                      ) : (
                        <motion.div
                          key={`${char}-${i}-${selectedColor.name}`}
                          initial={{ scale: 0, rotate: -10 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300, delay: i * 0.04 }}
                          whileTap={{ scale: 0.85, y: 3 }}
                          className="w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl select-none cursor-pointer"
                          style={{
                            background: selectedColor.bg,
                            color: selectedColor.textColor,
                            boxShadow: `${selectedColor.shadow}, 0 8px 16px rgba(0,0,0,0.3)`,
                            fontFamily: "var(--font-nunito)",
                          }}
                        >
                          {char}
                        </motion.div>
                      )
                    )
                  ) : (
                    <p className="text-white/40 text-sm font-mono">// ketik nama di atas untuk preview...</p>
                  )}
                </div>
                {namaClean.length > 0 && (
                  <p className="text-center text-gray-400 text-xs mt-2">
                    * Klik tiap keycap untuk ngerasain sensasi clickable-nya! 😄
                  </p>
                )}
              </div>

              {/* Price estimate + CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div
                  className="flex-1 w-full rounded-2xl px-5 py-4 text-center sm:text-left"
                  style={{ background: "linear-gradient(135deg,rgba(123,47,190,0.08),rgba(255,0,110,0.08))", border: "1.5px solid rgba(123,47,190,0.15)" }}
                >
                  {hurufCount > 0 ? (
                    <>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Estimasi harga</p>
                      <p className="font-black text-2xl" style={{ fontFamily: "var(--font-nunito)", color: "#7B2FBE" }}>
                        Rp {totalHarga.toLocaleString("id-ID")}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {hurufCount < 3
                          ? `Min. 3 huruf (${hurufCount} huruf → dihitung ${validCount} huruf)`
                          : `${hurufCount} huruf × Rp 5.000`}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-400 text-sm">Mulai dari <strong className="text-purple-600">Rp 10.000</strong> (min. 3 huruf)</p>
                  )}
                </div>

                {namaClean.length === 0 ? (
                  <button
                    onClick={() => { setShowNamaError(true); document.getElementById("input-nama")?.focus(); }}
                    className="flex items-center gap-2 font-black text-white rounded-full px-7 py-4 text-sm shadow-xl whitespace-nowrap opacity-70 cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg,#9ca3af,#6b7280)",
                      fontFamily: "var(--font-nunito)",
                    }}
                  >
                    ✏️ Isi nama dulu, Kak!
                  </button>
                ) : (
                  <a
                    href={`/checkout?produk=Clickable%20Gantungan%20Tas&harga=${totalHarga}&nama=${namaClean}&warna=${selectedColor.name}`}
                    className="flex items-center gap-2 font-black text-white rounded-full px-7 py-4 text-sm shadow-xl transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg,#7c3aed,#db2777)",
                      boxShadow: "0 8px 28px rgba(123,47,190,0.45)",
                      fontFamily: "var(--font-nunito)",
                    }}
                  >
                    🔥 Pesan Sekarang
                  </a>
                )}
                {namaClean.length > 0 && (
                  <p className="text-center text-xs text-gray-400 mt-2">
                    atau{" "}
                    <a
                      href={`/checkout?produk=Clickable%20Gantungan%20Tas&harga=${totalHarga}&nama=${namaClean}&warna=${selectedColor.name}`}
                      className="text-purple-600 font-bold underline underline-offset-2 hover:text-purple-800"
                    >
                      bayar via QRIS 💳
                    </a>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section className="py-24" style={{ background: "linear-gradient(160deg,#F8F4FF 0%,#FFF0F8 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="font-black leading-tight mb-3"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontFamily: "var(--font-nunito)" }}
            >
              Lihat Produk{" "}
              <span style={{ background: "linear-gradient(to right,#FF006E,#7B2FBE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Aslinya!
              </span>
            </h2>
            <p className="text-gray-500 text-lg">Cocok digantung di semua jenis tas — ransel sekolah, handbag, tote, pouch, sampai kunci mobil! 🎒</p>
          </motion.div>

          <motion.div
            variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative group max-w-3xl mx-auto"
          >
            <img
              src="https://res.cloudinary.com/dejoaryri/image/upload/v1780465268/clickable_usage_collage.jpg"
              alt="Clickable Gantungan Tas — Cocok untuk berbagai jenis tas"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-5"
              style={{ background: "linear-gradient(to top,rgba(0,0,0,0.75),transparent)" }}
            >
              <p className="text-white font-black text-lg" style={{ fontFamily: "var(--font-nunito)" }}>
                🎒 Ransel · 👜 Handbag · 🛍️ Tote · 👛 Pouch · 🔑 Gantungan Kunci
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0f0c29 0%,#302b63 55%,#24243e 100%)" }}
      >
        <Sparkles />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="font-black text-white leading-tight mb-3"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontFamily: "var(--font-nunito)" }}
            >
              Kenapa <span style={{ color: "#FFE600" }}>Clickable</span> Beda?
            </h2>
            <p className="text-white/50 text-lg">4 alasan kenapa ini harus jadi gantungan tas kamu 🔥</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="rounded-3xl p-8"
                style={{ background: f.bg, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
              >
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3
                  className={`text-2xl font-black mb-2 ${f.darkText ? "text-gray-900" : "text-white"}`}
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {f.title}
                </h3>
                <p className={f.darkText ? "text-gray-700 leading-relaxed" : "text-white/80 leading-relaxed"}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section className="py-24" style={{ background: "linear-gradient(135deg,#F8F4FF 0%,#FFF0F8 100%)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="font-black leading-tight mb-3"
              style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontFamily: "var(--font-nunito)" }}
            >
              Harga{" "}
              <span style={{ background: "linear-gradient(to right,#7B2FBE,#00B4D8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Terjangkau!
              </span>
            </h2>
            <p className="text-gray-500 text-lg">Bayar per huruf, makin banyak huruf makin personal! 💎</p>
          </motion.div>

          {/* Main price card */}
          <motion.div
            variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 text-center mb-8 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#5B21B6 0%,#BE185D 55%,#F59E0B 100%)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(255,255,255,0.4) 30px,rgba(255,255,255,0.4) 31px),repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(255,255,255,0.4) 30px,rgba(255,255,255,0.4) 31px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-white/70 text-sm uppercase tracking-widest mb-2">Harga per huruf</p>
              <p
                className="font-black leading-none mb-2"
                style={{ fontSize: "clamp(3.5rem,10vw,6rem)", fontFamily: "var(--font-nunito)" }}
              >
                Rp 5.000
              </p>
              <p className="text-white/80 text-lg mb-10">per huruf · minimum 3 huruf</p>

              {/* Example price table */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                {[
                  { label: "3 huruf", price: "Rp 15.000", chars: ["A", "Y", "U"] },
                  { label: "4 huruf", price: "Rp 20.000", chars: ["A", "Y", "U", "N"] },
                  { label: "5 huruf", price: "Rp 25.000", chars: ["N", "A", "D", "I", "A"] },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl px-3 py-4"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                  >
                    <div className="flex justify-center gap-1 flex-wrap mb-3">
                      {item.chars.map((ch, j) => (
                        <div
                          key={j}
                          className="w-7 h-7 rounded flex items-center justify-center font-black text-xs"
                          style={{ background: "#FFE600", color: "#000", boxShadow: "0 2px 0 #B8860B", fontFamily: "var(--font-nunito)" }}
                        >
                          {ch}
                        </div>
                      ))}
                    </div>
                    <p className="text-white/60 text-xs mb-0.5">{item.label}</p>
                    <p className="text-white font-black text-sm" style={{ fontFamily: "var(--font-nunito)" }}>{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-black text-white text-lg rounded-full px-10 py-5 shadow-2xl transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg,#7B2FBE,#FF006E)",
                boxShadow: "0 12px 40px rgba(123,47,190,0.4)",
                fontFamily: "var(--font-nunito)",
              }}
            >
              <WhatsAppIcon className="w-6 h-6" />
              Chat Konsultasi 💬
            </a>
            <p className="text-gray-400 text-sm mt-4">💬 Respons cepat · Bebas konsultasi</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section
        className="py-28 relative overflow-hidden text-center"
        style={{ background: "linear-gradient(135deg,#FF006E 0%,#7B2FBE 50%,#00B4D8 100%)" }}
      >
        <Sparkles />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(255,230,0,0.15), transparent 70%)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.65 }}>
            {/* Fake keycap row decoration */}
            <div className="flex justify-center gap-2 flex-wrap mb-8">
              {"CLICKABLE".split("").map((ch, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                  whileTap={{ y: 4, scale: 0.9 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm cursor-pointer select-none"
                  style={{
                    background: "#FFE600",
                    color: "#000",
                    boxShadow: "0 4px 0 #B8860B",
                    fontFamily: "var(--font-nunito)",
                  }}
                >
                  {ch}
                </motion.div>
              ))}
            </div>

            <h2
              className="font-black text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2.2rem,6vw,4.2rem)", textShadow: "3px 3px 0 rgba(0,0,0,0.2)", fontFamily: "var(--font-nunito)" }}
            >
              Gantungan Tas Paling<br />
              <span style={{ color: "#FFE600" }}>Unik di Sekolah!</span> 🎒
            </h2>

            <p className="text-white/80 text-xl mb-10">
              Custom nama, warna favorit, bisa diklik-klik!<br />
              <span className="font-black">Mulai Rp 15.000 aja!</span>
            </p>

            <motion.a
              href="#preview-section"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 font-black text-lg rounded-full px-10 py-5 bg-white text-purple-700 shadow-2xl hover:bg-yellow-300 transition-colors"
              style={{ fontFamily: "var(--font-nunito)", boxShadow: "0 12px 48px rgba(0,0,0,0.25)" }}
            >
              🔥 Pesan Sekarang
            </motion.a>
            <p className="text-center text-sm text-white/60 mt-2">
              atau{" "}
              <a
                href="#preview-section"
                className="text-yellow-300 font-bold underline underline-offset-2 hover:text-yellow-100"
              >
                bayar via QRIS 💳
              </a>
            </p>

            <p className="text-white/55 text-sm mt-2">
              💬 Ada pertanyaan?{}
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="text-yellow-300 font-bold underline underline-offset-2 hover:text-yellow-100">Chat WA 📱</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="py-12 text-center text-white" style={{ background: "#0f0c29" }}>
        <p className="font-black text-xl mb-1" style={{ fontFamily: "var(--font-nunito)" }}>
          Jogpro — Clickable Gantungan Tas
        </p>
        <p className="text-white/50 text-sm">Custom Nama · Bisa Diklik · Super Unik! ⌨️</p>
        <p className="text-white/25 text-xs mt-5">
          © 2024 Jogpro. Dibuat dengan ❤️ di Indonesia.
        </p>
      </footer>

      {/* ═══════ FLOATING WA BUTTON ═══════ */}
      <motion.a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 160 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 text-white font-bold rounded-full px-5 py-4"
        style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,0.55)", fontFamily: "var(--font-nunito)" }}
      >
        <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
        <span className="hidden sm:inline text-sm font-black">Order WhatsApp</span>
      </motion.a>
    </div>
  );
}
