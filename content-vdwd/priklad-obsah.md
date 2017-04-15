# Příklad: Obsah pro stránku detailu produktu

Jako ukázkový produkt pro náš proces návrhu uživatelského rozhraní jsem vybral tyhle krásné kotníkové boty značky Fare, v jejichž poněkud zabahněných variantách se v Kunratickém lese prohánějí mladí Michálci. 

<figure>
<img src="dist/images/original/vdwd/priklad-boty.jpg" alt="">
<figcaption markdown="1">    
*Ukázkový produkt, se kterým budeme v příkladu fiktivního e-shopu pracovat. Zdroj: [fare.cz](https://www.fare.cz/detska-obuv-827263.htm)*
</figcaption> 
</figure> 


Jak budu v knize často zmiňovat, jednotlivé fáze procesu návrhu je výhodné co nejdříve vidět v podobě prezentovatelné v prohlížeči. U textu to nebude tak složité, viďte?

## Dva nástroje: Markdown a CodePen 

Pro formátování textu je možné využít nějaký vizuální HTML editor typu Dreamweaveru, přímou editaci kódu nebo – když zavřeme obě oči a zatajíme dech – třeba export z Wordu.

Já používám jednoduché značkování pomocí *Markdownu*. Práce s ním je daleko rychlejší než s HTML a převést jej do jakéhokoliv složitějšího formátu je velmi snadné. [wikipedia.org/wiki/Markdown](https://cs.wikipedia.org/wiki/Markdown)

Využijeme také *CodePen*. Jednoduchý online editor, kde si stránku napíšete a otestujete bez potřeby složitějších nástrojů. Jak brzy uvidíte, je to pro mě nepostradatelný pomocník. Všechny demonstrační příklady v knize jsou umístěné na něm. [codepen.io](http://codepen.io/)

## Obsah příkladu převedeme rovnou do kódu

<figure>
<img src="dist/images/original/vdwd/priklad-markdown.jpg" alt="">
<figcaption markdown="1">    
*Použil jsem CodePen a šup! Máme tady první iteraci stránky detailu produktu našeho e-shopu. [cdpn.io/e/MJwGXK](http://codepen.io/machal/pen/MJwGXK?editors=1000)*
</figcaption> 
</figure> 


Už tenhle náhled (prakticky bez CSS stylů) můžeme nějak hodnotit či testovat. Nejlépe se nám to bude dělat v malé velikosti okna, protože tam půjdou problémy obsahu vidět nejlépe.

Pracujeme tady jen s čistým, strukturovaným textem. Pro mediální obsah nebo složitější interaktivní elementy si ve stránce jen vyhradíme místo pomocí šedivých zástupných ploch. Lépe pak uvidíme, zda je délka obsahu, a tedy i stránky snadno vstřebatelná, nebo ne.

V této fázi máme neopakovatelnou příležitost odpovědět si na otázky týkající se textu. Jen tady jsme odstínění od vzhledu, tedy barev, typografie, grafiky a celkového layoutu – rozvržení stránky. Také nás nerozptylují globální navigační a komunikační prvky webu, jako je společná hlavička a patička.

Testujeme kvalitu obsahu samotného a jeho hierarchii. Konfrontujeme text s našimi znalostmi uživatelů a zájmů firmy, které jsme promítli do [design canvasu](design-canvas.md). Nechybí nebo nepřebývá na stránce něco? Má obsah správné pořadí? Je obsah srozumitelný a přesvědčivý pro cílovou skupinu? 

Pojďme tento moment nepromeškat a pořádně se na texty podívat. Našel jsem v nich pár problémů, ale nejdřív vám rovnou ukážu druhou iteraci obsahu:

<figure>
<img src="dist/images/original/vdwd/priklad-markdown-2.jpg" alt="">
<figcaption markdown="1">    
*Změny, které jsme provedli v druhé iteraci práce s obsahem. Doplnili jsme dostupnost velikostí a informace o ceně dopravy. [cdpn.io/e/XpbBJy](http://codepen.io/machal/pen/XpbBJy?editors=1000)*
</figcaption> 
</figure> 


### První problém: chybějící informace o dostupnosti velikostí bot 

Návštěvníka také chceme přehledněji informovat o vnitřní velikosti bot, která je u koupě přes internet důležitá. A poslední související změnou je to, že jsme přidali doporučení ohledně zařízení na domácí přeměření velikosti nohy. Nejsme totiž jeden z těch e-shopů, kterým je jedno, co si zákazník koupí.

### Druhý problém: chybějící skladová dostupnost jednotlivých velikostí

Doplníme také stručné informace o ceně dopravy a o platbě, která by mohla u nového e-shopu budit pochyby. Plná verze bude samozřejmě standardně v obchodních podmínkách.

### Třetí problém: pořadí informací na stránce

Kód produktu a jeho zařazení v kategoriích by neměly stát tak vysoko v hierarchii dokumentu. Podobné je to s detailním popisem produktu. Náš e-shop se má chlubit širokou skladovou nabídkou a na rozdíl od ostatních nabízet znalosti usnadňující rozhodnutí o koupi. Vzpomeňme na výstupy z našeho [design canvasu](priklad-ux-canvas.md). 


Řekněme, že v dokumentu už žádné zásadní chyby nevidíme. Hurá! Můžeme otevřít bránu do veselého světa barev, do světa webové grafiky.

