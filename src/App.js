
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

import About from './components/About';
import NoteState from './context/notes/NoteState';
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className='container'>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/About" element={<About />} />

            </Routes>


          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App;
