# CSS preprocesory

LESS, SASS a další preprocesory frontendistům zjednodušují práci s CSS. Jedná se o jazyky postavené nad CSS. Přidávají do něj nové vlastnosti nebo zjednodušují organizaci kódu. Už na vývojářově pracovní stanici jsou pak kompilovány do CSS, aby kódu rozuměly prohlížeče.


## Vlastnosti preprocesorů

### Proměnné

Znáte je z imperativních programovacích jazyků a možná byste nevěřili, jak moc mohou být užitečné v CSS.

Aktivní barvu ve své implementaci frameworku Bootstrap změním jednoduše předeklarováním na vyšší úrovni. Zápis v LESSu:

```less
@brand-primary: #428bca;
@import "bootstrap/bootstrap";
```

Konkurenční framework Foundation má zase v proměnné `$medium-up` uložen celý dotaz na média a nemusíte jej tedy psát pořád znova. Zápis v preprocesoru SASS:

```scss
$medium-up: "only screen and (min-width: 40em)";
@media #{$medium-up} {
  // Kód pro viewporty od šířky 40em
}
```


### Zanořování

```less
.nav {
  // …

  @media only screen and (min-width: 768px) {
    width: 25%;
  }
}
```

Zkompiluje do:

```css
@media only screen and (min-width: 768px) {
  .nav {
    width: 25%;
  }
}
```

Vypadá to jako zbytečnost, ale je to jeden z důvodů, proč jsem CSS preprocesory začal používat já. V CSS se ve většině prohlížečů Media Queries zanořovat nedají a to trochu svádí k organizaci kódu přes Media Queries. Výhodnější je vždy organizace přes komponenty. V příkladu výše tedy bude hlavní organizační jednotkou modul `.nav` a Media Queries budou zanořené v něm. To chceme.

### Mixiny

I vaše CSSko je plné opakujícího se kódu. Proto se mixiny dnes ukazují už v každé kodérské školce. Jde o pojmenovaný kus kódu, který používáte na různých místech pouhým voláním názvu.

Klasické použití neparametrické mixiny pro ukončení obtékání (LESS):

```less
.clearfix() {
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}

.el {
  .clearfix;
}
```

Zkompiluje do:

```css
.el:before,
.el:after {
  content: " ";
  display: table;
}
.el:after {
  clear: both;
}
```

Mixiny ovšem mohou mít také parametry, to je teprve legrace!

### @import

Pokud importujete parciální komponentu napsanou v preprocesoru, nechová se `@import` tak, jak jste zvyklí z CSS, kde vytváří requesty navíc. A requesty bolí, protože zpomalují načítání stránky, hlavně na mobilních zařízeních.

```less
@import "module.less";
```

Pokud importujeme běžný CSS soubor, preprocesory ve zkompilovaném kódu zachovají direktivu @import. Toto chování můžeme změnit nastavením vlastnosti LESS:

```less
@import (less) "fancybox.css";
```


### Další vlastnosti

Preprocesory mají mnoho a mnoho dalších vlastností. Podívejte se na ně:

- [lesscss.org/features](http://lesscss.org/features/)
- [sass-lang.com/guide](http://sass-lang.com/guide)

Každá složitější vlastnost ale komplikuje srozumitelnost CSS kódu. Osvědčilo se mi trvat na jednodušším kódu a z preprocesorů si brát jen ty nejdůležitější vlastnosti. Pokud pracujete v týmu, je jednoduchost CSS obzvlášť důležitá.

### Jaký preprocesor zvolit?

Když to hodně zjednoduším, mám dvě rady:

* Pokud s preprocesory začínáte nebo jste kodér a píšete hlavně CSS, zvolte LESS.
* Pokud jste programátor a píšete i JavaScript nebo třeba PHP, zvolte SASS.

Složitější text o výběru jsem dříve sepisoval na blog – [vrdl.cz/blog/15-css-preprocesory-4](http://www.vzhurudolu.cz/blog/15-css-preprocesory-4).

Není ovšem potřeba výběr příliš prožívat. Přechod od jednoho preprocesoru k druhému většinou moc bolestivý není.


## Nevýhody CSS preprocesorů

- Až moc silný nástroj – odklon od tuposti CSS a příliš mnoho abstrakce sice vede k propracovanému, někdy až imperativnímu kódu, zároveň ale často špatně čitelnému a spravovatelnému. Znáte to přísloví o dobrém sluhovi, ale špatném pánu, že ano?
- Proprietární kód – pokud preprocesory využíváte „tupě“, jsou zaučení nového člověka nebo přechod na jiný preprocesor relativně jednoduché; horší je to ovšem v kombinaci v prvním bodem.

Myslím, že minimálně některé z úkolů, jež nyní řeší preprocesory, časem přejdou do následného zpracování kódu. V dalším textu si proto nenechte ujít kapitolu o postprocesingu.
