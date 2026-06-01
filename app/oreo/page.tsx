"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

/* ── WhatsApp links ── */
const WA_DEFAULT =
  "https://wa.me/628972523968?text=Halo%20Jogpro!%20Saya%20mau%20pesan%20Oreo%20Cable%20Winder";
const WA_HITAM =
  "https://wa.me/628972523968?text=Halo!%20Saya%20mau%20pesan%20Oreo%20Cable%20Winder%20warna%20Hitam";
const WA_PINK =
  "https://wa.me/628972523968?text=Halo!%20Saya%20mau%20pesan%20Oreo%20Cable%20Winder%20warna%20Pink";
const WA_BIRU =
  "https://wa.me/628972523968?text=Halo!%20Saya%20mau%20pesan%20Oreo%20Cable%20Winder%20warna%20Biru%20Muda";

/* ── Static data ── */
type Product = {
  name: string;
  label: string;
  img: string;
  wa: string;
  btnGradient: string;
  hoverShadow: string;
};

const products: Product[] = [
  {
    name: "Hitam",
    label: "⚫ Classic",
    img: "https://res.cloudinary.com/dejoaryri/image/upload/v1780124351/tbqewyyovshrh7b9zgif.jpg",
    wa: WA_HITAM,
    btnGradient: "linear-gradient(135deg,#FF006E 0%,#1a1a2e 100%)",
    hoverShadow: "0 24px 60px rgba(255,0,110,0.35)",
  },
  {
    name: "Pink",
    label: "🩷 Cute",
    img: "https://res.cloudinary.com/dejoaryri/image/upload/v1780124353/ph2quvrf6mnopsj9dolx.jpg",
    wa: WA_PINK,
    btnGradient: "linear-gradient(135deg,#FF006E 0%,#C471ED 100%)",
    hoverShadow: "0 24px 60px rgba(255,0,110,0.45)",
  },
  {
    name: "Biru Muda",
    label: "🩵 Cool",
    img: "https://res.cloudinary.com/dejoaryri/image/upload/v1780124357/elwycvukkfjqd1iiy4di.jpg",
    wa: WA_BIRU,
    btnGradient: "linear-gradient(135deg,#00B4D8 0%,#7B2FBE 100%)",
    hoverShadow: "0 24px 60px rgba(0,180,216,0.45)",
  },
];

type Feature = {
  icon: string;
  title: string;
  desc: string;
  bg: string;
  dark?: boolean;
};

const features: Feature[] = [
  {
    icon: "🎀",
    title: "Rapi & Praktis",
    desc: "Gulung kabel bebas kusut, simpan dengan mudah",
    bg: "linear-gradient(135deg,#FF006E,#C471ED)",
  },
  {
    icon: "👜",
    title: "Mini & Portable",
    desc: "Masuk saku, bawa ke mana saja tanpa ribet",
    bg: "linear-gradient(135deg,#7B2FBE,#302b63)",
  },
  {
    icon: "🛡️",
    title: "Aman & Awet",
    desc: "Material berkualitas tahan lama, kabel tetap terlindungi",
    bg: "linear-gradient(135deg,#FFE600,#FF9500)",
    dark: true,
  },
  {
    icon: "🔌",
    title: "Universal",
    desc: "USB, Type-C, Lightning semua bisa dipakai",
    bg: "linear-gradient(135deg,#00B4D8,#7B2FBE)",
  },
];

const steps = [
  { no: "01", emoji: "📦", text: "Ambil kabel yang mau dirapihin" },
  { no: "02", emoji: "🌀", text: "Gulung kabel di tengah Oreo" },
  { no: "03", emoji: "✨", text: "Simpan, rapi seketika!" },
];

const stepGradients = [
  "linear-gradient(135deg,#FF006E,#7B2FBE)",
  "linear-gradient(135deg,#7B2FBE,#00B4D8)",
  "linear-gradient(135deg,#00B4D8,#FFE600)",
];

/* ── Sparkle decoration ── */
type SparkleItem = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
  size: number;
  color: string;
};

const sparkles: SparkleItem[] = [
  { top: "8%",  left: "4%",  delay: 0,    size: 28, color: "#FFE600" },
  { top: "14%", right: "6%", delay: 0.4,  size: 20, color: "#FF006E" },
  { top: "65%", left: "5%",  delay: 0.8,  size: 24, color: "#00B4D8" },
  { top: "72%", right: "7%", delay: 1.2,  size: 18, color: "#FFE600" },
  { top: "40%", right: "3%", delay: 0.6,  size: 22, color: "#ffffff" },
  { top: "52%", left: "2%",  delay: 1.0,  size: 16, color: "#FF006E" },
  { top: "27%", left: "46%", delay: 0.2,  size: 14, color: "#00B4D8" },
  { bottom: "12%", left: "38%", delay: 1.5, size: 20, color: "#FFE600" },
];

function StarIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
    </svg>
  );
}

function Sparkles() {
  return (
    <>
      {sparkles.map((s, i) => (
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
          <StarIcon size={s.size} color={s.color} />
        </span>
      ))}
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.82 },
  show:   { opacity: 1, scale: 1    },
};

/* ═══════════════════════════════════
   Main page
═══════════════════════════════════ */
export default function Home() {
  /* ── Pixel: ViewContent on mount ── */
  useEffect(() => {
    // Meta Pixel
    const fbq = (window as any).fbq;
    if (fbq) {
      fbq('track', 'ViewContent', {
        content_ids: ['oreo-cable-winder'],
        content_name: 'Oreo Cable Winder',
        content_type: 'product',
        value: 20000,
        currency: 'IDR',
      });
    }
    // TikTok Pixel
    const ttq = (window as any).ttq;
    if (ttq) {
      ttq.track('ViewContent', {
        content_id: 'oreo-cable-winder',
        content_name: 'Oreo Cable Winder Landing Page',
        content_type: 'product',
        value: 20000,
        currency: 'IDR',
      });
    }
  }, []);

  /* ── Pixel: Contact + WhatsAppClick on WA link click ── */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.getAttribute('href')?.includes('wa.me')) {
        // Meta Pixel
        const fbq = (window as any).fbq;
        if (fbq) {
          fbq('track', 'Contact');
          fbq('trackCustom', 'WhatsAppClick', {
            page: window.location.pathname,
            text: target.innerText.trim(),
          });
        }
        // TikTok Pixel
        const ttq = (window as any).ttq;
        if (ttq) {
          ttq.track('Contact', {
            content_name: target.innerText.trim(),
            content_type: 'product',
          });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ═══════ HERO ═══════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C471ED 55%,#F64F59 100%)" }}
      >
        {/* Ambient blobs */}
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "#FFE600",
            filter: "blur(80px)",
            animation: "blob-pulse 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: "#FF006E",
            filter: "blur(70px)",
            animation: "blob-pulse 9s ease-in-out 2s infinite",
          }}
        />

        <Sparkles />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">

          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-6 text-black"
              style={{ background: "#FFE600" }}
            >
              ✨ Produk Cetak 3D Lokal ✨
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black leading-none text-white mb-6 tracking-tight"
              style={{
                fontSize: "clamp(3.2rem, 9vw, 6rem)",
                textShadow: "4px 4px 0 rgba(0,0,0,0.18)",
                fontFamily: "var(--font-nunito)",
              }}
            >
              OREO
              <br />
              <span style={{ color: "#FFE600" }}>Cable</span>
              <br />
              Winder
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 font-semibold mb-10"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
            >
              Rapikan Kabel, Hidup Lebih Rapi! 🎉
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative inline-block"
            >
              {/* Free shipping tag nempel di tombol */}
              <span
                className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-black px-3 py-1 rounded-full text-black whitespace-nowrap z-10 pointer-events-none"
                style={{
                  background: "#4ade80",
                  boxShadow: "0 2px 10px rgba(74,222,128,0.5)",
                  rotate: "-2deg",
                  transform: "translateX(-50%) rotate(-2deg)",
                }}
              >
                🚚 Gratis Ongkir!
              </span>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-black text-base text-black rounded-full px-8 py-4 shadow-2xl transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: "#FFE600",
                  boxShadow: "0 10px 36px rgba(255,230,0,0.55)",
                  fontFamily: "var(--font-nunito)",
                }}
              >
                🛒 Order Sekarang — Rp 20.000
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { e: "⚫", label: "Hitam",     color: "#fff" },
                { e: "🩷", label: "Pink",      color: "#FFB3D1" },
                { e: "🩵", label: "Biru Muda", color: "#80E8FF" },
              ].map((c) => (
                <span
                  key={c.label}
                  className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.15)", color: c.color }}
                >
                  {c.e} {c.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — product poster */}
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex-1 flex justify-center relative max-w-sm lg:max-w-md w-full"
          >
            {/* Glow halo */}
            <div
              className="absolute inset-0 rounded-[2rem] scale-110 pointer-events-none"
              style={{ background: "rgba(255,255,255,0.22)", filter: "blur(36px)" }}
            />
            <img
              src="https://res.cloudinary.com/dejoaryri/image/upload/v1780123326/lkeennsiv4p8uz3aaapm.jpg"
              alt="Jogpro Oreo Cable Winder — Hitam, Pink, Biru Muda"
              className="relative w-full rounded-[2rem] object-cover"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.32)" }}
            />

            {/* Floating price badge */}
            <motion.div
              initial={{ scale: 0, rotate: -12 }}
              animate={{ scale: 1, rotate: 14 }}
              transition={{ delay: 0.95, type: "spring", stiffness: 220 }}
              className="absolute -top-5 -right-5 font-black text-center text-sm leading-snug px-4 py-3 rounded-full shadow-xl"
              style={{
                background: "#FFE600",
                color: "#000",
                fontFamily: "var(--font-nunito)",
              }}
            >
              Rp 20.000<br />per buah!
            </motion.div>

            {/* Floating 3D badge */}
            <motion.div
              initial={{ scale: 0, rotate: 10 }}
              animate={{ scale: 1, rotate: -10 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 180 }}
              className="absolute -bottom-4 -left-4 text-xs font-black px-4 py-2 rounded-full text-white shadow-xl"
              style={{ background: "linear-gradient(135deg,#FF006E,#7B2FBE)" }}
            >
              🖨️ Cetak 3D Lokal
            </motion.div>

          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg
            viewBox="0 0 1440 72"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-14 lg:h-20"
          >
            <path d="M0,72 C360,0 1080,72 1440,36 L1440,72 L0,72 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ═══════ COLOR PICKER ═══════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="font-black leading-tight mb-3"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontFamily: "var(--font-nunito)",
              }}
            >
              Pilih Warna{" "}
              <span
                style={{
                  background: "linear-gradient(to right,#7B2FBE,#FF006E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Favoritmu!
              </span>
            </h2>
            <p className="text-gray-500 text-lg">
              3 pilihan warna yang super cute 💕
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: p.hoverShadow,
                }}
                className="group bg-white rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
              >
                {/* Product image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <img
                    src={p.img}
                    alt={`Oreo Cable Winder ${p.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    className="absolute top-3 left-3 text-white text-xs font-black px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.48)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {p.label}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3
                    className="text-2xl font-black text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Oreo {p.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5">
                    Cetak 3D · USB, Type-C, Lightning
                  </p>
                  <div className="relative">
                    {/* Free shipping tag nempel di tombol kartu */}
                    <span
                      className="absolute -top-3.5 left-1/2 text-xs font-black px-2.5 py-0.5 rounded-full text-black whitespace-nowrap z-10 pointer-events-none"
                      style={{
                        background: "#4ade80",
                        boxShadow: "0 2px 8px rgba(74,222,128,0.45)",
                        transform: "translateX(-50%) rotate(-1.5deg)",
                      }}
                    >
                      🚚 Gratis Ongkir!
                    </span>
                    <a
                      href={p.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-white font-black py-3 rounded-2xl text-sm transition-opacity hover:opacity-90"
                      style={{
                        background: p.btnGradient,
                        fontFamily: "var(--font-nunito)",
                      }}
                    >
                      Pilih Warna Ini 🛒
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0f0c29 0%,#302b63 55%,#24243e 100%)" }}
      >
        {/* Subtle sparkle on dark background */}
        <Sparkles />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="font-black text-white leading-tight mb-3"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontFamily: "var(--font-nunito)",
              }}
            >
              Kenapa Harus{" "}
              <span style={{ color: "#FFE600" }}>Oreo?</span>
            </h2>
            <p className="text-white/50 text-lg">
              Semua yang kamu butuhkan ada di sini 🔥
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="rounded-3xl p-8"
                style={{
                  background: f.bg,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3
                  className={`text-2xl font-black mb-2 ${f.dark ? "text-gray-900" : "text-white"}`}
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {f.title}
                </h3>
                <p className={`leading-relaxed ${f.dark ? "text-gray-700" : "text-white/80"}`}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW TO USE ═══════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2
              className="font-black leading-tight mb-3"
              style={{
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontFamily: "var(--font-nunito)",
              }}
            >
              Cara Pakainya{" "}
              <span
                style={{
                  background: "linear-gradient(to right,#FF006E,#7B2FBE)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Gampang!
              </span>
            </h2>
            <p className="text-gray-500 text-lg">
              3 langkah mudah, kabel langsung rapi ✨
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.no}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 shadow-xl"
                  style={{
                    background: stepGradients[i],
                    boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
                  }}
                >
                  {step.emoji}
                </div>
                <p
                  className="text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: "#C471ED" }}
                >
                  Langkah {step.no}
                </p>
                <p
                  className="text-gray-900 font-bold text-lg leading-snug"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dark poster showcase */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative max-w-lg w-full">
              <div
                className="absolute inset-0 rounded-3xl scale-105 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg,#7B2FBE,#FF006E)",
                  filter: "blur(28px)",
                  opacity: 0.35,
                }}
              />
              <img
              src="https://res.cloudinary.com/dejoaryri/image/upload/v1780124051/ozytfrgizq0zquxaaqqq.jpg"
              alt="Jogpro Oreo Cable Winder — Poster Colorful"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#FF006E 0%,#7B2FBE 50%,#00B4D8 100%)",
        }}
      >
        <Sparkles />

        {/* Glow blobs */}
        <div
          className="absolute top-0 left-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "#FFE600",
            filter: "blur(100px)",
            animation: "blob-pulse 8s ease-in-out infinite",
            opacity: 0.15,
            transform: "translateX(-50%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2
              className="font-black text-white leading-tight mb-5"
              style={{
                fontSize: "clamp(2.2rem,6vw,4.2rem)",
                textShadow: "3px 3px 0 rgba(0,0,0,0.18)",
                fontFamily: "var(--font-nunito)",
              }}
            >
              Mau Kabel Rapi
              <br />
              dengan Gaya? 🎉
            </h2>

            <p className="text-white/80 text-xl mb-8">
              Cetak 3D lokal, kualitas premium, harga bersahabat!
            </p>

            {/* Price card */}
            <div
              className="inline-block rounded-2xl px-10 py-6 mb-10"
              style={{
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(16px)",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}
            >
              <p className="text-white/65 text-xs uppercase tracking-widest mb-1">
                Harga spesial
              </p>
              <p
                className="font-black"
                style={{
                  fontSize: "3.5rem",
                  color: "#FFE600",
                  fontFamily: "var(--font-nunito)",
                  lineHeight: 1,
                }}
              >
                Rp 20.000
              </p>
              <p className="text-white/60 text-sm mt-1">per buah · free konsultasi</p>
            </div>

            <div className="flex justify-center">
              <div className="relative inline-block">
                {/* Free shipping tag nempel di tombol final CTA */}
                <span
                  className="absolute -top-4 left-1/2 text-xs font-black px-3 py-1 rounded-full text-black whitespace-nowrap z-10 pointer-events-none"
                  style={{
                    background: "#4ade80",
                    boxShadow: "0 2px 10px rgba(74,222,128,0.5)",
                    transform: "translateX(-50%) rotate(-2deg)",
                  }}
                >
                  🚚 Gratis Ongkir!
                </span>
                <motion.a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 font-black text-lg rounded-full px-10 py-5 shadow-2xl transition-colors bg-white hover:bg-yellow-400"
                  style={{
                    color: "#1a1a1a",
                    fontFamily: "var(--font-nunito)",
                    boxShadow: "0 12px 48px rgba(0,0,0,0.25)",
                  }}
                >
                  <WhatsAppIcon className="w-6 h-6 text-green-500" />
                  Order via WhatsApp
                </motion.a>
              </div>
            </div>

            <p className="text-white/55 text-sm mt-6">
              💬 Chat langsung, respons cepat!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer
        className="py-12 text-center text-white"
        style={{ background: "#0f0c29" }}
      >
        <p
          className="font-black text-xl mb-1"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Jogpro Oreo Cable Winder
        </p>
        <p className="text-white/50 text-sm">Rapikan Kabel, Hidup Lebih Rapi! ✨</p>
        <p className="text-white/25 text-xs mt-5">
          © 2024 Jogpro. Dicetak dengan ❤️ di Indonesia.
        </p>
      </footer>

      {/* ═══════ FLOATING WHATSAPP BUTTON ═══════ */}
      <motion.a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 160 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 text-white font-bold rounded-full px-5 py-4"
        style={{
          background: "#25D366",
          boxShadow: "0 8px 32px rgba(37,211,102,0.55)",
          fontFamily: "var(--font-nunito)",
        }}
      >
        <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
        <span className="hidden sm:inline text-sm font-black">
          Order WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
