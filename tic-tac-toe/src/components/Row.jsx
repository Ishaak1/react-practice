import "./Row.css"
import Block from "./Block"

export default function Row({ ids, symbols, onClick }) {

    return (

        <div className="row">

            <Block id={ids[0]}
                   symbol={symbols[0]}
                   onClick={onClick} />

            <Block id={ids[1]}
                   symbol={symbols[1]}
                   onClick={onClick} />
            
            <Block id={ids[2]}
                   symbol={symbols[2]}
                   onClick={onClick} />

        </div>

    )

}