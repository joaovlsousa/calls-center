import { Sidebar } from '@/components/sidebar'

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative h-full">
      <Sidebar />
      <div className="md:pl-72">{children}</div>
    </div>
  )
}
