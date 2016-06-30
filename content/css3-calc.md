# Funkce `calc()`

Funkce, která umožňuje vložit matematický výraz namísto hodnoty vlastnosti.

Je velmi dobře podporovaná, ale málo se o ní ví. Je užitečná, ale občas se to zpochybňuje. Pojďme to napravit. Neprve příklad:

```css
.el {
  width: calc(100% / 3);
  margin-bottom: calc(1em - 2px); 
}
```

## Není to to samé jako matematika v preprocesorech?

Není. [V preprocesoru](http://www.vzhurudolu.cz/blog/13-css-preprocesory-2#matematika) se musíme spokojit s výrazy, které se mohou zkompilovat do CSS ještě předtím než prohlížeč stránku vidí:

```sass
width: (100% / 3)
// → width: 56.25%
```

Jenže preprocesoru dochází dech v momentě, kdy potřebuji kombinovat více jednotek. Vezměme příklad třísloupcového rozvržení s vnějším okrajem o šířce `1em`:

```css
width: calc(100% / 3 - (2 * 1em))
```

Že se vám to někdy hodilo? Že to obcházíte podivnými hacky? Vítejte v klubu!

## Podpora v prohlížečích

Funkci `calc()` nepodporuje hlavně Internet Explorer 8, jeho starší sourozenci a také Android Browser. V době psaní textu mohou u průměrného českého webu tvořit maximálně něco kolem 3-4 % návštěvnosti. 

Pokud funkci používáte, myslete na tyto uživatele a pokud je to potřebné, poskytněte jim alternativu v podobě definovaného fallbacku. Může vypadat mírně jinak. Je to lepší, než když se ve starém prohlížeči rozpadnou důležité věci:

### Definovaný fallback

```css
/* IE8 a spol: */
width: 30%;
/* Moderní prohlížeče: */
width: calc(100% / 3 - (2 * 1em));
```

A prosím pěkně: pozor na chyby v některých nechvalně známých prohlížečích. Na této stránce doporučuji kliknout na „Known issues“ a hledat „crash“: [caniuse.com/calc](http://caniuse.com/calc).


### Polyfill

Vždycky říkám, že používání polyfillu na zásadní věci týkající se layoutu je dost nebezpečné. Myslete na situaci, kdy selže Javascript. Myslete na vykreslovací výkon. Myslete na svoje nervy. 

Pokud je i tak použítí `calc` ve starých prohlížečích nezbytné, z polyfillů vezměte tento: [github.com/closingtag/calc-polyfill](https://github.com/closingtag/calc-polyfill).

### Detekce vlastnosti

[Modernizr](https://modernizr.com/) umí funkci detekovat, takže směle do toho:

```css
.no-csscalc .el {
  /* IE8 a spol: */
}
.csscalc .el {
  /* Moderní prohlížeče: */
}
```
