# 🎉 Festival hrane 2025 - Spletna stran

Moderna in polnofunkcionalna spletna stran za namišljeni **Festival ulične hrane 2025**, narejena s **Bootstrap 5**, **HTML5**, **CSS3** in **JavaScript**.

## 📋 Vsebina

1. [Kazalo](#kazalo)
2. [Značilnosti](#značilnosti)
3. [Struktura projekta](#struktura-projekta)
4. [Kako zagnati](#kako-zagnati)
5. [Tehnologije](#tehnologije)
6. [Datoteke](#datoteke)
7. [Testiranje](#testiranje)

## ✨ Značilnosti

### 🏠 Domov (index.html)
- ✅ Sticky navbar z 4 navigacijskimi povezavami
- ✅ Hero carousel s 3 avtomatski drseči sliki
- ✅ Overlay tekst in call-to-action gumbi
- ✅ "Kaj ponujamo?" sekcija s 3 kartami
- ✅ "Glavni kuharji" sekcija s 3 kartami
- ✅ "O festivalu" preview s povezavo
- ✅ Responsive footer s socialnimi ikoni

### 📖 O festivalu (about.html)
- ✅ Podrobna история festivala
- ✅ Misija in vizija
- ✅ 3 glavne vrednosti s ikonami
- ✅ Časovna premica (timeline) s 4 mejniki
- ✅ Call-to-action sekcija

### 📞 Kontakt & Rezervacija (contact.html)
- ✅ Rezervacijski obrazec s **validacijo**:
  - Ime in priimek (obavezno)
  - Email (obavezno + format preverjanje)
  - Telefon (opciono)
  - Število oseb (select meni)
  - Datum in ura (obavezno)
  - Posebne zahteve (opciono)
- ✅ Kontaktni podatki z ikonami
- ✅ 4 socialni mediji (FB, IG, Twitter, YouTube)
- ✅ Vdelan Google Map
- ✅ FAQ sekcija s 5 vprašanji

### 🎫 Moje rezervacije (reservations.html)
- ✅ Iskanje po email-u ali imenu
- ✅ Prikaz vseh shranjenih rezervacij
- ✅ Možnost brisanja rezervacije
- ✅ Mogućnost uređivanja (pripravljeno)
- ✅ Prazna stanja (empty state)

## 📁 Struktura projekta

```
bootstrap-vaje/
│
├── 📄 HTML Datoteke
│   ├── index.html                 # Domov - vstopna stran
│   ├── about.html                 # O festivalu
│   ├── contact.html               # Kontakt in rezervacija
│   └── reservations.html          # Moje rezervacije
│
├── 🎨 Stil
│   └── style.css                  # Prilagojeni CSS
│
├── ⚙️ Logika
│   └── script.js                  # JavaScript funkcionalnost
│
├── 📚 Dokumentacija
│   ├── README.md                  # Osnovna info
│   ├── DOKUMENTACIJA.md           # Detaljne informacije
│   ├── TESTIRANJE.md              # Testni scenariji
│   ├── SLIKE.md                   # Viri slik
│   └── ta datoteka
│
└── .gitignore                     # Git ignore datoteka
```

## 🚀 Kako zagnati

### Opcija 1: Direktno v brskalniku
1. Odpreti mapo `bootstrap-vaje` v datotečnem sistemu
2. Dvakrat klikniti na `index.html`
3. Stran se odpre v privzetemu brskalniku

### Opcija 2: VS Code
1. Odpriti mapo v VS Code-u
2. Desni klik na `index.html` → "Open with Live Server"
3. Stran se odpre na `localhost:5500`

### Opcija 3: Python (lokalni strežnik)
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```
Nato odpreti `http://localhost:8000`

## 💻 Tehnologije

### Frontend
- **HTML5** - Semantična struktura
- **CSS3** - Oblikovanje in animacije
- **JavaScript (ES6)** - Interaktivnost in logika

### Framework & Knjižnice
- **Bootstrap 5** - Responsive grid in komponente
- **Bootstrap Icons** - SVG ikone

### Zunanji viri
- **Google Fonts** - Pisave (prek Bootstrapa)
- **Unsplash API** - Brezplačne slike
- **Google Maps** - Vdelan zemljevid

### Brskalniki
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobilni brskalniki

## 📄 Datoteke

### HTML
| Datoteka | Назнка | Regije |
|----------|--------|--------|
| index.html | Domov | Navbar, Carousel, Grid, Footer |
| about.html | O festivalu | Zgodba, Misija, Vrednosti, Timeline |
| contact.html | Kontakt | Obrazec, Info, Mapa, FAQ |
| reservations.html | Rezervacije | Iskanje, Prikaz, Upravljanje |

### CSS
| Sekcija | Opis |
|---------|------|
| Splošne barve | CSS spremenljivke (--primary-color) |
| Navbar | Logotip, animacije, responsive |
| Carousel | Sliki, overlay, animacije |
| Kartice | Hover efekti, sence |
| Obrazec | Validacija oblikovanje, feedback |
| Timeline | Vrstica, točke, besedilo |
| Responsive | Breakpointsi za mobilne/tablet/desktop |

### JavaScript
| Funkcija | Opis |
|----------|------|
| Validacija | Email, polja, format |
| LocalStorage | Shranjevanje rezervacij |
| Iskanje | Filter po email-u/imenu |
| Carousel | Avtomatski drsnik |
| Navbar | Aktivna povezava |
| Smooth scroll | Drsenje do якорjev |

## ✅ Zahteve projekta

- ✅ **Navbar** - Pritrjena, z logotipom, 3+ povezave, active stanje
- ✅ **Footer** - Copyright, socialni mediji
- ✅ **Hero Carousel** - 3+ slike, overlay tekst, avtomatski drsnik
- ✅ **Grid layout** - 3 stolpci (desktop), 2 (tablet), 1 (mobilni)
- ✅ **Kartice** - Hrana, kuharji, informacije
- ✅ **50/50 grid** - O festivalu z sliko
- ✅ **Rezervacijski obrazec** - Validacija, vsa polja
- ✅ **Kontaktni podatki** - Naslov, telefon, email, ikone
- ✅ **Google Map** - Vdelan iframe
- ✅ **Responsive design** - Deluje na vseh napravah
- ✅ **HTML5** - Semantična struktura
- ✅ **Bootstrap 5** - Komponente in grid
- ✅ **JavaScript** - Validacija, interaktivnost
- ✅ **Custom CSS** - Za posebne efekte
- ✅ **Dodatne strani** - About, Reservations

## 🧪 Testiranje

Za kompletne teste, glejte [TESTIRANJE.md](TESTIRANJE.md)

### Hitri testi
```
1. index.html → Slika se prikažejo? ✓
2. Carousel se avtomatski drsi? ✓
3. Navbar je sticky? ✓
4. contact.html → Obrazec validira? ✓
5. Email preverjanja? ✓
6. Rezervacija se shranja? ✓
7. Responsive na mobilnem? ✓
```

## 🖼️ Slike

Vse slike so dostopne preko **Unsplash CDN**:
- Avtomatski optimizirane
- Brezplačne za uporabo
- Vedno dostopne

Za več informacij, glejte [SLIKE.md](SLIKE.md)

## 📖 Dokumentacija

- **[DOKUMENTACIJA.md](DOKUMENTACIJA.md)** - Detaljne informacije o funkcionalnosti
- **[TESTIRANJE.md](TESTIRANJE.md)** - Scenariji in navodila za testiranje
- **[SLIKE.md](SLIKE.md)** - Viri in informacije o slikah

## 🔐 Varnost

- ✅ Validacija obrazca na strani (client-side)
- ✅ Email format preverka (regex)
- ✅ LocalStorage za počasno shranjevanje
- ✅ Brez občutljivih podatkov

## 📊 Performanse

- ✅ Bootstrap CSS iz CDN
- ✅ Optimizirane slike iz Unsplash
- ✅ Minimalen custom CSS
- ✅ Učinkovit JavaScript
- ✅ Hitro nalaganje

## 🐛 Znani problemi

- Nobenih znanih problemov
- LocalStorage je specifična za brskalnnik/domeno
- Google Map zahteva internetno povezavo

## 💡 Nasveti za razvojce

### Kako spremeniti barvo
```css
/* style.css */
:root {
    --primary-color: #dc3545;  /* Spremenite to */
}
```

### Kako dodati več slik
```html
<!-- index.html carousel -->
<div class="carousel-item carousel-image-4">
    <div class="carousel-overlay">
        <h1>Nova slika</h1>
    </div>
</div>
```

### Kako lokalizirati za drugi jezik
- Spremenite tekst direktno v HTML datotekah
- Nobenega i18n sistema

## 📞 Kontakt

Za več informacij, glejte [DOKUMENTACIJA.md](DOKUMENTACIJA.md)

## 📄 Licenca

- **Bootstrap** - MIT
- **Bootstrap Icons** - MIT
- **Unsplash slike** - Brezplačne za uporabo

## ✨ Zaključek

Spletna stran **Festival hrane 2025** je polnofunkcionalna, moderna in responsive. Prihodnji koraki bi bili:
- Backend integracija za pravo bazo podatkov
- Email potrdila
- Plačilni sistem
- Administratorski panel
- Multi-language podpora

---

**Verzija:** 1.0  
**Avtor:** Projekt za Nalogo  
**Datum:** Februar 2026  
**Status:** ✅ Končano in testiran  

🎉 **Hvala, da ste prebrali!** 🎉
