import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../../templates/css/styles.css';
import '../../layout/forms/templates/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Login = () => {

    const [isLoading, setisLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setisLoading(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
        const password = (form.elements.namedItem("password") as HTMLInputElement)?.value;

        if (email && password) {
            console.log("Formulario enviado: ", { email, password });
            navigate('./start');
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    return (
        <div className='container-login'>
            <img className="login-container" src="src/components/layout/forms/img/Fondo.png" style={{ position: 'fixed', zIndex: 1 }} alt="Fond" />
            <img className="login-container" src="src/components/layout/forms/img/Fondo2.png" style={{ position: 'fixed', zIndex: 2 }} alt="Fond 2" />
            <div className="container-fluid login-container" style={{ position: 'relative', zIndex: 3 }}>
                {/* Loader*/}
                {isLoading ? (
                    <div className="loader" id="loader">
                        <img src="/svgs/loading.svg" alt="Loading" />
                    </div>
                ) : (
                    <>
                        {/* Section de imagen */}
                        <div className="image-section" style={{ transform: 'translateX(-85px)' }}>
                            <img src="src/components/layout/forms/svg/Logo_Michigan.svg" alt="Michigan's Store Logo" />
                        </div>

                        {/* Section of form */}
                        <div className="d-flex flex-row-reverse">
                            <div className="col-12 col-md-6 form-section">
                                <form onSubmit={handleFormSubmit} style={{ width: '100%', maxWidth: '500px', transform: 'translateX(-270px)' }}>
                                    <h2 className="text-white mb-4 text-center w-100 poppins-light" style={{ marginLeft: '70%' }}>ingresar</h2>
                                    <input type="email" className="form-control-login placeholder-white poppins-light"
                                        style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="correo | usuario" />
                                    <input type="password" className="form-control-login placeholder-white poppins-light"
                                        style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="contraseña" />
                                    <a 
                                        className="text-center d-block mb-4 w-100 poppins-light" 
                                        style={{ color: '#0061D1', marginLeft: '77%', fontSize: '85%', fontWeight: 600 }}
                                    >
                                        <Link to="/verification" style={{color: '#0061D1', textDecoration: 'none'}}>
                                            Olvidé mi contraseña
                                        </Link>
                                    </a>
                                    <a
                                        className="text-center d-block mb-4 w-100 poppins-light"
                                        style={{ color: '#0061D1', transform: 'translateY(-15px)', marginLeft: '72%', fontSize: '85%', fontWeight: 600 }}
                                    >
                                        <Link to="/record" style={{ color: '#0061D1', textDecoration: 'none' }}>
                                            Registrarse
                                        </Link>
                                    </a>
                                    <div
                                        style={{ color: '#ffffff', border: '1px solid', width: '104px', transform: 'translateY(-5px)', marginLeft: '1px' }}>
                                    </div>
                                    <div
                                        style={{ color: '#ffffff', border: '1px solid', width: '104px', marginLeft: '290px', transform: 'translateY(-6px)' }}>
                                    </div>
                                    <div className="text-white text-center mb-4 w-100 poppins-light" style={{ marginTop: '-22px', marginLeft: '72%' }}>o ingresar con</div>
                                    <div className="d-flex justify-content-center social-icons w-100" style={{ marginLeft: '72%' }}>
                                        <a href="https://www.icloud.com" target="_blank" rel="noopener noreferrer">
                                            <img src="src/components/layout/forms/svg/Apple.svg" alt="Apple Mail" />
                                        </a>
                                        <a href="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer">
                                            <img src="src/components/layout/forms/svg/Google.svg" alt="Google" />
                                        </a>
                                        <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
                                            <img src="src/components/layout/forms/svg/Facebook.svg" alt="Facebook" />
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-center align-itemns-center">
                                        <Link to="/us" style={{ textDecoration: 'none', marginLeft: '152%' }}>
                                            <button className="btn btn-primary-login poppins-light" type='submit'
                                                style={{ height: '60px', width: '392px', marginTop: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none', fontSize: '25px' }}>ingresar</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
