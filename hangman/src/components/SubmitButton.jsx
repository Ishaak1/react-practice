import "./SubmitButton.css"

export default function SubmitButton({ onClick }) {

    function submit() {

        onClick()

    }

    return (

        <button className="submitButton" onClick={submit}>
            <div className="arrow"/>
        </button>

    )

}