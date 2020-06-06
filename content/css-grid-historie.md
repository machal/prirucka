# Velmi stručná historie CSS Gridu

Pokud se těšíte na psaní kódu, tuhle část můžete v klidu přeskočit. Ale věřte mi, pokud bych si myslel, že vás to bude nudit, do knížky bych tento text nedával.

Historie CSS Gridu je totiž tak trochu historií CSS a protože tu jsem po očku sledoval úplně od začátku, vidím v historii CSS Gridu pár zajímavých (a vtipných) momentů.

Vycházel jsem hlavně z fascinujícího článku „The Story of CSS Grid, from Its Creators“ od Aarona Gustafsona. [vrdl.in/vdghist](https://alistapart.com/article/the-story-of-css-grid-from-its-creators/)

Slíbil jsem stručnost, takže to vezměme v bodech:

## 1996

Jako nedostatečné vnímají možnosti layoutu v CSS už samotní zakladatelné kaskádových stylů, Bert Bos a Håkon Wium Lie, a proto přicházejí s tehdejším převratem – rámci stránky. Prvek `<frame>` umožňoval rozdělit stránku na samostatné jednotky. 

## 2005

Bert Bos přichází se specifikací „Template Layout Module“. Schválně se do ní začtěte, vlastnosti jako `grid-template-areas` vám budou povědomé… Co se tehdy ještě nepovedlo domyslet, bylo, kromě jiného, stylování buněk přes pseudotřídu `::slot()`.

Mnoho pokusů o návrh rozumného systému layoutu v CSS, ale výrobci prohlížečů je smetávají ze stolu jako „příliš složité na implementaci“. 

Není žádná implementace v prohlížečích, takže návrhy specifikací se vynořují a následně zapadají prachem. Webaři mezitím skřípou zuby u každého `float`.

## 2011 

V Microsoftu se dějí věci. Plánují zaříznout Silverlight a více šlápnout do webových technologií i pro vlastní produkty, ale jejich vývojáři jsou nešťastní z nedostatku rozumného layoutování v CSS.

Nejvíce se tato frustrace projeví u šéfa jednoho z redmondských UI týmů, Phila Cuppa. Dojde to tak daleko, že se svým týmem zařídí implementaci systému layout s názvem „Grid Layout“ pro Internet Explorer 10.

## 2012

Cupp prezentuje nový systém layoutu konsorciu W3C. Začne se o tom hodně mluvit a další nadšenci (jako Rachel Andrew) to šíří do komunity webových vývojářů.

Odtud už vede přímá cesta k dnešnímu CSS Gridu. V čem byl ale tento pokus jiný než všechny předchozí? Je to jednoduché – Phil Cupp a jeho lidé zařídili implementaci v prohlížeči.

Nejprve implementace, pak specifikace. Přesně tím postupem, který je dnes vyčítán Googlu. Ale vyšlo to.

## 2017

Vzniká specifikace „CSS Grid Layout Module Level 1“. Lidé z W3C ale původní specifikaci z Microsoftu radikálně předělali. Přidali například možnosti automatického umísťování do mřížky, rozšířili o lepší možnosti responzivity a pár věcí si vzali také ze staré specifikace od Berta Bose. Například definici layoutu: „Je to jako ASCII art pro vytváření šablony“ říká Elika Etemad, editorka pro CSS Grid Layout Module ve W3C.

S výsledkem se právě teď můžete podrobně seznámit na následujících stránkách. 

Myslím, že se po jejich dočtení shodneme, že je to taková malé zemětřesení pro celý vývoj webů. Zboří staré základy a vytvoří nové, na kterých se začne stavět… co vlastně?

Greg Whitworth člen pracovní skupiny k CSS pro Gustafsonův článek prohlásil: „CSS Gridem to nekončí. Je to vlastně jen začátek.“

