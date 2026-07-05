import "./Board.css"
import Row from "./Row"

export default function Board({ board, onClick }) {

    return (

        <div className="tictactoe">

            <Row ids={[0, 1, 2]}
                 symbols={board.slice(0, 3)}
                 onClick={onClick} />

            <Row ids={[3, 4, 5]}
                 symbols={board.slice(3, 6)}
                 onClick={onClick} />
                 
            <Row ids={[6, 7, 8]}
                 symbols={board.slice(6, 9)}
                 onClick={onClick} />
            
        </div>

    )

}