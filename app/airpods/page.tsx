import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import SupportBanner from '@/components/SupportBanner'
import { motion } from 'framer-motion'

const airpods = [
  {
    name: 'AirPods Pro (2‑го поколения) USB‑C',
    description: 'Активное шумоподавление и режим прозрачности с адаптацией.',
    price: 'От 39 990 ₽',
    imageColor: 'bg-gradient-to-br from-slate-900 to-gray-800',
    href: '#',
  },
  {
    name: 'AirPods Max',
    description: 'Hi‑Fi звук, пространственное аудио и премиальные материалы.',
    price: 'От 69 990 ₽',
    imageColor: 'bg-gradient-to-br from-gray-700 to-gray-900',
    href: '#',
  },
  {
    name: 'AirPods (3‑го поколения)',
    description: 'Пространственное аудио, улучшенная автономность и комфорт.',
    price: 'От 24 990 ₽',
    imageColor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    href: '#',
  },
  {
    name: 'AirPods (2‑го поколения)',
    description: 'Легендарный дизайн, надёжное соединение и Siri без рук.',
    price: 'От 16 990 ₽',
    imageColor: 'bg-gradient-to-br from-gray-200 to-gray-400',
    href: '#',
  },
  {
    name: 'AirPods Pro для спорта',
    description: 'Максимальная фиксация и влагозащита для тренировок.',
    price: 'От 42 990 ₽',
    imageColor: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    href: '#',
  },
  {
    name: 'AirPods Max (кожа)',
    description: 'Эксклюзивная отделка с улучшенной шумоизоляцией.',
    price: 'От 79 990 ₽',
    imageColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
    href: '#',
  },
  {
    name: 'AirPods Lite',
    description: 'Доступная версия с фирменным звуком и автопереключением.',
    price: 'От 12 990 ₽',
    imageColor: 'bg-gradient-to-br from-cyan-500 to-sky-600',
    href: '#',
  },
  {
    name: 'AirPods Studio',
    description: 'Профессиональный звук и студийная точность в беспроводном формате.',
    price: 'От 54 990 ₽',
    imageColor: 'bg-gradient-to-br from-purple-600 to-fuchsia-600',
    href: '#',
  },
  {
    name: 'AirPods Pro Limited',
    description: 'Коллекционный дизайн, особые материалы и расширенный комплект.',
    price: 'От 59 990 ₽',
    imageColor: 'bg-gradient-to-br from-rose-500 to-red-600',
    href: '#',
  },
  {
    name: 'AirPods для созвонов',
    description: 'Оптимизированные микрофоны и алгоритмы шумоподавления голоса.',
    price: 'От 22 990 ₽',
    imageColor: 'bg-gradient-to-br from-lime-500 to-green-600',
    href: '#',
  },
]

export default function AirPodsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <NavBar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[56px] md:text-[80px] lg:text-[112px] font-semibold tracking-tight text-[#1d1d1f] mb-4"
          >
            AirPods
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[28px] text-[#86868b] max-w-2xl mx-auto"
          >
            Беспроводной звук c адаптивными технологиями и поддержкой доставки.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airpods.map((item, index) => (
              <ProductCard key={item.name} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SupportBanner subtitle="Доставка в день заказа, консультация и подбор под ваши задачи." />
      <Footer />
    </main>
  )
}

