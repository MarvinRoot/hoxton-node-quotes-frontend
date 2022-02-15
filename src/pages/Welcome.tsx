import { useEffect, useState } from "react"
import { Author, Quote } from "./types"

type Props = {
    authors: Author[] | null
}

export function Welcome({ authors }: Props) {
    const [quote, setQuote] = useState<Quote | null>()
    const [author, setAuthor] = useState<Author | null>()

    function handleOnClick() {
        fetch('http://localhost:3001/getRandomQuote').then(resp => resp.json())
            .then(quoteFromServer => {
                setQuote(quoteFromServer)
            })
    }

    useEffect(() => {
        const match = authors?.find(author => author.id === quote?.authorId)
        setAuthor(match)
        console.log(match)
    }, [quote])

    if (authors === null) return <h1>Loading</h1>
    return (
        <header className="App-header">
            <img src="https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/plato_360x450.jpg?itok=oC0U0lCq&timestamp=1414179137" className="App-logo" alt="logo" />
            <p>Hey there! <br></br>Click on the quote to see another random quote</p>
            <p onClick={() => handleOnClick()} style={{ width: "70ch", fontSize: "20px" }}>
                {quote?.quote}<br></br>
                -{author?.firstName} {author?.lastName}
            </p>
            <ul >
                <li><a style={{ textDecoration: "none", color: "unset" }} href={`/quotes/${quote?.id}`}> {`/quotes/${quote?.id}`} </a></li>
                <li><a style={{ textDecoration: "none", color: "unset" }} href="/createQuote"> /createQuote </a></li>
            </ul>
        </header>
    )
}