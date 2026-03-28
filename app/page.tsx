import MusicPlayer from '@/common/MusicPlayer'
import MobileLayout from '@/components/layout/mobile/MobileLayout'
import MinihompyLayout from '@/layout/MinihompyLayout'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      {/* 데스크탑 - 기존 유지 */}
      <div
        className="mx-auto hidden items-center gap-10 md:flex"
        style={{
          transform: 'scale(var(--scale-value))',
          transformOrigin: 'center center',
        }}
      >
        <MinihompyLayout />
        <aside className="self-start">
          <MusicPlayer />
        </aside>
      </div>

      {/* 모바일 */}
      <div className="block w-full md:hidden">
        <MobileLayout />
      </div>
    </main>
  )
}
