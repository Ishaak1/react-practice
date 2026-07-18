import "./PlayAgainReset.css"

export default function PlayAgainReset({ text, onClick }) {

    function reset() {

        onClick()

    }

    return (

        <button className="button" onClick={reset}>{text}</button>

    )

}