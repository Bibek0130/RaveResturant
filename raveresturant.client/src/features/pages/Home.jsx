import { useState, useEffect, useRef } from "react";
import "./Home.css"; 
const NAV_LINKS = ["Home", "Our Story", "Menu", "Gallery", "Location", "Contact"];

const MENU_ITEMS = [
    {
        category: "Salad", items: [
            { name: "Green Salad", desc: "Lettuce, cheese, tomato, cucumber, beetroot", price: "Rs130" },
            { name: "Nepali Salad", desc: "Sesame, soyabean, mustard oil, peanuts, onion", price: "Rs170" },
            { name: "Mix Fruit Platter(Seasonal)", desc: "seasonal fruits seasoned", price: "190" },
        ]
    },
    {
        category: "Mains", items: [
            { name: "Smoked Duck Breast", desc: "Cherry jus, roasted celeriac, pickled red cabbage", price: "$38" },
            { name: "Pan-Seared Sea Bass", desc: "Saffron velouté, fennel confit, caperberry gremolata", price: "$42" },
            { name: "Wagyu Striploin 200g", desc: "Bone marrow butter, truffle fries, shallot purée", price: "$68" },
            { name: "Wild Mushroom Risotto", desc: "Porcini broth, mascarpone, crispy shallots, aged pecorino", price: "$28" },
        ]
    },
    {
        category: "Desserts", items: [
            { name: "Dark Chocolate Délice", desc: "Salted caramel, praline crumble, cocoa tuile", price: "$14" },
            { name: "Crème Brûlée", desc: "Tahitian vanilla, shortbread, fresh berries", price: "$12" },
            { name: "Mango Panna Cotta", desc: "Coconut sorbet, passion fruit coulis, lime zest", price: "$13" },
        ]
    },
];

const GALLERY_ITEMS = [
    { label: "Snacks", bg: "#1a1208", accent: "#c9a84c" },
    { label: "The Dining Room", bg: "#0d1a1a", accent: "#4cb8c9" },
    { label: "Sekuwa", bg: "#1a0d0d", accent: "#c94c4c" },
    { label: "Bar & Cocktails", bg: "#0d0d1a", accent: "#8b4cc9" },
    { label: "Hajurba Chicken", bg: "#0a1a10", accent: "#4cc97a" },
    { label: "Dessert ", bg: "#1a1208", accent: "#c97a4c" },
];

const useInView = (threshold = 0.15) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
};

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

