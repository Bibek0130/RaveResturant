import { useNavigate } from "react-router-dom";
import { FadeIn } from "../../components/FadeIn.jsx"

export default function Home() {
    const navigate = useNavigate();
    const go = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); };

    return (
        <>
            {/* ── HERO ── */}
            <section
                style={{
                    position: "relative",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute", inset: 0,
                        background:
                            "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(180,80,40,0.06) 0%, transparent 50%), #0c0a08",
                    }}
                />

                {/* Decorative circles */}
                <div style={{ position: "absolute", right: "-80px", top: "10%", width: "500px", height: "500px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", animation: "float 8s ease-in-out infinite" }} />
                <div style={{ position: "absolute", right: "40px", top: "6%", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.05)" }} />
                <div style={{ position: "absolute", left: "-60px", bottom: "15%", width: "280px", height: "280px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)" }} />

                {/* Vertical accent lines */}
                <div style={{ position: "absolute", left: "5%", top: "20%", width: "1px", height: "200px", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }} />
                <div style={{ position: "absolute", right: "5%", bottom: "20%", width: "1px", height: "150px", background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), transparent)" }} />

                {/*Main Body*/}
                <div style={{ position: "relative", textAlign: "center", padding: "0 20px", maxWidth: "800px" }}>
                    <div className="section-label" style={{ marginBottom: "20px" }}>Family Restaurant · Kathmandu</div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 300, lineHeight: 0.9, letterSpacing: "0.04em", color: "#f0ebe3", fontStyle: "italic" }}>
                        Rads
                    </h1>
                    <p className="hero-sub" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8a7a68", margin: "24px 0 48px" }}>
                        Where every plate tells a story
                    </p>
                    <div className="hero-btns" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        <button className="btn-gold" onClick={() => go("/menu")}>View Menu</button>
                        <button className="btn-ghost" onClick={() => go("/contact")}>Reserve a Table</button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", letterSpacing: "0.3em", color: "#5a4e40", textTransform: "uppercase" }}>Scroll</div>
                    <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)", animation: "float 2s ease-in-out infinite" }} />
                </div>
            </section>

            {/* ── BRIEF STORY TEASER ── */}
            <section style={{ padding: "100px 5%", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                    <FadeIn>
                        <div className="section-label">Est. 2020</div>
                        <div className="divider" style={{ margin: "0 auto 32px" }} />
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", marginBottom: "24px", lineHeight: 1.2 }}>
                            Born from a passion for craft
                        </h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.9, color: "#8a7a68", marginBottom: "40px" }}>
                            Rads was founded with a singular vision — to create a space where food meets warm Nepali hospitality. Every dish is a celebration of technique, tradition, and creativity.
                        </p>
                        <button className="btn-gold" onClick={() => go("/our-story")}>Our Story</button>
                    </FadeIn>
                </div>
            </section>

            {/* ── STATS BAND ── */}
            <FadeIn>
                <div style={{ padding: "60px 5%", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.02)" }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", textAlign: "center" }}>
                        {[["2,000+", "Guests Monthly"], ["40+", "Signature Dishes"], ["12", "Culinary Awards"]].map(([num, label]) => (
                            <div key={label} style={{ padding: "20px" }}>
                                <div style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: "#c9a84c", fontStyle: "italic", marginBottom: "8px" }}>{num}</div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#5a4e40", textTransform: "uppercase" }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/*MENU PREVIEW*/}
            <section style={{ padding: "100px 5%" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
                    <FadeIn>
                        <div className="section-label">The Menu</div>
                        <div className="divider" style={{ marginBottom: "28px" }} />
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", marginBottom: "20px", lineHeight: 1.2 }}>
                           Serve you better
                        </h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.9, color: "#8a7a68", marginBottom: "36px" }}>
                            From delicate starters to showstopping mains and indulgent desserts — each plate is a carefully composed experience.
                        </p>
                        <button className="btn-gold" onClick={() => go("/menu")}>Explore Full Menu</button>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                            {["Truffle Arancini — $14", "Wagyu Striploin 200g — $68", "Dark Chocolate Délice — $14"].map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        padding: "20px 0",
                                        borderBottom: "1px solid rgba(201,168,76,0.12)",
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: "1.1rem",
                                        color: "#c9b89a",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        cursor: "pointer",
                                        transition: "color 0.3s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe3")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#c9b89a")}
                                >
                                    <span>{item.split(" — ")[0]}</span>
                                    <span style={{ color: "#c9a84c", fontStyle: "italic" }}>{item.split(" — ")[1]}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
