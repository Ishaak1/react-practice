import "./Card.css"

export default function Card({ name, score, image }) {

    return (

        <div className="card">

            <div className="heading">
            
                <p className="name">{name}</p>
                <p className="name">{score}</p>
            
            </div>
    
            <img src={image} className="image"/>

        </div>

    )

}