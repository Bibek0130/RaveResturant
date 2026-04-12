import { useState } from "react";
import { FadeIn } from "../../components/FadeIn";
import { MENU_ITEMS } from "../../constants/data.js";

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("Sekuwa");

    return (
        <div style={{ paddingTop: "100px" }}>

            {/* ── PAGE HERO ── */}
            <section style={{ padding: "80px 5% 80px", textAlign: "center", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
                <div style={{ position: "relative" }}>
                    <div className="section-label">The Menu</div>
                    <div className="divider" style={{ margin: "0 auto 28px" }} />
                    <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", lineHeight: 0.95, marginBottom: "20px" }}>
                        Crafted with intention
                    </h1>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.83rem", color: "#5a4e40", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto" }}>
                        Seasonal ingredients, elevated technique, and a deep respect for flavour — every dish tells a story.
                    </p>
                </div>
            </section>

            {/* ── MENU BODY ── */}
            <section style={{ padding: "80px 5% 120px" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>

                    {/* Category tabs */}
                    <FadeIn>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "60px", flexWrap: "wrap" }}>
                            {MENU_ITEMS.map((c) => (
                                <button
                                    key={c.category}
                                    className={`menu-tab${activeCategory === c.category ? " active" : ""}`}
                                    onClick={() => setActiveCategory(c.category)}
                                >
                                    {c.category}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Items */}
                    {MENU_ITEMS.filter((c) => c.category === activeCategory).map((cat) =>
                        cat.items.map((item, i) => (
                            <FadeIn key={item.name} delay={i * 0.1}>
                                <div
                                    className="menu-item"
                                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}
                                >
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: "1.3rem", fontWeight: 400, color: "#f0ebe3", marginBottom: "6px" }}>{item.name}</div>
                                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.78rem", color: "#5a4e40", fontStyle: "italic", lineHeight: 1.6 }}>
                                            {item.desc}
                                        </div>
                                    </div>
                                    <div style={{ fontSize: "1.2rem", color: "#c9a84c", fontStyle: "italic", whiteSpace: "nowrap", paddingTop: "2px" }}>
                                        {item.price}
                                    </div>
                                </div>
                            </FadeIn>
                        ))
                    )}

                    {/* Allergen note */}
                    <FadeIn>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.72rem", color: "#3a3028", lineHeight: 1.8, marginTop: "48px", textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: "32px" }}>
                            Please inform your server of any allergies or dietary requirements. All prices are inclusive of applicable taxes.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
