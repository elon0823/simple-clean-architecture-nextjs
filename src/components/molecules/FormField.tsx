import type { ReactNode } from "react"
import { Label } from "@/components/atoms/Label"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  id: string
  label: string
  children: ReactNode
  error?: string
  className?: string
}

export function FormField({ id, label, children, error, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  )
}

