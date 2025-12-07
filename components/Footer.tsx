'use client'

const footerLinks = {
  'Покупка и обучение': [
    'Магазин',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'TV и Дом',
    'Аксессуары',
    'Подарочные карты',
  ],
  'Сервисы': [
    'Apple Music',
    'Apple TV+',
    'Apple Arcade',
    'iCloud',
    'Apple One',
    'Apple Pay',
    'Apple Books',
    'App Store',
  ],
  'Учётная запись': [
    'Управление Apple ID',
    'Учётная запись Apple Store',
    'iCloud.com',
  ],
  'Для бизнеса': [
    'Apple и бизнес',
    'Покупка для бизнеса',
  ],
  'Для образования': [
    'Apple и образование',
    'Покупка для учёбы',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-[980px] mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[10px] text-[#86868b] hover:text-[#1d1d1f] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#d2d2d7] pt-6">
          <p className="text-[10px] text-[#86868b] mb-4">
            Copyright © 2024 Apple Inc. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4 text-[10px] text-[#86868b]">
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">
              Политика конфиденциальности
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">
              Условия использования
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">
              Продажа и возврат
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">
              Юридическая информация
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

