import React from "react";
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-transparent shadow-sm px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-green-400">
        StudyHubby
      </Link>
      <Link
        href="/dashboard"
        className="bg-green-400 text-white px-4 py-2 rounded-xl hover:bg-green-500 transition"
      >
        Login
      </Link>
    </nav>
  )
}