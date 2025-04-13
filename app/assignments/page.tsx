import { Header } from "@/components/header"

export default function AssignmentsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Assignments</h1>
        <p className="mt-4 text-gray-600">Your pending and completed assignments will appear here.</p>
      </div>
    </div>
  )
}
