# Příklad: hotový dokument

*TODO refactor a přidat blanka-css a blanka-type test*

V této kapitole se zájemci naučili nezbytné základy [grafického designu](graficky-design.md) a [typografie](typografie.md). Díky tomu jsme byli schopní zvolit základní [grafický styl](priklad-barvy-typografie.md) pro náš příklad. 

Jak to ale dostat do webové stránky? Potřebujeme [znalost jednotek](jednotky.md) pro využití na webu a taky vědět, že použití `px` se už dnes nefandí. No a díky jednoduché HTML šabloně a třem základním vrstvám stylů z předchozí kapitoly jsme je naše stránka konečně prezentovatelná v prohlížeci. Nic extra to zatím není.

TODO IMG

*Obrázek: V této fázi máme základní HTML a CSS. Stránka ovšem nemá žádný charakter. Musíme přidat naši typografii a grafické prvky.*

Po pár krocích už stránka vypadá lépe:

TODO IMG

*Obrázek: *

Co jsme na stránce udělali, nejlépe uvidíme pohledem na `style.css`:

```css
@import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700|Yeseva+One&subset=latin-ext');
```

Vložili jsme fonty Yeseva One a PT Sans. Ten druhý ve třech řezech: základním (`400`), kurzívě (`400i`) a tučném řezu (`700`). Pokud vám ta čísla nic neříkají, jde o stupně tučnosti známé také ve vlastnosti `font-weight`: [jakpsatweb.cz/css/font-weight.html](http://jakpsatweb.cz/css/font-weight.html)

```
@import 'vendor/normalize.css';
@import 'vendor/blanka.css';
```

Přidali jsme Normalize.CSS a Blanka.CSS. Ty známe [z kapitoly](dokument-nastroje.md) o základních vrstvách dokumentu.

```css
@import 'core/variables.css';
````

Abychom si zjednodušili práci, používáme tady CSS proměnné. Neumí je starší prohlížeče, ale to budete umět vyřešit až ke konci knihy. Teď vám musí stačit můj slib, že v nich stránka bude díky blbuvzdornému charakteru CSS vypadat docela obstojně.

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

Proměnné asi někteří znáte z CSS preprocesorů. Jak už víte, v této knize se chci obejít bez složitých nástrojů a z relativně komplexních CSS preprocesorů bychom toho využili jen málo. Proměnné jsou ale nově součástí CSS a jde s nimi dělat daleko větší legrace než s těmi preprocesorovými. Nastudujte si to na JeČas.cz. [jecas.cz/var](http://jecas.cz/var)

Dále jsme si museli nastavit velikost nadpisů a písma; základní styl tabulek, formulářových a další prvků. To už si nastudujte sami na odkaze dole:

```
@import 'document/scale.css';
@import 'document/fonts.css';
@import 'document/table.css';
@import 'document/forms.css';
@import 'document/etc.css';
@import 'helpers/helpers.css';
```

Co ale ještě zmínit chci, je základní nastavení šířky dokumentu. Zabývám se tím v `document/document.css`. Vzpomenete si na optimální délku řádku textu [z kapitoly o typografii](typografie.md)? Ideál 66 znaků mám v písmu PT Sans napočítaný kolem 30 čtverčíků, takže použijeme následující deklaraci:

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

První stav příkladu si můžete naživo prohlédnout nebo stáhnout na následujících adresách:

- Otevření v prohlížeči: [vrdl.in/vdwddok](http://vrdl.in/vdwddok)
- Stažení v ZIPu: [vrdl.in/vdwddokzip](http://vrdl.in/vdwddokzip)



