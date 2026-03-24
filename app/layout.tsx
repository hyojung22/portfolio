import './globals.css'

import { Noto_Sans } from 'next/font/google'
import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' })

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

const galmuri = localFont({
  src: '../public/fonts/Galmuri9.woff2',
  display: 'swap',
  variable: '--font-galmuri',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        pretendard.variable,
        galmuri.variable,
        'font-sans',
        notoSans.variable,
      )}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
