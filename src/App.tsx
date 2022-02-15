import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { QuoteInfo } from './pages/QuoteInfo';
import { CreateQuote } from './pages/CreateQuote';
import { Welcome } from './pages/Welcome';
import { useEffect, useState } from 'react';
import { Author } from './pages/types';

function App() {
  const [authors, setAuthors] = useState<Author[] | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/authors').then(resp => resp.json())
        .then(authorsFromServer => setAuthors(authorsFromServer))
  },[])

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/welcome" />} />
        <Route path='/welcome' element={< Welcome authors={authors}/>} />
        <Route path='/quotes/:id' element={< QuoteInfo authors={authors}/>} />
        <Route path='/createQuote' element={< CreateQuote />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      
    </div>
  )
}

export default App
