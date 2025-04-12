export function BadgesReceived() {
  const badges = [
    {
      id: 1,
      title: "Achievement 1",
      subtitle: "30 Days",
      date: "Apr 12, 2025",
      color: "bg-purple-900",
      textColor: "text-purple-100",
      icon: "🏆",
    },
    {
      id: 2,
      title: "Achievement 2",
      date: "Apr 12, 2025",
      color: "bg-orange-900",
      textColor: "text-orange-100",
      icon: "🌟",
    },
    {
      id: 3,
      title: "Achievement 3",
      date: "Apr 12, 2025",
      color: "bg-blue-900",
      textColor: "text-blue-100",
      icon: "🎨",
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className={`${badge.color} ${badge.textColor} p-4 rounded-lg relative border border-border`}
        >
          <div className="absolute top-2 right-2 text-gray-300">
            <button>
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
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">{badge.icon}</div>
            <h3 className="text-sm font-medium text-center">{badge.title}</h3>
            {badge.subtitle && <p className="text-xs opacity-80">{badge.subtitle}</p>}
            <p className="text-xs opacity-80 mt-1">{badge.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
