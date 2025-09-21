import { useState } from "react";
import { NoProject } from "./components/NoProject.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { ProjectForm } from "./components/projectForm.jsx";
import { ShowCard } from "./components/showTaskCard.jsx";

export function App() {
  const [projectState, setProjectState] = useState({
    projects: [],
    tasks: [],
    selectedProjectid: undefined,
    showTaskform: false,
  });
  let content;
  console.log(projectState);

  const createProjectBtn = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectid: null,
      };
    });
  };

  const onProjectSelect = (project_id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectid: project_id,
      };
    });
  };

  const projectFormCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectid: undefined,
      };
    });
  };

  const addProject = (project) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, project],
        selectedProjectid: project.project_id,
      };
    });
  };

  // when the page reloads
  if (projectState.selectedProjectid === undefined) content = <NoProject />;

  // when you click on createProject btn
  if (projectState.selectedProjectid === null)
    content = <ProjectForm onCancel={projectFormCancel} onAdd={addProject} />;

  // when you click to open any project
  if (projectState.selectedProjectid) {
    const selectedProject = projectState.projects.find(
      (project) => project.project_id === projectState.selectedProjectid
    );
    const taskofSelectedProject = projectState.tasks.filter(
      (task) => task.project_id === projectState.selectedProjectid
    );
    console.log("tasks of this project \n", taskofSelectedProject);
    if (projectState.showTaskform == true) {
      content = <TaskForm projectId={selectedProject.project_id} onAdd={saveTask} onCancel={taskFormCancel}></TaskForm>;
    } else {
      content = <ShowCard project={selectedProject} tasks={taskofSelectedProject}></ShowCard>;
    }
  }

  return (
    <>
      <Sidebar
        onAdd={createProjectBtn}
        onSelect={onProjectSelect}
        projects={projectState.projects}
      ></Sidebar>
      {content}
    </>
  );
}
