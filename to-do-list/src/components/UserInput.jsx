import "./UserInput.css"

export default function UserInput({ input, setInput }) {

    return (
        
        <input placeholder="New task" value={input}
                                      onChange={event => setInput(event.target.value)}/>

    )

}