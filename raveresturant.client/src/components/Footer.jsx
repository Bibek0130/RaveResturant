import { useState, useRef } from "react";
function Footer(NAV_LINKS) {

    return (
        <footer style={footerStyle}>
            <div style={footerHeader}>RADS</div>
            <div style={resturantheader}>CAFE</div>
            <div style={navLink}>
                {NAV_LINKS.map(l => <span key={l} className="nav-link" style={{ fontSize: "0.6rem" }} onClick={() => scrollTo(l)}>{l}</span>)}
            </div>
            <div style={{ trademark }}>
                © 2026 Rads Cafe and Family Restaurant, Kathmandu. All rights reserved.
            </div>
        </footer>
    )
}
 export default Footer;
const footerStyle = {
    padding: "60px 5% 40px",
    borderTop: "1px solid rgba(201,168,76,0.15)",
    textAlign: "center"
}
const footerHeader = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    fontSize: "2rem",
    letterSpacing: "0.12em",
    color: "#f0ebe3",
    marginBottom: "4px"
}
const resturantheader = {
    ontFamily: "'Montserrat', sans-serif",
    fontSize: "0.55rem",
    letterSpacing: "0.4em",
    color: "#c9a84c",
    textTransform: "uppercase",
    marginBottom: "32px"
}
const navLink = {
    display: "flex",
    gap: "28px",
    justifyContent: "center",
    marginBottom: "36px",
    flexWrap: "wrap"
}
const trademark = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.65rem",
    color: "#3a3028",
    letterSpacing: "0.08em"
}
