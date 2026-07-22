import "./Board.css"
import Row from "./Row"
import PlayButton from "./PlayButton"
import { useEffect, useState } from "react"

export default function Board({ index, setIndex, pattern, selected, startGame, setSelected, onClick }) {
    
    useEffect(() => {

        if (index < pattern.length) { 

            setSelected(pattern[index])
            
            setTimeout(() => {
                
                setSelected(-1)

                setTimeout(() => {

                    const newIndex = index + 1
                    setIndex(newIndex)
    
                }, 500)

            }, 500)

        }   

    }, [index, pattern])

    return (

         <div className="board">

            <div className="slices">

                <Row ids={[0, 1]}
                     selected={selected}
                     onClick={onClick}
                     index={index}
                     pattern={pattern} />
                     
                <Row ids={[2, 3]}
                     selected={selected}
                     onClick={onClick}
                     index={index}
                     pattern={pattern} />
            
            </div>

            <div className="container">
                
                {
                
                    (pattern.length === 0) ? <PlayButton startGame={startGame}/> : <p className="round">{pattern.length - 1}</p>
                
                }

            </div>

        </div>

    )

}