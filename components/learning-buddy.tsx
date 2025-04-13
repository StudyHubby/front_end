"use client"

import { useState } from "react"
import { ChevronRight, FileText, Send } from "lucide-react"

export function LearningBuddy() {
  const [message, setMessage] = useState("")
  const [isReady, setIsReady] = useState(false)

  return (
    <div className="bg-white m-6 rounded-3xl p-6 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Meet Your Study Hubby</h2>
        <p className="text-gray-700 mt-2">Upload any document or image. Ask a question. Learn fast!</p>
      </div>

      <div className="space-y-4">
        <button className="w-full flex items-center justify-between border border-gray-300 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <FileText className="text-blue-500" />
            <span>Upload Document</span>
          </div>
          <ChevronRight />
        </button>

        <div className="w-full flex items-center justify-between border border-gray-300 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <FileText className="text-blue-500" />
            <div>
              <div>camprof pdf</div>
              <div className="text-sm text-gray-500">Heres a summary of your file...</div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isReady ? "bg-blue-100 border-blue-300" : "border-gray-300"}`}
            onClick={() => setIsReady(!isReady)}
          >
            <span className="inline-block w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
              hi
            </span>
            <span>Ready to chat!</span>
          </button>

          <button className="bg-blue-500 text-white p-2 rounded-full">
            <Send className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full"></div>
    </div>
  )
}
