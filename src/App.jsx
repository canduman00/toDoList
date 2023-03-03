import {useState, createContext} from "react";
import Cookies from "universal-cookie";

import TaskInput from './components/TaskInput'
import Task from './components/Task'

import './App.css'

const cookies = new Cookies();
export const TaskContext = createContext(); 

function App() {
  let placeholder = cookies.get("tasks-cookies");
  placeholder.lenght < 0 ? placeholder = [] : null;

  const [tasks, setTasks] = useState(placeholder);

  cookies.set("tasks-cookies", tasks);
  console.log(placeholder);
  
  function addTasks(taskInfo){
    setTasks(prev => [...prev, taskInfo]);
  }
  function removeTasks(taskInfo){
    setTasks(tasks.filter(task => task != taskInfo))

  }
  function editTasks(prevTask, newTask){
    setTasks(tasks.map( task => {
      if (task == prevTask){
        return newTask
      }
      return task
    }))
  }
  

  const exportContext  = {
    tasks, setTasks, addTasks, removeTasks, editTasks
  }

  return (
    <div className="App">
      <TaskContext.Provider value={exportContext}>
        <h1 className="title">My Task List</h1>
        <TaskInput/>
        {tasks.length > 0 && tasks.map((task,index) => {
            return <Task key={index} taskInfo={task}/>
        })}
      </TaskContext.Provider>
    </div>
  )
}

export default App
