'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { motion } from 'framer-motion'

const macbooks = [
  {
    name: 'MacBook Pro 16"',
    description: 'Максимальная производительность для профессионалов.',
    price: 'От 299 990 ₽',
    imageColor: 'bg-gradient-to-br from-gray-900 to-black',
    href: '#',
  },
  {
    name: 'MacBook Pro 14"',
    description: 'Мощный. Компактный. Профессиональный.',
    price: 'От 249 990 ₽',
    imageColor: 'bg-gradient-to-br from-slate-800 to-gray-900',
    href: '#',
  },
  {
    name: 'MacBook Air 15"',
    description: 'Большой экран. Невероятно тонкий.',
    price: 'От 179 990 ₽',
    imageColor: 'bg-gradient-to-br from-blue-600 to-indigo-700',
    href: '#',
  },
  {
    name: 'MacBook Air 13"',
    description: 'Лёгкий. Мощный. Универсальный.',
    price: 'От 149 990 ₽',
    imageColor: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    href: '#',
  },
  {
    name: 'MacBook Pro M3 Max',
    description: 'Экстремальная производительность. Для самых требовательных задач.',
    price: 'От 399 990 ₽',
    imageColor: 'bg-gradient-to-br from-purple-900 to-black',
    href: '#',
  },
  {
    name: 'MacBook Air M3',
    description: 'Новое поколение. Новая мощь.',
    price: 'От 159 990 ₽',
    imageColor: 'bg-gradient-to-br from-teal-600 to-cyan-700',
    href: '#',
  },
]

export default function MacBookPage() {
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
            MacBook
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[28px] text-[#86868b] max-w-2xl mx-auto"
          >
            Мощность. Производительность. Совершенство.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {macbooks.map((macbook, index) => (
              <ProductCard key={macbook.name} {...macbook} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

