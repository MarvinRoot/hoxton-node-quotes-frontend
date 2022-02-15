import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Author, Quote } from "./types"

type Props = {
    authors: Author[] | null
}

export function QuoteInfo({ authors }:Props) {
    const params = useParams()
    const [quote, setQuote] = useState<Quote | null>()
    const [author, setAuthor] = useState<Author | null>()

    useEffect(()=>{
        fetch(`http://localhost:3001/quotes/${params.id}`).then(resp => resp.json())
        .then(quoteFromServer => {
            setQuote(quoteFromServer)
            const match = authors?.find(author => author.id === quote?.authorId)
            setAuthor(match)
        })
    }, [])

    if(quote === null) return <h1>LOADING</h1>
    return (
        <header className="App-header">
            <img style={{width: "300px"}} src={author?.image} />
            <p>Hey there! <br></br></p>
            <p style={{ width: "70ch", fontSize: "20px" }}>
                {quote?.quote}<br></br>
                -{author?.firstName} {author?.lastName}<br></br>
                -Age: {author?.age}
            </p>
            <ul >
                <li><a style={{textDecoration: "none", color: "unset"}} href="/welcome"> /welcomePage </a></li>
                <li><a style={{textDecoration: "none", color: "unset"}} href="/createQuote"> /createQuote </a></li>
            </ul>
        </header>
    )
}