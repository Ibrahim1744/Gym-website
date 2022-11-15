import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="about" element={<About/>} />
          <Route exact path="contact" element={<Contact/>} />
          <Route exact path="gallery" element={<Gallery/>} />
          <Route exact  path="plans" element={<Plans/>} />
          <Route exact path="trainers" element={<Trainers/>} />
        </Routes>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;
