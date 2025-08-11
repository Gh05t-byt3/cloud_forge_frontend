import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useProject } from "~/lib/use-project";
import { useAtom } from "jotai";
import { selecedProject } from "~/lib/selected-project";


export default function ProjectSelector() {
  const [showForm, setShowForm] = useState(false);
  const { projects, createProject } = useProject(); // Assuming useProject is defined to fetch projects
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [selectedProject, _] = useAtom(selecedProject);

  useEffect(() => {
    console.log("Selected project:", selectedProject);
  }, [selectedProject]);
  
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        <button className="p-.5 px-2 rounded border border-neutral-300" >
          {selectedProject ? selectedProject.name : "Select Project"}
          <span className="ml-2 text-xs text-gray-500">▼</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 p-1">
        {!showForm && (
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">Projects</h3>
            <hr className="my-1" />
            <div className="flex flex-col gap-1 p-1">
              {projects.data?.map((project) => (
                <a
                  href={`/dashboard/${project.id}`}
                  className="p-0.5 px-3 rounded hover:bg-gray-100 cursor-pointer"
                  key={project.id}
                >
                  {project.name}
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <Button className="rounded" variant="outline" size="sm" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Hide Form" : "Create New Project"}
          </Button>
          {showForm && (
            <form action="#" className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Project Name"
                className="border p-1 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Project Slug"
                className="border p-1 rounded"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
              <textarea
                placeholder="Project Description"
                className="border p-1 rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              ></textarea>
              <Button onClick={() => {
                createProject.mutate({
                  name,
                  slug,
                  description
                }, {
                  onSuccess: () => {
                    setName("");
                    setSlug("");
                    setDescription("");
                    setShowForm(false);
                  },
                  onError: (error) => {
                    console.error("Project creation failed:", error);
                  }
                });
              }} size={"sm"} type="submit">Create Project</Button>
            </form>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}