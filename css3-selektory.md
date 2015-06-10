CSS3 selektory
==============

CSS3 přichází s armádou nových selektorů. Nejjednodušší bude podívat se na ně optikou toho jakou verzi Internet Exploreru na svých projektech musíte podporovat, abyste je mohli použít.


IE8+
----

* `span[att^="val"]` – hodnota atributu `attr` začíná řetězcem „val“. Hojně využívají CSS frameworky pro tvorbu gridu. Třídy `.span1`, `.span2` atd. selektují takto: `span[class^="span"]`
* `span[att$="val"]` – hodnota atributu končí řetězcem „val“.
* `span[att*="val"]` – hodnota atributu obsahuje řetězcem „val“.
* `p ~ ul` – mají stejného rodiče, ale nejsou vedle sebe jako u `p + ul`.


IE9+
----

* `span:empty` — všechny `<span>` elementy, které neobsahují dceřinný element, ani text.
* `div:target` – vybírá část zvýrazněnou přes kotvu (`/adresa#kotva`).
* `input:enabled`, `input:disabled` – formulářové pole kam není možné zapisovat.
* `input:checked` – vybírá aktivovaný input typu `checkbox`, `radio` nebo `option`.
*  `*::selection` – nastylování vybraného textu.
* `span:not(.blue)` – všechny spany kromě těch s třídou `blue`.
* `:first-child`, `:last-child`, `:only-child` – první, poslední nebo jediný potomek svého rodiče.
* `:nth-child(n)`, `:nth-last-child(n)` – n-tý potomek od začátku nebo od konce. Nejlépe se tenhle šílený (ale moc užitečný) selektor naučíte s pomocí online nástroje [NthMaster](http://nthmaster.com/).
* `:first-of-type`, `:last-of-type`, `:only-of-type` – první, poslední, jediný tohoto typu elementu.


