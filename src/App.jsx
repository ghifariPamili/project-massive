import { Routes, Route } from "react-router-dom" 
import HomePage from "./Pages/HomePage"
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" Component={HomePage}/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/Register" Component={RegisterPage}/>
      </Routes>
    </div>
  )
}

