const Home = () => {

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100">
      <div className="flex">
        {/* Left */}
        <aside className="w-64 flex p-4 border-r border-gray-800 h-screen sticky top-0">
          <div className="flex flex-col h-full justify-between">
            <div className="font-bold">Left Sidebar</div>
            <div className="text-sm text-gray-400">@vuy_yuv</div>
          </div>
        </aside>

       {/* {middle} */}
        <div className="flex-1 w-full p-6">
          <div className="flex items-start justify-between gap-6">
            <main className="flex-1 min-w-0">
              <h1 className="text-2xl font-semibold mb-4">Center Feed</h1>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="bg-gray-800 rounded p-4 mb-4">
                  <strong>Post {i + 1}</strong>
                  <p className="text-sm text-gray-300 mt-2">Sample content for the feed.</p>
                </div>
              ))}
            </main>

            {/* Right */}
            <aside className="w-72 flex-0">
              <div className="sticky top-6">
                <div className="bg-gray-800 rounded p-4">Right Sidebar (sticky)</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home