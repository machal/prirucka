# Breakpointy a rozmezí platnosti responzivního designu

Breakpointy jsou velikosti okna ([viewportu](viewport.md)) prohlížeče, ve kterých se může měnit design webu. Česky jim můžeme říkat *body zlomu designu*.

Obsah:
[Body zlomu vs. rozmezí](#breakpoint-range) –
[Návrh breakpointů podle designu](#vymysleni) –
[Pojmenování](#pojmenovavani) –
[Globální a komponentové](#globalni-komponentove) –
[Ne podle zařízení, ale podle obsahu](#podle-obsahu)


## Body zlomu a rozmezí: bavme se o dvou různých věcech {#breakpoint-range}

Všímám si, že si weboví lidé občas nerozumí v definici „breakpointu“.

![Co je breakpoint a co rozmezí](dist/images/original/breakpointy-rozmezi.jpg)

*Bod zlomu* (v angličtině „breakpoint“): Konkrétní body, ve kterých se design mění. Samotné hodnoty typu 480px, 640px, 768px a tak dále.

Občas se slovem „breakpoint“ ale označuje jiná věc – *rozmezí* platnosti designu („range“). Tím jsou pak myšleny skupiny velikosti viewportů a hodnoty typu 0-480px, 481-640px, 481 a více, 1024px a méně a tak dále.

<!-- AdSnippet -->

Může být proto matoucí, když použijete frázi „breakpoint pro nejmenší displeje“ a myslíte tím hodnoty 0-480px. Mluvíte totiž o „rozmezí“.


## Zapomeňte na zařízení. Obsah určuje design. Design určuje breakpointy {#podle-obsahu}

Častou chybou je vymýšlení breakpointů „podle zařízení“. Dejme tomu, že chceme oslovit všechny tablety. Usmyslíme si, že to zařídíme následující podmínkou:

```css
/* Bod zlomu „pro tablety“ (špatně) */
@media only screen and (min-width: 640px) and (max-width: 768px) { }
```

Vypadá to hezky, ale je to konina. Jak už jsem mnohokrát apeloval, rozlišení mobilů i tabletů je tolik, že se nelze na nějaké rozmezí pro tablety nebo mobily spoléhat. V naší ukázce tak některé tablety podmínku splní, jiné zase ne.

Takový Samsung Nexus 10 má rozlišení na delší straně v hodnotě 1280 pixelů, takže podmínku nesplní. Splní ji naopak mnoho chytrých telefonů, jako třeba iPhone 6 v režimu na šířku se 736 pixely. Media Queries proto k detekci zařízení vůbec nepoužívejte.

Vždy se při vymýšlení bodu zlomů snažte zaměřit na obsah a jeho rozvržení na obrazovce. Body zlomu mají vyplynout z obsahu a jeho designu.

Musím tady citovat klasika Stephena Haye:

> Začněte s malou obrazovkou a pak zvětšujte okno dokud se design nerozbije. Tady je čas na breakpoint!

## Nepřebírejte hotové breakpointy. Vymyslete je podle designu a cílové skupiny {#vymysleni}

Body zlomu a rozmezí platnosti designu je možné buď použít univerzální nebo vymyslet vlastní.

Obecně vám samozřejmě doporučím vymýšlet vlastní, hlavně ze dvou důvodů:

1. Zohlednění cílové skupiny a zastoupení jednotlivých rozlišení v ní. Může se vám stát, že prefabrikované breakpointy u vás nebudou fungovat, protože v cílové skupině máte například velmi podprůměrně uživatelů mobilů a nadprůměrně uživatelů velkých displejů. Univerzální breakpointy vycházejí z průměrných dat, což vám může být k ničemu.
2. Přihlédnutí k vlastnímu návrhu uživatelského rozhraní. Platí, že obsah ovlivňuje design a naopak. Pokud je váš design něčím výjimečný (což je tak každý druhý), univerzální breakpointy nemusejí svou roli plnit dobře.

Pojďme se ale na ty prefabrikované body zlomu podívat. Někdy se hodit mohou.

### Univerzální breakpointy {#univerzalni}

Nelámat si hlavu body zlomu na míru je často jediná cesta. Z voleje dám dva příklady:

- Pracujete na univerzálním systému pro tvorbu webů jako jsou třeba Webnode, SolidPixels nebo framework typu Bootstrapu. Prostě nevíte, jak bude vypadat obsah a design jednotlivých webů.
- Nemáte dost dat. Například proto, že jste v rané fázi řešení a teprve prototypujete.

Nejčastěji se prefabrikované body zlomu designu přebírají z populárních frontendových frameworků, jako je právě Bootstrap. Ten má přednastavené čtyři hodnoty – *xs* (576 pixelů), *sm* (768), *md* (992) a *lg* (1200).

<!-- AdSnippet -->

Lepším řešením může být nastavení podle textu Davida Gilbertsona „The 100% correct way to do CSS breakpoints“. [vrdl.in/correctbreakpoints](http://vrdl.in/correctbreakpoints)

Ten z globálních statistik vytáhl čísla tak, by bylo rozložení viewportů v jednotlivých rozmezích rovnoměrnější.

<figure>
<img src="dist/images/original/breakpointy-gilbertson.jpg" alt="Breakpointy Davida Gilbertsona">
<figcaption markdown="1">
*Obrázek: Rozložení breakpointů pro můj web Vzhůru dolů a na webech cestovky Rekrea za první polovinu roku 2018*
</figcaption>
</figure>

Došel k těmto hodnotám:

- 600px
- 900px
- 1200px
- 1800px

Je to lepší řešení, ale problém je v oněch *globálních* statistikách. Ty prostě nemusejí pasovat na vaši cílovou skupinu a váš projekt. Úplně nejlepší řešení tedy leží v odvození breakpointů z vlastního designu a vlastních dat.


### Breakpointy na míru {#na-miru}

To, jak je navržené vaše rozhraní, v tuhle chvíli nevím. Můžete ale s mou pomocí zjistit, jak vypadá vaše cílová skupina. Nebo přesněji – rozložení šířek obrazovky v ní.

V zásadě to dnes už jde vytáhnout z Google Analytics. Je to trochu práce, ale určitě se vám to u větších projektů vyplatí. Návod jsem sepsal do textu: „S jakými viewporty uživatelé navštěvují můj web?“. [vrdl.cz/p/viewport-google-analytics](https://www.vzhurudolu.cz/prirucka/viewport-google-analytics)

Získáte pak grafy podobné těmto:

<figure>
<img src="dist/images/original/breakpointy-vd-rekrea.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Obrázek: Rozložení breakpointů pro můj web Vzhůru dolů a na webech cestovky Rekrea za první polovinu roku 2018*
</figcaption>
</figure>

Z obrázku je hezky vidět, že už tyto dva projekty se v zastoupení cílové skupiny liší. Dejme si výsledky do tabulky s breakpointy z článku „The 100% correct way to do CSS breakpoints“.

<figure markdown="1">
| Rozmezí v px       | Vzhůru dolů      | Rekrea       |
|:-------------------|-----------------:|-------------:|
| 0-599 (xs)         | 20 %              | 33 %        |
| 600-899 (sm)       | 2 %               | 3 %         |
| 900-1199 (md)      | 5 %               | 13 %        |
| 1200-1799 (lg)     | 38 %              | 39 %        |
| 1800 a více (xl)   | 33 %              | 10 %        |
<figcaption markdown="1">
*Tabulka: Zastoupení šířky viewportů v univerzálních rozmezích designu*
</figcaption>
</figure>

Z tabulky můžeme například vyčíst, že na projektu *Vzhůru dolů* je hodně důležitá skupina uživatelů s velkými displeji – rozmezí *xl*. U obou projektů jsou pak velmi málo zajímavé skupiny s rozlišeními v rozmezí *sm*. Dává nám to informaci o prioritě jednotlivých rozmezí. Prostě víme, jak moc do jednotlivých skupin investovat naši energii.

Tím se dostáváme k dalšímu zajímavého bodu - jak breakpointy pojmenovávat.

## Pojmenování: Ideálně abstraktně podle triček {#pojmenovavani}

Předpokládám, že breakpointy máte uložené v proměnné preprocesoru. Vezmu tři příklady pojmenování bodu zlomu na 900px:

- *iPad potrait* – Špatně, protože zmiňuje konkrétní zařízení. Platí totiž určitě i pro jiné tablety než iPad.
- *Tablet potrait* – Mírně lepší, ale pořád špatně. Bod zlomu se může týkat také mobilu v landscape režimu nebo zmenšeného okna desktopu.
- *Medium* (nebo v kódu `$breakpoint-md`) – Dle mého nejlepší pojmenování. Je abstraktní, takže do komunikace neplete zavádějící konkrétnosti. A taky je snadno naučitelný a obvyklý. Kromě výrobců triček používá stupnici *xs* (extra small), *sm* (small), *md* (medium), *lg* (large), *xl* (extra large) také Bootstrap a další frontendové frameworky.

Raději ještě upozorním, že ať jsou breakpointy pojmenované jakkoliv, měl by se na jejich názvosloví domluvit celý tým.


## Lokální a globální body zlomu {#globalni-komponentove}

Obsahové body zlomu nejčastěji definuji podle obsahu konkrétních komponent. Říkám jim *lokální* (občas též *komponentové* breakpointy nebo kdysi *mikrobreakpointy*). Hodně názvů pro stejnou věc, že ano? Jde ale o totéž: odlišení bodů zlomu a rozmezí platnosti designu, které platí pro celou aplikaci od těch, které platí jen pro její malou část – obvykle právě komponentu.

### Lokální {#komponentove}

Jako příklad vezměme záložkovou navigaci, ve které je určitý počet položek, proto layout zapínáme až od určité hodnoty:

```scss
/* tabs.scss: */
$tabs-breakpoint: 260px;

@media only screen and (min-width: #{$tabs-breakpoint}) {
  .tabs { display: flex; }
}
```

### Globální {#globalni}

To ale neznamená, že nepotřebujete body zlomu *globální*. Ty se nejčastěji hodí pro nastavení layoutu stránky, ale přebírají jej i jednotlivé komponenty:

```scss
/* variables.scss: */
$md-breakpoint: 600px;

/* tabs.scss: */
@media only screen and (min-width: #{$md-breakpoint}) {
  .tabs { font-size: 1.3rem; }
}
```

<div class="ebook-only" markdown="1">
V dalším textu se podíváme na to, jaké jsou možnosti implementace breakpointů a rozmezí v kódu.
</div>


<!-- AdSnippet -->
