import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const handleAnchorClick = (id) => {
        if (location.pathname !== "/") {
            window.location.href = `/#${id}`;
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <ul>
                <li><button className='nav-item' onClick={() => handleAnchorClick("home")}>Home</button></li>
                <li><button className='nav-item' onClick={() => handleAnchorClick("profile")}>Profile</button></li>
                <li><button className='nav-item' onClick={() => handleAnchorClick("projects")}>Projects</button></li>
                {/* <li><button className='nav-item' onClick={() => handleAnchorClick("activities")}>Activities</button></li> */}
                <li><button className='nav-item' onClick={() => handleAnchorClick("about")}>About</button></li>
                <li><button className='nav-item' onClick={() => handleAnchorClick("contact")}>Contact</button></li>
            </ul>
        </div>
    );
};

export default Navbar;