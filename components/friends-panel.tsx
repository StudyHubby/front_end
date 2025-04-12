import { Search } from "lucide-react"
import Image from "next/image"

export function FriendsPanel() {
  const friends = [
    { id: 1, name: "Buyan K", status: "Online", online: true },
    { id: 2, name: "Test Student", status: "Online", online: true },
    { id: 3, name: "Test Student", status: "Last seen 2h ago", online: false },
    { id: 4, name: "Spongebob", status: "Last seen 5h ago", online: false },
    { id: 5, name: "Patrick", status: "Online", online: true },
    { id: 6, name: "Sandy", status: "Last seen 1d ago", online: false },
    { id: 7, name: "Squidward", status: "Online", online: true },
    { id: 8, name: "Plankton", status: "Last seen 3h ago", online: false },
  ]

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">Invitation</h2>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
              BK
            </div>
            <div className="ml-2 flex-1">
              <p className="text-sm font-medium">Buyan K</p>
              <p className="text-xs text-gray-500">Invited you to join</p>
            </div>
          </div>
          <div className="mt-2 flex space-x-2">
            <button className="bg-white border border-gray-300 px-3 py-1 rounded text-xs flex-1">Decline</button>
            <button className="bg-purple-800 text-white px-3 py-1 rounded text-xs flex-1">Accept</button>
          </div>
        </div>

        <div className="mt-3 bg-gray-50 p-3 rounded-lg">
          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
              L
            </div>
            <div className="ml-2 flex-1">
              <p className="text-sm font-medium">Luis</p>
              <p className="text-xs text-gray-500">Invited you to join</p>
            </div>
          </div>
          <div className="mt-2 flex space-x-2">
            <button className="bg-white border border-gray-300 px-3 py-1 rounded text-xs flex-1">Decline</button>
            <button className="bg-purple-800 text-white px-3 py-1 rounded text-xs flex-1">Accept</button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-4">Friends List</h2>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search name or email"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-3">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 relative">
                  <Image src="/placeholder.svg?height=32&width=32" alt={friend.name} width={32} height={32} />
                  {friend.online && (
                    <span className="absolute bottom-0 right-0 h-2 w-2 bg-green-500 rounded-full border border-white"></span>
                  )}
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">{friend.name}</p>
                  <p className="text-xs text-gray-500">{friend.status}</p>
                </div>
              </div>
              <button className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
