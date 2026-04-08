import { useState } from "react";
import { FadeIn } from "../../components/FadeIn";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", partySize: "", datetime: "", message: "" });

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{ paddingTop: "100px" }}>

            {/* ── PAGE HERO ── */}
            <section style={{ padding: "80px 5% 80px", textAlign: "center", borderBottom: "1px solid rgba(201,168,76,0.1)", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
                <div style={{ position: "relative" }}>
                    <div className="section-label">Contact</div>
                    <div className="divider" style={{ margin: "0 auto 28px" }} />
                    <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", lineHeight: 0.95, marginBottom: "20px" }}>
                        Reserve your evening
                    </h1>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.83rem", color: "#5a4e40", lineHeight: 1.8 }}>
                        We would be delighted to host you.
                    </p>
                </div>
            </section>

            {/* ── FORM + DETAILS ── */}
            <section style={{ padding: "80px 5% 120px" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }}>

                    {/* Contact details */}
                    <FadeIn>
                        <div className="section-label">Get in Touch</div>
                        <div className="divider" style={{ marginBottom: "36px" }} />
                        {[
                            ["📞", "Phone", "+977 1 4445566"],
                            ["✉", "Email", "hello@raverestaurant.com"],
                            ["📍", "Address", "Thamel Marg, Kathmandu 44600"],
                            ["🕐", "Hours", "Tue – Sun: 12:00 PM – 10:30 PM"],
                        ].map(([icon, label, val]) => (
                            <div key={label} style={{ display: "flex", gap: "16px", marginBottom: "28px" }}>
                                <div style={{ fontSize: "1rem", width: "20px", flexShrink: 0 }}>{icon}</div>
                                <div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "4px" }}>{label}</div>
                                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", color: "#8a7a68", lineHeight: 1.6 }}>{val}</div>
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: "40px", padding: "28px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}>
                            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", marginBottom: "12px" }}>Private Events</div>
                            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.8, color: "#5a4e40" }}>
                                Planning a private dinner, corporate event, or celebration? We offer exclusive dining experiences for groups of 8–40 guests.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Reservation form */}
                    <FadeIn delay={0.15}>
                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "60px 0" }}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>✨</div>
                                <h2 style={{ fontSize: "2rem", fontWeight: 300, fontStyle: "italic", color: "#f0ebe3", marginBottom: "16px" }}>
                                    Thank you, {form.name || "dear guest"}
                                </h2>
                                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.83rem", color: "#8a7a68", lineHeight: 1.8 }}>
                                    Your reservation request has been received. We will be in touch within 24 hours to confirm your booking.
                                </p>
                                <button className="btn-gold" style={{ marginTop: "32px" }} onClick={() => setSubmitted(false)}>
                                    Make Another Request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px", marginBottom: "32px" }}>
                                    {[
                                        { name: "name", placeholder: "Your Name", type: "text" },
                                        { name: "email", placeholder: "Email Address", type: "email" },
                                        { name: "phone", placeholder: "Phone Number", type: "tel" },
                                        { name: "partySize", placeholder: "Party Size", type: "number" },
                                    ].map((f) => (
                                        <input
                                            key={f.name}
                                            name={f.name}
                                            type={f.type}
                                            placeholder={f.placeholder}
                                            value={form[f.name]}
                                            onChange={handleChange}
                                            className="form-field"
                                            required
                                        />
                                    ))}
                                </div>
                                <div style={{ marginBottom: "32px" }}>
                                    <input
                                        name="datetime"
                                        type="text"
                                        placeholder="Preferred Date & Time (e.g. Sat 12 Apr, 7:30 PM)"
                                        value={form.datetime}
                                        onChange={handleChange}
                                        className="form-field"
                                        required
                                    />
                                </div>
                                <div style={{ marginBottom: "48px" }}>
                                    <textarea
                                        name="message"
                                        placeholder="Special requests or dietary requirements..."
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="form-field"
                                        style={{ resize: "none", lineHeight: 1.7 }}
                                    />
                                </div>
                                <button type="submit" className="btn-gold" style={{ width: "100%", fontSize: "0.72rem" }}>
                                    Send Reservation Request
                                </button>
                            </form>
                        )}
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
