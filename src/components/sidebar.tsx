'use client'

import { cn } from '@/lib/utils'
import { LayoutDashboard, MessagesSquare, Users } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const font = Montserrat({ weight: '700', subsets: ['latin'] })

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
      iconColor: 'text-orange-700',
      bgColor: 'bg-orange-700/10',
    },
    {
      label: 'Chamados',
      href: '/calls',
      icon: MessagesSquare,
      iconColor: 'text-violet-700',
      bgColor: 'bg-violet-700/10',
    },
    {
      label: 'Clientes',
      href: '/clients',
      icon: Users,
      iconColor: 'text-pink-700',
      bgColor: 'bg-pink-700/10',
    },
  ]

  return (
    <aside className="hidden h-full md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col md:bg-gray-900 md:px-6">
      <div className="flex items-center pt-6">
        <MessagesSquare className="mr-4 h-8 w-8 text-white" strokeWidth={1} />
        <h1 className={cn('text-xl font-semibold text-white', font.className)}>
          Calls Center
        </h1>
      </div>
      <div className="mt-12 flex w-full flex-col gap-y-3">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              'w-full rounded-md p-2 transition-colors hover:bg-gray-800',
              pathname === link.href ? 'bg-gray-800' : 'opacity-60',
            )}
          >
            <div className="flex items-center gap-x-3">
              <div className={cn('rounded-md p-2', link.bgColor ?? '')}>
                <link.icon className={cn('h-4 w-4', link.iconColor ?? '')} />
              </div>
              <h1 className="font-normal text-white">{link.label}</h1>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
