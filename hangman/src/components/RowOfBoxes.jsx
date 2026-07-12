import "./RowOfBoxes.css"
import Box from "./Box"

export default function RowOfBoxes({ listOfVisibleLetters, hiddenCharAndIndices, attempts }) {

    return (

        <div className="row">

            {
                
                listOfVisibleLetters.map((letter, index) => (<Box letter={letter}
                                                                  index={index}
                                                                  lastIndex={listOfVisibleLetters.length - 1}
                                                                  hiddenCharAndIndices={hiddenCharAndIndices}
                                                                  attempts={attempts} />))
            
            }

        </div>

    )

}