import "./RowOfBoxes.css"
import Box from "./Box"

export default function RowOfBoxes({ shapes, correct, ids, onClick }) {

    return (

        <div className="row">

            <Box shape={shapes[0]} 
                 correct={correct}
                 id={ids[0]}
                 onClick={onClick} />

            <Box shape={shapes[1]}
                 correct={correct}
                 id={ids[1]}
                 onClick={onClick} />

            <Box shape={shapes[2]}
                 correct={correct}
                 id={ids[2]}
                 onClick={onClick} />

            <Box shape={shapes[3]}
                 correct={correct}
                 id={ids[3]}
                 onClick={onClick} />

        </div>

    )

}