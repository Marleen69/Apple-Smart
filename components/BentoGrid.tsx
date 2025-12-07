'use client'

import { motion } from 'framer-motion'
import { Battery, Cpu, Camera, Zap } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const features = [
  {
    title: 'Процессор M3 Max',
    description: 'Невероятная производительность для профессионалов',
    icon: Cpu,
    gradient: 'from-blue-500 to-cyan-500',
    span: 'col-span-1 md:col-span-2',
  },
  {
    title: 'До 40 часов работы',
    description: 'Батарея, которая не подведёт',
    icon: Battery,
    gradient: 'from-green-500 to-emerald-500',
    span: 'col-span-1',
  },
  {
    title: 'Камера Pro',
    description: 'Снимайте как профессионал',
    icon: Camera,
    gradient: 'from-purple-500 to-pink-500',
    span: 'col-span-1',
  },
  {
    title: 'Молниеносная скорость',
    description: 'Мгновенный отклик на каждое действие',
    icon: Zap,
    gradient: 'from-orange-500 to-red-500',
    span: 'col-span-1 md:col-span-2',
  },
]

export default function BentoGrid() {
  return (
    <section className="py-24 px-4 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[48px] md:text-[64px] font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Всё, что нужно.
            <br />
            Всё, что важно.
          </h2>
          <p className="text-[21px] text-[#86868b] max-w-2xl mx-auto">
            Каждая деталь продумана для максимальной производительности и
            комфорта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className={`${feature.span} bg-white rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[19px] text-[#86868b] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

