import { useState } from "react";
const Task = ({ taskList = [], onTasksChange }) => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  const handleCreateClick = () => {
    setIsCreatingTask(true);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() === "") return;
    const updatedTasks = [...taskList, newTaskText];
    onTasksChange(updatedTasks);
    setNewTaskText("");
    setIsCreatingTask(false);
  };

  const handleClear = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    onTasksChange(updatedTasks);
  };

  return (
    <>
      <div className="flex justify-between items-center mt-6 mb-2">
        <h3 className="text-2xl font-medium text-gray-700">Tasks</h3>
        <button
          className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-900 transition"
          onClick={handleCreateClick}
        >
          + Create Task
        </button>
      </div>

      {isCreatingTask && (
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter task"
            className="flex-1 px-3 py-2 border border-gray-300 rounded"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      )}

      {taskList.length === 0 ? (
        <p className="text-gray-400 italic">No tasks yet.</p>
      ) : (
        <ul className="space-y-2">
          {taskList.map((task, index) => (
            <li key={index} className="bg-gray-200 px-4 py-2 rounded">
              <div className="flex justify-between items-center">
                <span>{task}</span>
                <button
                  onClick={() => handleClear(index)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition text-sm"
                >
                  Clear
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Task;
