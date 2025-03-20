import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequest) {
    // 보호된 경로 리스트
    const protectedRoutes = ["/", "/home", "/inquiry"];

    if (protectedRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.next(); // 로그인된 사용자는 계속 진행
    }
  },
  {
    pages: {
      signIn: "/signin", // 로그인 페이지
    },
  }
);

// 보호된 경로에 대해 실행
export const config = {
  matcher: ["/", "/home", "/inquiry"], // 보호할 경로 리스트
};
