const SideBar = ({ onStartCreate, children }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <button
        onClick={onStartCreate}
        className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition"
      >
        + Add Project
      </button>
      <hr className="border-gray-600" />
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default SideBar;
