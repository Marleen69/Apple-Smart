import { Headset, ShieldCheck } from 'lucide-react'

interface SupportBannerProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  anchorId?: string
}

export default function SupportBanner({
  title = 'Поддержка 24/7',
  subtitle = 'Поможем выбрать, заказать и оформить доставку в удобное время.',
  ctaLabel = 'Связаться со специалистом',
  ctaHref = '#support',
  anchorId = 'support',
}: SupportBannerProps) {
  return (
    <section className="px-4 pb-20" id={anchorId}>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[28px] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center">
              <Headset size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="text-[#86868b] text-base">{subtitle}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-[#4b5563]">
                <ShieldCheck size={18} />
                Гарантия, обмен, настройка при доставке
              </div>
            </div>
          </div>
          <div className="md:ml-auto w-full md:w-auto">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center w-full md:w-auto px-5 py-3 rounded-full bg-[#0071e3] text-white font-medium hover:bg-[#0077ed] transition-colors"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

