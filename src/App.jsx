import {React} from 'react'
import { useState } from 'react';
import { Project } from './Project';
import {SideBar} from './SideBar'
import {Welcome} from './Welcome'
import {Info} from './Info'
import { useRef } from 'react';
function App() {
  const [projects, setProjects]   = useState({})
  const [chosen, setChosen]   = useState('')
  const [addProjects, setaddProjects]   = useState(false)
  const title = useRef()
  const description = useRef()
  const date = useRef()
  const task = useRef()
  function handleSave(){
    if(title.current.value && description.current.value && date.current.value){
    setProjects((prev) => {
      const newProjects = {...prev}
      newProjects[title.current.value] = {'description': description.current.value, 'date': date.current.value}
      console.log(newProjects)
      return newProjects
    })
    
    setaddProjects(false)}
    else{
      alert('Complete all field')
    }
  }
  function handleDelete(){
    setProjects((prev) => {
      const newProjects = {...prev}
      delete newProjects[chosen]
      setChosen('')
      setaddProjects(false)
      return newProjects
    })
  }
  function handleClear(indexToRemove) {
    setProjects((prev) => {
      const updatedProjects = {
        ...prev,
        [chosen]: {
          ...prev[chosen],
          'tasks':  prev[chosen].tasks.filter((_, index) => index !== indexToRemove)
        },
      };
      console.log(updatedProjects)
      return updatedProjects;
    });
  }
  function handleAddTask(){
    setProjects((prev) => {
      const newTaskValue = task.current.value.trim();
      
      if (newTaskValue) {
        const updatedProjects = {
          ...prev,
          [chosen]: {
            ...prev[chosen],
            'tasks': [...(prev[chosen]?.tasks || []), newTaskValue],
          },
        };
        console.log(updatedProjects)
        return updatedProjects;
      }
    
      return prev;
    });
    
  }
  return (
    <div className='flex flex-row items-end h-screen'>
      <SideBar projects={Object.keys(projects)} done={addProjects}  onAdd = {() => {setaddProjects(true)} } onChosen={setChosen}/>
      {!chosen && addProjects && <Project title ={title} description = {description} date = {date}  onClose =  {() => {setaddProjects(false)}} onSave = {()=> handleSave()}/ >}
      {!chosen && !addProjects && <Welcome onAdd = {() => {setaddProjects(true)}} />}
      {chosen && <Info task ={task} chosen={chosen} data={projects} onDelete ={handleDelete} onAddTask={handleAddTask} onClear={handleClear}/>}
    </div>
  );
}

export default App;
