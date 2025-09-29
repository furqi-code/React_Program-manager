import { useReducer, createContext } from "react";
import { NoProject } from "../components/NoProject.jsx";
import { ProjectForm } from "../components/projectForm.jsx";
import { TaskForm } from "../components/taskForm.jsx";
import { ShowCard } from "../components/showTaskCard.jsx";

export const ProjectContext = createContext({
  projects: [],
  tasks: [],
  selectedProjectid: undefined,
  onAdditionProject: () => {},
  onProjectSelect: () => {},
  cancelProjectBtn: () => {},
  addProjectBtn: () => {},
  cancelTaskBtn: () => {},
  saveTask: () => {},
  addTaskBtn: () => {},
  deleteTask: () => {},
  updateTask: () => {},
});

function reducer(state, action) {
  if (action.type === "createProjectBtn") {
    return {
      ...state,
      selectedProjectid: null,
    };
  } else if (action.type === "projectFormCancel") {
    return {
      ...state,
      selectedProjectid: undefined,
    };
  } else if (action.type === "addProject") {
    return {
      ...state,
      projects: [...state.projects, action.project],
    };
  } else if (action.type === "onProjectSelect") {
    return {
      ...state,
      selectedProjectid: action.project_id,
    };
  } else if (action.type === "addTaskBtn") {
    return {
      ...state,
      showTaskform: true,
    };
  } else if (action.type === "cancelTaskBtn") {
    return {
      ...state,
      showTaskform: false,
    };
  } else if (action.type === "saveTask") {
    return {
      ...state,
      tasks: [...state.tasks, action.task],
      showTaskform: false,
    };
  } else if (action.type === "deleteTask") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.task_id != action.task_id),
    };
  } else if (action.type === "editTask") {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.task_id !== action.updatedTask.task_id ? task : action.updatedTask
      ),
    };
  } else {
    throw Error("Unknown action: " + action.type);
  }
}

export function ProjectContextProvider({ children }) {
  const [projectState, dispatch] = useReducer(reducer, {
    projects: [],
    tasks: [],
    selectedProjectid: undefined,
    showTaskform: false,
  });
  let content;
  console.log(projectState);

  // when the page reloads
  if (projectState.selectedProjectid === undefined) content = <NoProject />;

  // when you click on createProject btn
  if (projectState.selectedProjectid === null) content = <ProjectForm />;

  // when you click to open any project
  if (projectState.selectedProjectid) {
    if (projectState.showTaskform == true) content = <TaskForm />;
    else content = <ShowCard />;
  }

  const createProjectBtn = () => {
    dispatch({
      type: "createProjectBtn",
    });
  };

  const onProjectSelect = (project_id) => {
    dispatch({
      type: "onProjectSelect",
      project_id,
    });
  };

  const projectFormCancel = () => {
    dispatch({
      type: "projectFormCancel",
    });
  };

  const addProject = (project) => {
    dispatch({
      type: "addProject",
      project,
    });
  };

  const addTaskBtn = () => {
    dispatch({
      type: "addTaskBtn",
    });
  };

  const taskFormCancel = () => {
    dispatch({
      type: "cancelTaskBtn",
    });
  };

  const saveTask = (task) => {
    dispatch({
      type: "saveTask",
      task,
    });
  };

  const removeTask = (task_id) => {
    dispatch({
      type: "deleteTask",
      task_id,
    });
  };

  const editTask = (updatedTask) => {
    dispatch({
      type: "editTask",
      updatedTask,
    });
  };

  return (
    <ProjectContext
      value={{
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
        updateTask: editTask,
      }}
    >
      {children}
      {content}
    </ProjectContext>
  );
}
