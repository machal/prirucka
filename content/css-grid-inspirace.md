# CSS grid: 3 příklady použití, které se vám budou líbit (a fallback k tomu)

[CSS grid](css-grid.md) nádherně rozšiřuje možnosti layoutu ve webdesignu. Pojďte se nechat inspirovat několika příklady využití.

Jeho podpora není plná. Internet Explorer 11, který má v Česku v době psaní podíl mezi 5 - 10 % uživatelů, umí jen základní vlastnosti gridu a to ještě jinak než ostatní prohlížeče.

V posledním příkladu si proto ukážeme, jak udělat alespoň částečné náhradní řešení, zde pomocí [flexboxu](css-flexbox.md) a podmínky `@supports`.

<!-- AdSnippet -->

Obsah:

1. [Mřížka jako v Bootstrapu na pár řádcích kódu](#1)
2. [Pojmenované oblasti](#2)
3. [Umísťování prvků podle vzhledu, ne podle pořadí](#3)
4. [Náhradní řešení se @supports](#4)


## 1) Mřížka jako v Bootstrapu na pár řádcích kódu {#1}

Mřížka pro vodorovné rozvržení stránky je fajn. Současná řešení z Bootstrapu a jiných frameworků mají ovšem jednu nevýhodu – ohromné množství předgenerovaného CSS kódu. Ten musí stáhnout i ti uživatelé, kteří z frameworku využijí jen malinkou část.

Mřížku je ale možné definovat také v gridu:

```css
.row {
  /* 12 sloupců: */
  grid-template-columns: repeat(12, 1fr);
  /* Mezera mezi sloupci: */
  grid-column-gap: 30px;  
}  
```

Následovala by už jen deklarace pro rozvržení. Pokud bychom zůstali u názvosloví tříd Bootstrapu, byla by následující:

```css
.col-4 {
  grid-column: span 4;
}

.col-8 {
  grid-column: span 8;
}
```

Hodnota `span 4` znamená:

- začni na místě, kde jsi umístil poslední položku gridu (`span`)
- udělej layout přes `4` sloupce gridu

Podívejte se na to ještě v CodePenu:

CodePen: [vrdl.in/i2fpw](https://codepen.io/machal/pen/vzxYYN?editors=1100).

## 2) Pojmenované oblasti {#2}

U téhle vlastnosti gridu jsem nejprve zvedal obočí v podivování, k čemu taková blbost může být. Pak už jsem ho zvedal méně. No a teď už zvedám koutky úst v radosti z takové věci.

Je to tahák trnu z paty, které se velmi hodí při tvorbě složitějších vícerozměrných layoutů.

<!-- AdSnippet -->

Jdeme to zkusit na příkladu. Nejprve definujeme mřížku pro layout. Bude mít dva sloupce a tři řádky:

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

Opakování `"head head"` slouží k tomu, aby prohlížeč pochopil, že z našeho pohledu tyto pole layoutu zabírá jediná oblast.

Pak už jen říkáme, který prvek z DOMu kam patří:

```css
.head {
  grid-area: head;
}
```

Asi se hodí připomenout i jinou milou věc: gridu už pak moc nezáleží, kde je onen `.head` umístěný v HTML.

A je hotovo:

Odkaz na CodePen: [vrdl.in/dljik](https://codepen.io/machal/pen/ppVzrg?editors=1100).

## 3) Umísťování prvků podle vzhledu, ne podle pořadí {#3}

Tady se podívejme nejprve na CodePen: [vrdl.in/7x0gv](https://codepen.io/machal/pen/NMyjpb?editors=1100).

Zvětšujte a zmenšujte si šířku části „Result“ a všimněte si, jak černá položka mění pořadí. Někdy je čtvrtá, někdy pátá.

Ano, tohle dělá grid automaticky. Jen je potřeba mu to nakázat:

```css
.wrapper {
  grid-auto-flow: dense;
}
```

Hodnota `dense` vlastnosti `grid-auto-flow` zajistí „zahuštěné“ vyskládání položek. Algoritmus v tomto případě dá přednost zaplnění plochy před pořadím v kódu.

V CodePenu si všimněte i jiné zajímavé deklarace:

```css
.wrapper {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
```

Hned si to vysvětíme:

- [Funkci `repeat()`](css-repeat.md) už znáte – generuje určitý počet položek, tady sloupečků gridu.
- `auto-fill` – když dostane volný prostor, vloží novou prázdnou buňku.
- [Funkce `minmax()`](css-minmax.md) definuje šířku položky mezi určitými hranicemi.
- `1fr` je [„fraction unit“](css-jednotka-fr.md). Je to v principu totéž jako „bezjednotkové“ míry ve flexboxu – například `flex:1`.

CodePen: [vrdl.in/7x0gv](https://codepen.io/machal/pen/NMyjpb?editors=1100).

## 4) Náhradní řešení se @supports {#4}

Problém předchozího příkladu (stejně jako skoro všech příkladů s gridem) je v tom, že v MSIE 11 nebudou fungovat.

Nevadí! Vezmeme si na pomoc závináčové [pravidlo `@supports`](css-supports.md), které nativním způsobem detekuje podporu moderních CSS vlastností v prohlížečích.

Navrhneme nejprve zjednodušené řešení pomocí flexboxu:

```css
.wrapper {
  display: flex;
  flex-wrap: wrap;
}  
```

Načež jej upravíme pro prohlížeče, které grid zvládají:

```css
@supports (display: grid) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 10px;
    grid-auto-flow: dense; 
  }  
}
```

Hotovo. Nějaký layout se teď zobrazí v prohlížečích s podporou gridu i bez ní.

Celá ukázka:

CodePen: [vrdl.in/nt2bs](https://codepen.io/machal/pen/NLpWXY?editors=1100).

Takhle půjde udělat spousta fallbacků pro naše řešení s gridem. Takže se nebojte a začněte ho směle používat.

Máte další tipy na hezká řešení pomocí gridu? Sem s nimi!

<!-- AdSnippet -->
