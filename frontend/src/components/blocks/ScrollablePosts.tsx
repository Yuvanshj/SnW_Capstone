import { PostCard } from "../ui/post-card";

interface ScrollablePostsProps {
  posts: {
    id: string | number;
    content: string;
  }[];
}

export default function ScrollablePosts({ posts }: ScrollablePostsProps) {
  return (
    <div className="h-full overflow-y-auto flex flex-col items-center px-4 py-3 space-y-4 rounded-2xl scale-100">
      {posts.length === 0 ? (
        <p className="text-gray-400 text-center">No posts yet...</p>
      ) : (
        posts.map((post) => (
            <PostCard key={post.id} />
        ))
      )}
    </div>
  );
}