import BackToTop from '../../components/BackToTop';
import Experiencia from '../../components/Experiencia';
import Footer from '../../components/Footer';
import Habilidades from '../../components/Habilidades';
import Header from '../../components/Header';
import Introducao from '../../components/Introducao';
import Projetos from '../../components/Projetos';
import SobreMim from '../../components/SobreMim';
import './style.css';

function Home() {
    return (
        <>
            <Header />
            <Introducao />
            <SobreMim />
            <Habilidades />
            <Experiencia />  
            <Projetos />   
            <BackToTop />
            <Footer />
        </>
    );
}

export default Home;