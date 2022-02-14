import { useState } from "react"
import { Quote } from "./types"

export function Welcome() {
    const [quote, setQuote] = useState<Quote | null>()

    function handleOnClick() {
        fetch('http://localhost:3001/getRandomQuote').then(resp => resp.json())
            .then(quoteFromServer => setQuote(quoteFromServer))
    }

    return (
        <header className="App-header">
            <img src="https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/plato_360x450.jpg?itok=oC0U0lCq&timestamp=1414179137" className="App-logo" alt="logo" />
            <p>Hey there! <br></br>Click on the quote to see another random quote</p>
            <p onClick={() => handleOnClick()} style={{ width: "70ch", fontSize: "20px" }}>
                {quote?.quote}<br></br>
                -{quote?.authorFirstName} {quote?.authorLastName}
            </p>
            <ul >
                <li><a style={{textDecoration: "none", color: "unset"}} href="/quotes/1"> /quote/1 </a></li>
                <li><a style={{textDecoration: "none", color: "unset"}} href="/createQuote"> /createQuote </a></li>
            </ul>
        </header>
    )
}