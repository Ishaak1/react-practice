import "./App.css"
import Card from "./components/Card"
import ResultBox from "./components/ResultBox"
import InputResetSection from "./components/InputResetSection"
import PlayerButton from "./components/PlayerButton"
import { useState } from "react"

export default function App() {

  const playerImages = [
                       "https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/right_rock.png?raw=true",
                       "https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/right_paper.png?raw=true",
                       "https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/right_scissor.png?raw=true"
                      ]
  
  const cpuImages = [
                    "https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/left_rock.png?raw=true",
                    "https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/left_paper.png?raw=true",
                    "https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/left_scissor.png?raw=true"
                   ]

  const [cpuImage, setCpuImage] = useState("")
  const [playerImage, setPlayerImage] = useState("")
  const [cpuScore, setCpuScore] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)
  const [playerName, setPlayerName] = useState("You")
  const [winner, setWinner] = useState("")
  const [input, setInput] = useState("")

  function selection(id) {
  
    const cpuOptions = [0, 1, 2]

    const randomNum = Math.random() * cpuOptions.length

    const randomOption = cpuOptions[Math.floor(randomNum)]

    setCpuImage(cpuImages[randomOption])

    setPlayerImage(playerImages[id])

    if ((id === 1) && (randomOption === 0) ||
        (id === 0) && (randomOption === 2) ||
        (id === 2) && (randomOption === 1)) {

          setWinner(playerName)

          const newScore = playerScore + 1
          setPlayerScore(newScore)

    }

    if ((id === 0) && (randomOption === 1) ||
        (id === 2) && (randomOption === 0) ||
        (id === 1) && (randomOption === 2)) {

        setWinner("CPU")

        const newScore = cpuScore + 1
        setCpuScore(newScore)

    }

    if (id === randomOption) {

      setWinner("")

    }

  }

  function updateName() {

    setPlayerName(input)
    setInput("")
    
  }

  function resetGame() {

    setCpuImage("")
    setPlayerImage("")
    setCpuScore(0)
    setPlayerScore(0)
    setPlayerName("You")
    setWinner("")

  }

  return (
    
    <>

      <div className="background">

        <div className="container">

          <Card name="CPU"
                image={cpuImage}
                score={cpuScore}
                 />
          
          <div className="middle">
          
              <img src="https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/%E2%80%94Pngtree%E2%80%94vs_6020206.png?raw=true" className="vs" />
              
              {
              
                (playerImage === "") ?
                <div style={{"height": "180px", "margin-bottom": "12px"}}/> :
                <ResultBox name={winner}/>
              
              }
              
              <InputResetSection input={input} 
                                 setInput={setInput}
                                 setPlayerName={setPlayerName}
                                 updateName={updateName}
                                 resetGame={resetGame} />
          
          </div>

          <div>

            <Card name={playerName}
                  image={playerImage}
                  score={playerScore}
                  />

            <div className="playerButtons">

              <PlayerButton image="https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/rock.png?raw=true" 
                            id={0}
                            onClick={selection} />
              
              <PlayerButton image="https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/paper3.png?raw=true" 
                            id={1}
                            onClick={selection} />
              
              <PlayerButton image="https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/scissor.png?raw=true"  
                            id={2}
                            onClick={selection} />

            </div>

          </div>
       
        </div>

      </div>
      
    </>

  )

}