import {useContext, useRef} from "react";
import { TaskContext } from "../App";

function TaskInput(){
    
    const {addTasks} = useContext(TaskContext);
    const inputRef = useRef();

    function clickHandler(){
        if(inputRef.current.value !== ""){
            addTasks(inputRef.current.value);
            inputRef.current.value = "";
        }
        
    }

    return(
        <div className="input-container">
            <input ref={inputRef} type="text" className="task-input" placeholder="ENTER TASK"></input>
            <button onClick={clickHandler} className="btn add-btn">+</button>
        </div>
    );
}

export default TaskInput;