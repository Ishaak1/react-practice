import './App.css'
import Header from "./components/Header"
import RowOfBoxes from "./components/RowOfBoxes"
import GuessSubmitSection from "./components/GuessSubmitSection"
import ResetPlayAgain from "./components/ResetPlayAgain"
import { useState, useEffect } from "react"
import { generate } from "random-words"

export default function App() {

  const [attempts, setAttempts] = useState(8)
  const [hiddenCharAndIndices, setHiddenCharAndIndices] = useState({})
  const [word, setWord] = useState("")
  const [listOfVisibleLetters, setListOfVisibleLetters] = useState([])
  const [guess, setGuess] = useState("")

  function setup() {

    const newWord = generate().toUpperCase()
    setWord(newWord)
    var visibleIndices = []
    var gameLetters = []
    var hiddenObject = {}
    
    for (let i = 0; i < newWord.length; i++) {

      visibleIndices.push(i)

    }

    var length = visibleIndices.length / 2

    if (visibleIndices.length % 2 !== 0) {

      length = Math.floor(visibleIndices.length / 2) + 1

    }

    for (let i = 0; i < length; i++) {

      const randomNum = Math.random() * visibleIndices.length
      const randomOption = visibleIndices[Math.floor(randomNum)]
      visibleIndices = visibleIndices.filter(item => item !== randomOption)
      
      const isStored = newWord[randomOption] in hiddenObject
      const char = newWord[randomOption]

      if (!isStored) {
        
        hiddenObject[char] = [randomOption]
  
      } else {

        hiddenObject[char].push(randomOption)

      }
 
    }
    
    setHiddenCharAndIndices(hiddenObject)

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
    
    if ((attempts > 0) && (guess.length > 0)) {  

      var newListOfVisibleLetters = structuredClone(listOfVisibleLetters)
      var newHiddenCharAndIndices = structuredClone(hiddenCharAndIndices)
      const isHidden = newGuess in newHiddenCharAndIndices

      if (isHidden) {

        for (const index of newHiddenCharAndIndices[newGuess]) {

          newListOfVisibleLetters[index] = newGuess

        }

        delete newHiddenCharAndIndices[newGuess]

      }

      if (!isHidden && newGuess !== word) {

        const newAttempts = attempts - 1
    
        if (newAttempts === 0) {

          for (let i = 0; i < newListOfVisibleLetters.length; i++) {
            
            const char = word[i]
            newListOfVisibleLetters[i] = char

          }

        }

        setAttempts(newAttempts)

      }

      if (newGuess === word) {

        for (let i = 0; i < newListOfVisibleLetters.length; i++) {

          const char = word[i]
          newListOfVisibleLetters[i] = char
          const isCharInObject =  char in newHiddenCharAndIndices

          if (isCharInObject) {
  
            delete newHiddenCharAndIndices[char]

          }

        }

      }

      setHiddenCharAndIndices(newHiddenCharAndIndices)
      setListOfVisibleLetters(newListOfVisibleLetters)
      
    }

    setGuess("")
  
  }
  
  function reset() {

    setAttempts(8)
    setHiddenCharAndIndices({})
    setListOfVisibleLetters([])
    setup()

  }
  
  return (

    <>

      <div className="background">

        <Header attempts={attempts}
                hiddenCharAndIndices={hiddenCharAndIndices}
                word={word}/>

        <RowOfBoxes listOfVisibleLetters={listOfVisibleLetters}
                    hiddenCharAndIndices={hiddenCharAndIndices}
                    attempts={attempts} />

        <GuessSubmitSection guess={guess}
                            setGuess={setGuess}
                            onClick={submitGuess} />

        {
          
          (attempts > 0) && (Object.keys(hiddenCharAndIndices).length > 0) ? <ResetPlayAgain text="RESET" onClick={reset}/> : 
                                                                             <ResetPlayAgain text="Play Again" onClick={reset} />
          
        }

      </div>

    </>

  )

}