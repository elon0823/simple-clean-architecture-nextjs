import type { Post } from "@/model/post"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/molecules/Card"
import { BasicButton } from "@/components/atoms/Button"
import { Paragraph } from "@/components/atoms/Typography"

interface PostCardProps {
  post: Post;
  onClick?: () => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
  return (
    <Card className="h-full flex flex-col" onClick={onClick}>
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription>작성자 ID: {post.userId}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Paragraph className="text-sm text-muted-foreground line-clamp-4">{post.body}</Paragraph>
      </CardContent>
      <CardFooter>
        <BasicButton variant="outline" className="w-full">
          자세히 보기
        </BasicButton>
      </CardFooter>
    </Card>
  )
}

