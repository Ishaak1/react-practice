import "./PlayButton.css"

export default function PlayButton({ startGame }) {

    function start() {

        startGame()

    }

    return (

        <button className="playButton" onClick={start}>
            <div className="icon"/>
        </button>
        
    )

}