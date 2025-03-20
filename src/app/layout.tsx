import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/ThemeProvider"
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import NextAuthProvider from "@/contexts/NextAuthProvider";
import ClientQueryProvider from "@/contexts/ClientQueryProvider";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "포스트 목록",
  description: "JSONPlaceholder API에서 가져온 포스트 목록입니다.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <ClientQueryProvider>
              <NextAuthProvider session={session}>
                {children}
              </NextAuthProvider>
            </ClientQueryProvider>
          </ThemeProvider>
      </body>
    </html>
  )
}

