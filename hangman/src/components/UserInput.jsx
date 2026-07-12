import "./UserInput.css"

export default function UserInput({ guess, setGuess }) {

    return (

        <input placeholder="Guess a letter/word"
               value={guess}
               onChange={event => setGuess(event.target.value)} />

    )

}