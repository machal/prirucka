# Kaskáda v CSS: skrytý „nepřítel“

Možná se divíte, proč se na blogu, kde řešívám spíše pokročilejší záležitosti v CSS, vrhám na začátečnické téma. Jenže… Moc dobře vím, že správné chápání kaskády je rozšířené daleko méně než byste možná čekali.

Když jsem asi před rokem začal připravovat školení [CSS kód](https://www.vzhurudolu.cz/kurzy/css-kod), osvěžoval si kaskádu v paměti a zjistil, že jedna věc mě tam úplně unikala. Chcete vědět jaká?

Vyzkoušejte sami sebe: Definujte kaskádu v CSS.

Teď.

Nepodvádějte a nerolujte stránkou dolů. Vidím vás!

Dám vám ještě čas. Reklamní přestávkou:

<!-- AdSnippet -->

Máte?

Řešení je následující: Jde o kombinaci těchto vlastností:

- [Pořadí pravidel](#poradi)
- [Specificita selektorů](#specificita)
- [Důležitost pravidel](#dulezitost)

Naopak do specifity nepatří [dědičnost](css-dedicnost.md), další *obávaná* vlastnost CSS. Když byste se mě před rokem zeptali, do kaskády bych ji zahrnul. Chybně. Stejně jako jste ji do kaskády předpokládám zahrnuli vy.

Podívejte se na video „Základy CSS: Kaskáda a specificita“.

YouTube: [youtu.be/TtDuwGpRYas](https://www.youtube.com/watch?v=TtDuwGpRYas)

Pojďme teď na ty konkrétní vlastnosti kaskády.

## Pořadí pravidel {#poradi}

Začneme tím nejjednodušším: Pokud mají [selektory](css-selektory.md) dvou deklarací stejnou váhu (specificitu), pak prohlížeč aplikuje ten, který je v kódu pozdější.

[Dušan Janovský](https://www.jakpsatweb.cz/css/css-kaskadovani.html) tohle pravidlo vyjádřil hezkým českým *„Kdo se směje naposled, ten se směje nejlíp“*.

Nejlíp se směje poslední deklarace. Vezměme tohle CSS:

```css
.first {
  background: blue;
}

.second {
  background: green;
}
```

A tohle HTML:

```html
<div class="second first">
</div>
```

Jakou bude mít blok barvu?

Ano, přesně tak – zelenou. Rozhoduje pořadí v CSS. Na pořadí uvedení tříd v HTML naopak vůbec nezáleží. Omlouváme se ti, milé HTML.

CodePen: [cdpn.io/e/YVgOZY](https://codepen.io/machal/pen/YVgOZY?editors=0100)

Co z toho vyplývá? I pouhé špatně zvolené pořadí souborů v projektu může nadělat paseku. Doporučuji k tomu nastudovat principy metodiky ITCSS od Harryho Robertse.

## Specificita selektorů {#specificita}

Specificitu předpokládám znáte, nebo alespoň většina z vás. Jde o to, že každý selektor má svoji váhu.

### Váhy selektorů

<div class="rwd-scrollable"  markdown="1">
|* Typ selektoru a příklady                   *|* Specificita *|
|:---------------------------------------------|--------------:|
| Elementy, pseudoelementy (`p`, `::before`)   |     `0,0,0,1` |
| Třídy, pseudotřídy, atributy (`.box`, `:hover`, `[lang=cs]`)   |     `0,0,1,0` |
| Identifikátory (`#box`)                      |     `0,1,0,0` |
| Inline styly (`style="…"`)                   |     `1,0,0,0` |
</div>

Robin Pokorný v komentářích doplňuje, že inline styly nejsou od specifikace [CSS Selectors Level 4](https://www.w3.org/TR/selectors/#specificity) součástí specificity (jako čtvrté číslo), ale jsou prostě nadřazeny uživatelským stylům. Zatím to ale pro přehlednost nechávám v téhle tabulce, protože se mi to jinak zdá matoucí pro méně zkušené.

<!-- AdSnippet -->

Podívejme se na pár složitějších ukázek, ze kterých to bude snad ještě jasnější.

### Příklady

<div class="rwd-scrollable"  markdown="1">
|* Selektor                                   *|* Specificita *|
|:---------------------------------------------|--------------:|
| `h3 + p::first-letter`                       |       `0,0,3` |
| `nav a:hover::before`                        |       `0,1,3` |
| `p[lang=en] + *`                             |       `0,1,1` |
</div>

Poznámky:

- Jak jste si asi všimli, univerzální selektor (`*`), kombinátory (`+`, `>`, `~`, mezera) a pseudotřída negace (`:not`) nemají na specificitu žádný vliv.
- Je dobré zmínit, že spočítaná specificita není v desítkové ani jiné soustavě. Takže deset tříd nemá stejnou specificitu jako jeden identifikátor. Selektor typu identifikátor (`#id`) nad třídami (`.class`) prostě vždy vyhrává.

Pojďme si dát příklad:

```css
body .first {
  background: blue;
}

.second {
  background: green;  
}
```

HTML je stejné:

```html
<div class="second first">
</div>
```

Výsledek bude modrý, no jasně.

CodePen: [cdpn.io/e/mLbrzv](https://codepen.io/machal/pen/mLbrzv?editors=0100)

Pokud si nejste jistí, použijte skvělý kalkulátor specificity od Keegan Street: [specificity.keegan.st](http://specificity.keegan.st/)

<div class="related" markdown="1">

- [„Problémy“ CSS](css-jazyk-problemy.md)
- [Dědičnost](css-dedicnost.md)
- [Selektory](css-selektory.md)
- [Stylelint, protože pořádek musí být](stylelint.md)

</div>

Spolu s milou specificitou selektorů si vám dovolím dát tyhle rady do života:

- Držte specificitu co nejníže.
- V CSS nepoužívejte identifikátory.
- Pro komponenty volte třídy. Pro základní styly elementy. 
- Vždy mějte co nejjednodušší selektory.
- Ve Stylelintu si nastavte maximální specificitu. Já dávám 3 třídy.
- Používejte metodiku BEM nebo podobnou.

## Důležitost pravidel {#dulezitost}

Ano, jde o `!important`. Legendární univerzální náprava všeho. Tabletka proti bolehlavu ošklivého CSS, které jsme zdědili od svých předchůdců.

Dělám si legraci. To, jak často v CSS píšeme `!important` občas svědčí o smutném faktu, že kaskádovým stylům většinou málo rozumíme a jsme ochotní věnovat jen málo energie do vnesení systému sem.

Konec vzdychání, pojďme na příklad. Tady nic složitého není. CSS kód:

```css
.first {
  background: blue !important;
}

.second {
  background: green;  
}
```

HTML zůstává stejné:

```html
<div class="second first">
</div>
```

Výsledek bude modrý, jistě.

CodePen: [cdpn.io/e/XqrjBR](https://codepen.io/machal/pen/XqrjBR?editors=0100)

Asi vás nepřekvapí, že `!important` doporučuji používat jen když to máte dobře rozmyšleno nebo to zapadá do vaší vlastní metodiky psaní kaskádových stylů.

## Co z toho vyplývá?

- CSS není snadné, i když tak vypadá. Základní principy se hodí naučit.
- Bez metodik to nejde. Doporučuji juknout na ITCSS pro pořadí deklarací nebo [OOCSS](oocss.md) a [BEM](bem.md) pro psaní komponent. Píšu to v  [článku o řešeních „problémů“ CSS](css-jazyk-problemy.md).

<!-- AdSnippet -->
