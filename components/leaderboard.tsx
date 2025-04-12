export function Leaderboard() {
  return (
    <div className="bg-green-400 rounded-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Leaderboard</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">1</span>
          <div className="h-4 bg-green-200 rounded-full flex-1"></div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">2</span>
          <div className="h-4 bg-green-200 rounded-full flex-1"></div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">3</span>
          <div className="h-4 bg-green-200 rounded-full flex-1"></div>
        </div>
      </div>
    </div>
  )
}
