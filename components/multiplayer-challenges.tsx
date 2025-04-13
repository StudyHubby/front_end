export function MultiplayerChallenges() {
  return (
    <div className="bg-blue-100 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Multiplayer Challenges</h2>

      <div className="flex items-center justify-center gap-4">
        {/* Player 1 */}
        <div className="w-16 h-16 bg-yellow-800 rounded-full overflow-hidden">
          <div className="w-full h-3/4 mt-4 bg-black rounded-t-full"></div>
          <div className="flex justify-center -mt-8">
            <div className="w-8 h-4 bg-orange-900 rounded-full"></div>
          </div>
          <div className="flex justify-between px-3 -mt-1">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
        </div>

        {/* VS */}
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          VS
        </div>

        {/* Player 2 */}
        <div className="w-16 h-16 bg-orange-400 rounded-full overflow-hidden">
          <div className="w-full h-1/3 bg-orange-500"></div>
          <div className="flex justify-between px-3 mt-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
          <div className="flex justify-center mt-1">
            <div className="w-6 h-2 bg-red-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
