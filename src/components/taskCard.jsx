import { useState, useRef } from "react";
import { Input } from "./Input";

export function TaskCard({
  task_id,
  project_id,
  title,
  description,
  status,
  dueDate,
  created_at,
  deleteTask,
  updateTask
}) {
  const [isEditing, setisEditing] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);
  const titleRef = useRef();
  const descriptionRef = useRef();

  return (
    <>
      <div className="todo-card my-4 p-4 bg-white rounded shadow-md">
        {!isEditing && (
          <>
            <h2 className="todo-title text-xl font-semibold mb-2">{title}</h2>
            <div>
              <p className="todo-description text-gray-700 mb-4">
                {description}
              </p>
            </div>
          </>
        )}

        {isEditing && (
          <>
            <div className="p-2">
              <Input
                className="form-control me-2 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                placeholder="Edit this Title"
                defaultValue={title}
                ref={titleRef}
              />
            </div>
            <div className="p-2 mb-2">
              <textarea
                className="form-control me-2 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
                placeholder="Edit this Description"
                aria-label="Edit Description"
                id="exampleFormControlInput1"
                name="discrip"
                defaultValue={description}
                ref={descriptionRef}
              />
            </div>
          </>
        )}

        <div className="todo-meta flex justify-between items-center mb-4">
          <div>
            <span className="todo-status bg-yellow-300 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
              {status}
            </span>
          </div>
          <div className="flex flex-col items-end text-sm text-gray-500">
            <span className="todo-date">Due: {dueDate}</span>
            {isUpdated && (
              <>
                <span className="todo-date">Edited: {updated_at}</span>
                <span className="todo-date">Created: {created_at}</span>
              </>
            )}
          </div>
        </div>

        <div className="todo-actions flex space-x-3">
          {!isEditing && (
            <>
              <button
                type="button"
                className="canvaBtn btn-edit bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
                onClick={() => setisEditing(true)}
              >
                Edit
              </button>
              <button
                type="button"
                className="canvaBtn btn-delete bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded"
                onClick={() => deleteTask(task_id)}
              >
                Delete
              </button>
            </>
          )}
          {isEditing && (
            <>
              <button
                type="button"
                className="canvaBtn btn-cancel bg-gray-400 hover:bg-gray-500 text-white font-semibold py-1 px-4 rounded"
                onClick={() => setisEditing(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="canvaBtn btn-save bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-4 rounded"
                onClick={() => {
                  const title = titleRef.current.value;
                  const description = descriptionRef.current.value;
                  updateTask({
                    task_id,
                    project_id,
                    title,
                    description,
                    status: "just now",
                    created_at,
                    dueDate,
                    updated_at: new Date().toISOString().split("T")[0],
                  });
                  setisEditing(false);
                  setisUpdated(true);
                }}
              >
                💾 Save
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
