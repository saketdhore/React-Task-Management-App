import { useState } from "react";

const CreateProject = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, dueDate });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4"
    >
      {/* Button Row */}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>

      {/* Title */}
      <div>
        <p className="text-lg font-semibold text-gray-800 mb-1 uppercase tracking-wide">Title</p>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-600 bg-gray-300 text-gray-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Description */}
      <div>
        <p className="text-lg font-semibold text-gray-800 mb-1 uppercase tracking-wide">Description</p>
        <textarea
          value={description}
          onChange ={(e)=>setDescription(e.target.value)}
          className="w-full border border-gray-600 bg-gray-300 text-gray-800 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
        </textarea>
      </div>

      {/* Due Date */}
      <div>
        <p className="text-lg font-semibold text-gray-800 mb-1 uppercase tracking-wide">Due Date</p>
        <input
          type="date"
          value={dueDate}
          onChange={(e)=>setDueDate(e.target.value)}
          className="w-full border border-gray-600 bg-gray-300 text-gray-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </form>
  );
};

export default CreateProject;
