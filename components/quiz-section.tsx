"use client"

import { useState } from "react"
import { CheckCircle, XCircle, HelpCircle, ArrowRight } from "lucide-react"

export function QuizSection() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [needsHelp, setNeedsHelp] = useState(false)

  const quizzes = [
    {
      question: "What happens when you mix blue and yellow paint?",
      options: ["Purple", "Green", "Orange", "Brown"],
      correctAnswer: 1,
      explanation:
        "When you mix blue and yellow paint, you get green! It's like magic when colors combine to make new colors.",
      simplifiedExplanation:
        "Blue + Yellow = Green! Just like when you mix blueberries and banana in a smoothie, you get a new color!",
    },
    {
      question: "Which animal can fly?",
      options: ["Fish", "Bird", "Cat", "Elephant"],
      correctAnswer: 1,
      explanation: "Birds have wings that allow them to fly through the air by flapping and creating lift.",
      simplifiedExplanation:
        "Birds have special wings that help them push against the air and stay up high in the sky!",
    },
    {
      question: "How many sides does a triangle have?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      explanation: "A triangle is a shape with exactly three sides and three angles.",
      simplifiedExplanation: "A triangle has 3 sides! Count them: 1, 2, 3! That's why it's called a TRI-angle!",
    },
  ]

  const currentQuestion = quizzes[currentQuiz]

  const handleSelectAnswer = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswer(index)
      setIsAnswered(true)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setNeedsHelp(false)
    }
  }

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer

  return (
    <div className="bg-gradient-to-b from-[#1a2e35] to-[#0a1215] p-6 rounded-lg shadow-lg border border-[#2a3a42]">
      <h2 className="text-xl font-bold text-white mb-6">Quiz Time!</h2>

      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Question {currentQuiz + 1} of {quizzes.length}
        </div>
        <div className="flex space-x-1">
          {quizzes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentQuiz ? "bg-green-500" : index < currentQuiz ? "bg-green-700" : "bg-[#2a3a42]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-[#0a1215] rounded-lg p-5 border border-[#2a3a42] mb-6">
        <h3 className="text-lg font-medium text-white mb-4">{currentQuestion.question}</h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={isAnswered}
              className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-all ${
                isAnswered
                  ? index === currentQuestion.correctAnswer
                    ? "bg-green-900/30 border border-green-500 text-white"
                    : index === selectedAnswer
                      ? "bg-red-900/30 border border-red-500 text-white"
                      : "bg-[#0a1215] border border-[#2a3a42] text-gray-300"
                  : "bg-[#0a1215] border border-[#2a3a42] text-white hover:bg-[#1a2e35] hover:border-green-900"
              }`}
            >
              <span>{option}</span>
              {isAnswered && index === currentQuestion.correctAnswer && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {isAnswered && (
        <div
          className={`p-4 rounded-lg mb-6 ${isCorrect ? "bg-green-900/20 border border-green-700" : "bg-red-900/20 border border-red-700"}`}
        >
          <div className="flex items-start">
            {isCorrect ? (
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
            )}
            <div>
              <p className={`font-medium ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                {isCorrect ? "Correct!" : "Not quite right"}
              </p>
              <p className="text-white text-sm mt-1">
                {needsHelp ? currentQuestion.simplifiedExplanation : currentQuestion.explanation}
              </p>
              {!needsHelp && (
                <button
                  onClick={() => setNeedsHelp(true)}
                  className="text-green-400 text-sm mt-2 flex items-center hover:text-green-300 transition-colors"
                >
                  <HelpCircle className="h-4 w-4 mr-1" />
                  Explain like I'm young
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <div>
          {!isAnswered && (
            <button
              onClick={() => setNeedsHelp(true)}
              className="text-green-400 flex items-center hover:text-green-300 transition-colors"
            >
              <HelpCircle className="h-4 w-4 mr-1" />I need help
            </button>
          )}
        </div>

        {isAnswered && (
          <button
            onClick={handleNextQuestion}
            className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center"
          >
            Next Question
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        )}
      </div>
    </div>
  )
}
