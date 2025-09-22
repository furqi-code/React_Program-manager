import { useContext, useRef } from "react";
import { Input } from "./Input";
import { ProjectContext } from "../store/projectContext";

export function ProjectForm() {
  const {cancelProjectBtn, addProjectBtn} = useContext(ProjectContext) ;
  const titleRef = useRef();
  const descRef = useRef();
  return (
    <div class="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg my-auto">
      <div class="flex flex-col justify-center py-12 items-center">
        <form class="w-full max-w-sm">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Project Title
              </label>
            </div>
            <div class="md:w-2/3">
              <Input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="ProjectTitle"
                ref={titleRef}
                placeholder="Enter title"
                type="text"
              ></Input>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Project Description
              </label>
            </div>
            <div class="md:w-2/3">
              <Input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="ProjectTitle"
                ref={descRef}
                placeholder="Enter description"
                type="text"
              ></Input>
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="shadow bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-2 rounded"
                type="button"
                onClick={() => {
                  console.log("button click");
                  const title = titleRef.current.value;
                  const description = descRef.current.value;
                  if (!title.trim() || !description.trim()) {
                    alert("Please fill in all the input fields");
                    return;
                  }
                  addProjectBtn({
                    project_id: Math.round(Math.random() * 21),
                    title,
                    description,
                  });
                  titleRef.current.value = "";
                  descRef.current.value = "";
                }}
              >
                Add Project
              </button>
              <button
                class="shadow bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={cancelProjectBtn}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
