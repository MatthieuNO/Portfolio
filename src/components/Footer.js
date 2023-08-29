import Style from './Footer.module.scss';
import Form from './Form';

const Footer = () => {
   

  return (
    <footer>
        <div className={Style.footer}>
            <Form/>
        <div className={Style.footerLink}>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/matthieu-nourry-491239153/" target="_blank" rel="noreferrer">
                         <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/MatthieuNO" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
            </ul>
                <p>Copyright © 2022 MN, Inc.</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;