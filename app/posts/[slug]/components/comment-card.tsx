"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Comment } from "../../types/posts";
import CommentReplyForm from "./comment-reply-form";

export default function Component({ comment }: { comment: Comment }) {
  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <CardDescription>{comment.email}</CardDescription>
      </CardHeader>
      <CardContent>{comment.body}</CardContent>
      <CardFooter>
        <CommentReplyForm />
      </CardFooter>
    </Card>
  );
}
