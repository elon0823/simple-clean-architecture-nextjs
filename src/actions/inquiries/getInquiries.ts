'use server'; // server action 을 통해서 server side 에서 remote datasource 를 접근하도록 함
import {getServerApiClient} from "@/lib/apiClient";
import {Inquiry} from "@/model/inquiry";
import {getInquiries} from "@/datasource/remote/inquiry";

async function fetch(): Promise<Inquiry[]> {
  const apiClient = await getServerApiClient();
  const response = await getInquiries(apiClient);

  return response
    .map(data => ({
      id: data.id ?? 0,
      title: data.title ?? "",
      contents: data.contents ?? "",
      author: data.author ?? "",
      createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
      status: data.status ?? "PENDING",
    }))
    .filter(data => data.id !== 0);
}

export default fetch;
