# 🖼️ Slike - Festival hrane 2025

## Viri slik (Unsplash CDN)

Vse slike so dostopne preko **Unsplash** API-ja, kar pomeni, da so:
- ✓ Brezplačne za uporabo
- ✓ Visoke kakovosti
- ✓ Optimizirane za web
- ✓ Vedno dostopne

## Uporabljene slike v projektu

### 1. Hero Carousel (index.html)
- **Slide 1:** Burgerji
  ```
  https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=600&fit=crop
  ```
  Avtentični burgerji z svežo hrano

- **Slide 2:** Azijska kuhinja
  ```
  https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop
  ```
  Tradicionalna azijska jedila

- **Slide 3:** Sladice in napitki
  ```
  https://images.unsplash.com/photo-1551632786-de41ec16a83a?w=1200&h=600&fit=crop
  ```
  Okusne sladice in pijače

### 2. "Kaj ponujamo?" Grid (index.html)

- **Burgerji**
  ```
  https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop
  ```

- **Azijska kuhinja**
  ```
  https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop
  ```

- **Sladice**
  ```
  https://images.unsplash.com/photo-1551632786-de41ec16a83a?w=500&h=350&fit=crop
  ```

### 3. Glavni kuharji (index.html)

- **Kuhar 1 - Marko Novak** (Mojster za rebrca)
  ```
  https://images.unsplash.com/photo-1577003833154-a92bdbd33d5f?w=500&h=400&fit=crop
  ```
  Fotografija moškegakuharja v kuhinji

- **Kuhar 2 - Ana Kovač** (Specialist za azijsko kuhinjo)
  ```
  https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop
  ```
  Fotografija ženske kuhinje pri pripravi

- **Kuhar 3 - Jure Horvat** (Maestro burgerjev)
  ```
  https://images.unsplash.com/photo-1556910103-2b02290ce9a0?w=500&h=400&fit=crop
  ```
  Fotografija kuharjeav peklarniji

### 4. O festivalu (about.html)

- **Festival prizor**
  ```
  https://images.unsplash.com/photo-1555939594-58d7cb561404?w=600&h=450&fit=crop
  ```
  Fotografija ljudmi ki uživajo hrano zunaj

## Kako so slike optimizirane

```
Format: JPEG (optimiziran)
Vrsta URL-ja: Unsplash CDN z parametri
Parametri:
  - w = širina (width)
  - h = višina (height)
  - fit = crop (izreže za točne dimenzije)
```

### Primer URL-ja z parametri
```
https://images.unsplash.com/[image-id]?w=500&h=350&fit=crop
                              └─width─┘ └─height┘ └─crop─┘
```

## Velikosti slik

| Mesto | Širina | Višina | Uporaba |
|-------|--------|--------|---------|
| Carousel | 1200px | 600px | Hero sekcija - polna širina |
| Grid slike | 500px | 350px | "Kaj ponujamo?" sekcija |
| Kuharji | 500px | 400px | Kartice kuharjev |
| O festivalu | 600px | 450px | 50/50 grid |

## Kako naložiti lokalne slike (ALTERNATIVA)

Če Unsplash CDN ni dostopen, lahko slike presnemeš lokalno:

1. Prenesete slike iz Unsplash v mapo `images/`
2. Spremenite URL v kodu:
   ```html
   <!-- Namesto: -->
   <img src="https://images.unsplash.com/photo-...">
   
   <!-- Uporabite: -->
   <img src="images/burger.jpg">
   ```

3. Struktura mape:
   ```
   bootstrap-vaje/
   ├── images/
   │   ├── burger.jpg
   │   ├── asian.jpg
   │   ├── dessert.jpg
   │   ├── chef1.jpg
   │   ├── chef2.jpg
   │   ├── chef3.jpg
   │   └── festival.jpg
   ```

## Licenciranje slik

Vse slike so dostopne pod **Unsplash License**:
- Uporaba za osebne in komercialne namene
- Atribucija ni obavezna, ampak je priporočena
- Slike je mogoče spreminjati

## Problemi s slikami?

Če slike ne nalagajo:

1. **Preverite internetno povezavo**
   - Unsplash CDN zahteva povezavo

2. **Očistite cache**
   - Ctrl+Shift+R (Hard refresh)

3. **Preverite URL**
   - Odprite URL v brskalniku
   - Preveri, ali je slika dostopna

4. **Zamenjajte s lokalnimi slikami**
   - Kot opisano zgoraj

## Pravni vidiki

✓ Vse slike so brezplačne  
✓ Primerne za komercialno uporabo  
✓ Ni potrebna licenca ali dovolitev  
✓ Nobenih stroškov

---

**Zbirka:** Unsplash  
**Tip:** CDN dostop  
**Status:** Aktivne in dostopne  
**Posodobljeno:** Februar 2026
