# Příklady využití funkce calc()

---

## 1) Ukaž matiku!

```css
width: calc(100% / 7);
```

Proč nenapsat rovnou `width: 14.2857`? Ze dvou důvodů:

1. Čitelnost kódu. Vsaďte se, že původ čísla 14,2857 zapomente. Nejpozději za týden. Správa této části pak bude otrava.
2. Zaokrouhlování. Ve skutečnosti je to 14,285714286. Kodéři občas podlehnou pokušení a číslo zakrouhlí. A pak se diví, že se jim v nějakém konkrétním rozlišení a prohlížeči rozpadlo rozvržení stránky. Nebuďte takoví kodéři.

## 2) Responzivní obrázky

V parametru sizes tagu `<img>` se bez `calc()` nedá obejít. Jak jinak byste spočítali šířku obrázku, který:

1. Na větších displejích zabírá poloviny šířky layoutu stránky. Ale bez vnějších okrajů layoutu (10 pixelů) a samotné stránky (15 pixelů): 
2. Na menších zabírá celou šířku viewportu bez vnějších okrajů stránky (15 pixelů).

```
<img
  …
  sizes="calc((100vw - 2 * 15px) / 2) - 10px), 
         calc(100vw - 2 * 15px)"
>
```

Více o responzivních obrázcích: [vrdl.cz/prirucka/srcset-sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes).

Chci zmínit, že nástroj Picturefill už obsahuje také polyfill `calc()`.

## 3) Umístění obrázku na pozadí několik pixelů zezdola a zprava

BG position x pixelů zezdola
https://css-tricks.com/a-couple-of-use-cases-for-calc/#article-header-id-3

background-position: calc(100% - 50px) calc(100% - 20px);

---

background: 
   linear-gradient(#e53b2c 1em, #f9f9f9 1em, 
                   #f9f9f9 calc(100% - 1em), 
                   #e53b2c calc(100% - 1em));

https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/#more-efficient-gradient-backgrounds-for-flexible-elements

---

background: 
   linear-gradient(to right bottom, 
                   transparent calc(50% - 2em), 
                   #000 0, 
                   #000 calc(50% + 2em), 
                   transparent 0);

----

https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/#positioning-children-of-known-dimensions-in-the-middle

position: absolute;
top: calc(50% - 2em); 
left: calc(50% - 2.5em);
width: 5em; 
height: 4em;

---

https://www.smashingmagazine.com/2015/12/getting-started-css-calc-techniques/#maintaining-aspect-ratio-and-covering-a-viewport-dimension

.slide {
   position: absolute;
   left: calc(100vw/2 - 4/3*100vh/2);
   width: calc(4/3*100vh);
   height: 100vh;
}

---


Zmíním i dvě populární použití `calc()`, které mě naopak připadají nevhodná:

1. [Dopočítávání zbytku výšky nebo šířky](https://css-tricks.com/a-couple-of-use-cases-for-calc/#article-header-id-3)  
Máme fixně vysokou hlavičku. Tělo dokumentu pak má zabrat zbytek výšky okna. Ano, dá se to udělat pomocí něčeho jako `height: calc(100% - 70px)`. Ale daleko elegantněji to uděláte flexboxem, nástrojem, který byl pro účely tvorby layoutu vymyšlen. 
2. [Náhrada `box-sizing`](https://css-tricks.com/a-couple-of-use-cases-for-calc/#article-header-id-7)  
Ano, můžete použít něco jako `width: calc(30% - 10px * 2)`, kde `30%` je šířka a `10px` padding. Ale proč byste to dělali? Změna počítání šířky a výšky pomocí [vlastnosti Box Sizing](css3-box-sizing.md) má daleko lepší podporu než `calc()`.




