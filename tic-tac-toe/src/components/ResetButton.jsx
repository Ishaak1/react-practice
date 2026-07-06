import "./ResetButton.css"

export default function Button({ resetGame }) {

    return (

        <button className="resetButton" onClick={resetGame}>
            <p className="resetButtonText">RESET</p>
        </button>

    )

}