import { createContext } from "react";

export const ProjectContext = createContext({
    projects: [],
    tasks: [],
    selectedProjectid: undefined,
    onAdditionProject: ()=> {},
    onProjectSelect: ()=> {},
    cancelProjectBtn: ()=> {},
    addProjectBtn: ()=> {},
    cancelTaskBtn: ()=> {},
    saveTask: ()=> {},
    addTaskBtn: ()=> {},
    deleteTask: ()=> {},
    updateTask: ()=> {}
}) 
