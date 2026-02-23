import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import EventsList from "./pages/EventsList/EventsList";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent/CreateEvent";

function App() {
  return (
    <BrowserRouter basename="/NextEvent">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
