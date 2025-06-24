import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar 
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection />
      <VideoSection />
      <ServicesSection />
    </div>
  );
}

export default App;