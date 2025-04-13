import React from "react";
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-green-500 shadow-sm px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-zinc-800 ">
        StudyHubby
      </Link>
      <Link
        href="/dashboard"
        className="bg-emerald-600 text-zinc-800 px-4 py-2 rounded-xl hover:bg-emerald-700 transition"
      >
        Login
      </Link>
    </nav>
  )
}