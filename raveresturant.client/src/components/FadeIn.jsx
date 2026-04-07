import { useEffect, useRef, useState } from 'react'; 
import useInView from './UseInView.jsx';

const FadeIn = ({ children, delay = 0, style = {} }) => {
    const [ref, inView] = useInView();
    return (
        <div ref={ref} style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
            ...style
        }}>
            {children}
        </div>
    );
};

export default FadeIn;