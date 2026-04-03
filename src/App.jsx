import { Routes, Route } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import SplashScreen from './components/SplashScreen';
import AdminPage from './pages/AdminPage';
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
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<MainSite />} />
    </Routes>
  );
}
