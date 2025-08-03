import { useUser } from "~/lib/use-user"

export function Header() {
  const { user } = useUser()
  return <div className="w-full border-1">
    <header className="container p-2">
      <div className="font-black font-mono">CloudForge</div>
      <div>{user.data?.firstName}</div>
    </header>
  </div>
}