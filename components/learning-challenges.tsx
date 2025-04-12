export function LearningChallenges() {
  const challenges = [
    {
      id: 1,
      title: "Test Course 1",
      color: "bg-yellow-900",
      textColor: "text-yellow-100",
      duration: "2 Days",
      maxTeam: 5,
    },
    {
      id: 2,
      title: "Test Course 2",
      color: "bg-pink-800",
      textColor: "text-pink-100",
      duration: "1 Day",
      maxTeam: 3,
    },
    {
      id: 3,
      title: "Test Course 3",
      color: "bg-blue-900",
      textColor: "text-blue-100",
      duration: "4 Hours",
      maxTeam: 4,
    },
    {
      id: 4,
      title: "Test Course 4",
      color: "bg-orange-900",
      textColor: "text-orange-100",
      duration: "2 Hours",
      noTeam: true,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          className={`${challenge.color} ${challenge.textColor} p-4 rounded-lg border border-border`}
        >
          <h3 className="font-medium">{challenge.title}</h3>
          <div className="mt-2 text-sm opacity-80">
            <p>Duration: {challenge.duration}</p>
            {challenge.noTeam ? <p>No Team Participation</p> : <p>Maximum Team of {challenge.maxTeam}</p>}
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="bg-black bg-opacity-20 px-3 py-1 rounded-full text-xs">Invite</button>
            <button className="bg-primary px-3 py-1 rounded-full text-xs">Join Now</button>
          </div>
        </div>
      ))}
    </div>
  )
}
