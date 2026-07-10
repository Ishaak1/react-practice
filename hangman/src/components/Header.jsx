import "./Header.css"

export default function Header({ attempts, hiddenChars, word}) {

    return (

        <div className="header">

            <p className="headerText">{(attempts > 0) & (hiddenChars.length !== 0) ? <span><span className="number">{attempts} </span> Attempts remaining</span> : 
                                       ((hiddenChars.length === 0) & (attempts !== 0) ? `Congratulations, you win` : 
                                       `You lose, the word was ${word}`)}</p>            

        </div>

    )

}