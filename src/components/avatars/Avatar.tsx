import '../../templates/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ScrollButton } from "../scroll-button/ScrollButton"
import { togglePasswordVisibility } from '../../templates/ts/toggle-password-visibility';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


export const Avatar = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const[showPassword, setshowPassword] = useState(false);
    const[passwordValue, setpasswordValue] = useState('MiSecreto123');

    const handlerShowPassword = () => {
        togglePasswordVisibility();
        setshowPassword((prev) => !prev)

        const passwordInput = document.getElementById("password") as HTMLInputElement;
        if (passwordInput) {
            passwordInput.type = showPassword ? 'text' : 'password';
        }
    }

    return (
        <div className="bg-main-purple" style={{overflowX: 'hidden', overflowY: 'scroll', height: '100vh', position: 'relative'}} ref={containerRef}>
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
                        style={{ maxWidth: '100%', marginRight: '300px', marginTop: '-30px' }}>
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

            <main className='container-fluid my-6 ms-5'>
                <section style={{ maxWidth: '1510px' }}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <button className="btn btn-link p-0"
                            style={{ backgroundColor: 'transparent', background: '#55337e', border: '2px solid #ffffff', borderRadius: '45px', height: '60px', width: '60px', marginLeft: '-1112px', position: 'absolute', zIndex: 45, top: '110px' }}>
                            <Link to="/start">
                                <i className="bi bi-chevron-left" style={{ fontSize: '15px', color: 'white', textShadow: '1px 0 0 white, -1px 0 0 white, 0 1px 0 white, 0 -1px 0 white' }}></i>
                            </Link>
                        </button>
                        <button className="btn p-0"
                            style={{ backgroundColor: 'transparent', background: '#825778', border: '2px solid #ffffff', borderRadius: '45px', height: '60px', width: '60px', marginLeft: '-655px', position: 'absolute', zIndex: 45, top: '387px' }}>
                            <img src="/svgs/Camara-settings-user.svg" style={{ fontSize: '20px', color: 'white' }} alt="" />
                        </button>
                        <button className="btn p-0"
                            style={{ backgroundColor: 'transparent', border: 'none', background: 'linear-gradient(to right, #36d9e5,#6be5cc)', borderRadius: '45px', height: '60px', width: '60px', marginLeft: '-340px', position: 'absolute', zIndex: 45, top: '740px' }}>
                            <img src="/svgs/pencil.svg" style={{ fontSize: '20px', color: 'white' }} alt="" />
                        </button>
                        <img src="/images/style-avatar-2.png"
                            style={{ position: 'absolute', zIndex: -5, left: '50%', bottom: '-225px' }}
                            alt="style 1"/>
                        <img src="/images/style-avatar.png"
                            style={{ position: 'absolute', zIndex: 5, left: '48%', bottom: '-50%' }}
                            alt="style 2" />
                        <img src="/images/Capa-avatar.png"
                            style={{ position: 'absolute', zIndex: 4, bottom: '0px', height: '470px', width: '480px', top: '15px', right: '920px' }}
                            alt="style 3" />
                        <img src="/images/Capa-avatar-2.png"
                            style={{ position: 'absolute', zIndex: 3, right: '50%', bottom: '0px', height: '440px', width: '440px', top: '165px', left: '10px' }}
                            alt="style 4" />
                        <img src="/images/sombra-avatar-1.png"
                            style={{ position: 'absolute', zIndex: 2, right: '60%', bottom: '0px', height: '50%', width: '50%', top: '-5px' }}
                            alt="style 4" />
                        <img src="/images/sombra-avatar-2.png"
                            style={{ position: 'absolute', zIndex: 1, right: '70%', bottom: '0px', height: '70%', width: '50%', top: '500px' }}
                            alt="style 4"/>
                        <img src="/images/sombra-avatar-1.png"
                            style={{ position: 'absolute', zIndex: 9, right: '-5%', bottom: '0%', height: '100%', width: '80%', top: '35%', borderRadius: '25%', objectFit: 'cover'}}
                            alt="style 4" />
                        {/* Tarjeta de Perfil */}
                        <div className="col profile-card">
                            <img src="/images/user-avatar-2.png"
                                style={{ background: '#fed904', borderRadius: '225px', height: '300px', width: '300px', position: 'absolute', zIndex: 10, marginTop: '65px', left: '220px', objectFit: 'cover' }}
                                alt="User Avatar" />

                            {/* Información de Usuario */}
                            <div className="user-info text-start" style={{ marginLeft: '110px', position: 'absolute', zIndex: 20 }}>
                                <h2 className="poppins-bold fs-1"
                                    style={{ fontWeight: 700, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', marginLeft: '40px' }}>User</h2>
                                <h2 className="poppins-bold fs-1"
                                    style={{ fontWeight: 700, marginTop: '-20px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', marginLeft: '40px' }}>
                                    Name</h2>
                                <p className="poppins-light" style={{ paddingTop: '10px', lineHeight: 1.5, margin: '5px 40px' }}>
                                    username@mail.com</p>
                                <input type="password" id="password" className="password-input poppins-light text-white mx-4"
                                    style={{ marginTop: '-750px', marginLeft: '0px 0'}} value={passwordValue}
                                    placeholder={showPassword ? passwordValue: '****************'} onChange={(e) => setpasswordValue(e.target.value)} />
                                <span className="toggle-password" onClick={handlerShowPassword}>
                                    <FontAwesomeIcon className="fs-6" icon={showPassword ? faEyeSlash : faEye}/>
                                </span>
                                <p className="poppins-light" style={{ margin: '4px 40px', lineHeight: 1.5 }}>(+51) 000 000 000</p>
                                <p className="poppins-light" style={{ margin: '4px 40px', lineHeight: 1.5 }}>Lima - Peru</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="avatars mt-5"
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', position: 'absolute', zIndex: 30, marginLeft: '-999px', overflow: 'hidden' }}>
                                <img src="/images/Avatar 2.png" style={{ position: 'relative', marginLeft: '110px' }} alt="Avatar 2" />
                                <img src="/images/Avatar 3.png" style={{ position: 'relative', marginLeft: '-100px' }} alt="Avatar 3" />
                                <img src="/images/Avatar 4.png" style={{ position: 'relative', marginLeft: '-310px' }} alt="Avatar 4" />
                                <img src="/images/Avatar 5.png" style={{ position: 'relative', marginLeft: '-10px' }} alt="Avatar 5" />
                                <img src="/images/Avatar 6.png" style={{ position: 'relative', marginLeft: '110px' }} alt="Avatar 6" />
                                <img src="/images/Avatar 7.png" style={{ position: 'relative', marginLeft: '-100px' }} alt="Avatar 7" />
                                <img src="/images/Avatar 8.png" style={{ position: 'relative', marginLeft: '-310px' }} alt="Avatar 8" />
                                <img src="/images/Avatar 9.png" style={{ position: 'relative', marginLeft: '-10px' }} alt="Avatar 9" />
                                <img src="/images/Avatar 10.png" style={{ position: 'relative', marginLeft: '110px' }} alt="Avatar 10" />
                                <img src="/images/Avatar 10.png" style={{ position: 'relative', marginLeft: '-100px' }} alt="Avatar 10" />
                                <img src="/images/Avatar 11.png" style={{ position: 'relative', marginLeft: '-310px' }} alt="Avatar 11" />
                                <img src="/images/Avatar 12.png" style={{ position: 'relative', marginLeft: '-10px' }} alt="Avatar 11" />
                                <img src="/images/Avatar 13.png" style={{ position: 'relative', marginLeft: '110px' }} alt="Avatar 13" />
                                <img src="/images/Avatar 14.png" style={{ position: 'relative', marginLeft: '-100px' }} alt="Avatar 14" />
                                <img src="/images/Avatar 15.png" style={{ position: 'relative', marginLeft: '-310px' }} alt="Avatar 15" />
                                <img src="/images/Avatar 16.png" style={{ position: 'relative', marginLeft: '-10px' }} alt="Avatar 16" />
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-cancelar mx-4 poppins-light text-center"
                                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', color: 'white' }}>cancelar</button>
                            <button className="btn btn-guardar poppins-light text-center"
                                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', color: 'white' }}>guardar y salir</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Scrollbar button */}
            <ScrollButton containerRef={containerRef}  />
        </div>
    );
};