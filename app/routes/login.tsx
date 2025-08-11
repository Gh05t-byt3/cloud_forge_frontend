import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useUser } from "~/lib/use-user";

export default function Login() {
  const { login } = useUser()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return <div className="min-h-screen flex flex-col justify-center items-center">
    <form action="#" className="w-[340px] flex flex-col gap-2">
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button
        onClick={() => login.mutate({ email, password }, {
          onSuccess: () => {
            // Redirect to dashboard
            navigate("/dashboard");
          },
          onError: (error) => {
            // Handle error, e.g., show a notification
            console.error("Login failed:", error);
          }
        })}
        disabled={login.isPending}
      >
        Login
      </Button>
    </form>
  </div>
}