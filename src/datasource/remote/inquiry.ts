import axios, {AxiosInstance} from "axios";
import { paths } from "./schema/schema";

type CreateInquiryRequest = paths["/inquiries"]["post"]["requestBody"]["content"]["application/json"];
type CreateInquiryResponse = paths["/inquiries"]["post"]["responses"]["201"]["content"]["application/json"];
export async function createInquiry(request: CreateInquiryRequest, client?: AxiosInstance): Promise<CreateInquiryResponse> {
  //const apiClient = client ?? axios.create();
  //const response = await apiClient.post('/inquiries', request);
  //return response.data;

  // Mock response
  return {
    id: 1,
    title: "Test Inquiry",
    contents: "Test description",
    author: "test",
    status: "PENDING",
    createdAt: new Date().toISOString(),
  }
}

type GetInquiriesResponse = paths["/inquiries"]["get"]["responses"]["200"]["content"]["application/json"];
export async function getInquiries(client?: AxiosInstance): Promise<GetInquiriesResponse> {
  //const apiClient = client ?? axios.create();
  //const response = await apiClient.get(`/inquiries}`);
  //return response.data;

  // Mock response
  return [{
    id: 1,
    title: "Test Inquiry",
    contents: "Test description",
    author: "test",
    status: "PENDING",
    createdAt: new Date().toISOString(),
  }]
}
