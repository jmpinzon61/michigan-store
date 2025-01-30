import '../../../templates/css/styles.css';
import '../../layout/forms/templates/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Record = () => {

    return (
        <div className='container'>
            <img className="login-container" src="src/components/layout/forms/img/Fondo.png" style={{ position: 'fixed', zIndex: 1 }} alt="Fond" />
            <img className="login-container" src="src/components/layout/forms/img/Fondo2.png" style={{ position: 'fixed', zIndex: 2 }} alt="Fond 2" />
            <div className="container-fluid login-container" style={{ position: 'relative', zIndex: 3 }}>
                {/* Section de imagen */}
                <div className="image-section" style={{ transform: 'translateX(145px)' }}>
                    <img src="src/components/layout/forms/svg/Logo_Michigan.svg" alt="Michigan's Store Logo" />
                </div>

                {/* Section of form */}
                <div className="d-flex flex-row-reverse">
                    <div className="col-12 col-md-6 form-section">
                        <form style={{ width: '100%', transform: 'translateX(-200px)' }}>
                            <h2 className="text-white mb-4 text-center w-100 poppins-light" style={{ marginLeft: '70%'}}>Registrarse</h2>
                            <input type="email" className="form-control placeholder-white poppins-light"
                                style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: '274px' }}
                                placeholder="correo" />
                            <input type="text" className="form-control placeholder-white poppins-light"
                                style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: '274px' }}
                                placeholder="nombre de usuario" />
                            <input type="password" className="form-control placeholder-white poppins-light"
                                style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: '274px' }}
                                placeholder="contraseña" />
                            <input type="text" className="form-control placeholder-white poppins-light"
                                style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: '274px' }}
                                placeholder="Fecha de nacimiento" />
                            <a href="./login.html" className="text-center d-block mb-4 w-100 poppins-light" style={{ color: '#0061D1', transform: 'translateY(-8px)', marginLeft: '72%', fontSize: '85%', fontWeight: 600 }}>
                                Iniciar sesión
                            </a>
                            <div
                                style={{ color: '#ffffff', border: '1px solid', width: '104px', transform: 'translateY(-7px)', marginLeft: '275px' }}>
                            </div>
                            <div
                                style={{ color: '#ffffff', border: '1px solid', width: '104px', marginLeft: '564px', transform: 'translateY(-7px)' }}>
                            </div>
                            <div className="text-white text-center mb-3 w-100 poppins-light" style={{ marginTop: '-24px',  marginLeft: '72%' }}>o registrate con</div>
                            <div className="d-flex justify-content-center social-icons w-100" style={{marginLeft: '70%'}}>
                                <a href="https://appleid.apple.com/account#!&page=create" target="_blank" rel="noopener noreferrer">
                                    <img src="src/components/layout/forms/svg/Apple.svg" alt="Registrar con Apple Mail" />
                                </a>
                                <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer">
                                    <img src="src/components/layout/forms/svg/Google.svg" alt="Registrar con Google" />
                                </a>
                                <a href="https://www.facebook.com/r.php" target="_blank" rel="noopener noreferrer">
                                    <img src="src/components/layout/forms/svg/Facebook.svg" alt="Registrar con Facebook" />
                                </a>
                            </div>
                            <div className="d-flex justify-content-center align-itemns-center w-100" style={{ marginLeft: '71%'}}>
                                <button className="btn btn-primary mb-4 poppins-light"
                                    style={{ height: '60px', width: '860px', marginTop: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none', fontSize: '20px' }}>registrarse</button>
                            </div>
                            <div className='d-flex w-100 m4-2' style={{ marginLeft: '310px', marginBottom: '10px'}}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-white poppins-light" style={{marginLeft: '15px', width: '450px'}} htmlFor="flexCheckDefault">
                                    Aceptar política de datos
                                </label>
                            </div>
                            <div className='d-flex w-100' style={{ marginLeft: '310px', transform: 'translateY(-10px)' }}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-white poppins-light" style={{marginLeft: '15px', width: '450px'}} htmlFor="flexCheckDefault">
                                    Aceptar publicidad
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
