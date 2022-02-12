# Shrnutí sedmé kapitoly

Otestujte si, co jste se naučili o zarovnávání boxů v CSS.

1. **Co definuje CSS modul Box Alignment?**  
a) zarovnání boxů v různých modelech rozvržení CSS  
b) způsob zarovnání textu v CSS  
c) zarovnání prvku v CSS takzvaně „na roh boxerského ringu“
2. **Jak rozlišit vlastnosti zarovnání na hlavní a na příčnou osu?**  
a) je to zhola nemožné, raději si hodit kostkou  
b) vlastnosti `justify-` zarovnávají na hlavní, `align-` na příčnou osu  
c) vlastnosti `align-` zarovnávají na hlavní, `justify-` na příčnou osu  
3. **Jaký je rozdíl mezi vlastnostmi obsahujícími `-items`, `-self`, `-content`?**  
a) `-items` = položky, `-self` = položka,  `-content` = volný prostor  
b) `-items` = položky, `-self` = kontejner, `-content` = obsah v položce  
c) opět jde o chyták; není v tom řád, jdu se raději opít  
4. **Jak zarovnat položky doprostřed buněk layoutu na vodorovné ose?**  
a) `align-items: center`  
b) `justify-items: center`  
c) `justify-layout: center`  
5. **Jak zarovnat položku ke spodní a pravé hraně buňky layoutu?**  
a) `place-self: right bottom`  
b) `place-item: end end`  
c) `place-self: end end`
6. **Proč je vhodné pro mezery v layoutu používat `gap`?**  
a) chyták; v textech se píše, že to naopak vůbec vhodné není  
b) nezapočítává se do rozměrů položek a je možné ji nastavit pro celý layout  
c) je to kratší slovo než `margin`
7. **Co udělá `gap:normal` v gridu a flexboxu?**  
a) mezeru nulové šířky a výšky  
b) mezeru o šířce `1em`  
c) mezeru o šířce `10px`
1. **Jak přesunout položku na první místo vizuálního pořadí?**  
a) `order: 0`  
b) `order: 1`  
c) `order: -1`

---

Řešení:

1. **Co definuje CSS modul Box Alignment?**  
a) zarovnání boxů v různých modelech rozvržení CSS  
1. **Jak rozlišit vlastnosti zarovnání na hlavní a na příčnou osu?**  
b) vlastnosti `justify-` zarovnávají na hlavní, `align-` na příčnou osu  
1. **Jaký je rozdíl mezi vlastnostmi obsahujícími `-items`, `-self`, `-content`?**  
a) `-items` = položky, `-self` = položka,  `-content` = volný prostor  
1. **Jak zarovnat položky doprostřed buněk layoutu na vodorovné ose?**  
b) `justify-items: center`  
1. **Jak zarovnat položku ke spodní a pravé hraně buňky layoutu?**  
c) `place-self: end end`
1. **Proč je vhodné pro mezery v layoutu používat `gap`?**  
b) nezapočítává se do rozměrů položek a je možné ji nastavit pro celý layout  
1. **Co udělá `gap:normal` v gridu a flexboxu?**  
a) mezeru nulové šířky a výšky  
1. **Jak přesunout položku na první místo vizuálního pořadí?**  
c) `order: -1`
