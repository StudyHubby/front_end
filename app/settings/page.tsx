import { Header } from "@/components/header"

export default function SettingsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-4 text-gray-600">Manage your account settings and preferences.</p>
      </div>
    </div>
  )
}
