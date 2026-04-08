import { FadeIn } from "../../components/FadeIn";

export default function OurStory() {
    return (
        <div style={{ paddingTop: "100px" }}>

            {/* ── PAGE HERO ── */}
            <section style={{ padding: "80px 5% 100px", textAlign: "center", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
                <div style={{ position: "relative" }}>
                    <div className="section-label">Our Story</div>
                    <div className="divider" style={{ margin: "0 auto 28px" }} />
                    <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", lineHeight: 0.95, marginBottom: "28px" }}>
                        The Rads Story
                    </h1>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.85rem", letterSpacing: "0.15em", color: "#5a4e40", textTransform: "uppercase" }}>
                        Est. 2020 · Gothatar, Kathmandu
                    </p>
                </div>
            </section>

            {/* ── FOUNDING ── */}
            <section style={{ padding: "100px 5%" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                    <FadeIn>
                        <div className="section-label">The Beginning</div>
                        <div className="divider" style={{ marginBottom: "32px" }} />
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", marginBottom: "24px", lineHeight: 1.2 }}>
                            Born from a passion for craft
                        </h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.9, color: "#8a7a68", marginBottom: "20px" }}>
                            Rads was founded in 2020 with a singular vision: to create a space where culinary artistry meets warm Nepali hospitality. Nestled in the heart of Kathmandu, we draw inspiration from the rich tapestry of flavors that define this extraordinary region.
                        </p>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.9, color: "#8a7a68" }}>
                            Our founders,Santosh Dahal and Sijal Dahal, returned to hospitality with a renewed appreciation for their roots — and a dream to bring world-class technique to Nepali ingredients.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div style={{ position: "relative" }}>
                            <div style={{ width: "100%", paddingBottom: "110%", background: "linear-gradient(135deg, rgba(201,168,76,0.07), rgba(201,168,76,0.02))", border: "1px solid rgba(201,168,76,0.15)", position: "relative" }}>
                                <div style={{ position: "absolute", inset: "20px", border: "1px solid rgba(201,168,76,0.07)" }} />
                                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
                                    <div style={{ fontSize: "5rem", marginBottom: "16px" }}>🍽</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em", color: "#c9a84c", textTransform: "uppercase" }}>Est. 2020</div>
                                </div>
                            </div>
                            <div style={{ position: "absolute", bottom: "-20px", left: "-20px", background: "#c9a84c", padding: "24px 28px" }}>
                                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 300, color: "#0c0a08", lineHeight: 1 }}>6+</div>
                                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#0c0a08", textTransform: "uppercase", marginTop: "4px" }}>Years of Excellence</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── PHILOSOPHY ── */}
            <section style={{ padding: "100px 5%", background: "rgba(201,168,76,0.02)", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <FadeIn>
                        <div className="section-label">Our Philosophy</div>
                        <div className="divider" style={{ margin: "0 auto 32px" }} />
                        <blockquote style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", lineHeight: 1.4, marginBottom: "32px" }}>
                            "Food is memory, culture, and love — plated with care."
                        </blockquote>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.9, color: "#8a7a68" }}>
                            We believe that a truly great meal is more than nourishment — it is an experience that lingers long after the last bite. Every element on the plate, from the provenance of each ingredient to the final garnish, is considered with meticulous care.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section style={{ padding: "100px 5%" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <FadeIn style={{ textAlign: "center", marginBottom: "60px" }}>
                        <div className="section-label">The Team</div>
                        <div className="divider" style={{ margin: "0 auto 24px" }} />
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3" }}>
                            Faces behind the plates
                        </h2>
                    </FadeIn>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "40px" }}>
                        {[
                            { name: "Ram Ram", role: "Head Chef", emoji: "👨‍🍳", bio: "Trained in Lyon and Tokyo. Arjun leads the kitchen with precision and a deep love for Himalayan spices." },
                            { name: "Dev Karmacharya", role: "Bar Lead", emoji: "🍷", bio: "Dev curates an eclectic wine list and bespoke cocktail menu to complement every dish." },
                        ].map((member, i) => (
                            <FadeIn key={member.name} delay={i * 0.15}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "2.5rem" }}>
                                        {member.emoji}
                                    </div>
                                    <div style={{ fontSize: "1.3rem", fontWeight: 400, color: "#f0ebe3", marginBottom: "4px" }}>{member.name}</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "16px" }}>{member.role}</div>
                                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.8, color: "#5a4e40" }}>{member.bio}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
