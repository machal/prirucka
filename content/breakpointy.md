# Breakpointy a rozmezí platnosti responzivního designu

Breakpointy jsou velikosti okna ([viewportu](viewport.md)) prohlížeče, ve kterých se může měnit design webu. Česky jim můžeme říkat *body zlomu designu*.

<div class="web-only" markdown="1">

## Obsah článku

- [Body zlomu vs. rozmezí](#breakpoint-range)
- [Návrh breakpointů podle designu](#vymysleni)
- [Pojmenování](#pojmenovavani)
- [Globální a komponentové](#globalni-komponentove)
- [Ne podle zařízení, ale podle obsahu](#podle-obsahu)

</div>

Podívejte se na video „Breakpointy“.

YouTube: [youtu.be/6sdcrsotee4](https://www.youtube.com/watch?v=6sdcrsotee4)

## Body zlomu a rozmezí: Bavme se o dvou různých věcech {#breakpoint-range}

Všímám si, že se weboví lidé občas neshodnou v definici „breakpointu“.

![Co je breakpoint a co rozmezí](../dist/images/original/breakpointy-rozmezi.jpg)

*Bod zlomu* (v angličtině „breakpoint“): Konkrétní body, ve kterých se design mění. Samotné hodnoty typu 480px, 640px, 768px a tak dále.

Občas se ale slovem „breakpoint“ označuje ještě jiná věc – rozmezí platnosti designu („range“). Tím jsou pak myšleny skupiny velikosti viewportů a hodnoty typu 0–480px, 481 a více, 1024px a méně a tak dále.

<!-- AdSnippet -->

Může být proto matoucí, když použijete frázi „breakpoint pro nejmenší displeje“ a myslíte tím hodnoty 0–480px. Mluvíte totiž o rozmezí. Ale to jen tak na okraj. Pojďme na opravdu důležité téma – jak vlastně body zlomu vymyslet pro konkrétní projekty?

## Zapomeňte na zařízení: Z obsahu vyplývá design. Z designu vyplývají breakpointy {#podle-obsahu}

Častou chybou je vymýšlet breakpointy „podle zařízení“. Dejme tomu, že chceme oslovit všechny tablety. Usmyslíme si, že to zařídíme následující podmínkou:

```css
/* Bod zlomu „pro tablety“ (špatně) */
@media only screen and (min-width: 640px) and (max-width: 768px) { }
```

Vypadá to hezky, ale je to konina. Různých rozlišení mobilů i tabletů je tolik, že se nelze na nějaké rozmezí pro tablety nebo mobily spoléhat. V naší ukázce tak některé tablety podmínku splní, jiné zase ne.

Takový Samsung Nexus 10 má rozlišení na delší straně v hodnotě 1280 pixelů, takže podmínku nesplní. Splní ji naopak mnoho chytrých telefonů jako třeba iPhone 6 v režimu na šířku se 736 pixely. Media Queries proto k detekci zařízení vůbec nepoužívejte.

<div class="related web-only" markdown="1">
- [Breakpointy v CSS](breakpointy-css.md)
- [Velikost okna prohlížeče](velikost-okna-css-js.md)
- [Rozlišení displeje](rozliseni-displeje.md)
</div>

Vždy se při vymýšlení bodů zlomu snažte zaměřit na obsah a jeho rozvržení na obrazovce. Body zlomu mají vyplynout z obsahu a jeho designu.

Musím tady citovat klasika Stephena Haye:

> Začněte s malou obrazovkou a pak zvětšujte okno, dokud se design nerozbije. Tady je čas na breakpoint!

OK, vykašleme se tedy na zařízení a jejich obrazovky. Pořád jsem vám ale ještě neprozradil, jak ty breakpointy vymýšlet. Omlouvám se, že vás takhle napínám. Už na to jdeme. Jen ještě jedno varování.

## Ideálně nepřebírejte hotové breakpointy. Odvoďte je z designu a cílové skupiny vašeho projektu {#vymysleni}

Obecně vám samozřejmě doporučím vymýšlet vlastní breakpointy, hlavně ze dvou důvodů:

1. Zohlednění cílové skupiny a zastoupení jednotlivých rozlišení v ní. Může se vám stát, že prefabrikované breakpointy u vás nebudou fungovat, protože v cílové skupině máte například velmi podprůměrný počet uživatelů mobilů a nadprůměrné množství uživatelů velkých displejů. Univerzální breakpointy vycházejí z průměrných dat, což vám může být k ničemu.
2. Přihlédnutí k vlastnímu návrhu uživatelského rozhraní. Platí, že obsah ovlivňuje design a naopak. Pokud je váš design něčím výjimečný (což je tak každý druhý), univerzální breakpointy nemusejí svou roli plnit dobře.

Pojďme se ale na ty prefabrikované body zlomu podívat. Někdy se totiž hodit mohou.

### Univerzální breakpointy {#univerzalni}

Nelámat si hlavu body zlomu na míru je často jediná cesta. Z voleje dám dva příklady:

- Pracujete na univerzálním systému pro tvorbu webů, jako jsou třeba Webnode, SolidPixels nebo framework typu Bootstrapu. Prostě nevíte, jak bude vypadat obsah a design jednotlivých webů.
- Nemáte dost dat. Například proto, že jste v rané fázi návrhu projektu a teprve prototypujete.

Nejčastěji se prefabrikované body zlomu designu přebírají z populárních frontendových frameworků, jako je právě Bootstrap. Ten má přednastavené čtyři hodnoty – *xs* (576 pixelů), *sm* (768), *md* (992) a *lg* (1200).

<!-- AdSnippet -->

Lepším řešením může být nastavení podle textu Davida Gilbertsona „The 100% correct way to do CSS breakpoints“. [vrdl.in/correctbreakpoints](http://vrdl.in/correctbreakpoints)

Tomu se na breakpointech Bootstrapu nelíbily dvě věci.

Za prvé – nedělí uživatele do rovnoměrných skupin a obecně spíše vycházejí ze šířky obrazovek existujících zařízení než z dat od uživatelů.

A ta druhá věc? Není dobré udělat z konkrétního rozlišení konkrétního zařízení breakpoint. Zde se bavíme hlavně o hodnotě 768 CSS pixelů pro bod zlomu „sm“. Určitě jste to sami zažili: Designérka řekne „pro breakpoint 768…“ a vývojář rovnou píše kód zaměřující se *přesně* na 768 pixelů. Jenže designérka myslela 768 pixelů a výše. A to mohla myslet také rozmezí mezi 768 a 992 pixely, že ano?

Zpět k Davidu Gilbertsonovi. Ten z globálních statistik vytáhl taková čísla, aby bylo rozložení viewportů v jednotlivých rozmezích rovnoměrnější.

<figure>
<img src="../dist/images/original/breakpointy-gilbertson.jpg" alt="Breakpointy Davida Gilbertsona">
<figcaption markdown="1">
*Návrh rozložení breakpointů tak, aby v rozmezích byly rovnoměrně zastoupeny různé skupiny zařízení. Oranžové tečky představují nejčastější rozlišení. Zdroj: David Gilbertson*
</figcaption>
</figure>

V tomto kroku jsme došli k těmto hodnotám:

- 600px
- 900px
- 1200px
- 1800px

Jde o lepší řešení než to z Bootstrapu, takže pokud nic jiného nemáte, můžu vám jej doporučit.

Zůstává zde ale jeden problém. Vězí v oněch *globálních* statistikách. Ty prostě nemusejí pasovat na vaši cílovou skupinu a váš projekt. Úplně nejlepší řešení tedy spočívá v odvození breakpointů z vlastního designu a vlastních dat.

### Breakpointy na míru {#na-miru}

To, jak je navržené vaše rozhraní, v tuhle chvíli nevím. Můžete ale s mou pomocí zjistit, jak vypadá vaše cílová skupina. Nebo přesněji – rozložení šířek obrazovky v ní.

V zásadě to dnes už jde vytáhnout z Google Analytics. Je to trochu práce, ale určitě se vám to u větších projektů vyplatí. Podíváme se na jeho výsledky. Podrobný návod, jak toho dosáhnout, jsem sepsal do textu „S jakými viewporty uživatelé navštěvují můj web?“. [vrdl.cz/p/viewport-google-analytics](https://www.vzhurudolu.cz/prirucka/viewport-google-analytics)

Získáte z něj grafy podobné těmto:

<figure>
<img src="../dist/images/original/breakpointy-vd-rekrea.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Rozložení breakpointů pro můj web Vzhůru dolů a na webech cestovky Rekrea za první polovinu roku 2018*
</figcaption>
</figure>

Z obrázku je hezky vidět, že už tyto dva projekty se v zastoupení cílové skupiny liší. Dejme si výsledky do tabulky s breakpointy z článku Davida Gilbertsona.

<figure markdown="1">
| Rozmezí v px       | Vzhůru dolů      | Rekrea       |
|:-------------------|-----------------:|-------------:|
| 0–599 (xs)         | 20 %              | 33 %        |
| 600–899 (sm)       | 2 %               | 3 %         |
| 900–1199 (md)      | 5 %               | 13 %        |
| 1200–1799 (lg)     | 38 %              | 39 %        |
| 1800 a více (xl)   | 33 %              | 10 %        |
<figcaption markdown="1">
*Tabulka: Zastoupení šířky viewportů v univerzálních rozmezích designu*
</figcaption>
</figure>

Z tabulky můžeme například vyčíst, že na projektu *Vzhůru dolů* je hodně důležitá skupina uživatelů s velkými displeji – rozmezí *xl*. U obou projektů jsou pak velmi málo zajímavé skupiny s rozlišeními v rozmezí *sm*. Dává nám to informaci o prioritě jednotlivých rozmezí. Prostě víme, jak moc do jednotlivých skupin investovat energii.

Poznámka k těmto dvěma projektům – ve skutečnosti mají nastaveny body zlomu trochu jinak, podle designu. Zde je uvádím proto, že se výrazně liší v cílové skupině a při hypotetické situaci nasazení univerzálních breakpointů je hezky vidět, že uživatele nerozdělují rovnoměrně a že bychom v dalším kroku museli body zlomu upravovat.

<div class="related" markdown="1">
- [Google Analytics: S jakými viewporty navštěvují uživatelé můj web?](viewport-google-analytics.md)
</div>

Pro větší projekty vám velmi doporučím vytáhnout si tahle data o rozlišeních obrazovky vašich uživatelů. Pomůže vám to minimálně prioritizovat intenzitu práce pro jejich skupiny odvozené z rozmezí šířek obrazovky.

Tím se dostáváme k dalšímu zajímavého bodu – jak breakpointy pojmenovávat.

## Pojmenování: Ideálně abstraktně podle triček {#pojmenovavani}

Předpokládám, že breakpointy máte uložené v proměnné preprocesoru. Vezmu tři příklady pojmenování bodu zlomu na 900px:

- *iPad potrait:* Žádná sláva, protože zmiňuje konkrétní zařízení. Platí totiž určitě i pro jiné tablety než iPad.
- *Tablet potrait:* O něco lepší, ale pořád špatně. Bod zlomu se může týkat také mobilu v landscape režimu nebo zmenšeného okna desktopu.
- *Medium* (nebo v kódu `$breakpoint-md`): Dle mého nejlepší pojmenování. Je abstraktní, takže do komunikace neplete zavádějící konkrétnosti. A taky je snadno naučitelný a obvyklý. Kromě výrobců triček používá stupnici *xs* (extra small), *sm* (small), *md* (medium), *lg* (large) a *xl* (extra large) také Bootstrap a další frontendové frameworky.

Tolik k pojmenování. Důležité je, že ať jsou breakpointy pojmenované jakkoliv, měl by se na jejich názvosloví domluvit celý tým.

## Lokální a globální body zlomu {#globalni-komponentove}

Obsahové body zlomu nejčastěji definuji podle obsahu konkrétních komponent. Říkám jim *lokální* breakpointy (občas též *komponentové* breakpointy nebo kdysi *mikrobreakpointy*). Hodně názvů pro stejnou věc, že ano? Jde ale o totéž: odlišení bodů zlomu a rozmezí platnosti designu, které platí pro celou aplikaci, od těch, které platí jen pro její malou část – obvykle právě komponentu.

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

To ale neznamená, že nepotřebujete body zlomu *globální*. Ty se nejčastěji hodí pro nastavení layoutu stránky, ale přebírají je i jednotlivé komponenty:

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

<div class="web-only" markdown="1">

Pojďme si text shrnout do několika dobře míněných rad:

1. Rozlišujte breakpointy (body zlomu) a rozmezí platnosti designu.
2. Nefixujte se na rozlišení různých zařízení.
3. Z obsahu vyplývá design, z designu vyplývají breakpointy.
4. Snažte se vytvářet breakpointy na míru projektu. Podle obsahu a dat o používaných velikostech okna.
5. Pojmenovávejte raději abstraktně (*xs*) než s vazbou na zařízení (*tablet*).
6. Rozlišujte globální breakpointy (pro celý projekt) a lokální (pro komponenty).

</div>

<!-- AdSnippet -->
