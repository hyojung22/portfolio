import localFont from 'next/font/local'
import './globals.css'

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
    <html lang="en" className={`${pretendard.variable} ${galmuri.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
