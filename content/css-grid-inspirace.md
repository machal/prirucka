# CSS grid: Příklady použití, na které budete čubrnět

[CSS grid](css-grid.md) nádherně rozšiřuji možnosti layoutu ve webdesignu. 

Nebo *bude* rozšiřovat. Jeho podpora totiž není plná. IE11 totiž umí jen základní vlastnosti gridu a to ještě jinak než ostatní prohlížeče. U většiny příkladů je ovšem možné udělat alespoň částečné náhradní řešení, například pomocí [flexboxu](css3-flexbox.md). Všechny ale využijí jen ti z vás, kteří se podporou Exploreru z nějakých důvodů nemusíte zabývat.

## 1) Mřížka jako v Bootstrapu na pár řádcích kódu {#1}

Mřížka pro vodorovné rozvržení stránky je fajn. Současná řešení z Bootstrapu a jiných frameworků mají ovšem jednu nevýhodu – ohromné množství předgenerovaného CSS kódu. Ten musí stáhnout i ti uživatelé, kteří z frameworku využijí jen malinkou část.

Mřížku je ale možné definovat také v gridu:

```css
.row {
  /* 12 sloupečků: */
  grid-template-columns: repeat(12, 1fr);
  /* Mezera mezi sloupečky: */
  grid-column-gap: 30px;  
}  
```

Následovala by už jen deklarace pro rozvržení. Pokud bychom zůstali u názvosloví Bootstrapu, byla by následující:

```css
.col-4 {
  grid-column: span 4;
}

.col-8 {
  grid-column: span 8;
}
```

Následuje ukázka v CodePenu:

<iframe height='265' scrolling='no' title='Bootstrap's grid in CSS grid: 4 / 8 Layout ' src='//codepen.io/machal/embed/vzxYYN/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/machal/pen/vzxYYN/'>Bootstrap's grid in CSS grid: 4 / 8 Layout </a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Na CodePenu mám také detailnější rozborku: [cdpn.io/e/dJxBGz](https://codepen.io/machal/pen/dJxBGz).

## 2) Pojmenované oblasti {#2}

Jeden tahák trnu z paty – pojmenování oblastí – se velmi hodí při tvorbě složitějších vícerozměrných layoutů.

Nejprve definujeme mřížku pro layout. Bude mít dva sloupce a tří řádky:

```css
grid-template-columns: auto 30%;
grid-template-rows: 10em auto 5em;   
```

A teď si jednotlivé oblasti pojmenujeme:

```css
grid-template-areas:
  "head head"
  "main side"
  "foot foot";
```

Pak už jen říkáme, který prvek z DOMu kam patří:

```css
.head {
  grid-area: head;
}
```

Asi se hodí připomenout i jinou milou věc: Gridu moc nezáleží, kde je onen `.head` umístěný v HTML.

A je hotovo:

<iframe height='265' scrolling='no' title='CSS Grid: Application Design Demo with Grid Areas' src='//codepen.io/machal/embed/ppVzrg/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/machal/pen/ppVzrg/'>CSS Grid: Application Design Demo with Grid Areas</a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 3) Umísťování prvků podle vzhledu, ne podle pořadí {#3}

Tady se podívejme neprve na CodePen: [cdpn.io/e/NMyjpb](https://codepen.io/machal/pen/NMyjpb?editors=1100).

Zvětšujte a zmenšujte si šířku části „Result“ a všimněte si, jak černá položka mění pořadí. Někdy je čtvrtá, někdy pátá.

<iframe height='265' scrolling='no' title='CSS grid:  grid-auto-flow: dense' src='//codepen.io/machal/embed/NMyjpb/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/machal/pen/NMyjpb/'>CSS grid:  grid-auto-flow: dense</a> by Martin Michálek (<a href='https://codepen.io/machal'>@machal</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Ano, tohle dělá grid automaticky. Jen je potřeba mu to nakázat:

```css
.wrapper {
  grid-auto-flow: dense;
}
```

Hodnota `dense` vlastnosti `grid-auto-flow` zajistí „zahuštěné“ vyskládání položek. Algoritmus v tomto případě dá přednost zaplnění plochy před pořadím v kódu.

V CodePenu si všimněte i jiné deklarace:

```css
.wrapper {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
```

- `auto-fill` – když dostane volný prostor, vloží novou prázdnou buňku. 
- Funkce `minmax()` definuje šířku položky mezi určitými hranicemi.
- `1fr` je „fraction unit“. Je to v principu totéž jako „bezjednotkové“ míry ve flexboxu – například `flex: 1`. 
