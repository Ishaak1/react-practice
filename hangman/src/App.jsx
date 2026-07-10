import './App.css'
import Header from "./components/Header"
import RowOfBoxes from "./components/RowOfBoxes"
import GuessSubmitSection from "./components/GuessSubmitSection"
import ResetPlayAgain from "./components/ResetPlayAgain"
import { useState, useEffect } from "react"
import { generate } from "random-words"

export default function App() {

  const [attempts, setAttempts] = useState(8)
  const [hiddenChars, setHiddenChars] = useState([])
  const [hiddenIndices, setHiddenIndices] = useState([])
  const [word, setWord] = useState("")
  const [listOfVisibleLetters, setListOfVisibleLetters] = useState([])
  const [guess, setGuess] = useState("")

  function setup() {

    const newWord = generate().toUpperCase()
    setWord(newWord)
    var visibleIndices = []
    var gameLetters = []
    var hidden = []
    var hiddenLetters = []
    
    for (let i = 0; i < newWord.length; i++) {

      visibleIndices.push(i)

    }

    var length = 0

    if (visibleIndices.length % 2 === 0) {

      length = (visibleIndices.length / 2)

    } else {

      length = ((visibleIndices.length / 2) - 0.5) + 1

    }

    for (let i = 0; i < length; i++) {

      const randomNum = Math.random() * visibleIndices.length
      const randomOption = visibleIndices[Math.floor(randomNum)]
      visibleIndices = visibleIndices.filter(item => item !== randomOption)

      hidden.push(randomOption)
      hiddenLetters.push(newWord[randomOption])

    }
    
    setHiddenIndices(hidden)
    setHiddenChars(hiddenLetters)

    for (let i = 0; i < newWord.length; i++) {

      if (visibleIndices.includes(i)) {

        gameLetters.push(newWord[i])

      } else {

        gameLetters.push("-")

      }

    }

    setListOfVisibleLetters(gameLetters)

  }

  useEffect(() => {

    setup()

  }, [])

  function submitGuess() {

    const newGuess = guess.toUpperCase()
    
    if ((attempts !== 0) && (guess.length !== 0)) {  

      var newHiddenChars = hiddenChars
      var newListOfVisibleLetters = listOfVisibleLetters
      var newHiddenIndices = hiddenIndices

      if (newHiddenChars.includes(newGuess)) {

        for (let i = 0; i < newHiddenChars.length; i++) {

          if (newHiddenChars[i] === newGuess) {
            
            const index = newHiddenIndices[i]
            newListOfVisibleLetters[index] = newGuess
            
          }

        }
              
        for (let i = 0; i < newListOfVisibleLetters.length; i++) {
          
          if (newListOfVisibleLetters[i] === newGuess) {
        
            newHiddenIndices = newHiddenIndices.filter(item => item !== i)
          
          }
        
        }

        newHiddenChars = newHiddenChars.filter(item => item !== newGuess)

        setListOfVisibleLetters(newListOfVisibleLetters)
        setHiddenChars(newHiddenChars)
        setHiddenIndices(newHiddenIndices)

      } else {

        const newAttempts = attempts - 1
    
        if (newAttempts === 0) {

          for (let i = 0; i < listOfVisibleLetters.length; i++) {
  
            listOfVisibleLetters[i] = word[i]

          }

        }

        setAttempts(newAttempts)
  
      }

      if (newGuess === word) {

        for (let i = 0; i < listOfVisibleLetters.length; i++) {

          listOfVisibleLetters[i] = word[i]

          if (newHiddenChars.includes(word[i])) {

            newHiddenChars = newHiddenChars.filter(item => item !== word[i])

          }

        }

        setHiddenChars(newHiddenChars)

      }
      
    }



    setGuess("")

  }

  function reset() {

    setAttempts(8)
    setHiddenChars([])
    setHiddenIndices([])
    setListOfVisibleLetters([])
    setup()

  }
  
  return (

    <>

      <div className="background">

        <Header attempts={attempts}
                hiddenChars={hiddenChars}
                word={word}/>

        <RowOfBoxes listOfVisibleLetters={listOfVisibleLetters}
                    hiddenChars={hiddenChars} />

        <GuessSubmitSection guess={guess}
                            setGuess={setGuess}
                            onClick={submitGuess} />

        {
          
          (attempts !== 0) && (hiddenChars.length !== 0) ? <ResetPlayAgain text="RESET" onClick={reset}/> : 
                                                           <ResetPlayAgain text="Play Again" onClick={reset} />
          
        }

      </div>

    </>

  )

}