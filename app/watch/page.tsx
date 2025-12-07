'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { motion } from 'framer-motion'

const watches = [
  {
    name: 'Apple Watch Ultra 2',
    description: 'Самый прочный и функциональный Apple Watch.',
    price: 'От 99 990 ₽',
    imageColor: 'bg-gradient-to-br from-orange-600 to-red-600',
    href: '#',
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Мощный. Умный. Стильный.',
    price: 'От 49 990 ₽',
    imageColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    href: '#',
  },
  {
    name: 'Apple Watch SE',
    description: 'Все возможности Apple Watch. Доступная цена.',
    price: 'От 29 990 ₽',
    imageColor: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    href: '#',
  },
  {
    name: 'Apple Watch Hermès',
    description: 'Эксклюзивная коллекция. Роскошный дизайн.',
    price: 'От 149 990 ₽',
    imageColor: 'bg-gradient-to-br from-gray-800 to-black',
    href: '#',
  },
  {
    name: 'Apple Watch Nike',
    description: 'Для спортсменов. Для активных.',
    price: 'От 49 990 ₽',
    imageColor: 'bg-gradient-to-br from-green-600 to-emerald-700',
    href: '#',
  },
  {
    name: 'Apple Watch Studio',
    description: 'Создайте свой уникальный дизайн.',
    price: 'От 39 990 ₽',
    imageColor: 'bg-gradient-to-br from-purple-600 to-indigo-700',
    href: '#',
  },
]

export default function WatchPage() {
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
            Watch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[28px] text-[#86868b] max-w-2xl mx-auto"
          >
            Ваше здоровье. Ваш стиль. Ваш выбор.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {watches.map((watch, index) => (
              <ProductCard key={watch.name} {...watch} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

