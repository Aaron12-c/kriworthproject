// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePages from './Pages/HomePages';
import ServicePage from './Pages/ServicePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/Contact';
import PlatformPage from './Pages/PlatformPage';
import ProgramPage from './Pages/Program';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Home Routes */}
            <Route path="/" element={<HomePages />} />
            <Route path="/home" element={<HomePages />} />
            
            {/* About Routes */}
            <Route path="/about" element={<AboutPage />} />
            
            {/* Service Routes */}
            <Route path="/service" element={<ServicePage />} />
            <Route path="/services" element={<ServicePage />} />
            
            {/* Contact Routes */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            
            {/* Platform Routes */}
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/toolkits" element={<PlatformPage />} />
            <Route path="/tools" element={<PlatformPage />} />
            
            {/* Program Routes */}
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/programme" element={<ProgramPage />} />
            <Route path="/free-programme" element={<ProgramPage />} />
            
            {/* Shop/Other Routes */}
            <Route path="/shop" element={<HomePages />} />
            
            {/* 404 Fallback - Optional */}
            <Route path="*" element={<HomePages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;