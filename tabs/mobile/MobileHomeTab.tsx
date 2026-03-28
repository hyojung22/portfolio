import MobileProfileCard from '@/components/layout/mobile/MobileProfileCard'

export default function MobileHomeTab() {
  return (
    <div>
      <h2
        className="py-3 text-start text-xl font-bold text-[#3DA4E8]"
        style={{
          fontFamily: 'var(--font-pixel)',
        }}
      >
        ♡ 개발자 최효정입니다 ♡ 반가워요 ヽ(´▽｀)/
      </h2>
      <MobileProfileCard />
    </div>
  )
}
