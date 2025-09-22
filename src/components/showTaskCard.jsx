import { TaskCard } from "./taskCard";
import { useContext } from "react";
import { ProjectContext } from "../store/projectContext";

export function ShowCard() {
  const { selectedProjectid, tasks, projects, addTaskBtn } = useContext(ProjectContext);
  const selectedProject = projects.find(
    (project) => project.project_id === selectedProjectid
  );
  const taskofSelectedProject = tasks.filter(
    (task) => task.project_id === selectedProjectid
  );
  console.log("tasks of this project \n", taskofSelectedProject);
  return (
    <>
      <div className="w-full mx-auto">
        <div className="ms-5">
          <div className="flex flex-col justify-center items-center py-4">
            <h1 className="text-gray-700 font-medium text-2xl text-center mb-3">
              {selectedProject.title}
            </h1>
            <p className="text-gray-500 text-center mb-4">
              {selectedProject.description}
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
            {taskofSelectedProject.length > 0 ? (
              taskofSelectedProject.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))
            ) : (
              <h3>Zero task added to this Project</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
