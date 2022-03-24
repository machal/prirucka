# Velmi stručná historie layoutů v CSS

<div class="book-index" data-book-index="Historie"></div>

Pokud se těšíte na psaní kódu, tuhle část můžete v klidu přeskočit. Ale věřte mi – pokud bych si myslel, že vás bude nudit, do knížky bych ji nedával.

Historie rozvržení v CSS je totiž tak trochu historií CSS, a protože tu jsem napjatě sledoval úplně od začátku, vidím v následujícím příběhu pár zajímavých a vtipných momentů.

Slíbil jsem stručnost, takže to vezměme v bodech.

## 1994: „Je mi líto, ale jste v háji.“

Možnosti stylování dokumentů jsou mizerné. Mimo jiné to výborně vyjadřuje v e-mailovém fóru WWW-Talk Marc Andreessen, spoluzakladatel Netscapu a pozdější člen představenstva Facebooku. Když prý po něm lidé chtějí, aby jejich webové dokumenty vypadaly podobným způsobem, jak to jde zařídit v sázecím programu LaTeX (nebo alespoň jako ve Wordu), všem prý odpovídá: „Sorry, you’re screwed.“

## 1996: FRAME

<div class="book-index" data-book-index="Frame"></div>

Jako nedostatečné vnímají možnosti rozvržení v CSS už samotní zakladatelné kaskádových stylů, Bert Bos a Håkon Wium Lie, a proto přicházejí v tehdejší době s převratnými rámci. Prvek `<FRAME>` umožňuje rozdělit stránku na samostatné jednotky, které nejsou nic jiného než jen další stránky. První layoutová revoluce je tady.

## 1998: MULTICOL

<div class="book-index" data-book-index="Multicol"></div>

Andreessen se snaží implementovat layout do svého prohlížeče Netscape Navigator, a tak verze 3 přichází s tímto zápisem:

```html
<MULTICOL COLS="2">
  <P>
    The Hypertext Markup Language (HTML) is a markup language… 
  </P>
</MULTICOL>
```

Ano, jde o přímého předchůdce [vícesloupcového layoutu](css-mulicolumn.md) v CSS.

Ano, tehdy se opravdu i vzhled a layout zapisoval do HTML.

Ano, opravdu se značky zapisovaly VERZÁLKAMI.

Ne. Opravdu o tom už nechci dále mluvit.

V těch časech stavím svůj první větší web – fanouškovské stránky kapely U2 na tehdy velmi známém serveru MusicHall. Jsem hrdý, že pro rozložení stránky nepoužívám `<frame>`, už zastaralou metodu. Kód mého webu je totiž stavěný na prvku `<table>`.

## 1998: TABLE

<div class="book-index" data-book-index="Table"></div>

Někdy v této době přišel bezejmenný webař na to, že když z tabulky odstraní rámečky, vznikne docela dobrá struktura, která může nést i složitější rozvržení stránek nebo jednotlivých komponent uvnitř. Někdy po roce 2000 začne komunitou kolovat následující vtip:

– „Tr td td td tr td td td… – co je to?“  
– „Vlak přijíždí do stanice?“  
– „Ne, to webař tvoří rozvržení stránky.“

Kód, který takto vznikal, mě dodnes chodí v noci strašit. No však se sami podívejte:

```html
<table width="100%" border="0"> 
  <tr> 
    <td colspan="2" bgcolor="#b5dcb3"> 
      <h1>Ahoj, jsem web</h1> 
    </td> 
  </tr> 
  <tr valign="top"> 
    <td bgcolor="#aaa" width="50"> 
      Ahoj, jsem navigace.
    </td> 
    <td bgcolor="#eee" width="100" height="200"> 
      Ahoj, jsem hlavní obsah.
    </td> 
  </tr> 
</table>
```

Doufám, že až někdo tomuto neznámému webaři postaví pomník, bude text na něm vysázený v tabulkovém layoutu.

## 1999: Multi-column Layout

Håkon Lie a mnozí další přicházejí s prvními drafty specifikace pro vícesloupcový layout.

Když si ji prohlédnete, zjistíte, že se zápis v kódu od toho dnešního zase tak moc neliší.

```css
BODY { 
  column-number: 3 
}
```

Klobouk dolů, zvládli to specifikovat skoro na první dobrou.

## 2002: Éra floatů

Už nějakou dobu dělám weby za peníze.

Na stránkách ostravské cestovky Rywal jsem nepoužil zastaralý prvek `<table>`, ale CSS a vlastnost `float`. Jsem na sebe pyšný.

## 2005: Něco jako grid poprvé

Bert Bos přichází se specifikací „CSS3 Advanced Layout Module“. Vypadá to trochu jako kombinace rámců (`<frame>`) s absolutním pozicováním:

```css
dl { 
  display: "ab"
           "cd" 
}

#sym1 { position: a }
#lab1 { position: b }
#sym2 { position: c }
#lab2 { position: d }
```  

