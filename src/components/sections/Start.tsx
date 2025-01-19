import '../../templates/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ScrollButton } from "../ScrollButton"
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Start = () => {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Previene el comportamiento por defecto (para el formulario)
        console.log("Formulario enviado");
    };

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

            <main className="container-fluid my-5" style={{ maxWidth: '2550px' }}>
                <section className="hero-section">
                    <div className="container position-relative">
                        <h1 className="champ-bold">Conoce el mundo mientras</h1>
                        <h1 className="champ-bold">
                            aprendes <img src="/svgs/Union.svg" style={{ verticalAlign: 'middle', width: 'auto', height: '7rem' }} alt="Ingles" />
                        </h1>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', marginTop: '50px', marginLeft: '-105px' }}>
                            <div className="col-md-4">
                                <div className="card-home" style={{ width: '695px', marginLeft: '140px' }}>
                                    <img src="/images/Products Explorers.png" className="card-img-top" style={{ height: '885px', marginTop: '232px', position: 'relative', zIndex: 1 }} alt="Carta 1" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-home" style={{ width: '575px', height: '950px', position: 'relative', zIndex: 1000 }}>
                                    <img src="/images/Products UpColors.png" className="card-img-top" style={{ marginTop: '60px', position: 'relative', zIndex: 2 }} alt="Carta 2" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-home" style={{ width: '695px', marginLeft: '-285px' }}>
                                    <img src="/images/Products Prismatic.png" className="card-img-top" style={{ height: '885px', marginTop: '232px', position: 'relative', zIndex: 3 }} alt="Carta 3" />
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
                                    <div className="center" style={{ marginLeft: '15px', position: 'relative', zIndex: 999 }}>
                                        <a href="./precios.html">
                                            <button id="circle" className="d-flex justify-content-center align-items-center rounded-pill text-white poppins-light" style={{ marginRight: '95px', marginTop: '-155px', width: '209px', height: '209px', borderRadius: '85px', backgroundColor: '#110059', color: '#ffffff', border: 'none' }}>
                                                todos los cursos todos los cursos
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="banner-image" style={{ height: '400px', width: '1100px', marginTop: '-10px', marginLeft: '-375px' }}>
                                        <img src="/images/seccion_2.png" alt="Michigan's Store" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                <section className="course-section">
                    <div className="container text-center">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="row">
                                <div className="col-5">
                                    <img
                                        style={{ width: '355px', height: '470px', marginTop: '-48px', marginRight: '-330px', position: 'relative', zIndex: 999 }}
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
                                        style={{ marginTop: '180px', width: '770px', height: '405.90px', marginLeft: '90px', transform: 'rotate(-10deg)' }}
                                        src="/svgs/Curvatura.svg"
                                        alt="Union 1"
                                    />
                                </div>
                                <div className="col-5">
                                    <img
                                        style={{ marginTop: '-395px', width: '785px', height: '408.79px', marginLeft: '-109px', transform: 'rotate(-10deg)' }}
                                        src="/svgs/Curvatura2.svg"
                                        alt="Union 2"
                                    />
                                </div>
                                <div className="card-home card-custom" style={{ height: '270px', width: '637px' }}>
                                    <div className="card-body">
                                        <h5 className="champ-bold" style={{ fontSize: '25px', marginTop: '95px' }}>Aprende a tu ritmo</h5>
                                        <img
                                            src="/images/conoce_mas.png"
                                            style={{ position: 'absolute', top: '-75px', marginLeft: '240px', height: '155px', width: '155px' }}
                                            alt="Card"
                                        />
                                        <img
                                            src="/images/06.png"
                                            style={{ position: 'absolute', top: '-80px', marginLeft: '-85px', height: '155px', width: '155px' }}
                                            alt="Card"
                                        />
                                        <p className="card-text poppins-light" style={{ padding: '80px', marginLeft: '10px', marginTop: '-75px' }}>
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
                                            <img
                                                src="/images/_1.png"
                                                style={{ position: 'relative', marginTop: '-125px', left: '7px', height: '70px', width: '70px' }}
                                                alt="Play 1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalInicioUno"
                                            />
                                            <div className="modal fade" id="modalInicioUno" tabIndex={-1} aria-labelledby="videoModalLabelQuienesSomos" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title poppins-light" id=" videoModalLabelQuienesSomos">Content</h5>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card-custom_4">
                            <div className="card-body">
                                <img
                                    src="/images/Person_2.png"
                                    style={{ marginLeft: '0px', height: '210px', width: '145px', marginTop: '52px' }}
                                    alt="Person 2"
                                />
                                <img
                                    src="/images/_2.png"
                                    style={{ position: 'relative', marginTop: '-125px', left: '-8px', height: '70px', width: '70px' }}
                                    alt="Play 2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalInicioDos"
                                />
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
                        <div className="card-custom_5">
                            <div className="card-body">
                                <img
                                    src="/images/Person_3.png"
                                    style={{ marginLeft: '0px', height: '210px', width: '145px', marginTop: '52px' }}
                                    alt="Person 3"
                                />
                                <img
                                    src="/images/_3.png"
                                    style={{ position: 'relative', marginTop: '-125px', left: '9px', height: '70px', width: '70px' }}
                                    alt="Play 3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalInicioTres"
                                />
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
                            <div className="card-body rounded rounded-2 p-0">
                                <img
                                    src="/images/C1.png"
                                    style={{ width: '220px', height: '384px', borderRadius: '10px', marginLeft: '1px' }}
                                    alt="Card-course_1"
                                />
                                <div className="overlay" style={{ background: 'linear-gradient(180deg, #de59f1, #9306dd)' }}>
                                    <p className="poppins-light">
                                        Es una experiencia de aprendizaje colorida que se desarrolla a través de "situaciones comunicativas", desde hacer check-in en un hotel hasta discutir arte e historia. Este programa de 3 módulos (Primary, Secondary y Tertiary) ofrece una experiencia educativa única y vibrante.
                                    </p>
                                </div>
                                <img
                                    src="/images/name_1.png"
                                    style={{ position: 'relative', marginTop: '-125px', left: '7px', height: '75px', width: '190px' }}
                                    alt="Name_1"
                                />
                            </div>
                        </div>
                        <div className="card-course_2" id="card2">
                            <div className="card-body rounded rounded-2 p-0">
                                <img
                                    src="/images/C2.png"
                                    style={{ width: '220px', height: '384px', marginLeft: '-2px' }}
                                    alt="Card-course_2"
                                />
                                <div className="overlay" style={{ background: 'linear-gradient(180deg, #72eec8, #00f1e7)' }}>
                                    <p className="poppins-light">
                                        En este programa se exploran los secretos de los tiempos verbales en inglés a través de un enfoque teórico. Compuesto por 13 video sessions distribuidas en 5 módulos, brinda una visión más profunda y estructurada para construir una base sólida en la gramática inglesa.
                                    </p>
                                </div>
                                <img
                                    src="/images/name_2.png"
                                    style={{ position: 'relative', marginTop: '-117px', left: '0px', height: '75px', width: '190px' }}
                                    alt="Name_2"
                                />
                            </div>
                        </div>
                        <div className="card-course_3" id="card3">
                            <div className="card-body rounded rounded-2 p-0">
                                <img
                                    src="/images/C3.png"
                                    style={{ width: '220px', height: '384px', marginLeft: '-2px' }}
                                    alt="Card-course_3"
                                />
                                <div className="overlay" style={{ background: 'linear-gradient(180deg, #0d9bf3, #0708f3)' }}>
                                    <p className="poppins-light">
                                        Diseñado para niños en la primera infancia, este programa ilustrado y colorido actúa como una guía divertida para crear bases comunicativas sólidas mientras disfrutan del proceso de aprendizaje del idioma.
                                    </p>
                                </div>
                                <img
                                    src="/images/name_3.png"
                                    style={{ position: 'relative', marginTop: '-117px', left: '0px', height: '130px', width: '200px' }}
                                    alt="Name_3"
                                />
                            </div>
                        </div>
                        <div className="card-course_4" id="card4">
                            <div className="card-body rounded rounded-2 p-0">
                                <img
                                    src="/images/C4.png"
                                    style={{ width: '220px', height: '384px', borderRadius: '10px', marginLeft: '1px' }}
                                    alt="Card-course_4"
                                />
                                <div className="overlay" style={{ background: 'linear-gradient(180deg, #fe7dbb, #e20737)' }}>
                                    <p className="poppins-light">
                                        Con 4 niveles (A1, A2, B1 y B2), este programa cuenta con un enfoque comunicativo. A través de conversaciones de la vida diaria, brinda la posibilidad de familiarizarse con el uso real de la lengua. Abroad ofrece una serie de herramientas para desarrollar habilidades de producción oral y escrita prestando especial atención a los rasgos fonéticos de la lengua y a la importancia de la autoevaluación en el proceso de aprendizaje.
                                    </p>
                                </div>
                                <img
                                    src="/images/name_4.png"
                                    style={{ position: 'relative', marginTop: '-150px', left: '0px', height: '205px', width: '210px' }}
                                    alt="Name_4"
                                />
                            </div>
                        </div>
                    </div>

                </section> 

                <section className="plan-section">
                    <div className="container text-center">
                        <a href="./precios.html" style={{ color: 'inherit' }}>
                            <button className="btn btn-custom poppins-light"
                                style={{ height: '50px', width: '330px', marginTop: '65px', transform: 'translateY(-20px)' }}>Ver
                                todos los planes</button>
                        </a>
                        <div className="d-flex content flex-column" style={{ maxHeight: '100vh', width: '890px', borderRadius: '45px' }}>
                            <div className="row" style={{ marginLeft: '-35px' }}>
                                <div className="d-none d-lg-flex">
                                    <section className="rounded rounded-5 p-0 col-md-6 gradient-section"
                                        style={{ marginRight: '0px', width: '225px', height: '470px', borderRadius: '45px', marginLeft: '190px' }}>
                                        <img src="/svgs/Frame 1000001569.svg" alt="UpColors"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                                    </section>
                                    <section className="rounded rounded-5 p-2 col-md-6 gradient-section"
                                        style={{ marginRight: '25px', width: '420px', height: '470px' }}>
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
                                                                style={{ marginLeft: '60px', transform: 'translateY(-5px)' }}>Full
                                                                <span className="bi bi-patch-check-fill"
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
                                                                    style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-15px)' }}>
                                                                    <span className="poppins-light text-white"
                                                                        style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-20px)' }}>Acceso
                                                                        a
                                                                        los 4 módulos</span>
                                                                </p>
                                                                <p className="fas fa-check"
                                                                    style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-20px)' }}>
                                                                    <span className="poppins-light text-white"
                                                                        style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-20px)' }}>¡Ve
                                                                        a tu
                                                                        ritmo!, visualiza upColors en el tiempo que mejor se
                                                                        adapte a tu
                                                                        aprendizaje.</span>
                                                                </p>
                                                                <p className="fas fa-check"
                                                                    style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-30px)' }}>
                                                                    <span className="poppins-light text-white"
                                                                        style={{ fontSize: '12px', marginLeft: '5px', transform: 'translateY(-30px)' }}>4
                                                                        sesiones
                                                                        en vivo.</span>
                                                                </p>
                                                                <p className="fas fa-check"
                                                                    style={{ fontSize: '12px', color: '#04baff', transform: 'translateY(-40px)' }}>
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
                                                                <a href="./checkout.html" style={{ color: 'inherit' }}>
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
                                                                </a>
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
                                                        <div className="row" style={{ marginTop: '-68px' }}>
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
                                                                    <a href="./checkout.html" style={{color: 'inherit'}}>
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
                                                                    </a>
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
                                                                    <a href="./checkout.html" style={{ color: 'inherit' }}>
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
                                                                    </a>
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
                                                                    <a href="./checkout.html" style={{ color: 'inherit' }}>
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
                                                                    </a>
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
                                                                    <a href="./checkout.html" style={{ color: 'inherit' }}>
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
                                                                    </a>
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
                                            <span style={{ fontSize: 'xx-large', marginLeft: '-139px' }}>Subscrición</span>
                                            <span style={{ fontSize: 'xx-large', marginLeft: '-192px' }}>mensual</span>
                                        </h2>
                                        <div className="poppins-light"
                                            style={{
                                                marginTop: '20px',
                                                fontSize: '12px',
                                                width: '299px',
                                                marginLeft: '-20px'
                                            }}>
                                            <p className="poppins-light"
                                                style={{
                                                    minHeight: '85px',
                                                    fontSize: '12px',
                                                    width: '299px',
                                                    marginLeft: '8px'
                                                }}>
                                                <span style={{ marginLeft: '4px' }}>Con tu membresia, accede libremente a todo
                                                    el</span>
                                                <span style={{ marginLeft: '-4px' }}>contenido que UpGrade tiene para ti,
                                                    además</span>
                                                <span style={{ marginLeft: '4px' }}>recibe beneficios exclusivos por 30 días.</span>
                                            </p>
                                        </div>
                                        <div className="d-flex col-7 ms-1" style={{ marginTop: '-40px' }}>
                                            <ol className="px-0 text-white" style={{ marginLeft: '-50px' }}>
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
                                            <a href="./checkout.html" style={{ color: 'inherit' }}>
                                                <button className="btn rounded-pill py-2 text-white fs-6 poppins-light bi-cart-plus"
                                                    style={{
                                                        backgroundColor: '#7955f8',
                                                        borderRadius: '150px',
                                                        width: '130px',
                                                        marginTop: '-115px',
                                                        marginLeft: '180px'
                                                    }}>
                                                    comprar</button>
                                            </a>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center grid gap-0 column-gap-4"
                        style={{
                            marginTop: '810px',
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
                                                transform: 'translateX(150px)'
                                            }}>comenzar
                                            ahora</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="faq-section">
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
                                        marginLeft: '-230px',
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
                                        marginLeft: '-60px'
                                    }}>
                                    dejar una pregunta
                                </button>
                            </div>
                            <div className="col-6" style={{ transform: 'translateX(35px)' }}>
                                <div className="accordion" id="faqAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header poppins-light">
                                            <button className="accordion-button faq-question" data-bs-toggle="collapse"
                                                data-bs-target="#faq1">
                                                <span style={{ color: '#ffffff' }}>
                                                    <strong className="mx-2"
                                                        style={{
                                                            fontWeight: 'normal',
                                                            color: '#2F0277',
                                                            fontSize: '19px'
                                                        }}>01</strong>¿Qué
                                                    es UpGrade?
                                                </span>
                                                <i className="fas fa-chevron-down" id="icon-faq1"></i>
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse">
                                            <div className="accordion-body poppins-light text-start" style={{ color: '#ffffff' }}>
                                                Nuestro concepto de marca gira en torno a la idea de un lugar donde el poder
                                                transformador
                                                de las experiencias inmersivas ayuda a mejorar las habilidades de comunicación
                                                en inglés.
                                                Estamos dedicados a cultivar ciudadanos globales que posean la confianza para
                                                conectarse,
                                                colaborar y tener éxito en el mundo interconectado de hoy.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header poppins-light">
                                            <button className="accordion-button faq-question" data-bs-toggle="collapse"
                                                data-bs-target="#faq2">
                                                <span style={{ color: '#ffffff' }}>
                                                    <strong className="mx-2"
                                                        style={{
                                                            fontWeight: 'normal',
                                                            color: '#2F0277',
                                                            fontSize: '19px'
                                                        }}>02</strong>¿Cómo
                                                    funciona el
                                                    programa?
                                                </span>
                                                <i className="fas fa-chevron-down" id="icon-faq1"></i>
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse">
                                            <div className="accordion-body poppins-light" style={{ color: '#ffffff' }}>
                                                Fometamos la inmersión en el idioma a través de la exposición
                                                constante a situaciones y materiales auténticos en ingles.
                                                Utilizamos una variedad de recursos, como videos, audios,
                                                artículos y conversaciones reales, para que los estudiantes se
                                                sumerjan en el idioma y se acostumbren a su uso cotidiano.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header poppins-light">
                                            <button className="accordion-button faq-question" data-bs-toggle="collapse"
                                                data-bs-target="#faq3">
                                                <span style={{ color: '#ffffff' }}>
                                                    <strong className="mx-2"
                                                        style={{
                                                            fontWeight: 'normal',
                                                            color: '#2F0277',
                                                            fontSize: '19px'
                                                        }}>03</strong>¿Qué
                                                    incluyen
                                                    mis cursos?
                                                </span>
                                                <i className="fas fa-chevron-down" id="icon-faq1"></i>
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse">
                                            <div className="accordion-body poppins-light" style={{ color: '#ffffff' }}>
                                                <ul className="text-start">
                                                    <li>Respectiva cantidad de horas semanales de desarrollo.</li>
                                                    <li>Plataforma Stark de National Geographic Learning.</li>
                                                    <li>Material National Geographic Learning.</li>
                                                    <li>Acceso a Plataforma. AcTime para programación de clases.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header poppins-light">
                                            <button className="accordion-button faq-question" data-bs-toggle="collapse"
                                                data-bs-target="#faq4">
                                                <span style={{ color: '#ffffff' }}>
                                                    <strong className="mx-2"
                                                        style={{
                                                            fontWeight: 'normal',
                                                            color: '#2F0277',
                                                            fontSize: '19px'
                                                        }}>04</strong>¿Qué
                                                    voy a
                                                    aprender?
                                                </span>
                                                <i className="fas fa-chevron-down" id="icon-faq1"></i>
                                            </button>
                                        </h2>
                                        <div id="faq4" className="accordion-collapse collapse">
                                            <div className="accordion-body poppins-light text-start" style={{ color: '#ffffff' }}>
                                                No solo las habilidades linguísticas necesarias para comunicarse
                                                en inglés, sino también desarrollar una compresión más amplia
                                                de la cultura y la sociedad de habla inglesa, lo que te prepararía
                                                para tener éxito en un entorno global clases.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header poppins-light">
                                            <button className="accordion-button faq-question" data-bs-toggle="collapse"
                                                data-bs-target="#faq5">
                                                <span style={{ color: '#ffffff' }}>
                                                    <strong className="mx-2"
                                                        style={{
                                                            fontWeight: 'normal',
                                                            color: '#2F0277',
                                                            fontSize: '19px'
                                                        }}>05</strong>¿Cómo
                                                    puedo
                                                    suscribirme?
                                                </span>
                                                <i className="fas fa-chevron-down" id="icon-faq1"></i>
                                            </button>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse">
                                            <div className="accordion-body poppins-light text-start" style={{ color: '#ffffff' }}>
                                                Ingresando a nuestra página web, debes ir a la sección de
                                                planes y escojer el plan de tu preferencia y proceder al pago. si
                                                quieres asesoría personalizada totalmente gratis, diligencia tus
                                                datos aquí.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header poppins-light">
                                            <button className="accordion-button faq-question" data-bs-toggle="collapse"
                                                data-bs-target="#faq6">
                                                <span style={{ color: '#ffffff' }}>
                                                    <strong className="mx-2"
                                                        style={{
                                                            fontWeight: 'normal',
                                                            color: '#2F0277',
                                                            fontSize: '19px'
                                                        }}>06</strong>¿Necesito
                                                    un
                                                    nivel en el idioma para poder tomar las clases?
                                                </span>
                                                <i className="fas fa-chevron-down" id="icon-faq1"></i>
                                            </button>
                                        </h2>
                                        <div id="faq6" className="accordion-collapse collapse">
                                            <div className="accordion-body poppins-light" style={{ color: '#ffffff' }}>
                                                No. Contamos con un exelente programa de iniciación llamado
                                                UpColors en donde podrás construir desde 0 los conocimientos
                                                neesarios a través de actividades dinámicas que adaptan el
                                                color como protagonista en el desarrollo de todos los temas.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header poppins-light">
                                            <button className="accordion-button faq-question" data-bs-toggle="collapse"
                                                data-bs-target="#faq7">
                                                <span style={{ color: '#ffffff' }}>
                                                    <strong className="mx-2"
                                                        style={{
                                                            fontWeight: 'normal',
                                                            color: '#2F0277',
                                                            fontSize: '19px'
                                                        }}>07</strong>¿Cuántos
                                                    niveles
                                                    Michigan's Store?
                                                </span>
                                                <i className="fas fa-chevron-down" id="icon-faq1"></i>
                                            </button>
                                        </h2>
                                        <div id="faq7" className="accordion-collapse collapse">
                                            <div className="accordion-body poppins-light text-start" style={{ color: '#ffffff' }}>
                                                Puedes encontrar cursos quevan desde el nivel A1 hasta el nivel C1.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="newsletter-section text-center text-light py-5">
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
                                    <p className="fas fa-check" style={{ fontSize: '15px', color: '#FF3E62' }}>
                                        <span className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso
                                            a los 4 módulos</span>
                                    </p>
                                        <p className="fas fa-check" style={{ fontSize: '15px', color: '#FF3E62' }}>
                                            <span className="poppins-light text-white text-start"
                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                aprendizaje.</span>
                                        </p>
                                            <p className="fas fa-check" style={{ fontSize: '15px', color: '#FF3E62' }}><span
                                                className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>4
                                                sesiones
                                                en vivo.</span></p>
                                                <p className="fas fa-check" style={{ fontSize: '15px', color: '#FF3E62' }}><span
                                                    className="poppins-light text-white" style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                    certificación de curso.</span></p>
                                            </ol>
                                        </div>
                                        <div className="col-10">
                                            <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                                                <input type="email" className="form-control custom-input poppins-light"
                                                    style={{
                                                        fontSize: '12px',
                                                        width: '416px',
                                                        height: '60px',
                                                        background: '#615D78',
                                                        borderRadius: '45px',
                                                        border: 'none',
                                                        marginLeft: '70px',
                                                        outline: 'none',
                                                        color: '#ffffff'
                                                    }}
                                                    placeholder="¡Ingresa tu correo!"/>
                                                    <button type="submit" className="btn btn-email ms-2 text-white" style={{ cursor: 'pointer' }}
                                                        id="toggleButton" data-state="plane">
                                                        <i className="fa-solid fa-paper-plane"
                                                            style={{ fontSize: '25px', marginLeft: '-6px', background: 'transparent' }}></i>
                                                        <i className="fa-solid fa-check icon-clicked"
                                                            style={{ fontSize: '25px', marginLeft: '-6px', color: '#04011D' }}></i>
                                                    </button>
                                            </form>
                                        </div>
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
        </div >
    );
};
