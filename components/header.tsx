"use client"

import { Bell, ChevronDown, Search } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <input
          type="text"
          placeholder="Search courses, class and materials"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="h-6 w-6 text-muted-foreground" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-primary rounded-full"></span>
        </button>

        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-secondary overflow-hidden">
            <Image src="/placeholder.svg?height=32&width=32" alt="Joseph John" width={32} height={32} />
          </div>
          <div className="ml-2 flex items-center">
            <span className="text-sm font-medium">Student S.</span>
            <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}
