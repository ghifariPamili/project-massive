import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage'
import BerandaUser from "./PagePenitip/BerandaUser";
import BerandaDriver from "./PageDriver/BerandaDriver"
import StartingJastip from "./PageDriver/StartingJastip"


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/homeUser" element={<BerandaUser />} />
        <Route path="/homeDriver" element={<BerandaDriver />} />
        <Route path="/homeDriver/StartingJastip" element={<StartingJastip />} />
        <Route path="/homeDriver/StartingJastip/inputNumber" element={<StartingJastip />} />
        <Route path="/homeDriver/StartingJastip/InputJastip" element={<StartingJastip />} />


      </Routes>
    </div>
  );
}
