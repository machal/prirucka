# Co je dobré si o flexboxu zapsat za uši

## 1. `flex` je nová hodnota vlastnosti `display`

To už jste asi pochopili z kontextu. Ale vyplývá z toho, že na rodičovský kontejner ani jeho potomky nelze aplikovat vlastnosti související s jinými zobrazovacími režimy [vlastnosti `display`](css-display.md) – `block`, `inline`, `inline-block` a dalšími.

Typický příklad jsou vlastnosti `float`, `clear` nebo `vertical-align`. Přesněji řečeno – uvedené vlastnosti aplikovat lze, jen nebudou mít v prohlížečích s podporou flexboxu žádný účinek.

## 2. Flex položky neslučují vnější okraje

S předchozím bodem souvisí i to, že na rozdíl od blokových elementů se u sousedících flex položek neslučují vnější okraje – dané vlastností `margin`.

## 3. Flex položky lze pozicovat

Pozicování prvků vlastností `position` a hodnotami `absolute`, `relative`, `fixed` lze na rozdíl od vlastností souvisejících s `float` na flex položky běžně aplikovat.

## 4. S `visibility:collapse` flexbox pracuje jako se řádky tabulky

`visibility: collapse` funguje u flex položek stejně jako u `display: table-row` nebo `table-column` elementů. A to tak, že element okupuje místo a v DOMu se s ním počítá, jen není vidět.

## 5. Směr hlavní osy flexboxu řídí jazyk rozhraní

Směr hlavní osy flex kontejneru vychází vždy z vlastnosti `writing-mode`. Pokud bychom tedy flexboxem dělali layout stránky v japonštině, budou všechny hodnoty zde zmíněné naopak.
