import { Header } from "@/components/header"
import { WeeklyStreaks } from "@/components/weekly-streaks"
import { LearningChallenges } from "@/components/learning-challenges"
import { BadgesReceived } from "@/components/badges-received"
import { ChatBot } from "@/components/chat-bot"
import { Sidebar } from "@/components/sidebar"

export default function DashboardPage() {
  return (
    <div className= "mx-auto">
      <Header />
      
      <div className="flex-1 p-6">
        <div className="flex gap-6 mt-6">
          <Sidebar />
          <div className="flex-1 max-w-7xl">
            <WeeklyStreaks />

            <div className="mt-8">
              <h2 className="text-lg font-medium mb-4">Recent Courses</h2>
              <LearningChallenges />
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium mb-4">Badges Received</h2>
              <BadgesReceived />
            </div>
          </div>

          <div className="w-96">
            <ChatBot />
          </div>
        </div>

      </div>
    </div>
  )
}
