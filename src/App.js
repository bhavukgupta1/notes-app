
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <div>
      
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />

          </Routes>


        </div>
      </BrowserRouter>
      </>
)}

export default App;
