# Jednotky pro tvorbu webu (em, rem, %, px, vh, vw): Kde použít jakou?

<div class="book-index" data-book-index="Jednotky"></div>

Pojďme si tady shrnout všechny CSS jednotky použitelné v dnešním webdesignu. A na příkladu ukázat, k čemu se která hodí.

Základními jednotkami pro mě jsou ty relativní k velikosti písma – `rem` a `em`.

<!-- AdSnippet -->

Ani ty ale nepovažuji za žádné Supermany mezi CSS jednotkami. Prostě se nehodí na vše. Pro různé účely ještě budeme potřebovat i Spider-Mana, Batmana a další jejich kolegy a kolegyně.

## Rychlý přehled použitelných jednotek {#prehled}

Zapamatujte si hlavně následující šestici.

| Jednotka | Jak počítá rozměr?                            |
| -------- | --------------------------------------------- |
| `rem`    | relativně k velikosti písma na prvku `<html>` |
| `em`     | relativně k velikosti písma na elementu       |
| `px`     | přepočtený pixel, CSS pixel                   |
| `%`      | procenta relativně k rodičovskému elementu    |
| `vw`     | procento ze šířky okna prohlížeče             |
| `vh`     | procento z výšky okna prohlížeče              |

Existují samozřejmě ještě další: namátkou `pt`, `ex` nebo `vmax`. Buď je ale jejich využitelnost malá, nebo skoro žádná, takže pro zjednodušení je v tomto textu úplně vynechám.

## Které jednotky použít v jakých situacích? {#scenare}

V tomhle textu dost dbám na to, abychom si nerozbili přirozenou dědičnost velikosti písma v prohlížečích. Kromě nás, autorů stránek, si ji totiž může chtít změnit uživatel a občas ji mění i prohlížeče. Proto vám pro různá použití doporučuji různé jednotky:

