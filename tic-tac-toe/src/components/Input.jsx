import "./Input.css"

export default function Input({ input, setInput }) {

    return (

        <input placeholder="Enter your name" 
               value={input}
               onChange={(event => setInput(event.target.value))} />

    )

}