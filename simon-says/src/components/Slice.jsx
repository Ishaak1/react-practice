import "./Slice.css"
import { useState, useEffect } from "react"

export default function Slice({ id, selected, onClick, index, pattern }) {

    const [color, setColor] = useState( (id === 0) ? "darkgreen" : 
                                        (id === 1) ? "darkred" : 
                                        (id === 2) ? "#DAA520" : 
                                        "darkblue" )

    function hovering () {

        if (index === pattern.length && pattern.length !== 0) {    

            if (id === 0) {

                setColor("#00CC00")

            } else if (id === 1) {

                setColor("#CC0000")

            } else if (id === 2) {

                setColor("yellow")

            } else {

                setColor("blue")

            }

        }

    }

    function notHovering () {

        if (id === 0) {

            setColor("darkgreen")

        } else if (id === 1) {

            setColor("darkred")

        } else if (id === 2) {

            setColor("#DAA520")

        } else {

            setColor("darkblue")

        }
    
    }

    useEffect (() => {

        notHovering()
    
    }, [pattern])

    function singleClick() {

        onClick(id)

    }

    return (

        <div className="slice" style={{"border-radius": (id === 0) ? "300px 0 0 0" :
                                                        (id === 1) ? "0 300px 0 0" : 
                                                        (id === 2) ? "0 0 0 300px" : 
                                                        (id === 3) ? "0 0 300px 0" : "0", 
                                       "background-color": (id === 0) ? (selected === 0 ? "#00CC00" : color) : 
                                                           (id === 1) ? (selected === 1 ? "#CC0000" : color) :
                                                           (id === 2) ? (selected === 2 ? "yellow" : color) :
                                                           (id === 3) ? (selected === 3 ? "blue" : color) : ""}} 
                                       onMouseEnter={hovering}
                                       onMouseLeave={notHovering}
                                       onClick={singleClick}/>

    )

}