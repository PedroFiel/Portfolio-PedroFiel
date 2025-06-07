import BackToTop from '../../components/BackToTop';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Habilidades from '../../components/Habilidades'; 
import Header from '../../components/Header';
import Introducao from '../../components/Introducao';
import Projects from '../../components/Projects';
import SobreMim from '../../components/SobreMim';
import './style.css';

function Home() {
    return (
        <>
            <Header />
            <Introducao />
            <SobreMim />
            <Habilidades />
            <Experience />  
            <Projects />   
            <BackToTop />
            <Footer />
        </>
    );
}

export default Home;