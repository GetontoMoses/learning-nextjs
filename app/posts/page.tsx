import { getPosts } from "./actions";
import PostCard from "./components/post-card";
import type { Post } from "./types/posts";

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="mb-4 font-bold text-4xl">Posts</h1>
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
