# Příklad: návrh fotogalerie krok za krokem

Nevivil bych se, když byste v této části knihy měli hlavu jako meloun. Jen díky tomu ale máme dost vědomostí, abychom navrhli první komponentu uživatelského rozhraní. Nevěste meloun a pojďme si nejprve shrnout jak budeme postupovat.

- Do *skic* si nakreslíme všechny možnosti zobrazení komponenty, které nás napadnou.
- Pokud si s ním nebudeme zcela jistí, uděláme si *prototyp* řešení.
- Pro vybranou variantu promyslíme *technické řešení* a nakódujeme si ji.

TODO Obrázek: Takhle vypadá fotogalerie před naším designérských zásahem. Vypsaní fotek pod sebou nebude to pravé ořechové, že?

## Skicování

Teď prostě, jak jsem popisoval v kapitole [o skicování](skicovani.md), nabrousíme tužku, přimhouříme oči (to abychom vypadali jako skuteční profíci) a hlavně – vypneme veškeré tendence k hodnocení toho co vytváříme. Prostě si nakreslíme všechny varianty zobrazení fotogalerie co nás napadnou.

Já ze sebe dostal šest možností, co vy?

TODO obrázek: https://photos.google.com/photo/AF1QipP0Blhdp8SOQqt5KbtP5wwLjnUcAGMneH6n88Ux

Než je začneme hodnotit, měli bychom si rozmyslet co je vlastně ta naše fotogalerie zač.  

### Kde se fotogalerie nachází v hierarchii stránky?

V případě prodeje bot přes internet platí, že obrázek nahradí tisíc slov. Návštěvnice ForestKid.cz by měla mít možnost si na produkt vytvořit názor hned a bez dalšího klikání. Takže fotky chceme zobrazovat dostatečně velké. 

Zároveň jim ale nechceme dát tak zásadní váhu, aby upozadily všechny ostatní informace z horní poloviny stránky. Hlavně pak název produktu a cenu. Řekněme proto, že významem jsou fotografie někde na úrovni názvu produktu a mírně nad cenou. 

Musíme si ale také vyjasnit, jestli jsme od našich dodavatelů schopní získat dostatečně kvalitní obrázky produktů pro komponentu tak zásadní váhy. V naší hypotetické situaci ano, ale pozor, neplatí to zdaleka pro každý eshop nebo web obecně.

A ještě na jednu věc nesmíme zapomenout, na různorodost obsahu. V našem případě vycházím z toho, že všechny fotografie budeme mít produkčně připravené ořezané na bílém pozadí v poměru 1:1 a že jich u jednoho produktu bude mezi třemi a patnácti.

### Zvážení jednotlivých skic

1. *Výpis pod sebe* je velmi jednoduchý z pohledu implementace, ale i ovládání uživateli. V kontextu další prvků stránky je ovšem obvykle nepoužitelný. Na malých i velkých displejích odsunuje další informace jako je cena nebo dostupnost velikostí. Vzpomeňte si, jak jsem [v kapitole o principech návrhu rohraní](principy-ui.md) bojoval proti otravně dlouhým stránkám na mobilech. Ne, tahle varianta pro náš skvělý eshop nebude.
2. *Středně velký náhled s navigací pomocí karuselu* vypadá dobře. Šetří totiž prostor na výšku, ale zároveň zobrazuje jednu fotku dostatečně velkou. Na velkých displejích je možné tuto i další varianty doplnit o rozkliknutí do ještě větší verze pomocí lightboxu.
3. *Středně velký náhled v karuselu* je ve svislém směru ještě úspornější. Pokud bychom karusel navrhli správně, může jít o moc prima řešení pro malé displeje. Uživatelé velkých monitorů takovou míru úspornosti neocení, tam bychom dali přednost řešení jinému. Jednou z našich zásad ale je [konzistence rozhraní](4-principy-ui.md), vzpomeňte si. 
4. *Malé náhledy* nesplňují náš požadavek zobrazení co největší fotografie bez potřeby kliklání.
5. *Zobrazení lupy* pro prohlížení detailu výřezů považuji a uživatelsky i na implementaci komplikované řešení, které je navíc možné pohodlně ovládat jen na zařízeních s připojenou myší.
6. *Lightbox*, zobrazení fotky přes celou obrazovku sám o sobě použít nemůžeme. Necháme si jej jako možný stav některé z našich variant.

Pro ForestKid.cz jsem vybral druhou variantu se středně velkým náhledem a navigací pomocí karuselu. Protože si s ní ale nejsem úplně jistý na větších mobilech (phabletech), udělám si rychlý vizuální test. Prototyp. Vzpomeňte si teď zase na kapitolu [o prototypování v HTML](html-prototypovani.md). 

## Prototyp vybrané varianty

Rychlé demo si vytvoříme na [Codepen.io](http://codepen.io/) a použijeme přitom skvělý generátor zástupných obrázků [Satyr.io](http://satyr.io/).

TODO:

- codepen v css
- screenshoty ze všech zařízení
- problémy: vertikálně neúsporné
- na mobilech tedy jinak?

## Technické řešení

TODO:

- jednoduchá varianta podporující snap points
- popsat, codepen














