'use client'

import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#06060A]" />

      <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[180px]" />
      <div className="absolute top-1/3 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/12 blur-[140px]" />
      <div className="absolute bottom-[-200px] right-[-120px] h-[700px] w-[700px] rounded-full bg-fuchsia-700/10 blur-[160px]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="980" cy="260" r="260" fill="none" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.18" />
        <circle cx="980" cy="260" r="180" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.22" />
        <circle cx="980" cy="260" r="110" fill="none" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.28" />

        <circle cx="980" cy="260" r="4" fill="#C4B5FD" />
        <circle cx="1140" cy="260" r="3" fill="#8B5CF6" />
        <circle cx="980" cy="80" r="3" fill="#A78BFA" />
        <circle cx="820" cy="260" r="3" fill="#8B5CF6" />
        <circle cx="980" cy="440" r="3" fill="#A78BFA" />

        <path
          d="M180 620 C320 540, 420 700, 560 620 S780 500, 940 620 S1160 760, 1320 660"
          fill="none"
          stroke="#6D28D9"
          strokeWidth="1"
          strokeOpacity="0.18"
        />
      </svg>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[18%] top-[16%] h-[360px] w-[360px]"
      >
        <div className="absolute inset-0 rounded-full border border-purple-500/10" />
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_16px_rgba(168,85,247,0.8)]" />
      </motion.div>

      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]"
      />
      <motion.div
        animate={{ y: [15, -25, 15], opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[28%] top-[62%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.7)]"
      />
      <motion.div
        animate={{ y: [-10, 18, -10], opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[22%] bottom-[18%] h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.8)]"
      />

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 0.6px, transparent 0.8px), radial-gradient(circle at 80% 40%, white 0.6px, transparent 0.8px), radial-gradient(circle at 40% 80%, white 0.6px, transparent 0.8px)',
          backgroundSize: '220px 220px',
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#06060A] via-[#06060A]/80 to-transparent" />
    </div>
  )
}