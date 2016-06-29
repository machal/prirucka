# Příklady využití funkce `calc()`. Kdy ji využít a kdy naopak ne?

---

## 1) Ukaž matiku!

```css
width: calc(100% / 7);
```

Proč nenapsat rovnou `width: 14.2857`? Ze dvou důvodů:

1. **Čitelnost kódu.** Vsaďte se, že původ čísla 14,2857 zapomente. Nejpozději za týden. Správa této části kódu se pak stane otravnou.
2. **Zaokrouhlování.** Celé číslo vypadá takto: 14,285714286. Kodéři občas podlehnou pokušení a desetinná místa zakrouhlí. A pak se diví, že se jim v nějakém konkrétním rozlišení a prohlížeči rozpadlo rozvržení stránky. Nebuďte takoví kodéři.

## 2) Responzivní obrázky

V parametru sizes tagu `<img>` se bez `calc()` nedá obejít. Zkuste si bez téhle prima funkce spočítat šířku obrázku uvnitř layoutu, který v responzivním layoutu splňuje následující podmínky:

1. Na větších displejích zabírá poloviny šířky layoutu stránky. Ale bez vnějších okrajů layoutu (10 pixelů) a samotné stránky (15 pixelů).
2. Na menších zabírá celou šířku viewportu bez vnějších okrajů stránky (15 pixelů).

```
<img
  sizes="calc((100vw - 2 * 15px) / 2) - 10px), 
         calc(100vw - 2 * 15px)"
  …       
>
```

Více o responzivních obrázcích: [vrdl.cz/prirucka/srcset-sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes).

Chci zmínit, že knihovna pro práci s responzivními obrázky – Picturefill – už obsahuje také polyfill pro funkci `calc()`. Dostanete s ní tedy řešení pro všechny existující prohlížeče.

## 3) Barevný přechod se stabilně širokou částí

Vezměme gradient, jehož část chceme definovat stabilní šířkou a ostatní části už standardně podílem z celku.

Více řekne obrázek. Černá část bude mít stabilní šířku. Bílá plocha se zmenšuje a zvětšuje podle dostupného místa.

![CSS funkce calc() na gradientu](../dist/images/original/css3-calc-gradient.jpg)

Takto by pak vypadal kód:

```css
background: 
  linear-gradient(to right bottom, 
    transparent calc(50% - 2em), 
    #000 0, 
    #000 calc(50% + 2em), 
    transparent 0);
```    

Tady je pak ukázka od Any Tudor: [cdpn.io/e/YyGPJo](codepen.io/thebabydino/pen/YyGPJo).

## Tři známá využití `calc()`, která naopak stojí za starou bačkoru

1. [Dopočítávání zbytku výšky nebo šířky](https://css-tricks.com/a-couple-of-use-cases-for-calc/#article-header-id-3)  
Máme fixně vysokou hlavičku. Tělo dokumentu pak má zabrat zbytek výšky okna. Ano, dá se to udělat pomocí něčeho jako `height: calc(100% - 70px)`. Ale daleko elegantněji to uděláte flexboxem, nástrojem, který byl pro účely tvorby layoutu vymyšlen. 
2. [Náhrada `box-sizing`](https://css-tricks.com/a-couple-of-use-cases-for-calc/#article-header-id-7)  
Ano, můžete použít něco jako `width: calc(30% - 10px * 2)`, kde `30%` je šířka a `10px` padding. Ale proč byste to dělali? Změna počítání šířky a výšky pomocí [vlastnosti Box Sizing](css3-box-sizing.md) má daleko lepší podporu než `calc()`.
3. [Umístění obrázku na pozadí několik pixelů zezdola a zprava](http://codepen.io/machal/pen/OXpqRm)  
Je možné použít zápis typu `background-position: calc(100% - 20px) calc(100% - 20px)`. Lepší ale je využít čtyřčíselný zápis pro pozicování obrázku s posunem, který má širší podporu mezi prohlížeči: [caniuse.com/css-background-offsets](http://caniuse.com/#feat=css-background-offsets)

