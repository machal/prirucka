# Responzivní breakpointy: Realizace v kódu (CSS, Sass i PostCSS)

Ukládání breakpointů a rozmezí do proměnné preprocesoru velmi doporučuji, zpřehlední to kód a zefektivní psaní. 

Příklady zde využívají CSS preprocesoru Sass v SCSS syntaxi. Ale podíváme se také na PostCSS (a CSSnext) nebo očekávaný vývoj specifikací.

Možností je více:
[Proměnné](#promenne) –
[Mixiny](#mixiny) –
[Knihovna Sass MQ](#sass-mq) –
[Media Queries Level 4](#media-qeuries-4) –
[PostCSS a CSSnext]({#postcss)

## Jednoduše v proměnných {#promenne}

Následuje příklad ze zdrojáků Vzhůru dolů.

Definice breakpointů:

```scss
$vd-screen-sm:  600px;
$vd-screen-md:  768px;
$vd-screen-lg:  1100px;
```

Definice rozmezí:

```scss
$vd-screen-sm-up:  "only screen and (min-width: #{$vd-screen-sm})";
$vd-screen-md-up:  "only screen and (min-width: #{$vd-screen-md})";
$vd-screen-lg-up:  "only screen and (min-width: #{$vd-screen-lg})";

$vd-screen-sm-down:  "(max-width: #{$vd-screen-sm - 1})";
$vd-screen-md-down:  "(max-width: #{$vd-screen-md - 1})";
$vd-screen-lg-down:  "(max-width: #{$vd-screen-lg - 1})";
```

A ještě použití:

```scss
@media #{$vd-screen-sm-up} { }
```

Jak vidíte, použití je díky specifikům Sassu poněkud krkolomnější a celkově jednoduchá implementace vám u větších projektů nemusí stačit. Pojďme se podívat na další.

## Pomocí mixinů {#mixiny}

Další možnost je vytvořit si mixiny práci s rozmezími platnosti mixinů. Pojďme rovnou k použití, tam je vidět  pak bude přímočarejší. 

```scss
/* Breakpoint "sm" a větší šířka viewportu: */
@include media-breakpoint-up(sm) { }

/* Breakpoint "lg" a menší šířka viewportu: */
@include media-breakpoint-down(lg) { }

/* Jen rozmezí následující za breakpoitem "sm" */
@include media-breakpoint-only(sm) { }

/* Vše mezi breakpointy "sm" a "lg": */
@include media-breakpoint-between(sm, lg) { }
```

Definování mixinů si případně nastudujte ve zdrojácích Bootstrapu.

<!-- AdSnippet -->

Nevýhoda? Před použitím si musíme naprogramovat celou řadu uvedených mixinů. Nebo použít Bootstrap, což vám jen kvůli správě breakpointů rozhodně nedoporučuji. Je tady ale pár knihoven, které umí spravovat právě jen breakpointy.

## Pomocí knihovny: Sass MQ {#sass-mq}

Knihovna vám zařídí kompletní správu breakpointů a rozmezí. Nejprve si nadefinujeme seznam bodů zlomu, včetně jejich pojmenování. Následuje příklad z dokumentace:

```scss
$mq-breakpoints: (
  mobile:  320px,
  tablet:  740px,
  desktop: 980px,
  wide:    1300px
) !default;
```

Následují možnosti použití, odpovídající příkladu s Bootstrapem výše. Prostě zavoláte mixin `mq()`:

```scss
/* Breakpoint "mobile" a větší šířky viewportu: */
@include mq($from: mobile) { }

/* Breakpoint "tablet" a menší šířky viewportu: */
@include mq($until: tablet) { }

/* Jen rozmezí následující za breakpoitem "tablet" */
@include mq(tablet) { }

/* Vše mezi breakpointy "mobile" a "desktop": */
@include mq(mobile, desktop) { }

/* Vlastní breakpoint: */
@include mq('only screen and (min-width: 1440px)') { }
```

Je navíc možné pracovat s vlastními breakpointy, takže způsob volání zůstává konzistentní napříč celým CSS:

```scss
@include mq('only screen and (min-width: 1440px)') { }
```

Funkcí a možností využití je zde ale více. Pro více  informací vás odkážu na web knihovny: [github.com/sass-mq/sass-mq](https://github.com/sass-mq/sass-mq)

Všechna zmíněná řešení mají jednu poměrně citelnou nevýhodu. Používají preprocesor, takže zavádějí nové jazykové prvky do kódu projektu, což zhoršuje čitelnost kódu.

<!-- AdSnippet -->

Ukažme si tedy ještě dvě možnosti, které jsou blíže k čistému CSS. Ale rovnou říkám, že zatím vám jejich využití nedoporučím.

## Pomocí Media Queries Level 4, což bohužel zatím neumí prohlížeče {#media-qeuries-4}

Tohle uvádím hlavně proto, abychom viděli, kam nás vede vývoj standardů. Konsorcium W3.org ve čtvrté verzi specifikace Media Queries chystá „Range Context“, což je zjednodušený zápis platnosti dotazu:

```css
@media (width > 320px) { }
@media (width <= 320px) { }
@media (400px <= width <= 700px) { }
```

Pokud je mi známo, v době psaní článku tohle žádný prohlížeč neumí. Pro více informací utíkejte do specifikace na [w3.org/TR/mediaqueries-4](https://www.w3.org/TR/mediaqueries-4/).

## Pomocí PostCSS, což je bohužel jen polovičatý preprocesor  {#postcss}

Mnoho vývojářů se nechalo zlákat postprocesorem PostCSS a snaží se jím nahrazovat preprocesory. V mnohých případech do dává smysl, ale zrovna u definice breakpointů bych se touhle cestou nevydal. Zápis definice i použití vypadá hezky:

```css
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) { }
```

Ovšem pozor – potřebujete CSSnext. To je transpilátor budoucího CSS do stylů, kterým rozumí dnešní prohlížeče. CSSnext v případě uvedeného zápisu ale vychází z draftu (!) specifikace Media Queries 5. To je věc, která se může ještě mnohokrát změnit a do prohlížečů dorazí asi tak… až naprší a uschne.

V PostCSS bude ve srovnání s preprocesory navíc dost složité připravit logiku, kterou pro práci s kódem v Media Queries potřebujete.

O odkazy vás ale nepřipravím:

- CSSnext: [cssnext.io/features](http://cssnext.io/features/#custom-media-queries)
- Můj článek o PostCSS (a CSSnext): [vrdl.cz/p/postcss](https://www.vzhurudolu.cz/prirucka/postcss)

Můj závěr je tedy jasný:

- Pokud můžete, využite preprocesor a Sass MQ nebo podobnou malou knihovnu.
- Těšte se na Media Queries čtvrté generace.

<!-- AdSnippet -->
