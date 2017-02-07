# Autorský zoom dokumentu a komponenty pomocí em a rem

Jednotky `em` a `rem` jsou dokonale pružné a tak je možné s jejich pomocí zvětšovat nebo zmenšovat celý web nebo jeho jednotlivé komponenty. Ukážu to na CodePenu. [cdpn.io/e/RKQmVG](http://codepen.io/machal/pen/RKQmVG?editors=1100#0)

## Zvětšování nebo zmenšování celé stránky

Sazbu dokumentu a odkazování na ni je vhodné dělat pomocí jednotky `rem` (kořenový čtverčík). 

Důležité je sázet pravidla pro základní typografii dokumentu a layout stránky důsledně v `rem` (nebo výjimečně `em`) jednotkách:

```css
/* Pravidla pro základní elementy dokumentu: */
h1 { margin-bottom: 1rem }

/* Pravidla pro layout dokumentu: */
.container { max-width: 30rem }
```

Výchozí velikost písma je skoro ve všech prohlížečích nastavená na 16 pixelů. Z této nebo námi přenastavené hodnoty se pak budou počítat rozměry takto nastavených vlastností.

Autorsky změnit velikost písma trvale:


```css
html {
 font-size: 14px;
}  
```

Můžeme to ale udělat také pro konkrétní rozlišení:

```css
@media (min-width: 50em) {
  html {
   font-size: 1.25rem;
  }  
}
```

Je to například skvělá možnost jak zvětšit (zoomovat) celou stránku a zlepšit čitelnost obsahu na velkých displejích. 

Statistiky ukazují, že skupina uživatelů opravdu velkých rozlišení jako 1920 pixelů a výše je dnes téměř stejně početná jako skupina uživatelů mobilních zařízení. A právě na velkých monitorech uživatelé ocení větší základní typografii, protože od obrazovky prostě sedí dále.

<div class="ebook-only" markdown="1">
Vzpomeňte na kapitolu [o prostředí](prostredi-proc-responzivni-design.md) responzivního designu, kde jsme se tím zabývali.
</div>

Podobně můžeme zvětšovat či zmenšovat písmo (a pak celý layout) na displejích menších nebo prostě na konkrétních breakpointech. Každý webový projekt má jinak nastavenou základní typografii, jinak postavený layout, takže k tomu moc obecných rad nemám. Ale když budete usilovně zmenšovat a zvětšovat okno a sledovat přitom čitelnost textu, přijdete na to i vy, méně zkušení. 


## Zvětšování nebo zmenšování komponent

V ukázce na CodePenu mám sice nereálnou, ale o to lépe vše demonstrující komponentu:

```css
.component {
  background: #ccc;
  padding: 1em;
}
```

Na jejím místě si můžete představit jen o něco složitější tlačítka, ikony, propracovanější navigaci, fotogalerii a tak dále. Pokud chcete snadno vytvářet velikostní varianty komponent, musíte dodržet jediné: všechny rozměry na svislé ose mít ve čverčících (`em`). Jednotky na vodorovné ose určují layout se různí podle situace, ale obvykle jsou to buď procenta nebo opět čtverčíky.

Teď si stačí nadefinovat obecné pomocné třídy pro zvětšování a změnšování:

```css
.size-sm { font-size: .75em }
.size-lg { font-size: 1.25em }
```
Větší variantu komponenty pak zařídíme takto snadno:

```html
<p class="component size-lg">
  Component <em>(large size)</em>
</p>
```

Různé komponenty budou vyžadovat různý přístup: někde budete ještě muset do velikostních tříd přidat pravidlo pro menší výšku řádku, někde to bude stačit tak jako v mé ukázce.

Dává vám to smysl? Znovu tady pro jistotu odkážu na svůj výsledný CodePen. [cdpn.io/e/RKQmVG](http://codepen.io/machal/pen/RKQmVG?editors=1100#0)
