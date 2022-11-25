# CSS Cascade Layers: budou vrstvy revolucí organizace stylů?

Kaskádové vrstvy jsou novinka, která webařům umožňuje měnit platnost deklarací bez nutnosti uvádět je na konkrétní místo v CSS souboru a v konkrétním pořadí.

Obecně vzato, CSS Cascade Layers poskytují strukturovaný způsob uspořádání stylů.
Slouží tak ke zjednodušení práce s kaskádou v CSS a hlavně specificitou selektorů.

Dejme si jednoduchý příklad:

```css
@layer framework {
  /* Styly pro framework… */
}

@layer override {
  /* Styly pro pravidla, která framework přepisují… */ 
}

/* Přidáme styly do vrstvy frameworku: */
@layer framework {
  .btn {
    color: red;
  }
}
```

Vývojářky a vývojáři mohou díky pravidlu `@layer` vytvářet vrstvy pro reprezentaci výchozích nastavení prvků, knihoven třetích stran, motivů vzhledu nebo komponent.

Není přitom nutné přizpůsobovat tomu selektory v rámci jednotlivých vrstev nebo se spoléhat na pořadí zdrojů při řešení konfliktů.

Zároveň nám kaskádové vrstvy poskytují možnost přeskupovat pořadí platnosti deklarací:

```css
@layer base, framework, override;

@layer framework {
  /* Styly pro framework… */
}

@layer base {
  /* Styly pro základnu… */ 
}
```

