import "./Banner.css"

export default function Banner({ name }) {

    return (

        <div className="banner">

            <div className="center">
                
                <p className="bannerText">{(name === "") ? "DRAW" : "Winner"}</p>
                <p className="bannerText">{name}</p>
            
            </div>
        
        </div>

    )

}