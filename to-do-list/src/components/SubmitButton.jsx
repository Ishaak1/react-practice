import "./SubmitButton.css"

export default function SubmitButton({ text, onClick }) {

    function addTask() {

        onClick()

    }

    return (

        <button className="submitButton" onClick={addTask}>

            {text}
            
            <div className="chevron"/>
        
        </button>

    )

}