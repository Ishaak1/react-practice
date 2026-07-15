import "./TaskCard.css"
import DeleteButton from "./DeleteButton"

export default function TaskCard({ task, id, onClick, isDone, complete }) {
    

    function done() {
        
        complete(id)

    }

    return (

        <div className="taskCard">
            
            <div className="task" onClick={done}>
    
                <p className="taskCardText" style={{"text-decoration": (isDone) ? "line-through" : ""}}>{task}</p>
                
            </div>

            <DeleteButton id={id} 
                          onClick={onClick} />

        </div>

    )

}