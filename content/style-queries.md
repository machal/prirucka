# CSS Style Queries

Sotva jsme na svět praktického CSS přivítali výborné [Container Queries](container-queries.md), přichází další novinka. CSS Style Queries umožňují ptát se v na vypočtené hodnoty CSS vlastností a podle toho změnit styl elementu.

Podobně jako Container Queries, Style Queries jsou v současné době ve fázi návrhu a ještě není jasné, jak se bude jejich implementace a podpora v prohlížečích vyvíjet.

Container i Style Queries vycházejí ze specifikace [CSS Containment Module Level 3](https://drafts.csswg.org/css-contain-3/#style-container), která je ovšem v definici Style Queries zatím trochu skoupá.

<figure>
<img src="../dist/images/original/style-queries.jpg" width="1600" height="900" alt="Style Queries, dotazy na styl">
<figcaption markdown="1">
*Někdy stačí jenom se zeptat. Style Queries nám snad už brzy odpoví.*
</figcaption>
</figure>

Jisté je, že jednu část dotazů na styl právě teď implementovali autoři Chrome. Proto o téhle novince také píšu.

## Příklad {#priklad}

Zkusme si to popsat na možná ne úplně praktickém, ale o to více jednoduchém příkladu:

```css
.box {
  background: lightgray;
}

@container style(font-weight: bold) {
  .box {
    background: gray;
  }
}
```

Výsledkem je, že element s třídou `.box` bude mít šedou barvu pozadí. Ale to jen v případě, že je vlastnost `font-weight` nastavena na tučné, tedy `bold`.

## Co byste o Style Queries měli vědět? {#vice}

V úvodním odstavci jsem zmiňoval _vypočtené_ hodnoty CSS vlastnosti. To je důležité a taky odlišné od Container nebo Media Queries:

- Dotazem `@container (min-width: 420px)` se ptáte na vykreslovanou velikost.
- Dotazem `@container style(min-width: 420px)` se ptáte na vypočtenou hodnotu.

Není to to samé, protože do vypočtené hodnoty promítá také [dědičnost](css-dedicnost.md) nebo další vlastnosti [kaskády v CSS](css-kaskada.md), což činí Style Queries ještě zajímavějšími.

Syntaxe a logika kombinování prvků do dotazu na styl je stejná jako u dotazů na [podporu vlastností CSS, viz `@supports`](css-supports.md).

Dále platí, že Style Queries teoreticky vznikají při základním typu [containmentu v CSS](css-contain.md), takže nebudete muset definovat `container-type`, jako to děláte u Container Queries.

## Podpora a aktuální implementace v Chrome {#podpora}

O možné podpoře ze strany Firefoxu a Safari se mi nic moc zjistit nepodařilo. Šance na brzkou implementaci není malá, protože [prohlížeče se snaží domlouvat](https://www.vzhurudolu.cz/blog/215-webexpo-2022-prohlizece) a tedy lze předpokládat, že i dotazy na styly patří do dohodnotých priorit.

V době psaní tohoto textu lidé z Googlu oznámili, že [Style Queries přistanou do Chrome 111](https://developer.chrome.com/blog/style-queries/).

<!-- AdSnippet -->

Dobrou zprávou je, že implementaci uvidíme rovnou v produkčním prohlížeči, nikoliv jen Canary verzi.

Horší zprávou je, že implementace se zaměřuje jen na určitou část Style Queries, a to dotazy na hodnoty [autorských vlastností neboli proměnných](css-promenne.md).

## Příklad s autorskými vlastnostmi {#priklad-autorske-vlastnosti}

Toto je jediná ukázka, která mi aktuálně v prohlížeči funguje.

Řekněme, že se snažím o stylování boxů podle hodnoty custom property `--theme`. Řekněme, že to dělám tímto způsobem právě proto, že bych rád využil dědičnosti v CSS a autorskou vlastnost `--theme` chci měnit na různých místech kódu.

HTML vypadá takto:

```html
<div class="container" style="--theme: normal">
  <div class="box">
    <p>Lorem ipsum…</p>
  </div>
</div>

<div class="container" style="--theme: colorful">
  <div class="box">
    <p>Lorem ipsum…</p>
  </div>
</div>
```

Důležitá část CSS je pak tahle:

```css
@container style(--theme: colorful) {
  .box {
    background: #f2f0ec;
    border: 1px solid red;
  }
}
```

Omluvte jednoduchost ukázky, snažím se tady totiž hlavně ukázat, jak to funguje. A že to funguje. Stačí si otevřít aktuální Chrome Canary nebo běžný Chrome od verze 111.

CodePen: [cdpn.io/e/ExeNoKE](https://codepen.io/machal/pen/ExeNoKE?editors=1100)

K čemu to může být dobré? Nestačí pro tyhle účely prostě přidat třídu a je to? Ano, někdy by to šlo vyřešit třídou, ale znovu připomínám, že trik je v dotazu na vypočtenou hodnotu vlastnosti. A ta může být změněná v rámci CSS kaskády libovolným způsobem.

## Další příklady a další zdroje {#zdroje}

Tenhle text berte jako úvodní výkop. V jeho dalších iteracích to popíšu podrobněji, ale raději si počkám na další rozvoj specifikace a podpory v prohlížečích. Jsme prostě zase na začátku a asi bychom měli být spíše opatrní.

<!-- AdSnippet -->

Pro inspiraci přidávám asi nejzajímavější [text o Style Queries od Uny Kravets](https://una.im/style-queries/). Jsou tam velmi zajímavé ukázky praktického využití dotazů na styl:

- Přenos nedědičných vlastností (jako `border`) na potomka.
- Seskupování vlastností pro určitý stav do jednoho místa.
- Interaktivní změna vzhledu pomocí Style Queries.
- Kombinování více dotazů na styl.

Myslím, že Style Queries budou dalším střípkem do mozaiky snadnějších řešení některých specifických situací. Těším se na další vývoj. Co vy?

Napište mi svůj názor do komentářů.

(Ano, na Vzhůru dolů jsou teď už zase komentáře.)
