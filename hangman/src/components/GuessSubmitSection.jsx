import "./GuessSubmitSection.css"
import UserInput from "./UserInput"
import SubmitButton from "./SubmitButton"

export default function GuessSubmitSection({ guess, setGuess, onClick }) {

    return (

        <div className="guessSubmitSection">

            <UserInput guess={guess}
                   setGuess={setGuess}/>
            
            <SubmitButton onClick={onClick}/>
            
        </div>

    )

}