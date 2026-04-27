"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu } from 'react-icons/fi';
import ClipLoader from 'react-spinners/ClipLoader';

const AIEstimator = () => {
    const [prompt, setPrompt] = useState("");
    const [estimation, setEstimation] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const MAX_CHARS = 1500;
    const MIN_CHARS = 20;

    const handleEstimate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim().length < MIN_CHARS || prompt.length > MAX_CHARS) return;

        setLoading(true);
        setError("");
        setEstimation("");

        try {
            const response = await fetch('/api/estimate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Wystąpił błąd podczas estymacji.");
            }

            setEstimation(data.estimation);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="estimator" id="offer">
            <div className="estimator_container">
                <div className="estimator_grid">
                    
                    {/* LEWA STRONA: AI Estimator (na wzór okna kodu z Aboutme) */}
                    <div className="estimator_visual" data-aos="fade-right">
                        <div className="estimator_ai">
                            <div className="estimator_ai-header">
                                <div className="estimator_ai-dots">
                                    <div className="estimator_ai-dot estimator_ai-dot--red"></div>
                                    <div className="estimator_ai-dot estimator_ai-dot--yellow"></div>
                                    <div className="estimator_ai-dot estimator_ai-dot--green"></div>
                                </div>
                                <span className="estimator_ai-filename">AI_Asystent.exe</span>
                            </div>
                            
                            <div className="estimator_ai-title-wrap">
                                <span className="ai-icon"><FiCpu /></span>
                                <h3 className="estimator_ai-title">Inteligentna Wycena AI</h3>
                            </div>
                            <p className="estimator_ai-desc">Opisz swój wymarzony projekt, dokładnie to czego potrzebujesz (np. "Chcę sklep z butami, z blogiem i galerią"), a asystent natychmiastowo przygotuje precyzyjną estymację.</p>

                            <form onSubmit={handleEstimate} className="estimator_form">
                                <div style={{ position: 'relative' }}>
                                    <textarea
                                        className="estimator_textarea"
                                        placeholder="Cześć! Potrzebuję strony dla mojej nowej firmy budowlanej... (min. 20 znaków)"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        maxLength={MAX_CHARS}
                                    ></textarea>
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '15px',
                                        right: '15px',
                                        fontSize: '0.85rem',
                                        color: prompt.length > MAX_CHARS * 0.9 ? '#ff4d4f' : 'rgba(255,255,255,0.4)',
                                        pointerEvents: 'none'
                                    }}>
                                        {prompt.length} / {MAX_CHARS}
                                    </span>
                                </div>

                                <button type="submit" className="estimator_btn" disabled={loading || prompt.trim().length < MIN_CHARS || prompt.length > MAX_CHARS}>
                                    {loading ? <ClipLoader color="#ffffff" size={24} /> : "Generuj Wycenę"}
                                </button>
                            </form>

                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        className="estimator_error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        {error}
                                    </motion.div>
                                )}

                                {estimation && (
                                    <motion.div
                                        className="estimator_result"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        <h4 className="estimator_result-title">Odpowiedź Asystenta:</h4>
                                        <div className="estimator_result-markdown">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{estimation}</ReactMarkdown>
                                        </div>
                                        <div className="estimator_action">
                                            <a href="#contact" className="estimator_btn estimator_btn--outline">Brzmi dobrze? Przejdź do kontaktu!</a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* PRAWA STRONA: Content (Nagłówki + Cennik bazowy na wzór tekstu i statystyk z Aboutme) */}
                    <div className="estimator_content" data-aos="fade-left">
                        <div className="estimator_eyebrow">Cennik</div>
                        
                        <h2 className="estimator_title">
                            Wycena <span>Projektu</span>
                        </h2>

                        <div className="estimator_description">
                            <p>
                                Przejrzystość to podstawa. Sprawdź cennik bazowy poniżej, aby poznać orientacyjne koszty, lub skorzystaj z mojego inteligentnego asystenta po lewej stronie, aby otrzymać precyzyjną wycenę szytą na miarę.
                            </p>
                        </div>

                        <div className="estimator_pricing-grid">
                            <div className="estimator_pricing-card">
                                <h4>Landing Page</h4>
                                <p className="price">od 1000 PLN</p>
                                <p className="desc">Szybka, jednoskraniowa strona ukierunkowana na konwersję.</p>
                            </div>
                            <div className="estimator_pricing-card">
                                <h4>Strona Wizytówka</h4>
                                <p className="price">od 2000 PLN</p>
                                <p className="desc">Kilkupodstronowa witryna dla Twojego biznesu (z CMS).</p>
                            </div>
                            <div className="estimator_pricing-card">
                                <h4>E-Commerce</h4>
                                <p className="price">od 3500 PLN</p>
                                <p className="desc">Sklep internetowy gotowy na sprzedaż i integracje.</p>
                            </div>
                            <div className="estimator_pricing-card">
                                <h4>Aplikacje Webowe</h4>
                                <p className="price">od 6000 PLN</p>
                                <p className="desc">Zaawansowane platformy / SaaS z autorską logiką.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AIEstimator;
