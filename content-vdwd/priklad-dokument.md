# Příklad: hotový dokument

V této kapitole jsme se naučili nezbytné základy [grafického designu](graficky-design.md) a [typografie](typografie.md). Díky tomu jsme byli schopní zvolit základní [grafický styl](priklad-barvy-typografie.md) pro náš příklad.  

Jak to ale dostat do webové stránky? Potřebujeme [znát jednotky](jednotky.md) pro tvorbu webu a taky vědět, že pixely (`px`) jsou už skoro na seznamu zakázaných slov. Díky jednoduché HTML šabloně a třem základním vrstvám stylů z [předchozí kapitoly](dokument-nastroje.md) bude naše stránka prezentovatelná v prohlížeci s nějakým vlastním charakterem. 

Pojďme tedy přidat vlastní typografii, barvy a grafické prvky. Nějak si prostě dokument upravit k obrazu ForestKid.cz.

Před napsáním první řádky kódu vás ale upozorním, že v příkladu zatím pro zjednodušení nebudu zohledňovat rychlost načítání nebo náhradní řešení pro starší prohlížeče. Prostě žádný z aspektů, které by během zvažování řešení žádný profesionální designér či kodér neměl míjet. Profíci mi jistě odpustí, protože i k nim se v knize časem dopracujeme.

## Příprava dokumentu krok za krokem

Aktuální stav příkladu si můžete naživo prohlédnout nebo stáhnout na následujících adresách.

- Otevření v prohlížeči: [vrdl.in/vdwddok](http://vrdl.in/vdwddok)
- Stažení v ZIPu: [vrdl.in/vdwddokzip](http://vrdl.in/vdwddokzip)

Co jsme na stránce udělali, nejlépe uvidíme pohledem do `style.css`. Hned na první řádce je tohle:

```css
@import 
  url('https://fonts.googleapis.com/css?
    family=PT+Sans:400,400i,700|Yeseva+One&
      subset=latin-ext');
```

Vložili jsme fonty Yeseva One a PT Sans. Ten druhý ve třech řezech: základním (`400`), kurzívě (`400i`) a tučném (`700`). Pokud vám ta čísla nic neříkají, jde o stupně tučnosti používané také ve vlastnosti `font-weight`: [jakpsatweb.cz/css/font-weight.html](http://jakpsatweb.cz/css/font-weight.html)

A jdeme dál:

```
@import 'vendor/normalize.css';
@import 'vendor/blanka.css';
```

Přidali jsme Normalize.css a Blanka.css. Oba projekty známe [z kapitoly](dokument-nastroje.md) o základních vrstvách dokumentu. Složku jsme pojmenovali `vendor/`, protože jde o projekty externích „dodavatelů“.

Teď se mrkneme do jiné složky. `core/` obvykle používám pro „programátorské“ části CSS kódu. V případě použití preprocesorů tady straší relativně složité soubory s mixiny nebo proměnnými. 

```css
@import 'core/variables.css';
```

Abychom si zjednodušili práci, používáme tady CSS proměnné. Neumí je některé starší prohlížeče, ale to budete umět vyřešit až ke konci knihy. Teď vám musí stačit můj slib, že v nich stránka bude díky blbuvzdornému charakteru CSS vypadat docela obstojně. Podpora proměnných ale není vůbec špatná, podívejte se na Can I use. [caniuse.com/css-variables](http://caniuse.com/#feat=css-variables)

Definice proměnné vypadá takto:

```css
:root {
  --color-text: #063747;
}
```

Použití pak třeba takto: 

```css
body {
  color: var(--color-text);
}
```

Proměnné asi někteří znáte právě z CSS preprocesorů. To jsou velmi mocné nástroje, o kterých píšu v ebooku „Vzhůru do CSS3“ nebo ve starším textu na Vzhůru dolů. [vrdl.cz/blog/12-css-preprocesory-1](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1)

Jak už víte, v knize se chci obejít bez složitých nástrojů a z relativně komplexních CSS preprocesorů bychom toho využili jen málo. Proměnné jsou ale nově ale přímou součástí kaskádových stylů. A jde s nimi páchat ještě větší legrace než s těmi preprocesorovými. Nastudujte si to na JeČas.cz. [jecas.cz/var](http://jecas.cz/var)

Dále jsme si museli nastavit velikost nadpisů a písma, základní styl tabulek, formulářových a dalších prvků. To už si nastudujte sami ve staženém příkladu, není to nic složitého:

```
@import 'document/scale.css';
@import 'document/fonts.css';
@import 'document/table.css';
@import 'document/forms.css';
@import 'document/etc.css';
@import 'helpers/helpers.css';
```

Co ale ještě zmínit chci, je základní nastavení šířky dokumentu. Zabývám se tím v `document/document.css`. Vzpomenete si na optimální délku řádku textu [z kapitoly o typografii](typografie.md)? Ideál 66 znaků mám v našem základním písmu PT Sans napočítaný kolem `30em`, takže použijeme následující deklaraci:

```css
.container {
  max-width: 30em; 
  margin-left: auto;
  margin-right: auto;
}
``` 

Minimální odsazení ze stran na malých mobilních displejích zase zajistíme touto deklarací:

```css
body {
  margin: 1.5em;
}
```

Po pár krocích už tedy stránka vypadá lépe:

![Dokument fáze příkladu](dist/images/original/vdwd/priklad-dokument.jpg)

*Obrázek: Dokument se základním grafickým stylem, barvami a typografií. Zvětšujte a změnšujte si okno prohlížeče. Ano, už v této fázi je to vlastně „responzivní“. [vrdl.in/vdwddok](http://vrdl.in/vdwddok)*

Na obrázku trochu kecám a vy zkušenější to víte. Takhle by stránka sama o sobě v mobilu určitě nevypadala. Na obrázku je vidět až stav potom co jsme prohlížeči oznámili, že je optimalizovaná pro mobilní zařízení. 

Udělali jsme to meta značkou pro viewport. I přes to, že jde o jeden řádek HTML kódu, webaři v něm chyby sekají tempem Baťovy továrny na cvičky. Pojďme to napravit a o viewportech si rychle něco povědět.

