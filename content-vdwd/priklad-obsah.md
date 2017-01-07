# Příklad: Obsah pro stránku detailu produktu

Jako příklad pro náš proces návrhu uživatelského rozhraní si vezmeme tyhle krásné kotníkové boty značky Fare, v jejichž poněkud zabahněných variantách se v Kunratickém lese prohánějí mladí Michálci. 

*TODO img [fare.cz/detska-obuv-827263.htm](https://www.fare.cz/detska-obuv-827263.htm)*

Jak budu v knize často zmiňovat, jednotlivé fáze procesu návrhu je výhodné vidět co nejdříve v podobě prezentovatelné v prohlížeči. U textu to nebude tak složité, viďte?

Pro formátování textu je možné využít nějaký vizuální HTML editor typu Dreamweaveru, přímou editaci kódu nebo – když zavřeme všechny oči a zatajíme dech – třeba export z Wordu. Já používám jednoduché značkování pomocí Markdownu. Práce s ním je daleko rychlejší než s HTML a převést jej do jakéhokoliv složitějšího formátu je velmi snadné.

*TODO img: Použil jsem opět CodePen a šup! Máme tady první iteraci stránky detailu produktu našeho eshopu. [cdpn.io/e/MJwGXK](http://codepen.io/machal/pen/MJwGXK?editors=1000)*

Už tenhle náhled (prakticky bez CSS stylů) můžeme nějak testovat. Nejlépe se nám to bude dělat v mobilním prohlížeči. Ano, pracujeme přeci [Mobile First](mobile-first.md) způsobem návrhu. 

Jediné, co pro test potřebujeme udělat, je sdělit prohlížečům, že jsme při kódování HTML mysleli na mobilní zařízení. [Meta značkou pro viewport](viewport-meta.md), o které si budeme povídat o několik kapitol dále.

Pracujeme tady jen s čistým, strukturovaným textem. Pro mediální obsah nebo složitější interaktivní elementy si ve stránce jen vyhradíme místo pomocí šedivých zástupných ploch.

V této fázi máme neopakovatelnou příležitost odpovědět si na otázky týkající se textu. Jen tady jsme odstínění od vzhledu (barev a typografie), rozvržení stránky, ale také globálních navigačních a komunikačních prvků webu jako je společná hlavička a patička nebo třeba bannerové upoutávky na další produkty či odběr newsletterů. 

Testujeme šíři obsahu samotného a jeho hierarchii. Konfrontujeme text s našimi znalostmi uživatelů a zájmů firmy, které jsme promítli do [design canvasu](design-canvas.md). Nechybí nebo nepřebývá na stránce něco? Má obsah správné pořadí? Je obsah srozumitelný a přesvědčivý pro cílovou skupinu? 

Pojďme tento moment neproměskat a pořádně se na texty podívat. Některé problémy jsou totiž vidět už teď:

1. Kód produktu a zařazení v kategoriích by neměly stát tak vysoko v hierarchii dokumentu. Podobné je to s detailním popisem produktu. Náš e-shop se má chlubit širokou skladovou nabídkou a na rozdíl od ostatních nabízet znalosti usnadňující rozhodnutí o koupi. Vzpomeňme na náš [design canvas](priklad-ux-canvas.md). 
2. Chybí nám tady informace o dostupnosti jednotlivých velikostí bot. Návštěvníka navíc umíme přehledněji informovat o vnitřní velikosti bot, která je pro koupi přes internet důležitá. Dbáme na dobrý výběr bot a rodičům dětí tedy musíme doporučit objednávku zařízení pro domácí přeměření velikosti.
3. Doplníme také stručné informace o ceně dopravy a platby, která by mohla u nového eshopu budit pochyby. Plná verze bude samozřejmě standardně v obchodních podmínkách.

Druhá iterace dokumentu je na světě:

*TODO img [cdpn.io/e/XpbBJy](http://codepen.io/machal/pen/XpbBJy?editors=1000)*

Řekněme, že na ní už žádné zásadní chyby nevidíme. Hurá! Můžeme otevřít bránu do veselého světa barev, do světa webové grafiky.

