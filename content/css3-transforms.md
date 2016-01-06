CSS3 Transforms – proměny objektu
=================================

Transformace tvaru, pozice nebo velikosti elementu.

Existují čtyři funkce: zkosení, otočení, posun a změna velikosti:


```css
/* Zkosení */
.skew {
  transform: skew(-15deg);
}

/* Otočení */
.rotate {
  transform: rotate(-15deg);
}

/* Posun */
.translate {
  transform: translate(0, 50%);
}

/* Změna velikosti */
.scale {
  transform: scale(1.5);
}
```

Vyzkoušejte si – [http://cdpn.io/e/wxoil](http://cdpn.io/e/wxoil).

Všechny čtyři základní funkce mají varianty pro transformaci jen po jedné ose – například `skewX()`, `skewY()`.

## Kombinace transformací

Je dobré si zapamatovat, že se kombinace proměn neoddělují čárkou:

```css
transform: scale(1.5) skew(-15deg);
```

## Původ transformace

Souřadnice bodu, ze kterého transformace vychází. Přednastavený je střed objektu `transform-origin: center center`. Pokud si například nastavíme levý horní roh, objekt se nám zvětší z něj:

```css
.scale-2 {
  transform: scale(1.5);
  transform-origin: top left;
}
```

[cdpn.io/e/brBgk](http://cdpn.io/e/brBgk)

## Podpora v prohlížečích

IE10+. Pro starší prohlížeče budete nejspíš potřebovat detekci vlastnosti (Modernizr) a pak vyrobit alternativní řešení. Základní 2D transformace jdou ve starých IEčkách provést pomocí proprietární vlastnosti [filter](http://msdn.microsoft.com/en-us/library/ms533014%28VS.85%29.aspx). Pro převod z CSS3 do filter existuje [chytrý konvertor](http://www.useragentman.com/IETransformsTranslator/).
