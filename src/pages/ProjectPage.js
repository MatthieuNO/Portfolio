import React, { useState } from "react";
import Modal from "react-modal";
import Style from "./ProjectPage.module.scss";
import PcShop from "../assets/images/pc-shop.png";
import PcShop2 from "../assets/images/pc-shop1.png"
import PcShop3 from "../assets/images/pc-shop2.png"
import Sportner from "../assets/images/sportner2.png";
import Sportner1 from "../assets/images/sportner4.png";
import Sportner2 from "../assets/images/sportner3.png";
import Sportner3 from "../assets/images/image (1).png";
import Quizz from "../assets/images/quiz-capital1.png";
import Quizz2 from "../assets/images/quiz-capital2.png";
import Quizz3 from "../assets/images/quiz-capital3.png";
import AppMeteo from "../assets/images/app-meteo.png"
import AppMeteo1 from "../assets/images/app-meteo1.png"

const ProjectPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };


    const imageContent = {
        [PcShop]: {
            images: [PcShop2, PcShop3],
            technologies: ["React", "Scss", "Html", "Javascript"]
        },
        [Sportner]: {
            images: [Sportner1, Sportner2, Sportner3],
            technologies: ["Ruby", "Scss", "Html", "Javascript"]
        },
        [Quizz]: {
            images: [Quizz3, Quizz2],
            technologies: ["Css", "Html", "Javascript"]
        },
        [AppMeteo]: {
            images: [AppMeteo,AppMeteo1],
            technologies: ["React", "TailWind", "Html", "Javascript", "OpenWeather"]
        }
    };

    
    const content = imageContent[selectedImage];

    return (
        <div className={Style.ProjectPage}>
            <h2 id="project">Project</h2>
            <div className={Style.ProjectIMG}>
                <div className="flex">
                <div className={Style.ProjectContent}>
                    <div className={Style.imgContent}>
                            <img className={Style.img}src={PcShop} alt="" onClick={() => openModal(PcShop)} />
                        <div className={Style.infos}>
                            <p>More Infos</p>
                        </div>
                    </div>
                    <h3>Pc Shop</h3>
                </div>
                <div className={Style.ProjectContent}>
                    <div className={Style.imgContent}>
                        <img src={Sportner} alt="" onClick={() => openModal(Sportner)} />
                        <div className={Style.infos}>
                            <p>More Infos</p>
                        </div>
                    </div>
                    <h3>Sportner</h3>
                </div>
                </div>
                <div className="flex">

                <div className={Style.ProjectContent}>
                    <div className={Style.imgContent}>
                        <img src={AppMeteo} alt="" onClick={() => openModal(AppMeteo)} />
                         <div className={Style.infos}>
                            <p>More Infos</p>
                        </div>
                    </div>
                    <h3>Meteo</h3>
                </div>
                <div className={Style.ProjectContent}>
                    <div className={Style.imgContent}>
                        <img src={Quizz} alt="" onClick={() => openModal(Quizz)} />
                         <div className={Style.infos}>
                            <p>More Infos</p>
                        </div>
                    </div>
                    <h3>Quizz</h3>
                </div>
                </div>
            </div>
        
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={Style.CustomModal}
                overlayClassName={Style.Overlay}
            >
                <div className={Style.ModalContent}>
                    {content && (
                        <>
                            {content.images.map((image, index) => (
                                <img key={index} src={image} alt="" />
                            ))}
                            <div className={Style.ModalInfos}>
                                <div className={Style.ModalClose}>
                                    <button onClick={closeModal}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                                <h2>Techno utiliser</h2>
                                <ul>
                                    {content.technologies.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};



export default ProjectPage;
