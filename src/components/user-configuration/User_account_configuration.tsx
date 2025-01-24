import '../../templates/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollButton } from '../scroll-button/ScrollButton';


export const User_account_configuration = () => {
  return (
    <div className='bg-main-purple' style={{overflowX: 'hidden', overflowY: 'scroll'}}>
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

      <main className='container-fluid my-5'>
        <section className='row justify-content-between'>
            <div className="col-md-6 mb-4 mb-md-0 mx-auto" style={{maxWidth: '510px', width: '400px'}}>
                <div className="text-start">
                    <h2 className="champ-bold fs-1 mb-3">Cuenta</h2>
                    <p className="mb-5 poppins-light">Miembro desde noviembre de 2025</p>
                    <p className="mt-3 mb-4 poppins-light">Tipo de suscripción</p>
                    <button className="btn btn-primary rounded-pill gradient-button-settings-account champ-bold fs-6">
                        cancelar suscripción
                    </button>
                </div>
            </div>            
            <div className="col-6" style={{maxWidth: '1200px'}}>
                <div className="mb-4">
                    <h3 className="champ-bold fs-5 mb-3">INFORMACIÓN DE FACTURACIÓN</h3>
                    <div
                        style={{color: '#ffffff', border: '1px solid', width: '215px',  marginTop: '-27px', marginLeft: '335px'}}>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <p className="mb-1 poppins-light">user@mail.com</p>
                            <small className="text-start" style={{color: '#baa3ff'}}>Correo</small>

                            <p className="mt-3">************</p>
                            <small className="text-start" style={{color: '#baa3ff'}}>Contraseña</small>

                            <p className="mb-4 poppins-light">000 000 000</p>
                            <small className="text-start" style={{color: '#baa3ff'}}>Teléfono</small>

                            <p className="mb-4 poppins-light">Bogotá - Colombia</p>
                            <small className="text-start" style={{color: '#baa3ff'}}>Ubicacón</small>
                        </div>
                        <div className="col-6 mt-2" style={{paddingRight: '105px', marginLeft: '-120px', maxWidth: '610px', width: '405px'}}>
                            <div className="mb-5" style={{marginTop: '20px'}}>
                                <a href="" className="text-primary small d-block mb-3 poppins-light text-end"
                                    style={{textDecoration: 'none'}}>
                                    Cambiar correo de cuenta
                                </a>
                            </div>
                            <div style={{marginTop: '60px'}}>
                                <a href="" className="text-primary small d-block mb-3 poppins-light text-end"
                                    style={{textDecoration: 'none'}}>
                                    Cambiar contraseña
                                </a>
                            </div>
                            <div className="mb-3" style={{marginTop: '52px'}}>
                                <a href="" className="text-primary small d-block mb-3 poppins-light text-end"
                                    style={{textDecoration: 'none'}}>
                                    Teléfono
                                </a>
                            </div>
                            <div style={{marginTop: '53px'}}>
                                <a href="" className="text-primary small d-block mb-3 poppins-light text-end"
                                    style={{textDecoration: 'none'}}>
                                    Ubicación
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="champ-bold fs-5 mb-3">INFORMACIÓN DE PLAN</h3>
                    <div
                        style={{color: '#ffffff', border: '1px solid', width: '305px', marginTop: '-27px', marginLeft: '245px'}}>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <p className="mb-1 poppins-light">Suscripción mensual</p>
                            <small className="text-start poppins-light" style={{color: '#baa3ff'}}>Tipo de
                                suscripción</small>
                            <p className="mt-2 mb-0 poppins-light">3 de Julio de 2025</p>
                            <small className="text-start poppins-light" style={{color: '#baa3ff'}}>Fechas de pago</small>
                        </div>
                        <div className="col-6" style={{paddingRight: '105px', marginLeft: '-125px', marginTop: '10px', maxWidth: '610px', width: '405px'}}>
                            <div className="mb-4" style={{marginTop: '20px'}}>
                                <a href="" className="text-primary small d-block mb-3 poppins-light text-end"
                                    style={{textDecoration: 'none'}}>
                                    Formas de pago
                                </a>
                            </div>
                            <div style={{marginTop: '36px'}}>
                                <a href="" className="text-primary small d-block mb-3 poppins-light text-end"
                                    style={{textDecoration: 'none'}}>
                                    información de facturación
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="champ-bold fs-5 mb-3">CLÁUSULAS Y POLÍTICAS DE USO</h3>
                    <div
                        style={{color: '#ffffff', border: '1px solid', width: '205px', marginTop: '-27px', marginLeft: '345px'}}>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <p className="mb-2 small poppins-light text-start" style={{width: '420px'}}>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since specimen book.
                            </p>
                        </div>
                        <div className="col-6" style={{maxWidth: '410px', width: '305px'}}>
                            <div style={{marginTop: '39px'}}>
                                <a href="" className="text-primary small poppins-light mt-6"
                                    style={{textDecoration: 'none', marginLeft: '102px'}}>leer todo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mx-auto" style={{maxWidth: '900px', width: '825px'}}>
                <div className="row">
                    <div className="col-6">
                        <div
                            style={{color: '#6e6bf6', border: '1px solid', width: '410px', marginTop: '77px', marginLeft: '-185px'}}>
                        </div>
                        <p className="poppins-light text-center"
                            style={{marginTop: '-15px', color: '#6e6bf6', marginLeft: '310px', position: 'absolute', zIndex: 5}}>
                            Michigan’s Store</p>
                    </div>
                    <div className="col-6">
                        <div
                            style={{color: '#6e6bf6', border: '1px solid', width: '410px', marginTop: '77px', marginLeft: '140px'}}>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 grid gap-4 ms-4 w-100">
                    <div className="col">
                        <a href="https://wa.me/+573228532254" className="text-white d-block mb-3 poppins-light text-start"
                            style={{textDecoration: 'none', maxWidth: '180px', width: '145px'}}>
                            Centro de ayuda
                        </a>
                    </div>
                    <div className="col">
                        <a href="/inicio.html" className="text-white d-block mb-3 poppins-light text-start"
                            style={{textDecoration: 'none', maxWidth: '180px', width: '180px'}}>
                            Preguntas frecuentes
                        </a>
                    </div>
                    <div className="col">
                        <a href="./cursos.html" className="text-white d-block mb-3 poppins-light text-start"
                            style={{textDecoration: 'none', maxWidth: '140px'}}>
                            Cursos
                        </a>
                    </div>
                    <div className="col">
                        <a href="./precios.html" className="text-white d-block mb-3 poppins-light text-start"
                            style={{textDecoration: 'none', maxWidth: '140px'}}>
                            Precios
                        </a>
                    </div>
                    <div className="col">
                        <a href="./blogs.html" className="text-white d-block mb-3 poppins-light text-start"
                            style={{textDecoration: 'none', maxWidth: '140px'}}>
                            Blog
                        </a>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Scrollbar button */}
      <ScrollButton />
    </div>
  )
}
