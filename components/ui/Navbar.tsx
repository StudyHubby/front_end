import React from "react";
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-emerald-600">
        StudyHubby
      </Link>
      <Link
        href="/login"
        className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition"
      >
        Login
      </Link>
    </nav>
  )
}