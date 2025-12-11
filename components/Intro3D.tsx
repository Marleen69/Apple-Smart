import { motion } from 'framer-motion'

const rings = [
  { delay: 0, size: 'w-[240px] h-[240px]', blur: 'blur-2xl', opacity: 'opacity-30' },
  { delay: 0.2, size: 'w-[320px] h-[320px]', blur: 'blur-xl', opacity: 'opacity-40' },
  { delay: 0.4, size: 'w-[420px] h-[420px]', blur: 'blur-lg', opacity: 'opacity-50' },
]

export default function Intro3D() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1115] via-[#0b1020] to-[#06080f] text-white">
      <div className="absolute inset-0 pointer-events-none">
        {rings.map((ring, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.6, rotateX: -30, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 15, rotateY: -15 }}
            transition={{
              duration: 2.2,
              delay: ring.delay,
              ease: [0.25, 0.1, 0.25, 1],
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className={`absolute inset-0 flex items-center justify-center ${ring.opacity}`}
            style={{ perspective: '1600px' }}
          >
            <div
              className={`${ring.size} ${ring.blur} rounded-[40px] border border-white/10 bg-white/5`}
              style={{ transform: 'rotateX(18deg) rotateY(-24deg) translateZ(80px)' }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 text-center px-4 space-y-4"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">Apple Experience</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Объёмный старт новой линейки
          <br />
          с живой 3D-анимацией
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Погрузитесь в мир Mac, iPhone, Watch и AirPods — эффект объёмных слоёв подчёркивает
          премиальность и задаёт настроение всему сайту.
        </p>
        <div className="flex items-center justify-center gap-4">
          <motion.span
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-3 h-3 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.6)]"
          />
          <motion.span
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 1.6, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2 h-2 rounded-full bg-[#7dd3fc] shadow-[0_0_18px_rgba(125,211,252,0.7)]"
          />
          <motion.span
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 1.6, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2.5 h-2.5 rounded-full bg-[#a855f7] shadow-[0_0_18px_rgba(168,85,247,0.7)]"
          />
        </div>
      </motion.div>
    </section>
  )
}

