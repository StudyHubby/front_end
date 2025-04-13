import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="w-full py-14 px-14">
      <div className="max-w-2xl space-y-10 text-lef bg-gray-900">
        <div className="text-3xl font-bold text-emerald-500">StudyHubby</div>
     
        <div className="text-white underline-offset-2">
          Reform your studying today with our study soul-mate by your side!
        </div>
        <Link href="/dashboard">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition">
            Sign Up!
          </button>
        </Link>
       </div>
      </div>
  )
}

