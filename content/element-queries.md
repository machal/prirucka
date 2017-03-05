# Element Queries

[Element Queries](http://elementqueries.com/) (nebo [Container Queries](https://alistapart.com/article/container-queries-once-more-unto-the-breach)) je věc, kterou ve webdesignu děsně chci. Věřte mi, že vy taky. Není ale jisté, že se toho v dohledné době dočkáme.

Jsou to vlastně dotazy jako [Media Queries](css3-media-queries.md). Jen se neptáte na parametry okna prohlížeče, ale na parametry samotného elementu. 

<!-- AdSnippet -->

Pokud design udržujete v nějakém [systému komponent](pattern-lab.md), asi budete souhlasit, že výška a šířka komponenty jsou pro změnu layoutu nebo chování daleko důležitější údaje než šířka nebo výška okna prohlížeče. Myslím, že bychom tím Media Queries mohli skoro úplně nahradit.

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

Nebo si představte CSS jednotku obsahující procento z výšky rodiče. Věc, o které jsem [tady nedávno snil](reseni-elasticka-typografie.md) pro potřeby plnohodnotné elastické typografie:

```css
@element ".item" {
  /* Velikost písma je 10 % výšky rodiče */
  $this {
    font-size: 10eh;
  }
}
```

Ukázky jsou zapsány syntaxí [EQCSS](http://elementqueries.com/). Mrkněte se na příklady, které uvádějí. Jsou boží, viďte?

EQCSS je jedna z javascriptových implementací konceptu. Ano, *javascriptových*. Tím se zároveň dostáváme k jádru problému. Bude to dělat potíže ve dvou směrech: 

- *Výkon*. Překreslovaní pomocí JS bude prostě vždy pomalejší. 
- *Fallbacky*. Stačí si představit situaci, kdy na webu selže Javascript. Nebo kdy chvilku trvá, než se knihovna načte. 


Bude to prostě křehké jako babiččina váza. Kde tedy vězí CSS standard pro tak skvělou věc?


## Proč pro to ještě není ani standard?

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

Tab Atkins v odkazovaném článku zmiňuje jinou cestu: pro komponenty použít nový element typu `<iframe>`. Ten totiž nastavuje nový viewport, ve kterém lze použít standardní Media Queries.  

<!-- AdSnippet -->

Jenže u dnešního `<iframe>` nepotřebuje prohlížeč čekat na jeho obsah. V případě „iframe“ pro Element Queries by čekat musel: nejde o externí dokumenty, ale komponenty, přirozenou součást layoutu webu. 

Prohlížeč by si nanečisto vykreslil stránku, pak nanečisto vykreslil „iframy“. Ty by mu ovlivnily stránku, kterou by vykreslil a pak znovu spustil CSS na „iframech“. Prostě by to vykreslovací proces dost zpomalilo. 

Úvahy z Atkinsova článku směřují k nějakému způsobu zápisu stylů do HTML, podobně jako [u atributu `sizes`](srcset-sizes.md)… To by ale pro nás autory bylo dost nepříjemé, protože se dnes vší silou snažíme dosáhnout toho, abychom měli styly na jedno místě.

No jasně, Element Queries všichni chtějí, takže se to snad jednou podaří vyřešit. Už ale rozumím tomu, proč to v prohlížečích dávno není.

## Prozatím alespoň ty javascriptové implementace…

Pár odkazů na ně:

- [EQCSS: Element Queries](http://elementqueries.com/) od Tommyho Hodginse
- [CSS Element Queries](http://marcj.github.io/css-element-queries/) od  Marca J. Schmidta
- [Elementary](https://github.com/filamentgroup/elementary) od Scotta Jehla
- [EQ.js](https://github.com/Snugug/eq.js) od Sam Richards

Na menších projektech může být fajn si s tím hrát, ale  na použití na rozumně velkých webech bych si z výše uvedených důvodů netroufl. Za vaše zkušenosti v komentářích budu vděčný.

