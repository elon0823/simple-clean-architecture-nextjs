import type React from "react"
import { Header } from "@/components/organisms/Header"
import { CustomCookieConsent } from "@/components/organisms/CookieConsent"
import { Heading1, Subtitle } from "@/components/atoms/Typography"

interface MainLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  hideHeader?: boolean
}

export function MainLayout({ children, title, subtitle, hideHeader }: MainLayoutProps) {
  return (
    <div className="flex h-full w-full flex-col">
      {!hideHeader &&  <Header /> }
      <main className="w-full p-8 md:p-12 flex-1">
        <div className="flex flex-col items-center mb-8">
          <Heading1>{title}</Heading1>
          {subtitle && <Subtitle className="mt-2">{subtitle}</Subtitle>}
        </div>
        {children}
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PostList. All rights reserved.
          </p>
        </div>
      </footer>
      <CustomCookieConsent />
    </div>
  )
}

