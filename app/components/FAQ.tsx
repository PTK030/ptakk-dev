"use client"
import React, { useState } from 'react'

const faqData = [
    {
        question: "Dlaczego warto współpracować z kimś w młodym wieku?",
        answer: "Bo traktuję Twój projekt jak własny. Nie mam korporacyjnych uwarunkowań ani sztywnych godzin pracy od 8 do 16. Żyję tym, co robię. Używam najnowszych, najszybszych technologii rynkowych, które często omijają starsze firmy technologiczne, a dzięki świeżemu, analitycznemu spojrzeniu szybciej rozwiązuję skomplikowane problemy biznesowe."
    },
    {
        question: "Ile czasu zajmuje wdrożenie aplikacji?",
        answer: "Każdy projekt jest inny, ale wyznaję zasadę zwinności (Agile). Pierwsze rezultaty i widoki (prototypy) przedstawiam często już po tygodniu. Średni czas wdrożenia prostszego MVP to około 4-6 tygodni. Konkretny harmonogram zawsze ustalamy przed rozpoczęciem prac."
    },
    {
        question: "Jak wygląda rozliczenie za projekt?",
        answer: "Wyceniam projekty kompleksowo w modelu <strong>Fixed Price</strong> na podstawie analizy. Dzięki temu jeszcze przed rozpoczęciem współpracy wiesz dokładnie, ile zapłacisz, bez ukrytych, znikąd pojawiających się kosztów. Harmonogram płatności zazwyczaj dzielę na logiczne etapy (milestones)."
    },
    {
        question: "Czy zapewniasz utrzymanie po oddaniu projektu?",
        answer: "Oczywiście. Oddanie gotowej aplikacji to dopiero początek sukcesu. Oferuję pakiety wsparcia technicznego, w ramach których monitoruję stabilność, wdrażam aktualizacje i pomagam w skalowaniu, kiedy Twój biznes zaczyna dynamicznie rosnąć."
    },
    {
        question: "Jakich technologii używasz?",
        answer: "Specjalizuję się w najnowocześniejszym stacku: <span class=\"text-main\">React/Next.js, TypeScript, Node.js oraz bazach NoSQL/SQL</span>. To zestaw, który gwarantuje niesamowitą wydajność, bezpieczeństwo na poziomie enterprise i świetne wsparcie pod kątem pozycjonowania (SEO)."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='faq' id='faq'>
            <div className="faq__bg-glow"></div>
            <div className="faq__bg-glow-2"></div>
            
            <div className="faq_container">
                <div className="faq_header" data-aos="fade-down">
                    <div className="faq_eyebrow">FAQ</div>
                    <h2 className="faq_title">
                        Pytania i <span>Odpowiedzi</span>
                    </h2>
                    <p className="faq_subtitle">
                        Rozwiewam najczęstsze wątpliwości przed rozpoczęciem współpracy.
                        Masz inne pytania? Napisz do mnie w sekcji poniżej!
                    </p>
                </div>

                <div className="faq_list">
                    {faqData.map((faq, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className={`faq_item ${activeIndex === index ? 'faq_item--active' : ''}`}>
                                <button
                                    className="faq_question"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    {faq.question}
                                    <span className={`faq_question-icon ${activeIndex === index ? 'faq_question-icon--active' : ''}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </button>
                                <div className={`faq_answer ${activeIndex === index ? 'faq_answer--active' : ''}`}>
                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
