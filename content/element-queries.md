# Element Queries: proč je chceme a proč je jen tak nedostaneme

[Element Queries](http://elementqueries.com/) (nebo [Container Queries](https://alistapart.com/article/container-queries-once-more-unto-the-breach)) jsou vlastně stejné typy dotazů jako [Media Queries](css3-media-queries.md). Jen se neptáte na parametry okna prohlížeče, ale na parametry samotného elementu. 

Je to věc, kterou ve webdesignu opravdu hodně chci. A věřte mi, že vy taky. 

Zatím je Element Queries možné jen emulovat javascriptovými knihovnami. A bohužel není jisté, že se standardu, natož nějaké nativní implementace v dohledné době dočkáme. 

<!-- AdSnippet -->

Pokud design udržujete v nějakém [systému](pattern-lab.md), asi budete souhlasit, že parametry samotné komponenty jsou pro změnu layoutu nebo chování daleko důležitější než parametry okna prohlížeče. Myslím, že bychom tím Media Queries mohli skoro úplně nahradit.

Vezměte třeba dotaz na šířku komponenty a změnu layoutu podle ní:

```css
.item {
  display: flex;  
  flex-direction: column;
}

/* Od šířky 20em naskládej položky vedle sebe: */
@element ".item" and (min-width: 20em) {  
  $this {
    flex-direction: row;
  }
}
```

Nebo si představte CSS jednotku obsahující procento z výšky rodiče. Věc, o které jsem [tady nedávno snil](reseni-elasticka-typografie.md) pro potřeby plně elastické typografie:

```css
@element ".item" {
  /* Velikost písma je 10 % výšky rodiče */
  $this {
    font-size: 10eh;
  }
}
```

Ukázky jsou zapsány syntaxí [EQCSS](http://elementqueries.com/). Mrkněte se na příklady, které v dokumentaci uvádějí. Jsou boží, fakt.

EQCSS je jedna z javascriptových implementací konceptu. Ano, *javascriptových*. Tím se zároveň dostáváme k jádru problému. Bude nám to dělat potíže minimálně ve dvou směrech: 

- *Výkon*. Překreslovaní pomocí JS bude prostě vždy pomalejší. 
- *Fallbacky*. Stačí si představit situaci, kdy na webu selže Javascript. Nebo kdy chvilku trvá, než se knihovna načte. 


Javascriptové implementace jsou křehké jako váza po prababičce. Kde tedy vězí CSS standard pro tak skvělou věc?


## Chcete standard? Zkuste si ho napsat

Kromě Javascriptových implementací existují i návrhy specifikací, ale žádná velká aktivita ve W3.org vidět není. Podle všeho totiž není úplně snadné takovou legraci vymyslet a v prohlížečích implementovat.

První implementační problém zmiňoval už před čtyřmi lety jeden z důležitých tvůrců CSS specifikace, [Tab Atkins](http://www.xanthir.com/b4PR0). Zacyklenou závislost. Tady by třeba prohlížeč skončil v nekonečné smyčce:

```css
@element '.item' and (min‐width: 400px) {
  $this {
    width: 200px;
  }
}
@element '.item' and (max‐width: 300px) {
  $this {
    width: 500px;
  }
}
```

Představte si, že `.item` má šířku 500 pixelů. První pravidlo změní šířku `.item` na 200 pixelů, druhé zpět na 500, první znovu na 200 a tak dále…

[V jedné](https://tomhodgins.github.io/element-queries-spec/element-queries.html#self-referential-element-queries) z aktuálně navrhovaních specifikací se s tím snaží vypořádat tím, že prohlížeči v takovém případě radí aplikovat jen to první pravidlo.

Jak to ale pak budeme debugovat? Třeba na složitějších webech, které používají CSS více stran nebo když styly měníme dynamicky. Jak bychom poznali, proč naše pravidlo prohlížeč neakceptoval?

## Ale `<iframe>` a externí SVG umí Element Queries dávno, fňuk…

Tab Atkins v odkazovaném článku zmiňuje jinou cestu: pro komponenty použít nový element typu `<iframe>`. Ten totiž nastavuje nový viewport. A to si pište, že se Media Queries uvnitř `<iframe>` vztahují k aktuálním rozměrům elementu, nikoliv celého dokumentu. Starej páprda `<iframe>` nám to teď natřel. [Umí Element Queries](http://codepen.io/machal/pen/EWgXGz?editors=1100) už… no minimálně dvě století. 

<!-- AdSnippet -->

Stejně je na tom [SVG](svg.md) vložené do dokumentu externě, například pomocí `<img>` značky. I tamní Media Queries se odkazují k elementu samotnému, nikoliv celému dokumentu. [SVG už taky umí Element Queries](http://codepen.io/machal/pen/zZKzRe?editors=1100). Zásah. 

Jenže u dnešního `<iframe>` ani externího SVG nepotřebuje prohlížeč čekat na jejich obsah ani styly. Vykreslí si rodičovský dokument a po čase nějak došudlá obsah „ajfrejmů“ a externích vektorových dokumentů.

V případě běžných komponent uživatelského rozhraní by ale čekat musel. Nejde o žádné externisty, ale komponenty, přirozenou součást layoutu webu. 

Pokud by se to měly prohlíže naučit, musely by pracovat asi takto: 

1. Nanečisto by si spočítaly vzhled stránky. 
2. Nanečisto by si spočítaly vzhled komponent s Element Queries. Ty by ovlivnily vzhled stránky. 
3. Znovu by si spočítaly vzhled stránky.
4. Znovu by si spočítaly vzhled kompontent s EQ… 

Vykreslovací proces by to někdy dost zpomalilo. 

Úvahy z Atkinsova článku směřují k nějakému způsobu zápisu stylů do HTML, podobně jako [u atributu `sizes`](srcset-sizes.md)… To by ale pro nás autory bylo dost nepříjemné, protože se vší silou snažíme dosáhnout toho, abychom měli styly na jednom místě.

No jasně, Element Queries všichni chtějí, takže se to snad jednou podaří vyřešit. Už ale rozumím tomu, proč to v prohlížečích dávno není, takže mě to štve o trochu méně.

## Prozatím alespoň ty javascriptové implementace…

…a pár odkazů na ně:

- [EQCSS: Element Queries](http://elementqueries.com/) od Tommyho Hodginse
- [CSS Element Queries](http://marcj.github.io/css-element-queries/) od  Marca J. Schmidta
- [Elementary](https://github.com/filamentgroup/elementary) od Scotta Jehla
- [EQ.js](https://github.com/Snugug/eq.js) od Sam Richards

Zatím jsem zkoušel jen pár [demíček](http://codepen.io/machal/pen/XMmdWx) s EQCSS. Což o to, v demíčkách vypadá spousta věcí skvěle. I na menších projektech může být fajn si s tím hrát, ale  na použití na rozumně velkých webech bych si z výše uvedených důvodů netroufl. Za vaše zkušenosti budu vděčný.

