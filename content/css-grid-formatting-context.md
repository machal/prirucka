# Formátovací kontext mřížky v CSS

Další teoretická znalost o CSS Gridu, která se nám může velmi hodit, je formátovací kontext (grid formatting context).

Každá hodnota vlastnosti `display` totiž zapíná nový způsob zacházení s prvky uvnitř nebo také vztahy prvku a jeho okolí.

Tak jako `display:block` má od časů CSS 2.1 svůj *block formatting context*, CSS Grid má také svůj vlastní.

Co se tedy v prohlížečích stane pěkného – nebo pro někoho nepěkného – když napíšeme `display:grid` nebo `display:inline-grid`?

## Svislé vnější okraje se neslučují. Chválabohu

Hodnoty vlastnosti `margin` sezhora a zdola se neslučují s hodnotami sousedních prvků. To, co znáte z blokových elementů, ve světě CSS Gridu neplatí. 

Je to logické. Mřížka má tvořit rozvržení prvků stránky a při takové práci by nám slučování vnějších okrajů působilo ještě větší trable než nám působí u blokových prvků.

## Floaty nechte plavat

Pro formátovací kontext mřížky platí, že:

* Vlastnosti `float` a `clear` nemají žádný efekt na položky mřížky. Radši si ani nepředstavuji, co by vývojáři dělali, kdyby tomu tak nebylo.
* Plovoucí prvky (např. `float:left`), nijak nevstupují do kontejneru mřížky. Sousedící kontejner mohou posunout, zmenšit, ale nikdy nevstoupí dovnitř, aby rozbily položky.

Brrr! Raději pojďme od „floatů“ pryč. Začalo se mi dělat nevolno…

## Vlastnost `vertical-align` nemá na položky mřížky žádný efekt

Bodejť by měla. `vertical-align` slouží ke svislému zarovnání typografie. Pro zarovnání v mřížce zde máme úžasné vlastnosti, o kterých bude ještě řeč.

## Pseudoelementy `::first-line` and `::first-letter` u kontejnerů mřížky nefungují

Opět platí, že to je naprosto logické. Tyto vlastnosti dávají smysl u typografických bloků. Grid je pánbůh přes layout, nikoliv psaný text.

Pokud byste chtěli vidět tohle všechno v akci, neváhejte se podívat na můj CodePen, ve kterém jsem se Grid pokusil rozbít všemi zde uvedenými způsoby. A byl jsem neúspěšný.

CodePen: [cdpn.io/e/GRoJmgN](https://codepen.io/machal/pen/GRoJmgN?editors=1100)

## A co pozicování?

Úplně to sem nepatří, ale pozicování funguje dobře. Pozicovat můžete samotný grid kontejner, ale i jeho položky, pokud z kontejneru uděláte takzvaný *containing block* pomocí `position:absolute`. Vyzkoušel jsem to za vás.

*TODO více info a obrázek*

CodePen: [cdpn.io/e/qBbdmrd](https://codepen.io/machal/pen/qBbdmrd?editors=1100)

