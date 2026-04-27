import React from 'react';

const Offer = () => {
  const offers = [
    {
      title: "Strony WWW",
      description: "Nowoczesne, responsywne strony internetowe dopasowane do Twoich potrzeb. Od prostych wizytówek po rozbudowane serwisy.",
      icon: "🌐"
    },
    {
      title: "Aplikacje Webowe",
      description: "Zaawansowane aplikacje webowe oparte o najnowsze technologie (React, Next.js), zapewniające szybkość i skalowalność.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Projekty graficzne interfejsów, które są nie tylko estetyczne, ale przede wszystkim intuicyjne i przyjazne dla użytkownika.",
      icon: "🎨"
    },
    {
      title: "Optymalizacja",
      description: "Poprawa wydajności i szybkości działania istniejących stron oraz dbanie o dobre wyniki w wyszukiwarkach (SEO).",
      icon: "🚀"
    }
  ];

  return (
    <section className='offer' id='offer'>
      <div className="offer_container">
        <h2 className="offer_heading" data-aos="fade-down">Oferta</h2>
        <div className="offer_grid">
          {offers.map((item, index) => (
            <div key={index} className="offer_card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="offer_card-icon">{item.icon}</div>
              <h3 className="offer_card-title">{item.title}</h3>
              <p className="offer_card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
