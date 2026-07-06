import "./PlayAgainButton.css"

export default function PlayAgainButton({ playAgain }) {

    return (

        <button className="playAgainButton" onClick={playAgain}>
            <p className="playAgainButtonText">Play Again</p>
        </button>

    )

}