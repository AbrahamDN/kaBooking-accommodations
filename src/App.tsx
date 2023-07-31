import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/Home.page";
import HotelPage from "./pages/hotel/Hotel.page";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
