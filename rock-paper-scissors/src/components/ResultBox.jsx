import "./ResultBox.css"

export default function ResultBox({ name }) {

    return (

        <div className="winner">

            <p className="text">{(name !== "") ? "Winner" : "DRAW"}</p>
            <p className="text">{name}</p>

        </div>

    )

} 