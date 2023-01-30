import Navbar from "./pages/Navbar";
import { Routes, Route } from "react-router-dom";
import CreateAd from "./pages/CreateAd";
import Dashboard from "./pages/Dashboard";
import { Card } from "@mui/material";
import TextAdForm from "./pages/TextAdForm";
import MediaAdForm from "./pages/MediaAdForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createads" element={<CreateAd />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/textadform" element={<TextAdForm />} />
          <Route path="/mediaadform" element={<MediaAdForm />} />
        </Routes>
        <Card />
      </div>
    </>
  );
}

export default App;
