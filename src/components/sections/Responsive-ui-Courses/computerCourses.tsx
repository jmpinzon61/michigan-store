import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { YearDisplay } from '../../Year/YearDisplay';
import { initializeCarouselControls } from '../../../templates/ts/carousel-controls-jquery';
import { initializeCourseCardHover } from '../../../templates/ts/card-hover-jquery';
import { initializeScrollContainers } from '../../../templates/ts/scroll-handler';

interface Props {
    videoUrl: string;
    posterUrl: string;
    handleDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

const ComputerCourses: React.FC<Props> = ({ videoUrl, posterUrl, handleDragStart }) => {
    const [currentYear, setcurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
      initializeCarouselControls();
      initializeCourseCardHover();
      initializeScrollContainers();
    }, []);
    
    return (
        <>
        {/* Navbar */}
        <header className="container d-flex justify-content-between align-items-center py-3"
          style={{ width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px' }}>
          <h1 className="champ-bold" style={{ margin: '0 0 0 -2px', marginTop: '-45px', fontSize: '18px' }}>Michigan's</h1>
          <h1 className="champ-bold" style={{ margin: '0 0 0 -140px', fontSize: '18px', transform: 'translateY(-7px)' }}>Store</h1>
          {/* Nav in PC */}
          <div className="d-none d-block d-lg-block">
            <nav className="d-flex justify-content-between align-items-center"
              style={{ maxWidth: '100%', marginRight: '300px', marginTop: '-30px' }}>
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
          <div className="dropdown d-flex align-items-center" style={{ marginTop: '-35px' }}>
            <img src="/images/Ellipse 840.png" alt="User Avatar" className="rounded-circle me-2" width="50" height="50"
              data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }} />
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item text-white poppins-light mb-2" href="#"
                style={{ backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px' }}>Ver perfil</a></li>
              <li>
                <hr className="dropdown-divider"></hr>
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

        {/* Contenido de la sección de Cursos */}
        <main className="container-fluid my-5">
          <section className="hero-section-cursos" style={{ marginTop: '-80px' }}>
            {/* display movil sm */}
            <div className='d-block d-sm-none'>

            </div>

            {/* display movil md */}
            <div className='d-none d-md-block d-lg-none'>

            </div>

            {/* display pc */}
            <div className='d-none d-lg-block'>
              <Carousel
                indicators={false} controls={true}
                prevIcon={
                  <div className="left carousel-control" style={{ marginTop: '-10px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '55px',
                        width: '55px',
                        background: "#482d5a",
                        borderRadius: "50%",
                        border: "2px solid #ffffff",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        style={{ fontSize: "16px", color: "#ffffff" }}
                      />
                    </div>
                  </div>
                }
                nextIcon={
                  <div className="right carousel-control" style={{ marginTop: '-10px', }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '55px',
                        width: '55px',
                        background: '#482d5a',
                        borderRadius: '50%',
                        border: '2px solid #ffffff',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ fontSize: "16px", color: "ffffff" }} />
                    </div>
                  </div>
                }
                interval={null}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/UPCOLORS 1.png"
                    alt="Ilustracion 3"
                  />
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p className="description poppins-light text-start" style={{
                      transform: 'translateY(-420px)',
                      maxWidth: '100%',
                      marginLeft: '120px',
                      width: '25%',
                      overflow: 'hidden',
                      textAlign: 'justify'
                    }}>
                      Con un enfoque comunicativo clave, este programa explora la comunicación contextualizada en situaciones
                      reales, introduciendo temas de fonética básica. Los 40 sesiones de video divididas en 4 módulos construyen
                      habilidades esenciales de comunicación.
                    </p>
                  </div>
                  <Carousel.Caption>
                    <h3 className="champ-bold" style={{ transform: 'translateY(-500px)', overflow: 'hidden', margin: '0 auto' }}>
                      <img src="/svgs/UpColors.svg" style={{ marginLeft: '-685px', maxWidth: '100%' }} alt="Name" />
                    </h3>
                    <a href={videoUrl}>
                      <Button className="btn-primary" style={{ fontSize: '18px', marginRight: '785px', transform: 'translateY(-300px)', maxWidth: '100%', height: 'auto' }}>
                        <img src="/svgs/Vector 616.svg" style={{ marginLeft: '-8px' }} alt="Vector" />
                        <span className='poppins-light' style={{ marginTop: '-185px', marginLeft: '20px' }}>ver ahora</span>
                      </Button>
                    </a>

                    <div className="carousel-caption d-none d-md-block">
                      <div className="course-info">
                        <div className="info-item" style={{ width: '345px', height: '120px', marginLeft: '-130px', marginTop: '-145px' }}>
                          <p className="poppins-light text-center"
                            style={{ paddingTop: '37px', background: '#534D6D', borderRadius: '45px', height: '95px', width: '95px', fontSize: '14px', marginTop: '-8px', transform: 'translateY(4px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>Todo</span>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>público</span>
                          </p>
                          <img src="/images/Group 36672.png"
                            style={{ height: '70px', width: '90px', marginTop: '-150px', marginLeft: '120px' }} alt="grafic" />
                          <p className="poppins-light" style={{ transform: 'translateY(-40px)', marginLeft: '125px', fontSize: '10px' }}>
                            Nivel Intermedio</p>
                        </div>
                        <div className="card" style={{ width: '405px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', marginTop: '-145px' }}>
                          <div className="d-flex content justify-content-center flex-row grid gap-2 row-gap-2">
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>32</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '30px' }}>Hrs.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Contenido</p>
                            </div>
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>20</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '25px' }}>Mins.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Quiz</p>
                            </div>
                          </div>
                        </div>
                        <div className="card"
                          style={{ width: '505px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', overflow: 'hidden', pointerEvents: 'auto', transform: 'translateY(-145px)' }}>
                          <div
                            className="scroll-container d-flex flex-row content justify-content-start flex-row gap-2 interactive-container"
                            style={{ width: '100%', height: '100%', overflowX: 'auto', overflowY: 'hidden', padding: '20px', paddingLeft: '-10px', scrollbarWidth: 'none', borderRadius: '45px', transform: 'translateY(-1px)' }}
                            data-bs-toggle="modal" data-bs-target="#VerAhora-1">
                            <div style={{ pointerEvents: 'auto' }} onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 1" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Vowel</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>sound</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_1" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 2" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Consonant sound
                              </p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_2" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 3" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Let's say Hello!
                              </p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_3" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 4" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Spelling</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Bee!</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_4" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 5" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Animals</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Colors</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_5" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 6" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Parts of</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>the Body</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_6" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 7" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Where are</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>you from?</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_7" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 8" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Family</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Friends</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_8" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 9" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-45px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-45px', fontSize: '11px', position: 'relative', zIndex: 999 }}>Professions</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-23px', fontSize: '11px', position: 'relative', zIndex: 999 }}>& Occupations</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_9" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 10" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Personality</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>traits</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_10" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Food and </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Drinks</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_11" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px', userSelect: 'none', pointerEvents: 'none' }}
                                draggable="false" onDragStart={handleDragStart} alt="Eye 12" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Fruit and</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>vegetables</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_12" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Final </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>Quizz</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_13" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/PRISMATIC 2.png"
                    alt="Ilustracion 3"
                  />
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p className="description poppins-light text-start" style={{
                      transform: 'translateY(-420px)',
                      maxWidth: '100%',
                      marginLeft: '120px',
                      width: '25%',
                      overflow: 'hidden',
                      textAlign: 'justify'
                    }}>
                      Es una experiencia de aprendizaje colorida que se
                      desarrollo a través de "situaciones comunicativas",
                      desde hacer check-in en un hotel hasta dicutir
                      arte e historia, Este programa de 3 módulos
                      (Primary, Secondary y Tertiary) ofrece una
                      experiencia educativa única y vibrante.
                    </p>
                  </div>
                  <Carousel.Caption>
                    <h3 className="champ-bold" style={{ transform: 'translateY(-505px)', overflow: 'hidden', margin: '0 auto' }}>
                      <img src="/svgs/Prismatic.svg" style={{ marginLeft: '-677px', maxWidth: '100%' }} alt="Name" />
                    </h3>
                    <a href={videoUrl}>
                      <Button className="btn-primary" style={{ fontSize: '18px', marginRight: '785px', transform: 'translateY(-300px)', maxWidth: '100%', height: 'auto' }}>
                        <img src="/svgs/Vector 616.svg" style={{ marginLeft: '-8px' }} alt="Vector" />
                        <span className='poppins-light' style={{ marginTop: '-185px', marginLeft: '20px' }}>ver ahora</span>
                      </Button>
                    </a>
                    <div className="carousel-caption d-none d-md-block">
                      <div className="course-info">
                        <div className="info-item" style={{ width: '345px', height: '120px', marginLeft: '-130px', marginTop: '-145px' }}>
                          <p className="poppins-light text-center"
                            style={{ paddingTop: '37px', background: '#534D6D', borderRadius: '45px', height: '95px', width: '95px', fontSize: '14px', marginTop: '-8px', transform: 'translateY(4px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>Todo</span>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>público</span>
                          </p>
                          <img src="/images/Group 36672.png"
                            style={{ height: '70px', width: '90px', marginTop: '-150px', marginLeft: '120px' }} alt="grafic" />
                          <p className="poppins-light" style={{ transform: 'translateY(-40px)', marginLeft: '125px', fontSize: '10px' }}>
                            Nivel Intermedio</p>
                        </div>
                        <div className="card" style={{ width: '405px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', marginTop: '-145px' }}>
                          <div className="d-flex content justify-content-center flex-row grid gap-2 row-gap-2">
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>32</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '30px' }}>Hrs.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Contenido</p>
                            </div>
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>20</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '25px' }}>Mins.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Quiz</p>
                            </div>
                          </div>
                        </div>
                        <div className="card"
                          style={{ width: '505px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', overflow: 'hidden', pointerEvents: 'auto', transform: 'translateY(-145px)' }}>
                          <div
                            className="scroll-container d-flex flex-row content justify-content-start flex-row gap-2 interactive-container"
                            style={{ width: '100%', height: '100%', overflowX: 'auto', overflowY: 'hidden', padding: '20px', paddingLeft: '-10px', scrollbarWidth: 'none', borderRadius: '45px', transform: 'translateY(-1px)' }}
                          >
                            <div style={{ pointerEvents: 'auto' }} onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 1" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Vowel</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>sound</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_1" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 2" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Consonant sound
                              </p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_2" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 3" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Let's say Hello!
                              </p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_3" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 4" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Spelling</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Bee!</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_4" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 5" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Animals</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Colors</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_5" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 6" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Parts of</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>the Body</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_6" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 7" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Where are</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>you from?</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_7" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 8" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Family</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Friends</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_8" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 9" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-45px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-45px', fontSize: '11px', position: 'relative', zIndex: 999 }}>Professions</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-23px', fontSize: '11px', position: 'relative', zIndex: 999 }}>& Occupations</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_9" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 10" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Personality</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>traits</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_10" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Food and </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Drinks</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_11" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px', userSelect: 'none', pointerEvents: 'none' }}
                                draggable="false" onDragStart={handleDragStart} alt="Eye 12" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Fruit and</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>vegetables</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_12" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Final </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>Quizz</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_13" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/PORTADAS PRODUCTOS WEB_explorers.png"
                    alt="Ilustracion 3"
                  />
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p className="description poppins-light text-start" style={{
                      transform: 'translateY(-420px)',
                      maxWidth: '100%',
                      marginLeft: '120px',
                      width: '25%',
                      overflow: 'hidden',
                      textAlign: 'justify'
                    }}>
                      En este programa se explora los sectores de los
                      tiempos verbales en inglés a través de un
                      enfoque teórico. Compuesto por 13 video sessions
                      distribuidas en 5 módulos, brinda una visión más
                      profunda y estructurada para construir una base
                      sólida en la gramática inglesa.
                    </p>
                  </div>
                  <Carousel.Caption>
                    <h3 className="champ-bold" style={{ transform: 'translateY(-505px)', marginLeft: '-330px', overflow: 'hidden', margin: '0 auto' }}>
                      <img src="/svgs/Fundamentals.svg" style={{ marginLeft: '-650px', maxWidth: '100%' }} alt="Name" />
                    </h3>
                    <a href={videoUrl}>
                      <Button className="btn-primary" style={{ fontSize: '18px', marginRight: '785px', transform: 'translateY(-300px)', maxWidth: '100%', height: 'auto' }}>
                        <img src="/svgs/Vector 616.svg" style={{ marginLeft: '-8px' }} alt="Vector" />
                        <span className='poppins-light' style={{ marginTop: '-185px', marginLeft: '20px' }}>ver ahora</span>
                      </Button>
                    </a>
                    <div className="carousel-caption d-none d-md-block">
                      <div className="course-info">
                        <div className="info-item" style={{ width: '345px', height: '120px', marginLeft: '-130px', marginTop: '-145px' }}>
                          <p className="poppins-light text-center"
                            style={{ paddingTop: '37px', background: '#534D6D', borderRadius: '45px', height: '95px', width: '95px', fontSize: '14px', marginTop: '-8px', transform: 'translateY(4px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>Todo</span>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>público</span>
                          </p>
                          <img src="/images/Group 36672.png"
                            style={{ height: '70px', width: '90px', marginTop: '-150px', marginLeft: '120px' }} alt="grafic" />
                          <p className="poppins-light" style={{ transform: 'translateY(-40px)', marginLeft: '125px', fontSize: '10px' }}>
                            Nivel Intermedio</p>
                        </div>
                        <div className="card" style={{ width: '405px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', marginTop: '-145px' }}>
                          <div className="d-flex content justify-content-center flex-row grid gap-2 row-gap-2">
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>32</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '30px' }}>Hrs.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Contenido</p>
                            </div>
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>20</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '25px' }}>Mins.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Quiz</p>
                            </div>
                          </div>
                        </div>
                        <div className="card"
                          style={{ width: '505px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', overflow: 'hidden', pointerEvents: 'auto', transform: 'translateY(-145px)' }}>
                          <div
                            className="scroll-container d-flex flex-row content justify-content-start flex-row gap-2 interactive-container"
                            style={{ width: '100%', height: '100%', overflowX: 'auto', overflowY: 'hidden', padding: '20px', paddingLeft: '-10px', scrollbarWidth: 'none', borderRadius: '45px', transform: 'translateY(-1px)' }}
                          >
                            <div style={{ pointerEvents: 'auto' }} onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 1" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Vowel</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>sound</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_1" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 2" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Consonant sound
                              </p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_2" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 3" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Let's say Hello!
                              </p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_3" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 4" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Spelling</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Bee!</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_4" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 5" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Animals</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Colors</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_5" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 6" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Parts of</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>the Body</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_6" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 7" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Where are</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>you from?</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_7" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 8" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Family</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Friends</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_8" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 9" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-45px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-45px', fontSize: '11px', position: 'relative', zIndex: 999 }}>Professions</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-23px', fontSize: '11px', position: 'relative', zIndex: 999 }}>& Occupations</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_9" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 10" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Personality</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>traits</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_10" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Food and </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Drinks</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_11" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px', userSelect: 'none', pointerEvents: 'none' }}
                                draggable="false" onDragStart={handleDragStart} alt="Eye 12" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Fruit and</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>vegetables</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_12" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Final </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>Quizz</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_13" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/PORTADAS PRODUCTOS WEB_abro.png"
                    alt="Ilustracion 3"
                  />
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p className="description poppins-light text-start" style={{
                      transform: 'translateY(-420px)',
                      maxWidth: '100%',
                      marginLeft: '120px',
                      width: '25%',
                      overflow: 'hidden',
                      textAlign: 'justify'
                    }}>
                      Con 4 niveles (A1, A2, B1 y B2), este programa cuenta con un enfoque
                      comunicativo. A través de conversaciones de la vida diaria, brinda la
                      posibilidad de familiarizarse con el uso real de la lengua. Abroad ofrece
                      una serie de herramientas para desarrollar habilidades de producción oral
                      y escrita prestando especial atención a los rasgos fonéticos de la lengua y
                      a la importancia de la autoevaluación en el proceso de aprendizaje.
                    </p>
                  </div>
                  <Carousel.Caption>
                    <h3 className="champ-bold" style={{ transform: 'translateY(-620px)', overflow: 'hidden', margin: '0 auto' }}>
                      <img src="/svgs/Abroad.svg" style={{ marginLeft: '-695px', maxWidth: '100%' }} alt="Name" />
                    </h3>
                    <a href={videoUrl}>
                      <Button className="btn-primary" style={{ fontSize: '18px', marginRight: '785px', transform: 'translateY(-300px)', maxWidth: '100%', height: 'auto' }}>
                        <img src="/svgs/Vector 616.svg" style={{ marginLeft: '-8px' }} alt="Vector" />
                        <span className='poppins-light' style={{ marginTop: '-185px', marginLeft: '20px' }}>ver ahora</span>
                      </Button>
                    </a>
                    <div className="carousel-caption d-none d-md-block">
                      <div className="course-info">
                        <div className="info-item" style={{ width: '345px', height: '120px', marginLeft: '-130px', marginTop: '-145px' }}>
                          <p className="poppins-light text-center"
                            style={{ paddingTop: '37px', background: '#534D6D', borderRadius: '45px', height: '95px', width: '95px', fontSize: '14px', marginTop: '-8px', transform: 'translateY(4px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>Todo</span>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>público</span>
                          </p>
                          <img src="/images/Group 36672.png"
                            style={{ height: '70px', width: '90px', marginTop: '-150px', marginLeft: '120px' }} alt="grafic" />
                          <p className="poppins-light" style={{ transform: 'translateY(-40px)', marginLeft: '125px', fontSize: '10px' }}>
                            Nivel Intermedio</p>
                        </div>
                        <div className="card" style={{ width: '405px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', marginTop: '-145px' }}>
                          <div className="d-flex content justify-content-center flex-row grid gap-2 row-gap-2">
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>32</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '30px' }}>Hrs.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Contenido</p>
                            </div>
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>20</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '25px' }}>Mins.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Quiz</p>
                            </div>
                          </div>
                        </div>
                        <div className="card"
                          style={{ width: '505px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', overflow: 'hidden', pointerEvents: 'auto', transform: 'translateY(-145px)' }}>
                          <div
                            className="scroll-container d-flex flex-row content justify-content-start flex-row gap-2 interactive-container"
                            style={{ width: '100%', height: '100%', overflowX: 'auto', overflowY: 'hidden', padding: '20px', paddingLeft: '-10px', scrollbarWidth: 'none', borderRadius: '45px', transform: 'translateY(-1px)' }}
                          >
                            <div style={{ pointerEvents: 'auto' }} onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 1" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Vowel</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>sound</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_1" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 2" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Consonant sound
                              </p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_2" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 3" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Let's say Hello!
                              </p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_3" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 4" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Spelling</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Bee!</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_4" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 5" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Animals</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Colors</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_5" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 6" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Parts of</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>the Body</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_6" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 7" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Where are</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>you from?</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_7" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 8" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Family</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Friends</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_8" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 9" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-45px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-45px', fontSize: '11px', position: 'relative', zIndex: 999 }}>Professions</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-23px', fontSize: '11px', position: 'relative', zIndex: 999 }}>& Occupations</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_9" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 10" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Personality</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>traits</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_10" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Food and </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Drinks</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_11" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px', userSelect: 'none', pointerEvents: 'none' }}
                                draggable="false" onDragStart={handleDragStart} alt="Eye 12" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Fruit and</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>vegetables</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_12" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Final </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>Quizz</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_13" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/PORTADAS PRODUCTOS WEB_fundamentals.png"
                    alt="Ilustracion 3"
                  />
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p className="description poppins-light text-start" style={{
                      transform: 'translateY(-420px)',
                      maxWidth: '100%',
                      marginLeft: '120px',
                      width: '25%',
                      overflow: 'hidden',
                      textAlign: 'justify'
                    }}>
                      Para aquellos sin experiencia en inglés, este programa
                      se centra en la comprensión y pronunciación básica.
                      Con 19 sesiones de video, proporciona un punto de
                      partida sólido para los principiantes, explorando el
                      vocabulario y las estructuras gramaticales esenciales.
                    </p>
                  </div>
                  <Carousel.Caption>
                    <h3 className="champ-bold" style={{ transform: 'translateY(-505px)', overflow: 'hidden', margin: '0 auto' }}>
                      <img src="/svgs/Explorers.svg" style={{ marginLeft: '-648px', maxWidth: '100%' }} alt="Name" />
                    </h3>
                    <a href={videoUrl}>
                      <Button className="btn-primary" style={{ fontSize: '18px', marginRight: '785px', transform: 'translateY(-300px)', maxWidth: '100%', height: 'auto' }}>
                        <img src="/svgs/Vector 616.svg" style={{ marginLeft: '-8px' }} alt="Vector" />
                        <span className='poppins-light' style={{ marginTop: '-185px', marginLeft: '20px' }}>ver ahora</span>
                      </Button>
                    </a>
                    <div className="carousel-caption d-none d-md-block">
                      <div className="course-info">
                        <div className="info-item" style={{ width: '345px', height: '120px', marginLeft: '-130px', marginTop: '-145px' }}>
                          <p className="poppins-light text-center"
                            style={{ paddingTop: '37px', background: '#534D6D', borderRadius: '45px', height: '95px', width: '95px', fontSize: '14px', marginTop: '-8px', transform: 'translateY(4px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>Todo</span>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>público</span>
                          </p>
                          <img src="/images/Group 36672.png"
                            style={{ height: '70px', width: '90px', marginTop: '-150px', marginLeft: '120px' }} alt="grafic" />
                          <p className="poppins-light" style={{ transform: 'translateY(-40px)', marginLeft: '125px', fontSize: '10px' }}>
                            Nivel Intermedio</p>
                        </div>
                        <div className="card" style={{ width: '405px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', marginTop: '-145px' }}>
                          <div className="d-flex content justify-content-center flex-row grid gap-2 row-gap-2">
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>32</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '30px' }}>Hrs.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Contenido</p>
                            </div>
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>20</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '25px' }}>Mins.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Quiz</p>
                            </div>
                          </div>
                        </div>
                        <div className="card"
                          style={{ width: '505px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', overflow: 'hidden', pointerEvents: 'auto', transform: 'translateY(-145px)' }}>
                          <div
                            className="scroll-container d-flex flex-row content justify-content-start flex-row gap-2 interactive-container"
                            style={{ width: '100%', height: '100%', overflowX: 'auto', overflowY: 'hidden', padding: '20px', paddingLeft: '-10px', scrollbarWidth: 'none', borderRadius: '45px', transform: 'translateY(-1px)' }}
                            data-bs-toggle="modal" data-bs-target="#VerAhora-1">
                            <div style={{ pointerEvents: 'auto' }} onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 1" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Vowel</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>sound</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_1" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 2" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Consonant sound
                              </p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_2" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 3" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Let's say Hello!
                              </p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_3" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 4" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Spelling</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Bee!</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_4" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 5" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Animals</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Colors</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_5" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 6" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Parts of</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>the Body</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_6" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 7" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Where are</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>you from?</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_7" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 8" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Family</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Friends</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_8" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 9" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-45px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-45px', fontSize: '11px', position: 'relative', zIndex: 999 }}>Professions</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-23px', fontSize: '11px', position: 'relative', zIndex: 999 }}>& Occupations</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_9" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 10" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Personality</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>traits</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_10" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Food and </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Drinks</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_11" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px', userSelect: 'none', pointerEvents: 'none' }}
                                draggable="false" onDragStart={handleDragStart} alt="Eye 12" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Fruit and</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>vegetables</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_12" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Final </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>Quizz</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_13" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/PORTADAS PRODUCTOS WEB_upcolors.png"
                    alt="Ilustracion 3"
                  />
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p className="description poppins-light text-start" style={{
                      transform: 'translateY(-420px)',
                      maxWidth: '100%',
                      marginLeft: '120px',
                      width: '25%',
                      overflow: 'hidden',
                      textAlign: 'justify'
                    }}>
                      Diseñado para niños en la primera infancia, este
                      programa ilustrado y colorido actúa como una guía
                      divertida para crear bases comunicativas sólidas
                      mientras disfrutan del proceso de aprendizaje del idioma.
                    </p>
                  </div>
                  <Carousel.Caption>
                    <h3 className="champ-bold" style={{ transform: 'translateY(-465px)', overflow: 'hidden', margin: '0 auto' }}>
                      <img src="/svgs/Kids.svg" style={{ marginLeft: '-800px', maxWidth: '100%' }} alt="Name" />
                    </h3>
                    <a href={videoUrl}>
                      <Button className="btn-primary" style={{ fontSize: '18px', marginRight: '785px', transform: 'translateY(-300px)', maxWidth: '100%', height: 'auto' }}>
                        <img src="/svgs/Vector 616.svg" style={{ marginLeft: '-8px' }} alt="Vector" />
                        <span className='poppins-light' style={{ marginTop: '-185px', marginLeft: '20px' }}>ver ahora</span>
                      </Button>
                    </a>
                    <div className="carousel-caption d-none d-md-block">
                      <div className="course-info">
                        <div className="info-item" style={{ width: '345px', height: '120px', marginLeft: '-130px', marginTop: '-145px' }}>
                          <p className="poppins-light text-center"
                            style={{ paddingTop: '37px', background: '#534D6D', borderRadius: '45px', height: '95px', width: '95px', fontSize: '14px', marginTop: '-8px', transform: 'translateY(4px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>Todo</span>
                            <span
                              style={{ fontWeight: 'normal', fontSize: 'inherit', color: 'inherit', transform: 'translateY(-20px)' }}>público</span>
                          </p>
                          <img src="/images/Group 36672.png"
                            style={{ height: '70px', width: '90px', marginTop: '-150px', marginLeft: '120px' }} alt="grafic" />
                          <p className="poppins-light" style={{ transform: 'translateY(-40px)', marginLeft: '125px', fontSize: '10px' }}>
                            Nivel Intermedio</p>
                        </div>
                        <div className="card" style={{ width: '405px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', marginTop: '-145px' }}>
                          <div className="d-flex content justify-content-center flex-row grid gap-2 row-gap-2">
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>32</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '30px' }}>Hrs.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Contenido</p>
                            </div>
                            <div className="info-item"
                              style={{ height: '95px', width: '90px', transform: 'translateY(15px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <img src="/svgs/Clock.svg"
                                style={{ position: 'relative', zIndex: 999, transform: 'translateY(47px)', height: '20px', marginLeft: '-35px' }}
                                alt="Clock" />
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', color: '#ffffff', transform: 'translateY(5px)', marginLeft: '25px', fontSize: '22px' }}>20</span>
                              <span className="poppins-light"
                                style={{ fontWeight: 'normal', fontSize: '10px', color: '#ffffff', transform: 'translateY(-5px)', marginLeft: '25px' }}>Mins.</span>
                              <p style={{ marginTop: '10px', fontSize: '15px', width: '85px', marginLeft: '-12px', color: '#ffffff' }}>Quiz</p>
                            </div>
                          </div>
                        </div>
                        <div className="card"
                          style={{ width: '505px', height: '120px', backgroundColor: '#443D5D', borderRadius: '10px', overflow: 'hidden', pointerEvents: 'auto', transform: 'translateY(-145px)' }}>
                          <div
                            className="scroll-container d-flex flex-row content justify-content-start flex-row gap-2 interactive-container"
                            style={{ width: '100%', height: '100%', overflowX: 'auto', overflowY: 'hidden', padding: '20px', paddingLeft: '-10px', scrollbarWidth: 'none', borderRadius: '45px', transform: 'translateY(-1px)' }}
                            data-bs-toggle="modal" data-bs-target="#VerAhora-1">
                            <div style={{ pointerEvents: 'auto' }} onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 1" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Vowel</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>sound</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_1" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 2" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Consonant sound
                              </p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_2" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 3" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Let's say Hello!
                              </p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_3" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 4" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Spelling</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Bee!</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_4" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 5" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Animals</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Colors</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_5" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 6" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Parts of</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>the Body</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '-135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_6" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 7" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Where are</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>you from?</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_7" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 8" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Family</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>& Friends</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_8" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 9" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-45px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-45px', fontSize: '11px', position: 'relative', zIndex: 999 }}>Professions</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-23px', fontSize: '11px', position: 'relative', zIndex: 999 }}>& Occupations</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_9" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 10" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Personality</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>traits</p>
                              <img src="/images/Color_2.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_10" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Food and </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px', position: 'relative', zIndex: 999 }}>Drinks</p>
                              <img src="/images/Color_3.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_11" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px', userSelect: 'none', pointerEvents: 'none' }}
                                draggable="false" onDragStart={handleDragStart} alt="Eye 12" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Fruit and</p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>vegetables</p>
                              <img src="/images/Color_4.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_12" />
                            </div>
                            <div onContextMenu={(e) => e.preventDefault()}>
                              <img src="/images/optic.png"
                                style={{ height: '85px', width: '75px', objectFit: 'cover', borderRadius: '5px' }} alt="Eye 11" />
                              <div className="d-flex"
                                style={{ borderBottom: '1px solid #ffffff', marginLeft: '8px', width: '60px', transform: 'translateY(-40px)' }}>
                              </div>
                              <p className='poppins-light text-white' style={{ marginTop: '-40px', fontSize: '12px' }}>Final </p>
                              <p className='poppins-light text-white' style={{ marginTop: '-15px', fontSize: '12px' }}>Quizz</p>
                              <img src="/images/Color_1.png"
                                style={{ marginTop: '135px', height: '85px', width: '75px', objectFit: 'cover', borderRadius: 'inherit', transform: 'translateY(-1px)' }}
                                alt="Tono_13" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <ReactPlayer
                style={{ visibility: 'hidden' }}
                url={videoUrl}
                controls
                playing={false}
                width="100%"
                height="auto"
                light={posterUrl}
                onError={(e: any) => console.error('Error loading video:', e)}
              />
            </div>
          </section>

          <section className="other-courses" style={{ marginTop: '-80px' }}>
          
            {/* display pc */}
            <div className=''>
              <div className="d-flex flex-column justify-content-center align-itemns-center"
                style={{ marginLeft: '85px', height: '1750px' }}>
                <div className="col-12" style={{ marginBottom: '75px' }}>
                  <h2 className="champ-bold" style={{ color: '#7955f8', marginTop: '-40px' }}>otros cursos</h2>
                </div>
                <div className="col">
                  <div className="courses-list" style={{ transform: 'translateY(-35px)' }}>
                    <div className="course-card" style={{ position: 'relative', zIndex: 1 }}>
                      <img src="/images/Card_1.png" style={{ height: '274px', width: '197px', marginLeft: '175px' }} alt="Card 1" />
                      <img src="/svgs/Card_1.svg"
                        style={{ height: '33px', width: '89px', position: 'relative', zIndex: 2, marginLeft: '-20px', marginTop: '170px', transform: 'translateX(-80px)' }}
                        alt="Card 1" />
                      <img src="/images/Vector (4).png"
                        style={{ height: '33px', width: '89px', position: 'relative', zIndex: 1, marginLeft: '-60px', marginTop: '170px', transform: 'translateX(-85px)' }}
                        alt="Card 1" />
                      <div className="overlay"
                        style={{ background: 'linear-gradient(180deg, #0cd7ed, #0708f3)', padding: '125px 25px 25px 25px' }}>
                        <p className="poppins-light">
                          Diseñado para niños en la primera infancia, este programa ilustrado
                          y colorido actúa como una guía divertida para crear bases comunicativas
                          sólidas mientras disfrutan del proceso de aprendizaje del idioma.</p>
                      </div>
                    </div>
                    <div className="course-card" style={{ position: 'relative', zIndex: 2 }}>
                      <img src="/images/Card_2.png" style={{ height: '234px', width: '197px', marginLeft: '162px' }} alt="Card 2" />
                      <img src="/svgs/Card_2.svg"
                        style={{ height: '103px', width: '99px', position: 'relative', zIndex: 2, marginLeft: '-40px', marginTop: '170px', transform: 'translateX(-110px)' }}
                        alt="Card 2" />
                      <img src="/images/Union (7).png"
                        style={{ height: '33px', width: '99px', position: 'relative', zIndex: 1, marginLeft: '-60px', marginTop: '174px', transform: 'translateX(-150px)' }}
                        alt="Card 2" />
                      <div className="overlay"
                        style={{ background: 'linear-gradient(180deg, #b11fe5, #8700dc)', padding: '205px 25px 25px 25px' }}>
                        <p className="poppins-light">
                          Es una experiencia de aprendizaje colorida que se desarrolla a través
                          de "situaciones comunicativas", desde hacer check-in en un hotel hasta
                          discutir arte e historia. Este programa de 3 módulos
                          (Primary, Secondary y Tertiary) ofrece una experiencia educativa única
                          y vibrante.</p>
                      </div>
                    </div>
                    <div className="course-card" style={{ position: 'relative', zIndex: 3 }}>
                      <img src="/images/Card_3.png" style={{ borderRadius: '45px', height: '285px', width: '180px', marginLeft: '45px' }}
                        alt="Card 3" />
                      <img src="/svgs/Card_3.svg"
                        style={{ height: '43px', width: '99px', position: 'relative', zIndex: 2, marginLeft: '-30px', marginTop: '170px', transform: 'translateX(-90px)' }}
                        alt="Card 3" />
                      <img src="/images/Capa 3.png"
                        style={{ height: '43px', width: '99px', position: 'relative', zIndex: 1, marginLeft: '-83px', marginTop: '170px', transform: 'translateX(-95px)' }}
                        alt="Card 3" />
                      <div className="overlay"
                        style={{ background: 'linear-gradient(180deg,  #6df1cc, #01ddd2)', padding: '195px 25px 25px 25px' }}>
                        <p className="poppins-light">
                          En este programa se exploran los secretos de los tiempos
                          verbales en inglés a través de un enfoque teórico. Compuesto
                          por 13 video sessions distribuidas en 5 módulos, brinda una
                          visión más profunda y estructurada para construir una base
                          sólida en la gramática inglesa.</p>
                      </div>
                    </div>
                    <div className="course-card" style={{ position: 'relative', zIndex: 4 }}>
                      <img src="/images/Card_4.png" style={{ height: '234px', width: '157px', marginLeft: '-20px', marginTop: '50px' }}
                        alt="Card 4" />
                      <img src="/svgs/Card_4.svg"
                        style={{ height: '93px', width: '130px', position: 'relative', zIndex: 2, marginLeft: '-100px', marginTop: '210px', transform: 'translateX(-40px)' }}
                        alt="Card 4" />
                      <img src="/images/Vector (5).png"
                        style={{ height: '23px', width: '130px', position: 'relative', zIndex: 1, marginLeft: '-115px', marginTop: '210px', transform: 'translateX(-55px)' }}
                        alt="Card 4" />
                      <div className="overlay"
                        style={{ background: 'linear-gradient(180deg, #ffd026, #fd9d1d)', padding: '195px 25px 25px 25px' }}>
                        <p className="poppins-light">
                          Para aquellos sin experiencia en inglés, este programa se centra en la
                          comprensión y pronunciación básica. Con 19 sesiones de video, proporciona
                          un punto de partida sólido para los principiantes, explorando el vocabulario
                          y las estructuras gramaticales esenciales.</p>
                      </div>
                    </div>
                    <div className="course-card" style={{ position: 'relative', zIndex: 1 }}>
                      <img src="/images/Card_5.png" style={{ height: '264px', width: '197px', marginLeft: '-220px', marginTop: '10px' }}
                        alt="Card 5" />
                      <img src="/svgs/Card_5.svg"
                        style={{ height: '33px', width: '79px', position: 'relative', zIndex: 2, marginLeft: '-30px', marginTop: '210px', transform: 'translateX(-105px)' }}
                        alt="Card 5" />
                      <img src="/images/Vector (6).png"
                        style={{ height: '33px', width: '79px', position: 'relative', zIndex: 1, marginLeft: '-90px', marginTop: '210px', transform: 'translateX(-95px)' }}
                        alt="Card 5" />
                      <div className="overlay"
                        style={{ background: 'linear-gradient(180deg, #ff2855, #ffcddf)', padding: '295px 25px 25px 25px' }}>
                        <p className="poppins-light">
                          Con 4 niveles (A1, A2, B1 y B2), este programa cuenta con un enfoque
                          comunicativo. A través de conversaciones de la vida diaria, brinda la
                          posibilidad de familiarizarse con el uso real de la lengua. Abroad
                          ofrece una serie de herramientas para desarrollar habilidades de
                          producción oral y escrita prestando especial atención a los rasgos
                          fonéticos de la lengua y a la importancia de la autoevaluación en
                          el proceso de aprendizaje.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="test-section">
            {/* display movil sm */}
            <div className='d-block d-sm-none'>

            </div>

            {/* display movil md */}
            <div className='d-none d-md-block d-lg-none'>

            </div>

            {/* display pc */}
            <div className='d-none d-lg-block'>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="col-10" style={{ height: '295px', transform: 'translateX(145px)' }}>
                  <h3 className="champ-bold" style={{ width: '700px', height: '140px', marginLeft: '365px', transform: 'translateY(5px)' }}>
                    <span style={{ background: 'linear-gradient(90deg, #F2527D, #EC7958)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                      ¿Cuál es el mejor curso para mi?
                    </span>
                  </h3>
                  <ol className="text-start" style={{ width: '410px', marginLeft: '530px', transform: 'translateY(-105px)', listStyleType: 'none' }}>
                    <li>
                      <p style={{ fontSize: "10px", color: "#FF3E62" }}>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px' }} />
                        <span
                          className="poppins-light text-white"
                          style={{ fontSize: "14px", marginLeft: "5px" }}
                        >
                          Regla 1
                        </span>
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: "10px", color: "#FF3E62" }}>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px' }} />
                        <span
                          className="poppins-light text-white"
                          style={{ fontSize: "14px", marginLeft: "5px" }}
                        >
                          Regla 2
                        </span>
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: "10px", color: "#FF3E62" }}>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px' }} />
                        <span
                          className="poppins-light text-white"
                          style={{ fontSize: "14px", marginLeft: "5px" }}
                        >
                          Regla 3
                        </span>
                      </p>
                    </li>
                    <li>
                      <p style={{ fontSize: "10px", color: "#FF3E62" }}>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '16px' }} />
                        <span
                          className="poppins-light text-white"
                          style={{ fontSize: "14px", marginLeft: "5px" }}
                        >
                          Regla 4
                        </span>
                      </p>
                    </li>
                  </ol>
                  <Link to="/content_quiz_module">
                    <button type="submit" className="btn btn-test text-white" style={{ cursor: 'pointer', fontSize: '20px', transform: 'translateY(-110px)', marginLeft: '435px', height: '50px', width: '315px' }} id="toggleButton" data-state="plane">
                      Realizar Test
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="expect-section">
            {/* display movil sm */}
            <div className='d-block d-sm-none'>

            </div>

            {/* display movil md */}
            <div className='d-none d-md-block d-lg-none'>

            </div>

            {/* display pc */}
            <div className='d-none d-lg-block'>
              <div className="container">
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <div className="col-2">
                    <h3 className="champ-bold" style={{ width: '700px', height: '140px', marginLeft: '325px', transform: 'translateY(-140px)' }}>
                      <span style={{ background: '#9292ff', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                        Qué esperar de Michigan's Store
                      </span>
                    </h3>
                  </div>
                  <div className="col-5" style={{ marginTop: '100px' }}>
                    <img style={{ height: '100px', width: '105px', transform: 'translateY(95px)', marginLeft: '-675px' }} src="/images/wait-1.png" alt="Wait 1" />
                    <p className="text-start poppins-light" style={{ height: '45px', width: '275px' }}>
                      Diversidad de experiencias Según tu necesidad, encuentra el curso que se adapte a tu edad y expectativa en nuestra amplia gama de opciones. Enfoques comunicativos
                    </p>
                    <img style={{ height: '100px', width: '105px', transform: 'translateY(90px)', marginLeft: '-675px' }} src="/images/wait-2.png" alt="Wait 2" />
                    <p className="text-start poppins-light" style={{ height: '45px', width: '275px' }}>
                      Enfoques comunicativos Nuestro enfoque está diseñado en promover y fortalecer la comunicación en inglés, haciendo que el usuario hable de forma rápida en este idioma.
                    </p>
                    <img style={{ height: '100px', width: '105px', transform: 'translateY(90px)', marginLeft: '-675px' }} src="/images/wait-3.png" alt="Wait 3" />
                    <p className="text-start poppins-light" style={{ height: '45px', width: '275px' }}>
                      No te quedes con la duda Agenda tus clases virtuales semi-personalizadas, úsalas para resolver tus dudas, profundizar en el tema de tu interés.
                    </p>
                    <div className="d-flex" style={{ borderBottom: '2px solid #9292ff', marginLeft: '275px', width: '330px', transform: 'translateY(-215px) rotate(90deg)' }}></div>
                  </div>
                  <div className="col-5" style={{ marginTop: '100px', transform: 'translateX(125px)' }}>
                    <img style={{ height: '100px', width: '105px', transform: 'translateY(90px)', marginLeft: '-675px' }} src="/images/wait-4.png" alt="Wait 4" />
                    <p className="text-start poppins-light" style={{ height: '45px', width: '275px' }}>
                      Experiencias Inmersivas Simula escenarios del día a día para que practiques tus habilidades, pierdas el miedo y fortalezcas tu confianza al hablar.
                    </p>
                    <img style={{ height: '100px', width: '105px', transform: 'translateY(90px)', marginLeft: '-675px' }} src="/images/wait-5.png" alt="Wait 5" />
                    <p className="text-start poppins-light" style={{ height: '45px', width: '355px' }}>
                      Profesores de distintas partes del mundo Al interactuar con profesores expertos de diferentes países, ampliarás tu perspectiva global y ganarás una comprensión mayor de las diversas culturas y costumbres que se entrelazan con el aprendizaje del inglés.
                    </p>
                    <img style={{ height: '100px', width: '105px', transform: 'translateY(90px)', marginLeft: '-675px' }} src="/images/wait-6.png" alt="Wait 6" />
                    <p className="text-start poppins-light" style={{ height: '45px', width: '275px' }}>
                      Aprende a tu ritmo Disfruta aprendiendo desde cualquier lugar del mundo, sin horarios y a tu ritmo, tú decides cuándo seguir con el siguiente tema.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </main>

        {/* Footer PC */}
        <div className="d-none d-block d-lg-block" style={{ marginTop: '195px', position: 'relative', zIndex: 8 }}>
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
                <YearDisplay onYearChange={setcurrentYear} />
                <p className="poppins-light"
                  style={{ fontSize: '15px', color: '#a9aeeb', marginTop: '-15px', marginLeft: '55px' }}>@{currentYear} Michigan's
                  Store</p>
                <p className="poppins-light"
                  style={{ fontSize: '15px', color: '#a9aeeb', marginTop: '-15px', marginLeft: '-2px' }}>Todos los
                  derechos reservados</p>
              </div>
            </div>
          </footer>
        </div>
        </>
    )
}

export default ComputerCourses;