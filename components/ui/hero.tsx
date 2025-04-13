import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="w-full py-6 px-8 space-y-6 text-center bg-gray-900">
      <div className="space-y-4">
        <div className="font-bold text-emerald-500 text-3xl">StudyHubby</div>
        <div className="underline-offset-2 text-white max-w-xl mx-auto">
          Reform your studying today with our study soul-mate by your side!
        </div>
        <Link href="/dashboard">
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition">
            Sign Up!
          </button>
        </Link>
      </div>
    </div>
  )
}

