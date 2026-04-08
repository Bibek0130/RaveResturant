import { FadeIn } from "../../components/FadeIn";

export default function Location() {
    return (
        <div style={{ paddingTop: "100px" }}>

            {/* ── PAGE HERO ── */}
            <section style={{ padding: "80px 5% 80px", textAlign: "center", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
                <div style={{ position: "relative" }}>
                    <div className="section-label">Find Us</div>
                    <div className="divider" style={{ margin: "0 auto 28px" }} />
                    <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", lineHeight: 0.95, marginBottom: "20px" }}>
                        In the heart of Kathmandu
                    </h1>
                </div>
            </section>

            {/* ── INFO + MAP ── */}
            <section style={{ padding: "80px 5% 100px" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
                    <FadeIn>
                        {[
                            ["📍", "Address", "Gothatar, Kathmandu 44600, Nepal"],
                            ["🕐", "Hours", "Tue – Sun: 12:00 PM – 10:30 PM"],
                            ["📞", "Reservations", "+977 9851160143"],
                            ["✉", "Email", "hello@radsrestaurant.com"],
                            ["🚗", "Parking", "Available"],
                        ].map(([icon, label, val]) => (
                            <div key={label} style={{ display: "flex", gap: "20px", marginBottom: "36px" }}>
                                <div style={{ fontSize: "1.2rem", width: "24px", flexShrink: 0 }}>{icon}</div>
                                <div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "6px" }}>{label}</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.83rem", color: "#8a7a68", lineHeight: 1.7, whiteSpace: "pre-line" }}>{val}</div>
                                </div>
                            </div>
                        ))}
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        {/* Stylised map card */}
                        <div
                            style={{
                                width: "100%", paddingBottom: "90%",
                                background: "linear-gradient(135deg, rgba(201,168,76,0.04), rgba(201,168,76,0.01))",
                                border: "1px solid rgba(201,168,76,0.12)",
                                position: "relative", overflow: "hidden",
                            }}
                        >
                            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ position: "relative", marginBottom: "16px" }}>
                                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                                        📍
                                    </div>
                                    <div style={{ position: "absolute", bottom: "-8px", left: "50%", transform: "translateX(-50%)", width: "2px", height: "20px", background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)" }} />
                                </div>
                                <div style={{ textAlign: "center", marginTop: "16px" }}>
                                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.1rem", color: "#c9a84c", marginBottom: "6px" }}>Rads Cafe and Family Restaurant</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#5a4e40", textTransform: "uppercase" }}>Gothatar, Kathmandu</div>
                                </div>
                                {/* Decorative grid */}
                                {[...Array(6)].map((_, i) => (<div key={`h${i}`} style={{ position: "absolute", left: 0, right: 0, top: `${i * 20}%`, height: "1px", background: "rgba(201,168,76,0.05)" }} />))}
                                {[...Array(6)].map((_, i) => (<div key={`v${i}`} style={{ position: "absolute", top: 0, bottom: 0, left: `${i * 20}%`, width: "1px", background: "rgba(201,168,76,0.05)" }} />))}
                            </div>
                        </div>

                        <a
                            href="https://maps.google.com?q=Rads+Cafe+Gothatar"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-gold"
                            style={{ display: "block", textAlign: "center", marginTop: "16px", textDecoration: "none" }}
                        >
                            Open in Google Maps
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* ── NEIGHBOURHOOD ── */}
            <section style={{ padding: "60px 5% 100px", borderTop: "1px solid rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.01)" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <FadeIn>
                        <div className="section-label">The Neighbourhood</div>
                        <div className="divider" style={{ margin: "0 auto 32px" }} />
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.9, color: "#8a7a68" }}>
                            Located in the bustling area of Gothatar, Rads sits just a short walk from Airpot Ground and the historic heart of Kathmandu. After dinner, galleries, and  bars — all within easy reach.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
