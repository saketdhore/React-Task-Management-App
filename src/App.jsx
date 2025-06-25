import { useState } from "react";
import CreateProject from "./components/CreateProject";
import EmptyProject from "./components/EmptyProject";
import ProjectTab from "./components/ProjectTab";
import DisplayProject from "./components/DisplayProject";
import { defaultSavedProject } from "./savedProject";
import SideBar from "./SideBar";
import { useEffect } from "react";

function App() {
  const getInitialProjects = () => {
    const stored = localStorage.getItem("projects");
    return stored ? JSON.parse(stored) : defaultSavedProject;
  };
  const [projects, setProjects] = useState(getInitialProjects);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleIsCreate = () => {
    setIsCreating(true);
    setSelectedIndex(null);
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

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);




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
          <DisplayProject {...projects[selectedIndex]} onDelete={() => handleDelete(selectedIndex)} onUpdateTasks={(newTasks) => handleUpdateTasks(selectedIndex, newTasks)} />
        ) : (
          <EmptyProject onStartCreate={handleIsCreate} />
        )}
      </div>
    </div>
  );
}

export default App;
