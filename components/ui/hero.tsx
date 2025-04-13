import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="w-full flex justify-start px-6 py-12">
      <div className="bg-gray-900 text-white rounded-xl shadow-lg px-10 py-12 max-w-2xl w-full space-y-10">
        <div className="text-3xl font-bold text-emerald-500">Your Learning... Amplified!</div>

        <div className="underline underline-offset-1 decoration-wavy">
          Reform your studying today with our study soul-mate by your side!
        </div>

        <Link href="/dashboard">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition mt-6">
            Sign Up!
          </button>
        </Link>
      </div>
    </div>
  )
}
