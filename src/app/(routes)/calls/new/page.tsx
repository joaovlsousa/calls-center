import { Header } from '@/components/header'
import { MessageSquare } from 'lucide-react'

export default async function NewCallPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients`)

  const clients: any = await response.json()
  // TODO: interface clients
  return (
    <>
      <Header
        title="Novo chamado"
        description="Abra um novo chamado."
        icon={MessageSquare}
        iconColor="text-indigo-700"
        bgColor="bg-indigo-700/10"
      />

      {/* TODO: Select (clients) */}
      {/* TODO: Textarea (shadcn) */}
    </>
  )
}
