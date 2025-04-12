export function Achievements() {
  return (
    <>
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h2 className="text-lg font-medium mb-4">Certificates Earned</h2>
        <div className="flex items-center">
          <span className="text-5xl font-bold">2</span>
          <div className="ml-4 text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
              <circle cx="12" cy="8" r="7"></circle>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h2 className="text-lg font-medium mb-4">Reward Points</h2>
        <div className="flex items-center">
          <span className="text-5xl font-bold">176</span>
          <div className="ml-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
