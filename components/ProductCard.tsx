'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ProductCardProps {
  name: string
  description: string
  price: string
  imageColor: string
  href: string
  index: number
}

export default function ProductCard({
  name,
  description,
  price,
  imageColor,
  href,
  index,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <Link href={href} className="block">
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
          {/* Product Image Placeholder */}
          <div className="mb-6 flex-1 flex items-center justify-center">
            <div
              className={`w-full h-[300px] md:h-[400px] rounded-[24px] ${imageColor} flex items-center justify-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <div className="relative z-10 text-white/30 text-6xl font-bold">
                {name.split(' ')[0]}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
              {name}
            </h3>
            <p className="text-[17px] text-[#86868b] mb-4 flex-1">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[21px] font-semibold text-[#1d1d1f]">
                {price}
              </span>
              <div className="flex items-center gap-2 text-[#0071e3] group-hover:gap-3 transition-all duration-200">
                <span className="text-[17px] font-medium">Купить</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}





