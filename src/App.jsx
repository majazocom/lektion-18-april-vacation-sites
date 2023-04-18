import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage'
import VacationSitePage from './pages/VacationSitePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path='/vacationsite' element={<VacationSitePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
