import MusicPlayer from '@/common/MusicPlayer'
import MinihompyLayout from '@/layout/MinihompyLayout'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div
        className="flex items-center gap-10"
        style={{ transform: 'scale(1.08)', transformOrigin: 'center center' }}
      >
        <MinihompyLayout />
        <aside>
          <MusicPlayer />
        </aside>
      </div>
    </main>
  )
}
