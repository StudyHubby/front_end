"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BookOpen, Inbox, Video, Gamepad2, Settings, HelpCircle, LogOut, Bot } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="w-64 bg-transparent min-h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold">
          <span className="text-foreground">skill</span>
          <span className="text-primary">STREET</span>
        </h1>
      </div>

      <div className="px-4 py-2">
        <h2 className="text-sm font-medium text-muted-foreground">My Profile</h2>
        <nav className="mt-2 space-y-1">
          <Link
            href="/dashboard"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/dashboard") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>

          <Link
            href="/courses"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/courses") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Courses
          </Link>

          <Link
            href="/inbox"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/inbox") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <Inbox className="w-5 h-5 mr-3" />
            Inbox
          </Link>
        </nav>
      </div>

      <div className="px-4 py-2 mt-4">
        <h2 className="text-sm font-medium text-muted-foreground">Academic</h2>
        <nav className="mt-2 space-y-1">
          <Link
            href="/live-classes"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/live-classes") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <Video className="w-5 h-5 mr-3" />
            Live Classes
          </Link>

          <Link
            href="/practice-zone"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/practice-zone") ? "bg-primary text-background" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <Gamepad2 className="w-5 h-5 mr-3" />
            Practice Zone
          </Link>

          <Link
            href="/study-assistant"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/study-assistant") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <Bot className="w-5 h-5 mr-3" />
            Study Assistant
          </Link>

          <Link
            href="/live-classes"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/assignments") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <Video className="w-5 h-5 mr-3" />
            Assignments
          </Link>
        </nav>
      </div>

      <div className="px-4 py-2 mt-4">
        <h2 className="text-sm font-medium text-muted-foreground">Account</h2>
        <nav className="mt-2 space-y-1">
          <Link
            href="/live-classes"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/settings") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>

          <Link
            href="/live-classes"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/help-centre") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <HelpCircle className="w-5 h-5 mr-3" />
            Help Centre
          </Link>

          <Link
            href="/live-classes"
            className={`flex items-center px-4 py-2 text-sm rounded-md ${
              isActive("/logout") ? "bg-secondary/70 text-primary" : "text-foreground hover:bg-secondary/50"
            }`}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Link>
        </nav>
      </div>
    </div>
  )
}
