'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import SupportBanner from '@/components/SupportBanner'
import { motion } from 'framer-motion'

const iphones = [
  {
    name: 'iPhone 15 Pro Max',
    description: 'Титан. Такой мощный. Такой лёгкий.',
    price: 'От 149 990 ₽',
    imageColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
    href: '#',
  },
  {
    name: 'iPhone 15 Pro',
    description: 'Титан. Такой мощный. Такой лёгкий.',
    price: 'От 129 990 ₽',
    imageColor: 'bg-gradient-to-br from-blue-600 to-blue-800',
    href: '#',
  },
  {
    name: 'iPhone 15',
    description: 'Новый дизайн. Новая камера. Новые возможности.',
    price: 'От 99 990 ₽',
    imageColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    href: '#',
  },
  {
    name: 'iPhone 15 Plus',
    description: 'Большой экран. Больше возможностей.',
    price: 'От 109 990 ₽',
    imageColor: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    href: '#',
  },
  {
    name: 'iPhone 14',
    description: 'Проверенная надёжность. Отличная цена.',
    price: 'От 79 990 ₽',
    imageColor: 'bg-gradient-to-br from-purple-600 to-indigo-700',
    href: '#',
  },
  {
    name: 'iPhone SE',
    description: 'Мощность iPhone. Компактный размер.',
    price: 'От 49 990 ₽',
    imageColor: 'bg-gradient-to-br from-gray-400 to-gray-600',
    href: '#',
  },
  {
    name: 'iPhone 14 Plus',
    description: 'Большой дисплей и проверенная камера с фотоническим HDR.',
    price: 'От 94 990 ₽',
    imageColor: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    href: '#',
  },
  {
    name: 'iPhone 13',
    description: 'Выдержанная классика с поддержкой 5G и отличной автономностью.',
    price: 'От 69 990 ₽',
    imageColor: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    href: '#',
  },
  {
    name: 'iPhone 13 mini',
    description: 'Компактный флагман для тех, кто ценит размер и мощь.',
    price: 'От 64 990 ₽',
    imageColor: 'bg-gradient-to-br from-indigo-500 to-blue-700',
    href: '#',
  },
  {
    name: 'iPhone 12',
    description: 'Надёжный выбор с поддержкой MagSafe и OLED‑дисплеем.',
    price: 'От 54 990 ₽',
    imageColor: 'bg-gradient-to-br from-slate-500 to-slate-700',
    href: '#',
  },
]

export default function IPhonePage() {
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
            iPhone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[28px] text-[#86868b] max-w-2xl mx-auto"
          >
            Выберите свой iPhone
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iphones.map((iphone, index) => (
              <ProductCard key={iphone.name} {...iphone} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SupportBanner subtitle="Подскажем модель, организуем доставку и перенос данных." />
      <Footer />
    </main>
  )
}

