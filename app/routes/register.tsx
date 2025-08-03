import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useUser } from "~/lib/use-user";

export default function Register() {
  const { register } = useUser()
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return <div className="min-h-screen flex flex-col justify-center items-center">
    <form className="w-[340px] flex flex-col gap-2">
      <Input placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
      <Input placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button onClick={() => register.mutate({
        user: {
          email, firstName: fname!, lastName: lname!, password
        }
      })} disabled={register.isPending}>
        Register
      </Button>
    </form>
  </div>
}