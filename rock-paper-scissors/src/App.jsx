import "./App.css"
import Card from "./components/Card"
import ResultBox from "./components/ResultBox"
import InputResetSection from "./components/InputResetSection"
import PlayerButton from "./components/PlayerButton"
import { useState } from "react"

export default function App() {

  const [cpuImage, setCpuImage] = useState("")
  const [playerImage, setPlayerImage] = useState("")

  return (
    <>

      <div className="background">

        <div className="container">

          <Card name="CPU"
                image={cpuImage}
                 />
          
          <div className="middle">
          
              <img src="https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/%E2%80%94Pngtree%E2%80%94vs_6020206.png?raw=true" className="vs" />
              {/* <div style={{"height": "180px", "margin-bottom": "12px"}}/> */}
              <ResultBox />
              <InputResetSection />
          
          </div>

          <div>

            <Card name={name}
                  image={playerImage}
                  />

            <div className="playerButtons">

              <PlayerButton image="https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/rock.png?raw=true"/>
              <PlayerButton image="https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/paper3.png?raw=true"/>
              <PlayerButton image="https://github.com/Ishaak1/react-practice/blob/main/rock-paper-scissors/assets/scissor.png?raw=true"/>

            </div>

          </div>
       
        </div>

      </div>
      
    </>
  )
}