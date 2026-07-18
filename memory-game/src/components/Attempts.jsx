import "./Attempts.css"

export default function Attempts({ attempts }) {

    return (

        <div className="count">

            {

                (attempts > 0) && <p className="countText">{attempts}</p>
            
            }

        </div>

    )

}