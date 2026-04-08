import { FadeIn } from "../../components/FadeIn";
import { GALLERY_ITEMS } from "../../constants/data";

export default function Gallery() {
    return (
        <div style={{ paddingTop: "100px" }}>

            {/* ── PAGE HERO ── */}
            <section style={{ padding: "80px 5% 80px", textAlign: "center", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
                <div style={{ position: "relative" }}>
                    <div className="section-label">Gallery</div>
                    <div className="divider" style={{ margin: "0 auto 28px" }} />
                    <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", lineHeight: 0.95, marginBottom: "20px" }}>
                        A feast for the eyes
                    </h1>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.83rem", color: "#5a4e40", lineHeight: 1.8 }}>
                        Glimpses of the food, ambience, and moments that define Rave.
                    </p>
                </div>
            </section>

            {/* ── MAIN GRID ── */}
            <section style={{ padding: "80px 5% 120px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gridTemplateRows: "240px 240px",
                            gap: "12px",
                        }}
                    >
                        {GALLERY_ITEMS.map((item, i) => (
                            <FadeIn
                                key={item.label}
                                delay={i * 0.07}
                                style={{
                                    gridColumn: i === 0 ? "1 / 2" : i === 3 ? "3 / 4" : "auto",
                                    gridRow: i === 0 ? "1 / 3" : "auto",
                                }}
                            >
                                <div
                                    className="gallery-item"
                                    style={{
                                        height: i === 0 ? "492px" : "100%",
                                        background: `radial-gradient(ellipse at 40% 40%, ${item.accent}22, ${item.bg})`,
                                        border: `1px solid ${item.accent}18`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div style={{ textAlign: "center" }}>
                                        <div style={{ fontSize: i === 0 ? "4rem" : "2.5rem", marginBottom: "8px" }}>{item.emoji}</div>
                                        <div
                                            style={{
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontStyle: "italic",
                                                color: item.accent,
                                                fontSize: i === 0 ? "1.1rem" : "0.85rem",
                                                opacity: 0.8,
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                    </div>
                                    <div className="gallery-label">{item.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECOND ROW ── */}
            <section style={{ padding: "0 5% 120px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <FadeIn style={{ textAlign: "center", marginBottom: "40px" }}>
                        <div className="section-label">Behind the Scenes</div>
                        <div className="divider" style={{ margin: "0 auto 0" }} />
                    </FadeIn>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginTop: "40px" }}>
                        {[
                            { label: "Kitchen Prep", bg: "#0d1208", accent: "#7ac94c", emoji: "🔪" },
                            { label: "Plating Art", bg: "#1a0f08", accent: "#c9874c", emoji: "🖌" },
                            { label: "Herb Garden", bg: "#081a0c", accent: "#4cc96a", emoji: "🌿" },
                            { label: "Private Dining", bg: "#0a0814", accent: "#7b4cc9", emoji: "🕯" },
                        ].map((item, i) => (
                            <FadeIn key={item.label} delay={i * 0.1}>
                                <div
                                    className="gallery-item"
                                    style={{
                                        height: "180px",
                                        background: `radial-gradient(ellipse at 40% 40%, ${item.accent}22, ${item.bg})`,
                                        border: `1px solid ${item.accent}15`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        gap: "10px",
                                    }}
                                >
                                    <div style={{ fontSize: "2rem" }}>{item.emoji}</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", color: item.accent, textTransform: "uppercase", opacity: 0.8 }}>
                                        {item.label}
                                    </div>
                                    <div className="gallery-label">{item.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
