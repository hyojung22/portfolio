import MinihompyLayout from '@/layout/MinihompyLayout'
import MusicPlayer from '@/common/MusicPlayer'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-10">
        <MinihompyLayout />
        <aside>
          <MusicPlayer />
        </aside>
      </div>
    </main>
  )
}
