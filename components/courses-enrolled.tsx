"use client"

import { useState } from "react"
import { BookOpen, CheckCircle, AlertCircle, ChevronRight } from "lucide-react"

export function CoursesEnrolled() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Introduction to Programming",
      progress: 75,
      color: "from-green-600 to-green-400",
      icon: "💻",
      hasQuiz: true,
      quizCompleted: false,
      hasAssignment: true,
      assignmentCompleted: true,
    },
    {
      id: 2,
      name: "Basic Mathematics",
      progress: 45,
      color: "from-emerald-600 to-emerald-400",
      icon: "🔢",
      hasQuiz: true,
      quizCompleted: true,
      hasAssignment: true,
      assignmentCompleted: false,
    },
    {
      id: 3,
      name: "Science for Kids",
      progress: 30,
      color: "from-teal-600 to-teal-400",
      icon: "🔬",
      hasQuiz: false,
      quizCompleted: false,
      hasAssignment: true,
      assignmentCompleted: false,
    },
    {
      id: 4,
      name: "Art & Creativity",
      progress: 10,
      color: "from-lime-600 to-lime-400",
      icon: "🎨",
      hasQuiz: true,
      quizCompleted: false,
      hasAssignment: false,
      assignmentCompleted: false,
    },
  ])

  return (
    <div className="bg-gradient-to-b from-[#1a2e35] to-[#0a1215] p-6 rounded-lg shadow-lg border border-[#2a3a42]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">My Courses</h2>
        <button className="text-green-400 text-sm hover:text-green-300 transition-colors">View All</button>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#0a1215] rounded-lg p-4 border border-[#2a3a42] hover:border-green-900 transition-all"
          >
            <div className="flex items-center mb-3">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-xl shadow-lg mr-3`}
              >
                {course.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{course.name}</h3>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <BookOpen className="h-3 w-3 mr-1" />
                  <span>{course.progress}% completed</span>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </div>

            <div className="h-2 bg-[#2a3a42] rounded-full overflow-hidden mb-3">
              <div className={`h-full bg-gradient-to-r ${course.color}`} style={{ width: `${course.progress}%` }}></div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center">
                {course.hasQuiz && (
                  <div className="flex items-center mr-3">
                    {course.quizCompleted ? (
                      <CheckCircle className="h-3 w-3 text-green-400 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 text-yellow-400 mr-1" />
                    )}
                    <span className={course.quizCompleted ? "text-green-400" : "text-yellow-400"}>Quiz</span>
                  </div>
                )}

                {course.hasAssignment && (
                  <div className="flex items-center">
                    {course.assignmentCompleted ? (
                      <CheckCircle className="h-3 w-3 text-green-400 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 text-yellow-400 mr-1" />
                    )}
                    <span className={course.assignmentCompleted ? "text-green-400" : "text-yellow-400"}>
                      Assignment
                    </span>
                  </div>
                )}
              </div>

              <button className="text-green-400 hover:text-green-300 transition-colors">Continue</button>
            </div>
          </div>
        ))}

        <button className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white rounded-lg shadow-md transition-all duration-200 font-medium">
          Add New Course
        </button>
      </div>
    </div>
  )
}
