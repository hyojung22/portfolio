export default function LeftPanel() {
  return (
    <div className="flex h-full flex-col">
      {/* TODAY 부분 */}
      <div className="mb-1 flex justify-center gap-3">
        <span>TODAY</span>
        <span>TOTAL</span>
      </div>
      {/* 내용부분 */}
      <div className="flex-1 rounded-md border-2 border-[#A8A8A8] bg-[#EBEBE9] p-3">
        <div className="h-full rounded-md bg-white p-3">
          <p>dfs</p>
        </div>
      </div>
    </div>
  )
}
