# Funkce calc()

Funkce `calc()` v CSS umožňuje vložit matematický výraz namísto hodnoty vlastnosti.

Je velmi dobře podporovaná. Je užitečná. Je škoda, že ji kodérky a kodéři nepoužívají častěji. Pojďme to zkusit zlepšit. Nejprve si ukažme dvě jednoduchá využití:

```css
.box {
  width: calc(100% / 3);
}
```

Rozdělení šířky na tři díly byste asi zvládli i bez kalkulačky, ale výhoda zápisu s `calc()` je v tom, že nedojde k zaokrouhlení z vaší strany.

```css
.box {
  margin-bottom: calc(1em - 2px); 
}
```

Něco takového je velmi užitečné. Například když z odsazení nebo šířky elementu potřebujete odečíst šířku rámečku (`border`).

<div class="ebook-only" markdown="1">

Funkce `calc()` je samozřejmě velmi dobře použitelná právě v různých layoutech CSS. Proto má své místo i v poslední kapitole této knihy.

</div>

## Není to stejné jako matematika v preprocesorech? {#preprocesory}

Prosím nezaměňujte `calc()` s výpočty v CSS preprocesorech jako je Sass. V preprocesoru se musíme spokojit s výrazy, které se mohou zkompilovat do CSS ještě předtím, než prohlížeč stránku vidí:

```scss
.box {
  width: (100% / 3)
  // › width: 33.33333333%
}
```

Jenže preprocesoru dochází dech v momentě, kdy potřebuji kombinovat více jednotek. Vezměme příklad třísloupcového rozvržení s vnějším okrajem o šířce `1em`:

```css
.box {
  width: calc(100% / 3 - (2 * 1em))
}
```

Tady je vidět síla funkce `calc()`. Počítá se v prohlížeči a jedině prohlížeč zná konkrétní hodnoty, které zastupují jednotky jako je `em`.

<!-- AdSnippet -->

Že se vám to někdy hodilo? Že to obcházíte podivnými hacky? Vítejte v klubu!

## Příklady použití {#priklady}

Pojďme si teď více ukázat možnosti praktického využití na vašich projektech.

### 1) Ukaž matiku! {#priklady-1}

Nejprve si více rozebereme příklad podobný tomu v úvodu:

```css
.box {
  width: calc(100% / 7);
}
```

Proč nenapsat rovnou `width: 14.2857`? Ze dvou důvodů:

1. *Čitelnost kódu.* Vsaďte se, že na původ čísla 14,2857 zapomenete. Nejpozději za týden. Správa této části kódu pro vás pak bude znamenat kladení otázek „jak jsem k tomu číslu došel?“. Vždy je lepší zapsat výpočet než výsledek.
2. *Zaokrouhlování.* V celé kráse vypadá takto: 14,285714286. Kodéři občas podlehnou pokušení a desetinná místa zaokrouhlí. A pak se diví, že se jim v nějakém konkrétním rozlišení a prohlížeči rozpadlo rozvržení stránky. Nebuďte takoví kodéři. Nezaokrouhlujte.

### 2) Responzivní obrázky {#priklady-2}

V parametru `sizes` značky `<img>` je znalost `calc()` naprosto klíčová. Zkuste si bez téhle prima funkce spočítat šířku obrázku uvnitř layoutu, který v responzivním layoutu splňuje následující podmínky:

1. Na větších displejích zabírá polovinu šířky layoutu stránky. Ale bez vnějších okrajů layoutu (10 pixelů) a samotné stránky (15 pixelů).
2. Na menších zabírá celou šířku viewportu bez vnějších okrajů stránky (15 pixelů).

```html
<img
  sizes="calc((100vw - 2 * 15px) / 2) - 10px), 
         calc(100vw - 2 * 15px)"   
>
```

Uznávám, že už to vypadá docela složitě. Ale bez `calc()` byste layout stránky pro potřebu responzivních obrázků nedokázali popsat.

<!-- AdSnippet -->

(Pro zájemce: více o atributu `sizes` najdete na Vzhůru dolů. [vrdl.cz/p/srcset-sizes](https://www.vzhurudolu.cz/prirucka/srcset-sizes))

## Podpora v prohlížečích {#podpora}

Funkci `calc()` podporují všechny moderní prohlížeče.

Na CanIUse si můžete přečíst, v jakých situacích tuto užitečnou funkci nepodporuje [Internet Explorer 11](msie.md). Pochybuji, že by se vám do toho chtělo. Je to dlouhý seznam. [caniuse.com/calc](https://caniuse.com/calc)

<!-- AdSnippet -->
