import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Comment } from "../../types/posts";

interface CommentCardProps {
  comment: Comment;
}

export default function Component({ comment }: CommentCardProps) {
  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <CardDescription>{comment.email}</CardDescription>
      </CardHeader>
      <CardContent>{comment.body}</CardContent>
      <CardFooter>
        <Button variant="secondary">Reply</Button>
      </CardFooter>
    </Card>
  );
}
