import {NotePencil, Trash} from "phosphor-react";
import {useContext, useRef, useState} from "react";
import { TaskContext } from "../App";
import TaskEdit from "./TaskEdit";

function Task({taskInfo}){
    const {removeTasks} = useContext(TaskContext);
    const [onEdit, setOnEdit] = useState(false);
    const taskRef = useRef();

    function checkHandler(event){
        if(event.target.checked){
            taskRef.current.style.textDecoration = "line-through";
            taskRef.current.style.color = "gray";
        }else{
            taskRef.current.style.textDecoration = "none";
            taskRef.current.style.color = "white";
        }
    }
    function editOpenHandler(){
        onEdit ? setOnEdit(false) : setOnEdit(true);
    }

    return (

        <div className="task">
            <input type="checkbox" onChange={checkHandler} className="task-check"></input>
            <p ref={taskRef} className="task-info">{taskInfo}</p>
            <div>
                <button onClick={editOpenHandler} className="btn edit-btn"><NotePencil size={32}/></button>
                <button onClick={() => removeTasks(taskInfo)}className="btn delete-btn"><Trash size={32}/></button>
            </div>
            {onEdit && <div className="task-cover">
               <TaskEdit onEdit={editOpenHandler} taskInfo={taskInfo}/> </div>}
        </div>
        
    );
}

export default Task;