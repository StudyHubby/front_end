import { Header } from "@/components/header"

export default function LogoutPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Logout</h1>
        <p className="mt-4 text-gray-600">You have been logged out successfully.</p>
        <button className="mt-6 bg-purple-800 text-white px-4 py-2 rounded-md">Log back in</button>
      </div>
    </div>
  )
}
