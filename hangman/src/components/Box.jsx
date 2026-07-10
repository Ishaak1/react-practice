import "./Box.css"

export default function Box({ letter, index, lastIndex, hiddenChars }) {

    return (

        <div className="box" style={{"margin-right": (index === lastIndex) ? "0px" : "16px"}}>
            
            {

                (letter !== "-") && <p className="boxText" style ={{"color": (hiddenChars.includes(letter)) ? "deeppink" : "black" }}>{letter}</p>
            
            }

        </div>

    )

}