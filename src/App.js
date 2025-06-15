import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  useEffect(() => {
    document.title = "Profile Lander"
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
