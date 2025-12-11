'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const catalogs = [
  {
    title: 'iPhone',
    description: 'Выберите свой iPhone',
    href: '/iphone',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'iPad',
    description: 'Мощность компьютера. Гибкость планшета.',
    href: '/ipad',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'MacBook',
    description: 'Мощность. Производительность. Совершенство.',
    href: '/macbook',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    title: 'Watch',
    description: 'Контроль здоровья, стиль и безопасность на запястье.',
    href: '/watch',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'AirPods',
    description: 'Беспроводной звук, продвинутый шумодав и комфорт.',
    href: '/airpods',
    gradient: 'from-sky-500 to-indigo-500',
  },
]

export default function CatalogLinks() {
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
            Каталог продуктов
          </h2>
          <p className="text-[21px] text-[#86868b] max-w-2xl mx-auto">
            Откройте для себя всю линейку продуктов Apple
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link href={catalog.href} className="block group">
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${catalog.gradient} flex items-center justify-center mb-6`}
                  >
                    <span className="text-white text-2xl font-bold">
                      {catalog.title[0]}
                    </span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
                    {catalog.title}
                  </h3>
                  <p className="text-[19px] text-[#86868b] mb-6 leading-relaxed">
                    {catalog.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#0071e3] group-hover:gap-3 transition-all duration-200">
                    <span className="text-[17px] font-medium">Смотреть каталог</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





