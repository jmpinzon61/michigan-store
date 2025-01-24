import '../../templates/css/styles.css';
import '../../templates/css/styles-blogs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollButton } from "../scroll-button/ScrollButton";
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { initEnlaceHandler } from "../../templates/ts/link-handler";
import { initReadMore } from '../../templates/ts/jquery-readmore';
import { useEffect } from "react";



export const Blogs = () => {

    useEffect(()=>{
        initEnlaceHandler();
        initReadMore();
    }, []);
    

    return (
        <div className="bg-main-purple" style={{ overflowX: 'hidden', overflowY: 'scroll', height: '100vh'}}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{ width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px'}}>
                <h1 className="champ-bold" style={{margin: '0 0 0 -2px',marginTop: '-45px', fontSize: '18px'}}>Michigan's</h1>
                <h1 className="champ-bold" style={{margin: '0 0 0 -123px', fontSize: '18px'}}>Store</h1>
                {/* Nav in PC */}
                <div className="d-none d-block d-lg-block">
                    <nav className="d-flex justify-content-between align-items-center"
                        style={{maxWidth: '100%', marginRight: '470px', marginTop: '-30px'}}>
                        <a href="./inicio.html" className="text-white mx-4 poppins-bold enlace"
                            style={{fontSize: '17px', textDecoration: 'none'}}>Inicio</a>
                        <a href="./cursos.html" className="text-white mx-4 poppins-bold enlace"
                            style={{fontSize: '17px', textDecoration: 'none'}}>Cursos</a>
                        <a href="./precios.html" className="text-white mx-4 poppins-bold enlace"
                            style={{fontSize: '17px', textDecoration: 'none'}}>Precios</a>
                        <a href="./nosotros.html" className="text-white mx-4 poppins-bold enlace"
                            style={{fontSize: '17px', textDecoration: 'none'}}>Nosotros</a>
                        <a href="./blogs.html" className="text-white mx-4 poppins-bold enlace"
                            style={{fontSize: '17px', textDecoration: 'none'}}>Blogs</a>
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
                        data-bs-toggle="dropdown" aria-expanded="false" style={{cursor: 'pointer'}}/>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item text-white poppins-light mb-2" href="#"
                                style={{backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px'}}>Ver perfil</a></li>
                            <li>
                                <hr className="dropdown-divider"></hr>
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

            {/* Contenido de la página de Blogs */}
            <main className="container-fluid my-5">
                {/* Hero Section */}
                <section className="text-white text-center mb-5 row justify-content-center"
                    style={{margin: '0 auto', maxWidth: '1350px'}}>
                    <div className="d-flex flex-row">
                        <div className="col-6">
                            <div className="card text-bg-dark"
                                style={{borderRadius: '55px', width: '868px', height: '522px', marginLeft: '6px'}}>
                                <img src="/images/listening.png"
                                    style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit'}} className="card-img"
                                    alt="Listening..."/>
                            </div>
                        </div>
                        <div className="col-6">
                            <h2 className="title poppins-bold text-start" style={{maxWidth: '400px'}}>Traemos algunos tips, Métodos que mejor se adaptan a ti.
                            </h2>
                            <p id="description-1" className="descrption poppins-light text-start  with-gradient">Lorem ipsum dolor
                                sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh
                                euismod tincidunt utreet dolore magna
                                aliquam erat volutpat. Ut wisi enim ad im
                                veniam, quis nostrud exerci tation ullarper
                                suscipit lobrtis nisl ut aliquip ex ea comdo
                                consequat. Duis auem vel eum iriure dolor
                                in hendrerit in vulputate velit esse molesie
                                consequat, vel illum dolore eu feuiat nulla
                                facilisis at vero eros et accumsan et
                                iusto odio dignissim qui blandit prent luptatum
                                zzril delenit ague duis dolore te feugait
                                nulla facilisi.</p>
                            <a href="#" id="read-more-1" className="btn btn-primary-learning p-3 poppins-bold"
                                style={{marginRight: '-130px'}}>Seguir
                                leyendo</a>
                        </div>
                    </div>
                </section>

                {/* Blog Cards */}
                <section className="row row-cols-1 row-cols-md-3 g-3 justify-content-center"
                    style={{margin: '0 auto', maxWidth: '1350px'}}>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/Tips.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '350px', color: '#7974f5', fontSize: '30px', marginTop: '-35px', maxWidth: '400px'}}>Tips
                                        para aprovechar Michigan’s Store al 100%</h5>
                                    <p id="description-2" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, coetuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volut lore.</p>
                                    <a id="read-more-2" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/Experts.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '350px', color: '#7974f5', fontSize: '30px', marginTop: '-35px', maxWidth: '400px'}}>De cero
                                        a expertos en poco tiempo</h5>
                                    <p id="description-3" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, ectetuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam, quis
                                        nostrud exerci tation ullamcorper.</p>
                                    <a id="read-more-3" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/Agesroxa.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '350px', color: '#7974f5', fontSize: '30px', marginTop: '-35px', maxWidth: '400px'}}>Lorem
                                        ipsum</h5>
                                    <p id="description-4" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, constuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam, quis
                                        nostrud exerci tation ullamcorper
                                        suscipit lobortis nisl ut aliquip ex ea.</p>
                                    <a id="read-more-4" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/History.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '350px', color: '#7974f5', fontSize: '30px', marginTop: '-35px', maxWidth: '400px'}}>
                                        Inspírate por medio de vivencias de quienes ya lo lograron...</h5>
                                    <p id="description-5" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, ectetuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam.</p>
                                    <a id="read-more-5" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/Ipsumlor.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '350px', color: '#7974f5', fontSize: '30px', marginTop: '-35px', maxWidth: '400px'}}>Lorem
                                        ipsum</h5>
                                    <p id="description-6" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, constuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam, quis
                                        nostrud exerci tation ullamcorper
                                        suscipit lobortis nisl ut aliquip ex ea.</p>
                                    <a id="read-more-6" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/Programate.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '350px', color: '#7974f5', fontSize: '30px', marginTop: '-35px',maxWidth: '400px'}}>Traemos
                                        algunos tips, organiza tu tiempo y aprende ingles ¡YA!</h5>
                                    <p id="description-7" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, ectetuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam.</p>
                                    <a id="read-more-7" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/Dolor-sit.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '350px', color: '#7974f5', fontSize: '30px', marginTop: '-35px', maxWidth: '400px'}}>Lorem
                                        ipsum</h5>
                                    <p id="description-8" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, constuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam,
                                        quis nostrud exerci tation ullamcorper
                                        suscipit lobortis nisl ut aliquip ex ea.</p>
                                    <a id="read-more-8" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/Upgrade.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '350px', color: '#7974f5', fontSize: '30px', marginTop: '-35px', maxWidth: '400px'}}>
                                        Inspírate por medio de vivencias de quienes ya lo lograron...</h5>
                                    <p id="description-9" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, ectetuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam.</p>
                                    <a id="read-more-9" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-blog mb-2">
                            <img src="/images/Method.png"
                                style={{width: '88%', height: '50%', objectFit: 'cover', borderRadius: '15px'}} className="mx-4 my-4"
                                alt="..."/>
                                <div className="card-body mx-4 my-4">
                                    <h5 className="card-title champ-bold text-start"
                                        style={{width: '400px', color: '#7974f5', fontSize: '30px', marginTop: '-35px', maxWidth: '400px'}}>Traemos
                                        algunos tips, Métodos que mejor se adaptan a ti.</h5>
                                    <p id="description-10" className="card-text poppins-light text-start with-gradient" style={{color: 'white'}}>
                                        Lorem ipsum dolor sit amet, ectetuer
                                        adipiscing elit, sed diam nonummy
                                        nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat.
                                        Ut wisi enim ad minim veniam.</p>
                                    <a id="read-more-10" href="#" className="btn btn-primary-learning-2 p-2 poppins-bold"
                                        style={{marginRight: '-45px'}}>Seguir
                                        leyendo</a>
                                </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <div className="col" style={{maxWidth: '1200px', margin: '0 auto', marginTop: '95px'}}>
                            <p className="text-start poppins-light"
                                style={{height: 'auto', width: '120px', fontSize: '24px', marginLeft: '37%'}}>Mostrar</p>
                            <p className="text-start poppins-light"
                                style={{height: 'auto', width: '120px', fontSize: '24px', marginLeft: '35%', marginTop: '-25px'}}>
                                contenido</p>
                        </div>
                        <div className="col" style={{marginTop: '-240px'}}>
                            <div className="image-item-1">
                                <img src="/images/Size-1.png" alt="Size 1"/>
                            </div>
                            <div className="image-item-2">
                                <img src="/images/Size-2.png" alt="Size 2"/>
                            </div>
                            <div className="image-item-3">
                                <img src="/images/Size-3.png" alt="Size 3"/>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 gy-4  mt-5 justify-content-center"
                        style={{margin: '0 auto', maxWidth: '1350px'}}>
                        <div className="col" style={{marginLeft: '-190px'}}>
                            <div className="card-up h-100">
                                <p className="poppins-light" style={{marginLeft: '15px'}}>¡El tema del próximo Blog lo decides tú!</p>
                                <div className="form-floating">
                                    <textarea className="form-control text-white no-focus"
                                        style={{background: '#211055', border: 'none', outline: 'none', width: '410px'}}
                                        placeholder="Escribe aquí" id="floatingTextarea"></textarea>
                                    <label htmlFor="floatingTextarea" style={{color: '#ffffff', fontSize: '12px'}}>Escribe aquí</label>
                                </div>
                                <div style={{position: 'relative', display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                                    <input type="email" className="form-control custom-input poppins-light no-focus"
                                        style={{fontSize: '12px', width: 'calc(100% - 110px)', height: '60px', background: '#615D78', borderRadius: '45px', border: 'none', color: '#ffffff', boxShadow: 'none', outline: 'none'}}
                                        placeholder="¡Ingresa tu correo!"/>
                                        <button className="btn"
                                            style={{background: 'none', border: 'none', position: 'absolute', right: '40px', height: '60px', width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
                                            <img src="/svgs/Message.svg" style={{height: '60px', width: '60px'}} alt="Enviar"/>
                                        </button>
                                        <div className="form-check"
                                            style={{position: 'absolute', zIndex: 25, marginTop: '145px', marginLeft: '15px'}}>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1"/>
                                                <label className="form-check-label text-start" style={{width: '370px', fontSize: '12px'}}
                                                    htmlFor="flexRadioDefault1">
                                                    Al enviar este mensaje, aceptas que nos comuniquemos contigo a través de correo
                                                    electrónico para proporcionarte más información.
                                                </label>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-medium h-100">
                                <p className="poppins-light " style={{marginLeft: '15px'}}>Noticias Michigan’s Store</p>
                                <img src="/images/On-line.png"
                                    style={{height: '260px', width: '430px', objectFit: 'cover', borderRadius: 'inherit'}}
                                    className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <img src="/svgs/On Line.svg"
                                            style={{position: 'relative', zIndex: 5, marginTop: '-470px', marginLeft: '148px'}}
                                            alt="On-line-text"/>
                                            <img src="/svgs/Cada martes - 15 Hrs CO.svg"
                                                style={{position: 'relative', zIndex: 4, marginTop: '-435px', marginLeft: '157px'}}
                                                alt="Text"/>
                                                <p className="card-text text-start"
                                                    style={{position: 'relative', zIndex: 3, marginTop: '-205px', width: '185px', marginLeft: '149px'}}>
                                                    Estaremos en vivo para
                                                    hablar en ingles del ingles
                                                    ¡Practiquemos justos y
                                                    creemos una comunidad!.</p>
                                            </div>
                                    </div>
                            </div>
                            <div className="col">
                                <div className="card-down h-100" style={{backgroundColor: '#1A1244', borderRadius: '16px', padding: '16px'}}>
                                    <p className="poppins-light" style={{marginLeft: '-2px', color: '#ffffff', marginTop: '-14px'}}>Contenido
                                        recomendado</p>
                                    <div className="card mb-3"
                                        style={{backgroundColor: '#2A1E5C', display: 'flex', borderRadius: '12px', padding: '16px', alignItems: 'center', width: '429px', height: '125px', marginLeft: '-15px', marginTop: '-2px'}}>
                                        <div className="d-flex flex-row">
                                            <div className="col" style={{marginLeft: '-55px'}}>
                                                <img src="/images/Digital.png" alt="Podcast" className="rounded"
                                                    style={{height: '110px', width: '110px', objectFit: 'cover', marginRight: '80px', marginTop: '-8px'}}/>
                                            </div>
                                            <div className="col" style={{marginLeft: '50px'}}>
                                                <h6 style={{color: '#ffffff', marginLeft: '-110px'}}>Lorem Ipsum Podcast</h6>
                                                <p className="text-start"
                                                    style={{margin: 0, fontSize: '12px', color: '#d1cfe2', width: '220px', marginLeft: '-110px'}}>
                                                    Lorem ipsum
                                                    dolor sit amet,
                                                    consectetur adipiscing elit, sed diam nonummy euismod tincidunt ut laoreet
                                                    dolore.</p>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className="card mb-3"
                                        style={{backgroundColor: '#2A1E5C', display: 'flex', borderRadius: '12px', padding: '16px', alignItems: 'center', width: '429px', height: '125px', marginLeft: '-15px', marginTop: '-10px'}}>
                                        <div className="d-flex flex-row">
                                            <div className="col" style={{marginLeft: '-5px'}}>
                                                <img src="/images/Student.png" alt="Podcast" className="rounded"
                                                    style={{height: '110px', width: '110px', objectFit: 'cover', marginRight: '80px', marginTop: '-8px'}}/>
                                            </div>
                                            <div className="col" style={{marginLeft: '-137px'}}>
                                                <h6 style={{margin: '0', color: '#ffffff'}}>Lorem Ipsum Podcast</h6>
                                                <p style={{margin: '0', fontSize: '12px', color: '#d1cfe2'}}>Lorem ipsum dolor sit amet,
                                                    consetuds adipiscing elit, sed diam nonummy op euismod tincidunt ut laoreet
                                                    dolore. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                </section>
            </main>

            {/* Footer PC */}
            <div className="d-none d-block d-lg-block" style={{ marginTop: '195px' }}>
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
                            <p className="poppins-light"
                                style={{ fontSize: '15px', color: '#a9aeeb', marginTop: '-15px', marginLeft: '55px' }}>@2025 Michigan's
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
            <ScrollButton />
        </div>
    );
};
