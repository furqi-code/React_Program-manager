import { useRef } from "react";
import { Input } from "./Input";
import { TaskCard } from "./taskCard";

export function TaskForm({ projectId, onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusRef = useRef();
  const createdAtRef = useRef();
  const dueDateRef = useRef();
  const today = new Date().toISOString().split("T")[0];
  const updated_at = "";

  function handleAddTask() {
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let status = statusRef.current.value;
    // let created_at = createdAtRef.current.value;
    let dueDate = dueDateRef.current.value;
    if (
      !title.trim() ||
      !description.trim() ||
      !status.trim()
    ) {
      alert("Please fill in all the input fields");
      return;
    }
    onAdd({
      task_id: Math.round(Math.random() * 21),
      project_id: projectId,
      title,
      description,
      status,
      created_at: today,
      dueDate,
      updated_at
    });
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    statusRef.current.value = "pending";
    dueDateRef.current.value = "";
  }

  return (
    <div class="max-w-4xl mx-auto px-10 py-12 bg-white rounded-lg">
      <form>
        <div class="mb-6 flex flex-col gap-5">
          <label
            class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
            for="TaskTitle"
          >
            Task Title
          </label>
          <Input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="TaskTitle"
            ref={titleRef}
            placeholder="Enter title"
            type="text"
          />
          <label
            class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
            for="TaskDescription"
          >
            Task Description
          </label>
          <Input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="TaskDescription"
            ref={descriptionRef}
            placeholder="Enter description"
            type="text"
          />
          <label
            class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
            for="TaskStatus"
          >
            Status
          </label>
          <select
            id="TaskStatus"
            ref={statusRef}
            class="bg-gray-200 border-2 rounded py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
          >
            <option value="pending">Pending</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <label
            class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
            for="TaskDueDate"
          >
            Due Date
          </label>
          <Input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="TaskDueDate"
            ref={dueDateRef}
            placeholder="Due date"
            type="date"
            // defaultValue={today}
          />
          {/* <label
            class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
            for="TaskCreatedAt"
          >
            Created_at
          </label>
          <Input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="TaskCreatedAt"
            ref={createdAtRef}
            placeholder="Created at"
            type="date"
            defaultValue={today}
          /> */}
          <button
            class="shadow bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-2 rounded"
            type="button"
            onClick={() => handleAddTask()}
          >
            save Task
          </button>
          <button
            class="shadow bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-2 rounded"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
