import { useEffect, useRef, useState } from "react";
import '../../templates/css/Chatbot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



export const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ role: string; text: string; time: string }[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const chatBodyRef = useRef<HTMLDivElement>(null);
    const chatBotRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button === 0) {
            if (chatBotRef.current) {
                setDragging(true);
                const rect = chatBotRef.current.getBoundingClientRect();
                setOffset({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (dragging && chatBotRef.current) {
            chatBotRef.current.style.left = `${e.clientX - offset.x}px`;
            chatBotRef.current.style.top = `${e.clientY - offset.y}px`;
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    }

    const addMessage = (role: string, text: string) => {
        const currentTime = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });

        const message = { role, text, time: currentTime };
        setMessages((prevMessages) => [...prevMessages, message]);

        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    };

    const handleSend = () => {
        const messageText = inputValue.trim();
        if (messageText) {
            addMessage('user', messageText);
            setInputValue('');

            setTimeout(() => {

                let response = 'Hello. I need help with my order';

                if (messageText.toLowerCase().includes('order')) {
                    response = 'I can help you with your order! Could you please provide your order number?'
                } else if (messageText.toLowerCase().includes('help')) {
                    response = 'I am here to help! What can I assist you with today?';
                } else if (messageText.toLowerCase().includes('payment')) {
                    response = 'Do you need help with a payment issue? Please describe the problem.';
                } else if (messageText.toLowerCase().includes('hello') || messageText.toLowerCase().includes('hi')) {
                    response = 'Hello! How can I assist you today?';
                }

                addMessage('support', response);
            }, 1000);
        }
    };

    const handleMinimize = () => {
        setIsMinimized((prev) => !prev);
    };

    const handleClose = () => {
        setIsClosed(true);
    };

    const handleKeyDown = (e:React.KeyboardEvent) =>{
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    useEffect(() => {
        if (dragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);


    return (
        <div
            ref={chatBotRef}
            id="chatbox-close"
            className={`d-flex flex-column ${isMinimized ? 'minimized' : ''}`}
            style={{
                position: 'absolute',
                bottom: '0%',
                right: '-450px',
                zIndex: 2500,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '800px',
                width: '100%',
                margin: '0px',
                pointerEvents: 'auto',
                cursor: dragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
        >
            {isClosed ? null : (
                <>
                    <div className="col" style={{ marginTop: '320px', marginLeft: '-2px' }}>
                        <div className="chatbot-header" style={{ cursor: 'move' }}>
                            <span>Chatbot Mike</span>
                            <button id="minimize-btn" onClick={handleMinimize}>
                                <img
                                    src="/images/Minimize.png"
                                    style={{ height: '10px', width: '26px', marginLeft: '-65px', marginTop: '-7px' }}
                                    alt="Minimize"
                                />
                            </button>
                            <button id="close-btn" onClick={handleClose}>
                                <img src="/images/Close.png" alt="Close" />
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        {!isMinimized && (
                            <div className="chatbox" id="chatbot-body">
                                <div className="chatbox-body" ref={chatBodyRef}>
                                    {messages.map((msg, index) => (
                                        <div key={index} className={`message ${msg.role}`}>
                                            <p dangerouslySetInnerHTML={{ __html: msg.text }} />
                                            <small>{msg.time}</small>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!isMinimized && (
                            <div className="chatbox-footer d-flex align-items-center mx-2" style={{ boxShadow: 'none', position: 'relative', zIndex: 1000, marginTop: '-75px', marginLeft: '75px' }}>
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{ boxShadow: 'none' }}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Escribe un mensaje..."
                                />
                                <button
                                    className="btn btn-chatbox"
                                    style={{ border: 'none', marginLeft: '180px' }}
                                    onClick={handleSend}
                                >
                                    <img src="/svgs/Airplane.svg" style={{ marginLeft: '-2px' }} alt="Send" />
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
