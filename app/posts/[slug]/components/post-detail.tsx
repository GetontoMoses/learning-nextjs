import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { Post } from "../../types/posts";

export default function Component({ post }: { post: Post }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>johndoe@example.com</CardDescription>
      </CardHeader>
      <CardContent>{post.body}</CardContent>
    </Card>
  );
}
