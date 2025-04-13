"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { FileText, ImageIcon, Send, X } from "lucide-react"

type Message = {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

type UploadedFile = {
  id: string
  name: string
  type: "pdf" | "image"
  size: string
}

export function AdvancedChatBot() {
  const [message, setMessage] = useState("")
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm your learning assistant. Upload your notes or ask me anything about your course materials!",
      isUser: false,
      timestamp: new Date(),
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [message])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        isUser: true,
        timestamp: new Date(),
      }

      setMessages([...messages, newMessage])
      setMessage("")

      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "40px"
      }

      // Simulate bot response
      setTimeout(() => {
        let responseText = "I'm analyzing your question..."

        if (files.length > 0) {
          responseText += " Based on your uploaded materials, I can tell you that..."

          if (message.toLowerCase().includes("explain")) {
            responseText +=
              " The concept you're asking about involves several key principles. First, you need to understand the foundational elements. Then, consider how these elements interact with each other in different contexts."
          } else if (message.toLowerCase().includes("summary")) {
            responseText +=
              " Here's a summary of the main points from your notes: 1) Key concept definitions, 2) Important formulas and their applications, 3) Example problems with step-by-step solutions."
          } else {
            responseText +=
              " I found relevant information in your materials that addresses your question. The main points to consider are the underlying principles and how they apply to different scenarios."
          }
        } else {
          responseText += " To provide more specific help, consider uploading your notes or course materials."
        }

        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          isUser: false,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
      }, 1500)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    if (fileList && fileList.length > 0) {
      const file = fileList[0]
      const fileType = file.type.includes("pdf") ? "pdf" : "image"
      const fileSize = (file.size / 1024 / 1024).toFixed(2) + " MB"

      const newFile: UploadedFile = {
        id: Date.now().toString(),
        name: file.name,
        type: fileType as "pdf" | "image",
        size: fileSize,
      }

      setFiles([...files, newFile])

      // Simulate bot response after file upload
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `I've analyzed your ${fileType === "pdf" ? "PDF" : "image"} "${file.name}". It contains information about various concepts and examples. What would you like to know about it?`,
          isUser: false,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
      }, 2000)
    }

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl shadow-lg overflow-hidden flex flex-col h-full border border-slate-700">
      <div className="p-6 text-center bg-gradient-to-r from-indigo-900 to-purple-900 border-b border-slate-700">
        <h2 className="text-3xl font-bold text-white">Study Assistant</h2>
        <p className="text-indigo-200 text-lg mt-2">
          Your friendly AI study buddy. Upload notes or ask questions anytime
        </p>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4 min-h-[400px] bg-gradient-to-b from-slate-800 to-slate-900">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
            {!msg.isUser && (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                <div className="text-2xl">😊</div>
              </div>
            )}

            <div
              className={`max-w-[75%] rounded-2xl p-4 shadow-lg ${
                msg.isUser
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "bg-gradient-to-r from-slate-700 to-slate-600 text-white"
              }`}
            >
              <div className="mb-1">{msg.text}</div>
              <div className={`text-xs ${msg.isUser ? "text-indigo-200" : "text-slate-300"} text-right`}>
                {formatTime(msg.timestamp)}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {files.length > 0 && (
        <div className="px-4 py-2 border-t border-slate-700 bg-slate-800">
          <p className="text-xs text-slate-300 mb-2">Uploaded files:</p>
          <div className="flex flex-wrap gap-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center bg-slate-700 border border-slate-600 rounded-full px-3 py-1 text-xs shadow-md"
              >
                {file.type === "pdf" ? (
                  <FileText className="h-3 w-3 mr-1 text-red-400" />
                ) : (
                  <ImageIcon className="h-3 w-3 mr-1 text-blue-400" />
                )}
                <span className="truncate max-w-[120px] text-white">{file.name}</span>
                <span className="text-slate-400 mx-1">({file.size})</span>
                <button onClick={() => removeFile(file.id)} className="ml-1 text-slate-400 hover:text-white">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 border-t border-slate-700 bg-slate-800">
        <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".pdf,image/*" className="hidden" />

        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={() => fileInputRef.current?.click()}
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
            disabled={!message.trim()}
            className={`${
              message.trim()
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                : "bg-slate-600 cursor-not-allowed"
            } text-white rounded-full p-4 shadow-md transition-all duration-200`}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
