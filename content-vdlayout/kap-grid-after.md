# Shrnutí páté kapitoly

Otestujte si, co jste se naučili o CSS gridu.

1. **Které prohlížeče podporují nějakou formu gridu?**  
a) jen všechny moderní prohlížeče  
b) Internet Explorer 11 a všechny moderní  
c) Internet Explorer 10 a všechny moderní
1. **Jaký je rozdíl mezi položkou a buňkou mřížky?**  
a) jde o synonyma pro pojmenování stejné věci  
b) položka je prvek v DOMu, buňka je prostor vymezený čtyřmi linkami  
c) buňka je prvek v DOMu, položka je prostor vymezený čtyřmi linkami
1. **Co je to implicitní mřížka?**  
a) je to jen jiné pojmenování pro běžnou mřížku uvnitř CSS gridu  
b) implicitní je předem definovaná, nastavuje se pomocí `grid-auto-*`  
c) implicitní je předem nedefinovaná, nastavuje se pomocí `grid-auto-*`
1. **Slučují se v položkách gridu sousedící vnější okraje `margin`?**  
a) ano, funguje to stejně jako u blokových elementů  
b) ne, ve formátovacím kontextu gridu se hodnoty neslučují  
c) v gridu nelze hodnoty `margin` používat, máme zde vlastnost `gap`
1. **Jak se liší jednotka `fr` od `%`?**  
a) nijak, ve výsledku je to stejné  
b) u `fr` nemusíme přemýšlet nad počtem položek a box modelem  
c) `%` není možné v gridu používat, rozbilo by to prohlížeče
1. **Jak definovat mřížku o rozměrech 2 × 2 se stejnými rozměry buněk?**  
a) `grid-template: 1fr 1fr / 1fr 1fr`  
b) `grid-define: 1fr 1fr / 1fr 1fr`  
c) `grid-template: "two rows", "two cols"`
1. **Co dělá vlastnost `grid-template-areas`?**  
a) pojmenovává konkrétní buňky mřížky  
b) umísťuje položky do pojmenovaných oblastí uvnitř gridu  
c) pojmenovává oblasti, tedy jednu nebo více buněk
1. **Co bude výsledkem zápisu `grid-area:oblast`?**  
a) umístí položku do oblasti `oblast`  
b) definuje oblast `oblast`  
c) jde o chyták, tato vlastnost neexistuje
1. **Jaký je rozdíl mezi `auto-fill` a `auto-fit` ve funkci `repeat()`?**  
a) `auto-fit` vyplní prostor novými buňkami, `auto-fill` roztahuje existující  
b) `auto-fill` vyplní prostor novými buňkami, `auto-fit` roztahuje existující  
c) uvnitř funkce `repeat()` mají obě klíčová slova stejný význam
1. **Co bude výsledkem zápisu šířky buňky jako `minmax(100px,max-content)`?**  
a) bude široká nejméně `100px` a nejvíce bude mít maximální šířku obsahu  
b) bude široká nejméně `100px` a nejvíce bude mít maximální šířku rodiče  
c) bude široká nejméně `100px` a nejvíce bude mít maximální šířku viewportu

---

Řešení:

1. **Které prohlížeče podporují nějakou formu gridu?**  
c) Internet Explorer 10 a všechny moderní
1. **Jaký je rozdíl mezi položkou a buňkou mřížky?**  
b) položka je prvek v DOMu, buňka je prostor vymezený čtyřmi linkami
1. **Co je to implicitní mřížka?**  
c) implicitní je předem nedefinovaná, nastavuje se pomocí `grid-auto-*`
1. **Slučují se v položkách gridu sousedící vnější okraje `margin`?**  
b) ne, ve formátovacím kontextu gridu se hodnoty neslučují  
1. **Jak se liší jednotka `fr` od `%`?**  
b) u `fr` nemusíme přemýšlet nad počtem položek a box modelem
1. **Jak definovat mřížku o rozměrech 2 × 2 se stejnými rozměry buněk?**  
a) `grid-template: 1fr 1fr / 1fr 1fr`
1. **Co dělá vlastnost `grid-template-areas`?**  
c) pojmenovává oblasti, tedy jednu nebo více buněk
1. **Co dělá zápis `grid-area:oblast`?**  
a) umístí položku do oblasti `oblast`
1. **Jaký je rozdíl mezi `auto-fill` a `auto-fit` ve funkci `repeat()`?**  
b) `auto-fill` vyplní prostor novými buňkami, `auto-fit` roztahuje existující
1. **Co bude výsledkem zápisu šířky buňky jako `minmax(100px,max-content)`?**  
a) bude široká nejméně `100px` a nejvíce bude mít maximální šířku obsahu
