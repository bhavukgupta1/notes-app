
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About';
import NoteState from './context/notes/NoteState';
import LogOut from './components/LogOut';
// import Alert from './components/Alert';
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {/* <Alert message={" successful alert"}/> */}
          <div className='container'>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/logout" element={<LogOut />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>


          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App;
