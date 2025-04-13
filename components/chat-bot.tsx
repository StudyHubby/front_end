"use client"

import { useState, useRef, useEffect } from "react"
import { FileText, ImageIcon, Send } from "lucide-react"

export function ChatBot() {
  const [message, setMessage] = useState("")
  const [files, setFiles] = useState<{ name: string; type: string }[]>([])
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! I'm your learning assistant. Upload your notes or ask me anything!", isUser: false },
  ])
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [message])

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isUser: true }])

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "I'm analyzing your question. Based on your notes, here's what I found...",
            isUser: false,
          },
        ])
      }, 1000)

      setMessage("")

      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "40px"
      }
    }
  }

  const handleFileUpload = (type: "pdf" | "image") => {
    // Simulate file upload
    const fileName = type === "pdf" ? "lecture_notes.pdf" : "handwritten_notes.jpg"
    setFiles([...files, { name: fileName, type }])

    // Simulate bot response after file upload
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: `I've analyzed your ${type === "pdf" ? "PDF" : "handwritten notes"}. What would you like to know about it?`,
          isUser: false,
        },
      ])
    }, 1500)
  }

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl shadow-lg overflow-hidden flex flex-col h-full border border-slate-700">
      <div className="p-6 text-center bg-gradient-to-r from-indigo-900 to-purple-900 border-b border-slate-700">
        <h2 className="text-3xl font-bold text-white">Study Assistant</h2>
        <p className="text-indigo-200 text-lg mt-2">
          Your friendly AI study buddy. Upload notes or ask questions anytime
        </p>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4 min-h-[350px] bg-gradient-to-b from-slate-800 to-slate-900">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
            {!msg.isUser && (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                <div className="text-2xl">😊</div>
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl p-4 shadow-lg ${
                msg.isUser
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "bg-gradient-to-r from-slate-700 to-slate-600 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-slate-700 bg-slate-800">
        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={() => handleFileUpload("pdf")}
            className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 rounded-full px-6 py-3 text-white shadow-md transition-all duration-200"
          >
            <FileText className="h-5 w-5 text-indigo-300" />
            <span className="font-medium">Upload PDF</span>
          </button>
          <button
            onClick={() => handleFileUpload("image")}
            className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 rounded-full px-6 py-3 text-white shadow-md transition-all duration-200"
          >
            <ImageIcon className="h-5 w-5 text-indigo-300" />
            <span className="font-medium">Upload Image</span>
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about your notes..."
            className="flex-1 bg-slate-700 border border-slate-600 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-400"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full p-4 shadow-md transition-all duration-200"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
