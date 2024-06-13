import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "../types/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {post.id}. {post.title}
        </CardTitle>
        <CardDescription>By User {post.userId}</CardDescription>
      </CardHeader>
      <CardContent>{post.body}</CardContent>
      <CardFooter>
        <a href="#">Read more</a>
      </CardFooter>
    </Card>
  );
}
