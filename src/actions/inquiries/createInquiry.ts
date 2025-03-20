'use server'; // server action 을 통해서 server side 에서 remote datasource 를 접근하도록 함
import {Inquiry} from "@/model/inquiry";
import {getServerApiClient} from "@/lib/apiClient";
import {createInquiry} from "@/datasource/remote/inquiry";

async function mutate({title, contents, author}: { title: string, contents: string, author: string}): Promise<Inquiry> {
  const apiClient = await getServerApiClient();
  const response = await createInquiry(
    {
      title: title,
      contents: contents,
      author: author,
    }, apiClient);

  return {
    id: response.id ?? 0,
    title: response.title ?? "",
    contents: response.contents ?? "",
    author: response.author ?? "",
    createdAt: response.createdAt ? new Date(response.createdAt) : new Date(),
    status: response.status ?? "PENDING",
  }
}

export default mutate;
