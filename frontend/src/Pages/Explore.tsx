import ExploreComp from "../components/comps/ExploreComp";

const Explore = () => {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
            Explore
          </h2>
          <p className="mt-1 text-sm text-zinc-400 max-w-xl">
            Discover beautiful imagery and highlights from around the community. Interact with the sphere below to explore content.
          </p>
        </div>
      </header>

      <div>
        <ExploreComp />
      </div>
    </div>
  )
}

export default Explore
