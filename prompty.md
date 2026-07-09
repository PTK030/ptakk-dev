# Prompty do wygenerowania designu — TenderMatch

> Na podstawie DNA designu z PTAKK (style.md), po usunięciu elementów specyficznych dla portfolio (lockscreen, kropki macOS, emoji dekoracyjne, portfolio voice). Design przeniesiony do kontekstu B2B SaaS do wyszukiwania przetargów publicznych.

---

## Spis treści

1. [Design System — ogólna specyfikacja wizualna](#1-design-system--ogólna-specyfikacja-wizualna)
2. [Midjourney / DALL-E — prompt na moodboard](#2-midjourney--dall-e--prompt-na-moodboard)
3. [Ekran: Dashboard / Lista przetargów](#3-ekran-dashboard--lista-przetargów)
4. [Ekran: Szczegóły przetargu + ocena AI](#4-ekran-szczegóły-przetargu--ocena-ai)
5. [Ekran: Profil Firmy / Filtry](#5-ekran-profil-firmy--filtry)
6. [Ekran: Stan pusty / onboarding](#6-ekran-stan-pusty--onboarding)
7. [Komponent: Karta przetargu na liście](#7-komponent-karta-przetargu-na-liście)
8. [Komponent: Score matcha / wskaźnik dopasowania](#8-komponent-score-matcha--wskaźnik-dopasowania)
9. [Komponent: Nawigacja górna](#9-komponent-nawigacja-górna)
10. [Mikrointerakcje i animacje](#10-mikrointerakcje-i-animacje)
11. [Mobile / Responsive](#11-mobile--responsive)
12. [Styl copy i tone of voice](#12-styl-copy-i-tone-of-voice)

---

## 1. Design System — ogólna specyfikacja wizualna

### 1.1 Paleta kolorów

```
Tło strony:       #030303 (prawie czarny)
Tło kart/panel:   rgba(255,255,255,0.03) z backdrop-filter: blur(12px)
Bordery:          rgba(255,255,255,0.08)
Hover:            rgba(255,255,255,0.06)

Akcent:           #3b82f6 (blue-500)
  glow:           rgba(59,130,246,0.3)
  hover:          #2563eb
  muted:          rgba(59,130,246,0.12)

Tekst primary:    rgba(255,255,255,0.95)
Tekst secondary:  rgba(255,255,255,0.65)
Tekst muted:      rgba(255,255,255,0.45)

Match score wysoki:  #22c55e (green-500)
Match score średni:  #eab308 (yellow-500)
Match score niski:   #ef4444 (red-500)
Status wygrany:      #22c55e
Status przegrany:    #ef4444
Status w trakcie:    #3b82f6
```

### 1.2 Typografia

```
Font: Inter lub SF Pro Display (jeśli licencja pozwala)
Base: 62.5% → 1rem = 10px

Nagłówek dashboardu:  2.8rem / weight: 700 / tracking: -0.03em
Nazwa przetargu:       1.6rem / weight: 600 / tracking: -0.02em
Score matcha:          2.4rem / weight: 800
Body / opis:           1.4rem / weight: 400 / line-height: 1.6
Etykiety / metadane:   1.2rem / weight: 500 / letter-spacing: 0.03em
Small / tagi:         1.05rem / weight: 500
Nagłówek sekcji:      1.1rem / weight: 600 / letter-spacing: 0.05em / uppercase
```

### 1.3 Zaokrąglenia i spacing

```
Karty:                 border-radius: 1.2rem
Przyciski pill:        border-radius: 50px
Inputy / selektory:    border-radius: 0.8rem
Tagi / badge:          border-radius: 0.6rem
Modal:                 border-radius: 1.6rem

Gap między kartami:    1.2rem
Padding karty:         1.6rem 2rem
Padding sekcji:        2rem
Padding strony:        2rem (mobile), 4rem (desktop)
```

### 1.4 Glassmorphism

```
Karty na liście:       bg: rgba(255,255,255,0.02), border: 1px solid rgba(255,255,255,0.06)
  hover:               bg: rgba(255,255,255,0.05), border: 1px solid rgba(255,255,255,0.1)
Panel boczny / modal:  bg: rgba(0,0,0,0.85), backdrop-filter: blur(24px)
  border:              1px solid rgba(255,255,255,0.08)
Overlay:               bg: rgba(0,0,0,0.6), backdrop-filter: blur(4px)
```

### 1.5 Cieniowanie i głębia

```
Karta (spoczynek):     box-shadow: 0 1px 3px rgba(0,0,0,0.3)
Karta (hover):         box-shadow: 0 8px 30px rgba(0,0,0,0.4)
Dropdown / tooltip:    box-shadow: 0 12px 40px rgba(0,0,0,0.5)
Glow akcentu:          box-shadow: 0 0 20px rgba(59,130,246,0.15)
```

---

## 2. Midjourney / DALL-E — prompt na moodboard

```
Dark UI dashboard for a Polish B2B SaaS platform finding public tenders. 
Near-black background (#030303), blue accent (#3b82f6), glassmorphism cards 
with subtle borders and backdrop blur. System font, clean minimal layout. 
Split-view layout: left side has a scrollable list of tender cards with 
match scores (color-coded green/yellow/red), right side shows tender details 
with AI-generated summary section. Professional, premium, data-dense but 
readable. No decorative elements. Dark mode only. Cinematic lighting with 
subtle blue radial glow. Polish language UI. --ar 16:9 --v 6.1
```

---

## 3. Ekran: Dashboard / Lista przetargów

**Cel:** Użytkownik widzi wszystkie dopasowane przetargi, posortowane od najlepiej dopasowanego. Ma mieć natychmiastową odpowiedź na pytanie "w co warto wejść".

**Prompt do wygenerowania mockupu:**

```
Dark-themed B2B SaaS dashboard, Polish language "Przetargi" page.
Layout: top navigation bar with logo "TenderMatch" on left, 
"Profil firmy" and "Przetargi" links on right, active link highlighted 
with blue accent underline.

Main content: full-width list of tender cards. Each card shows:
- Large match score badge (percentage, color-coded: green >80%, 
  yellow 50-80%, red <50%) on the left
- Tender title (white, bold) with small CPV code label below
- Short description excerpt (gray, 2 lines)
- Budget range badge, location badge, deadline badge
- Right side: small arrow icon

Top of page: filter bar with text search input, CPV dropdown, 
region dropdown, budget range slider/inputs. "Odśwież dane" button 
on right (glass style pill).

Cards have glassmorphism background (subtle transparency, blur).
Near-black background with very subtle blue radial glow top-center.
Scrollbar is thin (6px), semi-transparent white.
No decorative elements, no emoji. Ultra-clean, premium, data-focused.
```

**Key design decisions:**
- Match score jest **pierwszą** rzeczą, którą widzisz — duży, kolorowy, nie do pomylenia
- Filtry u góry, ale nie dominują — to lista jest królem
- Karty mają jednolitą wysokość, czystą siatkę, bez zbędnych ozdobników
- Scroll jest miękki, karty reagują hoverem (lekki glow, uniesienie)

---

## 4. Ekran: Szczegóły przetargu + ocena AI

**Cel:** Użytkownik klika w przetarg i widzi pełne dane + ocenę AI "czy warto startować". Ma podjąć decyzję w 30 sekund.

**Prompt do wygenerowania mockupu:**

```
Split-screen dark UI for tender details view. Left panel (~65% width): 
scrollable tender details. Right panel (~35% width): sticky AI assessment.

Left panel content:
- Back arrow + "Powrót do listy" link at top
- Tender title (large, 2.8rem, bold, white)
- Meta row: CPV code badge | Location | Budget | Deadline | Status badge
- Section "Opis" - full body text of tender, gray on dark, readable
- Section "Załączniki" - list of attachment files with download icons

Right panel (glass panel, backdrop-filter blur, subtle border):
- Top: "Ocena AI" label (subtle, uppercase, small)
- Large score circle (ring visualization, color-coded)
- Score number (2.4rem, bold) + "dopasowanie" label
- Separator line (rgba(255,255,255,0.08))
- "CZY WARTO STARTUJE?" header (bold, white)
- 2-3 sentence AI justification in gray, with key-matching keywords 
  highlighted in blue
- "Dlaczego pasuje:" bullet points (company keywords matched vs tender content)
- Bottom: primary CTA button "Oznacz jako rozpatrzony" (white bg, black text, 
  pill shape) and secondary "Nie pasuje" (ghost button)

Near-black background, blue accent, glassmorphism. Professional, 
data-rich but scannable. Polish UI.
```

**Key design decisions:**
- AI panel jest zawsze widoczny (sticky) — użytkownik przewija opis, widzi ocenę
- Duży wskaźnik kołowy NOT the percentage in a circle — ring progress
- Uzasadnienie AI jest krótkie (2-3 zdania) — nikt nie czyta elaboratu
- Kluczowe słowa pasujące są podświetlone — użytkownik widzi *dlaczego*

---

## 5. Ekran: Profil Firmy / Filtry

**Cel:** Użytkownik definiuje profil swojej firmy. To jest config, który robi się raz i rzadko zmienia.

**Prompt do wygenerowania mockupu:**

```
Dark settings/form page for company profile configuration in a 
Polish tender-matching B2B SaaS. Clean, centered single-page layout 
with glassmorphism card container (max-width: 720px).

Form fields:
- "Nazwa firmy" text input (subtle dark bg, white border on focus)
- "Branża" dropdown/select with clean style
- "Słowa kluczowe" tag input - user types and hits enter, keywords 
  appear as small white pills with X to remove
- "Kody CPV" multi-select with search, selected items shown as 
  small badges in blue
- "Województwo" dropdown
- "Budżet min / max" - two number inputs side by side, with "zł" suffix

Each section separated by thin divider (rgba(255,255,255,0.06)).

Bottom: "Zapisz profil" primary button (pill, white bg, black text) 
and "Testuj dopasowanie" secondary glass button.

Top: back/cancel link. Title "Profil firmy" (2.4rem, bold).

Dark background, subtle glow. No clutter. Feels like configuring 
a precision instrument.
```

**Key design decisions:**
- Tag input z pigułkami — to kluczowe UX (słowa kluczowe to rdzeń matchowania)
- Kody CPV z multi-select + search — nikt ich nie pamięta, trzeba wyszukiwać
- Podział na sekcje cienkimi liniami — formularz długi, ale nie przytłacza
- Przycisk "Testuj dopasowanie" — user może od razu zobaczyć efekt

---

## 6. Ekran: Stan pusty / onboarding

**Cel:** Użytkownik pierwszy raz wchodzi, nie ma jeszcze danych. Trzeba go poprowadzić.

**Prompt do wygenerowania mockupu:**

```
Empty state for a dark B2B SaaS tender matching tool. Center-aligned 
layout. Large subtle icon (search/document glyph, white, 20% opacity). 
Title: "Jeszcze nie pobrałeś danych" (white, bold, 2.4rem). 
Description: "Skonfiguruj profil firmy i pobierz aktualne ogłoszenia, 
żeby zobaczyć dopasowane przetargi." (gray, 1.5rem).

Two actions stacked:
1. "Skonfiguruj profil" - primary button (pill, white bg, black text)
2. "Pobierz przykładowe dane" - ghost/glass button

Below: subtle tip in small text "Dane pochodzą z BZP i TED. 
Automatyczne odświeżanie codziennie o 6:00."

Dark background with subtle centered blue glow. Minimalist, 
welcoming but professional. Polish language. No mascots, no emoji.
```

---

## 7. Komponent: Karta przetargu na liście

**Prompt na detal komponentu:**

```
Single tender list item card for dark B2B SaaS. Glassmorphism 
background (rgba(255,255,255,0.02), border-radius: 1.2rem, 
border: 1px solid rgba(255,255,255,0.06)).

Layout horizontal:
[Match Score Badge (56px wide, colored circle or pill)] 
[Tender Info (flex)] [Arrow icon]

Match Score Badge: circle or rounded square with percentage number, 
font bold 2rem. Background color depends on score:
- >=80%: green (#22c55e with subtle glow)
- 50-79%: yellow (#eab308)
- <50%: red (#ef4444)

Tender Info:
- Title: white, 1.6rem, 600 weight, 1 line with ellipsis
- Row 2: CPV code tag (blue-tinted bg, small text) + 
  Location tag + Deadline text (muted)
- Row 3: Description excerpt (gray, 1.4rem, 1 line)
- Bottom: Budget badge (glass style, small)

Hover state: background becomes rgba(255,255,255,0.05), 
border becomes rgba(255,255,255,0.1), subtle translateY(-1px), 
box-shadow elevates. Arrow slides right 3px with 0.2s ease.

Near-black background. Polish text. Clean, scannable.
```

---

## 8. Komponent: Score matcha / wskaźnik dopasowania

**Prompt na detal wizualizacji:**

```
Circular progress indicator for match score in dark UI.
Two variants: large (120px, used in detail panel) and 
small (56px, used in list cards).

Large variant: 
Outer ring: SVG circle stroke, width 6px, color depends on score 
(green/yellow/red). Background track: rgba(255,255,255,0.08).
Center: score number (2.4rem, 800 weight, white) with "%" suffix 
(0.8rem, normal weight).
Below circle: "dopasowanie" label (0.85rem, muted, uppercase, 
tracking 0.05em).

Small variant (used on list cards):
Same concept but compact. Number is 1.6rem. No label below.

The ring animates on appear: stroke-dashoffset animation from 0 to 
final value over 0.8s with cubic-bezier(0.25, 1, 0.5, 1).

Dark background. Glow on the ring: drop-shadow matching the score color 
(green glow for green, etc.), subtle: 0 0 8px rgba(34,197,94,0.3).
```

---

## 9. Komponent: Nawigacja górna

**Prompt na detal:**

```
Top navigation bar for dark B2B SaaS. Fixed at top, z-index 100.
Full width, max-width: 1280px centered. Padding: 1.6rem 2rem.

Left: Logo "TenderMatch" text (white, 1.6rem, 700 weight, 
tracking -0.03em) with small icon (document with search lines, 
blue #3b82f6, 20px).

Center: empty / breathing room.

Right: Navigation links in row.
- "Przetargi" link (white if active, #a1a1aa if inactive, 
  1.4rem, 500 weight)
- "Profil firmy" link (same style)
- "Zaloguj" / user avatar (if logged in: small 32px circle 
  with initials, white bg, dark text)

Active link indicator: small 2px dot or line below in blue (#3b82f6).

Background: rgba(3,3,3,0.85) with backdrop-filter: blur(16px).
Bottom border: 1px solid rgba(255,255,255,0.06).

No Apple dots. No decorative elements. Clean utility nav.
```

---

## 10. Mikrointerakcje i animacje

**Prompt do wygenerowania specyfikacji motion designu:**

```
Animation specifications for dark B2B SaaS tender matching tool.

Easing curve (global): cubic-bezier(0.25, 1, 0.5, 1) — smooth, 
natural-feeling, Apple-like.

1. List item appear: Items fade up (opacity 0→1, translateY(12px)→0) 
   staggered with 60ms delay between each card. Duration: 0.4s.

2. Hover card: background transition 0.2s ease, 
   translateY(-1px) 0.2s ease, box-shadow 0.3s ease.

3. Score ring animation: On appear, ring draws clockwise from 0 to 
   final percentage. Duration: 0.8s. Stroke-dasharray animation.

4. Filter/sort change: Cards crossfade. Old cards: opacity 1→0, 
   scale(1)→0.97. New cards: opacity 0→1, translateY(8px)→0. 
   Duration: 0.3s.

5. AI assessment panel slide-in: Panel slides from right, 
   opacity 0→1, translateX(20px)→0. Duration: 0.35s.

6. Tag input animation: When keyword added, pill animates in 
   scale(0.8)→1, opacity 0→1. When removed, scale→0.8, opacity→0.

7. Page transitions (if SPA): Content fades, slight scale 
   (0.98→1). Nav bar stays static (exclude from transition).

8. Pull-to-refresh / refresh button: Rotate icon on click, 
   subtle pulse on complete.

All transitions must feel premium - not too fast (cheap), 
not too slow (frustrating). Target: 0.2s-0.4s for micro-interactions, 
0.4s-0.6s for view transitions.
```

---

## 11. Mobile / Responsive

**Prompt na wersję mobilną:**

```
Responsive mobile adaptation of dark B2B SaaS dashboard for 
tender matching. Polish language.

Breakpoint: below 768px.

Navigation: 
- Logo left, hamburger right (3 lines, animated to X when open)
- Menu overlay: full screen, rgba(3,3,3,0.98), 
  backdrop-filter: blur(15px), links centered vertically

Main list view:
- Cards stack full-width, no side panel
- Match score badge moves to top-right corner of card (absolute position)
- Budget and deadline badges wrap to next line
- Filter bar collapses to "Filtry" button that opens bottom sheet
- Bottom sheet: glassmorphism panel, slides up, contains all filters, 
  "Zastosuj" button at bottom

Detail view:
- Single column: tender description scrolls, AI assessment panel 
  is a collapsible section below (not side panel)
- Score circle becomes centered at top of AI section
- Back button fixed at top of view

General mobile adjustments:
- Padding reduces to 1.6rem
- Font sizes: title 2.2rem, card title 1.5rem, body 1.3rem
- Touch targets minimum 44px
- Cards: reduced border-radius to 0.8rem
- Bottom safe area padding for modern phones
```

---

## 12. Styl copy i tone of voice

**Prompt do wygenerowania copy guidelines:**

```
Tone of voice guidelines for Polish B2B SaaS tender matching tool.

Język: polski
Ton: profesjonalny, rzeczowy, ale nie korporacyjny. 
Mówimy jak doświadczony doradca — konkretnie, bez owijania w bawełnę.

Dozwolone:
- "Sprawdź dopasowanie" (zamiast "Wykonaj analizę dopasowania")
- "Czy warto startować?" (zamiast "Ocena potencjału ofertowego")
- "Pasuje idealnie" / "Słabe dopasowanie" (zamiast 
  "Współczynnik korelacji: 87%")
- "Dlaczego?" — sekcja uzasadnienia, krótko, zwięźle
- "Zboczyłeś z kursu" na 404 — jeden żart, reszta serio

Niedozwolone:
- Formy grzecznościowe "Pan/Pani" — mówimy po imieniu (per "ty")
- Emoji w UI
- Przeładowany żargon prawniczy
- Pasywne formy ("można by rozważyć") — zamiast "warto startować"
- Angielskie terminy gdzie jest polski odpowiednik 
  (nie "dashboard" tylko "panel główny", nie "deadline" tylko "termin składania")

Przykładowe komunikaty:
- Pusty stan: "Skonfiguruj profil, żeby znaleźć pierwsze przetargi"
- Brak wyników: "Brak pasujących przetargów. Sprawdź filtry lub rozszerz kryteria."
- Ocena AI dobra: "Przetarg mocno dopasowany. Twoja branża, Twój region, budżet w normie."
- Ocena AI słaba: "Niskie dopasowanie — inna branża i region poza zasięgiem."

Odbiorca: właściciel małej/średniej firmy budowlanej, instalacyjnej, OZE. 
Nie jest typem korpoluda. Ceni konkret, nie ma czasu na wodolejstwo.
```

---

## Jak używać tych promptów

### Dla AI image generatora (Midjourney / DALL-E / Leonardo)
Użyj promptów z sekcji 2-9. Wklej je bezpośrednio. Dla lepszych rezultatów:
- Dodaj `--v 6.1` (Midjourney) dla realistycznych UI
- Użyj `--style raw` (Midjourney) żeby uniknąć upiększeń
- Dopisz `--ar 16:9` dla desktopu, `--ar 9:16` dla mobile

### Dla projektanta UI (Figma)
Użyj sekcji 1 jako specyfikacji design systemu, a promptów z 3-11 jako briefu do poszczególnych ekranów. Są wystarczająco szczegółowe, żeby projektant nie musiał zgadywać, ale zostawiają przestrzeń na jego warsztat.

### Dla dewelopera frontendu
Sekcja 1 (Design System) to gotowe design tokeny do przeniesienia do CSS/Tailwind. Reszta to specyfikacja wizualna każdego widoku.
