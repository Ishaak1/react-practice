import "./Row.css"
import Slice from "./Slice"

export default function Row({ ids, selected, onClick, index, pattern }) {

    return (

        <div className="row">

            <Slice id={ids[0]} 
                   selected={selected}
                   onClick={onClick}
                   index={index}
                   pattern={pattern} />
            
            <Slice id={ids[1]}
                   selected={selected}
                   onClick={onClick}
                   index={index}
                   pattern={pattern} />

        </div>

    )

}