import React from 'react';
import { Link } from 'react-scroll';
import Style from './nav.module.scss';

const Nav = () => {
    return (
        <div className={Style.nav}>
            <ul className={Style.navContent}>
                <li className="navBTN">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        HOME
                    </Link>
                </li>/
                <li className="navBTN">
                <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        ABOUT
                    </Link>
                </li>/
                <li className="navBTN">
                <Link
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        PROJECT
                    </Link>
                    </li>/
                <li className="navBTN">
                <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
