export function StorySection() {
  return (
    <div className="bg-sky-400 rounded-lg p-6 text-white relative overflow-hidden h-80">
      <h2 className="text-4xl font-bold mb-4">Story</h2>

      {/* Cloud */}
      <div className="absolute top-6 right-6 w-20 h-12 bg-white rounded-full"></div>


      {/* Hills */}
      <div className="absolute -bottom-20 -left-10 w-40 h-40 bg-green-600 rounded-full"></div>
      <div className="absolute -bottom-20 right-1/4 w-40 h-40 bg-green-600 rounded-full"></div>
      <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-green-600 rounded-full"></div>
    </div>
  )
}
