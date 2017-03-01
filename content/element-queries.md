# Element Queries

[Element](http://elementqueries.com/) (nebo [Container](https://alistapart.com/article/container-queries-once-more-unto-the-breach)) Queries je věc, kterou ve webdesignu děsně chci. A věřte mi, že vy taky. 

Jsou to vlastně dotazy jako [Media Queries](css3-media-queries.md). Jen se neptáte na parametry okna prohlížeče, ale na parametry nejbližšího rodiče. 

Pokud design udržujete v nějakém [systému komponent](pattern-lab.md), asi budete souhlasit, že parametry rodiče komponenty jsou daleko důležitější než šířka nebo výška okna prohlížeče. Myslím, že bychom tím mohli Media Queries skoro úplně nahradit.

Vezměte třeba dotaz na šířku komponenty a změnu layoutu podle ní:

```css
.item {
  display: flex;  
  flex-direction: column;
}

@element ".item" and (min-width: 300px) {
  $this {
    flex-direction: row;
  }
}
```

Nebo třeba jednotku obsahující procento z výšky rodiče. Věc, o které jsem [tady nedávno snil](reseni-elasticka-typografie.md):

```css
@element ".item" {
  /* Velikost písma je 10 % výšky rodiče */
  $this {
    font-size: 10eh;
  }
}
```

Ukázky jsou se syntaxí [EQCSS](http://elementqueries.com/), jedné z javascriptových implementací konceptu.

Ano, javascriptových. Tím se zároveň dostáváme k jádru problému. Bude to problematické ve dvou směrech: 

- *Výkon*. Překreslovaní pomocí JS bude prostě vždy náročnější. 
- *Fallbacky*. Stačí si představit situaci, kdy na webu selže Javascript. Nebo kdy chvilku trvá, než se knihovna načte. Bude to prostě křehké jako babiččina váza.


## Jak to bude s nativní implementací?

*TODO*
