import '../../templates/css/styles.css';
import '../../templates/css/styles-quizzes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ScrollButton } from '../scroll-button/ScrollButton';
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectCard } from '../../templates/ts/select-card';
import { PracticeManager } from '../../templates/ts/practice-logic';
import { useEffect, useRef, useState } from 'react';
import { YearDisplay } from '../Year/YearDisplay';

export const Quizzes = () => {

    const [currentYear, setcurrentYear] = useState<number>(new Date().getFullYear());
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement| null>(null);
    const practiceManagerRef = useRef<PracticeManager | null>(null);

    useEffect(()=>{
        practiceManagerRef.current = new PracticeManager();

        const canvas = canvasRef.current;
        if(canvas){
            const ctx = canvas.getContext('2d');
            let isDrawing = false;

            const startDrawing = (e: MouseEvent) => {
                if (ctx) {
                    isDrawing= true;
                    ctx.beginPath();
                    ctx.moveTo(e.offsetX, e.offsetY);
                }
            };

            const draw = (e: MouseEvent) => {
                if (isDrawing && ctx) {
                    ctx.lineTo(e.offsetX, e.offsetY);
                    ctx.strokeStyle = '#f0230c';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            };

            const stopDrawing = () => {
                isDrawing = false;
                if (ctx) {
                    ctx.closePath();
                }
            };

            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mouseleave', stopDrawing);

            return () => {
                canvas.removeEventListener('mousedown', startDrawing);
                canvas.removeEventListener('mousemove', draw);
                canvas.removeEventListener('mouseup', startDrawing);
                canvas.removeEventListener('mouseleave', startDrawing);
            }
        }

    }, []);

    const handlerClosePracticeArea = (index:number) => {
        practiceManagerRef.current?.closePracticeAreaByIndex(index);
    }

  return (
        <div className='bg-main-purple' style={{overflowX: 'hidden', overflowY: 'scroll', height: '100vh'}} ref={containerRef}>
            {/* Navbar */}
            <header className="container d-flex justify-content-between align-items-center py-3"
                style={{width: '100%', borderBottom: '1px solid #ffffff', marginTop: '30px', position: 'relative', zIndex: 5 }}>
                <a href="./inicio.html" className="champ-bold"
                    style={{margin: '0 0 0 -2px', marginTop: '-55px', color: 'inherit', textDecoration: 'none', fontSize: '18px'}}>Michigan's</a>
                <a href="./inicio.html" className="champ-bold"
                    style={{margin: '-10px 0 0 -390px', color: 'inherit', textDecoration: 'none', fontSize: '18px' }}>Store</a>
                {/* Nav in PC */}
                <div className="d-none d-block d-lg-block">
                    <nav className="d-flex justify-content-between align-items-center"
                        style={{maxWidth: '100%', marginRight: '470px', marginTop: '-30px'}}>
                        {/* <a href="./inicio.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Inicio</a>
                        <a href="./cursos.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Cursos</a>
                        <a href="./precios.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Precios</a>
                        <a href="./nosotros.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Nosotros</a>
                        <a href="./blogs.html" className="text-white mx-4 poppins-bold" style={{fontSize: '17px'}}>Blogs</a> */}
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
                        <li><a className="dropdown-item text-white poppins-light mb-2" href="./content-quiz-module.html"
                                style={{backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px'}}>Quizz Module</a></li>
                        <li><a className="dropdown-item text-white poppins-light" href="#"
                                style={{backgroundColor: '#7955f8', fontSize: 'small', borderRadius: '25px'}}>Configuración</a></li>
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
        
            <img src="/images/font-quizzes-1.png" style={{position: 'fixed', zIndex: 1, width: '98.40%', height: '100vh', bottom: '0'}} />
            <img src="/images/font-quizzes-2.png" style={{position: 'fixed', zIndex: 2, width: '98.40%', height: '60vh', bottom: '0'}} />
            <img src="/images/font-quizzes-3.png" style={{position: 'fixed', zIndex: 3, width: '98.40%', height: '100vh'}}/>
            <img src="/images/font-quizzes-4.png" style={{position: 'fixed', zIndex: 4, width: '45.40%', height: '100vh', marginLeft: '800px', marginTop: '-215px'}}/>

            <main className='container-fluid d-flex justify-content-center my-3 mx-auto' style={{position: 'relative', zIndex: 6, height: '100vh'}}>
                <section style={{margin: '25px 10px 10px 10px',position: 'relative', zIndex: 7 }}>
                    <div className="d-flex flex-row align-items-center">
                        <div className="col">
                            <div className="instructions">
                                <div className="timer text-center poppins-light">00:00:00</div>
                            </div>
                            <div className="instructions d-flex align-items-center">
                                <img src="/images/section-timer quiz.png"/>
                                <p className="text-start poppins-light"
                                    style={{color: '#04b5eb', fontWeight: 600, width: '205px', marginTop: '-410px', marginLeft: '10px'}}>
                                    Estructura la frase de manera correcta
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div id="practice-areas-container">
                                <div className="practice-area" id="practice-area-1">
                                    <div className="header">
                                        <button className="btn-close" onClick={() => handlerClosePracticeArea(1)}></button>
                                        <p className="practice-title poppins-light"
                                            style={{color: '#7e6bc6', marginLeft: '35px', marginTop: '-12px'}}>Práctica: Gramática
                                        </p>
                                    </div>
                                    <div className="sentence">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className="words poppins-light">
                                        <span>your</span>
                                        <span>exam</span>
                                        <span>prepare</span>
                                        <span>it</span>
                                        <span>!</span>
                                    </div>
                                </div>
                            </div>
                            <div id="practice-areas-container">
                                <div className="practice-area" id="practice-area-2">
                                    <div className="header">
                                        <button className="btn-close" onClick={() => handlerClosePracticeArea(2)}></button>
                                        <p className="practice-title poppins-light"
                                            style={{color: '#7e6bc6', marginLeft: '35px', marginTop: '-12px'}}>Práctica: What time is
                                            it?
                                        </p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="col-6 mt-2">
                                            <p className="text-center" style={{marginTop: '150px'}}>it’s twety twelve</p>
                                        </div>
                                        <div className="col-6 mt-2">
                                            <p className="text-center" style={{marginTop: '150px'}}>it’s twelve twety</p>
                                        </div>
                                    </div>
                                    <img src="/images/q-2-ex.png"
                                        style={{height: '80px', width: '5px', position: 'absolute', zIndex: 4, marginTop: '-65px', marginLeft: '255px'}}
                                        alt=""/>
                                    <img className="ms-4" src="/images/q2.png"
                                        style={{marginTop: '-20px', height: '195px', width: '285px'}} alt="q2"/>
                                </div>
                            </div>
                            <div id="practice-areas-container">
                                <div className="practice-area" id="practice-area-3">
                                    <div className="header">
                                        <button className="btn-close" onClick={() => handlerClosePracticeArea(3)}></button>
                                        <p className="practice-title poppins-light"
                                            style={{color: '#7e6bc6', marginLeft: '35px', marginTop: '-12px'}}>Practica: Escucha
                                        </p>
                                        <img src="/svgs/q3.svg"
                                            style={{marginTop: '125px', marginLeft: '125px', position: 'absolute', zIndex: 5}}
                                            alt="audio"/>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-2 gy-2" style={{margin: '230px 50px 50px 70px'}}>
                                        <div className="col">
                                            <div className="card-quiz mb-3" onClick={(e) => {
                                                const target = e.currentTarget as HTMLElement;
                                                selectCard(target);
                                            }}>
                                                <p className="text-center poppins-light"
                                                    style={{fontWeight: '400', paddingTop: '12px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                                                    flowes and card</p>
                                            </div>
                                            <div className="card-quiz" onClick={(e) => {
                                                const target = e.currentTarget as HTMLElement;
                                                selectCard(target);
                                            }}>
                                                <p className="text-center poppins-light"
                                                    style={{fontWeight: 400, paddingTop: '12px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                                                    a card and cake</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card-quiz mb-3" onClick={(e) => {
                                                const target = e.currentTarget as HTMLElement;
                                                selectCard(target);
                                            }}>
                                                <p className="text-center poppins-light"
                                                    style={{fontWeight: 400, paddingTop: '12px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                                                    cake and flowers</p>
                                            </div>
                                            <div className="card-quiz" onClick={(e) => {
                                                const target = e.currentTarget as HTMLElement;
                                                selectCard(target);
                                            }}>
                                                <p className="text-center poppins-light"
                                                    style={{fontWeight: 400, paddingTop: '12px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                                                    Lorem ipsum </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="practice-areas-container">
                                <div className="practice-area" id="practice-area-4">
                                    <div className="header">
                                        <button className="btn-close" onClick={() => handlerClosePracticeArea(4)}></button>
                                        <p className="practice-title poppins-light"
                                            style={{color: '#7e6bc6', marginLeft: '35px', marginTop: '-12px'}}>Practica: Escucha
                                        </p>
                                        <div className="puzzle-container">
                                            <div style={{marginLeft: '125px', marginTop: '65px'}}>
                                                <div className="puzzle-row">
                                                    <input type="text" style={{marginLeft: '185px'}} className="puzzle-cell"/>
                                                </div>
                                                <div className="puzzle-row">
                                                    <input type="text" className="puzzle-cell"/>
                                                    <input type="text" className="puzzle-cell"/>
                                                    <input type="text" className="puzzle-cell"/>
                                                    <input type="text" className="puzzle-cell"/>
                                                </div>
                                                <div className="puzzle-row" style={{marginLeft: '-3px'}}>
                                                    <input type="text" style={{marginLeft: '65px'}} className="puzzle-cell"/>
                                                    <input type="text" style={{marginLeft: '65px'}} className="puzzle-cell"/>
                                                </div>
                                                <div className="puzzle-row" style={{marginLeft: '-5px'}}>
                                                    <input type="text" style={{marginRight: '5px'}} className="puzzle-cell"/>
                                                    <input type="text" style={{marginRight: '5px'}} className="puzzle-cell"/>
                                                    <input type="text" style={{marginRight: '5px'}} className="puzzle-cell"/>
                                                    <input type="text" style={{marginRight: '240px'}} className="puzzle-cell"/>
                                                </div>
                                                <div className="puzzle-row">
                                                    <input type="text" style={{marginLeft: '-55px'}} className="puzzle-cell"/>
                                                </div>
                                            </div>

                                            <div className="letter-row">
                                                <img src="/svgs/n.svg"
                                                    style={{position: 'absolute', zIndex: 13, marginLeft: '-320px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="N"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 2, marginLeft: '-315px'}} alt="N"
                                                    className="letter"/>
                                                <img src="/svgs/i.svg"
                                                    style={{position: 'absolute', zIndex: 14, marginLeft: '-190px', marginTop: '7px', height: '25px', width: '25px'}}
                                                    alt="I"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 4, marginLeft: '-185px'}} alt="I"
                                                    className="letter"/>
                                                <img src="/svgs/e.svg"
                                                    style={{position: 'absolute', zIndex: 15, marginLeft: '-60px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="E"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 6, marginLeft: '-55px'}} alt="E"
                                                    className="letter"/>
                                                <img src="/svgs/m.svg"
                                                    style={{position: 'absolute', zIndex: 16, marginLeft: '75px', marginTop: '7px',  height: '25px', width: '25px'}}
                                                    alt="M"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 8, marginLeft: '75px'}} alt="M"
                                                    className="letter"/>
                                                <img src="/svgs/d.svg"
                                                    style={{position: 'absolute', zIndex: 17, marginLeft: '200px', marginTop: '5px',  height: '25px', width: '25px'}}
                                                    alt="D"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 10, marginLeft: '205px'}} alt="D"
                                                    className="letter "/>
                                                <img src="/svgs/a.svg"
                                                    style={{position: 'absolute', zIndex: 18, marginLeft: '330px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="A"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 12, marginLeft: '335px'}} alt="A"
                                                    className="letter"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="practice-areas-container">
                                <div className="practice-area" id="practice-area-5">
                                    <div className="header">
                                        <button className="btn-close" onClick={() => handlerClosePracticeArea(5)}></button>
                                        <p className="practice-title poppins-light"
                                            style={{color: '#7e6bc6', marginLeft: '35px', marginTop: '-12px'}}>Practica: Escucha
                                        </p>
                                        <div className="puzzle-container">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <p className="text-center poppins-light" style={{fontWeight: 400, width: '300px'}}>Said
                                                    when something is definitely true or is sure to happen</p>
                                            </div>
                                            <div className="input-group poppins-light fs-2" style={{fontWeight: 400}}>
                                                <input type="text" className="custom-input"/>
                                                <input type="text" className="custom-input"/>
                                                <input type="text" className="custom-input"/>
                                                <input type="text" className="custom-input"/>
                                                <input type="text" className="custom-input"/>
                                                <input type="text" className="custom-input"/>
                                                <input type="text" className="custom-input"/>
                                                <input type="text" className="custom-input"/>
                                            </div>
                                            <div className="letter-row" style={{marginLeft: '50px', marginTop: '150px'}}>
                                                <img src="/svgs/y.svg"
                                                    style={{position: 'absolute', zIndex: 13, marginLeft: '-420px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="Y"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 2, marginLeft: '-415px'}} alt="N"
                                                    className="letter"/>
                                                <img src="/svgs/c.svg"
                                                    style={{position: 'absolute', zIndex: 14, marginLeft: '-315px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="C"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 4, marginLeft: '-310px'}} alt="I"
                                                    className="letter" />
                                                <img src="/svgs/a.svg"
                                                    style={{position: 'absolute', zIndex: 15, marginLeft: '-210px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="A" />
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 6, marginLeft: '-205px'}} alt="E"
                                                    className="letter" />
                                                <img src="/svgs/n.svg"
                                                    style={{position: 'absolute', zIndex: 16, marginLeft: '-100px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="N" />
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 8, marginLeft: '-95px'}} alt="M"
                                                    className="letter"/>
                                                <img src="/svgs/r.svg"
                                                    style={{position: 'absolute', zIndex: 17, marginLeft: '10px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="R" />
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 10, marginLeft: '15px'}} alt="D"
                                                    className="letter"/>
                                                <img src="/svgs/e.svg"
                                                    style={{position: 'absolute', zIndex: 18, marginLeft: '120px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="E"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 12, marginLeft: '125px'}} alt="A"
                                                    className="letter"/>
                                                <img src="/svgs/t.svg"
                                                    style={{position: 'absolute', zIndex: 18, marginLeft: '230px', marginTop: '10px',  height: '20px', width: '20px'}}
                                                    alt="T"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 12, marginLeft: '235px'}} alt="A"
                                                    className="letter"/>
                                                <img src="/svgs/i.svg"
                                                    style={{position: 'absolute', zIndex: 18, marginLeft: '340px', marginTop: '10px', height: '20px', width: '20px'}}
                                                    alt="I"/>
                                                <img src="/images/camp.png"
                                                    style={{position: 'absolute', zIndex: 12, marginLeft: '345px'}} alt="A"
                                                    className="letter"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="practice-areas-container">
                                <div className="practice-area" id="practice-area-6">
                                    <div className="header">
                                        <button className="btn-close" onClick={() => handlerClosePracticeArea(6)}></button>
                                        <p className="practice-title poppins-light"
                                            style={{color: '#7e6bc6', marginLeft: '35px', marginTop: '-12px'}}>Práctica: Gramática
                                        </p>
                                    </div>
                                    <div className="d-flex flex-row" style={{position: 'relative'}}>
                                        <div className="col">
                                            <canvas id="drawingCanvas" ref={canvasRef} width="500" height="300" style={{ border: '1px solid #000' }}></canvas>
                                        </div>
                                        <div className="col">
                                            <div className="container-canvas" style={{position: 'relative'}}>
                                                <div className="cards-container" style={{position: 'absolute'}}>
                                                    <div className="d-flex flex-row"
                                                        style={{marginTop: '270px', marginLeft: '-260px', gap: '120px'}}>
                                                        <div className="col">
                                                            <div className="card-canva card-1 mb-2">
                                                                travel
                                                            </div>
                                                            <div className="card-canva card-2 mb-2">
                                                                always
                                                            </div>
                                                            <div className="card-canva card-3 mb-2">
                                                                taste
                                                            </div>
                                                            <div className="card-canva card-4 mb-2">
                                                                half
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="card-canva card-5 mb-2" style={{color: 'red'}}>
                                                                /ei/
                                                            </div>
                                                            <div className="card-canva card-6 mb-2" style={{color: 'red'}}>
                                                                /æ/
                                                            </div>
                                                            <div className="card-canva card-7 mb-2" style={{color: 'red'}}>
                                                                /æ/
                                                            </div>
                                                            <div className="card-canva card-8 mb-2" style={{color: 'red'}}>
                                                                /a:/
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="practice-areas-container">
                                <div className="practice-area" id="practice-area-7">
                                    <div className="header">
                                        <button className="btn-close" onClick={() => handlerClosePracticeArea(7)}></button>
                                        <p className="practice-title poppins-light"
                                            style={{color: '#7e6bc6', marginLeft: '35px', marginTop: '-12px'}}>Práctica:
                                            Gramática
                                        </p>
                                    </div>
                                    <div className="image-container">
                                        <img className="image-candy" src="/images/candys-quizzes.png" alt="Candy Image"/>
                                    </div>
                                    <div className="sentence-container">
                                        <p className="sentence mx-4 poppins-light">
                                            I like <input type="text" className="input-field poppins-light"/><input type="text" className="input-field poppins-light" />.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="practice-areas-container">
                                <div className="practice-area" id="practice-area-8">
                                    <div className="header">
                                        <button className="btn-close" onClick={() => handlerClosePracticeArea(8)}></button>
                                        <p className="practice-title poppins-light"
                                            style={{color: '#7e6bc6', marginLeft: '35px', marginTop: '-12px'}}>Práctica:
                                            Gramática
                                        </p>
                                        <img src="/svgs/q3.svg"
                                            style={{marginTop: '125px', marginLeft: '125px', position: 'absolute', zIndex: 5}}
                                            alt="audio"/>
                                    </div>
                                    <div className="final-sentences-content">
                                        <p className="senteces-final mx-4 poppins-light" style={{color: '#00cdff'}}>
                                            en<input type="text" className="input-field poppins-light" style={{width: '50px'}}/><input type="text" className="input-field poppins-light" style={{width: '75px'}}/><input type="text" className="input-field poppins-light" style={{width: '35px'}}/><input type="text" className="input-field poppins-light" style={{width: '45px'}}/>
                                        </p>
                                        <p className="senteces-final poppins-light" style={{color: '#00cdff'}}>
                                            es<input type="text" className="input-field poppins-light" style={{width: '245px'}}/>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation poppins-light">
                                <button className="back" onClick={()=> practiceManagerRef.current?.showPreviousPracticeArea()}>Volver</button>
                                <button className="next" onClick={()=> practiceManagerRef.current?.showNextPracticeArea()}>Siguiente</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer PC */}
            <div className="d-none d-block d-lg-block" style={{ marginTop: '195px', position: 'relative', zIndex: 8  }}>
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
                                <YearDisplay onYearChange={setcurrentYear}/>
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
            <ScrollButton containerRef={containerRef} />
        </div>
    );
};
