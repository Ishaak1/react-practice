import "./PlayerButton.css"

export default function PlayerButton({ image, id, onClick }) {

    function call() {

        onClick(id)

    }

    return (

        <button className="playerButton" onClick={call}>
            <img src={image} className="buttonImage"/>
        </button>

    )

}