# 🧪 Testiranje - Festival hrane 2025

## ✅ Kje testirati

### 1. **index.html** - Domov
- [ ] Sticky navbar ostane na vrhu pri scrollanju
- [ ] Carousel avtomatski drsi čez slike
- [ ] Klikni na puščice za manuelno navigacijo
- [ ] Gumbi v carouselu vodijo na contact.html
- [ ] "Kaj ponujamo?" se prilagodi glede na velikost zaslona
- [ ] Fotografije se nalagajo pravilno
- [ ] Footer je prilepljen na dno
- [ ] Socialne ikone so dostopne

### 2. **about.html** - O festivalu
- [ ] Slika in tekst sta pravilno poravnana
- [ ] Na mobilujih se slika in tekst uredita drug pod drugega
- [ ] Tisočica (timeline) je pravilno prikazana
- [ ] Ikone (Target, People, Leaf) se prikazujejo
- [ ] "Preberi več" gumb na index.html vodi sem

### 3. **contact.html** - Rezervacija
- [ ] Obrazec preverja obavezna polja
- [ ] Email validacija deluje (npr. test@email.com je OK, test je napaka)
- [ ] Število oseb je izbrano iz drop-dovna
- [ ] Datum in ura sta izbrana preko date/time picker-ja
- [ ] Posebne zahteve (opciono) ne vzročijo napak
- [ ] Po oddaji obrazca se pojavi "uspešna rezervacija" sporočilo
- [ ] Obrazec se čisti po oddaji
- [ ] Google Map se prikaže
- [ ] FAQ lestvica (accordion) deluje
- [ ] Socialne ikone so dostopne

### 4. **reservations.html** - Moje rezervacije
- [ ] Iskanje po email-u deluje
- [ ] Iskanje po imenu deluje
- [ ] Prikaži vse rezervacije iz localStorage
- [ ] Gumb "Preklici" briše rezervacijo
- [ ] Gumb "Uredi" prikaže modal (ali sporočilo)
- [ ] Prazna stanja (ko ni rezervacij) je pravilno prikazana

## 🧬 Testi podatkov - Kako testirati obrazec

### Test 1: Uspešna rezervacija
```
Ime: Jure Horvat
Email: jure@email.si
Telefon: +386 1 400 5000
Osebe: 4
Datum: 2025-06-15
Ura: 19:00
Posebne zahteve: Brez orieškov
```
**Pričakovano:** Oblika je poslana, pojavilo se je sporočilo, obrazec očiščen.

### Test 2: Manjkajoče ime
```
Ime: [PRAZNO]
Email: test@email.si
Osebe: 2
```
**Pričakovano:** Polje "Ime" je označeno kot napaka (rdeče)

### Test 3: Neveljavna email
```
Email: test (brez @)
```
**Pričakovano:** Polje "Email" je označeno kot napaka

### Test 4: Prazna izbira oseb
```
Osebe: -- Izberite --
```
**Pričakovano:** Polje je označeno kot napaka

## 📱 Responsivnost - Testiranje različnih velikosti zaslona

### Mobilni (< 576px)
- [ ] Navbar se sruši v hamburger meni
- [ ] Slike se prilagodijo
- [ ] Grid je 1 stolpec
- [ ] Tekst je berljiv
- [ ] Gumbi so dostopni

### Tablet (576px - 992px)
- [ ] Grid je 2 stolpca
- [ ] Navbar je viden
- [ ] Slika in tekst sta poravnana

### Desktop (> 992px)
- [ ] Grid je 3-4 stolpci
- [ ] Vse je optimalno prikazano
- [ ] Carousel je velik

## 🔗 Navigacija - Testiranje povezav

- [ ] Klik na logo → index.html
- [ ] Klik na "Domov" → index.html
- [ ] Klik na "O festivalu" → about.html
- [ ] Klik na "Moje rezervacije" → reservations.html
- [ ] Klik na "Kontakt" → contact.html
- [ ] Klik na "Preberi več o nas" → about.html
- [ ] Klik na "Rezerviraj mizo" (carousel) → contact.html
- [ ] Vse povezave odprejo pravilno stran

## 📊 LocalStorage - Testiranje shranjevanja

1. Odpri contact.html
2. Izpolni in pošlji rezervacijo
3. Odpri brskalniku **Developer Tools** (F12)
4. Pojdi na **Application** → **Local Storage**
5. Najdi `festivalReservations`
6. Vidiš JSON array z rezervacijami

```json
[
  {
    "id": 1234567890,
    "fullName": "Jure Horvat",
    "email": "jure@email.si",
    "guests": "4",
    "reservationDate": "2025-06-15T19:00",
    "message": "Brez orieškov",
    "status": "Potrjena",
    "createdAt": "10.2.2026, 14:30:45"
  }
]
```

## 🎨 Vizualni testi

- [ ] Barve so skladne (rdeča #dc3545 za akcije)
- [ ] Sence na kartah so vidne
- [ ] Animacije so gladke
- [ ] Besedilo je berljivo
- [ ] Ikone so jasne

## 🚀 Performanse

- [ ] Stran se hitro naloži
- [ ] Slike se naloži iz Unsplash
- [ ] Ni nepotrebnih console.log napak
- [ ] Ni JavaScript napak v konzoli

---

**Pripomočeni za testiranje:**
- Chrome DevTools
- Firefox Developer Tools
- Safari Responsive Design Mode
- LocalStorage Inspector

**Datum testiranja:** Februar 2026