Podpora této části [specifikace CSS Cascade Layers](https://www.w3.org/TR/css-cascade-5/#cascade-layers) ve všech moderních prohlížečích je plná.
To hlavně díky tomu, že prohlížeče aktuálně [velmi dobře spolupracují](https://www.vzhurudolu.cz/blog/215-webexpo-2022-prohlizece).

V textu vám ukážu několik příkladů, jak to pro vás může být užitečné.
Nejprve vám ale zkusím vysvětlit, proč si myslím, že kaskádové vrstvy jsou skoro až revolučně užitečné.

## Věčný boj s kaskádou {#kaskada-boj}

Už od vzniku CSS před více než [více než čtvrt stoletím](https://www.vzhurudolu.cz/blog/10-17-narozeniny-css) se uživatelé CSS dělí do dvou skupin.

<div class="related" markdown="1">

- [„Problémy“ CSS](css-jazyk-problemy.md)
- [Kaskáda a specificita](css-kaskada.md)
- [Dědičnost v CSS](css-dedicnost.md)
- Kaskádové vrstvy
- [Selektory v CSS](css-selektory.md)
- [Pseudotřídy v CSS](css-pseudotridy.md)

</div>

Menší skupina (z velké části [kodérů a frontend designérů](https://www.vzhurudolu.cz/blog/62-frontend-pozice)), která CSS miluje i se všemi nedostatky.
Ve druhé skupině sedí drtivá většina běžných vývojářů, kteří CSS používají, protože nemají jinou možnost.
Kaskádové styly tyto vývojáře více či méně štvou a principy návrhu CSS obvykle nechápou.

Dělicí linkou mezi těmito skupinami je často chápání [kaskády v CSS](css-kaskada.md) a jejich vlastností – dědičnosti, důležitosti (`!important`) a hlavně specificity selektorů.

<!-- AdSnippet -->

Myslím, že příchod kaskádových vrstev je dobrá zpráva pro tu první skupinu.
A skvělá zpráva pro tu druhou.

Obvyklý vývoj a hlavně úpravy CSS probíhají v první skupině vývojářek a vývojářů podle [metodik](css-metodiky.md), z nichž je pro tyto účely nejdůležitější [ITCSS](https://frontend.garden/clanky/proc-je-itcss-nejpokrocilejsi-metodika-organizace-css/).

V druhé skupině se často prostě přidávají deklarace na konec souboru a doufá se, že to pomůže:

```css
/* Deklarace má vysokou specificitu selektoru… */
#content .btn {
  color: black;
}

/* … proto přidání této deklarace nepřetíží tu původní… */
.btn { 
  color: red;
}

/* … a tak si autoři CSS často pomohou důležitostí…  */
.btn {
  color: red !important;
}
```

Poznáváte svůj kód?
(Klídek, já takového napsal taky hodně.)
Jenže klíčové slovo `!important` a důležitost v CSS je určena pro jiné účely, a tudíž tohle je trošku prasárna.
No, možná i více než trošku…

CodePen: [cdpn.io/e/jOKYdZE](https://codepen.io/machal/pen/jOKYdZE?editors=1100)

Řešení s kaskádovými vrstvami je jednoduché. Prostě si jednotlivé části CSS izolujeme do relativně nezávislých vrstev:

```css
/* V základu máme sice vysokou specificitu selektoru… */
@layer base {
  #content .btn {
    color: black;
  }
}

/* … ale v další vrstvě ji můžeme klidně přepsat nízkou specificitou: */
@layer override {
  .btn {
    color: red;
  }
}
```

Ano, je to přesně tak, kaskáda platí jen uvnitř konkrétních kaskádových vrstev.
Rozhoduje jen pořadí vrstev, tak, jak jsou uvedené v CSS nebo jak jej specifikujete na začátku CSS souboru pomocí pravidla `@layer`.

CodePen: [cdpn.io/e/VwdygQx](https://codepen.io/machal/pen/VwdygQx?editors=1100)

## Jeden původ, jeden origin {#origin}

Je dobré akcentovat, že kaskádové vrstvy organizují styly v rámci jednoho původu (originu).
V CSS jich může být více – prohlížečové styly, autorské styly (ty naše), uživatelské styly.

Tzn. pomocí `@layer` nelze například z autorských stylů „vstoupit“ do prohlížečového originu.

## Příklad s Bootstrapem: bez vrstev {#priklad-bez-vrstev}

V dalším textu vám Cascade Layers představím krok za krokem pomocí jednoduchého příkladu s přestylováním Bootstrapu.

Začneme příkladem bez vrstev.
Framework nejprve importujeme, pak přestylujeme:

```css
@import url("bootstrap.min.css");

body {
  margin: 2rem;
  background: #f2f0ec;
}

.btn {
  background: #abab9d;
}
```

Na první pohled nám to přestylování takto půjde dobře.
V prohlížeči dostaneme, co jsme chtěli, tedy přebarvené `<body>` a tlačítko:

CodePen: [cdpn.io/e/NWzggXe](https://codepen.io/machal/pen/NWzggXe?editors=1100)

Problém však nastává při najetí myši na tlačítko ([pseudotřída `:hover`](css-pseudotridy.md#hover)).
Barva nezůstává taková, jakou jsme nastavili.
Důvodem je vyšší [specificita](css-kaskada.md#specificita) původního selektoru:

```css
/* Styly Bootstrapu - specificita 0,2,0 */
.btn:hover {
  background-color: var(--bs-btn-hover-bg);
}

/* Naše styly - specificita 0,1,0  */
.btn {
  background: #abab9d;
}
```

Původní selektor s vyšší specificitou tedy vyhrává a naše změna barvy se neaplikuje.

Co s tím?
Jak už jsem psal, můžeme to přetížit selektorem stejné nebo vyšší specificity.
Můžeme přidat důležitost pomocí `!important`.

Nebo jinak a lépe – můžeme použít kaskádové vrstvy.

## Příklad s Bootstrapem: vrstvy vrství {#priklad-vrstvy}

V další ukázce už jsem použil Cascade Layers a trošku zkomplikoval ty přebíjené vlastnosti:

```css
/* Do vrstvy "bootstrap" importujeme Bootstrap: */

@import url("bootstrap.min.css") layer(bootstrap);

/* Cascade Layers: */

@layer my-styles {
  .btn {
    background: #abab9d;
    border-color: #2e2c08;
  }
}

@layer my-base {
  body {
    margin: 2rem;
    background-color: #f2f0ec;
  }

  .btn {
    border-color: red;
  }
}
```

Jak je vidět, kromě změny barvy pozadí ještě obarvuji rámečky tlačítek na červeno.
Najednou to celé funguje.
Výše uvedené problémy nevidíme.
Specificita selektorů Bootstrapu nás už netrápí, protože se aplikuje jen uvnitř vrstev.

CodePen: [cdpn.io/e/qBKXWxG](https://codepen.io/machal/pen/qBKXWxG?editors=1100)

## Příklad s Bootstrapem: změna pořadí vrstev {#priklad-poradi}

Můžeme to celé ještě vylepšit.
Pravidlo `@layer` totiž využíváme buď pro vložení deklarací do vrstvy nebo deklaraci pořadí vrstev.
To druhé vypadá takto:

```css
@layer bootstrap, my-base, my-styles;
```

Deklaraci zbylého kódu necháme v původním pořadí, ale vzhled stránky se změní.
Tlačítka nebudou mít červenou barvu rámečku, protože vrstva `my-base` je přepsaná vrstvou `my-styles`.

CodePen: [cdpn.io/e/RwJggLj](https://codepen.io/machal/pen/RwJggLj?editors=1100)

Prostě lusknete prsty a všechny bolehlavy s nutností dodržovat pořadí v kódu a hlídat specificitu jsou pryč.

<figure>
<img src="../dist/images/original/css-cascade-layers.jpg" alt="CSS Cascade Layers" width="1600" height="900">
<figcaption markdown="1">
Vrstvy vrství a já se raduju.
</figcaption>
</figure>

Dávám lajk.
Proč vrstvy neexistovaly už před patnácti lety…?!

## Odbočka k `!important` {#important}

Než budeme pokračovat, je potřeba udělat odbočku k další části kaskády.
Tou je [důležitost pravidel](css-kaskada.md#dulezitost) a klíčové slovo `!important`.

Důležitost totiž kromě zvýšení váhy konkrétní deklarace také obrátí pořadí priority.
To je velmi důležité.

Stejně to funguje také u kaskádových vrstev.
Deklarace, kde použijete `!important`, budou měnit pořadí.

## Příklad s Bootstrapem: použijeme `!important` {#priklad-important}

Do našeho příkladu s frameworkem Bootstrap nyní přidáme důležitost:

```css
@layer bootstrap, my-base, my-styles;

@import url("bootstrap.min.css")
layer(bootstrap);

@layer my-styles {
  .btn {
    background: #abab9d !important;
  }
}

@layer my-base {
  body {
    margin: 2rem;
    background-color: #f2f0ec;
  }

  .btn {
    background: #8c4615 !important;
  }
}
```

Vzhledem k pořadí deklarace kódu byste mohli čekat, že tlačítka budou šedivá (`#abab9d`), ale ony jsou hnědá (`#8c4615`).

CodePen: [cdpn.io/e/VwdWWOQ](https://codepen.io/machal/pen/VwdWWOQ?editors=1100)

Důvodem je obrácené skládání vrstev v případě použití `!important`.
Deklarace z vrstvy `my-base` prostě dostane přednost, protože je níže než vrstva `my-styles`.

<!-- AdSnippet -->

Abych to ještě doplnil o poslední dílek skládačky, v pořadí hrají roli i deklarace neuvedené ve vrstvách:

1. Nejníže deklarace z jednotlivých vrstev podle pořadí, které jste jim nastavili.
2. Uprostřed jsou deklarace nezařazené do vrstev.
3. Nejvýše pak platí deklarace s `!important`, ovšem v opačném pořadí než jsou uvedené vrstvy.

Je to docela galimatyáš, že?

Ale má to dobré důvody.
Nejlépe to uvidíte na obrázku:

<figure>
<img src="../dist/images/original/css-cascade-layers-important.jpg" alt="CSS Cascade Layers: !important" width="1600" height="900">
<figcaption markdown="1">
Když už nemůžeš, vrstvi víc. Když už nemůžeš vrstvit, přidej důležitost.
</figcaption>
</figure>

Připravil jsem k tomuto ještě tři CodePeny.
Jsou o praktickém využití nebo spíše trablech přebíjení `!important`, které nám nadělil Bootstrap.

V kódu frameworku najdete tyto řádky:

```css
[hidden] {
  display: none !important;
}
```

Nechme teď stranou důvody, proč bychom to měli chtít přebíjet ve svém kódu.
Řekněme, že opravdu moc chceme.
V takovém případě nám ovšem vložení pravidla pro přebití do vrstev nepomůže ([CodePen](https://codepen.io/machal/pen/gOKxOgG?editors=1100)). Musíme přebíjející pravidlo ponechat mimo vrstvy ([CodePen](https://codepen.io/machal/pen/rNKzNME?editors=1100)).

Alternativně pak můžeme vrstvy použít, ale vložit přebíjející pravidlo ještě pod styly Bootstrapu:

```css
@import my-styles, bootstrap;

@import url("bootstrap.min.css") layer(bootstrap);

@layer my-styles {
  [hidden] {
    display: block !important;
  }
}
```

CodePen: [cdpn.io/e/dyKdVVZ](https://codepen.io/machal/pen/dyKdVVZ?editors=1100)

## Vnořování vrstev {#vnorovani}

Alespoň stručně ještě zmíním možnost vnořování vrstev, který rozebírají [na skvělém MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer#nesting_layers):

```css
@layer framework {
  @layer layout { 
    /* Vznikla nám vrstva framework.layout */ 
  }
}
```

## Podpora v prohlížečích {#podpora}

Prohlížeče jsou na tom skvěle, díky za optání.
Chrome podporuje `@layer` od verze 99, Safari od verze 15.4 a Firefox od verze 97.
Ke dni psaní tohoto textu, což je listopad 2022, je tedy podpora dostupná ve všech moderních prohlížečích.
Více je jako vždy na [caniuse.com/css-cascade-layers](https://caniuse.com/css-cascade-layers).

## Závěr (…budou vrstvy revolucí v organizaci CSS?) {#zaver}

Vrstvy jsou skvělý nástroj, který nám umožní vytvářet kaskádové styly, které budou přehlednější a také snadněji udržovatelné.

Jsou navržené tak, aby mohly způsobit revoluci v organizaci CSS.
Zároveň je možné je použít tak, aby se vůbec nezměnila naše běžná práce.

Taky je možné, že se běžná práce kodérů vůbec nezmění a `@layer` se stane něčím, co se používá jen ve výjimečných případech.
Rozdíly mezi teorií a praxí jsou totiž v oblasti organizace CSS velmi časté.

<!-- AdSnippet -->

Tak či tak – mám z přítomnosti vrstev v CSS velkou radost a věřím, že vám pomohou, stejně tak jako vám doufám pomohl i tento článek.
