import { CheckCircle } from "lucide-react"

interface PointsDisplayProps {
  points: number
}

export function PointsDisplay({ points }: PointsDisplayProps) {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-5xl font-bold text-gray-800">
        {points} <span className="text-3xl">pts</span>
      </h1>

      <div className="flex gap-2">
        <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
          <span className="text-yellow-600">😊</span>
        </div>

        <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
          <span className="text-yellow-600">✓</span>
        </div>

        <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
          <span className="text-yellow-600">XP</span>
        </div>

        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span>Achievement Unlocked!</span>
        </div>
      </div>
    </div>
  )
}
