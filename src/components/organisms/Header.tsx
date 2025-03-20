'use client';
import Link from "next/link"
import { ThemeToggle } from "@/components/molecules/ThemeToggle"
import {signOut, useSession} from "next-auth/react";
import {BasicButton} from "@/components/atoms/Button";

export function Header() {
  const { data: session } = useSession()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
      <div className="w-full flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Poster</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/" className="text-sm font-medium">
            홈
          </Link>
          <Link href="/inquiry" className="text-sm font-medium">
            문의
          </Link>
          {session ? (
            <BasicButton onClick={() => signOut()} className="text-sm font-medium">
              로그아웃
            </BasicButton>
          ) : (
            <Link href="/signin" className="text-sm font-medium">
              로그인
            </Link>
          )}
        </nav>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

