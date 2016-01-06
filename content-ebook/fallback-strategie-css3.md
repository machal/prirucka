# Křápovzdorné technické řešení v CSS3

Máme pět možných strategií: nulový nebo definovaný fallback, detekci vlastností nebo polyfilly, a pak speciální kategorii generovaných fallbacků.

## 1. Nulový fallback

Počet znaků fallback kódu: nula. Žádný alternativní kód prostě nepíšete. (Ovšem za podmínky, že přesně víte, co děláte.)

Nulový fallback využívá chytré vlastnosti HTML a CSS — ignorace neznámého. Prohlížeče odjakživa oba jazyky zpracovávají tak, že v případě, že narazí na neznámou značku, atribut, vlastnost nebo hodnotu, ignorují ji a pokračují ve zpracování kódu.

```css
.box {
  color: red;
  transition: .5ms;
}

.box:hover {
  color: darkred;
}
```

Tady se netrápíme tím, že starší prohlížeče nezvládají animace pomocí transition. Ty nám obvykle slouží k vylepšení uživatelského prožitku v moderních prohlížečích.

Pokud by ale animace nesla informaci (třeba jako indikace během načítání souboru), museli bychom informaci nějak předat i uživatelům starých prohlížečů.

Nulový fallback tak představuje možné řešení právě pro animace, kulaté rohy, stínování, vlastní fonty a mnoho dalších CSS3 vlastností.

## 2. Definovaný fallback

Fallback, který využívá toho, že prohlížeč aplikuje vždy poslední známou deklaraci. Vzpomeňte si na postprocesor grunt-pixrem z dřívějšího textu:

```css
.element {
  /* Staré křápy: */
  font-size: 16px;
  /* Moderní prohlížeče: */
  font-size: 1rem;
}
```

Jde o možné řešení pro všechny nové CSS3 jednotky či pro RGBa. Nebo pro flexbox layouty.

Určitě si vzpomenete, že definovaného fallbacku využíváme také u prefixovaných variant CSS vlastností:

```css
.element {
  /* Chrome, Safari, Android:  */
  -webkit-column-count: 2;
  /* Firefox: */
  -moz-column-count: 2;
  /* IE 10, Op 11.1+: */
  column-count: 2;
}
```

## 3. Detekce podpory vlastnosti

U některých vlastností bohužel není možné přirozený CSS fallback použít. Řešení pro starší prohlížeče může obnášet odlišné řešení uživatelského rozhraní nebo jinak strukturovaný kód.

Tady přichází ke slovu detekce vlastností. Na tomto místě bych se rád vyhranil vůči staršímu postupu – detekci prohlížečů. Pomocí CSS hacků nebo zjišťování User Agent podpisu prohlížeče jsme detekovali prohlížeč, jenž vlastnost neumí. To bylo fajn ve světě, kdy tyto prohlížeče tvořila skupina dvou nebo tří starých verzí Internet Exploreru.

U každé CSS3 vlastnosti je ale skupina prohlížečů, které vlastnost neumí, různá. Někdy jen IE8 a starší. Někdy IE9 a starší a k nim třeba Opera Mini. Někdy se ještě přidají starší Android prohlížeče. Čert ví, co přijde za rok. Proto je daleko efektivnější cestou detekovat podporu vlastností, nikoliv prohlížečů. Prohlížeče pak máme „v ceně“ a můžeme je pustit z hlavy.

Detekce vlastností se velmi hodí třeba u vektorového formátu SVG, o kterém už byla řeč:

```css
.icon {
  background-image: url(icon.svg);
}

.no-svg .icon {
  background-image: url(icon.png);
}
```

V případě CSS3 vlastností se pak hodí zejména u těch, které se týkají layoutu. Příkladem budiž flexbox:

```css
.component {
  display: flex;
}

.no-flexbox .component {
  display: table;
}
```

Nebo Multicolumn layout:

```css
.text {
  columns: 2;
}

.no-csscolumns .text {
  float: left;
  width: 50%;
}
```

„Detekční“ třídy jako `.no-svg` nám do DOMu přidá javascriptová knihovna Modernizr, o které je řeč [v kapitole o nástrojích](nastroje-atd.md). Nebo si můžeme napsat vlastní kousek detekčního javascriptu.

### Dotazy na vlastnosti

Modernizr aktuálně dostává *něco jako* nativní podporu od W3C. Přichází v podobě dotazů na vlastnosti – CSS Feature Queries. Pomocí zavináčového pravidla `@supports` se ptáte na dostupnost konkrétní CSS vlastnosti:

```css
.component {
  display: table;
}

@supports (display: flex) {
  display: flex;
}
```

Více na [developer.mozilla.org/en-US/docs/Web/CSS/@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports).

### Prázdný dotaz na média

Zajímavé použití detekce vlastnosti (a zároveň ukázkovou Progressive Enhancement!) představuje prázdná media query. Starší prohlížeče – jako IE do verze 8 nebo nějaké obskurnější mobilní křápy – prostě tuto část kódu nepřečtou. Hodí se třeba pro odstínění těchto prohlížečů od layoutu:

```css
.component {
  /* Základní pravidla pro
  typografii a lineární design */
}

@media only screen {
  .component {
    /* Layout a další
    netriviální pravidla */
  }
}
```

Vše podle těchto dvou hesel:

- Ve starých prohlížečích je podstatná dostupnost hlavního obsahu, nikoliv přesné dodržení grafického návrhu.
- Lineární zobrazení je lepší než rozpadlý layout stránky.

## 4. Polyfilly

Jde o javascriptové knihovny, které simulují podporu nových vlastností i v prohlížečích, které je neumí. Jsou velmi populární ve světě javascriptových vývojářů, pomohou ale i HTML/CSS kodérům. Příkladem budiž Respond.js, který zapne podporu CSS3 Media Queries i ve starších Explorerech, nebo Picturefill, který zase rozchodí responzivní obrázky – `<img srcset sizes>` a `<picture>`.

Kromě ověřeného [Respond.js](https://github.com/scottjehl/Respond) ale polyfilly u CSS3 vlastností nedoporučuji nasazovat. Obvykle zhoršují výkonnost stránky a činí vzhled závislým na Javascriptu.

## 5. Generovaný fallback

Zmiňoval jsem CSSnext a postprocessing, musíme to proto ještě jednou udělat v kapitole o vytváření fallbacků.

Alternativou k Respond.js, která zajistí fungování stránky i v prohlížečích bez podpory Media Queries, je zmíněný [grunt-legacssy](https://github.com/robinpokorny/grunt-legacssy), který vygeneruje verzi CSS bez dotazů na média.

Generovaný fallback ovšem většinou jen automatizuje už zmíněný definovaný fallback jako v případě [grunt-pixrem](https://github.com/robwierzbowski/grunt-pixrem).
