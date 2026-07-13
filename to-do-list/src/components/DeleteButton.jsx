import "./DeleteButton.css"

export default function DeleteButton({ row, onClick }) {

    function remove() {

        onClick(row)

    }

    return (

        <button className="deleteButton" onClick={remove}>

            <div className="line1">
            
                <div className="line2"></div>
            
            </div>

        </button>

    )

}