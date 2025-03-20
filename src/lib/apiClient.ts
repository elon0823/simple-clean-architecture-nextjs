import axios from 'axios';
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

export async function getServerApiClient() {
  // 현재 요청에 대한 세션 정보를 가져옵니다.
  const session = await getServerSession(authOptions);
  const token = session?.user.token;

  // axios 인스턴스를 생성합니다.
  const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // accessToken이 있다면 Authorization 헤더를 설정합니다.
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return instance;
}
