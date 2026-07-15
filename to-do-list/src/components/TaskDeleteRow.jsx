import "./TaskDeleteRow.css"
import TaskCard from "./TaskCard"

export default function TaskDeleteRow({ task, id, lastTask, onClick, isDone, complete }) {

    return (

        <div className="taskDeleteRow" style={{"margin-bottom": (id === lastTask)? "0px" : "12px"}}>

            <TaskCard task={task}
                      id={id}
                      onClick={onClick}
                      isDone={isDone}
                      complete={complete} />

        </div>

    )

}