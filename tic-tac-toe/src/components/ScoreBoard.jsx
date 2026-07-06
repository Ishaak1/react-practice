import "./ScoreBoard.css"

export default function ScoreBoard({ name, cpuScore, playerScore }) {

    return (

        <div className="scoreBoard">

            <div className="names">
                
                <p className="scoreBoardText">CPU</p>
                <p className="scoreBoardText">{name}</p>
            
            </div>

            <div className="scores">

                <p className="scoreBoardText">{cpuScore}</p>
                <p className="scoreBoardText">{playerScore}</p>

            </div>

        </div>

    )

}