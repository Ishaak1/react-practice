import Board from "./components/Board"
import Row from "./components/Row"
import Block from "./components/Block"
import Banner from "./components/Banner" 
import ScoreBoard from "./components/ScoreBoard"
import InputResetSection from "./components/InputResetSection"
import ResetButton from "./components/ResetButton"
import PlayAgainButton from "./components/PlayAgainButton"
import { useState } from "react"
import './App.css'

export default function App() {

  const [board, setBoard] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"])
  const [remaining, setRemaining] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
  const [winnerName, setWinnerName] = useState("")
  const [playerName, setPlayerName] = useState("YOU")
  const [playerScore, setPlayerScore] = useState(0)
  const [cpuScore, setCpuScore] = useState(0)
  const [input, setInput] = useState("")

  function play(id) {

    if ((winnerName === "") && (remaining.length > 1) && remaining.includes(id)) {

      var newRemaining = structuredClone(remaining)
      var newBoard = structuredClone(board)

      newRemaining = newRemaining.filter(item => item !== id)
      newBoard[id] = "x"

      if ((newBoard[0] === "x") && (newBoard[3] === "x") && (newBoard[6] === "x") ||
          (newBoard[1] === "x") && (newBoard[4] === "x") && (newBoard[7] === "x") ||
          (newBoard[2] === "x") && (newBoard[5] === "x") && (newBoard[8] === "x") ||
          (newBoard[0] === "x") && (newBoard[1] === "x") && (newBoard[2] === "x") ||
          (newBoard[3] === "x") && (newBoard[4] === "x") && (newBoard[5] === "x") ||
          (newBoard[6] === "x") && (newBoard[7] === "x") && (newBoard[8] === "x") ||
          (newBoard[0] === "x") && (newBoard[4] === "x") && (newBoard[8] === "x") ||
          (newBoard[2] === "x") && (newBoard[4] === "x") && (newBoard[6] === "x"))  {
        
        const newScore = playerScore + 1
        setPlayerScore(newScore)

        const newWinner = playerName
        setWinnerName(newWinner)
        
      } else {
      
        const randomNum = Math.random() * newRemaining.length
        const randomOption = newRemaining[Math.floor(randomNum)]

        newRemaining = newRemaining.filter(item => item !== randomOption)
        newBoard[randomOption] = "o"
      
      }
      
      if ((newBoard[0] === "o") && (newBoard[3] === "o") && (newBoard[6] === "o") ||
          (newBoard[1] === "o") && (newBoard[4] === "o") && (newBoard[7] === "o") ||
          (newBoard[2] === "o") && (newBoard[5] === "o") && (newBoard[8] === "o") ||
          (newBoard[0] === "o") && (newBoard[1] === "o") && (newBoard[2] === "o") ||
          (newBoard[3] === "o") && (newBoard[4] === "o") && (newBoard[5] === "o") ||
          (newBoard[6] === "o") && (newBoard[7] === "o") && (newBoard[8] === "o") ||
          (newBoard[0] === "o") && (newBoard[4] === "o") && (newBoard[8] === "o") ||
          (newBoard[2] === "o") && (newBoard[4] === "o") && (newBoard[6] === "o"))  {
        
        const newScore = cpuScore + 1
        setCpuScore(newScore)

        const newWinner = "CPU"
        setWinnerName(newWinner)

      }
      
      setRemaining(newRemaining)
      setBoard(newBoard)
    
    }

  }

  function resetGame() {

    setBoard(["-", "-", "-", "-", "-", "-", "-", "-", "-"])
    setRemaining([0, 1, 2, 3, 4, 5, 6, 7, 8])
    setWinnerName("")
    setPlayerName("YOU")
    setPlayerScore(0)
    setCpuScore(0)
    
  }

  function updateName() {

    setPlayerName(input)
    setInput("")

  }

  function playAgain() {

    setBoard(["-", "-", "-", "-", "-", "-", "-", "-", "-"])
    setRemaining([0, 1, 2, 3, 4, 5, 6, 7, 8])
    setWinnerName("")

  }

  return (
    
    <>

      <div className="background">

        <div className="leftSpace"/>

        <Board board={board}
               onClick={play} />

        <div className="right">

          <div className="sideBar">

            {

              ((winnerName !== "") || (remaining.length === 1)) && <Banner name={winnerName} />
            
            }

            {
            
              (cpuScore !== 0 || playerScore !== 0) && (<ScoreBoard name={playerName}
                                                                    cpuScore={cpuScore}
                                                                    playerScore={playerScore}/>)
            
            }

            <InputResetSection input={input}
                               updateName={updateName}
                               resetGame={resetGame}
                               setInput={setInput}
                               cpuScore={cpuScore}
                               playerScore={playerScore}/>

            {
           
              (winnerName !== "" || remaining.length === 1) && <PlayAgainButton playAgain={playAgain} />
           
            }            

          </div>  

        </div>

      </div>

    </>

  )

}