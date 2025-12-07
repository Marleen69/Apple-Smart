import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apple - Titanium',
  description: 'Experience the future of technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

