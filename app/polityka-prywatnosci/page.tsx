import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CustomCursor from '@/app/components/CustomCursor';

export default function PrivacyPolicy() {
    return (
        <>
            <CustomCursor />
            <Navbar forceSolid={true} />
            <main className="legal-page" style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', padding: '120px 20px 60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff' }}>Polityka Prywatności</h1>
                <div style={{ color: '#a0aec0', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '20px' }}>
                        Poniższa Polityka Prywatności określa zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach Użytkowników korzystających z Serwisu do celów świadczenia usług drogą elektroniczną.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#fff' }}>1. Administrator Danych</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej jest twórca strony PTAKK.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#fff' }}>2. Cel zbierania danych</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Dane osobowe zbierane są w celu obsługi zapytań z formularza kontaktowego, umawiania spotkań przez Calendly oraz ewentualnego świadczenia usług i przedstawiania szacunkowych wycen przez AI Estimatora.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#fff' }}>3. Pliki Cookies</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Serwis może korzystać z plików cookies w celu analityki ruchu oraz poprawnego działania usług. Zgoda na pliki cookies jest zarządzana z poziomu ustawień przeglądarki lub okna pop-up.
                    </p>
                    <p style={{ marginBottom: '20px', fontStyle: 'italic', fontSize: '0.9rem', marginTop: '40px' }}>
                        Zastrzegamy sobie prawo do czasowego uruchomienia tego dokumentu jako wersji roboczej - jest on szablonem, który należy uzupełnić swoimi prawdziwymi danymi firmowymi przed publikacją.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
