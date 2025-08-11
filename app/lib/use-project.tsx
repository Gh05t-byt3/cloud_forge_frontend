import { useMutation, useQuery } from "@tanstack/react-query"
import { API } from "./api"

export const useProject = () => {

  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: fetchAllProjects
  })

  const createProject = useMutation({
    mutationKey: ["projects"],
    mutationFn: createNewProject,
    onSuccess: () => {
      // Optionally refetch projects after creating a new one
      projects.refetch();
    }
  })

  return { projects, createProject }
}


export const useProjectById = (id: string) => {
  const projectById = useQuery({
    queryKey: ["project", id],
    queryFn: () => fetchProjectById(id),
    enabled: !!id // Only run the query if id is provided
  })

  return { projectById }
}


export type Project = {
  id: string
  name: string
  description?: string
  slug: string
  userId: string
  createdAt: string
  updatedAt: string
}
async function fetchProjectById(id: string): Promise<Project> {
  console.log("Fetching project by ID:", id);
  if (!id) {
    throw new Error("Project ID is required");
  }
  const res = await API.get(`/project/${id}`)
  return res.data
}

async function fetchAllProjects(): Promise<Project[]> {
  const res = await API.get("/project")
  return res.data
}

type NewProject = {
  name: string
  description?: string
  slug: string
}

async function createNewProject(project: NewProject) {
  const res = await API.post("/project", project)
  return res.data
}