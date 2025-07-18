const ProjectTab = ({ title, onDisplayProject, isSelected }) => {
  return (
    <button
      onClick={onDisplayProject}
      className={`w-full text-left px-3 py-2 rounded ${
        isSelected ? "bg-blue-500" : "hover:bg-white hover:text-gray-800"
      }`}
    >
      {title}
    </button>
  );
};

export default ProjectTab;
