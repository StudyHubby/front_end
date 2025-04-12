import { Header } from "@/components/header"
import { CoursesEnrolled } from "@/components/courses-enrolled"
import { QuizSection } from "@/components/quiz-section"
import { PendingWork } from "@/components/pending-work"

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CoursesEnrolled />
        <div className="space-y-6">
          <QuizSection />
          <PendingWork />
        </div>
      </div>
    </div>
  )
}
