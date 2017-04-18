CSS3 Flexbox: layout pomocí pružných boxů
=========================================


<div class="web-only vd-nav">
  <h2 class="sr-only">Navigace: vše o flexboxu</h2>
  <ul>
    <li>
        <strong class="vd-nav__item">Flexbox</strong>
    </li>
    <li>
        <a class="vd-nav__item" href="css3-flexbox-polozky.md">Položky</a>
    </li>
    <li>
        <a class="vd-nav__item" href="css3-flexbox-kontejner.md">Kontejner</a>
    </li>
  </ul>
</div>


## Co je flexbox?

Nová cesta pro tvorbu layoutu, zarovnání a distribuci volné plochy.

<!-- AdSnippet -->

*Flex* v češtině znamená *pružný*, *přizpůsobivý*. Flexboxy jsou tedy *pružné* elementy layoutu. Jednou z hlavních předností flexboxu je totiž schopnost vyplňovat zbylý prostor bez nutnosti přepočítávání javascriptem.

### Základy v jednoduchém příkladu

Představme si triviální třísloupcový layout:

```html
<div class="container">
  <p class="mandatory-1">One</p>
  <p class="content">Two<br/>…<br/>…</p>
  <p class="mandatory-2">Three </p>
</div>
```

HTML je jednoduché. O to přísnější máme požadavky na design. A víte co? Ukážeme si rovnou, jak je splnit pomocí flexboxu.

<!-- AdSnippet -->

1. **Všechny sloupce stejně vysoké.** Ano, i v případech kdy má ten jeden delší obsah než zbylé dva. To je to nejjednodušší. Stačí z rodiče udělat kontejner flexboxu – `.container { display: flex; }`.
2. **Chceme pětinovou mřížku**. První a třetí sloupec má zabírat jednu pětinu – `.mandatory-1, .mandatory-2 { flex: 1; }`. A druhý pak tři pětiny – `.content { flex: 3 }`. Všimli jste si, že jsme nemuseli počítat s procenty? A že bychom nemuseli procenta přepočítávat, kdybychom přidali další sloupec?
3. **Na menších rozlišeních chceme změnit pořadí elementů.** Prostě jen do media query napíšeme `.content { order: -1; }`, a sloupec s obsahem se přesune na první místo. Bomba pro responzivní design, že?

<div class="web-only text-center text-small">
  <hr>
    <p>
      Text je součástí mého ebooku <a href="/ebook">Vzhůru do CSS3</a>, který 
      exkluzivně obsahuje také další materiál 
      o&nbsp;flexboxu, CSS3 a&nbsp;moderní webové kodéřině&nbsp;obecně.
    </p>
    <p>
      <a class="button" href="/ebook#objednavka">Koupit ebook za 249&nbsp;Kč</a>
    </p>
  <hr>
</div>

Příklad si utíkejte vyzkoušet naživo na CodePen. [cdpn.io/e/LhGuD](http://cdpn.io/e/LhGuD)

Je to hezké, že? Ale skeptik by zamručel, že se CSSko konečně naučilo to, co jsme uměli pomocí „tabulkového layoutu“ v roce 2001. Jenže pravdu by měl jen z velmi malé části. Flexbox toho totiž umí daleko (*daleko!*) více než tabulky. 

### Proč potřebujeme flexbox?

Dovolte nejprve otázku. Jak dnes v CSS děláme layouty?

Floaty, inline-blockem, absolutním pozicováním nebo přes `display: table`. A víte, co mají všechny společného? Ani jeden nebyl vymyšlen pro tvorbu dnešních layoutů. Ano, flexbox je první layoutovací nástroj v CSS. „Po dvaceti letech,“ prohodil by pod fousy náš bručoun.

<!-- AdSnippet -->

Floaty, tabulky a jejich parta *Layoutovacích technik nad hrobem* samozřejmě ještě pár měsíců až let poslouží. Každý člen skupiny má ovšem pro tvorbu layoutů větší či menší nevýhody. Ty vyplývají už ze specifikací, které s dnešními layouty příliš nepočítaly.

### Hlavně layouty komponent

Je dobré zmínit, že flexbox je určený pro layout komponent uvnitř stránek. Tedy navigací, formulářů, stránkovacích komponent atd. atd.

Pro celostránkové layouty se více hodí CSS3 Grid Layout. Ten má ovšem zatím jen malou podporu v prohlížečích. Užití flexboxu pro celostránkové layouty je samozřejmě možné. Jen se na velmi pomalých zařízeních nebo internetových připojeních nebude vykreslovat optimálně. Píše o tom třeba Jake Archibald. [vrdl.in/zuscj](http://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/)

## Šup na základní pojmy — flex kontejner a flex položka, hlavní a příčná osa

Flexbox tvoří nerozlučná dvojice dvou typů elementů – flex kontejner a flex položka. Flex položkou se stává každý přímý potomek kontejneru.

```html
<ul class="flex-container">
  <li>…</li>
  <li>…</li>
</ul>
```

Flexbox nadefinujeme snadno jen pomocí flex kontejneru:

```css
.flex-container {
  display: flex;
}
```

Všechny `<li>` se tady stávají flex položkami.

Kromě flex kontejnerů a položek nás v dalším textu budou zajímat ještě osy. Ukažme si to na zjednodušeném schématu:

![flexbox schéma](dist/images/original/flexbox-schema.jpg)

* flex kontejner – rodičovský element
* flex položka – všichni přímí potomci flex kontejneru
* hlavní osa – výchozí je horizontální, ale lze změnit
* příčná osa – vždy příčná k hlavní, takže ve výchozí podobě svislá
* hlavní rozměr – výchozí je šířka, ale řídí se nastavením hlavní osy
* příčný rozměr – výchozí je výška
