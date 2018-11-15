# Responzivní breakpointy: Realizace v kódu (CSS, Sass i PostCSS)

Ukládání breakpointů a rozmezí do proměnných preprocesoru velmi doporučuji, protože to zpřehlední kód a zefektivní psaní.

Příklady níže využívají CSS preprocesoru Sass v SCSS syntaxi. Ale podíváme se také na PostCSS (a CSSnext) nebo očekávaný vývoj specifikací.

<div class="web-only" markdown="1">

Možností, jak pracovat s breakpointy, je více:

- [Proměnné](#promenne)
- [Mixiny](#mixiny)
- [Knihovna Sass MQ](#sass-mq)
- [Media Queries Level 4](#media-queries-4)
- [PostCSS a CSSnext]({#postcss)

</div>

## Jednoduše v proměnných {#promenne}

Následuje příklad ze zdrojáků Vzhůru dolů.

Definice breakpointů:

```scss
$vd-screen-sm: 600px;
$vd-screen-md: 768px;
$vd-screen-lg: 1100px;
```

Definice rozmezí:

```scss
$vd-screen-sm-up: "(min-width: #{$vd-screen-sm})";
$vd-screen-md-up: "(min-width: #{$vd-screen-md})";
$vd-screen-lg-up: "(min-width: #{$vd-screen-lg})";

$vd-screen-sm-down: "(max-width: #{$vd-screen-sm - 1})";
$vd-screen-md-down: "(max-width: #{$vd-screen-md - 1})";
$vd-screen-lg-down: "(max-width: #{$vd-screen-lg - 1})";
```

A ještě použití:

```scss
@media #{$vd-screen-sm-up} { }
```

Jak vidíte, zápis použití je díky specifikům Sassu poněkud krkolomnější a celkově jednoduchá implementace vám u větších projektů nemusí stačit. Pojďme se podívat na další, propracovanější metody.

## Pomocí mixinů {#mixiny}

Další možnost je vytvořit si mixiny pro práci s rozmezími platnosti mixinů. Pojďme rovnou k použití, tam je to vidět přímočařeji.

```scss
/* Breakpoint "sm" a větší šířka viewportu: */
@include media-breakpoint-up(sm) { }

/* Breakpoint "lg" a menší šířka viewportu: */
@include media-breakpoint-down(lg) { }

/* Jen rozmezí následující za breakpointem "sm" */
@include media-breakpoint-only(sm) { }

/* Vše mezi breakpointy "sm" a "lg": */
@include media-breakpoint-between(sm, lg) { }
```

Definování mixinů si případně nastudujte ve zdrojácích Bootstrapu. [vrdl.in/bootstrapbreak](http://vrdl.in/bootstrapbreak)

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

Následují možnosti použití, odpovídající předchozímu příkladu. Prostě zavoláte mixin `mq()`:

```scss
/* Breakpoint "mobile" a větší šířky viewportu: */
@include mq($from: mobile) { }

/* Breakpoint "tablet" a menší šířky viewportu: */
@include mq($until: tablet) { }

/* Jen rozmezí následující za bodem zlomu "tablet" */
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

Funkcí a možností využití je zde ale více. Chcete-li více informací, odkážu vás na web knihovny: [github.com/sass-mq/sass-mq](https://github.com/sass-mq/sass-mq)

Všechna zmíněná řešení mají jednu poměrně citelnou nevýhodu: Používají preprocesor, takže zavádějí nové jazykové prvky do kódu projektu, což může zhoršovat jeho čitelnost.

<!-- AdSnippet -->

Ukažme si tedy ještě dvě možnosti, které jsou blíže k čistému CSS. Ale rovnou říkám, že zatím vám jejich využití nedoporučím.

## Pomocí Media Queries Level 4, což bohužel zatím neumí prohlížeče {#media-queries-4}

Tohle uvádím hlavně proto, abychom viděli, kam nás vede vývoj standardů. Konsorcium W3.org ve čtvrté verzi specifikace Media Queries chystá „Range Context“, což je zjednodušený zápis platnosti dotazu:

```css
@media (width > 320px) { }
@media (width <= 320px) { }
@media (400px <= width <= 700px) { }
```

Pokud je mi známo, v době psaní článku tohle žádný prohlížeč neumí. Pro více informací utíkejte do specifikace na [w3.org/TR/mediaqueries-4](https://www.w3.org/TR/mediaqueries-4/).

## Pomocí PostCSS, což je bohužel jen polovičatý preprocesor  {#postcss}

Mnoho vývojářů se nechalo zlákat postprocesorem PostCSS a snaží se jím nahrazovat preprocesory. V mnoha případech to dává smysl, ale zrovna u definice breakpointů bych se touhle cestou nevydával. Zápis definice i použití vypadá nadějně:

```css
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) { }
```

Ovšem pozor – dnešní prohlížeče tomu nerozumí. Potřebujete tedy CSSnext, transpilátor budoucího CSS do stylů, kterým rozumí dnešní prohlížeče. CSSnext v případě uvedeného zápisu ale vychází z draftu (!) specifikace Media Queries 5. To je věc, která se může ještě mnohokrát změnit a do prohlížečů dorazí… až naprší a uschne.

V PostCSS bude ve srovnání s preprocesory navíc dost složité připravit logiku, kterou pro práci s kódem v Media Queries potřebujete. Tuhle cestu tedy zatím nedoporučuji. Pro zájemce je zde ještě můj článek o PostCSS (a CSSnext): [vrdl.cz/p/postcss](https://www.vzhurudolu.cz/prirucka/postcss)

Můj závěr je tedy jasný:

- Pokud můžete, využijte preprocesor a Sass MQ nebo podobnou malou knihovnu.
- Těšte se na Media Queries čtvrté generace.

<!-- AdSnippet -->
