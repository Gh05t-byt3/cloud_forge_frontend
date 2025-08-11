import { selecedProject } from "~/lib/selected-project";
import type { Route } from "./+types/project_id";
import { useAtom } from "jotai";
import { useProject, useProjectById } from "~/lib/use-project";
import { useEffect } from "react";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";
import { VmsTable } from "~/components/vm/data-table";
import { VMcolumns } from "~/components/vm/columns";
import { CreatVM } from "~/components/new-vm";


export default function ProjectId({ params }: Route.ComponentProps) {
  const [_, setSelectedProject] = useAtom(selecedProject);
  const projectId = params.projects_id;
  const { projectById } = useProjectById(projectId);

  const navigate = useNavigate();

  useEffect(() => {
    if (projectById.data) {
      setSelectedProject(projectById.data);
    }
  }, [projectById.data, setSelectedProject]);

  return (
    <div className="container py-4">
      <div className="flex justify-between items-center mb-14">
        <div>
          <h1 className="text-md font-bold">{projectById.data?.name}</h1>
          <p className="text-xs">{projectById.data?.description}</p>
        </div>
        <CreatVM /> 
      </div>
      <VmsTable data={[]} columns={VMcolumns} />
    </div>
  )
}