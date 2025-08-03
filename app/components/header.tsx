import { useUser } from "~/lib/use-user"
import { Button } from "./ui/button"
import { useNavigate } from "react-router"

export function Header() {
  const { user } = useUser()
  const navigate = useNavigate()
  return <div className="w-full border-1">
    <header className="container p-2 flex justify-between">
      <div className="font-black font-mono">CloudForge</div>
      {user.data ? <div>{user.data?.firstName}</div> : <Button onClick={() => navigate("/register") } size={"sm"}> Register </Button>}
    </header>
  </div>
}