import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi';
import bgMusic from '../images/bg-music.mp3';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const location = useLocation();
    const audioRef = useRef(null);

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

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => {
                console.log("Playback failed:", err);
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <audio ref={audioRef} src={bgMusic} loop preload="auto" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '11px' }}>
                <button
                    className='volume-btn'
                    onClick={toggleMusic}
                    title={isPlaying ? "Mute" : "Play"}
                    style={{ cursor: 'pointer' }}
                >
                    {isPlaying ? <HiVolumeUp size={18} /> : <HiVolumeOff size={18} />}
                </button>
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
                    <li onClick={() => handleAnchorClick("contact")}><button className='nav-item'>Social</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;