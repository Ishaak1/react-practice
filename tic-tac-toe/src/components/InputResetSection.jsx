import "./InputResetSection.css"
import Input from "./Input"
import SubmitButton from "./SubmitButton"
import ResetButton from "./ResetButton"

export default function InputResetSection({ input, setInput, resetGame, updateName, cpuScore, playerScore }) {

    return (

        <div className="inputResetSection"  style={{"margin-top": (cpuScore !== 0) || (playerScore !== 0) ? "20px" : "0px"}} >

            <div className="topRow">
                
                <Input input={input}
                       setInput={setInput} />

                <SubmitButton updateName={updateName}/>

            </div>

            <div className="bottomRow">

                <ResetButton purpose="RESET"
                             resetGame={resetGame}/>

            </div>

        </div>

    )

}