import { Header } from "@/components/header"

export default function LiveClassesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Live Classes</h1>
        <p className="mt-4 text-gray-600">Your scheduled live classes will appear here.</p>
      </div>
    </div>
  )
}
