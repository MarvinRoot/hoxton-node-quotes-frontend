import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { QuoteInfo } from './pages/QuoteInfo';
import { CreateQuote } from './pages/CreateQuote';
import { Welcome } from './pages/Welcome';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/welcome" />} />
        <Route path='/welcome' element={< Welcome />} />
        <Route path='/quotes/:id' element={< QuoteInfo />} />
        <Route path='/createQuote' element={< CreateQuote />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      
    </div>
  )
}

export default App
