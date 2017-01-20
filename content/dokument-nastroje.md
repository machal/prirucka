# Nástroje pro vyladění dokumentu

Při práci na dokumentu, nevyhnutelném základu každého webu se může hodit pár nástrojů. Předpokládejme jen, že máme hotový obsah v HTML. Co teď?

## Blanka HTML: výchozí šablona prázdného dokumentu

Univerzálnost vyžaduje minimalismus. Pokud chci mít nějaký výchozí kousek HTML a CSS jednotný opravdu pro všechny projekty, nesmí být moc složitý. Nechci přemýšlet, kterou řádku kódu pro nový projekt použiju a která je tam zbytečně. 

V Blance toho opravdu moc není. Věřím ale, že vše co tam je, užijete pro každý váš projekt: 

- je tam správný typ dokumentu, 
- detekce starších Explorerů nebo situace, kdy ve stránce nefunguje Javascript
- v hlavičce je správná [meta značka pro viewport](viewport-meta.md)
- ošetřená je základní přístupnost: prvek `<main>` umožňuje uživatelům čtečky JAWS skok na obsah dokumentu a pro 

Další věci se dozvíte přímo ze zdrojáků Blanka HTML. [github.com/machal/blanka-html](https://github.com/machal/blanka-html/blob/master/index.html)

Pokud byste raději robustní řešení, jděte na HTML5 Boilerplate. Pro mě to z výšeuvedených důvodů není, ale je to rozhodně zajímavý zdroj vzdělávání a inspirace. [html5boilerplate.com](https://html5boilerplate.com)


## A teď CSS: výchozí styly prohlížečů

Často se zapomíná, že ještě než napíšeme první řádku CSS, náš dokument už dokument nějaké styly má. Prohlížeč prostě musí mít nějaká zadní vrátka, kterými vejde škodolibý skřítek a náš milý dokument pokazí ohyzdným písmem Times New Roman s modrými odkazy, že ano? 

Jsou to výchozí styly prohlížečů, které ve vývojářských nástrojích vidíte jako „user agent stylesheet“. Pokud nevidíte, doporučím vám si jejich zobrazování zapnout. Ony totiž mají ošklivou vlastnost – v různých prohlížečích mají různá nastavení. 

### Proč nepoužívat resetování?

Svého času se v prvním kroku technické práce prakticky na každém webu používal „CSS Reset“ Erika Meyera. Ten prostě vynuloval všechny vnější i vnitřní okraje prvku, takže jsme získali konzistentně ošklivý Time New Roman a modré odkazy ve všech prohlížečích. [meyerweb.com/eric/tools/css/reset/](http://meyerweb.com/eric/tools/css/reset/)

Nevýhoda resetovacího přístupu je – to byste nečekali – v onom *resetování*. Když totiž nějaké vlastnosti „resetujeme“, musíme je v druhém kroku také „setovat“, nastavit na vysněné hodnota. Co když nám ale vyhovovalo původní nastavení prohlížečů? To jsme pak udělali dva zbytečné kroky a práci na webu si zkomplikovali. Hned na startu.

## Normalize.css

Normalize prostě zasahuje jen tam, kde jsou ve výchozích stylech prohlížečů nějaké rozdíly. „Normalizace“ je slovo, které v Česku a na Slovensku nemá moc hezké emoční zabarvení, takže můžeme mluvit o *sjednocení* stylů. První krok je tedy přidat k dokumentu Normalize.css. [necolas.github.io/normalize.css](https://necolas.github.io/normalize.css/)

Máme tedy jednotné výchozí stylování. Pojďme si teď konečně něco nastavit.

## Blanka CSS

Blanka je opět vlastní kousek CSS, který sdílí mé projekty. Slouží k 

TODO: https://v4-alpha.getbootstrap.com/content/reboot/

## Blanka Type Test

blanka-type-test

TODO: https://github.com/machal/cz-typography-stress-test

