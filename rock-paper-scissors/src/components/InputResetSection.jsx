import "./InputResetSection.css"

export default function InputResetSection() {

    return (

        <div className="inputContainer">

            <div className="topRow">

                <input placeholder="Enter your name" ></input>
                
                <button className="submit">
                    <div className="submitArrow" />
                </button>

            </div>

            <button className="reset">RESET</button>

        </div>

    )

}
