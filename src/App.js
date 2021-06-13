import Navbar from './Navbar';
import HomeSection from './sections/Home';
import AboutSection from './sections/About'
import ServicesSection from './sections/Services';
import ContactSection from './sections/Contact';

import './App.scss';

function App() {

  return (
    <>
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ContactSection/>
    </>
  );
}

export default App;
