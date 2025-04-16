import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { faChevronLeft, faChevronRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { initializeCarouselControls } from '../../../templates/ts/carousel-controls-jquery';
import { initializeCourseCardHover } from '../../../templates/ts/card-hover-jquery';
import { initializeScrollContainers } from '../../../templates/ts/scroll-handler';
import './css/courses.css';
// import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { YearDisplay } from '../../Year/YearDisplay';

interface Props {
    videoUrl: string;
    posterUrl: string;
    handleDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

const MobilCourses: React.FC<Props> = ({ videoUrl, posterUrl, handleDragStart }) => {
    const [currentYear, setcurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
      initializeCarouselControls();
      initializeCourseCardHover();
      initializeScrollContainers();
    }, []);

    return (
        <>
          <header className="d-flex flex-column align-items-center"
            style={{ position: 'relative', zIndex: '1100' }}>
              <div className='w-100' style={{padding: '30px 40px 20px 40px', paddingTop: '20px',position: 'absolute', zIndex: '99999', 
                borderBottom: '1px solid #ffffff',backgroundColor: 'rgba(0, 0, 0, 0.16)', backdropFilter: 'blur(15px)',}}>
                <div className="w-100 d-flex justify-content-between">
                  <article className="" style={{textAlign: 'center', marginLeft: '20px'}}>
                    <h1 className="champ-bold" style={{ fontSize: '24px' }}>Michigan's</h1>
                    <h1 className="champ-bold" style={{ fontSize: '24px', transform: 'translateY(-7px)' }}>Store</h1>
                  </article>
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
                </div>
                
                <div className="mt-2">
                  <nav className="d-flex justify-content-between align-items-center">
                    <Link to="/start" className="text-white mx-4 poppins-bold enlace"
                      style={{ fontSize: '18px', textDecoration: 'none' }}>Inicio</Link>
                    <Link to="/courses" className="text-white mx-4 poppins-bold enlace"
                      style={{ fontSize: '18px', textDecoration: 'underline', textUnderlineOffset: '6px' }}>Cursos</Link>
                    <Link to="/prices" className="text-white mx-4 poppins-bold enlace"
                      style={{ fontSize: '18px', textDecoration: 'none' }}>Precios</Link>
                    <Link to="/us" className="text-white mx-4 poppins-bold enlace"
                      style={{ fontSize: '18px', textDecoration: 'none' }}>Nosotros</Link>
                    <Link to="/blogs" className="text-white mx-4 poppins-bold enlace"
                      style={{ fontSize: '18px', textDecoration: 'none' }}>Blogs</Link>
                  </nav>
                </div>
              </div>
          </header>
      
          <main className="w-100 h-100 my-5" >
            <section className="text-center" style={{ marginTop: '75px', padding: '2rem 5px' }}>

              {/* display pc */}
              <div className=''>
                <Carousel
                  indicators={false} controls={true}
                  prevIcon={
                    <div className="left carousel-control-mobil" style={{ marginTop: '-10px' }}>
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
                    <div className="right carousel-control-mobil" style={{ marginTop: '-10px', }}>
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
                    <div className="w-100 d-flex justify-content-center align-items-center">
                      <img
                        className="d-block w-100"
                        style={{backgroundSize: 'cover', backgroundPosition: 'center'}}
                        src="https://dkumy02vmzh93.cloudfront.net/b04dd975-be25-43fe-81f3-4f0bac202d19.png"
                        alt="Ilustracion 3"
                      />
                    </div>
                   
                    <div style={{ width: '100%', padding: '0 20px' }}>
                      <p className="poppins-light text-start" style={{
                        overflow: 'hidden',
                        textAlign: 'justify'
                      }}>
                        <h3 className="d-flex justify-content-start" style={{overflow: 'hidden', margin: '0 auto', marginBottom: '10px' }}>
                          <img src="/svgs/UpColors.svg" style={{marginLeft: '-20px', maxWidth: '100%' }} alt="Name" />
                        </h3> 
                        Con un enfoque comunicativo clave, este programa explora la comunicación contextualizada en situaciones
                        reales, introduciendo temas de fonética básica. Los 40 sesiones de video divididas en 4 módulos construyen
                        habilidades esenciales de comunicación.
                      </p>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                      <img
                        className="d-block w-100"
                        style={{backgroundSize: 'cover', backgroundPosition: 'center'}}
                        src="https://dkumy02vmzh93.cloudfront.net/c056ed85-e4cb-445f-beb1-d248753e5afd.png"
                        alt="Ilustracion 3"
                      />
                    </div>
                   
                    <div style={{ width: '100%', padding: '0 20px' }}>
                      <p className="poppins-light text-start" style={{
                        overflow: 'hidden',
                        textAlign: 'justify'
                      }}>
                        <h3 className="d-flex justify-content-start" style={{overflow: 'hidden', margin: '0 auto', marginBottom: '10px' }}>
                          <img src="/svgs/Prismatic.svg" style={{marginLeft: '-10px', maxWidth: '100%' }} alt="Name" />
                        </h3> 
                        Es una experiencia de aprendizaje colorida que se
                        desarrollo a través de "situaciones comunicativas",
                        desde hacer check-in en un hotel hasta dicutir
                        arte e historia, Este programa de 3 módulos
                        (Primary, Secondary y Tertiary) ofrece una
                        experiencia educativa única y vibrante.
                      </p>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                      <img
                        className="d-block w-100"
                        style={{backgroundSize: 'cover', backgroundPosition: 'center'}}
                        src="https://dkumy02vmzh93.cloudfront.net/363bd542-8272-49f3-a912-4890e3ea62d1.png"
                        alt="Ilustracion 3"
                      />
                    </div>
                   
                    <div style={{ width: '100%', padding: '0 20px' }}>
                      <p className="poppins-light text-start" style={{
                        overflow: 'hidden',
                        textAlign: 'justify'
                      }}>
                        <h3 className="d-flex justify-content-start" style={{overflow: 'hidden', margin: '0 auto', marginBottom: '10px' }}>
                          <img src="/svgs/Fundamentals.svg" style={{ maxWidth: '100%' }} alt="Name" />
                        </h3> 
                        En este programa se explora los sectores de los
                        tiempos verbales en inglés a través de un
                        enfoque teórico. Compuesto por 13 video sessions
                        distribuidas en 5 módulos, brinda una visión más
                        profunda y estructurada para construir una base
                        sólida en la gramática inglesa.
                      </p>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                      <img
                        className="d-block w-100"
                        style={{backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-40px'}}
                        src="https://dkumy02vmzh93.cloudfront.net/2e194c6c-48f2-4831-9e51-fc5f8d860962.png"
                        alt="Ilustracion 3"
                      />
                    </div>
                   
                    <div style={{ width: '100%', padding: '0 20px' }}>
                      <p className="poppins-light text-start" style={{
                        marginTop: '-60px',
                        overflow: 'hidden',
                        textAlign: 'justify'
                      }}>
                        <h3 className="d-flex justify-content-start" style={{overflow: 'hidden', margin: '0 auto', marginBottom: '25px' }}>
                          <img src="/svgs/Abroad.svg" style={{ maxWidth: '100%' }} alt="Name" />
                        </h3> 
                        Con 4 niveles (A1, A2, B1 y B2), este programa cuenta con un enfoque
                        comunicativo. A través de conversaciones de la vida diaria, brinda la
                        posibilidad de familiarizarse con el uso real de la lengua. Abroad ofrece
                        una serie de herramientas para desarrollar habilidades de producción oral
                        y escrita prestando especial atención a los rasgos fonéticos de la lengua y
                        a la importancia de la autoevaluación en el proceso de aprendizaje.
                      </p>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                      <img
                        className="d-block w-100"
                        style={{backgroundSize: 'cover', backgroundPosition: 'center'}}
                        src="https://dkumy02vmzh93.cloudfront.net/6e22d9b3-2e6e-490a-a7b5-5ee6dd39d1be.png"
                        alt="Ilustracion 3"
                      />
                    </div>
                   
                    <div style={{ width: '100%', padding: '0 20px' }}>
                      <p className="poppins-light text-start" style={{
                        overflow: 'hidden',
                        textAlign: 'justify'
                      }}>
                        <h3 className="d-flex justify-content-start" style={{overflow: 'hidden', margin: '0 auto', marginBottom: '10px' }}>
                          <img src="/svgs/Explorers.svg" style={{ maxWidth: '100%' }} alt="Name" />
                        </h3> 
                        Para aquellos sin experiencia en inglés, este programa
                        se centra en la comprensión y pronunciación básica.
                        Con 19 sesiones de video, proporciona un punto de
                        partida sólido para los principiantes, explorando el
                        vocabulario y las estructuras gramaticales esenciales.
                      </p>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                      <img
                        className="d-block w-100"
                        style={{backgroundSize: 'cover', backgroundPosition: 'center'}}
                        src="https://dkumy02vmzh93.cloudfront.net/f84e3285-158f-420f-bbce-1093f351a396.png"
                        alt="Ilustracion 3"
                      />
                    </div>
                   
                    <div style={{ width: '100%', padding: '0 20px' }}>
                      <p className="poppins-light text-start" style={{
                        overflow: 'hidden',
                        textAlign: 'justify'
                      }}>
                        <h3 className="d-flex justify-content-start" style={{overflow: 'hidden', margin: '0 auto', marginBottom: '10px' }}>
                          <img src="/svgs/Kids.svg" style={{ maxWidth: '100%', marginLeft: '-70px' }} alt="Name" />
                        </h3> 
                        Diseñado para niños en la primera infancia, este
                        programa ilustrado y colorido actúa como una guía
                        divertida para crear bases comunicativas sólidas
                        mientras disfrutan del proceso de aprendizaje del idioma.
                      </p>
                    </div>
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
          </main>

        </>
    )
}
export default MobilCourses;