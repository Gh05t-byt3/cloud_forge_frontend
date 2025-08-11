import { useUser } from "~/lib/use-user"
import { Button } from "./ui/button"
import { useNavigate } from "react-router"
import ProjectSelector from "./project-selector"

export function Header() {
  const { user } = useUser()
  const navigate = useNavigate()
  return <div className="w-full border-1">
    <header className="container p-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <a href="/dashboard" className="font-black font-mono">CloudForge</a>
        <ProjectSelector />
      </div>
      <div className="flex items-center gap-4">
        {user.data ?
          <div className="flex items-center gap-2">
            <img className="max-w-[30px] aspect-square bg-blue-300 rounded-full" src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user.data.firstName}`} alt="Random Avatar" />
            <div>
              <div className="text-xs">{user.data.firstName} {user.data.lastName}</div>
              <div className="text-xs text-muted-foreground">{user.data.email}</div>
            </div>
          </div> :
          <Button className="!rounded" onClick={() => navigate("/register")} size={"sm"}> Register </Button>}
      </div>
    </header>
  </div>
}