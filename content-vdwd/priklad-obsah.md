# Příklad: Obsah pro stránku detailu produktu

Jako příklad pro náš proces návrhu uživatelského rozhraní si vezmeme tyhle krásné kotníkové boty značky Fare, v jejichž poněkud zabahněných variantách se v Kunratickém lese prohánějí mladí Michálci. 

![Boty Fare](dist/images/original/vdwd/priklad-boty.jpg)

*Ukázkový produkt, se kterým budeme v příkladu pracovat. [fare.cz/detska-obuv-827263.htm](https://www.fare.cz/detska-obuv-827263.htm)*

Jak budu v knize často zmiňovat, jednotlivé fáze procesu návrhu je výhodné vidět co nejdříve v podobě prezentovatelné v prohlížeči. U textu to nebude tak složité, viďte?

## Dva nástroje: Markdown a CodePen 

Pro formátování textu je možné využít nějaký vizuální HTML editor typu Dreamweaveru, přímou editaci kódu nebo – když zavřeme všechny oči a zatajíme dech – třeba export z Wordu. Uf! 

Já používám jednoduché značkování pomocí *Markdownu*. Práce s ním je daleko rychlejší než s HTML a převést jej do jakéhokoliv složitějšího formátu je velmi snadné. [wikipedia.org/wiki/Markdown](https://cs.wikipedia.org/wiki/Markdown)

Využijeme také *CodePen*. Jednoduchý online editor, kde si stránku napíšete a otestujete bez potřeby složitějších nástrojů. Jak brzy uvidíte, je to pro mě nepostradatelný pomocník. Všechny demonstrační příklady v knize jsou umístěné na něm. [codepen.io](http://codepen.io/)

## Obsah příkladu převedeme rovnou do kódu

![Obsah příkladu v Markdownu](dist/images/original/vdwd/priklad-markdown.jpg)

*Použil jsem CodePen a šup! Máme tady první iteraci stránky detailu produktu našeho e-shopu. [cdpn.io/e/MJwGXK](http://codepen.io/machal/pen/MJwGXK?editors=1000)*

Už tenhle náhled (prakticky bez CSS stylů) můžeme nějak hodnotit či testovat. Nejlépe se nám to bude dělat v malé velikosti okna, protože tam půjdou problémy obsahu vidět nejlépe.

Pracujeme tady jen s čistým, strukturovaným textem. Pro mediální obsah nebo složitější interaktivní elementy si ve stránce jen vyhradíme místo pomocí šedivých zástupných ploch. Lépe pak uvidíme, zda je délka obsahu a tedy i stránky snadno vstřebatelná nebo ne.

V této fázi máme neopakovatelnou příležitost odpovědět si na otázky týkající se textu. Jen tady jsme odstínění od vzhledu, tedy barev, typografie a grafiky a celkového layoutu – rozvržení stránky. Také nás nerozptylují globální navigační a komunikační prvky webu jako je společná hlavička a patička.  

Testujeme kvalitu obsahu samotného a jeho hierarchii. Konfrontujeme text s našimi znalostmi uživatelů a zájmů firmy, které jsme promítli do [design canvasu](design-canvas.md). Nechybí nebo nepřebývá na stránce něco? Má obsah správné pořadí? Je obsah srozumitelný a přesvědčivý pro cílovou skupinu? 

Pojďme tento moment nepromeškat a pořádně se na texty podívat. Některé problémy jsou totiž vidět už teď:

1. Chybí nám tady informace o dostupnosti jednotlivých velikostí bot. Návštěvníka navíc umíme přehledněji informovat o vnitřní velikosti bot, která je pro koupi přes internet důležitá. Dbáme na dobrý výběr bot a rodičům dětí tedy musíme doporučit objednávku zařízení pro domácí přeměření velikosti.
2. Doplníme také stručné informace o ceně dopravy a platby, která by mohla u nového eshopu budit pochyby. Plná verze bude samozřejmě standardně v obchodních podmínkách.

Na obrázku nevidíme třetí změnu: kód produktu a jeho zařazení v kategoriích by neměly stát tak vysoko v hierarchii dokumentu. Podobné je to s detailním popisem produktu. Náš e-shop se má chlubit širokou skladovou nabídkou a na rozdíl od ostatních nabízet znalosti usnadňující rozhodnutí o koupi. Vzpomeňme na náš [design canvas](priklad-ux-canvas.md). 

Druhá iterace dokumentu je na světě:

![Druhá iterace obsahu příkladu v Markdownu](dist/images/original/vdwd/priklad-markdown-2.jpg)

*Změny, které jsme provedli v druhé iteraci práce s obsahem. [cdpn.io/e/XpbBJy](http://codepen.io/machal/pen/XpbBJy?editors=1000)*

Řekněme, že na ní už žádné zásadní chyby nevidíme. Hurá! Můžeme otevřít bránu do veselého světa barev, do světa webové grafiky.

