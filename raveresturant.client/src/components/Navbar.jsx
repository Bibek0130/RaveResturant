import { React, useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = ({ scrolled, menuOpen, setMenuOpen, activeSection, scrollTo, NAV_LINKS }) => {
    const scroll = scrolled;
    return (
        <Navbar
            fixed="top"
            expand="lg"
            expanded={menuOpen}
            onToggle={(expanded) => setMenuOpen(expanded)}
            style={{
                padding: scroll ? "16px 0" : "28px 0",
                background: scroll ? "rgba(12,10,8,0.97)" : "transparent",
                borderBottom: scroll ? "1px solid rgba(201,168,76,0.15)" : "none",
                transition: "all 0.4s ease",
                backdropFilter: scroll ? "blur(12px)" : "none",
            }}
        >
            <Container fluid style={{ padding: "0 5%" }}>
                {/* Brand Section */}
                <Navbar.Brand
                    className="p-0"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollTo("Home")}
                >
                    <div style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 300,
                        fontSize: "1.6rem",
                        letterSpacing: "0.12em",
                        color: "#f0ebe3"
                    }}>
                        RAVE
                    </div>
                    <div style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.55rem",
                        letterSpacing: "0.4em",
                        color: "#c9a84c",
                        textTransform: "uppercase",
                        marginTop: "-2px"
                    }}>
                        Restaurant
                    </div>
                </Navbar.Brand>

                {/* Hamburger Toggle */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Collapsible Links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ gap: "20px" }}>
                        {NAV_LINKS.map((link) => (
                            <Nav.Link
                                key={link}
                                className={`nav-link ${activeSection === link ? "active" : ""}`}
                                onClick={() => {
                                    scrollTo(link);
                                    setMenuOpen(false); // Closes menu on click for mobile
                                }}
                                style={{
                                    color: activeSection === link ? "#c9a84c" : "#f0ebe3",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "0.85rem",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase"
                                }}
                            >
                                {link}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;

const navbarStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    padding: scrolled ? "16px 5%" : "28px 5%",
    background: scrolled ? "rgba(12,10,8,0.97)" : "transparent",
    borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    transition: "all 0.4s ease",
    backdropFilter: scrolled ? "blur(12px)" : "none",
}