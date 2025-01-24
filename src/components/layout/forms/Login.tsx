import { useEffect, useState } from 'react';
import '../../layout/forms/templates/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Login = () => {

    const [isLoading, setisLoading] = useState(true);

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
            window.location.href = '/inicio';
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };


    return (
        <div className='container'>
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
                                    <h2 className="text-white mb-4 text-center">ingresar</h2>
                                    <input type="email" className="form-control placeholder-white"
                                        style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="correo | usuario" />
                                    <input type="password" className="form-control placeholder-white"
                                        style={{ color: '#ffffff', height: '50px', width: '394px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="contraseña" />
                                    <a href="./verificacion.html" className="text-center d-block mb-4" style={{ color: '#5695FE' }}>
                                        Olvidé mi contraseña
                                    </a>
                                    <a href="./registro.html" className="text-center d-block mb-4"
                                        style={{ color: '#5695FE', transform: 'translateY(-15px)' }}>
                                        Registrarse
                                    </a>
                                    <div
                                        style={{ color: '#ffffff', border: '1px solid', width: '104px', transform: 'translateY(-5px)', marginLeft: '1px' }}>
                                    </div>
                                    <div
                                        style={{ color: '#ffffff', border: '1px solid', width: '104px', marginLeft: '290px', transform: 'translateY(-6px)' }}>
                                    </div>
                                    <div className="text-white text-center mb-4" style={{ marginTop: '-22px' }}>o ingresar con</div>
                                    <div className="d-flex justify-content-center social-icons">
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
                                        <a href="../inicio.html" style={{ textDecoration: 'none' }}>
                                            <button className="btn btn-primary"
                                                style={{ height: '60px', width: '394px', marginTop: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none' }}>ingresar</button>
                                        </a>
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
