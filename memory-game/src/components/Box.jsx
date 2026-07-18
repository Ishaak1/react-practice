import "./Box.css"

export default function Box({ shape, correct, id, onClick}) {

    function selectedBox() {

        onClick(id)

    }

    return (

        <div className="box" onClick={selectedBox}>

            {
                
                (id in correct) && <img src={shape} className="image"/>
            
            }
        
        </div>

    )

}