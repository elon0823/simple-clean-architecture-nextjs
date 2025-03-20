'use server'; // server action 을 통해서 server side 에서 remote datasource 를 접근하도록 함
import {Post} from "@/model/post";
import {getServerApiClient} from "@/lib/apiClient";
import {getPostById} from "@/datasource/remote/post";

async function fetch(id: number): Promise<Post|null> {
  const apiClient = await getServerApiClient();
  const response = await getPostById(id, apiClient);

  if (!response || !response.id) return null;

  return {
    id: response.id ?? 0,
    userId: response.userId ?? 0,
    title: response.title ?? "",
    body: response.body ?? "",
  }
}

export default fetch;
