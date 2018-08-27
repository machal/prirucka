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

Z tabulky můžeme například vyčíst, že na projektu *Vzhůru dolů* jsou hodně důležité skupina uživatelů s velkými displeji – rozmězí *xl*. U obou projektů jsou pak velmi málo zajímavé skupiny s rozlišeními v rozmezí *sm*. Dává nám to buď informaci o tom, jak moc do jednotlivých skupin investovat naši energii nebo o tom, že máme špatně nastavené body zlomu.

*TODO: skutečně nastavené body zlomu pro VD.cz*


## Globální a komponentové  body zlomu {#globalni-komponentove}

*TODO*

Obsahové body zlomu nejčastěji definuji podle obsahu konkrétních komponent. Říkám jim *komponentové*. Jako příklad vezměme záložkovou navigaci, ve které je určitý počet položek, proto layout zapínám až od určité hodnoty:

```scss
/* tabs.scss: */
$tabs-breakpoint: 260px; 

@media only screen and (min-width: #{$tabs-breakpoint}) { 
  .tabs { display: flex; }
}
```

To ale neznamená, že nepotřebujete body zlomu *globální*. Ty se nejčastěji hodí pro nastavení layoutu stránky:

```scss
/* variables.scss: */
$md-breakpoint: 260px; 

/* tabs.scss: */
@media only screen and (min-width: #{$md-breakpoint}) { 
  .page-layout { display: flex; }
}
```

Globální breakpointy jsou obvykle uložené v nějaké hodnotě sdílené napříč projektem – v proměnné CSS preprocesoru a podobně. Mohou je pak samozřejmě přebírat i komponenty.

## Pojmenování

## Realizace v kódu

## Ne podle zařízení, ale podle obsahu {#podle-obsahu}

Častou chybou je vymýšlení breakpointů „podle zařízení“. Dejme tomu, že chceme oslovit všechny tablety. Usmyslíme si, že to zařídíme následující podmínkou:

```css
/* Bod zlomu „pro tablety“ (špatně) */
@media only screen 
  and (min-width: 40em) and (max-width: 48em) { 
    /* Kod pro obrazovky mezi 640 a 768 px */
}
```

Vypadá to hezky, ale je to konina. Jak už jsem psal, rozlišení mobilů i tabletů je tolik, že se nelze na nějaké rozmezí pro tablety nebo mobily spoléhat. V naší ukázce tak některé tablety podmínku splní, jiné zase ne. 

Takový Samsung Nexus 10 má rozlišení na delší straně v hodnotě 1280 pixelů, takže podmínku nesplní. Splní ji naopak mnoho chytrých telefonů, jako třeba iPhone 6 v režimu na šířku se 736 pixely. Media Queries proto k detekci zařízení vůbec nepoužívejte.

Vždy se při vymýšlení bodu zlomů snažte zaměřit na obsah a jeho rozvržení na obrazovce. Media Queries mají vyplynout z obsahu.

Dejme tomu, že máme jednoduchou vodorovnou navigaci, jejíž obsah se nemění. Rozhodujeme se o hodnotě bodu zlomu šířky okna, kdy se navigace z vodorovné stane svislou pro menší displeje.

```css
/* Bod zlomu nastavený podle obsahu */
@media only screen and (min-width: 27.5em) { … }
```

Zvolili jsme `27.5em` (440 pixelů) podle šířky okna, kdy se položky navigace ještě vejdou vedle sebe. Více na CodePenu: [cdpn.io/e/bBPdgQ](https://codepen.io/machal/pen/bBPdgQ)

Jsou ale situace, kdy je nastavení bodů zlomu podle obsahu nemožné. Někdy obsah prostě při tvorbě layoutu neznáme: Například když pracujeme na frameworku nebo připravujeme šablonu pro obsah, který má v rukách až koncový uživatel našeho redakčního systému. Jako příklad můžu opět jmenovat Bootstrap, který má body zlomu nastavené pevně. Naštěstí jdou měnit a vždy můžete přidat nějaké vlastní. 
