import "./TaskDeleteRow.css"
import TaskCard from "./TaskCard"

export default function TaskDeleteRow({ task, row, lastTask, onClick }) {

    return (

        <div className="taskDeleteRow" style={{"margin-bottom": (row === lastTask)? "0px" : "12px"}}>

            <TaskCard task={task}
                      row={row}
                      onClick={onClick} />

        </div>

    )

}