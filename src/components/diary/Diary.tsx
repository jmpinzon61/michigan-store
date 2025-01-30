import '../../templates/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollButton } from '../scroll-button/ScrollButton';
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { YearDisplay } from '../Year/YearDisplay';

export const Diary = () => {

    const [currentDate, setcurrentDate] = useState(new Date());
    const [monthYearString, setmonthYearString] = useState('');
    const [datesHtml, setDatesHtml] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentYear, setcurrentYear] = useState<number>(new Date().getFullYear());

    const updateCalendar = () => {
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const totalDays = lastDay.getDate();
        const firstDayIndex = firstDay.getDay();
        const lastDayIndex = lastDay.getDay();

        const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        setmonthYearString(monthYearString);

        let datesHTML = '';

        for (let i = firstDayIndex; i > 0; i--) {
            const prevDate = new Date(currentYear, currentMonth, 1 - i);
            datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
        }

        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(currentYear, currentMonth, i);
            const activeClass = date.toDateString() === new Date().toDateString() ? ' active' : '';
            datesHTML += `<div class="date${activeClass}">${i}</div>`;
        }

        for (let i = 1; i <= 7 - lastDayIndex; i++) {
            const nextDate = new Date(currentYear, currentMonth + 1, i);
            datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
        }

        setDatesHtml(datesHTML);
    };

    const handlePrevClick = () => {
        setcurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const handleNextClick = () => {
        setcurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    useEffect(() => {
        updateCalendar();
    }, [currentDate]);

    return (
        <div className="bg-main-purple" style={{ overflowX: 'hidden', overflowY: 'scroll' }} ref={containerRef}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{ width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px' }}>
                <a href="./inicio.html" className="fs-5 champ-bold"
                    style={{ margin: '0 0 0 -2px', marginTop: '-55px', color: 'inherit', textDecoration: 'none' }}>Michigan's</a>
                <a href="./inicio.html" className="fs-5 champ-bold"
                    style={{ margin: '-10px 0 0 -400px', color: 'inherit', textDecoration: 'none' }}>Store</a>
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

            <main className='container-fluid d-flex justify-content-center my-3' style={{ marginLeft: '-90px' }}>
                <section style={{ maxWidth: '1510px' }}>
                    <div className="d-none d-lg-block">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="col-12">
                                <h1 className="agenda-title fs-4" style={{ marginLeft: '-635px' }}>¡Tienes una sesión programada!</h1>
                                <div className="calendar-card poppins-light" style={{ marginLeft: '260px' }}>
                                    <div className="header-calendar">
                                        <button id="prevBtn" onClick={handlePrevClick}>
                                            <FontAwesomeIcon icon={faChevronLeft} className="text-white fs-4" />
                                        </button>
                                        <div className="monthYear poppins-light" style={{ fontWeight: 200 }} id="monthYear">
                                            {monthYearString}
                                        </div>
                                        <button id="nextBtn" onClick={handleNextClick}>
                                            <FontAwesomeIcon icon={faChevronRight} className="text-white fs-4" />
                                        </button>
                                    </div>
                                    <div className="days">
                                        <div className="day">Mon</div>
                                        <div className="day">Tue</div>
                                        <div className="day">Wed</div>
                                        <div className="day">Thu</div>
                                        <div className="day">Fri</div>
                                        <div className="day">Sat</div>
                                        <div className="day">Sun</div>
                                    </div>
                                    <div className="dates" dangerouslySetInnerHTML={{ __html: datesHtml }} id="dates"></div>
                                </div>
                                <div className="session-schedule">
                                    <div className="d-flex flex-column">
                                        <div className="col">
                                            <div className="card-agenda">
                                                <div className="card-body poppins-light"
                                                    style={{ height: '350px', overflowY: 'auto', borderRadius: '45px', marginLeft: '10px' }}>
                                                    <ul className="timeline"
                                                        style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: '10px', color: 'white', textAlign: 'center' }}>
                                                        <li style={{ marginBottom: '20px' }}>6:00</li>
                                                        <li style={{ marginBottom: '20px' }}>7:00</li>
                                                        <li style={{ marginBottom: '20px' }}>8:00</li>
                                                        <li style={{ marginBottom: '20px' }}>9:00</li>
                                                        <li style={{ marginBottom: '20px' }}>10:00</li>
                                                        <li style={{ marginBottom: '20px' }}>11:00</li>
                                                        <li style={{ marginBottom: '20px' }}>12:00</li>
                                                        <li
                                                            style={{ color: 'rgba(255, 255, 255, 0.6)', background: '#2d186a', marginBottom: '20px' }}>
                                                            12:45</li>
                                                        <li style={{ marginBottom: '20px' }}>13:00</li>
                                                        <li style={{ marginBottom: '20px' }}>14:00</li>
                                                        <li style={{ marginBottom: '20px' }}>15:00</li>
                                                        <li style={{ marginBottom: '20px' }}>16:00</li>
                                                        <li style={{ marginBottom: '20px' }}>17:00</li>
                                                        <li style={{ marginBottom: '20px' }}>18:00</li>
                                                        <li style={{ marginBottom: '20px' }}>19:00</li>
                                                        <li style={{ marginBottom: '20px' }}>20:00</li>
                                                        <li style={{ marginBottom: '20px' }}>21:00</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="col" style={{ marginLeft: '-80px' }}>
                                            <div className="session-details" style={{ width: '470px', height: '185px', marginTop: '-765px' }}>
                                                <div className="user-info">
                                                    <div
                                                        style={{ position: 'absolute', zIndex: 5, marginTop: '-35px', marginLeft: '125px' }}>
                                                        <img src="/images/user-avatar.png"
                                                            style={{ background: '#fed904', borderRadius: '45px' }} alt="User Avatar"
                                                            className="user-avatar" />
                                                        <img src="/images/circle-user-avatar.png"
                                                            style={{ position: 'absolute', zIndex: '-4', height: '95px', width: '95px', marginLeft: '-87px', marginTop: '-8px' }}
                                                            alt="font user avatar" />
                                                        <p className="poppins-light fs-1"
                                                            style={{ fontWeight: 600, marginTop: '10px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                                            User Name</p>
                                                        <p className="poppins-light" style={{ fontWeight: 600, marginTop: '-20px' }}>Nivel
                                                            Intermedio</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col" style={{ marginLeft: '-80px' }}>
                                            <div className="session-details-2"
                                                style={{ width: '469px', height: '180px', marginTop: '-170px', marginBottom: '10px' }}>
                                                <div className="session-info">
                                                    <div className="d-flex flex-row">
                                                        <div className="col" style={{ marginTop: '-7px' }}>
                                                            <ul style={{ listStyleType: 'none' }}>
                                                                <li><img className="mt-3" src="/svgs/playlist-star-1.0.svg"
                                                                    style={{ height: '30px', width: '30px' }} alt="" /></li>
                                                                <li><img className="mt-3" src="/svgs/playlist-star-2.0.svg"
                                                                    style={{ height: '20px', width: '20px' }} alt="" /></li>
                                                                <li><img className="mt-3" src="/svgs/playlist-star-3.0.svg"
                                                                    style={{ height: '20px', width: '20px' }} alt="" /></li>
                                                                <li><img className="mt-3" src="/svgs/playlist-star-4.0.svg"
                                                                    style={{ height: '20px', width: '20px' }} alt="" /></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <p className="poppins-light mt-2"
                                                                style={{ fontWeight: 600, marginLeft: '-140px' }}>
                                                                Todos</p>
                                                            <p className="poppins-light" style={{ fontWeight: 600, marginLeft: '-40px' }}>
                                                                Módulo 1
                                                                UpColors</p>
                                                            <p className="poppins-light"
                                                                style={{ fontWeight: 600, marginLeft: '-30px', marginTop: '-2px' }}>
                                                                Jueves 09 de
                                                                Marzo</p>
                                                            <p className="poppins-light"
                                                                style={{ fontWeight: 600, marginLeft: '-40px', marginTop: '-4px' }}>8:00
                                                                am a
                                                                8:45 am</p>
                                                        </div>
                                                        <div className="col">
                                                            <img src="/svgs/playlist-exclamation.svg"
                                                                style={{ marginTop: '55px', marginLeft: '-150px' }} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="action-buttons">
                                    <button className="cancel-button mx-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Cancelar
                                        sesión</button>
                                    <button className="join-button" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Unirme a
                                        clase</button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="table-responsive">
                        <h2 className="past-sessions-title" style={{ marginTop: '85px', marginLeft: '425px' }}>Sesiones Anteriores</h2>
                        <table className="d-flex justify-content-center align-items-center table-borderless align-middle"
                            style={{ height: '40%', marginLeft: '195px', width: '85vw', marginTop: '15px' }}>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td className="session-date text-center poppins-light"
                                        style={{ padding: '48px 50px 80px 0px', fontWeight: 700 }}>
                                        <span>
                                            01/15/2025 <br /> 8:00 am
                                        </span>
                                    </td>
                                    <td>
                                        <div className="session-item" style={{ marginTop: '-1px' }}>
                                            <div style={{ marginLeft: '5px' }}>
                                                <div className="text-center">
                                                    <img src="/images/Rectangle_agenda.png"
                                                        style={{ position: 'absolute', zIndex: 5, height: '151px', width: 'auto', marginLeft: '-310px' }}
                                                        alt="rectangle" />
                                                    <h3 className="text-start">Sesión módulo 1 - Parte 2</h3>
                                                    <p className="text-start" style={{ maxWidth: '450px' }}>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        nonummy nibh euismod veniam, quis nostrud exerci tation ullamcorper
                                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '48px 5px 80px 55px', cursor: 'pointer' }}>
                                        <img className="delete-button mx-2" src="/svgs/Caneca.svg" alt="Caneca" />
                                    </td>
                                    <td style={{ padding: '48px 50px 85px 0px', cursor: 'pointer' }}>
                                        <img className="star-button" src="/svgs/Estrella.svg" alt="Estrella" />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="session-date text-center poppins-light"
                                        style={{ padding: '48px 50px 80px 0px', fontWeight: 700 }}>
                                        <span>
                                            01/15/2025 <br /> 8:00 am
                                        </span>
                                    </td>
                                    <td>
                                        <div className="session-item" style={{ marginTop: '-10px' }}>
                                            <div style={{ marginLeft: '5px' }}>
                                                <div className="text-center">
                                                    <img src="/images/Rectangle_agenda.png"
                                                        style={{ position: 'absolute', zIndex: 5, height: '151px', width: 'auto', marginLeft: '-310px' }}
                                                        alt="rectangle" />
                                                    <h3 className="text-start">Sesión módulo 1 - Parte 2</h3>
                                                    <p className="text-start" style={{ maxWidth: '450px' }}>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        nonummy nibh euismod veniam, quis nostrud exerci tation ullamcorper
                                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '48px 10px 80px 55px', cursor: 'pointer' }}>
                                        <img className="delete-button mx-2" src="/svgs/Caneca.svg" alt="Caneca" />
                                    </td>
                                    <td style={{ padding: '48px 50px 85px 0px', cursor: 'pointer' }}>
                                        <img className="star-button" src="/svgs/Estrella.svg" alt="Estrella" />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="session-date text-center poppins-light"
                                        style={{ padding: '48px 50px 80px 0px', fontWeight: 700 }}>
                                        <span
                                            style={{ background: 'linear-gradient(to left, #ff606a, #ff3260)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                            01/15/2025 <br /> 8:00 am
                                        </span>
                                    </td>

                                    <td>
                                        <div className="session-item" style={{ marginTop: '-10px', background: '#3f103f' }}>
                                            <div style={{ marginLeft: '5px' }}>
                                                <div className="text-center">
                                                    <img src="/images/Rectangle_agenda.png"
                                                        style={{ position: 'absolute', zIndex: 5, height: '151px', width: 'auto', marginLeft: '-310px' }}
                                                        alt="rectangle" />
                                                    <h3 className="text-start">Sesión módulo 1 - Parte 2</h3>
                                                    <p className="text-start" style={{ maxWidth: '450px' }}>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        nonummy nibh euismod veniam, quis nostrud exerci tation ullamcorper
                                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: 'left', padding: '48px 10px 80px 55px', cursor: 'pointer' }}>
                                        <img className="delete-button mx-2" src="/svgs/Caneca.svg" alt="Caneca" />
                                    </td>
                                    <td style={{ padding: '48px 50px 85px 0px', cursor: 'pointer' }}>
                                        <img className="star-button" src="/svgs/Estrella.svg" alt="Estrella" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
    );
};


