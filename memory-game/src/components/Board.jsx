import "./Board.css"
import RowOfBoxes from "./RowOfBoxes"

export default function Board({ shapes, correct, onClick }) {

    const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (

        <div className="board">
            
            <RowOfBoxes shapes={shapes.slice(0, 4)} 
                        correct={correct}
                        ids={ids.slice(0, 4)}
                        onClick={onClick} />            

            <RowOfBoxes shapes={shapes.slice(4, 8)}
                        correct={correct}
                        ids={ids.slice(4, 8)}
                        onClick={onClick} />            

            <RowOfBoxes shapes={shapes.slice(8, 12)}
                        correct={correct}
                        ids={ids.slice(8, 12)}
                        onClick={onClick} />            

            <RowOfBoxes shapes={shapes.slice(12, 16)}
                        correct={correct}
                        ids={ids.slice(12, 16)}
                        onClick={onClick} />            


        </div>

    )

}