import { useContext } from "react";
import { ProjectContext } from "../store/projectContext";

export function Sidebar() {
  const {projects, onAdditionProject, onProjectSelect} = useContext(ProjectContext) ;
  return (
    <>
      <aside
        id="default-sidebar"
        class="top-0 left-0 w-87 h-screen transition-transform -translate-x-full translate-x-0 mr-5"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="https://flowbite.com/" class="flex items-center ps-2.5 mb-5">
            <img
              class="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
              src="https://flowbite.com/docs/images/logo.svg"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Project management
            </span>
          </a>
          <ul class="space-y-2 font-medium">
            <li onClick={onAdditionProject}>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  ></path>
                </svg>
                <span class="ms-3">Create Project</span>
              </a>
            </li>
            {projects.map((project) => {
              return (
                <li
                  onClick={() => {
                    onProjectSelect(project.project_id);
                  }}
                >
                  <a
                    href="#"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span class="ms-3">{project.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
