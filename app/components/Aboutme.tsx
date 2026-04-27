'use client';

import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import { FiStar, FiTrendingUp } from 'react-icons/fi';

const Aboutme = () => {
  const [age, setAge] = useState(0);
  const [typedCode, setTypedCode] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  const fullCode = `/**
 * @profile Kamil Ptak
 * @stack Next.js, TypeScript, AI
 */
interface Innovation {
  passion: string;
  vision: "Scale" | "Impact";
}

const developer: Innovation = {
  passion: "Unstoppable",
  vision: "Scale"
};

function buildSolution(goal: string): void {
  console.log(\`Optimizing: \${goal}\`);
  // System initialized...
}`;

  useEffect(() => {
    const birthDate = new Date('2007-04-30');
    const today = new Date();
    let currentAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      currentAge--;
    }
    setAge(currentAge);

    let i = 0;
    const interval = setInterval(() => {
      setTypedCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) {
        clearInterval(interval);
        setTimeout(() => setShowSuccess(true), 600);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Robust Highlighter that doesn't break HTML tags
  const highlightCode = (code: string) => {
    return code.split('\n').map((line, idx) => {
      // 1. Escape basic HTML first
      let safeLine = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // 2. Single-pass regex to avoid nested replacements
      const tokenRegex = /(\/\*\*[\s\S]*?\*\/|\/\/.*|@\w+)|(".+?"|'.+?'|`.*?`|(?:\${.*?}))|\b(const|interface|function|return|void|string|export|default|import|from|console|log|Developer|Innovation|buildSolution|Kamil|Ptak|true|false|\d+)\b/g;

      const highlighted = safeLine.replace(tokenRegex, (match, comment, string, word) => {
        if (comment) return `<span class="code-comment">${comment}</span>`;
        if (string) return `<span class="code-string">${string}</span>`;
        if (word) {
          if (/^(const|interface|function|return|void|string|export|default|import|from)$/.test(word)) {
            return `<span class="code-keyword">${word}</span>`;
          }
          if (/^(Developer|Innovation|buildSolution|Kamil|Ptak)$/.test(word)) {
            return `<span class="code-class">${word}</span>`;
          }
          if (/^(console|log)$/.test(word)) {
            return `<span class="code-func">${word}</span>`;
          }
          if (/^(\d+|true|false)$/.test(word)) {
            return `<span class="code-number">${word}</span>`;
          }
        }
        return match;
      });

      return (
        <div 
          key={idx} 
          className="code-line" 
          dangerouslySetInnerHTML={{ __html: highlighted || '&nbsp;' }} 
        />
      );
    });
  };

  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__bg-glow"></div>
      <div className="aboutme__bg-glow-2"></div>

      <div className="aboutme_container">
        <div className="aboutme_grid">
          
          <div className="aboutme_visual" data-aos="fade-right">
            <div className="aboutme_code-window">
              <div className="aboutme_code-header">
                <div className="aboutme_code-dot aboutme_code-dot--red"></div>
                <div className="aboutme_code-dot aboutme_code-dot--yellow"></div>
                <div className="aboutme_code-dot aboutme_code-dot--green"></div>
                <span className="aboutme_code-filename">Solution.ts</span>
              </div>
              <div className="aboutme_code-body">
                <pre>
                  <code>
                    {highlightCode(typedCode)}
                    {!showSuccess && <span className="code-cursor">|</span>}
                  </code>
                </pre>
                
                {showSuccess && (
                  <div className="aboutme_code-success">
                    <span className="success-icon">➜</span>
                    <span className="success-text">Compiled successfully</span>
                    <span className="success-meta">Done in 0.8s</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="aboutme_content" data-aos="fade-left">
            <div className="aboutme_eyebrow">O mnie</div>
            
            <h2 className="aboutme_title">
              Świeże spojrzenie na Twój <span>Biznes</span>
            </h2>

            <div className="aboutme_description">
              <p>
                Mówią, że doświadczenie przychodzi z wiekiem. Ja udowadniam, że przychodzi z <span className="highlight-blue">pasją</span> i <span className="highlight-blue">setkami tysięcy napisanych linii kodu</span>.
              </p>
              <p style={{ marginTop: '20px' }}>
                Mając <strong className="text-white">{age} lat</strong>, śmiało wkraczam w świat IT jako specjalista, dla którego najnowsze technologie to po prostu codzienność.
                Dzisiaj buduję zaawansowane, nowoczesne aplikacje i biznesy, wyprzedzając tym samym standardy rynkowe.
              </p>
            </div>

            <div className="aboutme_stats">
              <div className="aboutme_stat-card">
                <span className="aboutme_stat-card-icon"><FiStar /></span>
                <span className="aboutme_stat-card-title">Nieszablonowość</span>
                <p className="aboutme_stat-card-text">
                  Nie szukam wymówek. Rozwiązuję problemy, na których inni się zatrzymują.
                </p>
              </div>

              <div className="aboutme_stat-card">
                <span className="aboutme_stat-card-icon"><FiTrendingUp /></span>
                <span className="aboutme_stat-card-title">Cel Biznesowy</span>
                <p className="aboutme_stat-card-text">
                  Kod to tylko narzędzie – liczy się skalowalność i zysk Twojej firmy.
                </p>
              </div>
            </div>

            <div className="aboutme_footer">
              <div className="aboutme_signature-info">
                <div className="aboutme_signature-name">Kamil Ptak</div>
                <div className="aboutme_signature-role">Founder & Software Engineer</div>
              </div>
              <Image 
                src="/kp-sign.png" 
                alt="Signature" 
                width={120} 
                height={80} 
                className="aboutme_sign-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutme;