'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import SupportBanner from '@/components/SupportBanner'
import { motion } from 'framer-motion'

const ipads = [
  {
    name: 'iPad Pro',
    description: 'Невероятная производительность. Потрясающий дисплей.',
    price: 'От 119 990 ₽',
    imageColor: 'bg-gradient-to-br from-gray-900 to-black',
    href: '#',
  },
  {
    name: 'iPad Air',
    description: 'Мощный. Яркий. Универсальный.',
    price: 'От 79 990 ₽',
    imageColor: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    href: '#',
  },
  {
    name: 'iPad',
    description: 'Все возможности iPad. Доступная цена.',
    price: 'От 49 990 ₽',
    imageColor: 'bg-gradient-to-br from-pink-400 to-rose-500',
    href: '#',
  },
  {
    name: 'iPad mini',
    description: 'Компактный размер. Большие возможности.',
    price: 'От 59 990 ₽',
    imageColor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    href: '#',
  },
  {
    name: 'iPad Pro 12.9"',
    description: 'Максимальный размер. Максимальная производительность.',
    price: 'От 149 990 ₽',
    imageColor: 'bg-gradient-to-br from-slate-700 to-slate-900',
    href: '#',
  },
  {
    name: 'iPad Air 13"',
    description: 'Большой экран. Больше пространства для творчества.',
    price: 'От 99 990 ₽',
    imageColor: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    href: '#',
  },
  {
    name: 'iPad Air M2 11"',
    description: 'Лёгкий и мощный, идеален для учебы и творчества.',
    price: 'От 92 990 ₽',
    imageColor: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    href: '#',
  },
  {
    name: 'iPad 10-го поколения',
    description: 'Большой дисплей и USB‑C по доступной цене.',
    price: 'От 42 990 ₽',
    imageColor: 'bg-gradient-to-br from-orange-400 to-red-500',
    href: '#',
  },
  {
    name: 'iPad 9-го поколения',
    description: 'Классическая модель для серфинга и видео.',
    price: 'От 34 990 ₽',
    imageColor: 'bg-gradient-to-br from-gray-500 to-gray-700',
    href: '#',
  },
  {
    name: 'iPad mini Cellular',
    description: 'Связь LTE/5G, компактен и всегда онлайн.',
    price: 'От 64 990 ₽',
    imageColor: 'bg-gradient-to-br from-pink-500 to-purple-600',
    href: '#',
  },
]

export default function IPadPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[56px] md:text-[80px] lg:text-[112px] font-semibold tracking-tight text-[#1d1d1f] mb-4"
          >
            iPad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[28px] text-[#86868b] max-w-2xl mx-auto"
          >
            Мощность компьютера. Гибкость планшета.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ipads.map((ipad, index) => (
              <ProductCard key={ipad.name} {...ipad} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SupportBanner subtitle="Поможем подобрать iPad под учебу, работу и мультимедиа, организуем доставку." />
      <Footer />
    </main>
  )
}

