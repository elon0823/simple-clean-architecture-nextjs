import getPosts from './getPosts';
import getPost from './getPost';
import {useSession} from "next-auth/react";
import {Post} from "@/model/post";
import {useQuery} from "@tanstack/react-query";

export function useGetPost({id}: {id?: number}){
  const {data: session} = useSession();

  return useQuery<Post|null>({
    queryKey: ['posts.get', id] as const,
    queryFn: async() => {
      if (!id) return null;
      return await getPost(id);
    },
    enabled: !!session && !!id,
  })
}

export function useGetPosts() {
  const {data: session} = useSession();

  return useQuery<Post[]>({
    queryKey: ['posts.list'] as const,
    queryFn: async() => {
      return await getPosts();
    },
    enabled: !!session,
  })
}
