import { useState } from "react";
import { NoProject } from "./components/NoProject.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { ProjectForm } from "./components/projectForm.jsx";
import { TaskForm } from "./components/taskForm.jsx";
import { ShowCard } from "./components/showTaskCard.jsx";
import { ProjectContext } from "./store/projectContext.js";	

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

  const addTaskBtn = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        showTaskform: true
      };
    });
  };

const taskFormCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        showTaskform: false 
      };
    });
  };

  const saveTask = (task) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, task],
        showTaskform: false
      };
    });
  };

  const removeTask = (task_id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: projectState.tasks.filter((task) => task.task_id != task_id)
      }
    })
  }

  const editTask = (updatedTask) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: projectState.tasks.map((task) => task.task_id != updatedTask.task_id ? task : updatedTask)
      }
    })
  }

  // when the page reloads
  if (projectState.selectedProjectid === undefined) content = <NoProject />;

  // when you click on createProject btn
  if (projectState.selectedProjectid === null)
    content = <ProjectForm/>;

  // when you click to open any project
  if (projectState.selectedProjectid) {
    if (projectState.showTaskform == true) 
      content = <TaskForm/>;
    else 
      content = <ShowCard />;
  }

  return (
    <ProjectContext value={{
      projects: projectState.projects,
      tasks: projectState.tasks,
      selectedProjectid: projectState.selectedProjectid,
      onAdditionProject: createProjectBtn,
      onProjectSelect: onProjectSelect,
      cancelProjectBtn: projectFormCancel,
      addProjectBtn: addProject,
      cancelTaskBtn: taskFormCancel,
      saveTask: saveTask,
      addTaskBtn: addTaskBtn,
      deleteTask: removeTask,
      updateTask: editTask
    }}>
      <Sidebar></Sidebar>
      {content}
      </ProjectContext>
  );
}
