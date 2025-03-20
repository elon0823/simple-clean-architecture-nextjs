import getInquiries from './getInquiries';
import createInquiry from './createInquiry';
import {useSession} from "next-auth/react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {Inquiry} from "@/model/inquiry";

export function useGetInquiry() {
  const {data: session} = useSession();

  return useQuery<Inquiry[]>({
    queryKey: ['inquiries.list'] as const,
    queryFn: async() => {
      return await getInquiries();
    },
    enabled: !!session,
  })
}

export function useCreateInquiry() {
  const {data: session} = useSession();

  return useMutation({
    mutationKey: ['inquiries.create'],
    mutationFn: async ({title, contents}: { title: string, contents: string }) => {
      if (!session) {
        throw new Error('Session is not initialized');
      }
      // get the author from the session
      const author = session.user.name;
      return await createInquiry({title, contents, author });
    }
  })
}
