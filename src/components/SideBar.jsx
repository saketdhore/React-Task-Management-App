const SideBar = ({ onStartCreate, children }) => {
  return (
    <div className="w-64 bg-gradient-to-tr from-gray-700 to-gray-900 text-white p-6 space-y-4 shadow-xl">
      <button
        onClick={onStartCreate}
        className="w-full bg-gradient-to-tr from-blue-500 to-blue-700 py-2 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300"
      >
        + Add Project
      </button>
      <hr className="border-gray-600" />
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default SideBar;