export default function RaveRestaurant() {
    const [activeSection, setActiveSection] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenuCat, setActiveMenuCat] = useState("Starters");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
        setActiveSection(id);
    };

    return (
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#0c0a08", color: "#f0ebe3", overflowX: "hidden" }}>
            {/* NAVBAR */}
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                padding: scrolled ? "16px 5%" : "28px 5%",
                background: scrolled ? "rgba(12,10,8,0.97)" : "transparent",
                borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                transition: "all 0.4s ease",
                backdropFilter: scrolled ? "blur(12px)" : "none",
            }}>
                <div style={{ cursor: "pointer" }} onClick={() => scrollTo("Home")}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.6rem", letterSpacing: "0.12em", color: "#f0ebe3" }}>RADS</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.55rem", letterSpacing: "0.4em", color: "#c9a84c", textTransform: "uppercase", marginTop: "-2px" }}>CAFE</div>
                </div>
                <div className={`nav-links${menuOpen ? " open" : ""}`} style={{ display: "flex", gap: "32px", alignItems: "center" }}>
                    {NAV_LINKS.map(l => (
                        <span key={l} className={`nav-link${activeSection === l ? " active" : ""}`} onClick={() => scrollTo(l)}>{l}</span>
                    ))}
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                    <span style={{ opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
                </div>
            </nav>

            {/* HERO */}
            <section id="home" style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(180,80,40,0.06) 0%, transparent 50%), #0c0a08",
                }} />
                {/* Decorative circles */}
                <div style={{ position: "absolute", right: "-80px", top: "10%", width: "500px", height: "500px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", animation: "float 8s ease-in-out infinite" }} />
                <div style={{ position: "absolute", right: "40px", top: "6%", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.05)" }} />
                <div style={{ position: "absolute", left: "-60px", bottom: "15%", width: "280px", height: "280px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)" }} />

                {/* Vertical lines */}
                <div style={{ position: "absolute", left: "5%", top: "20%", width: "1px", height: "200px", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }} />
                <div style={{ position: "absolute", right: "5%", bottom: "20%", width: "1px", height: "150px", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), transparent)" }} />

                <div style={{ position: "relative", textAlign: "center", padding: "0 20px", maxWidth: "800px" }}>
                    <div className="section-label" style={{ marginBottom: "20px" }}>Fine Dining · Kathmandu</div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "0.04em", color: "#f0ebe3", fontStyle: "italic" }}>
                        Rads
                    </h1>
                    <p className="hero-sub" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8a7a68", margin: "24px 0 48px" }}>
                        Where every plate tells a story
                    </p>
                    <div className="hero-btns" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <button className="btn-gold" onClick={() => scrollTo("Menu")}>View Menu</button>
                        <button className="btn-ghost" onClick={() => scrollTo("Contact")}>Reserve a Table</button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", letterSpacing: "0.3em", color: "#5a4e40", textTransform: "uppercase" }}>Scroll</div>
                    <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)", animation: "float 2s ease-in-out infinite" }} />
                </div>
            </section>

            {/* OUR STORY */}
            <section id="our-story" style={{ padding: "120px 5%", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                    <FadeIn>
                        <div>
                            <div className="section-label">Our Story</div>
                            <div className="divider" style={{ marginBottom: "36px" }} />
                            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, lineHeight: 1.15, fontStyle: "italic", color: "#f0ebe3", marginBottom: "28px" }}>
                                Born from a<br />passion for craft
                            </h2>
                            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.9, color: "#8a7a68", marginBottom: "20px" }}>
                                Rads was founded in 2020 with a singular vision: to create a space where culinary artistry meets warm Nepali hospitality. Nestled in the heart of Kathmandu, we draw inspiration from the rich tapestry of flavors that define this extraordinary region.
                            </p>
                            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.9, color: "#8a7a68", marginBottom: "40px" }}>
                                Our team of passionate chefs, transforms the finest seasonal ingredients into plates that are as beautiful as they are delicious. Every dish is a celebration of technique, tradition, and creativity.
                            </p>
                            <button className="btn-gold" onClick={() => scrollTo("Contact")}>Meet Our Team</button>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.25}>
                        <div style={{ position: "relative" }}>
                            {/* Decorative frame */}
                            <div style={{
                                width: "100%", paddingBottom: "120%",
                                background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 100%)",
                                border: "1px solid rgba(201,168,76,0.15)",
                                position: "relative", overflow: "hidden"
                            }}>
                                <div style={{ position: "absolute", inset: "20px", border: "1px solid rgba(201,168,76,0.08)" }} />
                                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
                                    <div style={{ fontSize: "5rem", marginBottom: "16px" }}>🍽</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em", color: "#c9a84c", textTransform: "uppercase" }}>Est. 2018</div>
                                </div>
                            </div>
                            {/* Floating stat */}
                            <div style={{
                                position: "absolute", bottom: "-20px", left: "-20px",
                                background: "#c9a84c", padding: "24px 28px",
                            }}>
                                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 300, color: "#0c0a08", lineHeight: 1 }}>6+</div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#0c0a08", textTransform: "uppercase", marginTop: "4px" }}>Years of Excellence</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* STATS BAND */}
            <FadeIn>
                <div style={{ padding: "60px 5%", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.02)" }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", textAlign: "center" }}>
                        {[["2,000+", "Guests Monthly"], ["40+", "Signature Dishes"], ["12", "Culinary Awards"]].map(([num, label]) => (
                            <div key={label} style={{ padding: "20px" }}>
                                <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#c9a84c", fontStyle: "italic", marginBottom: "8px" }}>{num}</div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#5a4e40", textTransform: "uppercase" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* MENU */}
            <section id="menu" style={{ padding: "120px 5%", position: "relative" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <FadeIn style={{ textAlign: "center", marginBottom: "60px" }}>
                        <div className="section-label">The Menu</div>
                        <div className="divider" style={{ margin: "0 auto 24px" }} />
                        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3" }}>
                            Crafted with intention
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div style={{ display: "flex", gap: "0", justifyContent: "center", marginBottom: "60px", flexWrap: "wrap" }}>
                            {MENU_ITEMS.map(c => (
                                <button key={c.category} className={`menu-tab${activeMenuCat === c.category ? " active" : ""}`} onClick={() => setActiveMenuCat(c.category)}>{c.category}</button>
                            ))}
                        </div>
                    </FadeIn>

                    {MENU_ITEMS.filter(c => c.category === activeMenuCat).map(cat => (
                        <div key={cat.category}>
                            {cat.items.map((item, i) => (
                                <FadeIn key={item.name} delay={i * 0.1}>
                                    <div className="menu-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: "1.3rem", fontWeight: 400, color: "#f0ebe3", marginBottom: "6px" }}>{item.name}</div>
                                            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.78rem", color: "#5a4e40", fontStyle: "italic", lineHeight: 1.6 }}>{item.desc}</div>
                                        </div>
                                        <div style={{ fontSize: "1.2rem", color: "#c9a84c", fontStyle: "italic", whiteSpace: "nowrap", paddingTop: "2px" }}>{item.price}</div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    ))}
                    <FadeIn>
                        <div style={{ textAlign: "center", marginTop: "60px" }}>
                            <button className="btn-ghost" onClick={() => scrollTo("Contact")}>Download Full Menu</button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* GALLERY */}
            <section id="gallery" style={{ padding: "120px 5%", background: "rgba(255,255,255,0.01)" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <FadeIn style={{ textAlign: "center", marginBottom: "60px" }}>
                        <div className="section-label">Gallery</div>
                        <div className="divider" style={{ margin: "0 auto 24px" }} />
                        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3" }}>
                            A feast for the eyes
                        </h2>
                    </FadeIn>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "240px 240px", gap: "12px" }}>
                        {GALLERY_ITEMS.map((item, i) => (
                            <FadeIn key={item.label} delay={i * 0.07} style={{ gridColumn: i === 0 ? "1 / 2" : i === 3 ? "3 / 4" : "auto", gridRow: i === 0 ? "1 / 3" : "auto" }}>
                                <div className="gallery-item" style={{ height: i === 0 ? "492px" : "100%", background: `radial-gradient(ellipse at 40% 40%, ${item.accent}22, ${item.bg})`, border: `1px solid ${item.accent}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ textAlign: "center" }}>
                                        <div style={{ fontSize: i === 0 ? "4rem" : "2.5rem", marginBottom: "8px" }}>{["🍱", "🕯", "🥩", "🍹", "🥩", "🍮"][i]}</div>
                                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: item.accent, fontSize: i === 0 ? "1.1rem" : "0.85rem", opacity: 0.8 }}>{item.label}</div>
                                    </div>
                                    <div className="gallery-label">{item.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOCATION */}
            <section id="location" style={{ padding: "120px 5%", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                    <FadeIn>
                        <div className="section-label">Find Us</div>
                        <div className="divider" style={{ marginBottom: "36px" }} />
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", marginBottom: "36px" }}>
                            In the heart of Kathmandu
                        </h2>
                        {[
                            ["📍", "Address", "Gothatar, Kathmandu 44600, Nepal"],
                            ["🕐", "Hours", "Tue – Sun: 12:00 PM – 10:30 PM"],
                            ["📞", "Reservations", "+977 9851160143"],
                            ["✉", "Email", "hello@raverestaurant.com"],
                        ].map(([icon, label, val]) => (
                            <div key={label} style={{ display: "flex", gap: "20px", marginBottom: "28px" }}>
                                <div style={{ fontSize: "1.2rem", width: "24px", flexShrink: 0 }}>{icon}</div>
                                <div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "4px" }}>{label}</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.83rem", color: "#8a7a68", lineHeight: 1.7, whiteSpace: "pre-line" }}>{val}</div>
                                </div>
                            </div>
                        ))}
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div style={{
                            width: "100%", paddingBottom: "90%",
                            background: "linear-gradient(135deg, rgba(201,168,76,0.04), rgba(201,168,76,0.01))",
                            border: "1px solid rgba(201,168,76,0.12)", position: "relative", overflow: "hidden"
                        }}>
                            {/* Stylized map placeholder */}
                            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ position: "relative", marginBottom: "16px" }}>
                                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>📍</div>
                                    <div style={{ position: "absolute", bottom: "-8px", left: "50%", transform: "translateX(-50%)", width: "2px", height: "20px", background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.1rem", color: "#c9a84c", marginBottom: "6px" }}>Rads Cafe and Family Restaurant</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#5a4e40", textTransform: "uppercase" }}>Gothatar, Kathmandu</div>
                                </div>
                                {/* Decorative grid lines */}
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} style={{ position: "absolute", left: 0, right: 0, top: `${i * 20}%`, height: "1px", background: "rgba(201,168,76,0.05)" }} />
                                ))}
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} style={{ position: "absolute", top: 0, bottom: 0, left: `${i * 20}%`, width: "1px", background: "rgba(201,168,76,0.05)" }} />
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" style={{ padding: "120px 5%", background: "rgba(201,168,76,0.02)", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
                    <FadeIn>
                        <div className="section-label">Contact</div>
                        <div className="divider" style={{ margin: "0 auto 24px" }} />
                        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", marginBottom: "16px" }}>
                            Reserve your evening
                        </h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.83rem", color: "#5a4e40", lineHeight: 1.8, marginBottom: "56px" }}>
                            We would be delighted to host you. For reservations, private events, or any enquiries, please reach out below.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.15}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px", marginBottom: "32px" }}>
                            {["Your Name", "Email Address", "Phone Number", "Party Size"].map(p => (
                                <input key={p} className="form-field" placeholder={p} style={{ gridColumn: p === "Your Name" || p === "Phone Number" ? "auto" : "auto" }} />
                            ))}
                        </div>
                        <div style={{ marginBottom: "32px" }}>
                            <input className="form-field" placeholder="Preferred Date & Time" />
                        </div>
                        <div style={{ marginBottom: "48px" }}>
                            <textarea className="form-field" placeholder="Special requests or dietary requirements..." rows={4} style={{ resize: "none", lineHeight: 1.7 }} />
                        </div>
                        <button className="btn-gold" style={{ width: "100%", fontSize: "0.72rem" }}>Send Reservation Request</button>
                    </FadeIn>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ padding: "60px 5% 40px", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "2rem", letterSpacing: "0.12em", color: "#f0ebe3", marginBottom: "4px" }}>Rads</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.55rem", letterSpacing: "0.4em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "32px" }}>Cafe</div>
                <div style={{ display: "flex", gap: "28px", justifyContent: "center", marginBottom: "36px", flexWrap: "wrap" }}>
                    {NAV_LINKS.map(l => <span key={l} className="nav-link" style={{ fontSize: "0.6rem" }} onClick={() => scrollTo(l)}>{l}</span>)}
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", color: "#3a3028", letterSpacing: "0.08em" }}>
                    © 2026 Rads Cafe and Family Restaurant, Kathmandu. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
