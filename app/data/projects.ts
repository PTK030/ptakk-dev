export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    features: string[];
    tech: string[];
    preview: string;
    github: string;
    imageClass: string;
    sliderImages: string[];
}

export const projects: Project[] = [
    {
        id: "skyling",
        title: "Skyling",
        category: "AI / EdTech",
        description: "Aplikacja webowa do nauki języków offline podczas lotu. Spersonalizowane kursy językowe generowane przez AI.",
        longDescription: "Skyling to innowacyjna platforma AI, która zamienia czas spędzony w samolocie w możliwość nauki języka. Zamiast standardowych, ogólnych kursów, aplikacja generuje w 100% spersonalizowane, dostosowane do konkretnego celu podróży paczki językowe, zoptymalizowane pod kątem działania offline (w trybie samolotowym). Narzędzie skupia się na 100 najbardziej przydatnych zwrotach z uwzględnieniem lokalnych dialektów i specyficznego kontekstu podróży (biznes, randki, zwiedzanie).",
        features: [
            "Architektura Offline-First (działanie bez internetu)",
            "Generowanie spersonalizowanych kursów przez AI",
            "Obsługa ponad 50 języków i dialektów",
            "Optymalizacja pod kątem UX na urządzeniach mobilnych",
            "Integracja z bezpiecznymi płatnościami Stripe"
        ],
        tech: ["Next.js", "AI", "Tailwind CSS", "Stripe"],
        preview: "https://skyling-online-f5sg.vercel.app/",
        github: "#",
        imageClass: "projects_row-visual--skyling",
        sliderImages: ["/skyling.png"]
    },
    {
        id: "dryfta",
        title: "DRYFTA",
        category: "E-Commerce / Automotive",
        description: "Nowoczesny, mroczny sklep internetowy dla marki związanej z kulturą street racingu i technologią.",
        longDescription: "Dryfta to autorska platforma e-commerce stworzona dla marki zajmującej się dystrybucją technologii dla kierowców ceniących wolność na drodze. Projekt wyróżnia się niezwykle mocnym, mrocznym designem premium, kierowanym do kultury street racingu. Posiada zaawansowane, płynne animacje oraz minimalistyczny interfejs sklepowy, zoptymalizowany pod kątem szybkości ładowania i konwersji (sklep, koszyk, zintegrowane FAQ).",
        features: [
            "Mroczny, klimatyczny i nowoczesny design",
            "Szybki i zoptymalizowany system e-commerce",
            "Płynne animacje i przejścia (Framer Motion)",
            "Zintegrowany koszyk i proces checkoutu",
            "Responsywność i wysoka wydajność na mobile"
        ],
        tech: ["Next.js", "Framer Motion", "SCSS", "Vercel"],
        preview: "https://dryfta-shop.vercel.app/",
        github: "#",
        imageClass: "projects_row-visual--dryfta",
        sliderImages: ["/dryfta.png"]
    },
    {
        id: "ogarnijustny",
        title: "OgarnijUstny.pl",
        category: "AI / SaaS / EdTech",
        description: "Symulator matur ustnych zasilany sztuczną inteligencją. Przygotowanie do egzaminu zgodnie z wytycznymi CKE.",
        longDescription: "OgarnijUstny.pl to platforma SaaS (Software as a Service), która rewolucjonizuje przygotowania do matury ustnej z języka polskiego i angielskiego. Użytkownicy odbywają symulowane rozmowy z egzaminatorem AI, w oparciu o najnowszą, oficjalną bazę pytań jawnych CKE. Algorytmy oceniają wypowiedź pod kątem płynności, merytoryki oraz kultury języka, dostarczając natychmiastowy feedback. Aplikacja oparta jest na systemie tokenów (Pay-as-you-go).",
        features: [
            "Interaktywne symulacje egzaminu ustnego z AI",
            "Analiza merytoryczna i językowa według kryteriów CKE",
            "Autorski system rozliczeń oparty o pakiety tokenów",
            "Zintegrowane płatności BLIK, Przelewy24, Apple/Google Pay",
            "Aktualna, oficjalna baza pytań jawnych (2026)"
        ],
        tech: ["React", "AI", "Node.js", "Payment Gateways"],
        preview: "https://ogarnijustny.pl",
        github: "#",
        imageClass: "projects_row-visual--ogarnijustny",
        sliderImages: ["/ustny.png"]
    }
];
