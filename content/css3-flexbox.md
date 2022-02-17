CSS3 Flexbox: layout pomocí pružných boxů
=========================================

<div class="nav web-only">
  <h2 class="nav__heading sr-only">Navigace: vše o flexboxu</h2>
  <ul class="nav__list">
    <li class="nav__item nav__item--active">
        <strong class="nav__item-in">Flexbox</strong>
    </li>
    <li class="nav__item">
        <a class="nav__item-in" href="css3-flexbox-polozky.md">Položky</a>
    </li>
    <li class="nav__item">
        <a class="nav__item-in" href="css3-flexbox-kontejner.md">Kontejner</a>
    </li>
  </ul>
</div>

## Co je flexbox?

Jeden z nových způsobů, jak v CSS zapisovat layout, ale také zarovnání a distribuci volné plochy.

*Flex* v češtině znamená *pružný*, *přizpůsobivý*. Flexboxy jsou tedy *pružné* elementy layoutu. Jednou z hlavních předností flexboxu je totiž schopnost vyplňovat zbylý prostor bez nutnosti přepočítávání Javascriptem.

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

Příklad si utíkejte vyzkoušet naživo na CodePen. [cdpn.io/e/LhGuD](https://cdpn.io/e/LhGuD)

Je to hezké, že? Ale skeptik by zamručel, že se CSSko konečně naučilo to, co jsme uměli pomocí „tabulkového layoutu“ v roce 2001. Jenže pravdu by měl jen z velmi malé části. Flexbox toho totiž umí daleko (*daleko!*) více než tabulky. 

### Proč potřebujeme flexbox?

Dovolte nejprve otázku. Jak dnes v CSS děláme layouty?

Floaty, inline-blockem, absolutním pozicováním nebo přes `display: table`. A víte, co mají všechny společného? Ani jeden nebyl vymyšlen pro tvorbu dnešních layoutů. Ano, flexbox je první layoutovací nástroj v CSS. „Po dvaceti letech,“ prohodil by pod fousy náš bručoun.

<!-- AdSnippet -->

Floaty, tabulky a jejich parta *Layoutovacích technik nad hrobem* samozřejmě ještě pár měsíců až let poslouží. Každý člen skupiny má ovšem pro tvorbu layoutů větší či menší nevýhody. Ty vyplývají už ze specifikací, které s dnešními layouty příliš nepočítaly.

### Hlavně layouty komponent

Je dobré zmínit, že flexbox je určený pro layout komponent uvnitř stránek. Tedy navigací, formulářů, stránkovacích komponent atd. atd.

Pro celostránkové layouty se více hodí CSS3 grid Layout. Ten má ovšem zatím jen malou podporu v prohlížečích. Užití flexboxu pro celostránkové layouty je samozřejmě možné. Jen se na velmi pomalých zařízeních nebo internetových připojeních nebude vykreslovat optimálně. Píše o tom třeba Jake Archibald. [vrdl.in/zuscj](http://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/)

## Šup na základní pojmy – flexboxový kontejner a flexboxoví položka, hlavní a příčná osa

Flexbox tvoří nerozlučná dvojice dvou typů elementů – flexboxový kontejner a flexboxová položka. Flexboxovou položkou se stává každý přímý potomek kontejneru.

```html
<ul class="flex-container">
  <li>…</li>
  <li>…</li>
</ul>
```

Flexbox nadefinujeme snadno jen pomocí flexboxového kontejneru:

```css
.flex-container {
  display: flex;
}
```

Všechny `<li>` se tady stávají položkami flexboxu.

Kromě flexboxových kontejnerů a položek nás v dalším textu budou zajímat ještě osy. Ukažme si to na zjednodušeném schématu:

![flexbox schéma](../dist/images/original/flexbox-schema.jpg)

* flexboxový kontejner – rodičovský element
* flexboxová položka – všichni přímí potomci kontejneru flexboxu
* hlavní osa – výchozí je vodorovná, ale lze změnit
* příčná osa – vždy příčná k hlavní, takže ve výchozí podobě svislá
* hlavní rozměr – výchozí je šířka, ale řídí se nastavením hlavní osy
* příčný rozměr – výchozí je výška

## Zarovnávání (CSS Box Alignment) {#css-box-alignment}

Ke správnému zarovnávání ve flexboxu budete potřebova také vlastnosti jako [`justify-items`](css-justify-items.md), [`align-self`](css-align-self.md) a mnohé další. Ty jsou součástí samostatné příručky.

→ *Související: [Zarovnání boxů v CSS (Box Alignment Module)](css-box-alignment.md) – Materiál k vlastnostem pro zarovnání boxů.*

<!-- AdSnippet -->
