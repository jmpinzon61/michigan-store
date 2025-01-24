import '../../templates/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const Content_quiz_module = () => {

    return (
        <div className='bg-main-quizzes' style={{ overflowX: 'hidden', overflowY: 'hidden', height: '100vh' }}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px'}}>
                <a href="./inicio.html" className="champ-bold"
                    style={{margin: '0 0 0 -2px', marginTop: '-55px', color: 'inherit', textDecoration: 'none', fontSize: '18px'}}>Michigan's</a>
                <a href="./inicio.html" className="champ-bold"
                    style={{margin: '-10px 0 0 -390px', color: 'inherit', textDecoration: 'none', fontSize: '18px'}}>Store</a>
                {/* Nav in PC */}
                <div className="d-none d-block d-lg-block">
                    <nav className="d-flex justify-content-between align-items-center"
                        style={{maxWidth: '100%', marginRight: '470px', marginTop: '-30px'}}>
                        {/* <a href="./inicio.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Inicio</a>
                        <a href="./cursos.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Cursos</a>
                        <a href="./precios.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Precios</a>
                        <a href="./nosotros.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Nosotros</a>
                        <a href="./blogs.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Blogs</a>  */}
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
                            <li><a className="dropdown-item text-white poppins-light mb-2" href="./content-quiz-module.html"
                                style={{backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px'}}>Quizz Module</a></li>
                            <li><a className="dropdown-item text-white poppins-light" href="#"
                                style={{backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px'}}>Configuración</a></li>
                            <li>
                                <hr className="dropdown-divider" />
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
            
            <a href="./quizzes.html">
                <img src="/svgs/vocabulary.svg"
                    style={{ position: 'fixed', zIndex: 20, width: '50vw', height: '50vh', marginLeft: '395px', marginTop: '135px' }} />
            </a>

            <img src="/images/Font-module-quizz-2.png"
                style={{ position: 'fixed', zIndex: 4, width: '225px', height: '225px', marginLeft: '750px', marginTop: '225px' }} />
            <img src="/images/Font-module-quizz.png"
                style={{ position: 'fixed', zIndex: 3, width: '1500px', height: '690px', marginLeft: '90px', marginTop: '-85px' }} />
            <img src="/images/Font-module-quizz-3.png"
                style={{ position: 'fixed', zIndex: 2, width: '195px', height: '55px', marginLeft: '110px', marginTop: '540px' }} />

            <main className="container-fluid d-flex justify-content-center my-3 mx-auto">
                <section style={{ margin: '25px 10px 10px 10px', position: 'relative', zIndex: 10}}>
                    <h1 className="poppins-light" style={{ fontSize: '25px', marginLeft: '450px' }}>UpColors - Modulo 1</h1>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#ff8f43', borderRadius: '45px', height: '85px', width: '85px', padding: '15px 15px 15px 15px', fontWeight: 500, marginLeft: '120px', marginTop: '80px' }}>
                            vowel sound</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#fc6045', borderRadius: '85px', height: '140px', width: '140px', padding: '15px 15px 15px 15px', fontWeight: 500, marginLeft: '300px', marginTop: '-95px' }}>
                            Consonant Sounds</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#f93047', borderRadius: '85px', height: '105px', width: '105px', padding: '15px 15px 15px 15px', fontWeight: 500, marginLeft: '620px', marginTop: '-205px' }}>
                            let’s say hello!</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#f60046', borderRadius: '85px', height: '95px', width: '95px', padding: '15px 15px 15px 15px', fontWeight: 500, marginLeft: '710px', marginTop: '-55px' }}>
                            spelling bee!</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#d20052', borderRadius: '85px', height: '105px', width: '105px', padding: '15px 15px 15px 15px', fontWeight: 500, marginLeft: '805px', marginTop: '-150px' }}>
                            animals & colors</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#ad005c', borderRadius: '85px', height: '105px', width: '105px', padding: '15px 15px 15px 15px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '20px', marginTop: '60px' }}>
                            parts of the body</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#890056', borderRadius: '85px', height: '95px', width: '95px', padding: '15px 15px 15px 15px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '225px', marginTop: '-85px' }}>
                            where are you from?</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#72007e', borderRadius: '85px', height: '95px', width: '95px', padding: '15px 15px 15px 15px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '355px', marginTop: '-55px' }}>
                            family & friends</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#5b0097', borderRadius: '95px', height: '185px', width: '185px', padding: '15px 15px 15px 15px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '495px', marginTop: '-165px', position: 'absolute', zIndex: 20 }}>
                            professions & occupations</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#4400af', borderRadius: '85px', height: '140px', width: '140px', padding: '15px 15px 15px 15px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '680px', marginTop: '-85px' }}>
                            personality traits</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#602cdd', borderRadius: '125px', height: '205px', width: '205px', padding: '15px 15px 15px 15px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '815px', marginTop: '-215px' }}>
                            my favorite food and drinks</p>
                    </div>
                    <div className="movable-card">
                        <p className="poppins-light text-center"
                            style={{ background: '#7b57ea', borderRadius: '85px', height: '140px', width: '140px', padding: '0', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '980px', marginTop: '-130px' }}>
                            fruit and vegetables
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};
