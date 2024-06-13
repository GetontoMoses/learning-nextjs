"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { Post } from "../types/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>
          {post.id}. {post.title}
        </CardTitle>
        <CardDescription>By User {post.userId}</CardDescription>
      </CardHeader>
      <CardContent>{post.body}</CardContent>
      <CardFooter>
        <a href={`/posts/${post.id}`}>
          <Button>Read more</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
