import '../../templates/css/styles.css';
import '../../templates/css/styles-nosotros.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ScrollButton } from "../ScrollButton"
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { initTestimonios } from '../../templates/ts/carousel-indicators-Us';
import { useEffect } from 'react';


export const Us = () => {

    useEffect(() => {
        initTestimonios();
    }, []);

    return (
        <div className="bg-main-purple" style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{ width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px' }}>
                <h1 className="champ-bold" style={{ margin: '0 0 0 -2px', marginTop: '-45px', fontSize: '18px' }}>Michigan's</h1>
                <h1 className="champ-bold" style={{ margin: '0 0 0 -123px', fontSize: '18px' }}>Store</h1>
                {/* Nav in PC */}
                <div className="d-none d-block d-lg-block">
                    <nav className="d-flex justify-content-between align-items-center"
                        style={{ maxWidth: '100%', marginRight: '470px', marginTop: '-30px' }}>
                        <a href="./inicio.html" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Inicio</a>
                        <a href="./cursos.html" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Cursos</a>
                        <a href="./precios.html" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Precios</a>
                        <a href="./nosotros.html" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Nosotros</a>
                        <a href="./blogs.html" className="text-white mx-4 poppins-bold enlace"
                            style={{ fontSize: '17px', textDecoration: 'none' }}>Blogs</a>
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
                        <li>
                            <hr className="dropdown-divider"></hr>
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

            {/* Contenido de la sección de Nosotros*/}
            <main className="container-fluid my-5">
                <section className="text-center text-white mt-5" style={{ width: '100vw' }}>
                    <h1 className="fs-2 poppins-bold" style={{ width: '34%', marginLeft: '500px', position: 'absolute', zIndex: 8 }}>
                        ¡Entendemos y solucionamos las distintas necesidades comunicativas de personas en todo el mundo!
                    </h1>
                    <div className="row justify-content-center align-items-center mt-4" style={{ height: '799px', position: 'relative', maxWidth: '1750px' }}>
                        <div className="col-md-6" style={{ marginLeft: '-650px' }}>
                            <img src="/images/cuadricula.png" style={{ position: 'relative', zIndex: 0, height: '510px', width: '100%', marginLeft: '200px' }} alt="Personas con gafas VR" className="img-fluid" />
                            <img src="/images/sombra.png" style={{ position: 'absolute', zIndex: 1, height: '810px', width: '100%', maxWidth: '100vw', marginLeft: '-455px', marginTop: '-700px' }} alt="Personas con gafas VR" className="img-fluid" />
                            <img src="/images/circunferencia.png" style={{ position: 'absolute', zIndex: -2, height: '610px', width: '550px', marginLeft: '30px', marginTop: '-335px' }} alt="Personas con gafas VR" className="img-fluid" />
                            <img src="/images/persons.png" style={{ position: 'absolute', zIndex: 3, height: '510px', width: '650px', marginLeft: '-50px', marginTop: '-390px' }} alt="Personas con gafas VR" className="img-fluid" />
                            <img src="/images/CHATBOT.png" style={{ position: 'absolute', zIndex: 4, height: '136px', width: '121px', marginLeft: '787px', marginTop: '-140px' }} alt="Personas con gafas VR" className="img-fluid" />{/* onClick={openChatbot} */}
                            <div id="chatbot-container">
                                <button id="chatbot-close" className="bi bi-x fs-2 text-white" style={{ background: '#351c76', borderRadius: '45px', border: 'none' }}></button>{/* onClick={closeChatbot}*/}
                                <iframe id="chatbot-frame" src="./chat-bot.html" title="Chatbot"></iframe>
                            </div>
                            <div className="position-absolute" style={{ top: '25%', left: '18%', zIndex: 5 }}>
                                <div className="d-flex flex-column">
                                    <div className="col" style={{ marginLeft: '150px' }}>
                                        <img src="/images/Avatar (1).png" style={{ height: '80px', width: '165px' }} alt="Avatar-1" />
                                    </div>
                                    <div className="col" style={{ marginLeft: '-95px' }}>
                                        <img src="/images/Avatar (2).png" style={{ height: '110px', width: '165px', marginTop: '-40px' }} alt="Avatar-2" />
                                    </div>
                                    <div className="col" style={{ marginLeft: '-160px' }}>
                                        <img src="/images/Avatar (3).png" style={{ height: '80px', width: '195px', marginTop: '20px' }} alt="Avatar-3" />
                                    </div>
                                    <div className="col" style={{ marginLeft: '-55px' }}>
                                        <img src="/images/Avatar (4).png" style={{ height: '80px', width: '165px', marginTop: '100px' }} alt="Avatar-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute" style={{ top: '35%', right: '22%', zIndex: 6 }}>
                                <div className="d-flex flex-column">
                                    <div className="col">
                                        <img src="/images/Avatar (5).png" style={{ height: '90px', width: '165px', marginTop: '-100px' }} alt="Avatar-5" />
                                    </div>
                                    <div className="col" style={{ marginLeft: '-150px' }}>
                                        <img src="/images/Avatar (6).png" style={{ height: '90px', width: '165px', marginTop: '-45px' }} alt="Avatar-6" />
                                    </div>
                                    <div className="col" style={{ marginLeft: '-390px' }}>
                                        <img src="/images/Avatar (7).png" style={{ height: '80px', width: '165px', marginTop: '-200px' }} alt="Avatar-7" />
                                    </div>
                                    <div className="col" style={{ marginLeft: '25px' }}>
                                        <img src="/images/Avatar (8).png" style={{ height: '100px', width: '165px', marginTop: '-35px' }} alt="Avatar-8" />
                                    </div>
                                    <div className="col" style={{ marginLeft: '-54px' }}>
                                        <img src="/images/Avatar (9).png" style={{ height: '90px', width: '235px', marginTop: '75px' }} alt="Avatar-9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section className="text-center text-white mt-5 img-font" style={{ width: '100vw' }}>
                    <h1 className="fs-3 poppins-bold" style={{
                        background: 'linear-gradient(to right, #170134, #271343)',
                        backgroundRepeat: 'repeat',
                        marginTop: '-200px',
                        marginLeft: '-15px',
                        padding: '40px 80px',
                        position: 'relative',
                        zIndex: 7,
                        color: 'white',
                        width: '100vw',
                        height: '285px',
                        textAlign: 'center'
                    }}>
                        <p style={{ marginLeft: '440px', width: '34%', fontWeight: 600 }}>
                            Toma las clases pregrabadas, y ve desbloqueando sesiones en vivo con tutores especializados en el idioma inglés.
                        </p>
                    </h1>
                    <div className="d-flex flex-row" style={{ marginTop: '90px' }}>
                        <div className="col-6">
                            <p className="fs-3 text-start" style={{ marginTop: '-50px', width: '270px', marginLeft: '170px' }}>
                                Tenemos distintas modalidades de aprendizaje, ¡Elije tu favorita!
                            </p>
                        </div>
                        <div className="col-6" style={{ marginLeft: '-180px' }}>
                            <img src="/images/ofert (1).png" style={{ height: '266px', width: '266px', marginLeft: '-360px', position: 'absolute', zIndex: 3, marginTop: '-80px' }} alt="Oferta 1" />
                            <img src="/images/ofert (2).png" style={{ height: '266px', width: '266px', marginLeft: '-130px', position: 'absolute', zIndex: 2, marginTop: '-80px' }} alt="Oferta 2" />
                            <img src="/images/ofert (3).png" style={{ height: '266px', width: '266px', marginLeft: '100px', position: 'absolute', zIndex: 1, marginTop: '-80px' }} alt="Oferta 3" />
                        </div>
                    </div>
                </section>

                <section className="text-white mt-5" style={{ width: '100vw' }}>
                    <div className="d-flex flex-row">
                        <div className="col" style={{ marginLeft: '85px' }}>
                            <img
                                src="/images/Quienes-somos.png"
                                style={{
                                    height: '135px',
                                    width: '135px',
                                    position: 'absolute',
                                    zIndex: 5,
                                    marginLeft: '585px',
                                    marginTop: '260px',
                                    maxWidth: '200px',
                                }}
                                alt="Dr. Jorge Franco"
                                className="rounded-circle img-fluid"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuienesSomos"
                            />
                            <div className="modal fade" id="modalQuienesSomos" tabIndex={-1} aria-labelledby="videoModalLabelQuienesSomos" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title poppins-light" id="videoModalLabelQuienesSomos">Content</h5>
                                            <button type="button" className="btn-close" style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }} data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <video width="100%" height="400" controls>
                                                <source src="./videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                Tu navegador no soporta la reproducción de video.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ position: 'relative', zIndex: 4, height: '375px', width: '585px', marginTop: '45px', marginLeft: '90px', borderRadius: '25px' }}>
                                <div className="card-body" style={{ height: '395px', width: '398px' }}>
                                    {/* Contenido de la tarjeta */}
                                </div>
                            </div>
                        </div>
                        <img src="/images/Font-Nosotros.png" style={{ position: 'absolute', zIndex: -4, marginTop: '-340px' }} alt="figura 1" />
                        <img src="/images/bombillo.png" style={{ position: 'absolute', zIndex: -5, marginTop: '-100px' }} alt="luz-font" />
                    </div>
                    <div className="col" style={{ marginLeft: '190px' }}>
                        <p className="text-center fs-4 poppins-bold" style={{ position: 'absolute', zIndex: 6, marginTop: '-380px', marginLeft: '640px' }}>Filosofía institucional</p>
                        <p className="text-start poppins-light" style={{ width: '500px', position: 'absolute', zIndex: 7, marginTop: '-310px', marginLeft: '640px' }}>
                            MICHIGAN MASTER S.A.S. está comprometida con una educación de excelente calidad a nivel local, nacional y a escala internacional, que propende por el desarrollo integral y diverso del ser humano en los ámbitos individual, social, laboral y cultural. A su vez, es capaz de contribuir a la transformación de su entorno social, enfocado en la capacidad de trascender las fronteras sociales, religiosas, filosóficas y económicas, para posicionarse como un agente de cambio, competente y dinamizador, en el respeto, la integridad, la confianza, la aceptación y la promoción de la diversidad cultural.
                        </p>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="d-flex" style={{ borderBottom: '1px solid #ff7d71', marginLeft: '455px', width: '330px', marginTop: '125px', position: 'absolute', zIndex: 10 }}></div>
                        <div className="col testimonio-container" style={{ marginTop: '110px', marginLeft: '170px' }}>
                            <h2 className="testimonio-titulo" style={{ color: '#ff7d71 !important' }}></h2>
                            <p className="testimonio-descripcion" style={{ maxWidth: '520px', maxHeight: '520px', height: '250px' }}></p>
                            <div className="d-flex" style={{ borderBottom: '1px solid #ff7d71', marginLeft: '-1px', width: '620px', marginTop: '-5px', position: 'absolute', zIndex: 10 }}></div>
                            <div className="testimonio-referencia">
                                <p className="gradient-text" style={{ marginBottom: '5px' }}></p>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="card-font" style={{ width: '453px', height: '406px', marginLeft: '105px', marginTop: '100px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title champ-bold text-center my-4">Misión</h5>
                                        <p className="card-text poppins-light text-center">
                                            "Facilitar el acceso y la excelencia en la enseñanza del idioma inglés a nivel mundial, a través de programas de aprendizaje en línea innovadores enfocados en que el usuario hable en el idioma lo más rápido posible centrando nuestros métodos educativos innovadores de alta calidad. Nuestra misión es ayudar a nuestros clientes a alcanzar sus metas personales y profesionales, brindándoles las herramientas necesarias para comunicarse con confianza en un mundo cada vez más globalizado."
                                        </p>
                                    </div>
                                </div>
                                <div className="card-font-2" style={{ width: '453px', height: '406px', marginLeft: '50px', marginTop: '100px' }}>
                                    <div className="card-body">
                                        <h5 className="card-title champ-bold text-center my-4">Visión</h5>
                                        <p className="card-text poppins-light text-center">
                                            Ser reconocidos como el principal referente en el mercado de programas de inglés en línea, destacándonos por nuestra excelencia educativa, innovación tecnológica y compromiso con el éxito de nuestros clientes. Aspiramos crear una comunidad global de aprendizaje en línea que promueva la diversidad cultural y el intercambio de conocimientos a través de innovación de nuevos modelos tecnológicos que faciliten la educación, siendo pioneros en el uso de herramientas como la realidad virtual en el aprendizaje.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ marginTop: '110px', marginLeft: '-550px' }}>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
                                <div className="carousel-indicators" style={{ margin: '0px 405px 0px 45px !important' }}>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active rounded-circle me-2" style={{ width: '10px', height: '10px' }} aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="rounded-circle" style={{ width: '10px', height: '10px' }} aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="rounded-circle ms-2" style={{ width: '10px', height: '10px' }} aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" style={{ marginTop: '-95px', height: '450px', marginLeft: '-15px' }}>
                                        <div style={{ background: '#fe706d', borderRadius: '50%', width: '290px', height: '290px', marginLeft: '80px', position: 'absolute', zIndex: 2, marginTop: '95px' }}>
                                            <img src="/images/person-nosotros-1.png" style={{ width: '220px', height: '270px', marginLeft: '80px', marginTop: '10px', position: 'relative', zIndex: 3 }} className="d-flex" alt="..." />
                                            <img src="/images/_3.png" style={{ height: '69px', width: '69px', marginTop: '-80px', marginLeft: '120px', position: 'absolute', zIndex: 4 }} className="d-flex" alt="..." data-bs-toggle="modal" data-bs-target="#videoModal" />
                                        </div>
                                    </div>
                                    <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="videoModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabel">Content</h5>
                                                    <button type="button" className="btn-close" style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }} data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="./videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{ marginTop: '-95px', height: '450px', marginLeft: '-15px' }}>
                                        <div style={{ background: '#69e4cc', borderRadius: '50%', width: '290px', height: '290px', marginLeft: '80px', position: 'absolute', zIndex: 2, marginTop: '95px' }}>
                                            <img src="/images/person-nosotros-2.png" style={{ width: '220px', height: '270px', marginLeft: '80px', marginTop: '10px', position: 'relative', zIndex: 3 }} className="d-flex" alt="..." />
                                            <img src="/images/_1.png" style={{ height: '69px', width: '69px', marginTop: '-80px', marginLeft: '120px', position: 'absolute', zIndex: 4 }} className="d-flex" alt="..." data-bs-toggle="modal" data-bs-target="#videoModal-2" />
                                        </div>
                                    </div>
                                    <div className="modal fade" id="videoModal-2" tabIndex={-1} aria-labelledby="videoModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabel">Content</h5>
                                                    <button type="button" className="btn-close" style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }} data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="./videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{ marginTop: '-95px', height: '450px', marginLeft: '-15px' }}>
                                        <div style={{ background: '#637dfc', borderRadius: '50%', width: '290px', height: '290px', marginLeft: '80px', position: 'absolute', zIndex: 2, marginTop: '95px' }}>
                                            <img src="/images/person-nosotros-3.png" style={{ width: '220px', height: '270px', marginLeft: '80px', marginTop: '10px', position: 'relative', zIndex: 3 }} className="d-flex" alt="..." />
                                            <img src="/images/_2.png" style={{ height: '69px', width: '69px', marginTop: '-80px', marginLeft: '120px', position: 'absolute', zIndex: 4 }} className="d-flex" alt="..." data-bs-toggle="modal" data-bs-target="#videoModal-3" />
                                        </div>
                                    </div>
                                    <div className="modal fade" id="videoModal-3" tabIndex={-1} aria-labelledby="videoModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title poppins-light" id="videoModalLabel">Content</h5>
                                                    <button type="button" className="btn-close" style={{ backgroundColor: '#5a3fc9', boxShadow: 'none', fontWeight: 700 }} data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <video width="100%" height="400" controls>
                                                        <source src="./videos/Aprende Inglés con Michigan Master.mp4" type="video/mp4" />
                                                        Tu navegador no soporta la reproducción de video.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" style={{ visibility: 'hidden' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" style={{ visibility: 'hidden' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-white mt-5 img-font-form" style={{ height: '520px', width: '100vw' }}>
                    <div className="d-flex flex-row">
                        <div className="col">
                            <p className="text-start poppins-light fs-4" style={{ marginTop: '380px', width: '343px', height: '123px', marginLeft: '320px' }}>
                                Elegir <span className="fs-2 champ-bold" style={{ lineHeight: '10px' }}>Michigan’s Store</span>
                                no es solo una opción,
                                <span className="fs-2 champ-bold" style={{ lineHeight: '10px' }}>es una experiencia</span>
                            </p>
                        </div>
                        <div className="col" style={{ maxWidth: '700px' }}>
                            <h2 className="text-center fs-4 poppins-bold" style={{ color: '#01C8FB' }}>
                                Dejanos tus datos y nos contactaremos contigo
                                contacto@michiganmaster.edu.co
                            </h2>
                            <form className="row g-3 mt-4">
                                <div className="col-md-6">
                                    <input type="text" className="form-control-final-section text-white poppins-light"
                                        style={{ height: '50px', width: '310px', textAlign: 'center' }} placeholder="nombre" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control-final-section text-white poppins-light"
                                        style={{ height: '50px', width: '310px', marginLeft: '-28px', textAlign: 'center' }} placeholder="teléfono" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control-final-section text-white poppins-light"
                                        style={{ height: '50px', width: '640px', textAlign: 'center' }} placeholder="correo electrónico" />
                                </div>
                                <div className="col-md-12">
                                    <select className="form-select form-control-final-section text-white text-center poppins-light"
                                        style={{ height: '50px', width: '640px', boxShadow: 'none !important', border: 'none !important', textAlign: 'center' }}>
                                        <option selected>estado actual</option>
                                        <option value="Estudiante">estudiante</option>
                                        <option value="Profesional">profesional</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control form-control-final-section text-white poppins-light"
                                        style={{ height: '50px', width: '640px', boxShadow: 'none !important', border: 'none !important', maxHeight: '250px', background: '#6A6391', textAlign: 'center' }}
                                        rows={3} placeholder="Mensaje"></textarea>
                                </div>
                                <div className="col-md-12">
                                    <p className="poppins-light text-center" style={{ fontSize: '10px', width: '410px', marginLeft: '125px' }}>
                                        Al dar clic en enviar mensaje aceptas las Políticas de Privacidad y protección de
                                        datos y doy mi consentimiento para ser contactado y recibir información de
                                        Michigan Master y Michigan’s Store por medio de correo electrónico y/o teléfono.
                                    </p>
                                </div>
                                <div className="col-12 text-center" style={{ marginLeft: '-20px' }}>
                                    <button type="submit" className="btn btn-primary-final-section text-white poppins-light text-with-shadow"
                                        style={{ fontWeight: 500 }}>Comenzar Ahora</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer PC */}
            <div className="d-none d-block d-lg-block" style={{ marginTop: '195px' }}>
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
                            <p className="poppins-light"
                                style={{ fontSize: '15px', color: '#a9aeeb', marginTop: '-15px', marginLeft: '55px' }}>@2025 Michigan's
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
            <ScrollButton />
        </div>
    );
};