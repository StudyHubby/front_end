import { PointsDisplay } from "./points-display"
import { StorySection } from "./story-section"
import { MultiplayerChallenges } from "./multiplayer-challenges"
import { Leaderboard } from "./leaderboard"
import { LevelTracker } from "./level-tracker"
import { LearningBuddy } from "./learning-buddy"

export function Dashboard() {
  return (
    <div> 
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="flex-1 p-6 bg-white">
          <PointsDisplay points={600} />

          <div className="mt-6">
            <StorySection />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <MultiplayerChallenges />
            <Leaderboard />
          </div>
        </div>

        <div className="w-full md:w-96 bg-blue-500">
          <LevelTracker level={4} xp={160} nextLevel={5} progress={0.6} />
          <LearningBuddy />
        </div>
      </div>
    </div>
  )
}
