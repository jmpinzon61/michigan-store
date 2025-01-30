import '../../templates/css/styles.css';
import '../../templates/css/styles-notes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { initDragScroll } from '../../templates/ts/drag-scroll';
import { toggleText } from '../../templates/ts/toggle-text-notes';
import { useEffect, useRef } from 'react';
import { ScrollButton } from '../scroll-button/ScrollButton';

export const Notes = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        initDragScroll('videos-container');
    }, []);


    return (
        <div className="bg-main-purple" style={{ overflowX: 'hidden', overflowY: 'scroll' }} ref={containerRef}>
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
                            <a href="./blogs.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Blogs</a> */}
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

            <main className="container-fluid my-3">
                <section className="text-white text-center mb-5 row justify-content-center" style={{ margin: '70px 135px 120px 135px' }}>
                    <div className="col-6" style={{ margin: '5px 5px 5px -5px' }}>
                        {/* Mi vocabulario */}
                        <h2 className="text-start poppins-light">Mi vocabulario</h2>
                        <div className="vocabulario">
                            <img src="/svgs/Vocabulary-apuntes.svg" alt="" srcSet="" />
                        </div>
                    </div>
                    <div className="col-6" style={{ margin: '5px 5px 5px -5px' }}>
                        <div className="notas">
                            <h2 className="text-start poppins-light" style={{ marginTop: '-40px', marginLeft: '-75px' }}>Mis notas</h2>
                            <div style={{ marginLeft: '-320px' }}>
                                <table style={{ height: '20%', marginLeft: '195px', width: '55vw', marginTop: '15px' }}>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td style={{ padding: '48px 50px 80px 0px', fontWeight: 700 }}>
                                            </td>
                                            <td>
                                                <div style={{ marginTop: '-1px', background: '#3f103f', borderRadius: '0px 40px 40px 0px', marginBottom: '30px' }}>
                                                    <div style={{ marginLeft: '5px' }}>
                                                        <div style={{ textAlign: 'center' }}>
                                                            <div className="card-apuntes" style={{ position: 'absolute', zIndex: 5, marginLeft: '-20px' }}>
                                                                <div className="card-body-apuntes">
                                                                    <p className="poppins-light fs-5" style={{ marginTop: '75px' }}>¡</p>
                                                                </div>
                                                            </div>
                                                            <h3 className="p-2" style={{ textAlign: 'start' }}>Sesión módulo 1 - Parte 2
                                                            </h3>
                                                            <p className="p-2" style={{ textAlign: 'start', maxWidth: '450px' }}>
                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                                sed diam
                                                                nonummy nibh euismod veniam, quis nostrud exerci tation
                                                                ullamcorper
                                                                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="nota-buttons" style={{ padding: '48px 10px 80px 55px', cursor: 'pointer' }}>
                                                <svg width="35" height="35" viewBox="0 0 36 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.1607 0V2.22222H0V6.66667H2.23214V35.5556C2.23214 36.7343 2.70249 37.8648 3.5397 38.6983C4.37692 39.5317 5.51243 40 6.69643 40H29.0179C30.2019 40 31.3374 39.5317 32.1746 38.6983C33.0118 37.8648 33.4821 36.7343 33.4821 35.5556V6.66667H35.7143V2.22222H24.5536V0H11.1607ZM11.1607 11.1111H15.625V31.1111H11.1607V11.1111ZM20.0893 11.1111H24.5536V31.1111H20.0893V11.1111Z"
                                                        fill="#544e6d" />
                                                </svg>
                                            </td>
                                            <td className="nota-buttons" style={{ padding: '48px 50px 85px 0px', cursor: 'pointer' }}>
                                                <svg width="35" height="35" viewBox="0 0 44 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" className="nota-button-img">
                                                    <path
                                                        d="M21.7857 32.1474L35.2493 40L31.6764 25.2L43.5714 15.2421L27.9075 13.9368L21.7857 0L15.6639 13.9368L0 15.2421L11.8732 25.2L8.32214 40L21.7857 32.1474Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td style={{ padding: '48px 50px 80px 0px', fontWeight: 700 }}>
                                            </td>
                                            <td>
                                                <div
                                                    style={{ marginTop: '-10px', background: '#1F0C50', borderRadius: '0px 40px 40px 0px', marginBottom: '30px' }}>
                                                    <div style={{ marginLeft: '5px' }}>
                                                        <div style={{ textAlign: 'center' }}>
                                                            <div className="card-apuntes" style={{ position: 'absolute', zIndex: 5, marginLeft: '-20px', backgroundColor: '#7955f9' }}>
                                                                <div className="card-body-apuntes">
                                                                    <p className="poppins-light fs-5" style={{ marginTop: '75px' }}>¡</p>
                                                                </div>
                                                            </div>
                                                            <h3 className="p-2" style={{ textAlign: 'start' }}>Sesión módulo 1 - Parte 2
                                                            </h3>
                                                            <p className="p-2" style={{ textAlign: 'start', maxWidth: '450px' }}>
                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                                sed diam
                                                                nonummy nibh euismod veniam, quis nostrud exerci tation
                                                                ullamcorper
                                                                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="nota-buttons" style={{ padding: '48px 10px 80px 55px', cursor: 'pointer' }}>
                                                <svg width="35" height="35" viewBox="0 0 36 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.1607 0V2.22222H0V6.66667H2.23214V35.5556C2.23214 36.7343 2.70249 37.8648 3.5397 38.6983C4.37692 39.5317 5.51243 40 6.69643 40H29.0179C30.2019 40 31.3374 39.5317 32.1746 38.6983C33.0118 37.8648 33.4821 36.7343 33.4821 35.5556V6.66667H35.7143V2.22222H24.5536V0H11.1607ZM11.1607 11.1111H15.625V31.1111H11.1607V11.1111ZM20.0893 11.1111H24.5536V31.1111H20.0893V11.1111Z"
                                                        fill="#544e6d" />
                                                </svg>
                                            </td>
                                            <td className="nota-buttons" style={{ padding: '48px 50px 85px 0px', cursor: 'pointer' }}>
                                                <svg width="35" height="35" viewBox="0 0 44 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" className="nota-button-img">
                                                    <path
                                                        d="M21.7857 32.1474L35.2493 40L31.6764 25.2L43.5714 15.2421L27.9075 13.9368L21.7857 0L15.6639 13.9368L0 15.2421L11.8732 25.2L8.32214 40L21.7857 32.1474Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td style={{ padding: '48px 50px 80px 0px', fontWeight: 700 }}>
                                            </td>
                                            <td>
                                                <div style={{ marginTop: '-10px', background: '#1F0C50', borderRadius: '0px 40px 40px 0px', marginBottom: '30px' }}>
                                                    <div style={{ marginLeft: '5px' }}>
                                                        <div style={{ textAlign: 'center' }}>
                                                            <div className="card-apuntes" style={{ position: 'absolute', zIndex: 5, marginLeft: '-20px', backgroundColor: '#7955f9' }}>
                                                                <div className="card-body-apuntes">
                                                                    <p className="poppins-light fs-5" style={{ marginTop: '75px' }}>¡</p>
                                                                </div>
                                                            </div>
                                                            <h3 className="p-2" style={{ textAlign: 'start' }}>Sesión módulo 1 - Parte 2</h3>
                                                            <p className="p-2" style={{ textAlign: 'start', maxWidth: '450px', overflow: 'hidden', height: '72px' }} id="text-content">
                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                            </p>
                                                            <a className="champ-bold" href="javascript:void(0);" onClick={() => toggleText("text-content", "toggle-button")} style={{ marginLeft: '410px', marginTop: '-70px', color: '#7954f8' }} id="toggle-button">Ver todo</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="nota-buttons" style={{ padding: '48px 10px 80px 55px', cursor: 'pointer' }}>
                                                <svg width="35" height="35" viewBox="0 0 36 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.1607 0V2.22222H0V6.66667H2.23214V35.5556C2.23214 36.7343 2.70249 37.8648 3.5397 38.6983C4.37692 39.5317 5.51243 40 6.69643 40H29.0179C30.2019 40 31.3374 39.5317 32.1746 38.6983C33.0118 37.8648 33.4821 36.7343 33.4821 35.5556V6.66667H35.7143V2.22222H24.5536V0H11.1607ZM11.1607 11.1111H15.625V31.1111H11.1607V11.1111ZM20.0893 11.1111H24.5536V31.1111H20.0893V11.1111Z"
                                                        fill="#544e6d" />
                                                </svg>
                                            </td>
                                            <td className="nota-buttons" style={{ padding: '48px 50px 85px 0px', cursor: 'pointer' }}>
                                                <svg width="35" height="35" viewBox="0 0 44 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" className="nota-button-img">
                                                    <path
                                                        d="M21.7857 32.1474L35.2493 40L31.6764 25.2L43.5714 15.2421L27.9075 13.9368L21.7857 0L15.6639 13.9368L0 15.2421L11.8732 25.2L8.32214 40L21.7857 32.1474Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td></td>
                                            <td style={{ padding: '48px 50px 80px 0px', fontWeight: 700 }}>
                                            </td>
                                            <td>
                                                <div
                                                    style={{ marginTop: '-10px', background: '#3f103f', borderRadius: '0px 40px 40px 0px' }}>
                                                    <div style={{ marginLeft: '5px' }}>
                                                        <div style={{ textAlign: 'center' }}>
                                                            <div className="card-apuntes" style={{ position: 'absolute', zIndex: 5, marginLeft: '-20px' }}>
                                                                <div className="card-body-apuntes">
                                                                    <p className="poppins-light fs-5" style={{ marginTop: '75px' }}>¡</p>
                                                                </div>
                                                            </div>
                                                            <h3 className="p-2" style={{ textAlign: 'start' }}>Sesión módulo 1 - Parte 2
                                                            </h3>
                                                            <p className="p-2" style={{ textAlign: 'start', maxWidth: '450px' }}>
                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                                sed diam
                                                                nonummy nibh euismod veniam, quis nostrud exerci tation
                                                                ullamcorper
                                                                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="nota-buttons" style={{ padding: '48px 10px 80px 55px', cursor: 'pointer' }}>
                                                <svg width="35" height="35" viewBox="0 0 36 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.1607 0V2.22222H0V6.66667H2.23214V35.5556C2.23214 36.7343 2.70249 37.8648 3.5397 38.6983C4.37692 39.5317 5.51243 40 6.69643 40H29.0179C30.2019 40 31.3374 39.5317 32.1746 38.6983C33.0118 37.8648 33.4821 36.7343 33.4821 35.5556V6.66667H35.7143V2.22222H24.5536V0H11.1607ZM11.1607 11.1111H15.625V31.1111H11.1607V11.1111ZM20.0893 11.1111H24.5536V31.1111H20.0893V11.1111Z"
                                                        fill="#544e6d" />
                                                </svg>
                                            </td>
                                            <td className="nota-buttons" style={{ padding: '48px 50px 85px 0px', cursor: 'pointer' }}>
                                                <svg width="35" height="35" viewBox="0 0 44 40" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" className="nota-button-img">
                                                    <path
                                                        d="M21.7857 32.1474L35.2493 40L31.6764 25.2L43.5714 15.2421L27.9075 13.9368L21.7857 0L15.6639 13.9368L0 15.2421L11.8732 25.2L8.32214 40L21.7857 32.1474Z"
                                                        fill="currentColor" />
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="fragmento">
                            <h2 className="text-start poppins-light">Fragmento de clase</h2>
                            <div className="videos card-body" id="videos-container">
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                                <div className="video">
                                    <img style={{ marginTop: '95px', marginLeft: '150px' }} src="/svgs/button-play.svg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Scrollbar button */}
            <ScrollButton containerRef={containerRef}/>
        </div>
    );
};
