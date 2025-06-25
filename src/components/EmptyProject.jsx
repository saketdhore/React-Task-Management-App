import NO_PROJECTS_IMG from '../assets/no-projects.png'
import { createPortal } from 'react-dom';
const EmptyProject = ({onStartCreate}) => {
    return (
        <header className='flex flex-col items-center justify-center text-center p-8 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-20'>
            <img src = {NO_PROJECTS_IMG} alt="No projects image" className='w-48 h-auto mb-6'/>
            <h2 className='text-2xl font-semibold mb-2 text-gray-800'> No Project Selected</h2>
            <p className='text-gray-600 mb-4'>Select a project or get started with a new one.</p>
            <button className='bg-blue-600 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded' onClick={onStartCreate}>Create new project</button>
        </header>
    );
}

export default EmptyProject;

