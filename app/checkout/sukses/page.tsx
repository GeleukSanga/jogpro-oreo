"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SuksesPage() {
  useEffect(() => {
    const fbq = (window as any).fbq;
    fbq?.("track", "Purchase", {
      content_ids: ["jogpro"],
      content_name: "Konfirmasi Pembayaran",
      content_type: "product",
      currency: "IDR",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-cyan-100 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Confetti */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: [
              "#f472b6",
              "#a78bfa",
              "#fbbf24",
              "#34d399",
              "#60a5fa",
              "#fb923c",
            ][i % 6],
            left: `${10 + Math.random() * 80}%`,
            top: "-5%",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 720],
            opacity: [1, 0.6, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 1.5,
            repeat: Infinity,
            ease: "easeIn",
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="bg-white/90 backdrop-blur rounded-3xl p-10 max-w-md w-full text-center shadow-2xl relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", damping: 10 }}
          className="text-7xl mb-6"
        >
          🎉
        </motion.div>

        <h1
          className="text-3xl font-black text-purple-700 mb-3"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          Terima Kasih!
        </h1>

        <p className="text-gray-600 mb-2">
          Konfirmasi pembayaran kamu sudah kami terima.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Pesanan akan diproses setelah kami verifikasi. Biasanya{" "}
          <b className="text-gray-600">1×24 jam</b>.
        </p>

        <div className="space-y-3">
          <a
            href="https://wa.me/628972523968"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 rounded-2xl font-black text-white text-lg shadow-xl transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              fontFamily: "var(--font-nunito)",
            }}
          >
            📱 Chat WA Jogpro
          </a>

          <a
            href="/"
            className="block w-full py-3 rounded-2xl font-black text-purple-700 bg-purple-50 border-2 border-purple-200 text-lg transition-all hover:bg-purple-100 hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            ← Kembali ke Beranda
          </a>
        </div>
      </motion.div>
    </div>
  );
}
