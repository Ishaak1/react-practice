
import './App.css'
import Board from "./components/Board"
import { useState, useEffect } from "react"

export default function App() {

  const [pattern, setPattern] = useState([])
  const [currentColorIndex, setCurrentColorIndex] =  useState(0)
  const [selected, setSelected] = useState(-1)
  const [index, setIndex] = useState(0)
  const options = [0, 1, 2, 3]

  function startGame() {
  
    var newPattern = []
    var reps = 2

    if (pattern.length === 0) {

      reps = 2  

    } else {

      reps = pattern.length + 1

    }

    for (let i = 0; i < reps; i++) {

      const randomNum = Math.random() * options.length
      const randomOption = options[Math.floor(randomNum)]
      newPattern.push(randomOption)

    }

    setPattern(newPattern)
    
  }
  
  function click(id) {
    
    if (index === pattern.length && pattern.length !== 0) {
      
      var newCurrentColorIndex = currentColorIndex
    
      if (id === pattern[newCurrentColorIndex]) {

        newCurrentColorIndex = newCurrentColorIndex + 1
        setCurrentColorIndex(newCurrentColorIndex)

      } else {

        setCurrentColorIndex(0)
        setIndex(0)
        setPattern([])

      }

      if (newCurrentColorIndex === pattern.length && pattern.length !== 0) {


        setTimeout(() => {
  
          setIndex(0)
          setCurrentColorIndex(0)
          startGame()
  
        }, 200)

      } 
    
    }
  
  }

  return (

    <>

      <div className="background">

        <Board pattern={pattern}
               selected={selected}
               startGame={startGame}
               setSelected={setSelected}
               index={index}
               setIndex={setIndex}
               onClick={click} />

      </div>

    </>

  )

}