import Faq from './components/FAQ/Faq';
import Hero from './components/Hero';
import Footer from './components/Footer/Footer';
import ContactUs from './components/Contact/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Testimonial from './components/Testimonial/Testimonial'
import Features from './components/Features/Features';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
     <div id ='features'> 
    <Features/>  
    </div>
  
    <Testimonial/>
    <div id='faq'>
    <Faq/>
    </div>
    <div id="contact">
      <ContactUs/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
