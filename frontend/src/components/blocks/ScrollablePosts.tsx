interface ScrollablePostsProps {
  posts: {
    id: string | number;
    content: string;
  }[];
}

export default function ScrollablePosts({ posts }: ScrollablePostsProps) {
  return (
    <div className="h-full w-full overflow-y-auto px-4 py-3 space-y-4 bg-[#0f0f10] rounded-2xl">
      {posts.length === 0 ? (
        <p className="text-gray-400 text-center">No posts yet...</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#1a1a1c] p-4 rounded-xl border border-white/5 hover:border-white/10 transition"
          >
            <p className="text-gray-200">{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}