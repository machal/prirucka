CSS3 selektory
==============

CSS3 přichází s armádou nových selektorů. Nejjednodušší bude podívat se na ně optikou toho jakou verzi Internet Exploreru na svých projektech musíte podporovat.


IE8+
----

* `span[att^=”val”]` – hodnota atributu `attr` začíná řetězcem “val”.
* `span[att$=”val”]` – končí “val”.
* `span[att*=”val”]` – obsahuje “val”.
* `p ~ ul` – mají stejného rodiče, ale nejsou vedle sebe jako u `p + ul`.
  

IE9+
----

* `span:empty` — všechny `<span>` elementy, které neobsahují dceřinný element, ani text.
* `div:target` – vybírá část zvýrazněnou přes kotvu (/adresa#kotva).
* `input:enabled`, `input:disabled` – formulářové pole kam není možné zapisovat.
* `input:checked` – vybírá aktivovaný input typu `checkbox`, `radio` nebo `option`.
*  `*::selection` – nastylování vybraného textu.
* `span:not(.blue)` – všechny spany kromě těch s třídou `blue`.
* `:first-child`, `:last-child`, `:only-child` – první, poslední nebo jediný potomek svého rodiče.
* `:nth-child(n)`, `:nth-last-child(n)` – n-tý potomek od začátku nebo od konce, nejlépe se tenhle šílený (ale moc užitečný) selektor naučíte s pomocí [NthMaster](http://nthmaster.com/).
* `:first-of-type`, `:last-of-type`, `:only-of-type` – první, poslední, jediný tohoto typu elementu, např `<p>`.

  
