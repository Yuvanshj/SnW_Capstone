import "./home.css"
import ScrollablePosts from "../components/blocks/ScrollablePosts";


const samplePosts = [
  { id: 1, content: "Hello Tomodachi 👋" },
  { id: 2, content: "Second post here!" },
  { id: 3, content: "This is scrollable if the posts exceed height." },
  { id: 3, content: "This is scrollable if the posts exceed height." },
]


const Home = () => {
  return (
    <>
      <div className="home-container z-10">
        <ScrollablePosts posts={samplePosts} />
      </div>
    </>
  )
}

export default Home

