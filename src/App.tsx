import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/Home.page";
import HotelPage from "./pages/hotel/Hotel.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:id" element={<HotelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
