# CSS flexbox: co je dobré o něm vědět

## 1. Flex je nová hodnota vlastnosti display

Na tomto bodu není na první pohled nic nového. Vyplývá z toho ale, že na rodičovský kontejner ani jeho potomci nebudou mít účinek vlastnosti související s jinými zobrazovacími režimy [vlastnosti `display`](css-display.md) – `block`, `inline`, `inline-block` a dalšími. Typický příklad jsou vlastnosti `float`, `clear` nebo `vertical-align`.

## 2. Položky flexboxu neslučují vnější okraje

V kontextu flexboxového rozvržení platí, že na rozdíl od blokových elementů se u sousedících flex položek neslučují vnější okraje, jež jsou dané vlastností `margin`.

## 3. Položky flexboxu lze pozicovat

Pozicování prvků vlastností `position` a hodnotami `absolute`, `relative`, `fixed` lze na rozdíl od vlastností souvisejících s `float` na flexboxové položky běžně aplikovat.

## 4. Směr hlavní osy flexboxu řídí jazyk rozhraní

Směr hlavní osy flex kontejneru vychází vždy z vlastnosti `writing-mode`. Pokud bychom tedy flexboxem dělali layout stránky v arabštině, budou hodnoty zmíněné ve vlastnostech jako [`flex-direction`](css-flex-direction.md) naopak.

## 5. S visibility:collapse pracuje flexbox jako se řádky tabulky

Taková drobnost na závěr. `visibility:collapse` funguje stejně jako u hodnoty `hidden` s výjimkou tabulek a flexboxu. U flex položek (stejně jako u elementů s `display:table-row` nebo `table-column`) prostě prvek není vidět, ale drží se mu místo a v DOMu se s ním počítá.

<div class="ebook-only" markdown="1">

A teď už se pojďme podívat na jednotlivé vlastnosti flexboxu.

</div>
