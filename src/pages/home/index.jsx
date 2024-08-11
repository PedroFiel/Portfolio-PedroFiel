import BackToTop from '../../components/BackToTop';
import Experiencia from '../../components/Experiencia';
import Habilidades from '../../components/Habilidades';
import Header from '../../components/Header';
import Introducao from '../../components/Introducao';
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
            <BackToTop />
        </>
    );
}

export default Home;