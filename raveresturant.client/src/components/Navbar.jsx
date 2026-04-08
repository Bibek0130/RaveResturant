import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (path) => {
        navigate(path);
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav
            style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                padding: scrolled ? "16px 5%" : "28px 5%",
                background: scrolled ? "rgba(12,10,8,0.97)" : "transparent",
                borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                transition: "all 0.4s ease",
                backdropFilter: scrolled ? "blur(12px)" : "none",
            }}
        >
            {/* Logo */}
            <div style={{ cursor: "pointer" }} onClick={() => handleNav("/")}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.6rem", letterSpacing: "0.12em", color: "#f0ebe3" }}>
                    RAVE
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.55rem", letterSpacing: "0.4em", color: "#c9a84c", textTransform: "uppercase", marginTop: "-2px" }}>
                    Restaurant
                </div>
            </div>

            {/* Desktop nav */}
            <div className={`nav-links${menuOpen ? " open" : ""}`} style={{ display: "flex", gap: "32px", alignItems: "center" }}>
                {NAV_LINKS.map(({ label, path }) => (
                    <NavLink
                        key={label}
                        to={path}
                        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                        onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>

            {/* Hamburger */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                <span style={{ opacity: menuOpen ? 0 : 1 }} />
                <span style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
            </div>
        </nav>
    );
}
