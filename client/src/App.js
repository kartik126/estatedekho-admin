import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import MapLocation from "./pages/MapLocation";

function App() {
  return (
    <>
    <div className="flex flex-row">
    <Sidebar/>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signup" element={<Dashboard />} />
        <Route path="/map-location" element={<MapLocation />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
