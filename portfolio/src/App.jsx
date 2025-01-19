import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import  Dashboard  from "./pages/Dashboard";
import Projects from './pages/Projects';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <BrowserRouter>
      <Navbar />
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  );
}

export default App;
