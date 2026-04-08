//imports
import Home from '../features/pages/Home.jsx'; 
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'; 
import { useEffect } from 'react'; 
import './App.css';
//pages
import OurStory from '../features/pages/OurStory.jsx';
import Menu from '../features/pages/Menu.jsx';
import Gallery from '../features/pages/Gallery.jsx';
import Location from '../features/pages/Location.jsx';
import Contact from '../features/pages/Contact.jsx';
//components
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
    return null;
}

function AppShell() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0c0a08" }}>
            <ScrollToTop />
            <Navbar />

            <main style={{ flex: 1 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppShell />
        </BrowserRouter>
    );
}