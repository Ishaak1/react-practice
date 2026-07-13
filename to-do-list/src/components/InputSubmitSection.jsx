import "./InputSubmitSection.css"
import UserInput from "./UserInput"
import SubmitButton from "./SubmitButton"

export default function InputSubmitSection({ input, setInput, onClick }) {

    return (

        <div className="inputSubmit">

            <UserInput input={input}
                       setInput={setInput} />

            <SubmitButton text="Submit" onClick={onClick} />

        </div>

    )

}