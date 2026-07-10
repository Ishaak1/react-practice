import "./RowOfBoxes.css"
import Box from "./Box"

export default function RowOfBoxes({ listOfVisibleLetters, hiddenChars }) {

    return (

        <div className="row">

            {
                
                listOfVisibleLetters.map((letter, index) => (<Box letter={letter}
                                                                  index={index}
                                                                  lastIndex={listOfVisibleLetters.length - 1}
                                                                  hiddenChars={hiddenChars} />))
            
            }

        </div>

    )

}