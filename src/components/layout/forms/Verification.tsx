import '../../../templates/css/styles.css';
import '../../layout/forms/templates/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Verification = () => {

    return (
        <div className='container'>
            <img className="login-container" src="src/components/layout/forms/img/Fondo.png" style={{ position: 'fixed', zIndex: 1 }} alt="Fond" />
            <img className="login-container" src="src/components/layout/forms/img/Fondo2.png" style={{ position: 'fixed', zIndex: 2 }} alt="Fond 2" />
            <div className="container-fluid login-container" style={{ position: 'relative', zIndex: 3 }}>

                {/* Section de imagen */}
                <div className="image-section" style={{ transform: 'translateX(-85px)', visibility: 'hidden' }}>
                    <img src="src/components/layout/forms/svg/Logo_Michigan.svg" alt="Michigan's Store Logo" />
                </div>
                {/* Section of form */}
                <div className="d-flex flex-row-reverse">
                    <div className="col-12 col-md-6 form-section">
                        <form style={{ width: '100%', maxWidth: '500px', transform: 'translateX(-280px)' }}>
                            <img className="mb-4 text-center" style={{ marginLeft: '190px' }} src="src/components/layout/forms/svg/Logo_Michigan.svg"
                                alt="Michigan's Store Logo" />
                            <p className="text-white mb-4 text-center poppins-light" style={{ width: '220px', transform: 'translateX(155px)' }}>Hemos
                                enviado un código de verificación a tu correo</p>
                            <div className="d-flex text-center flex-row" style={{ marginLeft: '52px' }}>
                                <div className="col" style={{ transform: 'translateX(35px)' }}>
                                    <input type="text" className="form-control placeholder-white"
                                        style={{ color: '#ffffff', height: '52px', width: '52px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="" />
                                </div>
                                <div className="col" style={{ marginLeft: '55px' }}>
                                    <input type="text" className="form-control placeholder-white"
                                        style={{ color: '#ffffff', height: '52px', width: '52px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="" />
                                </div>
                                <div className="col" style={{ marginLeft: '20px' }}>
                                    <input type="text" className="form-control placeholder-white"
                                        style={{ color: '#ffffff', height: '52px', width: '52px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="" />
                                </div>
                                <div className="col" style={{ marginLeft: '20px' }}>
                                    <input type="text" className="form-control placeholder-white"
                                        style={{ color: '#ffffff', height: '52px', width: '52px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="" />
                                </div>
                                <div className="col" style={{ marginLeft: '20px' }}>
                                    <input type="text" className="form-control placeholder-white"
                                        style={{ color: '#ffffff', height: '52px', width: '52px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                                        placeholder="" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-itemns-center w-100" style={{ marginLeft: '75%'}}>
                                <button className="btn btn-primary poppins-light"
                                    style={{ height: '60px', width: '800px', marginTop: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none',  fontSize: '20px', color: 'white'}}>Validar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
