import "./PlayerButton.css"

export default function PlayerButton({ image }) {

    return (

        <button className="playerButton">
            <img src={image} className="buttonImage"/>
        </button>

    )

}