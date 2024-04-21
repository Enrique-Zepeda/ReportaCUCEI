import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./pages/Home/HomePage";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { LoginPage } from "./pages/Auth/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
