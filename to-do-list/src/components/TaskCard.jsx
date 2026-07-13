import "./TaskCard.css"
import DeleteButton from "./DeleteButton"
import { useState } from "react"

export default function TaskCard({ task, row, onClick }) {
    
    const [isDone, setIsDone] = useState(false)

    function done() {

        if (!isDone) {

            setIsDone(true)

        } else {

            setIsDone(false)

        }

    }

    return (

        <div className="taskCard">
            
            <div className="task" onClick={done}>
    
                <input type="checkbox" className="checkBox" checked={isDone}
                                                            onChange={done} />
                
                <p className="taskCardText" style={{"text-decoration": (isDone) ? "line-through" : ""}}>{task}</p>
                
            </div>

            <DeleteButton row={row} 
                          onClick={onClick} />

        </div>

    )

}