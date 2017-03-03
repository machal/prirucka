# Element Queries

[Element Queries](http://elementqueries.com/) (nebo [Container Queries](https://alistapart.com/article/container-queries-once-more-unto-the-breach)) je věc, kterou ve webdesignu děsně chci. A věřte mi, že vy taky. 

Jsou to vlastně dotazy jako [Media Queries](css3-media-queries.md). Jen se neptáte na parametry okna prohlížeče, ale na parametry samotného elementu. 

<!-- AdSnippet -->

Pokud design udržujete v nějakém [systému komponent](pattern-lab.md), asi budete souhlasit, že výška a šířka komponenty je daleko zajímavější údaje než šířka nebo výška okna prohlížeče. Myslím, že bychom tím Media Queries mohli skoro úplně nahradit.

Vezměte třeba dotaz na šířku komponenty a změnu layoutu podle ní:

```css
.item {
  display: flex;  
  flex-direction: column;
}

@element ".item" and (min-width: 20em) {
  /* Od šířky .item od 20em naskládej položky vedle sebe  */
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

Ukázky jsou zapsány syntaxí [EQCSS](http://elementqueries.com/), jedné z javascriptových implementací konceptu. Mrkněte se na příklady, které uvádějí. Jsou boží, viďte?

Ano, *javascriptových*. Tím se zároveň dostáváme k jádru problému. Bude to dělat potíže ve dvou směrech: 

- *Výkon*. Překreslovaní pomocí JS bude prostě vždy náročnější. 
- *Fallbacky*. Stačí si představit situaci, kdy na webu selže Javascript. Nebo kdy chvilku trvá, než se knihovna načte. 


Bude to prostě křehké jako babiččina váza. Kde teda vězí CSS standard pro takto skvělou věc?


## Proč je implementace těžká?

Kromě Javascriptových implementací existují i návrhy specifikací, ale ozvěna z W3.org moc vidět není. Vymyslet a implementovat takovou věc pro prohlížeče zjevně není úplně snadné.

Hlavní implementační problém zmiňoval už před čtyřmi lety jeden z důležitých tvůrců CSS specifikace, [Tab Atkins](http://www.xanthir.com/b4PR0). Zacyklenou závislost. Tady by třeba prohlížeč skončil v nekonečné smyčce:

```css
@element '.widget' and (min‐width: 400px) {
  $this {
    width: 200px;
  }
}
@element '.widget' and (max‐width: 300px) {
  $this {
    width: 500px;
  }
}
```

[V jedné](https://tomhodgins.github.io/element-queries-spec/element-queries.html#self-referential-element-queries) z aktuálně navrhovaních specifikací se s tím snaží vypořádat tím, že prohlížeči v takovém případě radí aplikovat jen to první pravidlo.

Jak to ale pak budeme debugovat? Třeba na složitějších webech, které používají CSS více stran? Nahlásí nám prohlížeč chybu do konzole?

Tab Atkins v odkazovaném článku zmiňuje jinou cestu: pro komponenty použít element typu `<iframe>`, které umí nastavit nový viewport, ve kterém lze použít standarní Media Queries. Jenže v případě `<iframe>` prohlížeč nepotřebuje čekat na jejich obsah. 

<!-- AdSnippet -->

V případě „iframe“ pro Element Queries by čekat musel, jde o komponenty a přirozenou součást layoutu webu. Prohlížeč by si nanečisto vykreslil stránku, pak nanečisto vykreslil „iframy“. Ty by mu ovlivnily stránku, kterou by vykreslil a pak znovu spustil CSS na „iframech“. Prostě by to vykreslovací proces dost zpomalilo. 

Úvahy z Atkinsova článku směřují k nějakému způsobu zápisu stylů do HTML, podobně jako [u atributu `sizes`](srcset-sizes.md)…

No, jasně, Element Queries všichni chtějí, takže se to snad jednou podaří vyřešit. Už ale rozumím tomu, proč to nemáme hned.

## Prozatím alespoň ty javascriptové implementace…

Pár odkazů na ně:

- [EQCSS: Element Queries](http://elementqueries.com/) od Tommyho Hodginse
- [CSS Element Queries](http://marcj.github.io/css-element-queries/) od  Marca J. Schmidta
- [Elementary](https://github.com/filamentgroup/elementary) od Scotta Jehla
- [EQ.js](https://github.com/Snugug/eq.js) od Sam Richards

Na menších projektech může být fajn hrát si s Javascriptovými implementacemi, ale u na rozumně velkých webech bych si netroufil. Za vaše zkušenosti v komentářích budu vděčný.

