import "./ResultBox.css"

export default function ResultBox({ name }) {

    return (

        <div className="winner">

            <p className="text">Winner:</p>
            <p className="text">{name}</p>

        </div>

    )

} 