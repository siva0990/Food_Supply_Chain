import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import LandingPage from "./Pages/LandingPage";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>

      <BrowserRouter>

          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={< SignUpPage/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
