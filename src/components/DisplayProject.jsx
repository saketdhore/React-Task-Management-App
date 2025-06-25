import Task from "./Task";

const DisplayProject = ({ title, dueDate, description, tasks = [], onDelete, onUpdateTasks }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-2">Due: {dueDate}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <hr className="my-4" />
      <Task taskList={tasks} onTasksChange={onUpdateTasks} />
    </div>
  );
};

export default DisplayProject;
