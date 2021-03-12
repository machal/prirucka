# Podpora flexboxu, gridu a vícesloupcového layoutu

O podpoře v prohlížečích budeme více psát v jedné z následujících kapitol.

Tady to vezmeme alespoň stručně, protože je dobré vyložit karty na stůl už během seznamování s tématem.

Podpora všech tří systémů rozvržení je v dnešních prohlížečích víceméně výborná.

<figure>
<img src="../dist/images/original/css-layout-podpora-celkem.png" width="1600" height="450" alt="Podpora flexboxu, gridu, multicol z CanIUse">
<figcaption markdown="1">
*Čím více zelené, tím více podpory. Zelenohnědá značí, že daný prohlížeč má nějaký problém. Zdroj: [CanIUse.com](https://caniuse.com/).*
</figcaption>
</figure>

Flexbox, grid nebo vícesloupcový layout se na nás z CanIUse směje zeleně.

Trošku nás zlobí Internet Explorer v poslední verzi 11, u gridu nás zlobí více.

Co konkrétně znamenají ty zelenohnědé obdélníky?

- U flexboxu máme prakticky plnou podporu, jen v IE 11 si musíme dát pozor na celou řadu chyb.
- CSS grid je v IE 11 složitě použitelný, protože podporuje jinou syntaxi a pouze menší podmnožinu vlastností mřížky.
- Podpora vícesloupcového layoutu je naopak v Exploreru výborná. Moderní prohlížeče si ale většinou  hůř rozumějí s [vlastnostmi `break-*`](css-multicol-break.md), určenými pro ovládání zalamování vnitřních prvků do sloupců.

Toto všechno více rozebírám v textu [o podpoře systémů CSS layoutu](css-layout-bugy.md) další kapitoly a pak u jednotlivých vlastnostností v kapitolách referenčních příruček.
