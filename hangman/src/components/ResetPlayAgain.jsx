import "./ResetPlayAgain.css"

export default function PlayAgain({ text, onClick }) {

    function playAgain() {

        onClick()

    }

    return (

        <button className="playAgainButton" onClick={playAgain}>
            <p className="playAgainText">{text}</p>
        </button>

    )

}