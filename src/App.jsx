import { useState } from "react";
import CreateProject from "./components/CreateProject";
import EmptyProject from "./components/EmptyProject";
import ProjectTab from "./components/ProjectTab";
import DisplayProject from "./components/DisplayProject";
import { savedProject } from "./savedProject";
import SideBar from "./SideBar";

function App() {
  const [projects, setProjects] = useState(savedProject);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // now starts with no tab selected

  const handleIsCreate = () => {
    setIsCreating(true);
    setSelectedIndex(null); // hide selected tab
  };

  const handleCancel = () => {
    setIsCreating(false);
  };

  const handleCreateProject = ({ title, description, dueDate, tasks = [] }) => {
    const newProject = {
      title,
      description,
      dueDate: new Date(dueDate).toDateString(),
      tasks
    };

    setProjects((prev) => [...prev, newProject]);
    setIsCreating(false);
    savedProject = [...savedProject, newProject];
  };

  const handleSelectTab = (index) => {
    setSelectedIndex(index);
    setIsCreating(false);
  };

  const handleDelete = (index) => {
    setProjects((prevProject) => prevProject.filter((_, i) => i !== index));
    setSelectedIndex(null);
  }

  const handleUpdateTasks = (index, newTaskList) => {
  setProjects((prev) => {
    const updated = [...prev];
    updated[index] = { ...updated[index], tasks: newTaskList };
    return updated;
  });
};



  return (
    <div className="flex h-screen">
      <SideBar onStartCreate={handleIsCreate}>
        {projects.map((project, index) => (
          <ProjectTab
            key={index}
            title={project.title}
            isSelected={index === selectedIndex}
            onDisplayProject={() => handleSelectTab(index)}
          />
        ))}
      </SideBar>

      <div className="flex-1 p-6 bg-gray-500 overflow-auto">
        {isCreating ? (
          <CreateProject onSave={handleCreateProject} onCancel={handleCancel} />
        ) : selectedIndex !== null && projects[selectedIndex] ? (
          <DisplayProject {...projects[selectedIndex]} onDelete={() => handleDelete(selectedIndex)} onUpdateTasks={(newTasks) => handleUpdateTasks(selectedIndex, newTasks)}/>
        ) : (
          <EmptyProject onStartCreate={handleIsCreate} />
        )}
      </div>
    </div>
  );
}

export default App;
