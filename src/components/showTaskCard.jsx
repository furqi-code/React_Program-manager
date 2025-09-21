import { TaskCard } from "./taskCard";

export function ShowCard({ tasks, onAdd, project }) {
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
              onClick={onAdd}
            >
              add Task
            </button>
          </div>
          <div>
            {/* you can add Searchbar here if you want */}
            {tasks.length > 0 ? (
              tasks.map((task) => <TaskCard key={task.id} {...task} project_id={project.project_id}/>)
            ) : (
              <h3>Zero task added to this Project</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
