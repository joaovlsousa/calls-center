import {
  ArrowRight,
  LayoutDashboard,
  MessagesSquare,
  Plus,
  Users,
} from 'lucide-react'
import Link from 'next/link'

import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
  const links = [
    {
      label: 'Novo chamado',
      description: 'Abra um novo chamado.',
      href: '/calls/new',
      icon: Plus,
      iconColor: 'text-sky-700',
      bgColor: 'bg-sky-700/10',
    },
    {
      label: 'Novo cliente',
      description: 'Cadastre um novo cliente.',
      href: '/clients/new',
      icon: Plus,
      iconColor: 'text-green-700',
      bgColor: 'bg-green-700/10',
    },
    {
      label: 'Ver chamados',
      description: 'Visualize todos os seus chamados.',
      href: '/calls',
      icon: MessagesSquare,
      iconColor: 'text-violet-700',
      bgColor: 'bg-violet-700/10',
    },
    {
      label: 'Ver clientes',
      description: 'Visualize todos os seus clientes.',
      href: '/clients',
      icon: Users,
      iconColor: 'text-pink-700',
      bgColor: 'bg-pink-700/10',
    },
  ]

  return (
    <>
      <Header
        title="Dashboard"
        description="Aqui você poderá encontrar as funcionalidades mais utilizadas"
        icon={LayoutDashboard}
        bgColor="bg-orange-700/10"
        iconColor="text-orange-700"
      />
      <div className="flex w-full flex-col items-center gap-y-3 pt-6">
        {links.map((link) => (
          <Link href={link.href} key={link.href} className="w-3/4">
            <Card className="flex w-full items-center justify-between p-4 shadow-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700">
              <div className="flex items-center gap-x-3">
                <div className={cn('rounded-md p-3', link.bgColor ?? '')}>
                  <link.icon className={cn('h-4 w-4', link.iconColor ?? '')} />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{link.label}</h1>
                  <p className="text-xs text-primary/50">{link.description}</p>
                </div>
              </div>

              <ArrowRight className="h-4 w-4" />
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
