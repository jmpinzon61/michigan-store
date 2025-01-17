import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../templates/css/styles.css';

export const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isVisible = window.scrollY > 100;
            setVisible(isVisible);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    
    return (
        <a 
            href="#top"
            id="back-top"
            aria-label="Back to top"
            className={`scroll-btn-visible ${visible ? "visible" : "hidden"}`}
            onClick={scrollToTop}
        >
            <i className="bi bi-chevron-double-up"></i>
        </a>
    );
};
