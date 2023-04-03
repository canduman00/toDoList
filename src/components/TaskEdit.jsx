import { Check } from "phosphor-react";
import {useRef, useState, useContext} from "react";
import { TaskContext } from "../App";



function TaskEdit(props){
    const {editTasks} = useContext(TaskContext)

    const [taskInfo, setTaskInfo] = useState(props.taskInfo);
    const updateRef = useRef();

    function updateHandler(){
        setTaskInfo(event.target.value);
    }
    function editHandler(){
        if(updateRef.current.value !== ""){
            editTasks(props.taskInfo, taskInfo);
            props.onEdit();
        }
        
    }

    return(
        <div className="task-edit content-fit">
            <div>
                <p className="update">Update Task</p>
            </div>
            <div className="update-section">
                <input type="text" ref={updateRef} value={taskInfo} onChange={updateHandler} className="task-input update-text" />
                <button onClick={editHandler} className="btn update-btn"><Check size={32}/></button>
            </div>
        </div>
    );
}

export default TaskEdit;