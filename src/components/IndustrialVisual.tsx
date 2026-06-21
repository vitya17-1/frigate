import { motion } from 'framer-motion'

export function IndustrialVisual() {
  return (
    <div className="relative h-[350px] w-full sm:h-[430px] lg:h-[580px]" aria-label="Анимированный экскаватор">
      <div className="absolute inset-[10%] rounded-full bg-orange/15 blur-[80px]" />
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 760 560" fill="none">
        <defs>
          <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3d4245" />
            <stop offset="1" stopColor="#151719" />
          </linearGradient>
          <linearGradient id="paint"><stop stopColor="#ff6b2b" /><stop offset="1" stopColor="#d93c00" /></linearGradient>
          <filter id="shadow"><feGaussianBlur stdDeviation="14" /></filter>
        </defs>
        <ellipse cx="385" cy="500" rx="290" ry="30" fill="#000" opacity=".5" filter="url(#shadow)" />
        <motion.g
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [10, 0, 10], opacity: 1 }}
          transition={{ opacity: { duration: 1 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <g>
            <rect x="175" y="416" width="330" height="63" rx="31" fill="#17191b" stroke="#53585c" strokeWidth="3" />
            <path d="M205 446h269" stroke="#313538" strokeWidth="34" strokeDasharray="18 13" />
            <circle cx="245" cy="446" r="25" fill="#111" stroke="#686e72" strokeWidth="5" />
            <circle cx="434" cy="446" r="25" fill="#111" stroke="#686e72" strokeWidth="5" />
          </g>
          <path d="M257 413l20-127h171l51 127H257z" fill="url(#paint)" stroke="#ff8a5c" strokeWidth="2" />
          <path d="M337 286l26-111h122l35 111H337z" fill="url(#metal)" stroke="#666" strokeWidth="2" />
          <path d="M381 195h84l25 78H362l19-78z" fill="#101820" stroke="#72808a" />
          <path d="M400 204l-15 60M440 204l14 60" stroke="#35444d" strokeWidth="3" />
          <path d="M279 302h67l-13 77h-68l14-77z" fill="#ff7a42" opacity=".7" />
          <motion.g
            style={{ transformOrigin: '480px 202px' }}
            animate={{ rotate: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M477 210L557 92l42 21-70 165" stroke="#f05216" strokeWidth="34" strokeLinejoin="round" />
            <path d="M580 105l93 116" stroke="#ff6b2b" strokeWidth="28" strokeLinecap="round" />
            <path d="M676 210l43 56-84 13 20-67 21-2z" fill="#2d3133" stroke="#747a7d" strokeWidth="3" />
            <circle cx="485" cy="204" r="18" fill="#202326" stroke="#8c9194" strokeWidth="5" />
            <circle cx="582" cy="107" r="12" fill="#202326" stroke="#8c9194" strokeWidth="4" />
          </motion.g>
          <path d="M211 403h301" stroke="#ff8a5c" />
          <text x="282" y="352" fill="#fff" fontFamily="Arial" fontWeight="700" fontSize="15" letterSpacing="3">FREGAT / 04</text>
        </motion.g>
        <path d="M72 496h630" stroke="#ff5a1f" strokeWidth="2" strokeDasharray="10 14" style={{ animation: 'dash 4s linear infinite' }} />
        <g fill="#ff5a1f"><circle cx="92" cy="496" r="5" /><circle cx="683" cy="496" r="5" /></g>
      </svg>
      <div className="absolute right-0 top-14 border-l border-orange bg-black/50 px-4 py-3 text-[10px] uppercase tracking-[.2em] text-white/50 backdrop-blur">
        <span className="mb-1 block text-orange">Online</span>Fleet telemetry
      </div>
    </div>
  )
}
