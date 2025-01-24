import '../../templates/css/styles.css';
import '../../templates/css/styles-interface-classes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { closeMenu } from '../../templates/ts/close-menu';


export const Menu_navigate_2 = () => {
  return (
    <div className='bg-main-purple'>
        <main className='container-fluid' style={{overflow: 'hidden'}}>
            <img src="/images/Font-menu-user.png" style={{position: 'fixed', zIndex: 1, width: '100%', height: '100vh'}}
                alt=""/>
            <img src="/images/Font-1-menu-user.png" style={{position: 'fixed', zIndex: 2, width: '100%', height: '100vh'}}
                alt=""/>
            <img src="/images/Font-3-menu-user.png"
                style={{position: 'fixed', zIndex: 3, width: '20%', height: '325px', marginTop: '-20px', marginLeft: '1075px'}}
                alt=""/>
            <img src="/images/Font-2-menu-user.png"
                style={{position: 'fixed', zIndex: 4, width: '40%', height: '325px', bottom: '0', marginLeft: '450px'}}
                alt=""/>
            <section className="row justify-content-between menu-container-user">
                <div className="menu-user">
                    <button className="close-btn" style={{marginTop: '50px', marginRight: '30px'}} onClick={closeMenu}>X</button>
                    <div style={{position: 'absolute', zIndex: 1}}><a href="#nosotros">
                            <img style={{marginLeft: '-575px', marginTop: '50px', width: '370px', height: '170px'}}
                                src="/svgs/The-House.svg" alt="" /></a></div>
                    <div style={{position: 'absolute', zIndex: 3}}><a href="./inicio.html">
                            <img style={{marginLeft: '-202px', marginTop: '100px', width: '70px', height: '70px'}}
                                src="/images/Menu-user-5.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 2}}><a href="./nosotros.html">
                            <img style={{marginLeft: '-295px', marginTop: '-150px',width: '210px', height: '210px'}}
                                src="/images/Menu-user-1.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 12}}><a href="./nosotros.html">
                            <img style={{marginLeft: '-245px', marginTop: '-315px'}} src="/svgs/Menu-user-11.svg" alt=""/></a>
                    </div>
                    <div style={{position: 'absolute', zIndex: 11}}><a href="#avatar-menu">
                            <img style={{marginLeft: '-95px', marginTop: '-60px', width: '147px', height: '147px'}}
                                src="/images/Menu-user-10.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 4}}><a href="./cursos.html">
                            <img style={{marginLeft: '-135px', marginTop: '140px', width: '120px', height: '70px'}}
                                src="/images/Menu-user-2.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 6}}><a href="./precios.html">
                            <img style={{marginLeft: '-300px', marginTop: '200px', width: '120px', height: '70px'}}
                                src="/images/Menu-user-4.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 5}}><a href="./blogs.html">
                            <img style={{marginLeft: '-205px', marginTop: '240px', width: '120px', height: '70px'}}
                                src="/images/Menu-user-3.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 7}}><a href="#animacion-bosina-sonido">
                            <img style={{marginLeft: '-255px', marginTop: '300px', width: '60px', height: '60px'}}
                                src="/images/Menu-user-6.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 8}}><a href="#animacion-intercambiar-banderas">
                            <img style={{marginLeft: '-120px', marginTop: '310px', width: '60px', height: '60px'}}
                                src="/images/Menu-user-7.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 9}}><a href="#blogs">
                            <img style={{marginLeft: '-85px', marginTop: '250px', width: '50px', height: '50px'}}
                                src="/images/Menu-user-8.png" alt=""/></a></div>
                    <div style={{position: 'absolute', zIndex: 10}}><a href="#blogs">
                            <img style={{marginLeft: '-45px', marginTop: '255px', width: '60px', height: '60px'}}
                                src="/images/Menu-user-9.png" alt=""/></a></div>
                </div>
            </section>
        </main>

        <div className="footer-user">
            <div className="social-icons mb-3" style={{position: 'relative', zIndex: 10}}>
                <a className='mx-2' href="https://tiktok.com/@michiganmasterco" style={{backgroundColor: '#b8abdc', borderRadius: '50%', height: '55px', width: '55px', lineHeight: '55px', textAlign: 'center', display: 'inline-block'}}>
                    <FontAwesomeIcon style={{marginTop: '12px',fontSize: '30px', textDecoration: 'none', color:' #ffffff'}} icon={faTiktok} />
                </a>
                <a className='mx-2' href="https://www.instagram.com/michiganmastersas/" style={{backgroundColor: '#b8abdc', borderRadius: '50%', height: '55px', width: '55px', lineHeight: '55px', textAlign: 'center', display: 'inline-block'}}>
                    <FontAwesomeIcon style={{marginTop: '12px', fontSize: '30px', textDecoration: 'none', color:' #ffffff'}} icon={faInstagram} />
                </a>
                <a className='mx-2' href="https://wa.me/+573228532254" style={{backgroundColor: '#b8abdc', borderRadius: '50%', height: '55px', width: '55px', lineHeight: '55px', textAlign: 'center', display: 'inline-block'}}>
                    <FontAwesomeIcon style={{marginTop: '12px', fontSize: '30px', textDecoration: 'none', color:' #ffffff'}} icon={faWhatsapp} />
                </a>
            </div>
            <div style={{position: 'relative', zIndex: 10}}>
                <p className="poppins-light">Privacy Policy | Terms & Agreements</p>
                <p className="poppins-light">@2025 Michigan's Store | Todos los derechos reservados</p>
            </div>
        </div>
    </div>
  );
};
