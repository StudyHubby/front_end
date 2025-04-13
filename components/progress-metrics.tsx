export function ProgressMetrics() {
  const metrics = [
    { id: 1, title: "Overall Progress", value: 45 },
    { id: 2, title: "Assignments", value: 47 },
    { id: 3, title: "Live Class Attendance", value: 55 },
  ]

  return (
    <div className="grid grid-cols-3 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center border border-border"
        >
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#2a3a42" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#10b981"
                strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - metric.value / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{metric.value}%</span>
            </div>
          </div>
          <h3 className="mt-4 text-sm text-center">{metric.title}</h3>
        </div>
      ))}
    </div>
  )
}
