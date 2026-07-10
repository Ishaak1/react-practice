import "./GuessSubmitSection.css"
import Guess from "./Guess"
import SubmitButton from "./SubmitButton"

export default function GuessSubmitSection({ guess, setGuess, onClick }) {

    return (

        <div className="guessSubmitSection">

            <Guess guess={guess}
                   setGuess={setGuess}/>
            
            <SubmitButton onClick={onClick}/>
            
        </div>

    )

}