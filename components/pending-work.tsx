import { Clock, BookOpen, HelpCircle, CheckCircle } from "lucide-react"

export function PendingWork() {
  const pendingItems = [
    {
      id: 1,
      title: "Complete Math Quiz",
      course: "Basic Mathematics",
      dueDate: "Today",
      type: "quiz",
      urgent: true,
    },
    {
      id: 2,
      title: "Submit Science Project",
      course: "Science for Kids",
      dueDate: "Tomorrow",
      type: "assignment",
      urgent: false,
    },
    {
      id: 3,
      title: "Watch Art Tutorial",
      course: "Art & Creativity",
      dueDate: "3 days left",
      type: "video",
      urgent: false,
    },
  ]

  return (
    <div className="bg-gradient-to-b from-[#1a2e35] to-[#0a1215] p-6 rounded-lg shadow-lg border border-[#2a3a42]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Work To Do</h2>
        <div className="text-sm text-green-400">{pendingItems.length} items</div>
      </div>

      <div className="space-y-4">
        {pendingItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#0a1215] rounded-lg p-4 border border-[#2a3a42] hover:border-green-900 transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-white">{item.title}</h3>
              <div
                className={`text-xs px-2 py-1 rounded-full ${item.urgent ? "bg-red-900/30 text-red-400" : "bg-[#1a2e35] text-gray-400"}`}
              >
                {item.dueDate}
              </div>
            </div>

            <div className="flex items-center text-xs text-gray-400">
              <BookOpen className="h-3 w-3 mr-1" />
              <span>{item.course}</span>
            </div>

            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center text-xs">
                {item.type === "quiz" && (
                  <div className="flex items-center text-yellow-400">
                    <HelpCircle className="h-3 w-3 mr-1" />
                    <span>Quiz</span>
                  </div>
                )}
                {item.type === "assignment" && (
                  <div className="flex items-center text-teal-400">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Assignment</span>
                  </div>
                )}
                {item.type === "video" && (
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    <span>Video</span>
                  </div>
                )}
              </div>

              <button className="text-green-400 text-xs hover:text-green-300 transition-colors">Start Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
