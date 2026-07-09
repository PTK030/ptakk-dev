# Projekt PTAKK — Analiza stylu i tożsamość wizualna

## 1. Ogólny vibe projektu

**"Ciemny, minimalistyczny, macOS-inspirowany portfolio deva z ludzką twarzą"**

Strona sprawia wrażenie jakby została zaprojektowana przez programistę z obsesją na punkcie detalu, który kocha Apple i chce pokazać swój warsztat w sposób nienachalny, ale wyrafinowany. Jest odważna, ale nie krzykliwa. Używa ogromnych przestrzeni, niskiego kontrastu i szlachetnych materiałów (szkło, blur, delikatne glow). Mimo technicznego chłodu, emoji i bezpośredni, polski copy („Cześć, jestem Kamil", „Przejdźmy do rzeczy", „Zboczyłeś z kursu") dodają ciepła i osobowości. **To design dla kogoś, kto chce powiedzieć: „jestem poważnym developerem, ale nie korpoludem".**

---

## 2. Paleta kolorów

### Główna paleta (SCSS vars)

| Zmienna | Hex | Zastosowanie |
|---------|-----|-------------|
| `$dark` | `#030303` | Tło strony — prawie czarny, nie `#000` |
| `$white` | `#ffffff` | Nagłówki, primary text, przyciski CTA |
| `$main` | `#3b82f6` | Akcent (blue-500) — linki, glow, gradienty, obwódki timeline dot |
| `$main-glow` | `rgba(59,130,246,0.5)` | Rozświetlenia, cień kropki timeline |

### Tekst

| Zastosowanie | Kolor | Uwagi |
|-------------|-------|-------|
| Primary text | `rgba(255,255,255,0.95)` | Biały z lekką przezroczystością |
| Secondary text | `rgba(255,255,255,0.70)` | Opisy, leady |
| Muted text | `rgba(255,255,255,0.50)` | Etykiety, metadane |
| Nawigacja (domyślnie) | `#a1a1aa` | zinc-400 |
| Eyebrowy / metadane | `#71717a` | zinc-500 |
| Numeracja list | `#52525b` | zinc-600 |

### Warstwy glassmorphism

| Zmienna | Wartość |
|---------|---------|
| `$glass` | `rgba(255,255,255,0.03)` |
| `$glass-strong` | `rgba(255,255,255,0.08)` |
| `$glass-border` | `rgba(255,255,255,0.08)` |
| `$glass-highlight` | `rgba(255,255,255,0.15)` |

### Rozjaśnienia ambient

- Główny glow sekcji: `radial-gradient(circle at 50% 50%, rgba($main, 0.04) 0%, transparent 60%)` — dodany jako `::before` na każdej sekcji
- Home dodatkowo: biały glow z góry `rgba(255,255,255,0.05)` i z prawego dolnego rogu `rgba(255,255,255,0.03)`
- Timeline: duży rozmyty glow `radial-gradient(circle, rgba($main, 0.05) 0%, transparent 70%)` z `filter: blur(100px)`
- Strony blog/projekty: fixed `radial-gradient` białego glow `rgba(255,255,255,0.055)` wycentrowany

### Specjalne gradienty

- Gradient na nagłówku timeline: `linear-gradient(135deg, #3b82f6 30%, lighten(#3b82f6, 15%))`  
- Gradient na tytule modala timeline: `linear-gradient(135deg, #fff 0%, #a1a1aa 100%)`  
- Oś timeline: `linear-gradient(to bottom, transparent, rgba($main, 0.3) 10%, rgba($main, 0.3) 90%, transparent)`

### macOS traffic light dots

- Czerwony: `#ff5f56` z border `#e0443e`
- Żółty: `#ffbd2e` z border `#dea123`
- Zielony: `#27c93f` z border `#1aab29`

---

## 3. Typografia

### Font: **SF Pro Display**

6 wag: Regular (400), Medium (500), Semibold (600), Bold (700), Heavy (800), Black (900)

```css
font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont,
             "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

Brak fontów z Google Fonts czy Typekit — wszystko lokalnie. Świadomy wybór: Apple font = Apple aesthetic.

### Skala typograficzna (base: 62.5% → 1rem = 10px)

| Element | Rozmiar | Waga | Tracking |
|---------|---------|------|----------|
| Zegar lockscreena | `8rem` (80px) | 600 | `-2px` |
| Tytuł modala timeline | `5rem` (50px) | 700 | `-0.04em` |
| Tytuł artykułu/projektu | `clamp(3.2rem, 6vw, 5.2rem)` | 600 | `-0.04em` |
| Tytuł home | `3.2rem` | 600 | `-0.5px` |
| Tytuł strony contentowej | `3.2rem` | 600 | `-0.5px` |
| Nagłówek sekcji (`@mixin`) | `2.6rem` | — | — |
| Tytuł timeline card | `1.8rem` | 700 | — |
| Lead / body | `1.6rem` | 400 | — |
| Nav link / logo | `1.4rem` | 400/600 | — |
| Eyebrow / meta | `1.2rem` | 500 | `0.04em` |
| Karta timeline opis | `1.05rem` (10.5px) | 400 | — |
| Tooltip tech icons | `0.85rem` (8.5px) | 700 | — |

**Kluczowe obserwacje:**
- Bardzo oszczędna skala — w zasadzie 4–5 rozmiarów
- Ciasny tracking (`-0.04em`, `-0.02em`, `-0.5px`) dla nagłówków — to znak rozpoznawczy Apple
- Szeroki tracking (`0.04em`, `0.05em`) dla etykiet i lat — kontrast
- Wszystkie strony używają `clamp()` dla tytułów — płynna skala

---

## 4. Przestrzeń i układ

### Sekcje
- `min-height: 100svh` — każda sekcja to pełny viewport
- Padding: `8em 4em` (z `13rem 0 8rem` na stronach z navbar fixed)
- Max-width: `900px` (standard), `760px` (about), `680px` (artykuł), `700px` (modal timeline), `1200px` (timeline section)
- Ostatnia sekcja: `padding-bottom: 20em` — dużo przestrzeni na dole

### Siatki
- Blog/projekty listing: `grid-template-columns: 4rem minmax(0, 1fr) 2rem` — indeks | treść | strzałka
- Galeria: 2 kolumny, `gap: 1.2rem`, hero przez całą szerokość
- About details: 2 kolumny, `gap: 4rem`
- Features: `grid-template-columns: 4rem minmax(0, 1fr)` — numer | opis
- Projekt details: `grid-template-columns: 1.7fr 0.8fr`

### Marginesy i paddingi
- Wewnątrz sekcji wszystko oddycha — duże `gap: 2.4rem`, `1.6rem`, `4rem`
- Timeline item: `40px 20px 120px` — ogromny bottom padding kreuje poczucie głębi
- Blog item: `2.8rem 0` z border-bottom

---

## 5. Komponenty UI

### Navbar (macOS-style)
- Fixed top, z-index 100, max-width 900px
- Lewa strona: traffic light dots (czerwony/żółty/zielony) + logo
- Prawa strona: linki w `#a1a1aa`, hover → `#ffffff`
- Specjalny link (Kontakt): pill shape (`border-radius: 50px`), białe tło, czarny tekst
- Burger menu na mobile: 3 kreski animowane w X, overlay full-viewport z `backdrop-filter: blur(15px)` i `rgba(3,3,3,0.98)`

### macOS Lockscreen
- Full-viewport overlay, z-index 10000
- `backdrop-filter: blur(40px) saturate(180%)`
- Elementy: zegar (8rem), data, avatar (120px, `box-shadow: 0 10px 30px rgba(0,0,0,0.5)`), nazwa użytkownika, przycisk "Zaloguj się" (glass pill)
- Face ID animacja (GIF z `mix-blend-mode: screen`)
- Startup animation: staggered `macFadeUp` — elementy wjeżdżają z dołu z opacity
- Czerwona kropka: lock (content scale 0.95, blur 4px)
- Żółta kropka: minimize (content scale 0.08, translateY 45vh)
- Zielona kropka: fullscreen toggle
- Stan zapamiętany w `sessionStorage` — pokazuje się raz na sesję

### Przyciski

| Typ | Styl |
|-----|------|
| Primary CTA | Białe tło, czarny tekst, `border-radius: 50px`, hover: translateY(-2px), shadow |
| Timeline btn | Glass (`rgba(255,255,255,0.05)`), `backdrop-filter: blur(10px)`, border, hover: translateY(-2px), strzałka w prawo |
| Unlock btn | Glass (`rgba(255,255,255,0.15)`), pill shape |
| Back button | Inline, `rgba(255,255,255,0.5)`, hover → biały |

### Karty i listy

- **Minimal list** (blog/projekty): grid 3-kolumnowy, `border-top/bottom: 1px solid rgba(255,255,255,0.08)`, hover: opacity 0.68, strzałka slide w prawo
- **Timeline cards**: naprzemienny layout (lewo/prawo), glass ikona (64px, `border-radius: 18px`, `rgba($main, 0.1)`), duży watermark numeru (`5rem`, `rgba(255,255,255,0.05)`)
- **Features list**: 2-kolumnowy grid z indeksem `padStart(2, '0')` w `#52525b`

### Tech icons tooltips
- `::after` z `attr(data-hint)`
- Białe tło, czarny tekst, `border-radius: 8px`, `box-shadow: 0 4px 20px rgba(255,255,255,0.15)`
- Bounce easing: `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- Icons start: `opacity: 0.5`, `grayscale(100%)`, hover: full color, translateY(-3px)

### Scrollbar
- Custom: 6px width, transparent track, `rgba(255,255,255,0.15)` thumb, `border-radius: 10px`
- Firefox: `scrollbar-width: thin`

---

## 6. Animacje i przejścia

### Easing curves

| Krzywa | Gdzie używana |
|--------|--------------|
| `cubic-bezier(0.25, 1, 0.5, 1)` | **Główna krzywa brandowa** — lockscreen, modal timeline, minimize, menu mobilne, view transitions |
| `cubic-bezier(0.33, 1, 0.68, 1)` | Overlay i content w modalu timeline |
| `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Minimize animation (sprężyna/odbicie) |
| `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Tooltip entrance (bounce) |
| `ease` (0.2s / 0.3s) | Hover effects |
| `ease-in-out` (0.4s) | Lockscreen opacity |

### Keyframe animacje

| Nazwa | Efekt |
|-------|-------|
| `dot-pulse` | Kropka timeline: scale 1→1.5→1, opacity 1→0.5→1, 2s infinite |
| `macFadeUp` | Startup lockscreena: translateY(20px)→0, opacity 0→1, staggered delays |
| `faceIdScan` | GIF Face ID: scale 0.95→1.05, opacity 0.7→1, drop-shadow pulse |
| `macScaleOut` | Page transition out: scale(1)→0.96, opacity 1→0, blur 0→8px |
| `macScaleIn` | Page transition in: scale(1.04)→1, opacity 0→1 |

### View Transitions API
- Custom root transitions: `macScaleOut` (0.6s) + `macScaleIn` (0.6s)
- Navbar wykluczony z animacji poprzez `transition:name="main-navbar"`
- Timing: `cubic-bezier(0.25, 1, 0.5, 1)`

---

## 7. Glassmorphism i powierzchnie

- Navbar overlay mobile: `backdrop-filter: blur(15px)`
- Lockscreen: `backdrop-filter: blur(40px) saturate(180%)`
- Timeline modal overlay: `backdrop-filter: blur(20px)`
- Timeline trigger btn: `backdrop-filter: blur(10px)`
- Wszystkie obrazy/grafiki: `border: 1px solid rgba(255,255,255,0.08)`, subtle glass bg `rgba(255,255,255,0.03)`
- Wszystkie bordery separatorów: `1px solid rgba(255,255,255,0.08)`

**Filozofia**: nie ma ostrych cięć. Każda powierzchnia ma delikatną przezroczystość, rozmycie tła, subtelny border. To tworzy wrażenie warstwowości i głębi — jak w macOS.

---

## 8. Cursor design

Trzy customowe kursory SVG:

| Kursor | Plik | Offset | Cel |
|--------|------|--------|-----|
| Domyślny | `cursor.svg` | 10,7 | Wszystkie elementy |
| Pointer | `handpointing.svg` | 10,7 | Linki, buttony, `[role="button"]` |
| Text | `textcursor.svg` | 10,10 | `<p>`, nagłówki, inputy, textarea |

To nie jest tylko „miły dodatek" — to świadectwo **obsesji na punkcie detalu**. Mało kto robi custom cursory.

---

## 9. Charakter kopii i voice

- **Język**: polski (całość UI)
- **Ton**: bezpośredni, pewny siebie, techniczny ale przystępny
- **Przykłady**:
  - „Cześć, jestem Kamil" — ciepłe przywitanie
  - „Przejdźmy do rzeczy" — asertywny call to action
  - „Zboczyłeś z kursu" (404) — humorystyczne, nieformalne
- **Odbiorca docelowy**: potencjalni klienci szukający senior full-stack developera. Kopi komunikuje kompetencję bez protekcjonalności.

---

## 10. Decyzje projektowe — „co ten projektant myślał"

1. **„Apple robi to dobrze, więc nie wymyślam koła na nowo"**  
   Cała strona to hołd dla macOS: traffic light dots, lockscreen z Face ID, SF Pro font, płynne animacje, glassmorphism, spring-based easing. To nie jest kopiowanie — to **przeniesienie języka UI z systemu operacyjnego do przeglądarki**, bo to język, który użytkownik już zna i ufa mu.

2. **„Ciemne tło = premium, jasne = amatorskie"**  
   Nie ma light mode. W ogóle. `#030303` to nie jest zwykły czarny — ma 0.76% koloru. To robi różnicę. Cała strona jest jak kino — ciemne pomieszczenie, tylko ekran świeci.

3. **„Content first — reszta niech znika"**  
   Minimalna ilość chrome. Żadnych nadmiarowych cieni, dekoracji, zbędnych ramek. Treść jest królem, a glassmorphism i subtelne glowy są tylko po to, żeby treść mogła oddychać.

4. **„Detal to nie fanaberia, to dowód szacunku"**  
   Custom cursory, własny easing curve (`cubic-bezier(0.25, 1, 0.5, 1)`) używany konsekwentnie w całej aplikacji, brak domyślnego scrollbara, `::after` na linkach z underline offsetem, `padStart(2, '0')` na numerach — to wszystko są decyzje, które 99% devów by pominęło. Autor nie pomija.

5. **„Ludzie lubią ludzi, nie korporacje"**  
   Emoji PNG zamiast icon setu (😎, 💪, 🧠, 🤝), melting face na 404, bezpośredni copy w 2. osobie — to wszystko sprawia, że strona jest **ludzka**. Nawet z całą tą Apple estetyką, nie jest zimna.

6. **„Nie potrzebuję Tailwinda, żeby zrobić ładną stronę"**  
   Czysty SCSS, BEM naming, żadnych CSS-in-JS czy utility-first frameworków. Autor wybiera kontrolę nad szybkością developmentu. To mówi, że jest doświadczony i ma swoje zdanie.

7. **„Projektowanie dla samego projektowania to nuda — projektowanie z narracją to sztuka"**  
   Lockscreen nie jest tylko ładny — opowiada historię. „Zaloguj się, żeby wejść". Face ID skanuje. Czerwona kropka blokuje, żółta minimalizuje. To nie są tylko efekty — to **interaktywna narracja**.

8. **„Przestrzeń to luksus"**  
   Ogromne paddingi (`8em 4em`, `20em` na dole), małe fonty (1.05rem na opisach timeline, 0.85rem na tooltipach), dużo `gap` i `margin`. Nic nie jest stłoczone. Każdy element ma oddech.

---

## 11. Wnioski do stworzenia designu dla innej aplikacji

Jeśli chcesz zaprojektować coś w tym samym guście:

### Musisz mieć:
- **Ciemne tło** — nie `#000`, a `#030303` lub `#0a0a0a`
- **Jeden akcentowy kolor** — `#3b82f6` (lub dowolny inny, ale **tylko jeden wyraźny**)
- **Systemowy font** — SF Pro, Inter, lub cokolwiek co nie jest „web safe" (ważne: ma wyglądać elegancko)
- **Glassmorphism** — `backdrop-filter: blur()`, `rgba(255,255,255,0.03-0.08)` jako powierzchnie, subtelne bordery
- **Bardzo dużo przestrzeni** — strony nie mogą być „zapakowane"
- **Płynne animacje** — `cubic-bezier(0.25, 1, 0.5, 1)` jako domyślna krzywa
- **Konsekwentny tracking** — ciasny na nagłówkach, szeroki na etykietach

### Możesz dodać dla charakteru:
- Jeden „gimmick" interaktywny (jak lockscreen, jak traffic light dots)
- Custom cursory
- Emoji lub inne nie-perfekcyjne elementy jako przeciwwagę dla chłodu technicznego
- Lokalny, bezpośredni copy — unikaj korporacyjnego języka

### Unikaj:
- Light mode (to by zniszczyło atmosferę)
- Wielu kolorów akcentowych (trzymaj się jednego)
- Ciężkich cieni i ostrych krawędzi (wszystko ma być miękkie, rozmyte, warstwowe)
- Zbyt wielu rozmiarów fontów (trzymaj się 4-5)

---

## 12. Podsumowanie — esencja

> **PTAKK to ciemny, kinowy macOS-inspirowany portfolio z obsesją na punkcie detalu, który łączy techniczną perfekcję z ludzkim ciepłem. Jest jak wnętrze Tesli: minimalne, eleganckie, wszystko ma swoją funkcję, ale nie boi się dodać uśmiechu.**
