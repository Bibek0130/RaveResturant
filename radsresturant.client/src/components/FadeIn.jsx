import { useState, useEffect, useRef } from "react";

export const useInView = (threshold = 0.15) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return [ref, inView];
};

export const FadeIn = ({ children, delay = 0, style = {} }) => {
    const [ref, inView] = useInView();
    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
                ...style,
            }}
        >
            {children}
        </div>
    );
};
