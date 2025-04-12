interface LevelTrackerProps {
  level: number
  xp: number
  nextLevel: number
  progress: number
}

export function LevelTracker({ level, xp, nextLevel, progress }: LevelTrackerProps) {
  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4">Level Tracker</h2>

      <div className="flex justify-end mb-4">
        <div className="w-20 h-20 bg-orange-400 rounded-lg border-4 border-yellow-400 flex items-center justify-center text-5xl font-bold">
          {level}
        </div>
      </div>

      <div className="mb-4">
        <div className="h-4 bg-green-400 rounded-full" style={{ width: `${progress * 100}%` }}></div>
      </div>

      <div className="flex justify-between">
        <div className="text-xl">{xp} XP</div>
        <div className="text-xl">
          1.{nextLevel} Level {nextLevel}
        </div>
      </div>
    </div>
  )
}
