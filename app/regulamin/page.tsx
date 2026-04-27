import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CustomCursor from '@/app/components/CustomCursor';

export default function TermsOfService() {
    return (
        <>
            <CustomCursor />
            <Navbar forceSolid={true} />
            <main className="legal-page" style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', padding: '120px 20px 60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff' }}>Regulamin Serwisu</h1>
                <div style={{ color: '#a0aec0', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '20px' }}>
                        Niniejszy regulamin określa ogólne zasady korzystania ze strony internetowej PTAKK oraz usług informacyjnych i narzędzi świadczonych za jej pośrednictwem.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#fff' }}>1. Postanowienia ogólne</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Właścicielem serwisu oraz jego operatorem jest autor strony ukrywający się pod pseudonimem PTAKK. Użytkownik, korzystając ze strony, w pełni akceptuje postanowienia niniejszego regulaminu.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#fff' }}>2. Wyceny AI (AI Estimator)</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Na stronie znajduje się narzędzie do generowania szacunkowych wycen za pomocą API sztucznej inteligencji (AI Estimator). Wszelkie wyceny generowane przez przypięte algorytmy mają charakter <strong>wyłącznie orientacyjny, szacunkowy</strong> i absolunie <strong>nie stanowią wiążącej oferty handlowej</strong> w rozumieniu obowiązku zawarcia umowy oraz przepisów Kodeksu Cywilnego (art. 66 i następne Kodeksu cywilnego).
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Prawdziwa i w pełni wiążąca ostateczna wycena projektu jest przygotowywana oraz potwierdzana indywidualnie dopiero po bezpośrednim kontakcie, spisaniu specyfikacji oprogramowania i wnikliwej analizie wymagań.
                    </p>
                    <p style={{ marginBottom: '20px', fontStyle: 'italic', fontSize: '0.9rem', marginTop: '40px' }}>
                        To jest szkicowy dokument wygenerowany w celu uwarunkowań prawnych. Należy uzupełnić luki prawno-identyfikacyjne przed wdrożeniem produkcyjnym.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
