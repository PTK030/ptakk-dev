"use client"
import React, { useState } from 'react'
import { Poppins } from "next/font/google";
import { useCalendly } from '@/app/hooks/useCalendly';
import { FiCalendar, FiMail, FiZap } from 'react-icons/fi';

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const Contact = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const { openCalendly } = useCalendly();

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        if (!name || !email || !message) {
            e.preventDefault();
            alert("Zostawiłeś puste pola!");
        }
    }

    return (
        <section className='contact' id='contact'>
            <div className="contact__bg-glow"></div>
            <div className="contact__bg-glow-2"></div>

            <div className="contact_container">
                <div className="contact_header" data-aos="fade-down">
                    <div className="contact_eyebrow">Kontakt</div>
                    <h2 className="contact_title">
                        Zacznijmy <span>Współpracę</span>
                    </h2>
                </div>

                <div className="contact_content">
                    <div className="contact_info" data-aos="fade-right">
                        <h3 className="contact_subheading">Gotowy, by wyprzedzić konkurencję?</h3>
                        <p className="contact_text" style={{ marginBottom: '30px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                            Porozmawiajmy o Twoim projekcie. Pierwsza konsultacja jest w pełni <strong>darmowa i niezobowiązująca</strong>.
                            Sprawdzimy, gdzie Twój biznes traci pieniądze i jak odpowiednia technologia może to naprawić.
                        </p>

                        <button onClick={openCalendly} className="contact_calendly-btn">
                            <FiCalendar />
                            Umów darmową konsultację
                        </button>

                        <div className="contact_details" style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
                            <div className="contact_detail-item" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span className="contact_icon" style={{ fontSize: '1.5rem', background: 'rgba(59,130,246,0.1)', padding: '10px', borderRadius: '50%', display: 'flex' }}><FiMail /></span>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Adres E-mail</span>
                                    <a href="mailto:ptakk.dev@icloud.com" className="contact_link" style={{ fontSize: '1.1rem', fontWeight: '500' }}>ptakk.dev@icloud.com</a>
                                </div>
                            </div>
                            <div className="contact_detail-item" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span className="contact_icon" style={{ fontSize: '1.5rem', background: 'rgba(59,130,246,0.1)', padding: '10px', borderRadius: '50%', display: 'flex' }}><FiZap /></span>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Szybka odpowiedź</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#fff' }}>Zwykle w ciągu kilku godzin</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        action="https://getform.io/f/c1e6c263-fdf3-4007-9e9d-56cfdc240954"
                        method="POST"
                        onSubmit={submitForm}
                        className="contact_form"
                        data-aos="fade-left"
                    >
                        <div className="contact_form-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Imię i nazwisko'
                                className={`contact_input ${poppins.className}`}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="contact_form-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Adres email'
                                className={`contact_input ${poppins.className}`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="contact_form-group">
                            <textarea
                                name="message"
                                id="message"
                                placeholder='Wiadomość'
                                className={`contact_textarea ${poppins.className}`}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={`contact_button ${poppins.className}`}>
                            Wyślij wiadomość
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
