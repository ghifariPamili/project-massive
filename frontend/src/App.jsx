import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage'
import BerandaUser from "./PagePenitip/BerandaUser";
import BerandaDriver from "./PageDriver/BerandaDriver"


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

      </Routes>
    </div>
  );
}
