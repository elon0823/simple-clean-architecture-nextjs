'use server'; // server action 을 통해서 server side 에서 remote datasource 를 접근하도록 함
import {Post} from "@/model/post";
import {getServerApiClient} from "@/lib/apiClient";
import {getPosts} from "@/datasource/remote/post";

async function fetch(): Promise<Post[]> {
  const apiClient = await getServerApiClient();
  const response = await getPosts(apiClient);

  return response
    .map(data => ({
      id: data.id ?? 0,
      userId: data.userId ?? 0,
      title: data.title ?? "",
      body: data.body ?? "",
    }))
    .filter(data => data.id !== 0);
}

export default fetch;
