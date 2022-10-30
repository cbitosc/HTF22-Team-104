import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {
  Routes, Route,
  BrowserRouter,
  useNavigate,
} from 'react-router-dom';
import Camera from './components/Camera';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/Camera' element={<Camera />} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
