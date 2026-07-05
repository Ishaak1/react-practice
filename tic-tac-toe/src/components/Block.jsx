import "./Block.css"
import O from "./O"
import X from "./X"

export default function Block({ symbol, id, onClick }) {

    function selected() {

        onClick(id)

    }

    return (

        <div className="block" onClick={selected}>
            {(symbol === "-") ? null : ((symbol === "x") ? <X /> : <O /> )}
        </div>

    )

}