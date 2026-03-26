import './globals.css'

import { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import localFont from 'next/font/local'

import StyledComponentsRegistry from '@/lib/registry'
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

export const metadata: Metadata = {
  title: '최효정 포트폴리오',
  description: '사용자 경험을 먼저 생각하는 개발자 최효정의 포트폴리오입니다.',
  openGraph: {
    title: '최효정 포트폴리오',
    description:
      '사용자 경험을 먼저 생각하는 개발자 최효정의 포트폴리오입니다.',
    images: ['https://minihompy-portfolio.vercel.app/images/og-image.png'],
  },
}

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
      <body className="font-sans antialiased">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
