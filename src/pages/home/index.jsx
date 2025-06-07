import ScrollToTop from '../../components/ScrollToTop';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Skills from '../../components/Skills'; 
import Header from '../../components/Header';
import Introduction from '../../components/Introduction';
import Projects from '../../components/Projects';
import AboutMe from '../../components/AboutMe';
import './style.css';

function Home() {
    return (
        <>
            <Header />
            <Introduction />
            <AboutMe />
            <Skills />
            <Experience />  
            <Projects />   
            <ScrollToTop />
            <Footer />
        </>
    );
}

export default Home;