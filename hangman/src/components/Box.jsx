import "./Box.css"

export default function Box({ letter, index, lastIndex, hiddenCharAndIndices, attempts }) {

    const isInObject = letter in hiddenCharAndIndices
    const isLetterMissing = isInObject && hiddenCharAndIndices[letter].includes(index)

    return (

        <div className="box" style={{"margin-right": (index === lastIndex) ? "0px" : "16px"}}>
            
            {

                (letter !== "-") && <p className="boxText" style={{"color": (isLetterMissing && attempts === 0) ? "deeppink" : "black" }}>{letter}</p>
            
            }

        </div>

    )

}