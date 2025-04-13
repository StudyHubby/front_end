export function WeeklyStreaks() {
  const days = [
    { day: 1, completed: true },
    { day: 2, completed: true },
    { day: 3, completed: true },
    { day: 4, completed: true },
    { day: 5, completed: false },
    { day: 6, completed: false },
    { day: 7, completed: false },
  ]

  return (
    <div className="bg-card p-4 rounded-lg border border-border">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-medium">Weekly Streaks</h2>
        <div className="ml-2 h-5 w-5 rounded-full bg-secondary flex items-center justify-center">
          <span className="text-xs text-muted-foreground">?</span>
        </div>
      </div>

      <div className="flex space-x-4">
        {days.map((day) => (
          <div key={day.day} className="flex flex-col items-center">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center ${
                day.completed ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}
            >
              {day.completed ? "🔥" : ""}
            </div>
            <span className="text-xs mt-1">Day {day.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
