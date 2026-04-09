import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import SplashScreen from './components/SplashScreen';
import WelcomeModal from './components/WelcomeModal';
import AdminPage from './pages/AdminPage';
import LegalPage from './pages/LegalPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Highlights from './components/Highlights';
import About from './components/About';
import Register from './components/Register';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

function MainSite() {
  const { lang } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  // Show modal once per session, right after language is chosen
  useEffect(() => {
    if (!lang) return;
    const seen = sessionStorage.getItem('welcome_seen');
    if (!seen) {
      setShowModal(true);
      sessionStorage.setItem('welcome_seen', '1');
    }
  }, [lang]);

  if (!lang) return <SplashScreen />;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Highlights />
        <About />
        <Register />
        <FAQ />
      </main>
      <Footer />
      <StickyBar />
      <div className="h-16 sm:h-0" />
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/privacy-policy" element={<LegalPage />} />
      <Route path="*" element={<MainSite />} />
    </Routes>
  );
}
