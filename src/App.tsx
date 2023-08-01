import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/Home.page";
import RoomPage from "./pages/room/Room.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:id" element={<RoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
