"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const WA = "628972523968";
const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const products = [
  {
    slug: "oreo",
    name: "Oreo Cable Winder",
    tagline: "Cable winder bentuk biskuit Oreo yang lucu & unik.",
    price: "Rp 20.000",
    numericPrice: 20000,
    badge: "Best Seller",
    emoji: "🍪",
    href: "/oreo",
    image: "https://res.cloudinary.com/dejoaryri/image/upload/v1780123326/lkeennsiv4p8uz3aaapm.jpg",
    colors: ["Hitam", "Pink", "Biru Muda"],
    gradient: "from-neutral-950 via-stone-800 to-pink-500",
    accent: "#FFE600",
    waText: "Halo Jogpro! Saya mau pesan Oreo Cable Winder",
    bullets: ["Desain Oreo gemes", "Rapikan kabel charger", "Cocok USB, Type-C, Lightning"],
  },
  {
    slug: "compact",
    name: "Compact Cable Winder",
    tagline: "Winder minimalis, kecil, cantik — tinggal putar dan simpan.",
    price: "Rp 20.000",
    numericPrice: 20000,
    badge: "Minimalis",
    emoji: "🎀",
    href: "/compact",
    image: "/compact/showcase.jpg",
    colors: ["Hitam", "Pink", "Biru Muda"],
    gradient: "from-sky-500 via-violet-600 to-pink-500",
    accent: "#00E5FF",
    waText: "Halo Jogpro! Saya mau pesan Compact Cable Winder",
    bullets: ["Max kabel 1.5 meter", "Muat di pouch", "Desk setup lebih rapi"],
  },
  {
    slug: "keychain",
    name: "Phone Stand Keychain",
    tagline: "Gantungan kunci 2-in-1 yang bisa jadi stand HP.",
    price: "Rp 15.000",
    numericPrice: 15000,
    badge: "2-in-1",
    emoji: "🗝️",
    href: "/keychain",
    image: "/keychain/showcase.jpg",
    colors: ["Pink", "Biru", "Hijau"],
    gradient: "from-rose-500 via-fuchsia-600 to-blue-500",
    accent: "#A7F3D0",
    waText: "Halo Jogpro! Saya mau pesan Phone Stand Keychain",
    bullets: ["Ukuran 7 × 2.5 × 0.5 cm", "Stand portrait & landscape", "Bisa digantung di kunci/tas"],
  },
];

const perks = [
  { icon: "🚚", title: "Gratis Ongkir Pulau Jawa", desc: "Harga sudah termasuk pengiriman untuk area Pulau Jawa." },
  { icon: "🖨️", title: "3D Printed Lokal", desc: "Dicetak dengan Bambu Lab A1 Mini, cocok untuk aksesori harian." },
  { icon: "💬", title: "Order Cepat via WhatsApp", desc: "Klik produk favoritmu, chat otomatis terkirim ke Jogpro." },
];

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } };

function WhatsAppIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
}

