import Style from './Homepage.module.scss'
import Nav from "../components/nav";
import Godzilla from "../assets/images/affiche-godzilla.jpg"
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import { Link } from 'react-scroll';
import Footer from '../components/Footer';

const Homepage = () => {

    return (
     <div>
        <div id="home" className={Style.body}>
            <Nav />
            <div className={Style.container}>
                <div className={Style.title}>
                    <h3 >Hi, I' Am</h3>
                    <h1>Matthieu</h1>
                    <h1>Nourry</h1>
                    <div className={Style.Frontend}>
                        <h3 className={Style.FrontendWeb}>Frontend Web Developer</h3>
                    </div>
                </div>
                    <img src={Godzilla} alt="" />
            </div>
            <div className={Style.endContainer}> 
                    <h3>Welcome to my portfolio</h3>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <ul>
                            <li><i className="fa-solid fa-chevron-down"></i></li>
                            <li><i className="fa-solid fa-chevron-down"></i></li>
                            <li><i className="fa-solid fa-chevron-down"></i></li>
                        </ul>
                    </Link>
            </div>
        </div>
        <AboutPage />
        <ProjectPage/>
        <Footer/>
    </div>
    )
};

export default Homepage;