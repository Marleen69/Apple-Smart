'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f7]">
      {/* Background Product Image Placeholder */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 flex items-center justify-center opacity-20"
      >
        <div className="w-[600px] h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-[60px] blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <h2 className="text-[21px] text-[#86868b] font-medium mb-2 tracking-tight">
            Titanium
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-[56px] md:text-[80px] lg:text-[112px] font-semibold tracking-tight text-[#1d1d1f] mb-4 leading-[1.05]"
        >
          Такой мощный.
          <br />
          Такой лёгкий.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <button className="bg-[#0071e3] text-white px-8 py-3 rounded-full text-[17px] font-medium hover:bg-[#0077ed] transition-colors duration-200 flex items-center gap-2 group">
            Купить
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
          <button className="text-[#0071e3] text-[17px] font-medium hover:underline">
            Узнать больше
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
          className="text-[#86868b] text-[17px] mt-6"
        >
          От 199 990 ₽
        </motion.p>
      </div>
    </section>
  )
}

