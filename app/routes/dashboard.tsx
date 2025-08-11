import { useProject } from "~/lib/use-project";

export default function Dashboard() {
  const { projects } = useProject();
  return (
    <div className=" flex flex-col justify-center">
      <div className="flex flex-col items-center h-130 overflow-hidden rounded-xl mt-10">
        <img className="mt-[-100px]" src="https://i.pinimg.com/1200x/17/10/67/171067d1446725b98791937945b06fdb.jpg" alt="Cloud Computing" />
      </div>

      <div className="container flex flex-col mt-10">
        <h1 className="text-md font-bold">Your Projects</h1>

        {/* IN GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {projects.data?.map((project) => (
            <div key={project.id} className="p-4 border rounded-lg hover:shadow-lg transition-shadow duration-200">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <a href={`/dashboard/${project.id}`} className="mt-2 text-blue-500 hover:underline" onClick={() => console.log("Navigate to project", project.id)}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}