import '../../templates/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import { ScrollButton } from "../scroll-button/ScrollButton"
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { YearDisplay } from '../Year/YearDisplay';
import { setupImageClickAnimation } from '../../templates/ts/go-up-image-jquery';
import { setupCardHoverAnimation } from '../../templates/ts/card-animation-start-jquery';
import { setupButtonToggle } from '../../templates/ts/toggle-botton-newsletter';
import { initEnlaceHandler } from "../../templates/ts/link-handler";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Accordion } from 'react-bootstrap';


export const Start = () => {

    useEffect(() => {
        setupImageClickAnimation();
    }, []);

    useEffect(() => {
        setupCardHoverAnimation();
    }, []);

    useEffect(() => {
        setupCircle();
    }, []);

    useEffect(() => {
        setupButtonToggle();
    }, []);

    useEffect(() => {
        initEnlaceHandler();
    }, []);

    const [currentYear, setcurrentYear] = useState<number>(new Date().getFullYear());
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [Opensettings, setOpensettings] = useState(false);
    const videoUrl = '/videos/Aprende Inglés con Michigan Master.mp4';
    const posterUrl = 'http://localhost:5173/videos/Aprende%20Ingl%C3%A9s%20con%20Michigan%20Master.mp4';

    const setupCircle = () => {
        const circle = document.getElementById('circle');

        if (circle) {
            const circleArray = circle.textContent?.split('') || [];
            circle.textContent = '';

            for (let i = 0; i < circleArray.length; i++) {
                circle.innerHTML += `<span class="animate__animated animate__heartBeat" style="transform:rotate(${(i + 4) * 10}deg);">${circleArray[i]}</span>`;
            }

            circle.innerHTML += `<i class="fa-solid fa-plus animate__animated animate__pulse" style="font-size: 45px; position: relative; border-radius: 50%; background-color: #110059; border: 7px solid #ffffff; color: #ffffff; padding: 27px; margin-left: 2px"></i>`;
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdownSettings = () => {
        setOpensettings(!Opensettings);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Formulario enviado");
    };

    return (
        <div className="bg-main-purple" style={{ overflowX: 'hidden', overflowY: 'scroll', height: '100vh' }} ref={containerRef}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{ width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px' }}>
                {/* Movil*/}
                <div className='d-block d-lg-none'>
                    <h1 className="champ-bold" style={{ margin: '0 0 0 -2px', marginTop: '-73px', fontSize: '18px' }}>Michigan's</h1>
                    <h1 className="champ-bold" style={{ margin: '0 0 0 20px', fontSize: '18px', transform: 'translateY(-7px)' }}>Store</h1>
                </div>
                {/* Pc */}
                <div className='d-none d-block d-lg-block'>
                    <h1 className="champ-bold" style={{ margin: '0 0 0 -17px', marginTop: '-30px', fontSize: '18px' }}>Michigan's</h1>
                    <h1 className="champ-bold" style={{ margin: '0 0 0 5px', fontSize: '18px', transform: 'translateY(-7px)' }}>Store</h1>
                </div>
                
                {/* Nav in PC */}
                <div className="d-none d-block d-lg-block">
                    <nav className="d-flex justify-content-between align-items-center"
                        style={{ maxWidth: '100%', marginRight: '300px', marginTop: '-30px' }}>
                        <Link to="/start" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Inicio</Link>
                        <Link to="/courses" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Cursos</Link>
                        <Link to="/prices" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Precios</Link>
                        <Link to="/us" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Nosotros</Link>
                        <Link to="/blogs" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Blogs</Link>
                    </nav>
                </div>
                {/* Nav in Movil */}
                <div className="d-block d-lg-none mx-auto" style={{ width: '45%', position: 'relative', marginTop: '-155px' }}>
                    <nav className="d-flex justify-content-between align-items-center flex-nowrap overflow-x-auto"
                        style={{ whiteSpace: 'nowrap', width: '250px', marginTop: '25px', marginLeft: '-40px' }}>
                        <div style={{ marginTop: '200px' }}>
                            <a href="#" className="text-white mx-2 poppins-bold">Inicio</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Cursos</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Precios</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Nosotros</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Blogs</a>
                        </div>
                    </nav>
                </div>

                {/* Movil*/}
                <div className='d-block d-lg-none'>
                    <div className="dropdown d-flex align-items-center" style={{ marginTop: '-70px' }}>
                        <img src="/images/Ellipse 840.png" alt="User Avatar" className="rounded-circle me-2" width="50" height="50" onClick={toggleDropdown}
                            data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }} />
                        <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`}>
                            <li>
                                <Link
                                    className="dropdown-item text-white poppins-light mb-2"
                                    to="/avatar"
                                    style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}
                                >
                                    Ver perfil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item text-white poppins-light"
                                    to="/user_account_configuration"
                                    style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}
                                >
                                    Configuración
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item text-white poppins-light"
                                    to="/"
                                    style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}
                                >
                                    Cerrar sesión
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex fs-3 bg-secondary rounded-circle  text-black  justify-content-center me-3"
                            style={{ height: '50px', width: '50px' }}>
                            <i className="text-center  bi-three-dots-vertical" data-bs-toggle="dropdown" onClick={toggleDropdownSettings}
                                style={{ cursor: 'pointer', backgroundColor: '#a19aac', display: 'flex', padding: '12px', borderRadius: '25px' }}></i>
                            <ul className={`dropdown-menu dropdown-menu-end ${Opensettings ? 'show' : ''}`}>
                                <li><Link className="dropdown-item text-white poppins-light mb-2" to="/user_account_configuration"
                                    style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Configuración</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Pc */}
                <div className='d-none d-block d-lg-block'>
                    <div className="dropdown d-flex align-items-center" style={{ marginTop: '-35px' }}>
                        <img src="/images/Ellipse 840.png" alt="User Avatar" className="rounded-circle me-2" width="50" height="50" onClick={toggleDropdown}
                            data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }} />
                        <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`}>
                            <li>
                                <Link
                                    className="dropdown-item text-white poppins-light mb-2"
                                    to="/avatar"
                                    style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}
                                >
                                    Ver perfil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item text-white poppins-light"
                                    to="/user_account_configuration"
                                    style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}
                                >
                                    Configuración
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item text-white poppins-light"
                                    to="/"
                                    style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}
                                >
                                    Cerrar sesión
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex fs-3 bg-secondary rounded-circle  text-black  justify-content-center me-3"
                            style={{ height: '50px', width: '50px' }}>
                            <i className="text-center  bi-three-dots-vertical" data-bs-toggle="dropdown" onClick={toggleDropdownSettings}
                                style={{ cursor: 'pointer', backgroundColor: '#a19aac', display: 'flex', padding: '12px', borderRadius: '25px' }}></i>
                            <ul className={`dropdown-menu dropdown-menu-end ${Opensettings ? 'show' : ''}`}>
                                <li><Link className="dropdown-item text-white poppins-light mb-2" to="/user_account_configuration"
                                    style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Configuración</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container-fluid my-5">
                <section className="hero-section">
                    {/* display movil sm */}
                    <div className='d-block d-sm-none'>
                        <div className="container-fluid position-relative">
                            <h1 className="champ-bold fs-2" style={{ transform: 'translateY(-60px)' }}>Conoce el mundo mientras</h1>
                            <h1 className="champ-bold fs-2" style={{ transform: 'translateY(-60px)' }}>
                                aprendes <img src="/svgs/Union.svg" style={{ verticalAlign: 'middle', width: 'auto', height: '3rem' }} alt="Ingles" />
                            </h1>
                            <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: '100vh', marginTop: '50px', marginRight: '20%', maxWidth: '1475px' }}>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '380px', marginLeft: '-35px' }}>
                                        <img src="/images/Products Explorers.png" className="card-img-top" style={{ height: '475px', marginTop: '422px', position: 'relative', zIndex: 4 }} alt="Carta 1" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '380px', height: '475px', marginLeft: '-105px' }}>
                                        <img src="/images/Products UpColors.png" className="card-img-top" style={{ marginTop: '-190px', position: 'relative', zIndex: 2 }} alt="Carta 2" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '380px', marginLeft: '-160px' }}>
                                        <img src="/images/Products Prismatic.png" className="card-img-top" style={{ height: '465px', marginTop: '50px', position: 'relative', zIndex: 3 }} alt="Carta 3" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <div className="banner-container" style={{ transform: 'translateY(-30px)' }}>
                                    <div className="col">
                                        <h1 className="champ-bold fs-5" style={{ marginLeft: '-170px', marginTop: '570px', width: '120px' }}>
                                            Get ready to have a <span style={{ background: 'linear-gradient(90deg, #4EB4FF, #FFFFFF, #FAC99F)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                                                great time!</span>
                                        </h1>
                                        <p className="poppins-light" style={{ width: '140px', marginLeft: '-180px', fontSize: '12px' }}>¡Conoce Michigan's Store en un minuto!</p>
                                    </div>
                                    <div className="col">
                                        <div className="center">
                                            <Link to="/prices">
                                                <button id="circle" className="d-flex justify-content-center align-items-center rounded-pill text-white poppins-light" style={{ marginLeft: '45%', marginTop: '-535px', width: '180px', height: '180px', borderRadius: '85px', backgroundColor: '#110059', color: '#ffffff', border: 'none' }}>
                                                    todos los cursos todos los cursos
                                                </button>
                                                <FontAwesomeIcon icon={faPlus} style={{ fontSize: '45px', color: '#ffffff', position: 'absolute', zIndex: 9999, marginTop: '-113px', marginLeft: '63px' }} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="banner-image" style={{ height: '190px', width: '400px', marginTop: '-655px', marginLeft: '250px', position: 'relative' }}>
                                            <img src="/images/seccion_2.png" style={{ marginRight: '140px' }} alt="Michigan's Store" />

                                            <a href={videoUrl} style={{ position: 'absolute', top: '55%', left: '42%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                                                <img
                                                    className="z-10"
                                                    style={{ height: '50px', width: '50px' }}
                                                    src="/svgs/play-start.svg"
                                                    alt="Play Video"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* display movil md */}
                    <div className="d-none d-md-block d-lg-none">
                        <div className="container-fluid position-relative">
                            <h1 className="champ-bold">Conoce el mundo mientras</h1>
                            <h1 className="champ-bold">
                                aprendes <img src="/svgs/Union.svg" style={{ verticalAlign: 'middle', width: 'auto', height: '7rem' }} alt="Ingles" />
                            </h1>
                            <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: '100vh', marginTop: '50px', marginRight: '20%', maxWidth: '1475px' }}>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '445px', marginLeft: '-30px' }}>
                                        <img src="/images/Products Explorers.png" className="card-img-top" style={{ height: '475px', marginTop: '222px', position: 'relative', zIndex: 1 }} alt="Carta 1" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '380px', height: '495px', marginLeft: '10px' }}>
                                        <img src="/images/Products UpColors.png" className="card-img-top" style={{ marginTop: '10px', position: 'relative', zIndex: 2 }} alt="Carta 2" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '445px', marginLeft: '-65px' }}>
                                        <img src="/images/Products Prismatic.png" className="card-img-top" style={{ height: '475px', marginTop: '222px', position: 'relative', zIndex: 3 }} alt="Carta 3" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <div className="banner-container" style={{ transform: 'translateY(-30px)' }}>
                                    <div className="col">
                                        <h1 className="champ-bold fs-4" style={{ marginLeft: '250px', marginTop: '5px', width: '245px' }}>
                                            Get ready to have a <span style={{ background: 'linear-gradient(90deg, #4EB4FF, #FFFFFF, #FAC99F)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                                                great time!</span>
                                        </h1>
                                        <p className="poppins-light fs-6" style={{ width: '355px', marginLeft: '200px', transform: 'translateX(20px)' }}>¡Conoce Michigan's Store en un minuto!</p>
                                    </div>
                                    <div className="col">
                                        <div className="center">
                                            <Link to="/prices">
                                                <button id="circle" className="d-flex justify-content-center align-items-center rounded-pill text-white poppins-light" style={{ marginLeft: '-15px', marginTop: '-155px', width: '209px', height: '209px', borderRadius: '85px', backgroundColor: '#110059', color: '#ffffff', border: 'none' }}>
                                                    todos los cursos todos los cursos
                                                </button>
                                                <FontAwesomeIcon icon={faPlus} style={{ fontSize: '45px', color: '#ffffff', position: 'absolute', zIndex: 9999, marginTop: '-127px', marginLeft: '-25px' }} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="banner-image" style={{ height: '220px', width: '500px', marginTop: '175px', marginLeft: '-100px', position: 'relative' }}>
                                            <img src="/images/seccion_2.png" style={{ marginRight: '240px' }} alt="Michigan's Store" />

                                            <a href={videoUrl} style={{ position: 'absolute', top: '56%', left: '35%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                                                <img
                                                    className="z-10"
                                                    style={{ height: '50px', width: '50px' }}
                                                    src="/svgs/play-start.svg"
                                                    alt="Play Video"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* display pc */}
                    <div className='d-none d-lg-block'>
                        <div className="container-fluid position-relative">
                            <h1 className="champ-bold">Conoce el mundo mientras</h1>
                            <h1 className="champ-bold">
                                aprendes <img src="/svgs/Union.svg" style={{ verticalAlign: 'middle', width: 'auto', height: '7rem' }} alt="Ingles" />
                            </h1>
                            <div className="d-flex flex-col justify-content-center align-items-center mx-auto" style={{ height: '100vh', marginTop: '50px', marginRight: '3%', maxWidth: '1475px' }}>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '695px', marginLeft: '160px' }}>
                                        <img src="/images/Products Explorers.png" className="card-img-top" style={{ height: '885px', marginTop: '222px', position: 'relative', zIndex: 1 }} alt="Carta 1" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '575px', height: '950px' }}>
                                        <img src="/images/Products UpColors.png" className="card-img-top" style={{ marginTop: '80px', position: 'relative', zIndex: 2 }} alt="Carta 2" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-home" style={{ width: '695px', marginLeft: '-305px' }}>
                                        <img src="/images/Products Prismatic.png" className="card-img-top" style={{ height: '885px', marginTop: '222px', position: 'relative', zIndex: 3 }} alt="Carta 3" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="banner-container" style={{ transform: 'translateY(60px)' }}>
                                    <div className="col-md-4">
                                        <div className="banner-text">
                                            <h1 className="champ-bold" style={{ marginLeft: '125px' }}>
                                                Get ready to have a <span style={{ background: 'linear-gradient(90deg, #4EB4FF, #FFFFFF, #FAC99F)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                                                    great time!</span>
                                            </h1>
                                            <p className="poppins-light fs-6" style={{ width: '565px' }}>¡Conoce Michigan's Store en un minuto!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="center">
                                            <Link to="/prices">
                                                <button id="circle" className="d-flex justify-content-center align-items-center rounded-pill text-white poppins-light" style={{ marginLeft: '-2%', marginTop: '-155px', width: '209px', height: '209px', borderRadius: '85px', backgroundColor: '#110059', color: '#ffffff', border: 'none' }}>
                                                    todos los cursos todos los cursos
                                                </button>
                                                <FontAwesomeIcon icon={faPlus} style={{ fontSize: '45px', color: '#ffffff', position: 'absolute', zIndex: 9999, marginTop: '-127px', marginLeft: '-22px' }} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="banner-image" style={{ height: '400px', width: '1100px', marginTop: '-10px', marginLeft: '-300px', position: 'relative' }}>
                                            <img src="/images/seccion_2.png" style={{ marginRight: '150px' }} alt="Michigan's Store" />

                                            <a href={videoUrl} style={{ position: 'absolute', top: '57%', left: '51%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                                                <img
                                                    className="z-10"
                                                    style={{ height: '80px', width: '80px' }}
                                                    src="/svgs/play-start.svg"
                                                    alt="Play Video"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="course-section">
                    {/* display movil sm */}
                    <div className='d-block d-sm-none'>
                        <div className="container text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-5">
                                        <img
                                            style={{ width: '350px', height: '405px', marginTop: '-67px', marginRight: '-10px', position: 'relative', zIndex: 999 }}
                                            src="/images/Vector (3).png"
                                            alt="Figura 1"
                                        />
                                        <img
                                            style={{ width: '35px', height: '35px', marginTop: '-450px', marginRight: '0px', position: 'relative', zIndex: 1000, transform: 'translateX(60px)' }}
                                            src="/svgs/deco-1.svg"
                                            alt="Figura 2"
                                        />
                                        <img
                                            style={{ position: 'relative', zIndex: 1200, width: '250px', height: '250px', top: '-220px', transform: 'translateX(115px)' }}
                                            src="/images/Group 36653.png"
                                            alt="Person 1"
                                        />
                                        <img
                                            style={{ position: 'relative', zIndex: 1200, width: '45px', height: '55px', top: '-410px', transform: 'translateX(220px)' }}
                                            src="/svgs/deco-2.svg"
                                            alt="Person 2"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            style={{ marginTop: '158px', width: '395px', height: '405.90px', marginLeft: '25px', transform: 'rotate(-10deg)' }}
                                            src="/svgs/Curvatura.svg"
                                            alt="Union 1"
                                        />
                                    </div>
                                    <div className="col-5">
                                        <img
                                            style={{ marginTop: '-370px', width: '375px', height: '405.90px', marginLeft: '-45px', transform: 'rotate(-10deg)' }}
                                            src="/svgs/Curvatura2.svg"
                                            alt="Union 2"
                                        />
                                    </div>
                                    <div className="card-home card-custom-client-movil" style={{ marginLeft: '-230px' }}>
                                        <div className="card-body">
                                            <h5 className="champ-bold" style={{ fontSize: '25px', marginTop: '75px' }}>Aprende a tu ritmo</h5>
                                            <img
                                                src="/images/conoce_mas.png"
                                                style={{ position: 'absolute', top: '-60px', marginLeft: '65px', height: '100px', width: '100px' }}
                                                alt="Card"
                                            />
                                            <img
                                                src="/images/06.png"
                                                style={{ position: 'absolute', top: '-50px', marginLeft: '-55px', height: '100px', width: '100px' }}
                                                alt="Card"
                                            />
                                            <p className="card-text poppins-light" style={{ padding: '50px', marginLeft: '10px', marginTop: '-50px', fontSize: '14px' }}>
                                                Disfruta aprendiendo desde cualquier lugar del mundo, sin horarios y a tu ritmo, tú decides cuándo seguir con el siguiente tema.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-home card-custom_2">
                                        <div className="card-body">
                                            <h5 className="champ-bold text-start" style={{ fontSize: '20px', marginTop: '75px', width: '405px' }}>
                                                Personas como tú, cuentan lo que han logrando estudiando en Michigan's Store
                                            </h5>
                                            <p className="card-text poppins-light text-start" style={{ padding: '15px', marginLeft: '-15px', marginTop: '-15px', fontSize: '15px', width: '405px' }}>
                                                Conoce como nuestros estudiantes crecen, crean conexiones profesionales y usan la educación digital a su favor, logrando cosas que sin ingles hubiera sido imposible conseguir, <span style={{ fontSize: '20px' }}>¡Estas son sus historias!.</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex grid gap-0 column-gap-4" style={{ position: 'relative', marginTop: '55px', left: '10px' }}>
                                        <div className="card-custom_3">
                                            <div className="card-body">
                                                <img
                                                    src="/images/Person_1.png"
                                                    style={{ marginLeft: '0px', height: '210px', width: '145px', marginTop: '52px' }}
                                                    alt="Person 1"
                                                />
                                                <a href={videoUrl}>
                                                    <img
                                                        src="/images/_1.png"
                                                        style={{ position: 'relative', marginTop: '-125px', left: '7px', height: '70px', width: '70px' }}
                                                        alt="Play 1"
                                                    />
                                                </a>
                                                <ReactPlayer
                                                    style={{ visibility: 'hidden' }}
                                                    url={videoUrl}
                                                    controls
                                                    width="100%"
                                                    height="auto"
                                                    light={posterUrl}
                                                    onError={(e: any) => console.error('Error loading video:', e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card-custom_4" style={{ marginLeft: '4%' }}>
                                <div className="card-body" style={{ marginTop: '-295px' }}>
                                    <img
                                        src="/images/Person_2.png"
                                        style={{ height: '210px', width: '145px', marginTop: '52px' }}
                                        alt="Person 2"
                                    />
                                    <a href={videoUrl}>
                                        <img
                                            src="/images/_2.png"
                                            style={{ position: 'relative', marginTop: '-125px', left: '25px', height: '70px', width: '70px' }}
                                            alt="Play 2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalInicioDos"
                                        />
                                    </a>
                                    <div className="modal fade" id="modalInicioDos" tabIndex={-1} aria-labelledby="videoModalLabelQuienesSomos" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabelQuienesSomos">Content</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }}
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="/videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom_5" style={{ marginLeft: '42%' }}>
                                <div className="card-body" style={{ marginTop: '-275px' }}>
                                    <img
                                        src="/images/Person_3.png"
                                        style={{ marginLeft: '0px', height: '210px', width: '145px', marginTop: '52px' }}
                                        alt="Person 3"
                                    />
                                    <a href={videoUrl}>
                                        <img
                                            src="/images/_3.png"
                                            style={{ position: 'relative', marginTop: '-125px', left: '9px', height: '70px', width: '70px' }}
                                            alt="Play 3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalInicioTres"
                                        />
                                    </a>
                                    <div className="modal fade" id="modalInicioTres" tabIndex={-1} aria-labelledby="videoModalLabelQuienesSomos" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabelQuienesSomos">Content</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }}
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="/videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center grid gap-0 column-gap-2" style={{ marginTop: '250px', marginLeft: '-225px' }}>
                            <div className="card-course_1" style={{ height: '230px', width: '90px', left: '119px' }} id="card1">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C1.png"
                                        style={{ borderRadius: '10px', objectFit: 'cover', height: '100%', width: '100%' }}
                                        alt="Card-course_1"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #de59f1, #9306dd)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Es una experiencia de aprendizaje colorida que se desarrolla a través de "situaciones comunicativas", desde hacer check-in en un hotel hasta discutir arte e historia. Este programa de 3 módulos (Primary, Secondary y Tertiary) ofrece una experiencia educativa única y vibrante.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_1.png"
                                    style={{ position: 'absolute', marginTop: '-44px', left: '3px', height: '40px', width: '85px' }}
                                    alt="Name_1"
                                />
                            </div>
                            <div className="card-course_2" style={{ height: '230px', width: '90px', left: '116px' }} id="card2">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C2.png"
                                        style={{ borderRadius: '10px', objectFit: 'cover', height: '100%', width: '100%' }}
                                        alt="Card-course_2"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #72eec8, #00f1e7)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            En este programa se exploran los secretos de los tiempos verbales en inglés a través de un enfoque teórico. Compuesto por 13 video sessions distribuidas en 5 módulos, brinda una visión más profunda y estructurada para construir una base sólida en la gramática inglesa.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_2.png"
                                    style={{ position: 'relative', marginTop: '-80px', left: '3px', height: '40px', width: '85px' }}
                                    alt="Name_2"
                                />
                            </div>
                            <div className="card-course_3" style={{ height: '230px', width: '90px', left: '116px' }} id="card3">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C3.png"
                                        style={{ borderRadius: '10px', objectFit: 'cover', height: '100%', width: '100%' }}
                                        alt="Card-course_3"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #0d9bf3, #0708f3)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Diseñado para niños en la primera infancia, este programa ilustrado y colorido actúa como una guía divertida para crear bases comunicativas sólidas mientras disfrutan del proceso de aprendizaje del idioma.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_3.png"
                                    style={{ position: 'relative', marginTop: '-70px', left: '6px', height: '65px', width: '85px' }}
                                    alt="Name_3"
                                />
                            </div>
                            <div className="card-course_4" style={{ height: '230px', width: '90px', left: '117px' }} id="card4">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C4.png"
                                        style={{ borderRadius: '10px', objectFit: 'cover', height: '100%', width: '100%' }}
                                        alt="Card-course_4"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #fe7dbb, #e20737)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Con 4 niveles (A1, A2, B1 y B2), este programa cuenta con un enfoque comunicativo. A través de conversaciones de la vida diaria, brinda la posibilidad de familiarizarse con el uso real de la lengua. Abroad ofrece una serie de herramientas para desarrollar habilidades de producción oral y escrita prestando especial atención a los rasgos fonéticos de la lengua y a la importancia de la autoevaluación en el proceso de aprendizaje.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_4.png"
                                    style={{ position: 'relative', marginTop: '-90px', left: '3px', height: '135px', width: '85px' }}
                                    alt="Name_4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* display movil md */}
                    <div className='d-none d-md-block d-lg-none'>
                        <div className="container text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-5">
                                        <img
                                            style={{ width: '350px', height: '405px', marginTop: '-67px', marginRight: '-10px', position: 'relative', zIndex: 999 }}
                                            src="/images/Vector (3).png"
                                            alt="Figura 1"
                                        />
                                        <img
                                            style={{ width: '35px', height: '35px', marginTop: '-570px', marginRight: '50px', position: 'relative', zIndex: 1000, transform: 'translateX(30px)' }}
                                            src="/svgs/deco-1.svg"
                                            alt="Figura 2"
                                        />
                                        <img
                                            style={{ position: 'relative', zIndex: 1200, width: '250px', height: '250px', top: '-280px', transform: 'translateX(60px)' }}
                                            src="/images/Group 36653.png"
                                            alt="Person 1"
                                        />
                                        <img
                                            style={{ position: 'relative', zIndex: 1200, width: '45px', height: '55px', top: '-480px', transform: 'translateX(160px)' }}
                                            src="/svgs/deco-2.svg"
                                            alt="Person 2"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            style={{ marginTop: '158px', width: '395px', height: '405.90px', marginLeft: '25px', transform: 'rotate(-10deg)' }}
                                            src="/svgs/Curvatura.svg"
                                            alt="Union 1"
                                        />
                                    </div>
                                    <div className="col-5">
                                        <img
                                            style={{ marginTop: '-370px', width: '375px', height: '405.90px', marginLeft: '-45px', transform: 'rotate(-10deg)' }}
                                            src="/svgs/Curvatura2.svg"
                                            alt="Union 2"
                                        />
                                    </div>
                                    <div className="card-home card-custom-client" style={{ marginLeft: '-230px' }}>
                                        <div className="card-body">
                                            <h5 className="champ-bold" style={{ fontSize: '25px', marginTop: '75px' }}>Aprende a tu ritmo</h5>
                                            <img
                                                src="/images/conoce_mas.png"
                                                style={{ position: 'absolute', top: '-60px', marginLeft: '145px', height: '100px', width: '100px' }}
                                                alt="Card"
                                            />
                                            <img
                                                src="/images/06.png"
                                                style={{ position: 'absolute', top: '-50px', marginLeft: '-55px', height: '100px', width: '100px' }}
                                                alt="Card"
                                            />
                                            <p className="card-text poppins-light" style={{ padding: '50px', marginLeft: '10px', marginTop: '-50px', fontSize: '14px' }}>
                                                Disfruta aprendiendo desde cualquier lugar del mundo, sin horarios y a tu ritmo, tú decides cuándo seguir con el siguiente tema.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-home card-custom_2">
                                        <div className="card-body">
                                            <h5 className="champ-bold text-start" style={{ fontSize: '20px', marginTop: '75px', width: '405px' }}>
                                                Personas como tú, cuentan lo que han logrando estudiando en Michigan's Store
                                            </h5>
                                            <p className="card-text poppins-light text-start" style={{ padding: '15px', marginLeft: '-15px', marginTop: '-15px', fontSize: '15px', width: '405px' }}>
                                                Conoce como nuestros estudiantes crecen, crean conexiones profesionales y usan la educación digital a su favor, logrando cosas que sin ingles hubiera sido imposible conseguir, <span style={{ fontSize: '20px' }}>¡Estas son sus historias!.</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex grid gap-0 column-gap-4" style={{ position: 'relative', marginTop: '55px', left: '20px' }}>
                                        <div className="card-custom_3">
                                            <div className="card-body">
                                                <img
                                                    src="/images/Person_1.png"
                                                    style={{ marginLeft: '0px', height: '210px', width: '145px', marginTop: '52px' }}
                                                    alt="Person 1"
                                                />
                                                <a href={videoUrl}>
                                                    <img
                                                        src="/images/_1.png"
                                                        style={{ position: 'relative', marginTop: '-125px', left: '7px', height: '70px', width: '70px' }}
                                                        alt="Play 1"
                                                    />
                                                </a>
                                                <ReactPlayer
                                                    style={{ visibility: 'hidden' }}
                                                    url={videoUrl}
                                                    controls
                                                    width="100%"
                                                    height="auto"
                                                    light={posterUrl}
                                                    onError={(e: any) => console.error('Error loading video:', e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card-custom_4" style={{ marginLeft: '25%' }}>
                                <div className="card-body" style={{ marginTop: '-295px' }}>
                                    <img
                                        src="/images/Person_2.png"
                                        style={{ height: '210px', width: '145px', marginTop: '52px' }}
                                        alt="Person 2"
                                    />
                                    <a href={videoUrl}>
                                        <img
                                            src="/images/_2.png"
                                            style={{ position: 'relative', marginTop: '-125px', left: '25px', height: '70px', width: '70px' }}
                                            alt="Play 2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalInicioDos"
                                        />
                                    </a>
                                    <div className="modal fade" id="modalInicioDos" tabIndex={-1} aria-labelledby="videoModalLabelQuienesSomos" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabelQuienesSomos">Content</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }}
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="/videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom_5" style={{ marginLeft: '44%' }}>
                                <div className="card-body" style={{ marginTop: '-275px' }}>
                                    <img
                                        src="/images/Person_3.png"
                                        style={{ marginLeft: '0px', height: '210px', width: '145px', marginTop: '52px' }}
                                        alt="Person 3"
                                    />
                                    <a href={videoUrl}>
                                        <img
                                            src="/images/_3.png"
                                            style={{ position: 'relative', marginTop: '-125px', left: '9px', height: '70px', width: '70px' }}
                                            alt="Play 3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalInicioTres"
                                        />
                                    </a>
                                    <div className="modal fade" id="modalInicioTres" tabIndex={-1} aria-labelledby="videoModalLabelQuienesSomos" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabelQuienesSomos">Content</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }}
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="/videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center grid gap-0 column-gap-2" style={{ marginTop: '165px', marginLeft: '-225px' }}>
                            <div className="card-course_1" style={{ height: '330px', width: '180px', left: '125px' }} id="card1">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C1.png"
                                        style={{ borderRadius: '10px' }}
                                        alt="Card-course_1"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #de59f1, #9306dd)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Es una experiencia de aprendizaje colorida que se desarrolla a través de "situaciones comunicativas", desde hacer check-in en un hotel hasta discutir arte e historia. Este programa de 3 módulos (Primary, Secondary y Tertiary) ofrece una experiencia educativa única y vibrante.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_1.png"
                                    style={{ position: 'absolute', marginTop: '-325px', left: '-1px', height: '75px', width: '190px' }}
                                    alt="Name_1"
                                />
                            </div>
                            <div className="card-course_2" style={{ height: '330px', width: '180px', left: '120px' }} id="card2">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C2.png"
                                        style={{ borderRadius: '10px' }}
                                        alt="Card-course_2"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #72eec8, #00f1e7)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            En este programa se exploran los secretos de los tiempos verbales en inglés a través de un enfoque teórico. Compuesto por 13 video sessions distribuidas en 5 módulos, brinda una visión más profunda y estructurada para construir una base sólida en la gramática inglesa.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_2.png"
                                    style={{ position: 'relative', marginTop: '-620px', left: '-4px', height: '75px', width: '190px' }}
                                    alt="Name_2"
                                />
                            </div>
                            <div className="card-course_3" style={{ height: '330px', width: '180px', left: '115px' }} id="card3">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C3.png"
                                        style={{ borderRadius: '10px' }}
                                        alt="Card-course_3"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #0d9bf3, #0708f3)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Diseñado para niños en la primera infancia, este programa ilustrado y colorido actúa como una guía divertida para crear bases comunicativas sólidas mientras disfrutan del proceso de aprendizaje del idioma.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_3.png"
                                    style={{ position: 'relative', marginTop: '-600px', left: '6px', height: '110px', width: '170px' }}
                                    alt="Name_3"
                                />
                            </div>
                            <div className="card-course_4" style={{ height: '330px', width: '180px', left: '110px' }} id="card4">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C4.png"
                                        style={{ borderRadius: '10px' }}
                                        alt="Card-course_4"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #fe7dbb, #e20737)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Con 4 niveles (A1, A2, B1 y B2), este programa cuenta con un enfoque comunicativo. A través de conversaciones de la vida diaria, brinda la posibilidad de familiarizarse con el uso real de la lengua. Abroad ofrece una serie de herramientas para desarrollar habilidades de producción oral y escrita prestando especial atención a los rasgos fonéticos de la lengua y a la importancia de la autoevaluación en el proceso de aprendizaje.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_4.png"
                                    style={{ position: 'relative', marginTop: '-600px', left: '-1px', height: '150px', width: '180px' }}
                                    alt="Name_4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* display pc */}
                    <div className='d-none d-lg-block'>
                        <div className="container text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-5">
                                        <img
                                            style={{ width: '355px', height: '470px', marginTop: '-75px', marginRight: '-330px', position: 'relative', zIndex: 999 }}
                                            src="/images/Vector (3).png"
                                            alt="Figura 1"
                                        />
                                        <img
                                            style={{ width: '35px', height: '35px', marginTop: '-385px', marginRight: '180px', position: 'relative', zIndex: 1000, transform: 'translateX(85px)' }}
                                            src="/svgs/deco-1.svg"
                                            alt="Figura 2"
                                        />
                                        <img
                                            style={{ position: 'relative', zIndex: 1200, width: '385px', height: '385px', top: '-385px', transform: 'translateX(95px)' }}
                                            src="/images/Group 36653.png"
                                            alt="Person 1"
                                        />
                                        <img
                                            style={{ position: 'relative', zIndex: 1200, width: '45px', height: '55px', top: '-445px', transform: 'translateX(25px)' }}
                                            src="/svgs/deco-2.svg"
                                            alt="Person 2"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            style={{ marginTop: '190px', width: '780px', height: '405.90px', marginLeft: '68px', transform: 'rotate(-10deg)' }}
                                            src="/svgs/Curvatura.svg"
                                            alt="Union 1"
                                        />
                                    </div>
                                    <div className="col-5">
                                        <img
                                            style={{ marginTop: '-352px', width: '770px', height: '405.90px', marginLeft: '-175px', transform: 'rotate(-10deg)' }}
                                            src="/svgs/Curvatura2.svg"
                                            alt="Union 2"
                                        />
                                    </div>
                                    <div className="card-home card-custom-main" style={{ height: '270px', width: '637px' }}>
                                        <div className="card-body">
                                            <h5 className="champ-bold" style={{ fontSize: '25px', marginTop: '80px' }}>Aprende a tu ritmo</h5>
                                            <img
                                                src="/images/conoce_mas.png"
                                                style={{ position: 'absolute', top: '-75px', marginLeft: '160px', height: '155px', width: '155px' }}
                                                alt="Card"
                                            />
                                            <img
                                                src="/images/06.png"
                                                style={{ position: 'absolute', top: '-80px', marginLeft: '-85spx', height: '155px', width: '155px' }}
                                                alt="Card"
                                            />
                                            <p className="card-text poppins-light" style={{ padding: '40px', marginLeft: '10px', marginTop: '-45px' }}>
                                                Disfruta aprendiendo desde cualquier lugar del mundo, sin horarios y a tu ritmo, tú decides cuándo seguir con el siguiente tema.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-home card-custom_2">
                                        <div className="card-body">
                                            <h5 className="champ-bold text-start" style={{ fontSize: '25px', marginTop: '75px' }}>
                                                Personas como tú, cuentan lo que han logrando estudiando en Michigan's Store
                                            </h5>
                                            <p className="card-text poppins-light text-start" style={{ padding: '15px', marginLeft: '-15px', marginTop: '-15px', fontSize: '15px' }}>
                                                Conoce como nuestros estudiantes crecen, crean conexiones profesionales y usan la educación digital a su favor, logrando cosas que sin ingles hubiera sido imposible conseguir, <span style={{ fontSize: '20px' }}>¡Estas son sus historias!.</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex grid gap-0 column-gap-4" style={{ position: 'relative', marginTop: '-222px', left: '650px' }}>
                                        <div className="card-custom_3">
                                            <div className="card-body">
                                                <img
                                                    src="/images/Person_1.png"
                                                    style={{ marginLeft: '0px', height: '210px', width: '145px', marginTop: '52px' }}
                                                    alt="Person 1"
                                                />
                                                <a href={videoUrl}>
                                                    <img
                                                        src="/images/_1.png"
                                                        style={{ position: 'relative', marginTop: '-125px', left: '7px', height: '70px', width: '70px' }}
                                                        alt="Play 1"
                                                    />
                                                </a>
                                                <ReactPlayer
                                                    style={{ visibility: 'hidden' }}
                                                    url={videoUrl}
                                                    controls
                                                    width="100%"
                                                    height="auto"
                                                    light={posterUrl}
                                                    onError={(e: any) => console.error('Error loading video:', e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card-custom_4" style={{ marginLeft: '64%' }}>
                                <div className="card-body" style={{ marginTop: '-295px' }}>
                                    <img
                                        src="/images/Person_2.png"
                                        style={{ height: '210px', width: '145px', marginTop: '52px' }}
                                        alt="Person 2"
                                    />
                                    <a href={videoUrl}>
                                        <img
                                            src="/images/_2.png"
                                            style={{ position: 'relative', marginTop: '-125px', left: '25px', height: '70px', width: '70px' }}
                                            alt="Play 2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalInicioDos"
                                        />
                                    </a>
                                    <div className="modal fade" id="modalInicioDos" tabIndex={-1} aria-labelledby="videoModalLabelQuienesSomos" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabelQuienesSomos">Content</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }}
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="/videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom_5" style={{ marginLeft: '73.2%' }}>
                                <div className="card-body" style={{ marginTop: '-275px' }}>
                                    <img
                                        src="/images/Person_3.png"
                                        style={{ marginLeft: '0px', height: '210px', width: '145px', marginTop: '52px' }}
                                        alt="Person 3"
                                    />
                                    <a href={videoUrl}>
                                        <img
                                            src="/images/_3.png"
                                            style={{ position: 'relative', marginTop: '-125px', left: '9px', height: '70px', width: '70px' }}
                                            alt="Play 3"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalInicioTres"
                                        />
                                    </a>
                                    <div className="modal fade" id="modalInicioTres" tabIndex={-1} aria-labelledby="videoModalLabelQuienesSomos" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabelQuienesSomos">Content</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }}
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="/videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center grid gap-0 column-gap-4" style={{ marginTop: '165px', marginLeft: '-225px' }}>
                            <div className="card-course_1" id="card1">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C1.png"
                                        style={{ width: '220px', height: '384px', borderRadius: '10px', marginLeft: '1px' }}
                                        alt="Card-course_1"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #de59f1, #9306dd)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Es una experiencia de aprendizaje colorida que se desarrolla a través de "situaciones comunicativas", desde hacer check-in en un hotel hasta discutir arte e historia. Este programa de 3 módulos (Primary, Secondary y Tertiary) ofrece una experiencia educativa única y vibrante.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_1.png"
                                    style={{ position: 'absolute', marginTop: '-80px', left: '15px', height: '75px', width: '190px' }}
                                    alt="Name_1"
                                />
                            </div>
                            <div className="card-course_2" id="card2">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C2.png"
                                        style={{ width: '220px', height: '384px', marginLeft: '-2px' }}
                                        alt="Card-course_2"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #72eec8, #00f1e7)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            En este programa se exploran los secretos de los tiempos verbales en inglés a través de un enfoque teórico. Compuesto por 13 video sessions distribuidas en 5 módulos, brinda una visión más profunda y estructurada para construir una base sólida en la gramática inglesa.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_2.png"
                                    style={{ position: 'relative', marginTop: '-117px', left: '15px', height: '75px', width: '190px' }}
                                    alt="Name_2"
                                />
                            </div>
                            <div className="card-course_3" id="card3">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C3.png"
                                        style={{ width: '220px', height: '384px', marginLeft: '-2px' }}
                                        alt="Card-course_3"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #0d9bf3, #0708f3)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Diseñado para niños en la primera infancia, este programa ilustrado y colorido actúa como una guía divertida para crear bases comunicativas sólidas mientras disfrutan del proceso de aprendizaje del idioma.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_3.png"
                                    style={{ position: 'relative', marginTop: '-117px', left: '10px', height: '130px', width: '200px' }}
                                    alt="Name_3"
                                />
                            </div>
                            <div className="card-course_4" id="card4">
                                <div className="card-body rounded rounded-2 p-0" style={{ position: 'relative' }}>
                                    <img
                                        src="/images/C4.png"
                                        style={{ width: '220px', height: '384px', borderRadius: '10px', marginLeft: '1px' }}
                                        alt="Card-course_4"
                                    />
                                    <div className="overlay" style={{
                                        background: 'linear-gradient(180deg, #fe7dbb, #e20737)',
                                        position: 'absolute',
                                        zIndex: 5,
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'none',
                                        height: '0',
                                        opacity: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflow: 'hidden'
                                    }}>
                                        <p className="poppins-light overflow-animation" style={{
                                            color: '#ffffff',
                                            padding: '10px',
                                            textAlign: 'center',
                                            margin: 0,
                                            maxHeight: '80%',
                                            overflowY: 'auto',
                                        }}>
                                            Con 4 niveles (A1, A2, B1 y B2), este programa cuenta con un enfoque comunicativo. A través de conversaciones de la vida diaria, brinda la posibilidad de familiarizarse con el uso real de la lengua. Abroad ofrece una serie de herramientas para desarrollar habilidades de producción oral y escrita prestando especial atención a los rasgos fonéticos de la lengua y a la importancia de la autoevaluación en el proceso de aprendizaje.
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/name_4.png"
                                    style={{ position: 'relative', marginTop: '-150px', left: '10px', height: '205px', width: '210px' }}
                                    alt="Name_4"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="plan-section">
                    {/* display movil sm */}
                    <div className='d-block d-sm-none'>
                        <div className="container text-center">
                            <a href="./precios.html" style={{ color: 'inherit' }}>
                                <button className="btn btn-custom poppins-light"
                                    style={{ height: '50px', width: '330px', marginTop: '-25px', transform: 'translateY(60px)', fontSize: '20px', marginBottom: '80px' }}>Ver
                                    todos los cursos</button>
                            </a>
                            <div className="d-flex content flex-column" style={{ maxHeight: '100vh', width: '100%', borderRadius: '45px' }}>
                                <div className="row" style={{ marginLeft: '-10px', overflowY: 'scroll' }}>
                                    <div className="d-flex flex-column">
                                        <section className="rounded rounded-5 p-0 col-md-6 gradient-section"
                                            style={{ width: '225px', height: '490px', borderRadius: '45px', marginLeft: '-5px', marginTop: '80px' }}>
                                            <img src="/svgs/Frame 1000001569.svg" alt="UpColors"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                                        </section>
                                        <section className="rounded rounded-5 p-2 col-md-6 gradient-section"
                                            style={{ marginRight: '25px', width: '420px', height: '490px', marginTop: '-1px' }}>
                                            <div className="row">
                                                <div className="col text-start">
                                                    <h2 className="champ-bold text-white ms-4"
                                                        style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                                        UpColors
                                                    </h2>
                                                    <p className="poppins-light"
                                                        style={{ minHeight: '100px', fontSize: '12px', marginLeft: '27px', width: '365px' }}>
                                                        Con un enfoque comunicativo
                                                        clave,
                                                        este programa explora la comunicación contextualizada en
                                                        situaciones
                                                        reales. Introduciendo temas de fonética básica. Las 40 sesiones de video
                                                        divididas en 4
                                                        módulos
                                                        construyen habilidades esenciales de comunicación.</p>
                                                    <div style={{ marginTop: '-8px', marginLeft: '-8px' }}>
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <h3 className="fs-6 champ-semibold"
                                                                    style={{ marginLeft: '60px', transform: 'translateY(-15px)' }}>Full
                                                                    <span className="bi bi-patch-check-fill mx-2"
                                                                        style={{
                                                                            color: '#00cdff',
                                                                            background: 'white',
                                                                            borderRadius: '50%',
                                                                            fontSize: '20px',
                                                                            width: '15px',
                                                                            height: '15px',
                                                                            display: 'inline-flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center'
                                                                        }}></span>
                                                                </h3>
                                                                <ol>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-25px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-20px)' }}>Acceso
                                                                            a
                                                                            los 4 módulos</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-25px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-60px)' }}>¡Ve
                                                                            a tu
                                                                            ritmo!, visualiza upColors en el tiempo que mejor se
                                                                            adapte a tu
                                                                            aprendizaje.</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-35px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-30px)' }}>4
                                                                            sesiones
                                                                            en vivo.</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-50px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-40px)' }}>Recibe
                                                                            certificación de curso.</span>
                                                                    </p>
                                                                </ol>
                                                            </div>
                                                            <div className="col-5 mt-4">
                                                                <div className="text-center"
                                                                    style={{ marginLeft: '10px', marginTop: '-10px' }}>
                                                                    <span className="champ-bold text-wrap"
                                                                        style={{ maxHeight: '185px', fontSize: '35px' }}>
                                                                        <span style={{ marginLeft: '-50px' }}></span>37.
                                                                        <span
                                                                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                            <sup
                                                                                style={{ marginLeft: '20px', marginTop: '-20px', fontSize: '25px' }}>80
                                                                                <p style={{ marginLeft: '45px' }}>$</p>
                                                                            </sup>
                                                                            <p
                                                                                style={{ fontSize: '15px', marginLeft: '44px', marginTop: '-20px' }}>
                                                                                USD</p>
                                                                            {/* <sub>USD</sub>  */}
                                                                        </span>
                                                                    </span>
                                                                    <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                        <button
                                                                            className="button-purple rounded-pill px-4 py-1 champ-semibold text-center bi-cart-plus"
                                                                            style={{
                                                                                transform: 'translateY(-10px)',
                                                                                width: '135px',
                                                                                height: '45px',
                                                                                marginTop: '-50px',
                                                                                marginLeft: '-6px',
                                                                                border: 'none',
                                                                                zIndex: 10,
                                                                                position: 'relative'
                                                                            }}>
                                                                            comprar</button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex"
                                                                style={{
                                                                    borderBottom: '1px solid #ffffff',
                                                                    marginLeft: '45px',
                                                                    width: '370px',
                                                                    transform: 'translateY(-65px)'
                                                                }}>
                                                            </div>
                                                        </div>
                                                        <div className="d-inline">
                                                            <div className="row" style={{ marginTop: '-60px' }}>
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 1</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>12
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>
                                                                        8.10 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginLeft: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-4px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row" style={{ marginTop: '2px' }}>
                                                                <div className="col d-flex align-items-center  grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 2</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>12
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '50px', fontSize: '11px' }}>
                                                                        8.10 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginLeft: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 3</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>7
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '54px', fontSize: '11px' }}>
                                                                        10.8 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginRight: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 4</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>9
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '54px', fontSize: '11px' }}>
                                                                        10.8 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginRight: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col text-start px-4 py-2" style={{ marginLeft: '-105px' }}>

                                                </div>
                                            </div>
                                        </section>
                                        <section className="rounded rounded-4 p-4 col-md-4"
                                            style={{ backgroundColor: '#4a03a5', height: '370px', width: '360px', marginTop: '30px' }}>
                                            <h2 className="champ-bold text-white">
                                                <span style={{ fontSize: 'xx-large', marginLeft: '-139px', display: 'block' }}>Subscrición</span>
                                                <span style={{ fontSize: 'xx-large', marginLeft: '-192px' }}>mensual</span>
                                            </h2>
                                            <div className="poppins-light"
                                                style={{
                                                    marginTop: '5px',
                                                    fontSize: '12px',
                                                    width: '299px',
                                                    marginLeft: '-20px'
                                                }}>
                                                <p className="poppins-light text-start"
                                                    style={{
                                                        minHeight: '85px',
                                                        fontSize: '12px',
                                                        width: '299px',
                                                        marginLeft: '9px'
                                                    }}>
                                                    <span>
                                                        Con tu membresia, accede libremente a todo el
                                                        contenido que UpGrade tiene para ti, además
                                                        recibe beneficios exclusivos por 30 días.
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="d-flex col-7 ms-1" style={{ marginTop: '-40px' }}>
                                                <ol className="px-0 text-white" style={{ marginLeft: '-15px' }}>
                                                    <p className="fas fa-check "
                                                        style={{
                                                            listStyle: 'none',
                                                            padding: '0',
                                                            margin: '0',
                                                            color: '#7769f2'
                                                        }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            1</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{
                                                            listStyle: 'none',
                                                            padding: '0',
                                                            margin: '0',
                                                            color: '#7769f2'
                                                        }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            2</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{ listStyle: 'none', padding: '0', margin: '0', color: '#7769f2' }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            3</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{ listStyle: 'none', padding: '0', margin: '0', color: '#7769f2' }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            4</span>
                                                    </p>
                                                </ol>
                                            </div>
                                            <div className="text-center" style={{ marginLeft: '-220px', marginTop: '-25px' }}>
                                                <span className="champ-bold text-wrap" style={{ maxHeight: '185px', fontSize: '75px' }}>
                                                    <span></span>21.
                                                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <sup style={{ marginLeft: '109px', marginTop: '-49px', fontSize: '40px' }}>60
                                                            <p style={{ marginLeft: '70px' }}>$</p></sup>
                                                        <p style={{ fontSize: '20px', marginLeft: '153px', marginTop: '-20px' }}>USD
                                                        </p>
                                                        {/* <sub>USD</sub>  */}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <Link to="/checkout" style={{ color: 'inherit' }}>
                                                    <button className="btn rounded-pill py-2 text-white fs-6 poppins-light bi-cart-plus"
                                                        style={{
                                                            backgroundColor: '#7955f8',
                                                            borderRadius: '150px',
                                                            width: '130px',
                                                            marginTop: '-115px',
                                                            marginLeft: '180px'
                                                        }}>
                                                        comprar</button>
                                                </Link>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <a href="./precios.html" style={{ color: 'inherit' }}>
                                <button className="btn btn-custom_2 poppins-light"
                                    style={{ height: '50px', width: '330px', marginTop: '2px', transform: 'translateY(-20px)', fontSize: '20px' }}>Ver
                                    todos los planes</button>
                            </a>
                        </div>
                        <div className="d-flex justify-content-center grid gap-0 column-gap-4"
                            style={{
                                marginTop: '590px',
                                marginLeft: '-255px'
                            }}>
                            <div className="course_coming" style={{ height: '140px', width: '380px', left: '133px' }}>
                                <div className="card-body">
                                    <div className="d-flex flex-row justify-content-center text-center ">
                                        <div className="col" style={{ maxWidth: '220px', marginLeft: '20px', marginTop: '20px' }}>
                                            <h1 className="poppins-light text-start" style={{ fontSize: '12px' }}>Elegir
                                                <span className="champ-bold">
                                                    Michigan's Store
                                                </span>
                                                no es solo una opción,
                                                <span className="champ-bold">
                                                    es una experiencia
                                                </span>
                                            </h1>
                                            <p className="poppins-light me-4" style={{ fontSize: '10px', width: '140px', maxWidth: '160px', color: '#FFB17F' }}>
                                                Inicia ahora y obtén un 20% off en el primer plan que elijas.</p>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-coming-start poppins-light"
                                                style={{
                                                    height: '35px',
                                                    width: '60px',
                                                    lineHeight: '5px',
                                                    transform: 'translateX(5px)',
                                                    fontSize: '12px',
                                                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                                                }}>comenzar
                                                ahora</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* display movil md */}
                    <div className='d-none d-md-block d-lg-none'>
                        <div className="container text-center">
                            <a href="./precios.html" style={{ color: 'inherit' }}>
                                <button className="btn btn-custom poppins-light"
                                    style={{ height: '50px', width: '330px', marginTop: '105px', transform: 'translateY(60px)', fontSize: '20px' }}>Ver
                                    todos los cursos</button>
                            </a>
                            <div className="d-flex content flex-column" style={{ maxHeight: '100vh', width: '100%', borderRadius: '45px' }}>
                                <div className="row" style={{ marginLeft: '10px', overflowY: 'scroll' }}>
                                    <div className="d-flex">
                                        <section className="rounded rounded-5 p-0 col-md-6 gradient-section"
                                            style={{ width: '220px', height: '490px', borderRadius: '45px', marginLeft: '-10px', marginTop: '80px' }}>
                                            <img src="/svgs/Frame 1000001569.svg" alt="UpColors"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                                        </section>
                                        <section className="rounded rounded-5 p-2 col-md-6 gradient-section"
                                            style={{ marginRight: '25px', width: '420px', height: '490px', marginTop: '80px' }}>
                                            <div className="row">
                                                <div className="col text-start">
                                                    <h2 className="champ-bold text-white ms-4"
                                                        style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                                        UpColors
                                                    </h2>
                                                    <p className="poppins-light"
                                                        style={{ minHeight: '100px', fontSize: '12px', marginLeft: '27px', width: '365px' }}>
                                                        Con un enfoque comunicativo
                                                        clave,
                                                        este programa explora la comunicación contextualizada en
                                                        situaciones
                                                        reales. Introduciendo temas de fonética básica. Las 40 sesiones de video
                                                        divididas en 4
                                                        módulos
                                                        construyen habilidades esenciales de comunicación.</p>
                                                    <div style={{ marginTop: '-8px', marginLeft: '-8px' }}>
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <h3 className="fs-6 champ-semibold"
                                                                    style={{ marginLeft: '60px', transform: 'translateY(-15px)' }}>Full
                                                                    <span className="bi bi-patch-check-fill mx-2"
                                                                        style={{
                                                                            color: '#00cdff',
                                                                            background: 'white',
                                                                            borderRadius: '50%',
                                                                            fontSize: '20px',
                                                                            width: '15px',
                                                                            height: '15px',
                                                                            display: 'inline-flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center'
                                                                        }}></span>
                                                                </h3>
                                                                <ol>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-25px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-20px)' }}>Acceso
                                                                            a
                                                                            los 4 módulos</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-25px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-60px)' }}>¡Ve
                                                                            a tu
                                                                            ritmo!, visualiza upColors en el tiempo que mejor se
                                                                            adapte a tu
                                                                            aprendizaje.</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-35px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-30px)' }}>4
                                                                            sesiones
                                                                            en vivo.</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-50px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-40px)' }}>Recibe
                                                                            certificación de curso.</span>
                                                                    </p>
                                                                </ol>
                                                            </div>
                                                            <div className="col-5 mt-4">
                                                                <div className="text-center"
                                                                    style={{ marginLeft: '10px', marginTop: '-10px' }}>
                                                                    <span className="champ-bold text-wrap"
                                                                        style={{ maxHeight: '185px', fontSize: '35px' }}>
                                                                        <span style={{ marginLeft: '-50px' }}></span>37.
                                                                        <span
                                                                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                            <sup
                                                                                style={{ marginLeft: '20px', marginTop: '-20px', fontSize: '25px' }}>80
                                                                                <p style={{ marginLeft: '45px' }}>$</p>
                                                                            </sup>
                                                                            <p
                                                                                style={{ fontSize: '15px', marginLeft: '44px', marginTop: '-20px' }}>
                                                                                USD</p>
                                                                            {/* <sub>USD</sub>  */}
                                                                        </span>
                                                                    </span>
                                                                    <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                        <button
                                                                            className="button-purple rounded-pill px-4 py-1 champ-semibold text-center bi-cart-plus"
                                                                            style={{
                                                                                transform: 'translateY(-10px)',
                                                                                width: '135px',
                                                                                height: '45px',
                                                                                marginTop: '-50px',
                                                                                marginLeft: '-6px',
                                                                                border: 'none',
                                                                                zIndex: 10,
                                                                                position: 'relative'
                                                                            }}>
                                                                            comprar</button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex"
                                                                style={{
                                                                    borderBottom: '1px solid #ffffff',
                                                                    marginLeft: '45px',
                                                                    width: '370px',
                                                                    transform: 'translateY(-65px)'
                                                                }}>
                                                            </div>
                                                        </div>
                                                        <div className="d-inline">
                                                            <div className="row" style={{ marginTop: '-60px' }}>
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 1</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>12
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>
                                                                        8.10 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginLeft: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-4px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row" style={{ marginTop: '2px' }}>
                                                                <div className="col d-flex align-items-center  grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 2</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>12
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '50px', fontSize: '11px' }}>
                                                                        8.10 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginLeft: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 3</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>7
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '54px', fontSize: '11px' }}>
                                                                        10.8 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginRight: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 4</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>9
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '54px', fontSize: '11px' }}>
                                                                        10.8 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginRight: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col text-start px-4 py-2" style={{ marginLeft: '-105px' }}>

                                                </div>
                                            </div>
                                        </section>
                                        <section className="rounded rounded-4 p-4 col-md-4"
                                            style={{ backgroundColor: '#4a03a5', height: '370px', width: '360px', marginTop: '75px' }}>
                                            <h2 className="champ-bold text-white">
                                                <span style={{ fontSize: 'xx-large', marginLeft: '-139px', display: 'block' }}>Subscrición</span>
                                                <span style={{ fontSize: 'xx-large', marginLeft: '-192px' }}>mensual</span>
                                            </h2>
                                            <div className="poppins-light"
                                                style={{
                                                    marginTop: '5px',
                                                    fontSize: '12px',
                                                    width: '299px',
                                                    marginLeft: '-20px'
                                                }}>
                                                <p className="poppins-light text-start"
                                                    style={{
                                                        minHeight: '85px',
                                                        fontSize: '12px',
                                                        width: '299px',
                                                        marginLeft: '9px'
                                                    }}>
                                                    <span>
                                                        Con tu membresia, accede libremente a todo el
                                                        contenido que UpGrade tiene para ti, además
                                                        recibe beneficios exclusivos por 30 días.
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="d-flex col-7 ms-1" style={{ marginTop: '-40px' }}>
                                                <ol className="px-0 text-white" style={{ marginLeft: '-15px' }}>
                                                    <p className="fas fa-check "
                                                        style={{
                                                            listStyle: 'none',
                                                            padding: '0',
                                                            margin: '0',
                                                            color: '#7769f2'
                                                        }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            1</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{
                                                            listStyle: 'none',
                                                            padding: '0',
                                                            margin: '0',
                                                            color: '#7769f2'
                                                        }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            2</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{ listStyle: 'none', padding: '0', margin: '0', color: '#7769f2' }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            3</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{ listStyle: 'none', padding: '0', margin: '0', color: '#7769f2' }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            4</span>
                                                    </p>
                                                </ol>
                                            </div>
                                            <div className="text-center" style={{ marginLeft: '-220px', marginTop: '-25px' }}>
                                                <span className="champ-bold text-wrap" style={{ maxHeight: '185px', fontSize: '75px' }}>
                                                    <span></span>21.
                                                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <sup style={{ marginLeft: '109px', marginTop: '-49px', fontSize: '40px' }}>60
                                                            <p style={{ marginLeft: '70px' }}>$</p></sup>
                                                        <p style={{ fontSize: '20px', marginLeft: '153px', marginTop: '-20px' }}>USD
                                                        </p>
                                                        {/* <sub>USD</sub>  */}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <Link to="/checkout" style={{ color: 'inherit' }}>
                                                    <button className="btn rounded-pill py-2 text-white fs-6 poppins-light bi-cart-plus"
                                                        style={{
                                                            backgroundColor: '#7955f8',
                                                            borderRadius: '150px',
                                                            width: '130px',
                                                            marginTop: '-115px',
                                                            marginLeft: '180px'
                                                        }}>
                                                        comprar</button>
                                                </Link>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <a href="./precios.html" style={{ color: 'inherit' }}>
                                <button className="btn btn-custom_2 poppins-light"
                                    style={{ height: '50px', width: '330px', marginTop: '40px', transform: 'translateY(-20px)', fontSize: '20px' }}>Ver
                                    todos los planes</button>
                            </a>
                        </div>
                        <div className="d-flex justify-content-center grid gap-0 column-gap-4"
                            style={{
                                marginTop: '590px',
                                marginLeft: '-255px'
                            }}>
                            <div className="course_coming" style={{ height: '150px', width: '700px', left: '133px' }}>
                                <div className="card-body">
                                    <div className="d-flex flex-row justify-content-center text-center ">
                                        <div className="col" style={{ maxWidth: '220px', marginLeft: '70px', marginTop: '20px' }}>
                                            <h1 className="poppins-light text-start" style={{ fontSize: '18px' }}>Elegir
                                                <span className="champ-bold">
                                                    Michigan's Store
                                                </span>
                                                no es solo una opción,
                                                <span className="champ-bold">
                                                    es una experiencia
                                                </span>
                                            </h1>
                                            <p className="poppins-light ms-2" style={{ fontSize: '10px', maxWidth: '160px', color: '#FFB17F' }}>
                                                Inicia ahora y obtén un 20% off en el primer plan que elijas.</p>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-coming poppins-light"
                                                style={{
                                                    height: '40px',
                                                    width: '199.5px',
                                                    lineHeight: '5px',
                                                    transform: 'translateX(5px)',
                                                    fontSize: '20px',
                                                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                                                }}>comenzar
                                                ahora</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* display pc */}
                    <div className='d-none d-lg-block'>
                        <div className="container text-center">
                            <a href="./precios.html" style={{ color: 'inherit' }}>
                                <button className="btn btn-custom poppins-light"
                                    style={{ height: '50px', width: '330px', marginTop: '105px', transform: 'translateY(-20px)', fontSize: '20px' }}>Ver
                                    todos los cursos</button>
                            </a>
                            <div className="d-flex content flex-column" style={{ maxHeight: '100vh', width: '890px', borderRadius: '45px' }}>
                                <div className="row" style={{ marginLeft: '-35px' }}>
                                    <div className="d-none d-lg-flex">
                                        <section className="rounded rounded-5 p-0 col-md-6 gradient-section"
                                            style={{ marginRight: '0px', width: '225px', height: '490px', borderRadius: '45px', marginLeft: '190px' }}>
                                            <img src="/svgs/Frame 1000001569.svg" alt="UpColors"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                                        </section>
                                        <section className="rounded rounded-5 p-2 col-md-6 gradient-section"
                                            style={{ marginRight: '25px', width: '420px', height: '490px' }}>
                                            <div className="row">
                                                <div className="col text-start">
                                                    <h2 className="champ-bold text-white ms-4"
                                                        style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                                        UpColors
                                                    </h2>
                                                    <p className="poppins-light"
                                                        style={{ minHeight: '100px', fontSize: '12px', marginLeft: '27px', width: '365px' }}>
                                                        Con un enfoque comunicativo
                                                        clave,
                                                        este programa explora la comunicación contextualizada en
                                                        situaciones
                                                        reales. Introduciendo temas de fonética básica. Las 40 sesiones de video
                                                        divididas en 4
                                                        módulos
                                                        construyen habilidades esenciales de comunicación.</p>
                                                    <div style={{ marginTop: '-8px', marginLeft: '-8px' }}>
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <h3 className="fs-6 champ-semibold"
                                                                    style={{ marginLeft: '60px', transform: 'translateY(-15px)' }}>Full
                                                                    <span className="bi bi-patch-check-fill mx-2"
                                                                        style={{
                                                                            color: '#00cdff',
                                                                            background: 'white',
                                                                            borderRadius: '50%',
                                                                            fontSize: '20px',
                                                                            width: '15px',
                                                                            height: '15px',
                                                                            display: 'inline-flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center'
                                                                        }}></span>
                                                                </h3>
                                                                <ol>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-25px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-20px)' }}>Acceso
                                                                            a
                                                                            los 4 módulos</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-25px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-60px)' }}>¡Ve
                                                                            a tu
                                                                            ritmo!, visualiza upColors en el tiempo que mejor se
                                                                            adapte a tu
                                                                            aprendizaje.</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-35px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-30px)' }}>4
                                                                            sesiones
                                                                            en vivo.</span>
                                                                    </p>
                                                                    <p className="fas fa-check"
                                                                        style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-50px)' }}>
                                                                        <span className="poppins-light text-white"
                                                                            style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-40px)' }}>Recibe
                                                                            certificación de curso.</span>
                                                                    </p>
                                                                </ol>
                                                            </div>
                                                            <div className="col-5 mt-4">
                                                                <div className="text-center"
                                                                    style={{ marginLeft: '10px', marginTop: '-10px' }}>
                                                                    <span className="champ-bold text-wrap"
                                                                        style={{ maxHeight: '185px', fontSize: '35px' }}>
                                                                        <span style={{ marginLeft: '-50px' }}></span>37.
                                                                        <span
                                                                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                            <sup
                                                                                style={{ marginLeft: '20px', marginTop: '-20px', fontSize: '25px' }}>80
                                                                                <p style={{ marginLeft: '45px' }}>$</p>
                                                                            </sup>
                                                                            <p
                                                                                style={{ fontSize: '15px', marginLeft: '44px', marginTop: '-20px' }}>
                                                                                USD</p>
                                                                            {/* <sub>USD</sub>  */}
                                                                        </span>
                                                                    </span>
                                                                    <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                        <button
                                                                            className="button-purple rounded-pill px-4 py-1 champ-semibold text-center bi-cart-plus"
                                                                            style={{
                                                                                transform: 'translateY(-10px)',
                                                                                width: '135px',
                                                                                height: '45px',
                                                                                marginTop: '-50px',
                                                                                marginLeft: '-6px',
                                                                                border: 'none',
                                                                                zIndex: 10,
                                                                                position: 'relative'
                                                                            }}>
                                                                            comprar</button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex"
                                                                style={{
                                                                    borderBottom: '1px solid #ffffff',
                                                                    marginLeft: '45px',
                                                                    width: '370px',
                                                                    transform: 'translateY(-65px)'
                                                                }}>
                                                            </div>
                                                        </div>
                                                        <div className="d-inline">
                                                            <div className="row" style={{ marginTop: '-60px' }}>
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 1</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>12
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>
                                                                        8.10 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginLeft: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-4px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row" style={{ marginTop: '2px' }}>
                                                                <div className="col d-flex align-items-center  grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 2</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>12
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '50px', fontSize: '11px' }}>
                                                                        8.10 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginLeft: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 3</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>7
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '54px', fontSize: '11px' }}>
                                                                        10.8 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginRight: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col d-flex align-items-center grid gap-0 row-gap-2"
                                                                    style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                                    <p className="fas fa-circle"
                                                                        style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}>
                                                                    </p>
                                                                    <p className="poppins-light p-0"
                                                                        style={{ marginLeft: '4px', fontSize: '11px', transform: 'translateX(4px)' }}>
                                                                        Modulo 4</p>
                                                                    <p className="poppins-light p-1"
                                                                        style={{ marginLeft: '45px', fontSize: '11px' }}>9
                                                                        Temas</p>
                                                                    <p className="poppins-light p-2"
                                                                        style={{ marginLeft: '54px', fontSize: '11px' }}>
                                                                        10.8 $</p>
                                                                    <div className="d-flex ms-auto" style={{ marginRight: '-2px' }}>
                                                                        <Link to="/checkout" style={{ color: 'inherit' }}>
                                                                            <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                                style={{
                                                                                    marginTop: '-7px',
                                                                                    width: '85px',
                                                                                    height: '25px',
                                                                                    fontSize: '0.8rem',
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    color: 'whitesmoke',
                                                                                    borderRadius: '35px',
                                                                                    zIndex: 10,
                                                                                    position: 'relative'
                                                                                }}>
                                                                                comprar
                                                                            </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col text-start px-4 py-2" style={{ marginLeft: '-105px' }}>

                                                </div>
                                            </div>
                                        </section>
                                        <section className="rounded rounded-4 p-4 col-md-4"
                                            style={{ backgroundColor: '#4a03a5', height: '370px', width: '360px' }}>
                                            <h2 className="champ-bold text-white">
                                                <span style={{ fontSize: 'xx-large', marginLeft: '-139px', display: 'block' }}>Subscrición</span>
                                                <span style={{ fontSize: 'xx-large', marginLeft: '-192px' }}>mensual</span>
                                            </h2>
                                            <div className="poppins-light"
                                                style={{
                                                    marginTop: '5px',
                                                    fontSize: '12px',
                                                    width: '299px',
                                                    marginLeft: '-20px'
                                                }}>
                                                <p className="poppins-light text-start"
                                                    style={{
                                                        minHeight: '85px',
                                                        fontSize: '12px',
                                                        width: '299px',
                                                        marginLeft: '9px'
                                                    }}>
                                                    <span>
                                                        Con tu membresia, accede libremente a todo el
                                                        contenido que UpGrade tiene para ti, además
                                                        recibe beneficios exclusivos por 30 días.
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="d-flex col-7 ms-1" style={{ marginTop: '-40px' }}>
                                                <ol className="px-0 text-white" style={{ marginLeft: '-15px' }}>
                                                    <p className="fas fa-check "
                                                        style={{
                                                            listStyle: 'none',
                                                            padding: '0',
                                                            margin: '0',
                                                            color: '#7769f2'
                                                        }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            1</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{
                                                            listStyle: 'none',
                                                            padding: '0',
                                                            margin: '0',
                                                            color: '#7769f2'
                                                        }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            2</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{ listStyle: 'none', padding: '0', margin: '0', color: '#7769f2' }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            3</span>
                                                    </p>
                                                    <p className="fas fa-check"
                                                        style={{ listStyle: 'none', padding: '0', margin: '0', color: '#7769f2' }}>
                                                        <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio
                                                            exclusivo
                                                            4</span>
                                                    </p>
                                                </ol>
                                            </div>
                                            <div className="text-center" style={{ marginLeft: '-220px', marginTop: '-25px' }}>
                                                <span className="champ-bold text-wrap" style={{ maxHeight: '185px', fontSize: '75px' }}>
                                                    <span></span>21.
                                                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <sup style={{ marginLeft: '109px', marginTop: '-49px', fontSize: '40px' }}>60
                                                            <p style={{ marginLeft: '70px' }}>$</p></sup>
                                                        <p style={{ fontSize: '20px', marginLeft: '153px', marginTop: '-20px' }}>USD
                                                        </p>
                                                        {/* <sub>USD</sub>  */}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <Link to="/checkout" style={{ color: 'inherit' }}>
                                                    <button className="btn rounded-pill py-2 text-white fs-6 poppins-light bi-cart-plus"
                                                        style={{
                                                            backgroundColor: '#7955f8',
                                                            borderRadius: '150px',
                                                            width: '130px',
                                                            marginTop: '-115px',
                                                            marginLeft: '180px'
                                                        }}>
                                                        comprar</button>
                                                </Link>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <a href="./precios.html" style={{ color: 'inherit' }}>
                                <button className="btn btn-custom_2 poppins-light"
                                    style={{ height: '50px', width: '330px', marginTop: '40px', transform: 'translateY(-20px)', fontSize: '20px' }}>Ver
                                    todos los planes</button>
                            </a>
                        </div>
                        <div className="d-flex justify-content-center grid gap-0 column-gap-4"
                            style={{
                                marginTop: '610px',
                                marginLeft: '-255px'
                            }}>
                            <div className="course_coming">
                                <div className="card-body">
                                    <div className="d-flex flex-row justify-content-center text-center ">
                                        <div className="col" style={{ maxWidth: '220px', marginLeft: '70px', marginTop: '20px' }}>
                                            <h1 className="poppins-light text-start" style={{ fontSize: '18px' }}>Elegir
                                                <span className="champ-bold">
                                                    Michigan's Store
                                                </span>
                                                no es solo una opción,
                                                <span className="champ-bold">
                                                    es una experiencia
                                                </span>
                                            </h1>
                                            <p className="poppins-light ms-2" style={{ fontSize: '10px', maxWidth: '160px', color: '#FFB17F' }}>
                                                Inicia ahora y obtén un 20% off en el primer plan que elijas.</p>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-coming poppins-light"
                                                style={{
                                                    height: '40px',
                                                    width: '199.5px',
                                                    lineHeight: '5px',
                                                    transform: 'translateX(150px)',
                                                    fontSize: '20px',
                                                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                                                }}>comenzar
                                                ahora</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="faq-section">
                    {/* display movil sm */}
                    <div className='d-block d-sm-none'>
                        <div className="container text-center" style={{ marginTop: '85px' }}>
                            <div className="d-flex flex-row justify-content-center text-center">
                                <div className="col-4" style={{ transform: 'translateX(-105px)' }}>
                                    <div className="d-flex"
                                        style={{
                                            borderBottom: '2px solid #ffffff',
                                            marginLeft: '55px',
                                            width: '100px',
                                            transform: 'translateY(-15px)'
                                        }}>
                                    </div>
                                    <span className="poppins-light text-start"
                                        style={{
                                            marginLeft: '55px',
                                            fontSize: '25px'
                                        }}>Preguntas</span>
                                    <p className="poppins-light text-start"
                                        style={{
                                            marginLeft: '55px',
                                            fontSize: '25px',
                                            transform: 'translateY(-8px)'
                                        }}>Frecuentes</p>
                                    <p className="text-start" style={{ width: '205px', marginLeft: '55px', transform: 'translateY(-15px)' }}>I
                                        will help wou with finding a solution and solve your problem.</p>
                                    <button className="btn btn-custom_2 mt-n2 poppins-light"
                                        style={{
                                            height: '40px',
                                            width: '205px',
                                            lineHeight: '5px',
                                            transform: 'translateY(-8px)',
                                            marginLeft: '50px'
                                        }}>
                                        dejar una pregunta
                                    </button>
                                </div>
                                <div className="col-6" style={{ transform: 'translateX(75px)', marginTop: '-40px' }}>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header style={{ background: 'transparent', color: '#ffffff' }}>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>01</strong>
                                                    <span className='text-white'>¿Qué es UpGrade?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Nuestro concepto de marca gira en torno a la idea de un lugar donde el poder
                                                transformador de las experiencias inmersivas ayuda a mejorar las habilidades de comunicación
                                                en inglés. Estamos dedicados a cultivar ciudadanos globales que posean la confianza para
                                                conectarse, colaborar y tener éxito en el mundo interconectado de hoy.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>02</strong>
                                                    <span className='text-white'>¿Cómo funciona el programa?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Fomentamos la inmersión en el idioma a través de la exposición
                                                constante a situaciones y materiales auténticos en inglés. Utilizamos una variedad de recursos,
                                                como videos, audios, artículos y conversaciones reales, para que los estudiantes se
                                                sumerjan en el idioma y se acostumbren a su uso cotidiano.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>03</strong>
                                                    <span className='text-white'>¿Qué incluyen mis cursos?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                <ul className="text-start">
                                                    <li>Respectiva cantidad de horas semanales de desarrollo.</li>
                                                    <li>Plataforma Stark de National Geographic Learning.</li>
                                                    <li>Material National Geographic Learning.</li>
                                                    <li>Acceso a Plataforma AcTime para programación de clases.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>04</strong>
                                                    <span className='text-white'>¿Qué voy a aprender?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                No solo las habilidades lingüísticas necesarias para comunicarse
                                                en inglés, sino también desarrollar una comprensión más amplia
                                                de la cultura y la sociedad de habla inglesa, lo que te prepararía
                                                para tener éxito en un entorno global.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>05</strong>
                                                    <span className='text-white'>¿Cómo puedo suscribirme?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Ingresando a nuestra página web, debes ir a la sección de
                                                planes y escoger el plan de tu preferencia y proceder al pago. Si
                                                quieres asesoría personalizada totalmente gratis, diligencia tus
                                                datos aquí.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>06</strong>
                                                    <span className='text-white'>¿Necesito un nivel en el idioma para poder tomar las clases?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                No. Contamos con un excelente programa de iniciación llamado
                                                UpColors en donde podrás construir desde 0 los conocimientos
                                                necesarios a través de actividades dinámicas que adaptan el
                                                color como protagonista en el desarrollo de todos los temas.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>07</strong>
                                                    <span className='text-white'>¿Cuántos niveles Michigan's Store?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Puedes encontrar cursos que van desde el nivel A1 hasta el nivel C1.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* display movil md */}
                    <div className='d-none d-md-block d-lg-none'>
                        <div className="container text-center" style={{ marginTop: '85px' }}>
                            <div className="d-flex flex-row justify-content-center text-center">
                                <div className="col-4" style={{ transform: 'translateX(-105px)' }}>
                                    <div className="d-flex"
                                        style={{
                                            borderBottom: '2px solid #ffffff',
                                            marginLeft: '40px',
                                            width: '100px',
                                            transform: 'translateY(-15px)'
                                        }}>
                                    </div>
                                    <span className="poppins-light text-start"
                                        style={{
                                            marginLeft: '-12px',
                                            fontSize: '25px'
                                        }}>Preguntas</span>
                                    <p className="poppins-light text-start"
                                        style={{
                                            marginLeft: '39px',
                                            fontSize: '25px',
                                            transform: 'translateY(-8px)'
                                        }}>Frecuentes</p>
                                    <p className="text-start" style={{ width: '305px', marginLeft: '40px', transform: 'translateY(-15px)' }}>I
                                        will help wou with finding a solution and solve your problem.</p>
                                    <button className="btn btn-custom_2 mt-n2 poppins-light"
                                        style={{
                                            height: '40px',
                                            width: '295px',
                                            lineHeight: '5px',
                                            transform: 'translateY(-8px)',
                                            marginLeft: '40px'
                                        }}>
                                        dejar una pregunta
                                    </button>
                                </div>
                                <div className="col-6" style={{ transform: 'translateX(35px)' }}>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header style={{ background: 'transparent', color: '#ffffff' }}>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>01</strong>
                                                    <span className='text-white'>¿Qué es UpGrade?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Nuestro concepto de marca gira en torno a la idea de un lugar donde el poder
                                                transformador de las experiencias inmersivas ayuda a mejorar las habilidades de comunicación
                                                en inglés. Estamos dedicados a cultivar ciudadanos globales que posean la confianza para
                                                conectarse, colaborar y tener éxito en el mundo interconectado de hoy.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>02</strong>
                                                    <span className='text-white'>¿Cómo funciona el programa?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Fomentamos la inmersión en el idioma a través de la exposición
                                                constante a situaciones y materiales auténticos en inglés. Utilizamos una variedad de recursos,
                                                como videos, audios, artículos y conversaciones reales, para que los estudiantes se
                                                sumerjan en el idioma y se acostumbren a su uso cotidiano.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>03</strong>
                                                    <span className='text-white'>¿Qué incluyen mis cursos?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                <ul className="text-start">
                                                    <li>Respectiva cantidad de horas semanales de desarrollo.</li>
                                                    <li>Plataforma Stark de National Geographic Learning.</li>
                                                    <li>Material National Geographic Learning.</li>
                                                    <li>Acceso a Plataforma AcTime para programación de clases.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>04</strong>
                                                    <span className='text-white'>¿Qué voy a aprender?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                No solo las habilidades lingüísticas necesarias para comunicarse
                                                en inglés, sino también desarrollar una comprensión más amplia
                                                de la cultura y la sociedad de habla inglesa, lo que te prepararía
                                                para tener éxito en un entorno global.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>05</strong>
                                                    <span className='text-white'>¿Cómo puedo suscribirme?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Ingresando a nuestra página web, debes ir a la sección de
                                                planes y escoger el plan de tu preferencia y proceder al pago. Si
                                                quieres asesoría personalizada totalmente gratis, diligencia tus
                                                datos aquí.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>06</strong>
                                                    <span className='text-white'>¿Necesito un nivel en el idioma para poder tomar las clases?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                No. Contamos con un excelente programa de iniciación llamado
                                                UpColors en donde podrás construir desde 0 los conocimientos
                                                necesarios a través de actividades dinámicas que adaptan el
                                                color como protagonista en el desarrollo de todos los temas.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>07</strong>
                                                    <span className='text-white'>¿Cuántos niveles Michigan's Store?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Puedes encontrar cursos que van desde el nivel A1 hasta el nivel C1.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* display pc */}
                    <div className='d-none d-lg-block'>
                        <div className="container text-center" style={{ marginTop: '85px' }}>
                            <div className="d-flex flex-row justify-content-center text-center">
                                <div className="col-4" style={{ transform: 'translateX(-105px)' }}>
                                    <div className="d-flex"
                                        style={{
                                            borderBottom: '2px solid #ffffff',
                                            marginLeft: '40px',
                                            width: '100px',
                                            transform: 'translateY(-15px)'
                                        }}>
                                    </div>
                                    <span className="poppins-light text-start"
                                        style={{
                                            marginLeft: '-180px',
                                            fontSize: '25px'
                                        }}>Preguntas</span>
                                    <p className="poppins-light text-start"
                                        style={{
                                            marginLeft: '39px',
                                            fontSize: '25px',
                                            transform: 'translateY(-8px)'
                                        }}>Frecuentes</p>
                                    <p className="text-start" style={{ width: '305px', marginLeft: '40px', transform: 'translateY(-15px)' }}>I
                                        will help wou with finding a solution and solve your problem.</p>
                                    <button className="btn btn-custom_2 mt-n2 poppins-light"
                                        style={{
                                            height: '40px',
                                            width: '295px',
                                            lineHeight: '5px',
                                            transform: 'translateY(-8px)',
                                            marginLeft: '-20px'
                                        }}>
                                        dejar una pregunta
                                    </button>
                                </div>
                                <div className="col-6" style={{ transform: 'translateX(35px)' }}>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header style={{ background: 'transparent', color: '#ffffff' }}>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>01</strong>
                                                    <span className='text-white'>¿Qué es UpGrade?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Nuestro concepto de marca gira en torno a la idea de un lugar donde el poder
                                                transformador de las experiencias inmersivas ayuda a mejorar las habilidades de comunicación
                                                en inglés. Estamos dedicados a cultivar ciudadanos globales que posean la confianza para
                                                conectarse, colaborar y tener éxito en el mundo interconectado de hoy.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>02</strong>
                                                    <span className='text-white'>¿Cómo funciona el programa?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Fomentamos la inmersión en el idioma a través de la exposición
                                                constante a situaciones y materiales auténticos en inglés. Utilizamos una variedad de recursos,
                                                como videos, audios, artículos y conversaciones reales, para que los estudiantes se
                                                sumerjan en el idioma y se acostumbren a su uso cotidiano.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>03</strong>
                                                    <span className='text-white'>¿Qué incluyen mis cursos?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                <ul className="text-start">
                                                    <li>Respectiva cantidad de horas semanales de desarrollo.</li>
                                                    <li>Plataforma Stark de National Geographic Learning.</li>
                                                    <li>Material National Geographic Learning.</li>
                                                    <li>Acceso a Plataforma AcTime para programación de clases.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>04</strong>
                                                    <span className='text-white'>¿Qué voy a aprender?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                No solo las habilidades lingüísticas necesarias para comunicarse
                                                en inglés, sino también desarrollar una comprensión más amplia
                                                de la cultura y la sociedad de habla inglesa, lo que te prepararía
                                                para tener éxito en un entorno global.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>05</strong>
                                                    <span className='text-white'>¿Cómo puedo suscribirme?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Ingresando a nuestra página web, debes ir a la sección de
                                                planes y escoger el plan de tu preferencia y proceder al pago. Si
                                                quieres asesoría personalizada totalmente gratis, diligencia tus
                                                datos aquí.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>06</strong>
                                                    <span className='text-white'>¿Necesito un nivel en el idioma para poder tomar las clases?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                No. Contamos con un excelente programa de iniciación llamado
                                                UpColors en donde podrás construir desde 0 los conocimientos
                                                necesarios a través de actividades dinámicas que adaptan el
                                                color como protagonista en el desarrollo de todos los temas.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                            <Accordion.Header>
                                                <span className="accordion-header">
                                                    <strong className="mx-2" style={{ color: '#5200BC' }}>07</strong>
                                                    <span className='text-white'>¿Cuántos niveles Michigan's Store?</span>
                                                </span>
                                                <FontAwesomeIcon icon={faChevronDown} className="ms-auto text-white rotate" />
                                            </Accordion.Header>
                                            <Accordion.Body className="accordion-body">
                                                Puedes encontrar cursos que van desde el nivel A1 hasta el nivel C1.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="newsletter-section text-center text-light py-5">
                    {/* display movil sm */}
                    <div className='d-block d-sm-none'>
                        <div className="container">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <div className="col-2" style={{ marginLeft: '125px' }}>
                                    <h3 className="champ-bold" style={{ width: '700px', marginLeft: '-215px' }}><span
                                        style={{
                                            background: 'linear-gradient(90deg, #F2527D, #EC7958)',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent'
                                        }}>¡Regístrate
                                        a nuestro newsletter!</span></h3>
                                    <ol className="text-start" style={{ width: '410px' }}>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62', marginLeft: '-85px' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso
                                                a los 4 módulos</span>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62', marginLeft: '-85px' }} />
                                            <span className="poppins-light text-white text-start w-50"
                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                aprendizaje.</span>
                                        </div>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62', marginLeft: '-85px' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>4
                                                sesiones
                                                en vivo.</span>
                                        </div>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62', marginLeft: '-85px' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                certificación de curso.</span>
                                        </div>
                                    </ol>
                                </div>
                                <div className="col-10">
                                    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                                        <input type="email" className="form-control custom-input-start poppins-light"
                                            style={{
                                                fontSize: '12px',
                                                width: '300px',
                                                height: '60px',
                                                background: '#615D78',
                                                borderRadius: '45px',
                                                marginTop: '300px',
                                                marginLeft: '-160px',
                                                outline: 'none',
                                                color: '#ffffff'
                                            }}
                                            placeholder="¡Ingresa tu correo!" />
                                        <button type="submit" className="btn btn-email ms-2" style={{ cursor: 'pointer', borderRadius: '45px', marginTop: '300px' }}
                                            id="toggleButton">
                                            <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '25px', marginLeft: '-2px' }} />
                                            <FontAwesomeIcon icon={faCheck} className="icon-clicked" style={{ fontSize: '25px', marginLeft: '-6px', color: '#04011D' }} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* display movil md */}
                    <div className='d-none d-md-block d-lg-none'>
                        <div className="container">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <div className="col-2" style={{ marginLeft: '125px' }}>
                                    <h3 className="champ-bold" style={{ width: '700px', marginLeft: '5px' }}><span
                                        style={{
                                            background: 'linear-gradient(90deg, #F2527D, #EC7958)',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent'
                                        }}>¡Regístrate
                                        a nuestro newsletter!</span></h3>
                                    <ol className="text-start" style={{ width: '410px' }}>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62', marginLeft: '-75px' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso
                                                a los 4 módulos</span>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62', marginLeft: '-75px' }} />
                                            <span className="poppins-light text-white text-start"
                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                aprendizaje.</span>
                                        </div>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62', marginLeft: '-75px' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>4
                                                sesiones
                                                en vivo.</span>
                                        </div>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62', marginLeft: '-75px' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                certificación de curso.</span>
                                        </div>
                                    </ol>
                                </div>
                                <div className="col-10">
                                    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                                        <input type="email" className="form-control custom-input-start poppins-light"
                                            style={{
                                                fontSize: '12px',
                                                width: '300px',
                                                height: '60px',
                                                background: '#615D78',
                                                borderRadius: '45px',
                                                marginTop: '90px',
                                                marginLeft: '130px',
                                                outline: 'none',
                                                color: '#ffffff'
                                            }}
                                            placeholder="¡Ingresa tu correo!" />
                                        <button type="submit" className="btn btn-email ms-2" style={{ cursor: 'pointer', borderRadius: '45px', marginTop: '90px' }}
                                            id="toggleButton">
                                            <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '25px', marginLeft: '-2px' }} />
                                            <FontAwesomeIcon icon={faCheck} className="icon-clicked" style={{ fontSize: '25px', marginLeft: '-6px', color: '#04011D' }} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* display pc */}
                    <div className='d-none d-lg-block'>
                        <div className="container">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <div className="col-2" style={{ marginLeft: '125px' }}>
                                    <h3 className="champ-bold" style={{ width: '700px', marginLeft: '195px' }}><span
                                        style={{
                                            background: 'linear-gradient(90deg, #F2527D, #EC7958)',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent'
                                        }}>¡Regístrate
                                        a nuestro newsletter!</span></h3>
                                    <ol className="text-start" style={{ width: '410px' }}>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso
                                                a los 4 módulos</span>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62' }} />
                                            <span className="poppins-light text-white text-start"
                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                aprendizaje.</span>
                                        </div>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>4
                                                sesiones
                                                en vivo.</span>
                                        </div>
                                        <div style={{ display: 'block' }}>
                                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '15px', color: '#FF3E62' }} />
                                            <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                certificación de curso.</span>
                                        </div>
                                    </ol>
                                </div>
                                <div className="col-10">
                                    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                                        <input type="email" className="form-control custom-input-start poppins-light"
                                            style={{
                                                fontSize: '12px',
                                                width: '416px',
                                                height: '60px',
                                                background: '#615D78',
                                                borderRadius: '45px',
                                                marginLeft: '70px',
                                                outline: 'none',
                                                color: '#ffffff'
                                            }}
                                            placeholder="¡Ingresa tu correo!" />
                                        <button type="submit" className="btn btn-email ms-2" style={{ cursor: 'pointer', borderRadius: '45px' }}
                                            id="toggleButton">
                                            <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '25px', marginLeft: '-2px' }} />
                                            <FontAwesomeIcon icon={faCheck} className="icon-clicked" style={{ fontSize: '25px', marginLeft: '-6px', color: '#04011D' }} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer PC */}
            <div className="d-none d-block d-lg-block" style={{ position: 'relative', zIndex: 8 }}>
                <footer className="gradient-customs text-white p-4 col-md-4 p-md-5 text-center mx-auto"
                    style={{ width: '1345px', height: '150px' }}>
                    <div className="d-flex justify-content-center  text-center row">
                        <div className="col" style={{ marginLeft: '35px' }}>
                            <h2 className="fs-2 champ-bold">Michigan's Store</h2>
                            <p className="mt-2 poppins-light">Apreder inglés nunca fue tan fácil</p>
                        </div>
                        <div className="col me-4">
                            <a href="https://www.facebook.com/michiganmaster" className="mx-2"
                                style={{ fontSize: '40px', textDecoration: 'none', color: '#3b82f6', backgroundColor: '#ffffff', borderRadius: '50%', height: '55px', width: '55px', lineHeight: '55px', textAlign: 'center', display: 'inline-block' }}><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.instagram.com/michiganmastersas/" className="fa-brands fa-instagram mx-2"
                                style={{ fontSize: '40px', textDecoration: 'none', color: '#3b82f6', backgroundColor: '#ffffff', borderRadius: '50%', height: '55px', width: '55px', lineHeight: '55px', textAlign: 'center', display: 'inline-block' }}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://tiktok.com/@michiganmasterco" className="fa-brands fa-tiktok mx-2"
                                style={{ fontSize: '40px', textDecoration: 'none', color: '#3b82f6', backgroundColor: '#ffffff', borderRadius: '50%', height: '55px', width: '55px', lineHeight: '55px', textAlign: 'center', display: 'inline-block' }}><FontAwesomeIcon icon={faTiktok} /></a>
                            <a href="https://wa.me/+573228532254" className="fa-brands fa-whatsapp mx-2"
                                style={{ fontSize: '40px', textDecoration: 'none', color: '#3b82f6', backgroundColor: '#ffffff', borderRadius: '50%', height: '55px', width: '55px', lineHeight: '55px', textAlign: 'center', display: 'inline-block' }}><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </div>
                        <div className="col">
                            <p className="poppins-light" style={{ fontSize: '15px', color: '#a9aeeb', marginLeft: '-50px' }}>Privacity
                                Policy - Terms & Agreements</p>
                            <YearDisplay onYearChange={setcurrentYear} />
                            <p className="poppins-light"
                                style={{ fontSize: '15px', color: '#a9aeeb', marginTop: '-15px', marginLeft: '55px' }}>@{currentYear} Michigan's
                                Store</p>
                            <p className="poppins-light"
                                style={{ fontSize: '15px', color: '#a9aeeb', marginTop: '-15px', marginLeft: '-2px' }}>Todos los
                                derechos reservados</p>
                        </div>
                    </div>
                </footer>
            </div>
            {/* Footer Movil*/}
            <div className="d-block d-lg-none" >
                <footer className="d-flex gradient-custom text-white p-md-5 text-center mx-auto flex-column"
                    style={{ maxWidth: '295px', height: '400px', marginTop: '95px' }}>
                    <div className="container p-0" style={{ marginTop: '25px' }}>
                        <h2 className="fs-2 champ-bold">Michigan's Store</h2>
                        <p className="mt-2 poppins-light">Aprender inglés nunca fue tan fácil</p>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <a href="https://www.facebook.com/michiganmaster" className="fa-brands fa-facebook mx-1" style={{ fontSize: '30px', color: '#3b82f6', backgroundColor: '#ffffff', borderRadius: '50%', height: '40px', width: '40px', lineHeight: '40px', textAlign: 'center' }}><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.instagram.com/michiganmastersas/" className="fa-brands fa-instagram mx-1" style={{ fontSize: '30px', color: '#3b82f6', backgroundColor: '#ffffff', borderRadius: '50%', height: '40px', width: '40px', lineHeight: '40px', textAlign: 'center' }}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://tiktok.com/@michiganmasterco" className="fa-brands fa-tiktok mx-1" style={{ fontSize: '30px', color: '#3b82f6', backgroundColor: '#ffffff', borderRadius: '50%', height: '40px', width: '40px', lineHeight: '40px', textAlign: 'center' }}><FontAwesomeIcon icon={faTiktok} /></a>
                            <a href="https://wa.me/+573228532254" className="fa-brands fa-whatsapp mx-1" style={{ fontSize: '30px', color: '#3b82f6', backgroundColor: '#ffffff', borderRadius: '50%', height: '40px', width: '40px', lineHeight: '40px', textAlign: 'center' }}><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </div>
                        <p className="mx-auto mt-2" style={{ borderBottom: '1px solid #ffffff', maxWidth: '75%' }}></p>
                        <div className="mt-2">
                            <p className="poppins-light" style={{ color: '#a9aeeb' }}>Privacity Policy - Terms & Agreements</p>
                        </div>
                        <p className="mt-n2 poppins-light" style={{ fontSize: '12px', color: '#a9aeeb' }}>©2025 UpGrade | Todos los
                            derechos reservados
                        </p>
                    </div>
                </footer>
            </div>
            {/* Scrollbar button */}
            <ScrollButton containerRef={containerRef} />
        </div >
    );
};
