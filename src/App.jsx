import react from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx';
import SearchPage from './pages/SearchPage.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search_page" element={<SearchPage/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
