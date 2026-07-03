import "./InputResetSection.css"
import { useState } from "react"

export default function InputResetSection({ input, setInput, setPlayerName, updateName, resetGame }) {

    return (

        <div className="inputContainer">

            <div className="topRow">

                <input placeholder="Enter your name" 
                       value={input}
                       onChange={(event) => setInput(event.target.value)}
                        />
                
                <button className="submit" onClick={updateName}>
                    <div className="submitArrow" />
                </button>

            </div>

            <button className="reset" onClick={resetGame}>RESET</button>

        </div>

    )

}
