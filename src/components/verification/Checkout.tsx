import '../../templates/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { toggleSelection } from '../../templates/ts/toggle-selection';
import React, { useEffect } from 'react';
import { initializeTooltips } from '../../templates/ts/initialize-tooltips';
import { Link } from 'react-router-dom';

export const Checkout = () => {

    useEffect(() => {
        initializeTooltips();
    },[]);

    const handlerClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const element = event.currentTarget.parentElement;
        if (element) {
            toggleSelection(element);
        }
    };


    return (
        <div className="bg-main-purple" style={{overflowX: 'hidden', overflowY: 'scroll', height: '100vh', position: 'relative'}}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px'}}>
                <h1 className="champ-bold" style={{margin: '0 0 0 -2px', marginTop: '-45px', fontSize: '18px'}}>Michigan's</h1>
                <h1 className="champ-bold" style={{margin: '0 0 0 -123px', fontSize: '18px'}}>Store</h1>
                {/* Nav in PC */}
                <div className="d-none d-block d-lg-block">
                    <nav className="d-flex justify-content-between align-items-center"
                        style={{maxWidth: '100%', marginRight: '300px', marginTop: '-30px'}}>
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
                <div className="d-block d-lg-none mx-auto" style={{width: '45%', position: 'relative', marginTop: '-155px'}}>
                    <nav className="d-flex justify-content-between align-items-center flex-nowrap overflow-x-auto"
                        style={{whiteSpace: 'nowrap', width: '100%', marginTop: '2px'}}>
                        <div style={{marginTop: '200px'}}>
                            <a href="#" className="text-white mx-2 poppins-bold">Inicio</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Cursos</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Precios</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Nosotros</a>
                            <a href="#" className="text-white mx-2 poppins-bold">Blogs</a>
                        </div>
                    </nav>
                </div>
                <div className="dropdown d-flex align-items-center" style={{marginTop: '-35px'}}>
                    <img src="/images/Ellipse 840.png" alt="User Avatar" className="rounded-circle me-2" width="50" height="50"
                        data-bs-toggle="dropdown" aria-expanded="false" style={{cursor: 'pointer'}} />
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item text-white poppins-light mb-2" href="#"
                                style={{backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px'}}>Ver perfil</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item text-white poppins-light" href="#"
                                style={{backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px'}}>Cerrar sesión</a></li>
                        </ul>
                        <div className="d-flex fs-3 bg-secondary rounded-circle  text-black  justify-content-center me-3"
                            style={{height: '50px', width: '50px'}}>
                            <i className="text-center  bi-three-dots-vertical" data-bs-toggle="dropdown"
                                style={{cursor: 'pointer', backgroundColor: '#a19aac', display: 'flex', padding: '12px', borderRadius: '25px'}}></i>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item text-white poppins-light mb-2" href=""
                                    style={{backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px'}}>Configuración</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </header>

            {/* Contenido de la página de Verificación */}
            <main className="container-fluid p-5 rounded text-light" style={{background: 'transparent', overflowX: 'hidden'}}>
                {/* Vista PC grande y mediano */}
                <div className="d-md-none d-xl-block">
                    <div className="container"
                        style={{maxWidth: '1350px', border: '3px solid', color: '#ffffff', borderRadius: '85px', height: '1075px'}}>
                        <div className="text-center mb-4 my-5">
                            <img src="/svgs/Icon.svg" alt="Logo_question"/>
                                <h1 className="champ-bold fs-4"
                                    style={{marginTop: '-20px', transform: 'translateY(-85px)', marginLeft: '320px'}}>
                                    Michigan's</h1>
                                <h1 className="champ-bold fs-4"
                                    style={{marginTop: '-45px', transform: 'translateY(-50px)', marginLeft: '320px'}}>
                                    Store</h1>
                                <p className="poppins-light fs-5"
                                    style={{marginTop: '25px', background: '#7974f5', backgroundClip: 'text', color: 'transparent'}}>
                                    ¡Estás a un clic de empezar a vivir esta gran experiencia!Agrega tu información de pago y
                                    empieza de
                                    inmediato.</p>
                                    <p className="poppins-light fs-5">Agrega tu información de pago y empieza de inmediato.</p>
                                </div>
                                <div className="row" style={{marginTop: '65px', marginLeft: '110px'}}>
                                    {/* Productos Seleccionados */}
                                    <div className="col-md-6">
                                        <h2 className="poppins-bold fs-5 mb-3 bi-cart-plus"> Producto seleccionado</h2>
                                        <div
                                            style={{color: '#ffffff', border: '1px solid', width: '204px', marginTop: '-27px', marginLeft: '265px'}}>
                                        </div>
                                        <div className="mb-3 p-3 mt-5"
                                            style={{backgroundColor: '#5a5584', width: '395px', height: '75px', borderRadius: '9rem'}}>
                                            <p className="d-flex justify-content-between align-items-center option-container mx-2">
                                                <span style={{fontSize: '16px', width: '125px'}}>
                                                    Suscripción
                                                    <br />
                                                    <span className="text-white" style={{position: 'relative', top: '-4px'}}>mensual</span>
                                                </span>
                                                <span className="champ-bold"
                                                    style={{fontSize: '20px', marginLeft: '30px', width: '125px', lineHeight: '-10px'}}>21.60
                                                    USD</span>
                                                <img src="/images/ring.png" alt="Selection Image" className="toggle-image"
                                                    style={{height: '24px', cursor: 'pointer', marginRight: '45px', transform: 'translateX(50px)', marginTop: '-5px'}} onClick={handlerClick}/>
                                            </p>
                                        </div>
                                        <div className="mb-3 p-3"
                                            style={{backgroundColor: '#5a5584', width: '395px', height: '75px', borderRadius: '9rem'}}>
                                            <p className="d-flex justify-content-between align-items-center option-container mx-2" >
                                                <span style={{fontSize: '16px', width: '125px'}}>
                                                    UpColors Full
                                                    <br />
                                                    <span className="text-white" style={{position: 'relative', top: '-4px'}}>(4 Módulos)</span>
                                                </span>
                                                <span className="champ-bold"
                                                    style={{fontSize: '20px', marginLeft: '30px', width: '125px', lineHeight: '-10px'}}>37.80
                                                    USD</span>
                                                <img src="/images/ring.png" alt="Selection Image" className="toggle-image"
                                                    style={{height: '24px', cursor: 'pointer', marginRight: '45px', transform: 'translateX(50px)', marginTop: '-5px'}} onClick={handlerClick}/>
                                            </p>
                                        </div>
                                        <div className="mb-3 p-3"
                                            style={{backgroundColor: '#5a5584', width: '395px', height: '75px', borderRadius: '9rem'}}>
                                            <p className="d-flex justify-content-between align-items-center option-container mx-2">
                                                <span style={{fontSize: '16px', width: '125px'}}>
                                                    UpColors
                                                    <br />
                                                    <span className="text-light" style={{position: 'relative', top: '-4px'}}>Módulo 2</span>
                                                </span>
                                                <span className="champ-bold"
                                                    style={{fontSize: '20px', marginLeft: '30px', width: '125px', lineHeight: '-10px'}}>8.10
                                                    USD</span>
                                                <img src="/images/ring.png" alt="Selection Image" className="toggle-image"
                                                    style={{height: '24px', cursor: 'pointer', marginRight: '45px', transform: 'translateX(50px)', marginTop: '-5px'}} onClick={handlerClick}/>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Formulario de Pago */}
                                    <div className="col-md-6" style={{marginLeft: '-70px'}}>
                                        <h2 className="poppins-bold fs-5 mb-3"><img src="/svgs/Credit-card.svg" alt="Card"/> Crédito/Débito
                                        </h2>
                                        <div
                                            style={{color: '#ffffff', border: '1px solid', width: '354px', transform: 'translateY(-27px)', marginLeft: '188px'}}>
                                        </div>
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label poppins-light">Nombre y Apellido</label>
                                                <input type="text" className="form-control"
                                                    style={{textIndent: '10px', boxShadow: 'none', color: '#ffffff', background: 'linear-gradient(to right, #5a5584, #716d87)', border: 'none', borderRadius: '85px',height: '60px', width: '535px'}}
                                                    id="name" placeholder=""/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="card-number" className="form-label poppins-light">Número de tarjeta</label>
                                                <input type="text" className="form-control"
                                                    style={{textIndent: '10px', boxShadow: 'none', color: '#ffffff', background: 'linear-gradient(to right, #504a82, #716d87)', border: 'none', borderRadius: '85px', height: '60px', width: '535px'}}
                                                    id="card-number" placeholder=""/>
                                            </div>
                                            <div className="row g-2">
                                                <div className="col-6">
                                                    <label htmlFor="expiry" className="form-label poppins-light">Fecha de expiración</label>
                                                    <input type="text" className="form-control placeholder-white"
                                                        style={{textIndent: '10px', boxShadow: 'none', color: '#ffffff', background: 'linear-gradient(to right, #504a82, #716d87)', border: 'none', borderRadius: '85px', height: '60px', width: '255px'}}
                                                        id="expiry" placeholder="MM/AA" />
                                                </div>
                                                <div className="col-4" style={{marginLeft: '-25px', width: '275px'}}>
                                                    <label htmlFor="cvv" className="form-label poppins-light" style={{marginLeft: '30px'}}>Código
                                                        de
                                                        seguridad</label>
                                                    <div className="d-flex justify-content-center align-items-center" style={{width: '100%'}}>
                                                        <input type="text" className="form-control placeholder-white"
                                                            style={{textIndent: '10px', boxShadow: 'none', color: '#ffffff', background: 'linear-gradient(to right, #504a82, #716d87)', border: 'none', borderRadius: '85px', height: '60px', width: '255px'}}
                                                            id="cvv" placeholder="CVV" />
                                                            <img className="custom-tooltip poppins-light" src="/images/Question.png"
                                                                alt="question" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Nunca compartas tu código de seguridad CVV con nadie. Es crucial para proteger tu información financiera y evitar fraudes."
                                                                style={{position: 'absolute', height: '25px', width: '25px', marginRight: '-185px', marginTop: '-1px', color: '#504a82'}}/>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="form-check form-switch mt-3">
                                                    <label className="form-check-slabel poppins-light"
                                                        style={{marginLeft: '-40px', width: '410px', fontSize: '15px'}} htmlFor="save-info">Guardar
                                                        mis
                                                        datos de pago para futuras compras</label>
                                                    <div className="d-flex align-items-center" style={{width: '100%'}}>
                                                        <input className="form-check-input" style={{marginLeft: '350px', marginTop: '-20px'}}
                                                            type="checkbox" id="save-info" />
                                                    </div>
                                                    <div
                                                        style={{color: '#ffffff', border: '1px solid', width: '547px', marginTop: '20px', marginLeft: '-40px'}}>
                                                    </div>
                                                </div>
                                        </form>
                                    </div>
                                    {/* Métodos de Pago */}
                                    <div className="row text-center">
                                        <div className="col-md-6 d-flex flex-column align-items-start mt-4" style={{position: 'relative'}}>
                                            <p className="poppins-light fs-6"
                                                style={{marginLeft: '495px',width: '314px', marginTop: '13px', position: 'relative', zIndex: 2}}>
                                                Completar pago con:
                                            </p>
                                            <div className="row grid gap-2 gap-row-2"
                                                style={{marginLeft: '542px', width: '320px', position: 'relative', zIndex: 2}}>
                                                <a href="https://www.payu.com/" target="_blank"
                                                    style={{height: '44px', width: '80px', backgroundColor: '#ffffff', borderRadius: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <img src="/images/PAYU_LOGO_LIME 1.png" alt="PayU" className="img-fluid"
                                                        style={{height: '40px', width: '61px', padding: '5px'}} />
                                                </a>
                                                <a href="https://www.paypal.com/" target="_blank"
                                                    style={{height: '44px', width: '80px', backgroundColor: '#ffffff', borderRadius: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <img src="/images/Paypal.png" alt="PayPal" className="img-fluid"
                                                        style={{height: '30px', width: '39px', padding: '5px'}}/>
                                                </a>
                                                <a href="https://www.pse.com.co/" target="_blank"
                                                    style={{height: '44px', width: '80px', backgroundColor: '#ffffff', borderRadius: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <img src="/images/pse-logo.png" alt="PSE" className="img-fluid"
                                                        style={{height: '30px', width: '61px', padding: '5px'}}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4" style={{marginTop: '35px', marginLeft: '-50px'}}>
                                            <label htmlFor="cvv" className="form-label poppins-light"
                                                style={{marginLeft: '248px', fontSize: '14px', color: '#ee2b6b', width: '305px'}}>¡Tengo un cupón
                                                de
                                                descuento!</label>
                                            <input type="text" className="form-control placeholder-white"
                                                style={{textIndent: '10px', boxShadow: 'none', color: '#ffffff', background: 'linear-gradient(to right, #504a82, #716d87)', border: '2px solid#ee2b6b', borderRadius: '85px', height: '54px', width: '250px', marginLeft: '279px'}}
                                                id="cvv" placeholder="" />
                                        </div>
                                        <div
                                            style={{color: '#ffffff', border: '1px solid', width: '547px', marginLeft: '555px', marginTop: '50px'}}>
                                        </div>
                                        <button className="btn btn-accept poppins-bold">Aceptar y Comprar</button>
                                    </div>
                                </div>
                        </div>
                </div>
            </main>
        </div>
    );
};
