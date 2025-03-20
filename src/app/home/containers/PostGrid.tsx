'use client';
import {PostCard} from "@/components/organisms/PostCard";
import {useGetPosts} from "@/actions/posts";

export function PostGrid() {
  const { data: posts } = useGetPosts();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
