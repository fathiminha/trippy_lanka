import './App.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import Service from './routes/Service';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
      </Routes>

        
    </div>
  );
}

export default App;
