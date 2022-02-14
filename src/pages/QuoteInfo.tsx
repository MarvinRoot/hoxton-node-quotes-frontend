import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Quote } from "./types"

export function QuoteInfo() {
    const params = useParams()
    const [quote, setQuote] = useState<Quote | null>()

    useEffect(()=>{
        fetch(`http://localhost:3001/quotes/${params.id}`).then(resp => resp.json())
        .then(quoteFromServer => setQuote(quoteFromServer))
    }, [])

    if(quote === null) return <h1>LOADING</h1>
    return (
        <header className="App-header">
            <img style={{width: "300px"}} src={quote?.authorImg} />
            <p>Hey there! <br></br></p>
            <p style={{ width: "70ch", fontSize: "20px" }}>
                {quote?.quote}<br></br>
                -{quote?.authorFirstName} {quote?.authorLastName}<br></br>
                -Age: {quote?.authorAge}
            </p>
            <ul >
                <li><a style={{textDecoration: "none", color: "unset"}} href="/welcome"> /welcomePage </a></li>
                <li><a style={{textDecoration: "none", color: "unset"}} href="/createQuote"> /createQuote </a></li>
            </ul>
        </header>
    )
}