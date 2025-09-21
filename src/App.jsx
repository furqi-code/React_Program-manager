import { useState } from "react";
import { NoProject } from "./components/NoProject.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { ProjectForm } from "./components/projectForm.jsx";


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
