# Festival hrane 2025 - Spletna stran

## 📋 Struktura projekta

```
bootstrap-vaje/
├── index.html          (Domov - vstopna stran)
├── about.html          (O festivalu - zgodba in vrednosti)
├── contact.html        (Kontakt & Rezervacija - obrazec in mapa)
├── reservations.html   (Moje rezervacije - upravljanje rezervacij)
├── style.css           (Prilagojeni CSS)
├── script.js           (Funkcionalnost in validacija)
└── README.md           (Ta datoteka)
```

## ✨ Glavne funkcionalnosti

### 🏠 INDEX.HTML (Domov)
- **Sticky Navbar** s 4 povezavami (Domov, O festivalu, Moje rezervacije, Kontakt)
- **Hero Carousel** z 3 slikami hrane in overlay tekstom
- **"Kaj ponujamo?" sekcija** s 3 kartami (Burgerji, Azijska kuhinja, Sladice)
- **"Glavni kuharji" sekcija** s 3 kartami kuharjev
- **"O festivalu" preview** z povezavo na podrobno stran
- **Responsive footer** s socialnimi ikoni

### 📖 ABOUT.HTML (O festivalu)
- Podrobna zgodba festivala
- Misija in vizija
- Vrednosti (Kakovost, Skupnost, Trajnost)
- Časovna premica zgodovine festivala
- Call-to-Action sekcija

### 📞 CONTACT.HTML (Kontakt & Rezervacija)
- **Rezervacijski obrazec** s polji:
  - Ime in priimek
  - Email
  - Telefon (opciono)
  - Število oseb (select)
  - Datum in ura
  - Posebne zahteve (opciono)
- **Kontaktni podatki** (naslov, telefon, email, odpiralni čas)
- **Socialni mediji** (Facebook, Instagram, Twitter, YouTube)
- **Google Map Iframe**
- **FAQ sekcija** s 5 pogostimi vprašanji in odgovori

### 🎫 RESERVATIONS.HTML (Moje rezervacije)
- **Iskanje rezervacij** po email-u ali imenu
- **Prikaz rezervacij** shranjenih v lokalnem pomnilniku
- **Upravljanje rezervacij** (uredi, preklici)
- **Prazno stanje** (empty state) ko ni rezervacij

## 🎨 Dizajn in stil

### Bootstrap 5
- Responsive grid sistem (12 stolpcev)
- Komponente: Navbar, Carousel, Cards, Forms, Modals, Accordion
- Bootstrap Icons za ikone

### Custom CSS (style.css)
- Animacije in hoveri efekti
- Carousel overlay styling
- Timeline design za zgodovino
- Responsive breakpoints
- Prilagojene barve (glavna barva: #dc3545)

## 🔧 JavaScript (script.js)

### Validacija obrazca
- Real-time validacija samo na spremembo (ne na vsakem stistisku)
- Preverka imen, emaila, števila oseb in datuma
- Prikazovanje napak samo kadar je potrebno
- Shranjevanje rezervacij v localStorage

### LocalStorage funkcionalnosti
- Shranjevanje rezervacij v brskalniku
- Iskanje rezervacij po email-u in imenu
- Brisanje rezervacij
- Prikaz shranjenega stanja

### Dodatne funkcionalnosti
- Avtomatski carousel drsnik
- Glatko drsenje na якорske povezave
- Zapiranje navbarja na mobilnih napravah
- Ažuriranje aktivne kategorije v navbar-ju

## 📱 Responsivnost

Stran je v celoti responsive in deluje odličnih na:
- **Mobilnih** (< 576px): 1 stolpec
- **Tabletih** (576px - 768px): 2 stolpca
- **Desktopih** (> 768px): 3 ali 4 stolpci

## 🌐 Brskalniki

Stran je testirana in deluje na:
- Chrome
- Firefox
- Safari
- Edge
- Mobilni brskalniki

## 📝 Navodila za uporabo

### Narediti rezervacijo:
1. Kliknite na gumb "Rezerviraj" ali pa na "Kontakt" v navbar-ju
2. Izpolnite obrazec
3. Kliknite "Pošlji rezervacijo"
4. Rezervacija bo shranjena v vašem brskalniku

### Ogledati rezervacije:
1. Kliknite na "Moje rezervacije" v navbar-ju
2. Iščete po email-u ali imenu
3. Vidite vaše shranjene rezervacije
4. Lahko jih uredite ali prekličete

## 🚀 Kako zagnati

1. Odprite `index.html` v brskalniku
2. Kliknite na povezave v navbar-ju za navigacijo
3. Izpolnite obrazce in testiran funkcionalnost

## 📄 Licence

Bootstrap - MIT License
Bootstrap Icons - MIT License
Unsplash slike - Besplatno za uporabo

---

**Verzija:** 1.0  
**Datum:** Februar 2026  
**Status:** Končano