export default function Home() {
  useEffect(() => {
    const fbq = (window as any).fbq;
    fbq?.("track", "ViewContent", {
      content_ids: ["jogpro-product-catalog"],
      content_name: "Jogpro Product Catalog",
      content_type: "product_group",
      value: 15000,
      currency: "IDR",
    });

    const ttq = (window as any).ttq;
    ttq?.track("ViewContent", {
      content_id: "jogpro-product-catalog",
      content_name: "Jogpro Product Catalog",
      content_type: "product_group",
      value: 15000,
      currency: "IDR",
    });

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const product = a.getAttribute("data-product") || "catalog";

      if (href.includes("wa.me")) {
        fbq?.("track", "Contact");
        fbq?.("trackCustom", "WhatsAppClick", { page: location.pathname, product, text: a.innerText.trim() });
        ttq?.track("Contact", { content_name: product, content_type: "product" });
      }

      if (["oreo", "compact", "keychain"].includes(product) && !href.includes("wa.me")) {
        fbq?.("trackCustom", "ProductClick", { product, page: location.pathname, href });
        ttq?.track("ClickButton", { content_name: product, content_type: "product" });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <main className="overflow-x-hidden bg-[#070713] text-white">
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,230,0,.32),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(0,180,216,.35),transparent_26%),radial-gradient(circle_at_58%_82%,rgba(255,0,110,.34),transparent_34%),linear-gradient(135deg,#09090f_0%,#201447_48%,#0b1938_100%)]" />
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
          <div className="text-center lg:text-left">
            <motion.span variants={fadeUp} initial="hidden" animate="show" className="inline-block text-xs font-black uppercase tracking-[.25em] px-5 py-2 rounded-full text-black mb-6" style={{ background: "#FFE600" }}>
              ✨ Jogpro 3D Printed Accessories
            </motion.span>
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .08 }} className="font-black leading-[.9] mb-6" style={{ fontSize: "clamp(3rem,9vw,7rem)", fontFamily: "var(--font-nunito)", textShadow: "5px 5px 0 rgba(0,0,0,.22)" }}>
              Aksesori<br/><span className="text-yellow-300">Kecil</span>,<br/>Manfaat Besar.
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .18 }} className="text-lg md:text-2xl text-white/82 font-semibold max-w-2xl mx-auto lg:mx-0 mb-5">
              Pilih winder kabel dan keychain fungsional buat meja, tas, dan kabel harian kamu.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .24 }} className="text-white/55 max-w-xl mx-auto lg:mx-0 mb-10">
              Oreo Cable Winder, Compact Cable Winder, dan Phone Stand Keychain — semua dicetak lokal, ringan, lucu, dan siap dikirim dengan gratis ongkir Pulau Jawa.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: .32 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#produk" className="rounded-full px-8 py-4 font-black text-black bg-yellow-300 hover:bg-yellow-200 shadow-2xl transition-transform hover:scale-105" style={{ fontFamily: "var(--font-nunito)" }}>Lihat Semua Produk</a>
              <a data-product="catalog" href={waLink("Halo Jogpro! Saya mau tanya katalog produk Jogpro")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-black bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur transition-colors" style={{ fontFamily: "var(--font-nunito)" }}><WhatsAppIcon className="w-5 h-5 text-green-400"/> Chat Jogpro</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .75 }} className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-white/20 blur-3xl scale-95" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-[2rem] overflow-hidden shadow-2xl border border-white/15 bg-white/10 backdrop-blur p-3">
                <img src="/compact/showcase.jpg" alt="Compact Cable Winder showcase" className="w-full h-56 object-cover rounded-[1.5rem]" />
              </div>
              <div className="rounded-[1.75rem] overflow-hidden shadow-xl border border-white/15 bg-white/10 p-2 -rotate-3">
                <img src="https://res.cloudinary.com/dejoaryri/image/upload/v1780123326/lkeennsiv4p8uz3aaapm.jpg" alt="Oreo Cable Winder" className="w-full h-44 object-cover rounded-[1.25rem]" />
              </div>
              <div className="rounded-[1.75rem] overflow-hidden shadow-xl border border-white/15 bg-white/10 p-2 rotate-3 mt-8">
                <img src="/keychain/showcase.jpg" alt="Phone Stand Keychain" className="w-full h-44 object-cover rounded-[1.25rem]" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full bg-green-400 text-black font-black shadow-xl whitespace-nowrap">🚚 Gratis Ongkir Pulau Jawa</div>
          </motion.div>
        </div>
      </section>

      <section id="produk" className="relative py-24 bg-white text-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="font-black text-pink-500 uppercase tracking-[.25em] text-xs mb-3">Pilih favoritmu</p>
            <h2 className="font-black leading-tight" style={{ fontSize: "clamp(2.2rem,6vw,4.6rem)", fontFamily: "var(--font-nunito)" }}>3 Produk Jogpro</h2>
            <p className="text-gray-500 text-lg mt-3">Klik detail produk untuk landing page khusus, atau langsung order via WhatsApp.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.article key={p.slug} variants={scaleIn} initial="hidden" animate="show" viewport={{ once: true }} transition={{ delay: i * .1 }} whileHover={{ y: -10 }} className="group rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-gray-100">
                <div className={`relative h-72 bg-gradient-to-br ${p.gradient} p-4 overflow-hidden`}>
                  <div className="absolute top-4 left-4 z-10 rounded-full px-3 py-1 bg-yellow-300 text-black text-xs font-black">{p.emoji} {p.badge}</div>
                  <div className="absolute top-4 right-4 z-10 rounded-full px-3 py-1 bg-white text-black text-sm font-black">{p.price}</div>
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover rounded-[1.4rem] shadow-xl transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="text-3xl font-black mb-2" style={{ fontFamily: "var(--font-nunito)" }}>{p.name}</h3>
                  <p className="text-gray-500 mb-5">{p.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-5">{p.colors.map(c => <span key={c} className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">{c}</span>)}</div>
                  <ul className="space-y-2 mb-7">{p.bullets.map(b => <li key={b} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-green-500 font-black">✓</span>{b}</li>)}</ul>
                  <div className="grid grid-cols-2 gap-3">
                    <Link data-product={p.slug} href={p.href} className="text-center rounded-2xl py-3 font-black text-white bg-gray-950 hover:bg-gray-800">Lihat Detail</Link>
                    <a data-product={p.slug} href={waLink(p.waText)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl py-3 font-black text-white bg-green-500 hover:bg-green-600"><WhatsAppIcon className="w-4 h-4"/> Order</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0f0c29 0%,#302b63 55%,#24243e 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-black mb-3" style={{ fontSize: "clamp(2rem,5vw,3.8rem)", fontFamily: "var(--font-nunito)" }}>Kenapa Belanja di Jogpro?</h2>
            <p className="text-white/55 text-lg">Aksesori kecil yang bikin barang harian lebih rapi, lucu, dan praktis.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">{perks.map((perk, i) => <motion.div key={perk.title} variants={scaleIn} initial="hidden" animate="show" viewport={{ once: true }} transition={{ delay: i * .1 }} className="rounded-3xl p-8 bg-white/10 border border-white/10 backdrop-blur"><div className="text-5xl mb-4">{perk.icon}</div><h3 className="text-2xl font-black mb-2" style={{ fontFamily: "var(--font-nunito)" }}>{perk.title}</h3><p className="text-white/70">{perk.desc}</p></motion.div>)}</div>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="show" viewport={{ once: true }} className="rounded-[2rem] p-8 md:p-12 text-center text-white overflow-hidden relative" style={{ background: "linear-gradient(135deg,#00B4D8 0%,#7B2FBE 50%,#FF006E 100%)" }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,230,0,.32),transparent_24%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,.24),transparent_28%)]" />
            <div className="relative z-10">
              <h2 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(2.2rem,6vw,4.2rem)", fontFamily: "var(--font-nunito)", textShadow: "3px 3px 0 rgba(0,0,0,.18)" }}>Mau order beberapa produk sekaligus?</h2>
              <p className="text-white/80 text-lg mb-8">Chat Jogpro, sebutkan produk dan warna pilihanmu. Gratis ongkir Pulau Jawa.</p>
              <a data-product="catalog" href={waLink("Halo Jogpro! Saya mau order produk Jogpro: Oreo/Compact/Keychain") } target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full px-10 py-5 bg-white text-black hover:bg-yellow-300 font-black text-lg shadow-2xl"><WhatsAppIcon className="w-6 h-6 text-green-500"/> Order via WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 text-center bg-[#070713] text-white">
        <p className="font-black text-xl mb-1" style={{ fontFamily: "var(--font-nunito)" }}>Jogpro 3D Printed Accessories</p>
        <p className="text-white/45 text-sm">Winder kabel, phone stand, dan aksesori kecil fungsional.</p>
      </footer>

      <a data-product="catalog" href={waLink("Halo Jogpro! Saya mau tanya katalog produk Jogpro")} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 text-white font-black rounded-full px-5 py-4 bg-green-500 shadow-2xl hover:bg-green-600"><WhatsAppIcon className="w-6 h-6"/><span className="hidden sm:inline text-sm">Chat Jogpro</span></a>
    </main>
  );
}
