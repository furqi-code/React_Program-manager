import { TaskCard } from "./taskCard";
import { useContext } from "react";
import { ProjectContext } from "../store/projectContext";

export function ShowCard({ tasks, project }) 
{
  const {addTaskBtn} = useContext(ProjectContext)
  return (
    <>
      <div className="w-full mx-auto">
        <div className="ms-5">
          <div className="flex flex-col justify-center items-center py-4">
            <h1 className="text-gray-700 font-medium text-2xl text-center mb-3">
              {project.title}
            </h1>
            <p className="text-gray-500 text-center mb-4">
              {project.description}
            </p>
          </div>
          <div>
            <button
              className="m-4 p-4 text-end rounded-lg bg-yellow-200 text-gray-900 font-semibold shadow-sm hover:bg-green-300"
              onClick={addTaskBtn}
            >
              add Task
            </button>
          </div>
          <div>
            {/* you can add Searchbar here if you want */}
            {tasks.length > 0 ? (
              tasks.map((task) => <TaskCard key={task.id} {...task}/>)
            ) : (
              <h3>Zero task added to this Project</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
