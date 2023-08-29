import Style from "./AboutPage.module.scss"

const AboutPage = () => {

   

    return (
        <div className={Style.gridContainer}>
            <div className={Style.gridItem2}><h1>About</h1></div>
            <div className={Style.gridItem3}>
                <h3 id="about">Hello !</h3>
                <p>Je m'appelle Matthieu Nourry J'ai 23 ans, et je suis actuellement à la recherche d'un premier emploi en tant que développeur frontend junior. Passionné par la création informatique, je me suis lancé dans l'aventure du développement fin 2022 avec la formation Le Wagon sur Rennes.</p>
                <p>Après avoir fait un BTS en management, je ne me voyais pas continuer sur cette voie. Je suis donc parti dans une formation découverte en modélisation 3D; j'y ai déouvert le développement.</p>
                <p>J'ai donc décider de continuer dans cette voie. La formation le Wagon m'a permit de découvrir l'UI/UX, des technologies backend et frontend, et surtout à réaliser un projet en équipe. Après la formation j'ai décidé de me concentrer sur des technologies plus front comme React.</p>
                <div className={Style.about}>
                <a href="CV-Matthieu-NOURRY.pdf" download="CV-Matthieu-NOURRY.pdf">
                    <button className="aboutBTN">Télécharger le CV <i className="fa-solid fa-download"></i></button>
                </a>
                </div>
            </div>
            <div className={Style.gridItem4}>
                <h2>My expertise</h2>
                    <h3>Frontend Dev</h3>
                    <ul className={Style.skillDevelopment}>
                        <li><i className="fa-brands fa-react"></i></li>
                        <li><span className={`skill ${Style.orange}`} >HTML</span></li>
                        <li><span className={`skill ${Style.blue}`}>CSS</span></li>
                        <li><span className={`skill ${Style.js}`}>Javascript</span></li>
                        <li><span className={`skill ${Style.blue}`}>React</span></li>
                        <li><span className={`skill ${Style.orange}`}>Git</span></li>
                        <li><i className="fa-solid fa-code"></i></li>

                    </ul>
                    <h3>UI/UX</h3>
                    <ul className={Style.skillDevelopment}>
                        <li><i className="fa-solid fa-palette"></i></li>
                        <li><span className={`skill ${Style.blue}`}>Tailwind</span></li>
                        <li><span className={`skill ${Style.figma}`}>Figma</span></li>
                        <li><span className={`skill ${Style.orange}`}>Blender</span></li>
                        <li><i className="fa-solid fa-brush"></i></li>
                    </ul>
                </div>
            <div className={Style.gridItem2}><h1>Skill</h1></div>
        </div>
    )
};

export default AboutPage