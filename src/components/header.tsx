import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import type { LucideIcon } from 'lucide-react'

interface HeaderProps {
  title: string
  description: string
  icon: LucideIcon
  iconColor?: string
  bgColor?: string
  strokeWidth?: number
}

export function Header({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
  strokeWidth = 2,
}: HeaderProps) {
  return (
    <header className="flex w-full justify-between p-6 md:items-center">
      <div className="flex place-items-start gap-3 md:items-center">
        <div className={cn('rounded-md p-3', bgColor ?? '')}>
          <Icon
            className={cn('h-6 w-6', iconColor ?? '')}
            strokeWidth={strokeWidth}
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-primary/70">{description}</p>
        </div>
      </div>

      <UserButton />
    </header>
  )
}
