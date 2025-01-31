import React, { useEffect, useState } from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../../templates/css/styles.css';

interface ScrollButtonProps {
    containerRef: React.RefObject<HTMLDivElement| null>;
}

export const ScrollButton: React.FC<ScrollButtonProps>= ({ containerRef }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const isVisible = containerRef.current.scrollTop > 100;
                setVisible(isVisible);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, [containerRef]);


    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        if (containerRef.current){
            containerRef.current.scrollTo({ top: 0, behavior: "smooth"});
        }
    };


    return (
        <a
            href="#top"
            id="back-top"
            aria-label="Back to top"
            className={`scroll-btn-visible ${visible ? "visible" : "hidden"}`}
            onClick={scrollToTop}
            style={{
                borderRadius: '50%',
                padding: '10px',
                // boxShadow: '0 2px 5px rgba(0,0,0,0.3',
                position: 'fixed',
                // bottom: '20px',
                zIndex: 9999,
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease'
            }}
        >
            <i className="bi bi-chevron-double-up"></i>
        </a>
    );
};
