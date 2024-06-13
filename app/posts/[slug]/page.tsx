import { getPostById, getPostComments } from "../actions";
import PostDetailCard from "./components/post-detail";
import CommentCard from "./components/comment-card";
import type { Comment } from "../types/posts";
import { Suspense } from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostById({ id: Number(params.slug) });

  return (
    <div className="container mx-auto">
      <PostDetailCard post={post} />
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments postID={post.id} />
      </Suspense>
    </div>
  );
}

async function Comments({ postID }: { postID: number }) {
  const comments = await getPostComments({ id: Number(postID) });

  return (
    <>
      {comments.map((comment: Comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </>
  );
}
