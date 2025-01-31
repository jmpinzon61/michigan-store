import '../../templates/css/styles.css';
import '../../templates/css/styles-interface-classes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { closeMenu } from '../../templates/ts/close-menu';
import { Link } from 'react-router-dom';


export const Menu_navigate = () => {
  return (
    <div className='bg-main-purple'>
        <main className='container-fluid' style={{overflow: 'hidden'}}>
            <img src="/images/Section-menu-user-2.png" style={{position: 'fixed', zIndex: 1, width: '40%', height: '100vh', marginLeft: '550px', marginTop: '-105px'}}
                alt=""/>
            <img src="./images/Font-2-menu-user.png"
                style={{position: 'fixed', zIndex: 4, width: '50%', height: '810px', marginLeft: '400px', marginTop: '-60px'}}
                alt=""/>
            <img src="./images/Font-4-menu-user.png"
                style={{position: 'fixed', zIndex: 2, width: '45%', height: '440px',  marginLeft: '155px', marginTop: '150px'}}
                alt=""/>
            <section className="row justify-content-between menu-container-user">
                    <div className="menu-user">
                        <button className="close-btn-menu-2" onClick={closeMenu}>X</button>
                        <div style={{position: 'absolute', zIndex: 1}}><Link to="/us">
                                <img style={{marginLeft: '-625px', marginTop: '50px', width: '370px', height: '170px'}}
                                    src="/svgs/Hi User Name-menu-user-2.svg" alt=""/></Link></div>
                        <div style={{position: 'absolute',  zIndex: -2}}><Link to="/start">
                                <img style={{marginLeft: '-405px', marginTop: '-95px', width: '310px', height: '310px'}}
                                    src="/images/section1-menu-user-2.png" alt=""/></Link></div>
                        <div style={{position: 'absolute', zIndex: 3}}><Link to="/us">
                                <img style={{marginLeft: '-190px', marginTop: '180px',width: '55px', height: '55px'}}
                                    src="/images/section2-menu-user-2.png" alt=""/></Link></div>
                        <div style={{position: 'absolute', zIndex: 12}}><Link to="/notes">
                                <img style={{marginLeft: '425px', marginTop: '-40px', width: '30px',height: '30px'}} 
                                src="/images/section8-menu-user-2.png" alt=""/></Link>
                        </div>
                        <div style={{position: 'absolute', zIndex: 45}}><Link to="/avatar">
                                <img style={{marginLeft: '-100px', marginTop: '-180px', width: '55px', height: '55px'}}
                                    src="/images/section3-menu-user-2.png" alt=""/></Link></div>
                        <div style={{position: 'absolute', zIndex: 50}}><Link to="/courses">
                                <img style={{marginLeft: '-30px', marginTop: '45px', width: '160px', height: '160px'}}
                                    src="/images/section4-menu-user-2.png.png" alt="" /></Link></div>
                        <div style={{position: 'absolute', zIndex: 6}}><Link to="/notes">
                                <img style={{marginLeft: '275px', marginTop: '160px', width: '220px', height: '220px'}}
                                    src="/images/section5-menu-user-2.png" alt=""/></Link></div>
                        <div style={{position: 'absolute', zIndex: 5}}><Link to="/notes">
                                <img style={{marginLeft: '425px', marginTop: '-40px', width: '120px', height: '90px'}}
                                    src="/images/section6-menu-user-2.png" alt=""/></Link></div>
                        <div style={{position: 'absolute', zIndex: 7}}><Link to="/diary">
                                <img style={{marginLeft: '280px', marginTop: '-210px', width: '190px', height: '150px'}}
                                    src="/images/section7-menu-user-2.png" alt=""/></Link></div>
                        <div style={{position: 'absolute', zIndex: 25}}><Link to="/blogs">
                                <img style={{marginLeft: '70px', marginTop: '247px', width: '50px', height: '50px'}}
                                    src="/images/Menu-user-8.png" alt=""/></Link></div>
                        <div style={{position: 'absolute', zIndex: 30}}><Link to="/blogs">
                                <img style={{marginLeft: '152px', marginTop: '255px', width: '60px', height: '60px'}}
                                    src="/images/Menu-user-9.png" alt=""/></Link></div>
                        <div style={{position: 'absolute', zIndex: 40}}><Link to="/start">
                                <img style={{marginLeft: '5px', marginTop: '-215px', width: '95px', height: '95px'}}
                                    src="/images/Menu-user-5.png" alt=""/></Link></div>
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
        </div>
    </div>
  );
};
