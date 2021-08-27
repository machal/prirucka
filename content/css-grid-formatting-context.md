# Formátovací kontext CSS gridu

Formátovací kontext (grid formatting context). To je další teoretická znalost o mřížce, která se nám může velmi hodit.

Každá hodnota [vlastnosti `display`](css-display.md) totiž zapíná nový způsob zacházení s potomky prvku a může měnit vztahy prvku a jeho okolí.

Tak jako `display:block` má od časů CSS 2.1 svůj *block formatting context*, CSS grid má také jeden. Pojem *grid formatting context* vás tedy nejspíš nepřekvapí.

Co se v prohlížečích stane pěkného (nebo pro někoho nepěkného) když napíšeme `display:grid` nebo `display:inline-grid`?

## Svislé vnější okraje se neslučují. Chválabohu

Hodnoty vlastnosti `margin` shora a zdola se neslučují s hodnotami sousedních prvků. To, co znáte z blokových elementů, ve světě CSS gridu neplatí.

Je to logické. Mřížka slouží k rozvržení prvků na stránce. Při této čiinnosti by nám slučování vnějších okrajů působilo ještě větší trable než nám působí u blokových prvků.

Chcete ukázku? Vezměme, že máme dva bloky se třemi vnitřními položkami. Každá položka má tento předpis v CSS:

```css
.item {
  margin: 1em 0;
}
```

Výsledek se různí podle formátovacího kontextu:

- `display:block` slučuje svislé okraje, takže mezi položkami je shora i zdola mezera jen `1em`.
- `display:grid` naproti tomu okraje neslučuje, takže mezi jednotlivými .`.item` tvoří mezeru dvakrát `margin`, tedy `2em`.

<p><img src="../dist/images/original/vdlayout/margins-display-block-grid.png" width="1920" height="540"  alt="Marginy se v CSS gridu neslučují"></p>

Zájemci o více informací nechť prozkoumají následující živou ukázku.

CodePen: [cdpn.io/e/GRobVpz](https://codepen.io/machal/pen/GRobVpz?editors=1100)

## Floaty nechte plavat

Ano, s plovoucími prvky v gridu neuspějete. Pro formátovací kontext mřížky platí, že:

- Vlastnosti `float` a `clear` nemají žádný efekt na položky mřížky. (Radši si ani nepředstavuji, co by vývojáři dělali, kdyby tomu tak nebylo.)
- Plovoucí prvky (např. `float:left`), nijak nevstupují do kontejneru mřížky. Sousední kontejner mohou posunout, zmenšit, ale nikdy nevstoupí dovnitř, aby rozbily položky.

Brrr! Raději pojďme od „floatů“ pryč. Začalo se mi dělat nevolno…

## Vlastnost `vertical-align` nemá na položky mřížky žádný efekt

`vertical-align` slouží ke svislému zarovnání textového obsahu. Pro zarovnání v mřížce zde máme jiné úžasné vlastnosti, o kterých bude ještě řeč – [CSS Box Alignment](css-box-alignment.md).

## Pseudoelementy `::first-line` and `::first-letter` u kontejnerů mřížky nefungují

I tohle je naprosto logické. Pseudoelementy pro první řádek a první znak dávají smysl u typografických bloků. Jenže grid je šéf přes layout, nikoliv psaný text.

Pokud byste chtěli vidět tohle všechno v akci, neváhejte se podívat na můj CodePen, ve kterém jsem se grid pokusil rozbít všemi zde uvedenými způsoby. A byl jsem neúspěšný.

CodePen: [cdpn.io/e/GRoJmgN](https://codepen.io/machal/pen/GRoJmgN?editors=1100)

## A co pozicování?

Úplně to sem nepatří, ale je možné, že se vám tahle otázka vynořila v hlavě. vlastnost `position` funguje dobře, děkuji za optání.

Pozicovat můžete samotný grid kontejner, ale i jeho položky, pokud z kontejneru uděláte takzvaný *containing block* pomocí `position:absolute`.

Vyzkoušel jsem to za vás, protože jsem byl zvědavý:

<p><img src="../dist/images/original/vdlayout/css-grid-position.png" width="1920" height="540"  alt="CSS grid a vlastnost position"></p>

CodePen: [cdpn.io/e/qBbdmrd](https://codepen.io/machal/pen/qBbdmrd?editors=1100)

To je myslím vše, co jste o formátovacím kontextu gridu potřebovali vědět.
