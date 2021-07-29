# CSS vlastnost flex-flow: zkratka pro určení směru a zalamování flexboxu

Vlastnost `flex-flow` je zkratkou pro dvě už dříve uváděné:

- [`flex-direction`](css-flex-direction.md) – směr vykreslování flexboxového rozvržení.
- [`flex-wrap`](css-flex-wrap.md) – zalamování položek layoutu na více řádků.

<div class="related web-only" markdown="1">
- [Flexbox](css-flexbox.md)
</div>

V obecné rovině je zápis následující:

```css
flex-flow: <hodnota flex-direction> <hodnota flex-wrap>;
```

Vzhledem k tomu, že obě vlastnosti používají jiná klíčová slova pro své hodnoty, je možné je uvádět v libovolném pořadí a samozřejmě úplně v klidu jednu z nich vynechat.

<!-- AdSnippet -->

<div class="web-only" markdown="1">

Níže to v textu rozebereme více, ale obrázky napoví. Jako vždy. Nejprve k `flex-direction`.

<figure>
<img src="../dist/images/original/vdlayout/css-flex-direction.png" width="1600" height="900" alt="CSS vlastnost flex-direction">
<figcaption markdown="1">
*Vlastnost `flex-direction` přikáže flexboxovému rozvržení směr vykreslování.*
</figcaption>
</figure>

A co vlastnost `flex-wrap`? Tramtadadá, tady ji máme!

<figure>
<img src="../dist/images/original/vdlayout/css-flex-wrap.png" width="1600" height="900" alt="CSS vlastnost flex-wrap">
<figcaption markdown="1">
*Bude se to zalamovat, a pokud ano jakým směrem? Tomu velí vlastnost `flex-wrap`.*
</figcaption>
</figure>

<!-- .web-only -->
</div>

Toto jsou příklady možných hodnot:

- `column`  
Jako `flex-direction:column`. Položky flexboxu se skládají do sloupce.
- `wrap`  
Odpovídá `flex-wrap:wrap`. Kontejner flexboxu umožní položkám, aby se zalomily na další řádek.
- `column wrap`  
Ekvivalentní k `flex-direction:column; flex-wrap:wrap`.
- `row-reverse wrap`  
Ekvivalentní k `flex-direction:row-reverse; flex-wrap:wrap`.

Všechno je to dobře vidět v online ukázce na CodePenu, kde si také můžete měnit velikost písma, šířku viewportu nebo to jinak rozbíjet a přitom se to všechno naučit.

CodePen: [cdpn.io/e/JjReqbB](https://codepen.io/machal/pen/JjReqbB?editors=0000)

## Podpora v prohlížečích {#podpora}

Podpora vlastnosti `flex-flow` je přímo luxusní. Podívejte se na CanIUse a uvidíte samá zelená políčka, včetně Internet Exploreru. [CanIUse.com](https://caniuse.com/mdn-css_properties_flex-flow)

Jedinou pihou krásy je kombinace hodnot `display:inline-flex` a `flex-flow: column wrap`, nepříliš známá a nepříliš omezující chyba, kterou jsme se zabývali už [u vlastnosti `flex-direction`](css-flex-direction.md).

<!-- AdSnippet -->