Ale už je tady trochu vidět směr uvažování v šablonách. Vidíte prapředka [vlastnosti `grid-template-areas`](css-grid-template-areas.md).

Následuje mnoho pokusů o návrh rozumného systému layoutu v CSS, ale výrobci prohlížečů je smetávají ze stolu jako „příliš složité na implementaci“.

No – a když není žádná implementace v prohlížečích, návrhy specifikací se vynořují a následně zapadají prachem.

Webaři mezitím skřípou zuby u každého `float`. A pak si na dlouhou dobu zvyknou.

## 2009: Na scénu přichází flexbox

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

<div class="book-index" data-book-index="Microsoft"></div>

V Microsoftu se dějí věci. Plánují zaříznout Silverlight, zjednodušeně řečeno vlastní napodobeninu Flashe, a více šlápnout do webových technologií. Jde jim o využití HTML a CSS pro vlastní produkty, ale jejich vývojáři jsou nešťastní z nedostatku rozumného layoutování v CSS, oproti tomu, na co byli zvyklí v Silverlightu.

<figure>
<img src="../dist/images/original/vdlayout/silverlight.jpg" width="1920" height="540" alt="Microsoft Silverlight">
<figcaption markdown="1">
*To by člověk nečekal, na jak podivných místech najde inspirační zdroje dnešního moderního CSS. Děkovné dopisy prosím posílejte do Microsoftu.*
</figcaption>
</figure>

Nejvíce se tato frustrace projeví u šéfa jednoho z redmondských týmů zaměřených na návrh uživatelského rozhraní, Phila Cuppa. Dojde to tak daleko, že se svým týmem zařídí implementaci systému pro layout do Internet Exploreru 10.

Ta věc se jmenuje „Grid Layout“.

V témže roce přijde Tab Atkins, další známá postava standardů kolem CSS, a přepíše celou specifikaci flexboxu. Jeho hlavním cílem bylo pokusit se odstranit závislost na všech těch šílených háčcích s `float` nebo `table`, které jsme museli jako weboví vývojáři umět.

## 2012: Přelom. Prohlížeče implementují flexbox, Microsoft předává grid do W3C

Cupp prezentuje nový systém rozvržení standardizačnímu konsorciu W3C. Začne se o tom hodně mluvit a další nadšenci (jako Rachel Andrew, kterou jste v Praze mohli potkat na konferenci WebExpo 2016 nebo XML Prague o čtyři roky později) to šíří do komunity webových vývojářů. Odtud už vede přímá cesta k dnešnímu CSS gridu.

V čem byl ale tento pokus o implementaci rozvržení typu mřížky jiný než všechny předchozí? Je to jednoduché – Phil Cupp a jeho lidé zařídili implementaci v prohlížeči.

Nejprve implementace, pak specifikace. Přesně tím postupem, který je dnes vyčítán Googlu. Historie má tendenci se opakovat.

Ale v kontextu CSS gridu se chce říct: hlavně, že to vyšlo.

Z flexboxu se stává „Candidate Recommendation“, což znamená, že specifikace je stabilní. Prohlížeče ji začínají implementovat.

## 2017: Nová a lepší specifikace gridu

Vzniká specifikace „CSS Grid Layout Module Level 1“.

Lidé z W3C ale původní specifikaci od Microsoftu radikálně předělali. Přidali například možnosti automatického umísťování do mřížky a rozšířili ji o lepší možnosti responzivity.

Pár věcí si vzali také ze staré specifikace od Berta Bose. Například definici layoutu pomocí [vlastnosti `grid-template-areas`](css-grid-template.md):

```css
grid-template-areas:
  "heading heading"
  "col1 col2";
```

„Je to jako ASCII art pro vytváření šablony,“ řekla prý Elika Etemad, editorka pro modul CSS Grid Layout Module ve W3C, což sedí.

S výsledkem se právě teď můžete podrobně seznámit na následujících stránkách.

Myslím, že se po dočtení knížky shodneme, že je to takové malé zemětřesení pro vývoj webů. Zemětřesení, které zboří staré základy a vytvoří nové, na kterých se začne stavět… co vlastně?

Pokud byste se do historie chtěli ponořit více, doporučím vám tyto dva články:

- „The Story of CSS grid, from Its Creators“ od Aarona Gustafsona. [vrdl.in/vdghist](https://alistapart.com/article/the-story-of-css-grid-from-its-creators/)
- „A Look Back at the History of CSS“ od Jaye Hoffmanna. [vrdl.in/csshist](https://css-tricks.com/look-back-history-css/)

My se od historie specifikací CSS layoutů přesuneme k dnešním možnostem tvorby rozvržení. Ano, myslím ty, které nejsou předmětem této knížky. Ty, nichž se už dnes slušní frontendisti raději nebaví.
