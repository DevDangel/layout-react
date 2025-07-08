import Header from './components/Header.jsx';
import Customers from './components/Customers.jsx';
import AboutUs from './components/AboutUs.jsx';
import Statistics from './components/Statistics.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import CallToAction from './components/CallToAction.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
    return (
    <div className="main-layout">
        <Header />
        <Customers />
        <AboutUs />
        <Statistics />
        <WhyChoose />
        <CallToAction />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
    </div>
    );
}
export default App
