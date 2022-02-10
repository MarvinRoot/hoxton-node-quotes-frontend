import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  type Quote ={
    quote: string
    author: string
  }
  const [quote, setQuote] = useState<Quote | null>()

  function handleOnClick() {
    fetch('http://localhost:3001/getRandomQuote').then(resp => resp.json())
    .then(quoteFromServer => setQuote(quoteFromServer))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/plato_360x450.jpg?itok=oC0U0lCq&timestamp=1414179137" className="App-logo" alt="logo" />
        <p>Hey there! <br></br>Click on the quote to see another random quote</p>
        <p onClick={() => handleOnClick()} style={{width: "70ch", fontSize: "20px"}}>
          {quote?.quote}<br></br>
          -{quote?.author}
        </p>
        <p></p>
      </header>
    </div>
  )
}

export default App
