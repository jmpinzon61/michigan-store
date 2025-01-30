import '../../templates/css/styles.css';
import '../../templates/css/styles-interface-classes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ScrollButton } from '../scroll-button/ScrollButton';
import { toggleVideo } from '../../templates/ts/toggle-video';
import { faPlay, faVolumeUp, faExpand } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { YearDisplay } from '../Year/YearDisplay';

export const InterfaceClasses = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [currentYear, setcurrentYear] = useState<number>(new Date().getFullYear());
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handlerToggleVideo = () => {
        toggleVideo();
    }

    return (
        <div className="bg-main-class" style={{ overflowX: 'hidden', overflowY: 'scroll', height: '100vh' }} ref={containerRef}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{ width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px' }}>
                <a href="./inicio.html" className="champ-bold"
                    style={{ margin: '0 0 0 -2px', marginTop: '-55px', color: 'inherit', textDecoration: 'none', fontSize: '18px' }}>Michigan's</a>
                <a href="./inicio.html" className="champ-bold"
                    style={{ margin: '-10px 0 0 -390px', color: 'inherit', textDecoration: 'none', fontSize: '18px' }}>Store</a>
                {/* Nav in PC */}
                <div className="d-none d-block d-lg-block">
                    <nav className="d-flex justify-content-between align-items-center"
                        style={{ maxWidth: '100%', marginRight: '470px', marginTop: '-30px' }}>
                        {/* <a href="./inicio.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Inicio</a>
                        <a href="./cursos.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Cursos</a>
                        <a href="./precios.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Precios</a>
                        <a href="./nosotros.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Nosotros</a>
                        <a href="./blogs.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Blogs</a>  */}
                    </nav>
                </div>
                {/* Nav in Movil */}
                <div className="d-block d-lg-none mx-auto" style={{ width: '45%', position: 'relative', marginTop: '-155px' }}>
                    <nav className="d-flex justify-content-between align-items-center flex-nowrap overflow-x-auto"
                        style={{ whiteSpace: 'nowrap', width: '100%', marginTop: '2px' }}>
                        <div style={{ marginTop: '200px' }}>
                            <a href="#" className="text-white mx-2 poppins-bold">Inicio</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Cursos</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Precios</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Nosotros</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Blogs</a>
                        </div>
                    </nav>
                </div>
                <div className="dropdown d-flex align-items-center" style={{ marginTop: '-35px' }}>
                    <img src="/images/Ellipse 840.png" alt="User Avatar" className="rounded-circle me-2" width="50" height="50"
                        data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }} />
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item text-white poppins-light mb-2" href="#"
                            style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Ver perfil</a></li>
                        <li><a className="dropdown-item text-white poppins-light mb-2" href="./content-quiz-module.html"
                            style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Quizz Module</a></li>
                        <li><a className="dropdown-item text-white poppins-light" href="#"
                            style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Configuración</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item text-white poppins-light" href="#"
                            style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Cerrar sesión</a></li>
                    </ul>
                    <div className="d-flex fs-3 bg-secondary rounded-circle  text-black  justify-content-center me-3"
                        style={{ height: '50px', width: '50px' }}>
                        <i className="text-center  bi-three-dots-vertical" data-bs-toggle="dropdown"
                            style={{ cursor: 'pointer', backgroundColor: '#a19aac', display: 'flex', padding: '12px', borderRadius: '25px' }}></i>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item text-white poppins-light mb-2" href=""
                                style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Configuración</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <main className="container-fluid d-flex justify-content-center my-3">
                <section style={{ margin: '25px 10px 10px 10px' }}>
                    <div className="row custom-row">
                        {/* Video Section */}
                        <div className="col-6" style={{ padding: '0px 15px' }}>
                            <h2 className="text-start mb-3 poppins-bold"><span style={{ color: '#5e5bf5' }}>UpColors | </span>Módulo 1
                            </h2>
                            <h3 className="text-start mb-4 poppins-light fs-5">Where are you from? - ¿De dónde eres?</h3>
                            <div className="video-container" style={{ borderRadius: '20px' }}>
                                <div className="video-placeholder"></div>
                                <button className="play-button" onClick={handlerToggleVideo}
                                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'none', border: 'none', cursor: 'pointer' }}>
                                    <FontAwesomeIcon icon={faPlay} size="3x" color="white" />
                                </button>
                                <div className="video-controls d-flex justify-content-center align-items-center"
                                    style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', gap: '10px' }}>
                                    <button className="btn text-white play-pause" style={{ padding: '5px 10px' }}
                                        onClick={handlerToggleVideo}>
                                        <FontAwesomeIcon icon={faPlay} style={{ fontSize: '20px' }} color="white" />
                                    </button>
                                    <input type="range" className="form-range progress-bar" min="0" max="100" value="0"
                                        style={{ flexGrow: 1, margin: '0 10px' }} />
                                    <button className="btn text-white mute" style={{ padding: '5px 10px' }}>
                                        <FontAwesomeIcon icon={faVolumeUp} style={{ fontSize: '20px' }} color="white" />
                                    </button>
                                    <button className="btn text-white fullscreen" style={{ padding: '5px 10px' }}>
                                        <FontAwesomeIcon icon={faExpand} style={{ fontSize: '20px' }} color="white" />
                                    </button>
                                </div>
                                <video id="myVideo">
                                    <source src="/videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="transcription mt-4" style={{ padding: '20px 0px 0px 40px' }}>
                                <h4 className="mb-3 poppins-light" style={{ fontWeight: 700 }}>transcripción</h4>
                                <div className="scrollbar"
                                    style={{ maxWidth: '520px', maxHeight: '500px', height: '420px', overflowY: 'scroll', position: 'relative' }}>
                                    <p className="poppins-light"
                                        style={{ lineHeight: 1.8, paddingRight: '15px', background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgb(12, 4, 51) 100%)', pointerEvents: 'none' }}>
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        Ut wisi eniim veniam,
                                        quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliquip ex ea commodo consequat.
                                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio .
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        Ut wisi eniim veniam,
                                        quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliquip ex ea commodo consequat.
                                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio .
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        Ut wisi eniim veniam,
                                        quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliquip ex ea commodo consequat.
                                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio .
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        Ut wisi eniim veniam,
                                        quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliquip ex ea commodo consequat.
                                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio .
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        Ut wisi eniim veniam,
                                        quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliquip ex ea commodo consequat.
                                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio .
                                        Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                        Ut wisi eniim veniam,
                                        quis nostrud exerci tation ullamcorper suscipit lobortis
                                        nisl ut aliquip ex ea commodo consequat.
                                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio .

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6" style={{ padding: '0px 15px' }}>
                            <ul className="checklist list-unstyled">
                                <li className="mb-3 position-relative">
                                    <span className="badge position-relative me-5"><img style={{ marginLeft: '-10px', marginTop: '-6px' }} src="/svgs/check-class-2.svg"
                                        alt="check-class" /></span>
                                    <span className="poppins-light"
                                        style={{ background: '#2bb673', borderRadius: '45px', height: '85px', width: '355px', padding: '20px', fontWeight: 600 }}>Lorem
                                        ipsum dolor sit amet <p style={{ fontWeight: 100 }}>consectuer adipiscing</p></span>
                                    <button className="ms-4 d-flex align-items-center justify-content-center text-center"
                                        style={{ border: 'solid 4px #6873fb', borderRadius: '45px', height: '15px', width: '15px', padding: '20px', background: 'transparent' }}>
                                        <p className="fs-3" style={{ color: '#6873fb' }}>...</p>
                                    </button>
                                </li>
                                <li className="mb-3 position-relative">
                                    <span className="badge position-relative me-5"><img style={{ marginLeft: '-10px', marginTop: '-6px' }} src="/svgs/check-class-2.svg"
                                        alt="check-class" /></span>
                                    <span className="poppins-light"
                                        style={{ background: '#fbb040', borderRadius: '45px', height: '85px', width: '355px', padding: '20px', fontWeight: 600 }}>Lorem
                                        ipsum dolor sit amet <p style={{ fontWeight: 100 }}>consectuer adipiscing</p></span>
                                </li>
                                <li className="mb-3 position-relative">
                                    <span className="badge position-relative me-5"><img style={{ marginLeft: '-10px', marginTop: '-6px' }} src="/svgs/pending-class.svg"
                                        alt="check-class" /></span>
                                    <span className="poppins-light"
                                        style={{ background: '#ed1e79', borderRadius: '45px', height: '85px', width: '355px', padding: '20px', fontWeight: 600 }}>Lorem
                                        ipsum dolor sit amet <p style={{ fontWeight: 100 }}>consectuer adipiscing</p></span>
                                </li>
                                <li className="mb-3 position-relative">
                                    <span className="badge position-relative me-5"><img style={{ marginLeft: '-10px', marginTop: '-6px' }} src="/svgs/pending-class.svg"
                                        alt="check-class" /></span>
                                    <span className="poppins-light"
                                        style={{ background: '#1469e2', borderRadius: '45px', height: '85px', width: '355px', padding: '20px', fontWeight: 600 }}>Lorem
                                        ipsum dolor sit amet <p style={{ fontWeight: 100 }}>consectuer adipiscing</p></span>
                                </li>
                            </ul>
                            <div className="check-container" style={{ marginTop: '320px' }}>
                                <div className="form-check d-flex align-items-center" style={{ gap: '25px' }}>
                                    <input className="form-check-input custom-rounded me-0 mx-auto" type="checkbox" value=""
                                        id="customCheck1" style={{ marginTop: '-75px' }} checked={isChecked} onChange={handleCheckboxChange} />
                                    <label className="form-check-label poppins-light text-start" htmlFor="customCheck1"
                                        style={{ fontSize: '16px', fontWeight: 100, width: '420px', color: '#969696' }}>
                                        User Interface (UI) Design focuses on anticipating
                                        what users might need to do and ensuring that the
                                        interface has elements that are easy to access,
                                        understand, and use to facilitate those actions.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer PC */}
            <div className="d-none d-block d-lg-block" style={{ marginTop: '195px', position: 'relative', zIndex: 8 }}>
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
                <footer className="d-flex gradient-custom text-white p-4 p-md-5 text-center mx-auto flex-wrap"
                    style={{ maxWidth: '295px', height: '320px', marginTop: '95px' }}>
                    <div className="container p-2" style={{ marginTop: '5px' }}>
                        <h2 className="fs-2 champ-bold">Michigan's Store</h2>
                        <p className="mt-2 poppins-light">Aprender inglés nunca fue tan fácil</p>
                        <div className="d-flex justify-content-center mt-4 flex-wrap">
                            <i className="fa-brands fa-facebook mx-2" style={{ fontSize: '30px' }}></i>
                            <i className="fa-brands fa-instagram mx-2" style={{ fontSize: '30px' }}></i>
                            <i className="fa-brands fa-tiktok mx-2" style={{ fontSize: '30px' }}></i>
                            <i className="fa-brands fa-whatsapp mx-2" style={{ fontSize: '30px' }}></i>
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
        </div>
    )
}
