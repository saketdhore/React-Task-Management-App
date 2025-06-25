import CreateProject from "./components/CreateProject";
import EmptyProject from "./components/EmptyProject";
import { savedProject } from "./savedProject";
import { useState } from "react";
function App() {
  const [projects, setProjects] = useState(savedProject);
  const [isCreating, setIsCreating] = useState(false);
  const handleIsCreate = () =>{
    setIsCreating(true);
  }
  const handleCreateProject = ({title, description, dueDate, tasks=[]}) => {
    const newProject = {
      title: title,
      description: description,
      dueDate: new Date(dueDate),
      tasks: tasks
    };

    setProjects((prevProjects)=>[...prevProjects, newProject]);
  }
  return (
    <>
      {projects.length ===0 && <EmptyProject onStartCreate={handleIsCreate}/>}
      {isCreating && <CreateProject/>}
    </>
  );
}

export default App;
