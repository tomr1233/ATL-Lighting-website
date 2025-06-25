import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import DisplayCards from './components/DisplayCards';
import EbookSection from './components/EbookSection';
import Footer from './components/Footer';
import PromoImageSection from './components/PromoImageSection';
import GlobalReachSection from './components/GlobalReachSection';
import AnotherVideoSection from './components/AnotherVideoSection';
import AnotherDisplayCardsSection from './components/AnotherDisplayCardsSection';
import AnotherPromoImageSection from './components/AnotherPromoImage';
import ContactOptions from './components/ContactOptions';
import ProductNavigation from './components/ProductNavigation';

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
      <DisplayCards />
      <EbookSection />
      <PromoImageSection />
      <GlobalReachSection />
      <AnotherVideoSection />
      <AnotherDisplayCardsSection />
      <AnotherPromoImageSection />
      <ContactOptions />
      <ProductNavigation />
      <Footer />
    </div>
  );
}

export default App;