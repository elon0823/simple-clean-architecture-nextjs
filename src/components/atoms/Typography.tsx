import type React from "react"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Heading1({ className, children, ...props }: TypographyProps) {
  return (
    <h1 className={cn("text-3xl font-bold tracking-tight md:text-4xl", className)} {...props}>
      {children}
    </h1>
  )
}

export function Heading2({ className, children, ...props }: TypographyProps) {
  return (
    <h2 className={cn("text-2xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h2>
  )
}

export function Paragraph({ className, children, ...props }: TypographyProps) {
  return (
    <p className={cn("leading-7", className)} {...props}>
      {children}
    </p>
  )
}

export function Subtitle({ className, children, ...props }: TypographyProps) {
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

