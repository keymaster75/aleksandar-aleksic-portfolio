# Aleksandar Aleksić — portfolio

Statičan portfolio na srpskom (latinica), pripremljen za GitHub Pages.

## Lokalni pregled u PhpStormu

Posle `git pull`, otvori `index.html` pomoću **Open in Browser**.
Nisu potrebni PHP, Node, npm, baza ili build. Stranica radi i direktnim otvaranjem HTML fajla.
Alternativa: `python -m http.server 8000`, pa otvori http://localhost:8000.

## GitHub Pages

U repozitorijumu otvori **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**
- **Save**

Ciljna adresa: https://keymaster75.github.io/aleksandar-aleksic-portfolio/

## Izmene

- `index.html`: tekstovi, projekti i linkovi
- `assets/style.css`: izgled i mobilni raspored
- `assets/script.js`: filter projekata i godina u podnožju
- `assets/favicon.svg`: ikonica

ARPy ima link ka javnoj dokumentaciji. Privatni repozitorijumi nisu povezani javnim dugmadima.
Prikaz ARPy procesa je šema, nije snimak aplikacije. Za narednu iteraciju dodati odobrene screenshotove bez podataka klijenata i precizniji opis WorkPy.
Sve putanje lokalnih resursa su relativne, za rad pod putanjom projekta.
Filteri se prikazuju samo uz JavaScript; bez njega svi projekti ostaju dostupni.
