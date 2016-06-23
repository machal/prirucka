# Všechny CSS3 vlastnosti

## Vlastnosti textu


- [Text Overflow](css3-text-overflow.md)  
  Způsob přetékání textu. Hlavně pro vytečkování textu, který přesahuje šířku elementu.
- [Text Shadow](css3-text-shadow.md)  
  Stínování textu.
- [Font Face](css3-font-face.md)  
  Webové fonty neboli vlastní fonty do stránky.

## Vlastnosti pozadí

- [Background Clip](css3-background-clip.md)  
  Míra roztažení pozadí. Určuje, kde všude se uvnitř elementu vykresluje obrázek nebo barva na pozadí.
- [Background Origin](css3-background-origin.md)  
  Pozice začátku pozadí. Určí, kde se v rámci elementu nachází začátek osy pro počítání rozměrů a pozic vlastností jako Background Size nebo background-position.
- [Background Size](css3-background-size.md)  
  Velikost obrázku na pozadí.
- [Gradients](css3-gradients.md)  
  Barevné přechody vykreslené podle úsečky i kružnice.
- [Multiple Backgrounds](css3-multiple-backgrounds.md)  
  Více obrázků na pozadí jednoho elementu.

## Vlastnosti rámečků

- [Border Image](css3-border-image.md)  
  Rámeček vykreslený obrázkem.
- [Border Radius](css3-border-radius.md)  
  Vykreslování zakulacených a elipsovitých rohů elementu.  

## Vlastnosti boxu

- [Box Shadow](css3-box-shadow.md)  
  Stín nejen pod elementem, ale i uvnitř elementu nebo plastický efekt přes element.
- [Box Sizing](css3-box-sizing.md)  
  Změna způsobu počítání šířky a výšky elementu, jinak též řečeno box-modelu.

## Media Queries

- [Media Queries](css3-media-queries.md)  
  Podmíněné zobrazení pro média.

## Transformace

- [Transforms](css3-transforms.md)  
  Proměna tvaru, pozice nebo velikosti elementu.

## Animace

- [Transitions](css3-transitions.md)  
  Jednoduché animace přechodu.
- [Animations](css3-animations.md)  
  Plnohodnotné animace v CSS.

## Layout
  
- [Multicolumn layout](css3-multicolumn.md)  
  Vícesloupcová sazba (nejen) textu.
- [Flexbox](css3-flexbox.md)  
  Layout pomocí pružných boxů. 

## Vybrané další CSS3 vlastnosti

- [Jednotky](css3-jednotky.md)  
  Jednotky jako root `em` (`rem`) nebo závislé od velikosti viweportu (`vw`, `vh`).
- [RGBa](css3-rgba.md)  
  RGB barva se čtvrtým číslem, alfa kanálem, jež říká informaci o hodnotě průhlednosti.
- [Selektory](css3-selektory.md)  
  CSS3 přichází s armádou nových selektorů. 

## Nestandardní vlastnosti

- [Box Reflection](css3-box-reflection.md)  
  Odlesk objektu.

## Vlastnosti nezařazené v tomto textu

Přidávám i ty, které stojí za pozornost, ale zatím jsem je nezdokumentoval.

http://html5please.com/#css

### Funkce calc()

Matematické výrazy a kombinování jednotek v hodnotách vlastností.

Například:

```css
.el {
  width: calc(100%/3 - 2*15px)
}
```

Funkce má pochopitelně mnoho praktických využití. Více si oni přečtěte na [jecas.cz](http://jecas.cz/calc) nebo rovnou na [w3.org](https://www.w3.org/TR/css3-values/#calc-notation).

`calc()` nefunguje v IE8 nebo Opeře Mini, takže u použití co mají zásadní vliv na zobrazování nezapomeňte na [definovaný fallback](fallback.md).

### Filtry

Aplikování grafických filtrů na objekty nebo obrázky. [Podpora je zatím horší](http://caniuse.com/#search=css-filters), v Exploreru to nefunguje a čeká se na zapnutí v produkčním Edge. Raději upozorňuji, že to nemá nic společného s funkcí `filter()` známou z dřívějších Explorerů.

Filtry umí rozmazání, jas, kontrast, stín, černobílost a další. Více na [jecas.cz](http://jecas.cz/filter) nebo [w3.org](https://www.w3.org/TR/filter-effects/).

### Masky

Zobrazení obrázku nebo elementu přes masku tvořenou jiným obrázkem. Hodilo by se, ale podpora je zatím mizerná](http://caniuse.com/#search=masks). Viz [jecas.cz](http://jecas.cz/mask) a [w3.org](https://www.w3.org/TR/css-masking/).

### Grid

Layout do mřížky. Zatímco Flexbox je vymyšlený pro design komponent uživatelského rozhraní, Grid pro layout celých stránek. [Podpora](http://caniuse.com/#search=grid) je v době psaní jen experimentální. Existuje sice polyfill, pro layout bych ho ovšem používat nedoporučoval. Tohle asi bude po flexboxu další velká věc, takže doporučuji sledovat vývoj. Viz [w3.org](https://www.w3.org/TR/css3-grid-layout/).

### Hyphens

Definuje, zda budou slova na konci řádků automaticky rozdělovány pomocí spojovníku. Co [podpora](http://caniuse.com/#search=hyphens)? Kromě Chrome, Opery a Android Browseru se to už naučily všechny prohlížeče. Ale vzhledem k povaze vlastnosti nic jejímu využití nebrání. S českým textem to bude nejlépe fungovat v Exploreru. 

Podívejte se na [jecas.cz](http://jecas.cz/hyphens) nebo [w3.org](https://www.w3.org/TR/css-text-3/#hyphens-property).


### @supports

Testujeme dostupnost CSS vlastností v prohlížeči. Viz [jecas.cz](http://jecas.cz/supports) nebo [w3.org](https://www.w3.org/TR/css3-conditional/)

### http://www.tutorialrepublic.com/css-reference/css3-properties.php

- font-size-adjust  Preserves the readability of text when font fallback occurs.
- font-stretch  Selects a normal, condensed, or expanded face from a font.
- outline-offset  Set the space between an outline and the border edge of an element.
- text-align-last   Specifies how the last line of a block or a line right before a - - forced line break is aligned when text-align is justify.
- text-decoration Specifies the decoration added to text.
- text-decoration-color   Specifies the color of the text-decoration-line.
- text-decoration-line  Specifies what kind of line decorations are added to the element.
- text-decoration-style   Specifies the style of the lines specified by the text-decoration-line property
- word-break  Specifies how to break lines within words.
- word-wrap   Specifies whether to break words when the content overflows the boundaries of its container.
- resize  Specifies whether or not an element is resizable by the user.
