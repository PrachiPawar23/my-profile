// import { useSwipeable } from "react-swipeable";
import { useState, useEffect, useMemo, useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Quality.css";

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const Quality = () => {
    const [goals] = useState([
        "Become a better developer", "Learn new technologies",
        "Contribute to open source projects", "Improve problem-solving skills",
        "Build a personal project", "Network with other developers",
        "Stay updated with industry trends", "Enhance coding efficiency",
        "Master a specific programming language", "Always be kind and helpful",
        "Never stop learning", "Embrace challenges", "Keep growing emotionally, mentally, and spiritually",
        "Be self observant first and rest later", "Be yourself, don't adjust but adapt"
    ]);

    const [strengths] = useState([
        "Problem-solving", "Adaptability", "Attention to detail", "Team player",
        "Quick learner", "Creative thinking", "Time management", "Positive attitude",
        "Resilient", "Deep thinker", "Honest and loyal", "Great Instincts",
        "Emotional Intelligence", "Self-awareness", "Refletive Work", "Cognitive Flexibility",
        "Observant", "Creative", "Artistic", "Perceptive", "Analytical", "Logical",
    ]);

    const [isHovered, setIsHovered] = useState(false);
    const [index, setIndex] = useState(0);

    const mergedList = useMemo(() => {
        const shuffledGoals = shuffle(goals);
        const shuffledStrengths = shuffle(strengths);
        const maxLength = Math.max(shuffledGoals.length, shuffledStrengths.length);
        const mixed = [];

        for (let i = 0; i < maxLength; i++) {
            if (shuffledGoals[i]) mixed.push({ type: "Goal", text: shuffledGoals[i] });
            if (shuffledStrengths[i]) mixed.push({ type: "Strength", text: shuffledStrengths[i] });
        }

        return mixed;
    }, [goals, strengths]);

    const debounce = useCallback((func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    }, []);

    const next = () => setIndex((i) => Math.min(i + 1, mergedList.length - 1));
    const prev = () => setIndex((i) => Math.max(i - 1, 0));

    /*
    const handlers = useSwipeable({
        onSwipedLeft: () => isHovered && next(),
        onSwipedRight: () => isHovered && prev(),
        trackMouse: true
    });
    */

    useEffect(() => {
        const scrollLockZone = document.querySelector(".scroll-lock-zone");

        const disableScroll = () => {
            document.body.style.overflow = "hidden";
            setIsHovered(true);
        };

        const enableScroll = () => {
            document.body.style.overflow = "";
            setIsHovered(false);
        };

        if (scrollLockZone) {
            scrollLockZone.addEventListener("mouseenter", disableScroll);
            scrollLockZone.addEventListener("mouseleave", enableScroll);
        }

        return () => {
            if (scrollLockZone) {
                scrollLockZone.removeEventListener("mouseenter", disableScroll);
                scrollLockZone.removeEventListener("mouseleave", enableScroll);
            }
        };
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (!isHovered) return;
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        const handleWheel = debounce((e) => {
            if (!isHovered) return;
            if (e.deltaY > 0) next();
            else prev();
        }, 150);

        window.addEventListener("keydown", handleKey);
        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("keydown", handleKey);
            window.removeEventListener("wheel", handleWheel);
        };
    }, [debounce, isHovered]);

    return (
        <div>
            <section className="qualities">
                <div className="qualities"> {/* Removed {...handlers} */}
                    <div className="quality-section scroll-lock-zone" title="Scroll Locked Zone">
                        <div className="quality-name-container">
                            <h1 className="quality-name">{mergedList[index]?.type}</h1>
                        </div>
                        <div className="quality-bubble-container">
                            <HiChevronLeft className="chevron-button left" onClick={prev} title="Previous" size={32} />
                            <div className="quality-bubble">
                                <p>{mergedList[index]?.text}</p>
                            </div>
                            <HiChevronRight className="chevron-button right" onClick={next} title="Next" size={32} />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quality;
