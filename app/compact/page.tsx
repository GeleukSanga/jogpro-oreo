"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const WA = "628972523968";
const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const variants = [
  { name: "Hitam", label: "⚫ Classic", img: "/compact/black.jpg", text: "Halo Jogpro! Saya mau pesan Compact Cable Winder warna Hitam" },
  { name: "Pink", label: "🩷 Cute", img: "/compact/pink.jpg", text: "Halo Jogpro! Saya mau pesan Compact Cable Winder warna Pink" },
  { name: "Biru Muda", label: "🩵 Cool", img: "/compact/blue.jpg", text: "Halo Jogpro! Saya mau pesan Compact Cable Winder warna Biru Muda" },
];

const features = [
  { icon: "🔄", title: "Tinggal Putar", desc: "Gulung kabel lebih rapi tanpa ribet." },
  { icon: "📦", title: "Compact", desc: "Ukuran kecil, mudah masuk tas dan pouch." },
  { icon: "✨", title: "Lebih Estetik", desc: "Desain clean buat meja kerja dan desk setup." },
  { icon: "🔌", title: "Universal", desc: "Cocok untuk semua tipe kabel max 1.5 meter." },
];

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } };

function WhatsAppIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}

export default function CompactPage() {
  useEffect(() => {
    const fbq = (window as any).fbq;
    fbq?.("track", "ViewContent", { content_ids: ["compact-cable-winder"], content_name: "Compact Cable Winder", content_type: "product", value: 20000, currency: "IDR" });
    const ttq = (window as any).ttq;
    ttq?.track("ViewContent", { content_id: "compact-cable-winder", content_name: "Compact Cable Winder", content_type: "product", value: 20000, currency: "IDR" });

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a?.href.includes("wa.me")) return;
      fbq?.("track", "Contact");
      fbq?.("trackCustom", "WhatsAppClick", { page: location.pathname, text: a.innerText.trim() });
      ttq?.track("Contact", { content_name: a.innerText.trim(), content_type: "product" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return <main className="overflow-x-hidden bg-white">
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg,#00B4D8 0%,#7B2FBE 52%,#FF006E 100%)" }}>
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: "#FFE600" }} />
      <div className="absolute bottom-24 right-10 w-80 h-80 rounded-full blur-3xl opacity-25" style={{ background: "#FFB3D1" }} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="text-center lg:text-left">
          <motion.span variants={fadeUp} initial="hidden" animate="show" className="inline-block text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-6 text-black" style={{ background: "#FFE600" }}>✨ Cable Winder Baru ✨</motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .1 }} className="font-black leading-none text-white mb-6" style={{ fontSize: "clamp(3rem,9vw,6rem)", textShadow: "4px 4px 0 rgba(0,0,0,.18)", fontFamily: "var(--font-nunito)" }}>COMPACT<br/><span style={{ color: "#FFE600" }}>Cable</span><br/>Winder</motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .2 }} className="text-white/90 font-semibold mb-4" style={{ fontSize: "clamp(1.1rem,2.4vw,1.35rem)" }}>Putar. Simpan. Rapi. 🎀</motion.p>
          <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .25 }} className="text-white/75 max-w-xl mx-auto lg:mx-0 mb-10">Cable winder compact buat meja rapi & kabel nggak kusut — kecil, cantik, tinggal putar. Cocok semua tipe kabel max 1.5 meter.</motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .35 }} className="relative inline-block">
            <span className="absolute -top-4 left-1/2 text-xs font-black px-3 py-1 rounded-full text-black whitespace-nowrap z-10" style={{ background: "#4ade80", transform: "translateX(-50%) rotate(-2deg)" }}>🚚 Gratis Ongkir Pulau Jawa!</span>
            <a href={waLink("Halo Jogpro! Saya mau pesan Compact Cable Winder")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-black rounded-full px-8 py-4 shadow-2xl transition-transform hover:scale-105" style={{ background: "#FFE600", fontFamily: "var(--font-nunito)" }}><WhatsAppIcon className="w-5 h-5 text-green-600" /> Order Sekarang — Rp 20.000</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} className="relative max-w-md mx-auto">
          <div className="absolute inset-0 rounded-[2rem] scale-105 blur-3xl bg-white/30" />
          <img src="/compact/showcase.jpg" alt="Compact Cable Winder varian Hitam, Pink, Biru Muda" className="relative w-full rounded-[2rem] shadow-2xl" />
          <div className="absolute -top-5 -right-5 font-black text-center text-sm px-4 py-3 rounded-full shadow-xl bg-yellow-300 text-black" style={{ fontFamily: "var(--font-nunito)" }}>Rp 20.000<br/>per buah</div>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
          <h2 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontFamily: "var(--font-nunito)" }}>Pilih Warna <span style={{ background: "linear-gradient(to right,#00B4D8,#FF006E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Favoritmu</span></h2>
          <p className="text-gray-500 text-lg">3 varian warna aesthetic untuk kabel harian kamu.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {variants.map((p, i) => <motion.div key={p.name} variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i*.12 }} whileHover={{ y: -10, scale: 1.02 }} className="rounded-3xl overflow-hidden bg-white shadow-xl">
            <div className="relative aspect-square overflow-hidden"><img src={p.img} alt={`Compact Cable Winder ${p.name}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" /><span className="absolute top-3 left-3 text-white text-xs font-black px-3 py-1 rounded-full bg-black/50 backdrop-blur">{p.label}</span></div>
            <div className="p-6"><h3 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: "var(--font-nunito)" }}>Compact {p.name}</h3><p className="text-gray-400 text-sm mb-5">Twist-to-wind · Max kabel 1.5m</p><a href={waLink(p.text)} target="_blank" rel="noopener noreferrer" className="block text-center text-white font-black py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-pink-500">Pilih Warna Ini 🛒</a></div>
          </motion.div>)}
        </div>
      </div>
    </section>

    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#0f0c29 0%,#302b63 55%,#24243e 100%)" }}>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14"><h2 className="font-black text-white mb-3" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontFamily: "var(--font-nunito)" }}>Kenapa Harus <span style={{ color: "#00B4D8" }}>Compact?</span></h2><p className="text-white/55 text-lg">Simple, indah, dan fungsional.</p></motion.div>
        <div className="grid sm:grid-cols-2 gap-6">{features.map((f, i) => <motion.div key={f.title} variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i*.1 }} className="rounded-3xl p-8 bg-white/10 border border-white/10 backdrop-blur"><div className="text-5xl mb-4">{f.icon}</div><h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "var(--font-nunito)" }}>{f.title}</h3><p className="text-white/75">{f.desc}</p></motion.div>)}</div>
      </div>
    </section>

    <section className="py-24 bg-white"><div className="max-w-5xl mx-auto px-6"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14"><h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontFamily: "var(--font-nunito)" }}>Cara <span style={{ background: "linear-gradient(to right,#00B4D8,#7B2FBE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Penggunaan</span></h2><p className="text-gray-500 text-lg">Gulung kabel dengan rapi dalam hitungan detik.</p></motion.div><motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative max-w-3xl mx-auto"><div className="absolute inset-0 rounded-3xl scale-105 blur-2xl opacity-25 bg-gradient-to-r from-sky-500 to-pink-500" /><img src="/compact/howto.jpg" alt="Cara Penggunaan Compact Cable Winder" className="relative w-full rounded-3xl shadow-2xl" /></motion.div></div></section>

    <section className="py-28 relative overflow-hidden text-center" style={{ background: "linear-gradient(135deg,#00B4D8 0%,#7B2FBE 50%,#FF006E 100%)" }}><div className="max-w-3xl mx-auto px-6 relative z-10"><motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="font-black text-white leading-tight mb-5" style={{ fontSize: "clamp(2.2rem,6vw,4.2rem)", textShadow: "3px 3px 0 rgba(0,0,0,.18)", fontFamily: "var(--font-nunito)" }}>Siap Rapikan Kabel?<br/>Yuk Order Sekarang! 🎉</motion.h2><p className="text-white/80 text-xl mb-8">Rp 20.000 · Gratis ongkir Pulau Jawa · Cocok semua kabel max 1.5m</p><a href={waLink("Halo Jogpro! Saya mau pesan Compact Cable Winder")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-black text-lg rounded-full px-10 py-5 bg-white hover:bg-yellow-300 text-black shadow-2xl"><WhatsAppIcon className="w-6 h-6 text-green-500" /> Order via WhatsApp</a></div></section>

    <footer className="py-12 text-center text-white" style={{ background: "#0f0c29" }}><p className="font-black text-xl mb-1" style={{ fontFamily: "var(--font-nunito)" }}>Jogpro Compact Cable Winder</p><p className="text-white/50 text-sm">Putar. Simpan. Rapi. ✨</p><p className="text-white/25 text-xs mt-5">© 2024 Jogpro. Dicetak dengan ❤️ di Indonesia.</p></footer>

    <motion.a href={waLink("Halo Jogpro! Saya mau pesan Compact Cable Winder")} target="_blank" rel="noopener noreferrer" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.4, type: "spring" }} whileHover={{ scale: 1.1 }} className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 text-white font-bold rounded-full px-5 py-4" style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,.55)", fontFamily: "var(--font-nunito)" }}><WhatsAppIcon className="w-6 h-6" /><span className="hidden sm:inline text-sm font-black">Order WhatsApp</span></motion.a>
  </main>;
}
