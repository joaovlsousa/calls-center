import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-5">
      <p>Hello world</p>

      <UserButton />
    </div>
  )
}
