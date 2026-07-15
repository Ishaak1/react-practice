import "./DeleteButton.css"

export default function DeleteButton({ id, onClick }) {

    function remove() {

        onClick(id)

    }

    return (

        <button className="deleteButton" onClick={remove}>

            <div className="line1">
            
                <div className="line2"/>
            
            </div>

        </button>

    )

}