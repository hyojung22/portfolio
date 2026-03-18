import MinihompyLayout from '@/components/layout/MinihompyLayout'
import MusicPlayer from '@/components/layout/MusicPlayer'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex items-center gap-10">
        <MinihompyLayout />
        <MusicPlayer />
      </div>
    </main>
  )
}
