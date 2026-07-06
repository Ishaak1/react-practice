import "./SubmitButton.css"

export default function SubmitButton({ updateName }) {

    return (

        <button className="submitButton" onClick={updateName}>
            <div className="arrow"/>
        </button> 

    )

}
