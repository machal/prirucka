# Autorský zoom dokumentu a komponent

Jednotky `em` a `rem` jsou pružné a tak je možné s jejich pomocí zvětšovat nebo zmenšovat celý web nebo jeho jednotlivé komponenty. 


## Zvětšování nebo zmenšování celé stránky

Důležité je sázet pravidla pro základní typografii dokumentu a layout stránky důsledně v `rem` (nebo výjimečně `em`) jednotkách:

```css
/* Vzhled komponent: */
h1 { margin-bottom: 1rem }

/* Layout: */
.container { max-width: 30rem }
```

Jak už víte, v `1rem` je uložená vaše výchozí velikost písma. Rozměry takto nastavených vlastností se budou počítat z ní.

Autorsky změnit velikost písma můžeme trvale pro celý web:


```css
html {
 font-size: 14px;
}  
```

Lusknutím prstu to uděláme také pro konkrétní rozlišení:

```css
@media (min-width: 50em) {
  html {
   font-size: 1.25rem;
  }  
}
```

Je to například skvělá možnost, jak zvětšit (zoomovat) celou stránku a zlepšit čitelnost obsahu na enormně velkých šířkách okna prohlížeče. 


<div class="ebook-only" markdown="1">
Vzpomeňte si na část první kapitoly [o velkých displejích](zmeny-velke-displeje.md), kde jsme se tím zabývali.
</div>

Podobně můžeme zvětšovat či zmenšovat písmo (a pak celý layout) na displejích menších. Každý webový projekt má jinak nastavenou základní typografii, jinak postavený layout, takže k tomu moc obecných rad nejde dát. Ale když budete usilovně zmenšovat a zvětšovat okno a sledovat přitom čitelnost textu, místa vhodná k nasazení celkového zvětšení či zmenšení dokumentu poznáte.


## Zvětšování nebo zmenšování komponent

Vezměme sice zjednodušenou, ale o to lépe vše demonstrující komponentu:

```css
.component {
  background: #ccc;
  padding: 1em;
}
```

Na jejím místě si můžete představit jen o něco složitější tlačítka, ikony, propracovanější navigaci, fotogalerii a tak dále. 

Teď si stačí nadefinovat obecné pomocné třídy pro zvětšování a změnšování:

```css
.size-sm { font-size: 75% }
.size-lg { font-size: 125% }
```

O čtvrtinu větší verzi komponenty pak zařídíme takto snadno:

```html
<p class="component size-lg">
  Component
</p>
```

Pokud chcete takto vytvářet velikostní varianty komponent, musíte dodržet jediné: všechny pružné rozměry sázet v `em`. Použití `rem` by tady nemělo žádný účinek. Neumí totiž změnit velikost jen pro konkrétní použití komponenty.

`em` proto používám v komponentách, které mohou měnit velikost podle výskytu. `rem` ve všech ostatních případech.

Různé komponenty budou vyžadovat různý přístup: někde budete ještě muset do velikostních tříd přidat pravidlo pro menší výšku řádku, někde to bude stačit tak jako v mé ukázce.

Dává vám to smysl? Kód k tomuto textu je také na CodePenu. [cdpn.io/e/RKQmVG](http://codepen.io/machal/pen/RKQmVG?editors=1100#0)
