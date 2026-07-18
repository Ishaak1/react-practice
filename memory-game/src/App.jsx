import './App.css'
import Board from "./components/Board"
import Attempts from "./components/Attempts"
import PlayAgainReset from "./components/PlayAgainReset"
import { useState, useEffect } from "react"


let memorizeTimer = null
let revealTimer = null

export default function App() {
  
  const [attempts, setAttempts] = useState(0)
  const [correct, setCorrect] = useState({})
  const [selected, setSelected] = useState({})
  const [shapes, setShapes] = useState([
                                        
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/circle.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/hexagon.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/octagon.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/pentagon.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/rhombus.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/square.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/star.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/triangle.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/circle.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/hexagon.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/octagon.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/pentagon.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/rhombus.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/square.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/star.png?raw=true",
                                        "https://github.com/Ishaak1/react-practice/blob/main/memory-game/src/assets/triangle.png?raw=true"
                                        
                                      ]) 

  function setupBoard() {

    var shuffledShapes = structuredClone(shapes)
    shuffledShapes = shuffledShapes.sort(() => Math.random() - 0.5)
    setShapes(shuffledShapes)
    
    var newCorrect = {}

    for (let i = 0; i < shuffledShapes.length; i++) {

      newCorrect[i] = shuffledShapes[i]

    }

    setCorrect(newCorrect)

    clearTimeout(revealTimer)

    memorizeTimer = setTimeout(() => {

      setCorrect({})

    }, 15000)

    setAttempts(0)

  }

  useEffect(() => {
    
    setupBoard()
  
  }, [])
  
  function selectedBlock(id) {

    const clicked = id in correct

    if (!clicked && Object.keys(selected).length < 2) {

      var newCorrect = structuredClone(correct)
      var newSelected = structuredClone(selected)
    
      newSelected[id] = shapes[id]
      newCorrect[id] = shapes[id]
          
      setCorrect(newCorrect)
      setSelected(newSelected)

      const selections = Object.keys(newSelected)

      if (selections.length === 2) {

        var newAttempts = attempts + 1
        setAttempts(newAttempts)

          if (shapes[selections[0]] !== shapes[selections[1]]) {
        
            clearTimeout(memorizeTimer)    

            revealTimer = setTimeout(() => {
              
              setSelected({})
      
              delete newCorrect[selections[0]] 
              delete newCorrect[selections[1]] 

              setCorrect(newCorrect)
            
            }, 2000)

          } else {

            setSelected({})

          }
        
      }

    }
    
  }

  return (
    
    <>

      <div className="background">

        <div className="header">

          <Attempts attempts={attempts}/>
          
          {
            
            (Object.keys(correct).length === 16) ? <PlayAgainReset text="Play again" onClick={setupBoard} /> :
                                                   <PlayAgainReset text="Restart" onClick={setupBoard} />
          
          }

        </div>

        <Board shapes={shapes}
               correct={correct}
               onClick={selectedBlock} />

      </div>

    </>

  )

}