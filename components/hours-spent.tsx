export function HoursSpent() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Hours Spent</h2>
        <span className="text-xs text-primary">View Detailed Report</span>
      </div>

      <div className="text-2xl font-bold mb-4">12 h 40 min</div>

      <div className="h-40 flex items-end space-x-2">
        {[3, 5, 6, 8, 4, 2, 1, 3, 5, 7, 6, 8].map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className={`w-full ${index === 10 ? "bg-primary" : "bg-secondary"}`}
              style={{ height: `${height * 10}%` }}
            ></div>
            <span className="text-xs mt-1">{["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F"][index]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
