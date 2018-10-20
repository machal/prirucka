# Ikonfonty: Vykašlete se už na ně. Máme přece SVG!

Ikonfonty jsou jako vši. Člověk by čekal, že si s nimi lidstvo – v době, kdy do vesmíru posílá auta – už dávno nějak poradilo. Že prostě nejsou. Jenže ono to chvilku vypadá dobře, ale za chvíli na vás zase někde vyskočí.

Tahle technika pro vkládání ikon do webů do pomocí fontů měla svou zlatou éru v době, kdy rozumné alternativy ještě nepodporovaly všechny prohlížeče. To už ale neplatí – alternativa s plnou podporou se jmenuje [SVG](svg.md).

Ikonfonty vynikaly snadností nasazení a následné manipulace z pohledu vývojáře. Jenže, když je něco snadné, je to trochu *podezřelé*, nemyslíte?

V tomto textu se podíváme na nevýhody ikonfontů a doporučím vám postupy, jak je přestat používat.

## Důvod první: Vykreslování stránky během načítání {#nacitani}

Chcete nevýhody ikonfontů v jednom obrázku. Tady jsou:

*TODO IMG Smarty http://www.webpagetest.org/video/compare.php?tests=180525_CQ_c45d32f827a480523ede89ff366159d5-r:1-c:0*

*Obrázek: Průběh vykreslování ikon na Smarty.cz. Místa pro ikonfonty jsou zvýrazněné zelenou. V nové verzi to už bude jinak*

No jasně – ikonfonty zde spojují nevýhody tří věcí:

- Velkého balíčku dat s nízkou prioritou, který zobrazuje důležitý obsah. Zde se na něj musí počkat.
- Webfontů, které mají pro vykreslování svá specifika – nízkou prioritu, schování textu prohlížečemi. Projevuje se neviditelným obsahem. Dá se vyřešit, ale chce to práci.
- Oklamání prohlížeče, kdy mu sice servírujete font, ale jednotlivé znaky jsou mimo základní sadu. Zde se projevuje čtverečky.

Problém je prostě v tom, že ikonfonty nenabízí skoro žádnou flexibilitu při optimalizaci.

### Priority načítání: SVG versus ikonfonty {#priority}

Při optimalizaci časové osy průběhu načítání výše bych zvažoval několik možností optimalizace. Abych mohl být takto kreativní, potřebuji mít flexibilní nástroj. 

Srovnejme si možnosti posílání SVG a ikonfontů do prohlížeče:

| Možnost                  | Priorita |  Ikonfont | SVG |
|:------------------------:|:--------:|:---------:|:---:|
| `<svg>` v HTML           |    1     |     -     |  +  |
| `<img>`                  |    2     |     -     |  +  |
| CSS `background-image`   |    3     |     -     |  +  |
| CSS sprite               |    3     |     -     |  +  |
| CSS font                 |    3     |     +     |  -  |

*Obrázek: Srovnání možností servírování ikonfontů a SVG. Bylo jasné, kdo to vyhraje, že?*

Ano, chápete mě správně: Pohledem člověka, který pomáhá zrychlovat weby, je přítomnost ikonfontu ve zdrojácích prostě *na pytel*.

U zmíněného e-shopu by přechodem na SVG šla prožiteku při vykreslování stránky šel udělat následovně:

- Logo vložit přímo `<svg>` v HTML
- Kritické ikony v hlavičce do malého externího SVG sprite, který bude mít nastavený preload
- Ostatní ikony do většího externího SVG sprite

S SVG prostě můžu být kreativní. U ikonfontu jen hacky odstraňovat jiný hack.

## Druhý až čtvrtý důvod

Ne, ikonfonty šetřit nebudu, protože výše uvedené není jejich jediná nevýhoda. 

Pomůžu si tady argumenty ze známého článku na CSS Tricks [Inline SVG vs Icon Fonts](https://css-tricks.com/icon-fonts-vs-svg/)

- *Vykreslování* – prohlížeč vykresluje ikonfonty jako text. To může zapřičínit neostré hrany, protože je prostě bude vykreslovat jinak než grafiku.
- *Pozicování* – jelikož ikonfont závisí na textových vlastnostech (`line-height`, `letter-spacing`), může jejich precizní napozicování způsobovat bolehlavy. Však vy víte.
- *Sémantika a přístupnost* – jak ikony ve fontu přečtou roboti a čtečky? Ano, i ikonfonty jde v tomhle směru hackovat tak, aby to jakžtakž fungovalo. Ale SVG prostě *je* obrázek s celou řadou možností popsat význam – například `<title>` vevnitř souboru.

Opakuji: Ikonfonty jsou hack. Používáme font pro to, abychom vykreslili grafiku. Klameme prohlížeč, což nikdy nemůže být dobrý.

Ale dobře. Řekněme, že tyhle čtyři důvody nejsou pro vaše použití nijak zásadní. (Což si umím představit například u prototypování nebo při tvorbě interních aplikací.) Zůstává pak zásadní argument pro použití ikonfontů. Pohodlí.

## A co pohodlí vývojáře? {#pohodli}

V tom byly ikonfonty dlouho nepřekonatelné. Prostě si stáhnete soubor, zkopírujete CSS a pak už jen používáte v HTML.

Jenže dneska už to tak není. Prošel jsem weby nejznámějších poskytovatelů ikonfontů a myslím, že nasazení SVG je skoro stejně jednoduché

*TODO*

- https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css
- https://icomoon.io/#docs/svg-png
- http://fontastic.me/

Nenašel jsem:

- http://fontello.com/

A že je potřeba přemýšlet jakým způsobem to SVG uživateli poslat? Ano, tak už to u naší práce bývá.