- Základní velikost písma v dokumentu: [%](#velikost-pisma-html)
- Rozměry vycházející z velikosti písma dokumentu: [rem](#rem)
- Rozměry vycházející z velikosti písma rodiče: [em](#em)
- Media Queries: [em](#media-queries)
- Výška řádku: [číslem bez jednotky](#vyska-radku)
- Rámečky, dekorace: [px](#dekorace)
- Typografie podle velikosti okna: [vw](#viewport-typografie)

Je ale možné, že si skoro všude vystačíte s `px`. K tomu se dostávám [na konci textu](#px).

## Základní velikost písma v dokumentu: %  {#velikost-pisma-html}

Výchozí velikost písma je v drtivé většině prohlížečů `16px`. Existují ale méně významné prohlížeče, které velikost písma nastavují jinak. Prostě tak, aby se nám na konkrétním zařízení lépe četlo.

Například prohlížeč v Kindle 3 měl výchozí velikost písma `26px`, Opera Mini 7 zase `17px`. Můžeme sice sázet na to, že většina nejrozšířenějších prohlížečů výchozí velikost písma nemění, ale moje zkušenost velí, že je lepší to nedělat.

Ohledně výchozí velikosti písma v prohlížečích napsal Nicolas Hoizey hezký článek „People don't change the default 16px font size in their browser (You wish!)“ [vrdl.in/16px](https://nicolas-hoizey.com/2016/03/people-don-t-change-the-default-16px-font-size-in-their-browser.html)

Pokud vám výchozí velikost písma nevyhovuje, změňte to relativními jednotkami, nejlépe procenty:

```css
html {
  font-size: 125%;
}
```

Nastavíte tak o čtvrtinu větší písmo, než je výchozí. Skoro u všech prohlížečů tedy `20px`. V Kindle 3 by to bylo `33px`. Je důležité si uvědomit, že je to v pořádku. Pokud prohlížeč nastavuje jinak velké písmo, dělá to z rozumných důvodů.

### Proč ne px? Protože lidé si zvětšují písmo v prohlížečích  {#proc-ne-px}

Pokud bychom už tady použili `px`, našim milým uživatelům bychom zakázali měnit si výchozí velikost písma v prohlížečích.

Pozor, nebavíme se o „zoomování“, které je dostupné na klávesové zkratky nebo jednoduše nastavitelné v rozhraní prohlížeče, ale o zvětšení velikosti písma pro všechny weby. Taková věc stále existuje v prohlížečích nebo v operačních systémech. A ano, lidé to používají. Asi taky jednou budeme. Dělají to totiž lidé s horším zrakem nebo třeba jen méně kvalitními displeji.

Vývojář z Archive.org Evan Minto tohle měřil a zjistil, že velikost písma si v jejich prohlížeči změnila 3 % uživatelů. Jak trefně podotýkal, je to víc než podíl návštěvníků v té době používajících Internet Explorer, Edge nebo Operu Mini.

Protože chceme vytvářet řešení s co nejširším uživatelským zásahem, neměli bychom to ignorovat. Píše to v textu „Pixels vs. Ems: Users DO Change Font Size“. [medium.com/@vamptvo/5cfb20831773](https://medium.com/@vamptvo/pixels-vs-ems-users-do-change-font-size-5cfb20831773)

## Rozměry vycházející z velikosti písma dokumentu: rem  {#rem}

Velikost písma pro jednotlivé části dokumentu, vnější a vnitřní okraje, ale i další vlastnosti v dokumentu a komponentách nastavuji v `rem`.

`1rem` (1 root `em`) obsahuje výchozí velikost písma nastavenou autorem pro dokument a případně ještě upravenou uživatelem nebo prohlížečem, jak už jsme viděli.

Pokud ji na dokumentu nezměníme, platí, že `1rem = 16px`.

```css
p { margin-bottom: 1rem; }
h1 { font-size: 2rem; }
```

Odstavcům tímto kódem nastavím spodní vnější okraj na výšku písma. Nadpisy první úrovně budou dvojnásobně velké oproti standardní velikosti písma.

<div class="related web-only" markdown="1">

- [CSS3 jednotky](css3-jednotky.md)
- [Dědičnost v CSS](css-dedicnost.md)
- [Breakpointy designu](breakpointy.md)

</div>

Používat `rem` je výhodné i z pohledu vývojáře:

- V `1rem` máte uloženou základní velikost písma a nemusíte si pamatovat, jestli je to  12, 14, 16 nebo kolik vlastně pixelů.
- Šířka layoutu nastavená v `rem` bude dodržovat optimální délku textu, i když si uživatel písmo zvětší.
- Díky `rem` je také možné zvětšit celý dokument na konkrétních rozmezích mezi jednotlivými body zlomu designu.

### Co když dostávám podklady v px? {#podklady-v-px}

Možná jste zvyklí při převodu designu do kódu pracovat v `px`, protože grafičky a grafici dodávají podklady v těchto jednotkách. Jak už jsem ale napsal, nastavovat v `px` cokoliv odvozeného od hlavní velikosti písma komplikuje život mnohým uživatelům.

Jak z konfliktu design versus přístupnost ven? Může vám pomoci automatická úprava CSS.

Možná znáte knihovnu PostCSS, jež umožňuje automatizované zpracování stylů. Plugin pro PostCSS „postcss-pxtorem“ zařídí převod z px do rem pro vybrané vlastnosti. Z `font-size: 16px` prostě udělá `font-size: 1rem`. [github.com/cuth/postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)

`rem` tedy považuji za hlavní jednotku pro tvorbu rozhraní. Velmi se nám ale také hodí `em`.

## Rozměry vycházející z velikosti písma rodiče: em {#em}

Jednotka `em` obsahuje velikost písma elementu, nikoliv dokumentu.

```css
html {
  font-size: 100%; /* = 16px */
}

p {
  padding: 1em; /* = 16px */
}

.button {
  font-size: 75%;
  padding: 1em; /* = 12px */
}
```

Vidíte, že `1em` znamená v různých místech dokumentu různé věci. Někde to může být fajn: Třeba v případě, že kódujete komponentu, jejíž velikost má být určená právě velikostí písma na rodičovském prvku.

Vývojářům se ale s „emky“ samozřejmě pracuje trošku hůř než s „remky“. Ne každý se chce stát pochodující kalkulačkou pro převod mezi `em` a pixely.

### Jen pozor, em není čtverčík {#em-neni-ctvercik}

„Čtverčík“ je typografická jednotka, která se počítá ze šířky velkého „M“. `em` se občas nepřesně jako čtverčík označuje. Jenže to by pak bylo pro různá písma různě velké.  

A ono není. W3C definovalo `em` jinak. Jeho velikost v kořeni dokumentu je ve všech prohlížečích a při použití jakéhokoliv písma stejná – `16px`. Pokud to ovšem nezmění někdo ze zákeřné trojice uživatel, prohlížeč či autor stránky. Vysvětlují to například uživatelé diskuze „Jednotka em není šířka písmena M“ na JakPsátWeb. [vrdl.in/oyqwn](https://diskuse.jakpsatweb.cz/?action=vthread&forum=19&topic=138070)

## Media Queries: em {#media-queries}

Proč nepoužít `px`?  Opět kvůli nemožnosti reakce dotazů v Media Queries na zvětšování písma.

```css
@media screen and (min-width: 30em) { }
```

Iris Winter v textu „PX, EM, or REM? Examining Media Query Units in 2021“ píše, že kvůli nedokonalé implementaci v Safari je stále lepší nepoužívat pixely, ale dát přednost `em` nebo případně `rem`. Obě tyto jednotky se v dotazech Media Queries odkazují na velikost písma v dokumentu, takže jsou volně zaměnitelné. [betterprogramming.pub/e00cf37b91a9](https://betterprogramming.pub/px-em-or-rem-examining-media-query-units-in-2021-e00cf37b91a9)

V kodérské praxi je ale možné použít automatický převod z `px`, protože tady se s CSS pixely pracuje lépe. Pomůže plugin do PostCSS jménem „postcss-em-media-query“. [github.com/niksy/postcss-em-media-query](https://github.com/niksy/postcss-em-media-query)

## Výška řádku: číslem bez jednotky {#vyska-radku}

Hodnota bez jednotky je pro výšku řádku specifická, ale dává naprostý smysl:

```css
h1 {
  line-height: 1.5;
}
```

V ukázce z CodePenu (viz dále) je výška řádku prostě jedenapůlnásobek velikosti písma nadpisu první úrovně. A je nám pak úplně jedno, jak si který čert nastaví velikost písma.

Proč je to lepší než nastavení „natvrdo“ v `rem`, `em` nebo `px`? Pokud se autorsky nebo uživatelsky v některém kontextu změní velikost písma, nemusíte pak už měnit nastavení výšky řádku.

## Layout: procenta, ale i další jednotky {#layout}

Pro layout se dobře hodí procenta. Například:

```css
.layout-col {
  width: 50%;
}
```

Raději připomínám, že se vždy počítají ze šířky nejbližšího rodičovského prvku.

Použitelných jednotek pro layout je ale více:

- Procenta nebo `vw` se roztahují podle šířky okna, `vh` podle jeho výšky.
- `rem` a `em` podle velikosti písma.
- Ve [flexboxu](css-flex.md) je možné používat také absolutní jednotky (`flex: 1`).
- V CSS gridu zase takzvané [podílové jednotky `fr`](css-jednotka-fr.md) (`grid-template-columns: 3fr 1fr`).
- Občas se hodí i fixní rozměry v `px`.

## Rámečky, dekorace: px {#dekorace}

Doporučuji `px` používat jen tam, kde potřebujete precizní vyjádření v pixelech. Třeba pro rámečky mezi prvky navigace:

```css
.nav-item {
  border-left: 1px solid white;
}
```

Jen pro jistotu připomínám, že už nejde o hardwarový pixel, ale o referenční nebo takzvaný „CSS pixel“. Píšu o něm na Vzhůru dolů. [https://vrdl.cz/p/css-pixel](https://www.vzhurudolu.cz/prirucka/css-pixel)

## Typografie podle velikosti okna: vw {#viewport-typografie}

Můžete potřebovat i zvětšování a zmenšování velikosti písma podle šířky nebo výšky okna. Pak si vzpomeňte na jednotky `vw` (viewport width) nebo `vh` (viewport height).

Například tento nadpis z příkladu bude mít velikost písma `2rem` a k tomu vždy dvě procenta ze šířky okna:

```css
.heading {
  font-size: calc(2rem + 2vw);
}
```

Nakonec přidávám odkaz na CodePen, ve kterém je (dle mého) optimální nastavení jednotek použito na jednoduchém příkladě.

CodePen: [cdpn.io/e/dvdxWG](https://codepen.io/machal/pen/dvdxWG)

## Co když chci přesto používat hlavně px? {#px}

Ve webdesignu se nabízí vždy celá řada možností řešení. Některá jsou optimální pro uživatele, ale náročná na implementaci, jiná představují kompromis. Nejinak tomu je u jednotek.

Nemyslím si, že zemře hodně koťátek, když dáte přednost „CSS pixelům“. Použití `px` je u velké části typů designu na implementaci výrazně pohodlnější.

Přesto se ujistěte, že písmo v návrhu je dostatečně veliké na to, aby je přečetla většina uživatelů. Jako základ se obecně doporučuje alespoň oněch `16px`.

Raději se také sami sebe zeptejte, zda vám nevadí nic z následujícího seznamu:

- Uživatelům, kteří si změnili písmo v systému nebo prohlížeči (na Archive.org asi 3 %), se jejich nastavení na vašem webu neprojeví. Zůstává jim možnost zoomovat celou stránku.
- Změna velikosti písma nebude správně reflektována v Media Queries.
- V návrhu designu se nepočítá s elastickou typografií, zvětšující se podle viewportu.
- Designérka nebo designér rovněž nepočítali s pružnou změnou velikosti komponenty podle velikosti písma rodiče ani s globální změnou velikosti písma v určitých breakpointech designu.

<!-- AdSnippet -->
