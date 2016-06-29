# Funkce calc()

Funkce, která umožňuje vložit matematický výraz namísto hodnoty vlastnosti.

Podívejme se na pár příkladů.

```css
.el {
  width: calc(100% / 3);
  margin-bottom: calc(1em - 2px); 
}
```

Je velmi dobře podporovaná, ale málo se o ní ví. Nemluvě o její zpochybňované užitečnosti. Pojďme to napravit.

## Není to to samé jako matematika v preprocesorech?

Není. [V preprocesoru](http://www.vzhurudolu.cz/blog/13-css-preprocesory-2#matematika) se musím spokojit s výrazy, které se mohou zkompilovat do CSS ještě předtím než prohlížeč vidí stránku:

```sass
width: (100% / 3)
// → width: 56.25%
```

Jenže preprocesoru dochází dech v momentě, kdy potřebuji kombinovat více jednotek. Vezměme příklad třísloupcového rozvržení s vnějším okrajem o šířce `1em`:

```css
width: calc(100% / 3 - (2 * 1em))
```

## Podpora v prohlížečích

Funkci `calc()` nepodporuje hlavně Internet Explorer 8, jeho starší sourozenci a také Android Browser. V době psaní textu mohou u průměrného českého webu tvořit maximálně něco kolem 3-4 % návštěvnosti. 

Pokud funkci používáte, myslete na tyto uživatele a pokud je to potřebné, poskytněte jim fallback, tedy definovanou alternativu. Může vypadat mírně jinak. Je to lepší, než když se ve starém prohlížeči rozpadnou důležité věci:

### Definovaný fallback

```css
/* IE8 a spol: */
width: 30%;
/* Moderní prohlížeče: */
width: calc(100% / 3 - (2 * 1em));
```

A prosím pěkně: pozor na chyby v některých nechvalně známých prohlížečích. Na této stránce doporučuji kliknout na „Known issues“ a hledat „crash“.

### Polyfill

TODO: https://github.com/closingtag/calc-polyfill

### Detekce

https://modernizr.com/download?csscalc-setclasses




- https://www.w3.org/TR/css3-values/
- 
