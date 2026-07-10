import "./Guess.css"

export default function Guess({ guess, setGuess }) {

    return (

        <input placeholder="Guess a letter/word"
               value={guess}
               onChange={event => setGuess(event.target.value)} />

    )

}