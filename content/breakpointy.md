# Breakpointy: jak je vymýšlet, nastavovat a spravovat

Breakpointy jsou šířky okna (viewportu) prohlížeče, ve kterých se může měnit design webu. Česky jim můžeme říkat *body zlomu designu*.

*TODO: obrázek - co je breakpoint a co rozmezí*

## Body zlomu a rozmezí {#breakpoint-range}

Všímám si, že si weboví lidé občas nerozumí v definici „breakpointu“. 

*Bod zlomu* (v angličtině „breakpoint“): Konkrétní body, ve kterých se design mění. Samotné hodnoty typu 480px, 640px, 768px a tak dále.

Občas se tím slovem ale označuje jiná věc – *rozmezí* platnosti designu („range“). Tím jsou pak myšleny kategorie zařízení a hodnoty typu 0-480px, 481-640px, 641–767px atd.

Může být proto matoucí, když použijete frázi „breakpoint pro nejmenší displeje“ a myslí te tím hodnoty 0-480px. Mluvíte totiž o „rozmezí“.


## Jak je vymýšlet: ideálně podle designu a cílové skupiny {#vymysleni}

Body zlomu a rozmezí platnosti designu je možné buď použít univerzální nebo vymyslet vlastní.

Obecně vám samozřejmě doporučím vymýšlet vlastní, hlavně ze dvou důvodů:

1. Zohlednění cílové skupiny a zastoupení jednotlivých rozlišení v ní. Může se vám stát, že prefabrikované breakpointy u vás nebudou fungovat, protože v cílové skupině máte například velmi málo uživatelů mobilů a hodně uživatelů velkých displejů.
2. Přihlénutí k vlastnímu navrhu uživatelského rozhraní. Platí, že obsah ovlivňuje design a naopak. Pokud je váš design nestandardní, univerzální breakpointy nemusejí svou roli plnit dobře.


### Univerzální breakpointy {#univerzalni}

Nelámat si hlavu body zlomu na míru je často nevyhnutelné. Z voleje dám dva příklady:

– Pracujete na univerzálním systému pro tvorbu webů jako jsou třeba Webnode nebo SolidPixels.
- Nemáte dost dat. Například proto, že jste v rané fázi řešení a teprve prototypujete.

Nejčastěji se prefabrikované přebírají z populárních frontendových frameworků, jako je Bootstrap. Ten má přednastavené čtyři hodnoty bodů zlomu – *xs* (576 pixelů), *sm* (768), *md* (992) a *lg* (1200).

Lepším řešením může být nastavení podle textu [The 100% correct way to do CSS breakpoints](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862), který z globálních statistik vytáhl čísla tak, by bylo rozložení rovnoměrnější. Došel k těmto hodnotám:

- 600px
- 900px
- 1200px
- 1800px

*TODO IMG The 100% correct way to do CSS breakpoints*

Je to lepší řešení, ale problém je v oněch *globálních* statistikách. Ty prostě nemusí pasovat na vaši cílovou skupinu a váš projekt. Úplně nejlepší řešení tedy leží v odvození breakpointů z vlastních dat. 


### Breakpointy na míru {#na-miru}

To, jak je navržené vaše rozhraní, v tuhle chvíli nevím. Můžete ale s mou pomocí zjistit, jak vypadá vaše cílová skupina. Nebo přesněji – rozložení šířek obrazovky v ní.

V zásadě to dnes už jde vytáhnout z Google Anylytics. Je to trochu práce, ale určitě se vám to u větších projektů vyplatí. Návod jsem sepsal do textu: „S jakými viewporty navštěvují uživatelé můj web?“. https://www.vzhurudolu.cz/prirucka/viewport-google-analytics

Získáte pak grafy podobné těmto:

*TODO IMG: Rozložení breakpointů na Rekrea a VD.cz*

Z obrázku je hezky vidět, že už tyto dva projekty se v zastoupení cílové skupiny liší. Dejme si výsledky do tabulky s breakpointy z článku „The 100% correct way to do CSS breakpoints“.

| Rozmezí v px       | Vzhůru dolů v %   | Rekrea v %  |
|-------------------:|------------------:|------------:|
| 0-699 (xs)         | 20 %              | 33 %        | 
| 600-899 (sm)       | 2 %               | 3 %         |
| 900-1199 (md)      | 5 %               | 13 %        |
| 1200-1799 (lg)     | 38 %              | 39 %        |
| 1800 a více (xl)   | 33 %              | 10 %        |

*Tabulka: Zastoupení šířky viewportů v univerzálních rozmezích designu*

Z tabulky můžeme například vyčíst, že na projektu *Vzhůru dolů* jsou hodně důležité skupina uživatelů s velkými displeji. U obou projektů jsou pak velmi málo zajímavé skupiny s rozlišeními v rozmezí *sm*. Dává nám to buď informaci o tom, jak moc do jednotlivých skupin investovat naši energii nebo o tom, že máme špatně nastavené body zlomu.

*TODO: skutečně nastavené body zlomu pro VD.cz*


## Globální a komponentové {#globalni-komponentove}


## Pojmenování

## Realizace v kódu

