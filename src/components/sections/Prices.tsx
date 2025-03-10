import '../../templates/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ScrollButton } from '../scroll-button/ScrollButton';
import { initEnlaceHandler } from "../../templates/ts/link-handler";
import { useEffect, useRef, useState } from 'react';
import { YearDisplay } from '../Year/YearDisplay';
import { Link } from 'react-router-dom';


export const Prices = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [currentYear, setcurrentYear] = useState<number>(new Date().getFullYear());
    useEffect(() => {
        initEnlaceHandler();
    }, []);

    return (
        <div className="bg-main-purple" style={{ overflowX: 'hidden', overflowY: 'scroll', height: '100vh' }} ref={containerRef}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{ width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px' }}>
                <h1 className="champ-bold" style={{ margin: '0 0 0 -2px', marginTop: '-45px', fontSize: '18px' }}>Michigan's</h1>
                <h1 className="champ-bold" style={{ margin: '0 0 0 -140px', fontSize: '18px', transform: 'translateY(-7px)' }}>Store</h1>
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
                        style={{ whiteSpace: 'nowrap', width: '100%', marginTop: '2px' }}>
                        <div style={{ marginTop: '200px' }}>
                            {/* <a to="#" className="text-white mx-2 poppins-bold">Inicio</a>
                            <a to="#" className="text-white mx-2 poppins-bold">Cursos</a>
                            <a to="#" className="text-white mx-2 poppins-bold">Precios</a>
                            <a to="#" className="text-white mx-2 poppins-bold">Nosotros</a>
                            <a to="#" className="text-white mx-2 poppins-bold">Blogs</a> */}
                        </div>
                    </nav>
                </div>
                <div className="dropdown d-flex align-items-center" style={{ marginTop: '-35px' }}>
                    <img src="images/Ellipse 840.png" alt="User Avatar" className="rounded-circle me-2" width="50" height="50"
                        data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }} />
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><Link className="dropdown-item text-white poppins-light mb-2" to="/avatar"
                            style={{ backgroundColor: ' #7955f8', fontSize: 'small', borderRadius: '25px' }}>Ver perfil</Link></li>
                        <li>
                            <hr className="dropdown-divider"></hr>
                        </li>
                        <li><Link className="dropdown-item text-white poppins-light" to="/"
                            style={{ backgroundColor: ' #7955f8', fontSize: 'small', borderRadius: '25px' }}>Cerrar sesión</Link></li>
                    </ul>
                    <div className="d-flex fs-3 bg-secondary rounded-circle  text-black  justify-content-center me-3"
                        style={{ height: '50px', width: '50px' }}>
                        <i className="text-center  bi-three-dots-vertical" data-bs-toggle="dropdown"
                            style={{ cursor: 'pointer', backgroundColor: '#a19aac', display: 'flex', padding: '12px', borderRadius: '25px' }}></i>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><Link className="dropdown-item text-white poppins-light mb-2" to="/user_account_configuration"
                                style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Configuración</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container-fluid d-flex justify-content-center" style={{ marginTop: '35px' }}>
                <div className="d-flex content flex-column grid gap-6"
                    style={{ width: '890px', overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', borderRadius: '45px', maxHeight: '100%', height: '750px' }}>
                    <div className="row gy-4">
                        {/* Course-1 */}
                        <div className="d-none d-lg-flex">
                            <section className="rounded rounded-5 p-0 col-md-6 gradient-section"
                                style={{ marginRight: '0px', width: '255px', height: '550px', borderRadius: '45px' }}>
                                <img src="./svgs/Frame 1000001569.svg" alt="UpColors"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                            </section>
                            <section className="rounded rounded-5 p-2 col-md-6 gradient-section"
                                style={{ marginRight: '25px', width: '610px', height: '550px' }}>
                                <div className="row">
                                    <div className="col text-start">
                                        <h2 className="champ-bold text-white ms-4" style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                            UpColors
                                        </h2>
                                        <p className="poppins-light"
                                            style={{ minHeight: '100px', fontSize: '15px', marginLeft: '27px', width: '520px' }}>
                                            Con un enfoque comunicativo
                                            clave,
                                            este programa explora la comunicación contextualizada en
                                            situaciones
                                            reales. Introduciendo temas de fonética básica. Las 40 sesiones de video divididas
                                            en 4
                                            módulos
                                            construyen habilidades esenciales de comunicación.</p>
                                        <div style={{ marginTop: '-8px', marginLeft: '-8px' }}>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="fs-4 champ-semibold" style={{ marginLeft: '60px' }}>Full
                                                        <span className="bi bi-patch-check-fill mx-2"
                                                            style={{ color: '#00cdff', background: 'white', borderRadius: '50%', fontSize: '20px', width: '15px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}></span>
                                                    </h3>
                                                    <ol>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#04baff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso a
                                                                los 4 módulos</span>
                                                        </p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#04baff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                                aprendizaje.</span>
                                                        </p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#04baff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>4 sesiones
                                                                en vivo.</span></p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#04baff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                                certificación de curso.</span></p>
                                                    </ol>
                                                </div>
                                                <div className="col-5 mt-2">
                                                    <div className="text-center" style={{ marginLeft: '65px' }}>
                                                        <span className="champ-bold text-wrap"
                                                            style={{ maxHeight: '185px', fontSize: '55px' }}>
                                                            <span></span>37.
                                                            <span
                                                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <sup
                                                                    style={{ marginLeft: '105px', marginTop: '-37px', fontSize: '30px' }}>80
                                                                    <p className="fs-5 poppins-light" style={{ marginLeft: '58px' }}>$</p>
                                                                </sup>
                                                                <p
                                                                    style={{ fontSize: '16px', marginLeft: '140px', marginTop: '-25px' }}>
                                                                    USD</p>
                                                                {/*<sub>USD</sub>*/}
                                                            </span>
                                                        </span>
                                                        <Link to="/checkout">
                                                            <button
                                                                className="button-purple rounded-pill px-4 py-1 champ-semibold text-center bi-cart-plus"
                                                                style={{ width: '145px', height: '55px', marginTop: '40px', marginLeft: '17px', border: 'none', zIndex: 10, position: 'relative' }}>
                                                                comprar</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="d-flex"
                                                    style={{ borderBottom: '1px solid #ffffff', marginLeft: '47px', width: '530px', transform: 'translateY(-15px)' }}>
                                                </div>
                                            </div>
                                            <div className="d-inline">
                                                <div className="row" style={{ marginTop: '-15px' }}>
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Modulo 1</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>12
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>
                                                            8.10 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '-6px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-12px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex align-items-center  grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Modulo 2</p>
                                                        <p className="poppins-light p-1"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>12
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '48px', fontSize: '15px' }}>
                                                            8.10 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '-6px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-12px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Modulo 3</p>
                                                        <p className="poppins-light p-1"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>7
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '54px', fontSize: '15px' }}>
                                                            10.8 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '-6px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-12px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Modulo 4</p>
                                                        <p className="poppins-light p-1"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>9
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '54px', fontSize: '15px' }}>
                                                            10.8 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '-6px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-12px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
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
                        </div>
                        {/* Course-2 */}
                        <div className="d-none d-lg-flex">
                            <section className="rounded rounded-5 p-0 col-md-6 gradient-section-2"
                                style={{ marginRight: '0px', width: '255px', height: '550px', borderRadius: '45px' }}>
                                <img src="svgs/Rectangle (1).svg" alt="Prismatic"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                            </section>
                            <section className="rounded rounded-5 p-2 col-md-6 gradient-section-2"
                                style={{ marginRight: '25px', width: '610px', height: '550px' }}>
                                <div className="row">
                                    <div className="col text-start">
                                        <h2 className="champ-bold text-white ms-4" style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                            Prismatic
                                        </h2>
                                        <p className="poppins-light"
                                            style={{ minHeight: '100px', fontSize: '15px', marginLeft: '27px', width: '520px' }}>
                                            Es una experiencia de aprendizaje colorida que se desarrolla a través de
                                            "situaciones
                                            comunicativas",
                                            desde hacer check-in en un hotel hasta discutir arte e historia.
                                            Este programa de 3 módulos(Primary, Secondary y Terciary) ofrece una experiencia
                                            educativa única.</p>
                                        <div style={{ marginTop: '-8px', marginLeft: '-8px' }}>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="fs-4 champ-semibold" style={{ marginLeft: '60px' }}>Full
                                                        <span className="bi bi-patch-check-fill mx-2"
                                                            style={{ color: '#00cdff', background: 'white', borderRadius: '50%', fontSize: '20px', width: '15px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}></span>
                                                    </h3>
                                                    <ol>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#f09fff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso a
                                                                los 4 módulos</span>
                                                        </p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#f09fff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                                aprendizaje.</span>
                                                        </p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#f09fff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>4 sesiones
                                                                en vivo.</span></p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#f09fff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                                certificación de curso.</span></p>
                                                    </ol>
                                                </div>
                                                <div className="col-5 mt-2">
                                                    <div className="text-center" style={{ marginLeft: '-7px' }}>
                                                        <span className="champ-bold text-wrap"
                                                            style={{ maxHeight: '185px', fontSize: '55px' }}>
                                                            <span></span>45.
                                                            <span
                                                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <sup
                                                                    style={{ marginLeft: '105px', marginTop: '-37px', fontSize: '30px' }}>00
                                                                    <p className="fs-5 poppins-light" style={{ marginLeft: '60px' }}>$</p>
                                                                </sup>
                                                                <p
                                                                    style={{ fontSize: '16px', marginLeft: '140px', marginTop: '-20px' }}>
                                                                    USD</p>
                                                                {/* <sub>USD</sub>  */}
                                                            </span>
                                                        </span>
                                                        <Link to="/checkout">
                                                            <button
                                                                className="gradient-section-2 rounded-pill px-4 py-1 champ-semibold text-center bi-cart-plus"
                                                                style={{ width: '145px', height: '55px', marginTop: '40px', marginLeft: '25px', border: 'none', zIndex: 10, position: 'relative' }}>
                                                                comprar</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="d-flex"
                                                    style={{ borderBottom: '1px solid #ffffff', marginLeft: '47px', width: '530px', transform: 'translateY(-15px)' }}>
                                                </div>
                                            </div>
                                            <div className="d-inline">
                                                <div className="row" style={{ marginTop: '-9px' }}>
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#f09fff', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Primary</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>23
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '48px', fontSize: '15px' }}>
                                                            10.8 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '36px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex align-items-center  grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#f09fff', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Secondary</p>
                                                        <p className="poppins-light p-1"
                                                            style={{ marginLeft: '25px', fontSize: '15px' }}>23
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '52px', fontSize: '15px' }}>
                                                            10.8 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '36px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#f09fff', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Tertiary</p>
                                                        <p className="poppins-light p-1"
                                                            style={{ marginLeft: '50px', fontSize: '15px' }}>23
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '52px', fontSize: '15px' }}>
                                                            10.8 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '36px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col text-start px-4 py-2" style={{ marginLeft: '-105px' }}>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* Course-3 */}
                        <div className="d-none d-lg-flex">
                            <section className="rounded rounded-5 p-0 col-md-6 gradient-section-3"
                                style={{ marginRight: '0px', width: '255px', height: '555px', borderRadius: '45px' }}>
                                <img src="svgs/Rectangle (2).svg" alt="Fundamentals"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                            </section>
                            <section className="rounded rounded-5 p-2 col-md-6 gradient-section-3"
                                style={{ marginRight: '25px', width: '610px', height: '555px' }}>
                                <div className="row">
                                    <div className="col text-start">
                                        <h2 className="champ-bold text-white ms-4" style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                            Fundamentals
                                        </h2>
                                        <p className="poppins-light"
                                            style={{ minHeight: '100px', fontSize: '15px', marginLeft: '27px', width: '520px' }}>
                                            En este programa se exploran los secretos de los tiempos
                                            verbales en inglés a través de un enfoque teórico.
                                            Compuesto por 13 video sesiones distribuidas en 5
                                            módulos, brinda una visión más profunda y estructurada
                                            para construir una base sólida en la gramática inglesa.</p>
                                        <div style={{ marginTop: '-8px', marginLeft: '-8px' }}>
                                            <div className="row">
                                                <div className="col-7" style={{ marginTop: '-15px' }}>
                                                    <h3 className="fs-4 champ-semibold" style={{ marginLeft: '60px' }}>Full
                                                        <span className="bi bi-patch-check-fill mx-2"
                                                            style={{ color: '#00cdff', background: 'white', borderRadius: '50%', fontSize: '20px', width: '15px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}></span>
                                                    </h3>
                                                    <ol className='mb-4'>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#8df7a3' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', color: '#8df7a3', marginLeft: '5px' }}>Acceso a
                                                                los 6 módulos</span>
                                                        </p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#8df7a3'}}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', color: '#8df7a3', marginLeft: '5px'}}>¡Ve a tu
                                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                                aprendizaje.</span>
                                                        </p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#8df7a3' }}>
                                                            <FontAwesomeIcon icon={faCheck} /><span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', color: '#8df7a3', marginLeft: '5px' }}>4 sesiones
                                                                en vivo.</span></p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#8df7a3' }}>
                                                            <FontAwesomeIcon icon={faCheck} /><span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', color: '#8df7a3', marginLeft: '5px' }}>Recibe
                                                                certificación de curso.</span></p>
                                                    </ol>
                                                </div>
                                                <div className="col-5 mt-2">
                                                    <div className="text-center" style={{ marginLeft: '-7px' }}>
                                                        <span className="champ-bold text-wrap"
                                                            style={{ maxHeight: '185px', fontSize: '55px' }}>
                                                            <span></span>27.
                                                            <span
                                                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <sup
                                                                    style={{ marginLeft: '105px', marginTop: '-37px', fontSize: '30px' }}>00
                                                                    <p className="fs-5 poppins-light" style={{ marginLeft: '55px' }}>$</p>
                                                                </sup>
                                                                <p
                                                                    style={{ fontSize: '16px', marginLeft: '135px', marginTop: '-20px' }}>
                                                                    USD</p>
                                                                {/* <sub>USD</sub> */}
                                                            </span>
                                                        </span>
                                                        <Link to="/checkout">
                                                            <button
                                                                className="gradient-section-3 rounded-pill px-4 py-1 champ-semibold text-center bi-cart-plus"
                                                                style={{ width: '145px', height: '55px', marginTop: '40px', marginLeft: '25px', border: 'none', zIndex: 10, position: 'relative' }}>
                                                                comprar</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="d-flex"
                                                    style={{ borderBottom: '1px solid #ffffff', marginLeft: '47px', width: '531px', transform: 'translateY(-22px)' }}>
                                                </div>
                                            </div>
                                            <div className="d-inline"
                                                style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
                                                <div className="row" style={{ marginTop: '-25px' }}>
                                                    <div className="col d-flex align-items-center grid gap-y-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-18px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#8df7a3', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2" style={{ marginLeft: '9px', fontSize: '12px' }}>
                                                            Verb'to Be'</p>
                                                        <p className="poppins-light p-0"
                                                            style={{ marginLeft: '24px', fontSize: '12px' }}>
                                                            Present Past Future</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '100px', fontSize: '12px' }}>
                                                            6.30 $</p>
                                                        <div className="d-flex ms-auto"
                                                            style={{ marginRight: '40px', marginTop: '20px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginBottom: '-1px', marginTop: '-30px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row" style={{ marginTop: '-10px' }}>
                                                    <div className="col d-flex align-items-center  grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#8df7a3', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2" style={{ marginLeft: '0px', fontSize: '12px' }}>
                                                            The present</p>
                                                        <p className="poppins-light p-0" style={{ marginLeft: '9px', fontSize: '12px' }}>
                                                            Simple present Present continuos</p>
                                                        <p className="poppins-light p-2" style={{ marginLeft: '5px', fontSize: '12px' }}>
                                                            6.30 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '40px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light my-3"
                                                                    style={{ marginTop: '-40px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row" style={{ marginTop: '-9px' }}>
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#8df7a3', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2" style={{ marginLeft: '0px', fontSize: '12px' }}>
                                                            The past</p>
                                                        <p className="poppins-light p-0"
                                                            style={{ marginLeft: '27px', fontSize: '12px' }}>
                                                            Simple past Past continuos</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '44px', fontSize: '12px' }}>
                                                            6.30 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '40px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light my-3"
                                                                    style={{ marginBottom: '20px', marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row" style={{ marginTop: '-9px' }}>
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#8df7a3', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-2" style={{ marginLeft: '0px', fontSize: '12px' }}>
                                                            The future</p>
                                                        <p className="poppins-light p-0"
                                                            style={{ marginLeft: '20px', fontSize: '12px' }}>
                                                            Simple future Future continuos</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '23px', fontSize: '12px' }}>
                                                            6.30 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '40px' }}>
                                                           <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light my-3"
                                                                    style={{ marginBottom: '20px', marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row" style={{ marginTop: '-10px' }}>
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p
                                                            style={{ fontSize: '7px', color: '#8df7a3', marginLeft: '33px' }}><FontAwesomeIcon icon={faCircle} /></p>
                                                        <p className="poppins-light p-1" style={{ marginLeft: '4px', fontSize: '12px' }}>
                                                            Perfect tenses</p>
                                                        <p className="poppins-light p-0 mt-2"
                                                            style={{ marginLeft: '-1px', fontSize: '12px', maxWidth: '230px' }}>
                                                            Present
                                                            perfect Past perfect Future perfect</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-25px', fontSize: '12px', marginTop: '-8px' }}>
                                                            6.30 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '40px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light my-3"
                                                                    style={{ marginBottom: '20px', marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* Course-4 */}
                        <div className="d-none d-lg-flex">
                            <section className="rounded rounded-5 p-0 col-md-6 gradient-section-4"
                                style={{ marginRight: '0px', width: '255px', height: '550px', borderRadius: '45px' }}>
                                <img src="svgs/Rectangle (3).svg" alt="Abroad"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                            </section>
                            <section className="rounded rounded-5 p-2 col-md-6 gradient-section-4"
                                style={{ marginRight: '25px', width: '610px', height: '550px' }}>
                                <div className="row">
                                    <div className="col text-start">
                                        <h2 className="champ-bold text-white ms-4" style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                            Abroad
                                        </h2>
                                        <p className="poppins-light"
                                            style={{ minHeight: '100px', fontSize: '15px', marginLeft: '27px', width: '520px' }}>
                                            Con 4 niveles (A1,A2,B1,B2), este programa cuenta con
                                            un enfoque comunicativo. A través de conversaciones
                                            de la vida diaria, brinda la posibilidad de famaliarizarse
                                            con el uso real de la lengua. Abroad ofrece una serie de
                                            producción oral y escrita prestando especial atención a
                                            los rasgos fonéticos de la lengua y a la importancia de
                                            la autoevaluación en el proceso de aprendizaje.</p>
                                        <div style={{ marginTop: '45px', marginLeft: '-8px' }}>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="fs-4 champ-semibold" style={{ marginLeft: '60px' }}>Full
                                                        <span className="bi bi-patch-check-fill mx-2"
                                                            style={{ color: '#ffcad7', background: 'white', borderRadius: '50%', fontSize: '20px', width: '15px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}></span>
                                                    </h3>
                                                    <ol>
                                                        <p style={{ fontSize: '15px', color: '#ffcad7' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso a
                                                                los 4 módulos</span>
                                                        </p>
                                                        <p style={{ fontSize: '15px', color: '#ffcad7' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                                aprendizaje.</span>
                                                        </p>
                                                        <p style={{ fontSize: '15px', color: '#ffcad7' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>4 sesiones
                                                                en vivo.</span></p>
                                                        <p style={{ fontSize: '15px', color: '#ffcad7' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                                certificación de curso.</span></p>
                                                    </ol>
                                                </div>
                                                <div className="col-4" style={{ marginTop: '12px' }}>
                                                    <div className="text-center" style={{ marginLeft: '5px' }}>
                                                        <span className="champ-bold text-wrap"
                                                            style={{ maxHeight: '185px', fontSize: '105px' }}>
                                                            <span></span>90.
                                                            <span
                                                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <sup
                                                                    style={{ marginLeft: '160px', marginTop: '-90px', fontSize: '30px' }}>00
                                                                    <p className="fs-5 poppins-light" style={{ marginLeft: '58px' }}>$</p>
                                                                </sup>
                                                                <p
                                                                    style={{ fontSize: '16px', marginLeft: '195px', marginTop: '-20px' }}>
                                                                    USD</p>
                                                                {/* <sub>USD</sub>  */}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div style={{ marginTop: '-20px' }}>
                                                        <Link to="/checkout">
                                                            <button
                                                                className="gradient-section-4 rounded-pill px-4 py-0 champ-semibold text-center bi-cart-plus"
                                                                style={{ width: '145px', height: '55px', marginLeft: '62px', border: 'none', zIndex: 10, position: 'relative' }}>
                                                                comprar</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* Course-5 */}
                        <div className="d-none d-lg-flex">
                            <section className="rounded rounded-5 p-0 col-md-6 gradient-section-5"
                                style={{ marginRight: '0px', width: '255px', height: '550px', borderRadius: '45px' }}>
                                <img src="svgs/Rectangle (4).svg" alt="Explorers"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                            </section>
                            <section className="rounded rounded-5 p-2 col-md-6 gradient-section-5"
                                style={{ marginRight: '25px', width: '610px', height: '550px' }}>
                                <div className="row">
                                    <div className="col text-start">
                                        <h2 className="champ-bold text-white ms-4" style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                            Explorers
                                        </h2>
                                        <p className="poppins-light"
                                            style={{ minHeight: '100px', fontSize: '15px', marginLeft: '27px', width: '520px' }}>
                                            Para aquellos sin experiencia en inglés, este programa
                                            se centra en la comprensión y pronunciación básica.
                                            Con 19 sesiones de video, proporciona un punto de
                                            partida sólido para los principiantes, explorando el
                                            vocabulario y las estructuras gramaticales esenciales.</p>
                                        <div style={{ marginTop: '45px', marginLeft: '-8px' }}>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="fs-4 champ-semibold" style={{ marginLeft: '60px' }}>Full
                                                        <span className="bi bi-patch-check-fill mx-2"
                                                            style={{ color: '#ffcad7', background: 'white', borderRadius: '50%', fontSize: '20px', width: '15px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}></span>
                                                    </h3>
                                                    <ol>
                                                        <p style={{ fontSize: '15px', color: '#ffcad7' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso a
                                                                los 4 módulos</span>
                                                        </p>
                                                        <p style={{ fontSize: '15px', color: '#ffcad7' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                                aprendizaje.</span>
                                                        </p>
                                                        <p style={{ fontSize: '15px', color: '#ffcad7' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>4 sesiones
                                                                en vivo.</span></p>
                                                        <p style={{ fontSize: '15px', color: '#ffcad7' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                                certificación de curso.</span></p>
                                                    </ol>
                                                </div>
                                                <div className="col-4" style={{ marginTop: '12px' }}>
                                                    <div className="text-center" style={{ marginLeft: '5px' }}>
                                                        <span className="champ-bold text-wrap"
                                                            style={{ maxHeight: '185px', fontSize: '105px' }}>
                                                            <span></span>36.
                                                            <span
                                                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <sup
                                                                    style={{ marginLeft: '145px', marginTop: '-90px', fontSize: '30px' }}>00
                                                                    <p className="fs-5 poppins-ligth" style={{ marginLeft: '60px' }}>$</p>
                                                                </sup>
                                                                <p
                                                                    style={{ fontSize: '16px', marginLeft: '185px', marginTop: '-20px' }}>
                                                                    USD</p>
                                                                {/* <sub>USD</sub> */}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div style={{ marginTop: '-20px' }}>
                                                        <Link to="/checkout">
                                                            <button
                                                                className="gradient-section-5 rounded-pill px-4 py-0 champ-semibold text-center bi-cart-plus"
                                                                style={{ width: '145px', height: '55px', marginLeft: '60px', color: 'gradient-section-5', backgroundColor: '#ffffff', border: 'none', zIndex: 10, position: 'relative' }}>
                                                                comprar</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* Course-6 */}
                        <div className="d-none d-lg-flex">
                            <section className="rounded rounded-5 p-0 col-md-6 gradient-section-6"
                                style={{ marginRight: '0px', width: '255px', height: '550px', borderRadius: '45px' }}>
                                <img src="svgs/Rectangle (5).svg" alt="UpColors"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                            </section>
                            <section className="rounded rounded-5 p-2 col-md-6 gradient-section-6"
                                style={{ marginRight: '25px', width: '610px', height: '550px' }}>
                                <div className="row">
                                    <div className="col text-start">
                                        <h2 className="champ-bold text-white ms-4" style={{ marginTop: '15px', fontSize: 'xx-large' }}>
                                            Kids
                                        </h2>
                                        <p className="poppins-light"
                                            style={{ minHeight: '100px', fontSize: '15px', marginLeft: '27px', width: '520px' }}>
                                            Diseñado para niños en la primera infancia, este programa
                                            ilustrado y colorido actúa como una guía divertida para
                                            crear bases comunicativas sólidas mientras disfrutan del
                                            proceso de aprendizaje del idioma.</p>
                                        <div style={{ marginTop: '-8px', marginLeft: '-8px' }}>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="fs-4 champ-semibold" style={{ marginLeft: '60px' }}>Full
                                                        <span className="bi bi-patch-check-fill mx-2"
                                                            style={{ color: '#00cdff', background: 'white', borderRadius: '50%', fontSize: '20px', width: '15px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}></span>
                                                    </h3>
                                                    <ol>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#04baff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Acceso a
                                                                los 4 módulos</span>
                                                        </p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#04baff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>¡Ve a tu
                                                                ritmo!, visualiza upColors en el tiempo que mejor se adapte a tu
                                                                aprendizaje.</span>
                                                        </p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#04baff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>4 sesiones
                                                                en vivo.</span></p>
                                                        <p className='prices' style={{ fontSize: '15px', color: '#04baff' }}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                            <span
                                                                className="poppins-light text-white"
                                                                style={{ fontSize: '15px', marginLeft: '5px' }}>Recibe
                                                                certificación de curso.</span></p>
                                                    </ol>
                                                </div>
                                                <div className="col-5 mt-2">
                                                    <div className="text-center" style={{ marginLeft: '65px' }}>
                                                        <span className="champ-bold text-wrap"
                                                            style={{ maxHeight: '185px', fontSize: '55px' }}>
                                                            <span></span>45.
                                                            <span
                                                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <sup
                                                                    style={{ marginLeft: '105px', marginTop: '-37px', fontSize: '30px' }}>00
                                                                    <p className="fs-5 poppins-light" style={{ marginLeft: '60px' }}>$</p>
                                                                </sup>
                                                                <p
                                                                    style={{ fontSize: '16px', marginLeft: '140px', marginTop: '-20px' }}>
                                                                    USD</p>
                                                                {/* <sub>USD</sub>  */}
                                                            </span>
                                                        </span>
                                                        <Link to="/checkout">
                                                            <button
                                                                className="gradient-section-6 rounded-pill px-4 py-1 champ-semibold text-center bi-cart-plus"
                                                                style={{ width: '145px', height: '55px', marginTop: '40px', marginLeft: '17px', border: 'none', zIndex: 10, position: 'relative' }}>
                                                                comprar</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="d-flex"
                                                    style={{ borderBottom: '1px solid #ffffff', marginLeft: '47px', width: '530px', transform: 'translateY(-15px)' }}>
                                                </div>
                                            </div>
                                            <div className="d-inline">
                                                <div className="row" style={{ marginTop: '-18px' }}>
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p className="fas fa-circle"
                                                            style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Modulo 1</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>12
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>
                                                            8.10 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '-6px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex align-items-center  grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p className="fas fa-circle"
                                                            style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Modulo 2</p>
                                                        <p className="poppins-light p-1"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>12
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '48px', fontSize: '15px' }}>
                                                            8.10 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '-6px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p className="fas fa-circle"
                                                            style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Modulo 3</p>
                                                        <p className="poppins-light p-1"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>7
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '54px', fontSize: '15px' }}>
                                                            10.8 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '-6px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
                                                                    comprar
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex align-items-center grid gap-2 row-gap-3"
                                                        style={{ fontSize: '0.8rem', marginBottom: '-19px' }}>
                                                        <p className="fas fa-circle"
                                                            style={{ fontSize: '7px', color: '#00cdff', marginLeft: '33px' }}></p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '-2px', fontSize: '15px' }}>
                                                            Modulo 4</p>
                                                        <p className="poppins-light p-1"
                                                            style={{ marginLeft: '45px', fontSize: '15px' }}>9
                                                            Temas</p>
                                                        <p className="poppins-light p-2"
                                                            style={{ marginLeft: '54px', fontSize: '15px' }}>
                                                            10.8 $</p>
                                                        <div className="d-flex ms-auto" style={{ marginRight: '-6px' }}>
                                                            <Link to="/checkout">
                                                                <button className="btn p-0 ms-4 bi-cart-plus poppins-light"
                                                                    style={{ marginTop: '-5px', width: '110px', height: '25px', fontSize: '0.8rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'whitesmoke', borderRadius: '35px', zIndex: 10, position: 'relative' }}>
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
                        </div>
                    </div>
                </div>
                {/* Subscription Card in PC */}
                < div className="d-none d-block d-lg-block" >
                    <section className="rounded rounded-4 p-4 col-md-4"
                        style={{ backgroundColor: '#4a03a5', height: '380px', width: '360px' }}>
                        <h2 className="champ-bold text-white">
                            <span style={{ fontSize: 'xx-large' }}>Subscrición</span><br></br>
                            <span style={{ fontSize: 'xx-large' }}>mensual</span>
                        </h2>
                        <div style={{ marginTop: '12px' }}>
                            <p className="poppins-light mt-2" style={{ minHeight: '100px', fontSize: '15px' }}>Con tu membresia, accede
                                libremente a
                                todo
                                el
                                contenido que UpGrade tiene para ti, además recibe
                                beneficios exclusivos por 30 días.</p>
                        </div>
                        <div className="d-flex col-7 ms-1" style={{ marginTop: '-20px' }}>
                            <ol className="px-0 text-white">
                                <p className="fas fa-check " style={{ listStyle: 'none', padding: 0, margin: 0, color: '#7769f2' }}>
                                    <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio exclusivo
                                        1</span>
                                </p>
                                <p className="fas fa-check" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#7769f2' }}>
                                    <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio exclusivo
                                        2</span>
                                </p>
                                <p className="fas fa-check" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#7769f2' }}>
                                    <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio exclusivo
                                        3</span>
                                </p>
                                <p className="fas fa-check" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#7769f2' }}>
                                    <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio exclusivo
                                        4</span>
                                </p>
                            </ol>
                        </div>
                        <div className="text-center" style={{ marginLeft: '-235px', marginTop: '-20px' }}>
                            <span className="champ-bold text-wrap" style={{ maxHeight: '185px', fontSize: '55px' }}>
                                <span></span>21.
                                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <sup style={{ marginLeft: '95px', marginTop: '-37px', fontSize: '30px' }}>60
                                        <p className="fs-3 poppins-light" style={{ marginLeft: '55px' }}>$</p></sup>
                                    <p style={{ fontSize: '16px', marginLeft: '130px', marginTop: '-20px' }}>USD</p>
                                    {/* <sub>USD</sub> */}
                                </span>
                            </span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <Link to="/checkout">
                                <button className="btn rounded-pill py-2 text-white fs-6 poppins-light bi-cart-plus"
                                    style={{ backgroundColor: '#7955f8', borderRadius: '150px', width: '130px', marginTop: '-125px', marginLeft: '180px' }}>
                                    comprar</button>
                            </Link>
                        </div>
                    </section>
                </div >
                {/* Subscrption Card in Movil */}
                < div className="d-block d-lg-none" style={{ overflowX: 'auto' }}>
                    <section className="rounded rounded-4 p-4 col-md-4 mx-auto"
                        style={{ backgroundColor: '#4a03a5', height: '410px', maxWidth: '330px' }}>
                        <h2 className="champ-bold text-white">
                            <span style={{ fontSize: 'xx-large' }}>Subscrición</span><br></br>
                            <span style={{ fontSize: 'xx-large' }}>mensual</span>
                        </h2>
                        <div style={{ marginTop: '12px' }}>
                            <p className="poppins-light mt-2" style={{ minHeight: '100px', fontSize: '15px' }}>Con tu membresia, accede
                                libremente a
                                todo
                                el
                                contenido que UpGrade tiene para ti, además recibe
                                beneficios exclusivos por 30 días.</p>
                        </div>
                        <div className="d-flex col-7" style={{ marginTop: '-10px', width: '220px' }}>
                            <ol className="px-0 text-white">
                                <p className="fas fa-check " style={{ listStyle: 'none', padding: 0, margin: 0, color: '#7769f2' }}>
                                    <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio exclusivo
                                        1</span>
                                </p>
                                <p className="fas fa-check" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#7769f2' }}>
                                    <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio exclusivo
                                        2</span>
                                </p>
                                <p className="fas fa-check" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#7769f2' }}>
                                    <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio exclusivo
                                        3</span>
                                </p>
                                <p className="fas fa-check" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#7769f2' }}>
                                    <span className="poppins-light text-white" style={{ fontSize: '0.8rem' }}>Beneficio exclusivo
                                        4</span>
                                </p>
                            </ol>
                        </div>
                        <div className="text-center" style={{ marginLeft: '-160px', marginTop: '-5px' }}>
                            <span className="champ-bold text-wrap" style={{ maxHeight: '185px', fontSize: '40px' }}>
                                <span></span>21.
                                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <sup style={{ marginLeft: '75px', marginTop: '-30px', fontSize: '20px' }}>60<p
                                        style={{ marginLeft: '60px' }}>$</p></sup>
                                    <p style={{ fontSize: '16px', marginLeft: '110px', marginTop: '-20px' }}>USD</p>
                                    {/* <sub>USD</sub> */}
                                </span>
                            </span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <Link to="/checkout">
                                <button className="btn rounded-pill py-2 text-white fs-6 poppins-light bi-cart-plus"
                                    style={{ backgroundColor: '#7955f8', borderRadius: '150px', width: '200px', height: '45px', marginTop: '-70px', marginLeft: '130px' }}>
                                    comprar</button>
                            </Link>
                        </div>
                    </section>
                </div >
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
    );
};
