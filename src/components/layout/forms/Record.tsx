import '../../layout/forms/templates/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Record = () => {

    return (
        <div className='container'>
            <img className="login-container" src="src/components/layout/forms/img/Fondo.png" style={{ position: 'fixed', zIndex: 1 }} alt="Fond" />
            <img className="login-container" src="src/components/layout/forms/img/Fondo2.png" style={{ position: 'fixed', zIndex: 2 }} alt="Fond 2" />
            <div className="container-fluid login-container" style={{ position: 'relative', zIndex: 3 }}>
                {/* Section de imagen */}
                <div className="image-section" style={{ transform: 'translateX(-85px)' }}>
                    <img src="src/components/layout/forms/svg/Logo_Michigan.svg" alt="Michigan's Store Logo" />
                </div>

                {/* Section of form */}
                <div className="d-flex flex-row-reverse">
                    <div className="col-12 col-md-6 form-section">
                        <form style={{ width: '100%', maxWidth: '500px', transform: 'translateX(-270px)' }}>
                            <h2 className="text-white mb-4 text-center">Registrarse</h2>
                            <input type="email" className="form-control placeholder-white"
                                style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                placeholder="correo" />
                            <input type="text" className="form-control placeholder-white"
                                style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                placeholder="nombre de usuario" />
                            <input type="password" className="form-control placeholder-white"
                                style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                placeholder="contraseña" />
                            <input type="text" className="form-control placeholder-white"
                                style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                placeholder="Fecha de nacimiento" />
                            <a href="./login.html" className="text-center d-block mb-4" style={{ color: '#5695FE', transform: 'translateY(-8px)' }}>
                                Iniciar sesión
                            </a>
                            <div
                                style={{ color: '#ffffff', border: '1px solid', width: '104px', transform: 'translateY(-7px)', marginLeft: '1px' }}>
                            </div>
                            <div
                                style={{ color: '#ffffff', border: '1px solid', width: '104px', marginLeft: '290px', transform: 'translateY(-7px)' }}>
                            </div>
                            <div className="text-white text-center mb-3" style={{ marginTop: '-24px' }}>o registrate con</div>
                            <div className="d-flex justify-content-center social-icons">
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
                            <div className="d-flex justify-content-center align-itemns-center">
                                <button className="btn btn-primary mb-4"
                                    style={{ height: '60px', width: '394px', marginTop: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>registrarse</button>
                            </div>
                            <div style={{ marginLeft: '25px', transform: 'translateY(-10px)' }}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                                    Aceptar política de datos
                                </label>
                            </div>
                            <div style={{ marginLeft: '25px', transform: 'translateY(-10px)' }}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-white" htmlFor="flexCheckDefault">
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
