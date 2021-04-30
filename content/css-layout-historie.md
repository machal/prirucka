# Velmi stručná historie layoutů v CSS

Pokud se těšíte na psaní kódu, tuhle část můžete v klidu přeskočit. Ale věřte mi – pokud bych si myslel, že vás bude nudit, do knížky bych tento text nedával.

Historie rozvržení v CSS je totiž tak trochu historií CSS a protože tu jsem po očku sledoval úplně od začátku, vidím v následujícím přípběhu pár zajímavých a vtipných momentů.

Slíbil jsem stručnost, takže to vezměme v bodech:

## 1994: „Je mi líto, ale jste v háji.“

Možnosti stylování dokumentů dokumentů jsou tak „bohaté“, že Marc Andreessen na jeden z dotazů, jak udělat layout v CSS, do mailové skupiny „WWW“, odpovídá: „Sorry you’re screwed.“

## 1996: FRAME

Jako nedostatečné vnímají možnosti layoutu v CSS už samotní zakladatelné kaskádových stylů, Bert Bos a Håkon Wium Lie, a proto přicházejí v tehdejší době s převratem – rámci. Prvek `<FRAME>` umožňoval rozdělit stránku na samostatné jednotky a ten, kdo si jej dnes pamatuje, už má jistě první šediny za sebou.

## 1998: MULTICOL

Andreesen se snaží layout naimplementovat do svého prohlížeče Netscape Navigator a tak verze 3 přichází s tímto zápisem:

```html
<MULTICOL COLS="2">
  <P>
  The Hypertext Markup Language (HTML) is a markup language 
  … </P>
</MULTICOL>
```

Ano, jde o přímého předchůdce [multicol layoutu](css-mulicolumn.md) v CSS.

Ano, tehdy se opravdu i vzhled a layout zapisoval do HTML.

A ano — opravdu se značky zapisovaly VERZÁLKAMI.

V téhle době stavím svůj první větší web – fanouškovské stránky U2 na tehdy velmi známém serveru MusicHall. Jsem hrdý, že pro layout nepoužívám `<frame>`. Můj kód je stavěný na `<table>`.

## 1999: Multi-column layout

Håkon Lie a mnozí další přicházejí s prvním drafte specifikace pro vícesloupcový layout.

Když si ji prohlédnete, zjistíte, že se zápis v kódu od toho dnešního zase tak moc neliší. Zvládli to na první dobrou.

## 2002: Éra floatů

Už nějakou dobu dělám weby za peníze.

Na stránkách ostravské cestovky Rywal jsem nepoužil `<table>`, ale CSS a vlastnost `float`. Jsem na sebe pyšný.

## 2005: Něco jako grid poprvé

Bert Bos přichází se specifikací „Template Layout Module“. Když se do ní začtete, vlastnosti jako `grid-template-areas` vám budou povědomé… Co se tehdy ještě nepovedlo domyslet, bylo, kromě jiného, stylování buněk mřížky, tehdy podivně přes pseudotřídu `::slot()`.

Následuje mnoho pokusů o návrh rozumného systému layoutu v CSS, ale výrobci prohlížečů je smetávají ze stolu jako „příliš složité na implementaci“.

No – a když není žádná implementace v prohlížečích, návrhy specifikací se vynořují a následně zapadají prachem.

Webaři mezitím skřípou zuby u každého `float`. A pak si zvyknou.

## 2009: Flexbox přichází na scénu

Vzniká první specifikace [flexboxu](css-flexbox.md):

```css
.container { 
  display: box; 
  width: 300px; 
}

.box-1 { 
  box-flex: 1.0; 
  width: 100px; 
}

.button2 { 
  box-flex: 2.0; 
  width: 140px; 
}
```

Tahle „nultá verze“ specifikace je založena na technologii XUL, kterou v té době používá Firefox k vytváření uživatelského rozhraní prohlížeče nebo také rozšíření.

V témže roce vzniká „Candidate Recommendation“ pro vícesloupcový layout. Prohlížeče jej začínají implementovat.

## 2011: Microsoft implementuje grid

V Microsoftu se dějí věci. Plánují zaříznout Silverlight, zjednodušeně řečeno vlastní napodobeninu Flashe, a více šlápnout do webových technologií. Jde jim o využití HTML a CSS pro vlastní produkty, ale jejich vývojáři jsou nešťastní z nedostatku rozumného layoutování v CSS, oproti tomu, na co byli zvyklí v Silverlightu.

<figure>
<img src="../dist/images/original/vdlayout/silverlight.png" width="1920" height="540" alt="Microsoft Silverlight">
<figcaption markdown="1">
*Obrázek: To by člověk nečekal, na jak podivných místech najde inspirační zdroje dnešního moderního CSS. Tož děkujeme do Microsoftu!*
</figcaption>
</figure>

Nejvíce se tato frustrace projeví u šéfa jednoho z redmondských týmů zaměřených na návrh uživatelského rozhraní, Phila Cuppa. Dojde to tak daleko, že se svým týmem zařídí implementaci systému pro layout do Internet Exploreru 10.

Ta věc se jmenuje „Grid Layout“.

V témže roce přišel Tab Atkins a přepsal celou specifikaci flexboxu. jeho hlavním cílem bylo pokusit se odstranit závislost na všech těch šílených háčcích s `float` nebo `table`, které jsme museli jako weboví vývojář umět.

## 2012: Přelom. Prohlížeče implementují flexbox, Microsoft předává grid do W3C

Cupp prezentuje nový systém rozvržení konsorciu W3C. Začne se o tom hodně mluvit a další nadšenci (jako Rachel Andrew, kterou jste v Praze mohli potkat na konfrenci WebExpo 2016) to šíří do komunity webových vývojářů.
Odtud už vede přímá cesta k dnešnímu CSS Gridu.

V čem byl ale tento pokus jiný než všechny předchozí? Je to jednoduché – Phil Cupp a jeho lidé zařídili implementaci v prohlížeči.

Nejprve implementace, pak specifikace. Přesně tím postupem, který je dnes vyčítán Googlu. Historie má tendenci se opakovat.

Ale v kontextu CSS Gridu se chce říct: hlavně, že to vyšlo.

Z flexboxu se stává „Candidate Recommendation“, což znamená, že specifikace je stabilní. Prohlížeče jej začínají implementovat.

## 2017: Nová a lepší specifikace gridu

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

Pokud byste se do historie chtěli ponořit více, doporučím vám tyto dva články:

- „The Story of CSS Grid, from Its Creators“ od Aarona Gustafsona. [vrdl.in/vdghist](https://alistapart.com/article/the-story-of-css-grid-from-its-creators/)
- „A Look Back at the History of CSS“ od Jay Hoffmanna. [vrdl.in/csshist](https://css-tricks.com/look-back-history-css/)
