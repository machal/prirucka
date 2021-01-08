# Velmi stručná historie CSS Gridu

Pokud se těšíte na psaní kódu, tuhle část můžete v klidu přeskočit. Ale věřte mi – pokud bych si myslel, že vás bude nudit, do knížky bych tento text nedával.

Historie CSS Gridu je totiž tak trochu historií CSS a protože tu jsem po očku sledoval úplně od začátku, vidím v následujícím přípběhu pár zajímavých a vtipných momentů.

Vycházel jsem hlavně z fascinujícího (ale dlouhého) článku „The Story of CSS Grid, from Its Creators“ od Aarona Gustafsona. [vrdl.in/vdghist](https://alistapart.com/article/the-story-of-css-grid-from-its-creators/)

Slíbil jsem stručnost, takže to vezměme v bodech:

## 1996

Jako nedostatečné vnímají možnosti layoutu v CSS už samotní zakladatelné kaskádových stylů, Bert Bos a Håkon Wium Lie, a proto přicházejí v tehnedjší době s převratem – rámci. Prvek `<frame>` umožňoval rozdělit stránku na samostatné jednotky a ten, kdo si jej dnes pamatuje, už má jistě první šediny za sebou.

## 2005

Bert Bos přichází se specifikací „Template Layout Module“. Když se do ní začtete, vlastnosti jako `grid-template-areas` vám budou povědomé… Co se tehdy ještě nepovedlo domyslet, bylo, kromě jiného, stylování buněk mřížky, tehdy podivně přes pseudotřídu `::slot()`.

Následuje mnoho pokusů o návrh rozumného systému layoutu v CSS, ale výrobci prohlížečů je smetávají ze stolu jako „příliš složité na implementaci“.

No – a když není žádná implementace v prohlížečích, návrhy specifikací se vynořují a následně zapadají prachem.

Webaři mezitím skřípou zuby u každého `float`. A pak si zvyknou.

## 2011

V Microsoftu se dějí věci. Plánují zaříznout Silverlight, zjednodušeně řečeno vlastní napodobeninu Flashe, a více šlápnout do webových technologií. Jde jim o využití HTML a CSS pro vlastní produkty, ale jejich vývojáři jsou nešťastní z nedostatku rozumného layoutování v CSS, oproti tomu, na co byli zvyklí v Silverlightu.

<figure>
<img src="../dist/images/original/vdlayout/silverlight.png" width="1920" height="540" alt="Microsoft Silverlight">
<figcaption markdown="1">
*Obrázek: To by člověk nečekal, na jak podivných místech najde inspirační zdroje dnešního moderního CSS. Tož děkujeme do Microsoftu!*
</figcaption>
</figure>

Nejvíce se tato frustrace projeví u šéfa jednoho z redmondských týmů zaměřených na návrh uživatelského rozhraní, Phila Cuppa. Dojde to tak daleko, že se svým týmem zařídí implementaci systému pro layout do Internet Exploreru 10.

Ta věc se jmenuje „Grid Layout“.

## 2012

Cupp prezentuje nový systém rozvržení konsorciu W3C. Začne se o tom hodně mluvit a další nadšenci (jako Rachel Andrew, kterou jste v Praze mohli potkat na konfrenci WebExpo 2016) to šíří do komunity webových vývojářů.
Odtud už vede přímá cesta k dnešnímu CSS Gridu.

V čem byl ale tento pokus jiný než všechny předchozí? Je to jednoduché – Phil Cupp a jeho lidé zařídili implementaci v prohlížeči.

Nejprve implementace, pak specifikace. Přesně tím postupem, který je dnes vyčítán Googlu. Historie má tendenci se opakovat.

Ale v kontextu CSS Gridu se chce říct: hlavně, že to vyšlo.

## 2017

Vzniká specifikace „CSS Grid Layout Module Level 1“.

Lidé z W3C ale původní specifikaci od Microsoftu radikálně předělali. Přidali například možnosti automatického umísťování do mřížky a rozšířili ji o lepší možnosti responzivity.

Pár věcí si vzali také ze staré specifikace od Berta Bose. Například definici layoutu pomocí [vlastnosti `grid-template-areas`]
(css-grid-template.md):

```css
grid-template-areas:
  "heading heading"
  "col1 col2";
```

„Je to jako ASCII art pro vytváření šablony“ řekla prý Elika Etemad, editorka pro modul CSS Grid Layout Module ve W3C, což sedí.

S výsledkem se právě teď můžete podrobně seznámit na následujících stránkách.

Myslím, že se po dočtení knížky shodneme, že je to taková malé zemětřesení pro vývoj webů. Zemětřesení, které zboří staré základy a vytvoří nové, na kterých se začne stavět… co vlastně?

Greg Whitworth člen pracovní skupiny k CSS pro Gustafsonův článek prohlásil: „CSS Gridem to nekončí. Je to vlastně jen začátek.“
