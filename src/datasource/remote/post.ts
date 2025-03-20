import {paths} from "@/datasource/remote/schema/schema";
import axios, {AxiosInstance} from "axios";

type GetPostsResponse = paths["/posts"]["get"]["responses"]["200"]["content"]["application/json"];
export async function getPosts(client?: AxiosInstance): Promise<GetPostsResponse> {
  const apiClient = client ?? axios.create();
  const response = await apiClient.get('/posts');
  return response.data;
}

type GetPostByIdResponse = paths["/posts/{id}"]["get"]["responses"]["200"]["content"]["application/json"];
export async function getPostById(id: number, client?: AxiosInstance): Promise<GetPostByIdResponse> {
  const apiClient = client ?? axios.create();
  const response = await apiClient.get(`/posts/${id}`);
  return response.data;
}
