import { useMutation, useQuery } from "@tanstack/react-query"
import { API } from "./api"


export const useUser = () => {
  const user = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser
  })

  const logOut = useMutation({
    mutationKey: ["user"],
    mutationFn: logOutUer
  })

  const register = useMutation({
    mutationKey: ["user"],
    mutationFn: registerUser
  })

  const login = useMutation({
    mutationKey: ["user"],
    mutationFn: Login
  })

  return { user, logOut, register, login }
}


type User = {
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
}

async function fetchUser(): Promise<User> {
  const res = await API.get("/user/profile")
  return res.data
}


async function logOutUer() {
  const res = await API.post("/user/logout")
  return res.data
}


type InsertUser = {
  email: string
  password: string
  firstName: string
  lastName: string
}

async function registerUser({ user }: { user: InsertUser }) {
  const res = await API.post("/user", user)
  return res.data
}

type LoginPayload = {
  email: string
  password: string
}

async function Login(user: LoginPayload) {
  const res = await API.post("/user/login", user)
  console.log("Login response:", res.data)
  return res.data
}