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
                <li onClick={() => handleAnchorClick("home")}><button className='nav-item'>Home</button></li>
                <li onClick={() => handleAnchorClick("profile")}><button className='nav-item'>Profile</button></li>
                <li onClick={() => handleAnchorClick("skills")}><button className='nav-item'>Skills</button></li>
                <li onClick={() => handleAnchorClick("projects")}><button className='nav-item'>Projects</button></li>
                <li onClick={() => handleAnchorClick("experiences")}><button className='nav-item'>Experiences</button></li>
                <li onClick={() => handleAnchorClick("hobbies")}><button className='nav-item'>Hobbies</button></li>
                <li onClick={() => handleAnchorClick("courses")}><button className='nav-item'>Courses</button></li>
                {/* <li onClick={() => handleAnchorClick("activities")}><button className='nav-item'>Activities</button></li> */}
                <li onClick={() => handleAnchorClick("about")}><button className='nav-item'>About</button></li>
                <li onClick={() => handleAnchorClick("contact")}><button className='nav-item'>Contact</button></li>
            </ul>
        </div>
    );
};

export default Navbar;