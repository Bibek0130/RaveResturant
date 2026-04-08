import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants/data";

export default function Footer() {
    return (
        <footer
            style={{
                padding: "60px 5% 40px",
                borderTop: "1px solid rgba(201,168,76,0.15)",
                textAlign: "center",
                background: "#0c0a08",
            }}
        >
            {/* Logo */}
            <div
                style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "2rem",
                    letterSpacing: "0.12em",
                    color: "#f0ebe3",
                    marginBottom: "4px",
                }}
            >
                RAVE
            </div>
            <div
                style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.4em",
                    color: "#c9a84c",
                    textTransform: "uppercase",
                    marginBottom: "32px",
                }}
            >
                Restaurant
            </div>

            {/* Nav links */}
            <div
                style={{
                    display: "flex",
                    gap: "28px",
                    justifyContent: "center",
                    marginBottom: "36px",
                    flexWrap: "wrap",
                }}
            >
                {NAV_LINKS.map(({ label, path }) => (
                    <NavLink
                        key={label}
                        to={path}
                        className="nav-link"
                        style={{ fontSize: "0.6rem" }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>

            {/* Divider */}
            <div
                style={{
                    width: "40px",
                    height: "1px",
                    background: "rgba(201,168,76,0.2)",
                    margin: "0 auto 28px",
                }}
            />

            {/* Social row */}
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    marginBottom: "32px",
                }}
            >
                {[["ig", "Instagram", "www.instagram.com"],
                    ["fb", "Facebook", "www.fb.com"],
                    ["tiktok", "Tiktok", "www.tiktok.com"]].map((id, name, url) => (
                    <span
                        key={id}
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "0.58rem",
                            letterSpacing: "0.18em",
                            color: "#5a4e40",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#c9a84c")}
                        onMouseLeave={(e) => (e.target.style.color = "#5a4e40")}
                    >
                            <a href={url}>{id}</a>
                    </span>
                ))}
            </div>

            {/* Copyright */}
            <div
                style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.65rem",
                    color: "#3a3028",
                    letterSpacing: "0.08em",
                }}
            >
                © {new Date().getFullYear()} Rave Restaurant, Kathmandu. All rights reserved.
            </div>
        </footer>
    );
}
