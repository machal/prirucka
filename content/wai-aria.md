# Přístupný web pomocí orientačních bodů WAI-ARIA 

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) je technologie umožňující popsat obsah nebo chování webové aplikace tak, aby byla snadno dostupná i hendikepovaným uživatelům.

Asistivní technologie – občas  se nepřesně říká slepecké čtečky –  umožňují provoz ve dvou režimech: 

- *Pasivně-sekvenční*, kdy web prochází pomocí nadpisové osnovy dokumentu. Je to příjemné asi jako ovládání webu tabulátorem. Takže jde to, ale dře to.
- Po hendikepovaného uživatele je pohodlnější *strukturovaný* režim, ve kterém čtečka nabízí konkrétní oblasti stránky.

Ten druhý režim právě  umožňují WAI-ARIA orientační body (landmarks). Přidání do webu je otázka chvilky a pomůžete tím mnoha lidem, takže pokud jste ještě nezačali, čtěte dál. Do HTML prostě přidáte pár atributů navíc.  

## Tyhle orientační body se určitě naučte

- `role="banner"` – ne banner, ale třeba název webu nebo logo
- `role="navigation"` – navigace; může jich být [na stránce více](http://www.vzhurudolu.cz/blog/28-pristupnost-webexpo-2014)
- `role="main"` – hlavní obsah stránky
- `role="search"` – vyhledávání na stránce
- `role="complementary"` – doplňkovým obsah, obvykle „boční lišta“
- `role="contentinfo"` – informace o obsahu, na webech nejčastěji něco jako patička

Pokud teď v hlavě nemáte kapacitu na všechny, naučte se zatím `navigation` a `main`. Skok na navigaci a obsah je pro uživatele asistivních technologií nejzásadnější. Na ostatní se ale nevykašlete, naučte se je časem taky.

## Další možnosti WAI-ARIA

Hlavně pro potřeby psaní webových aplikací se kromě orientačních bodů hodí znát i další typy ARIA atributů. 

- [Role pro widgety](https://www.w3.org/TR/wai-aria/roles#widget_roles_header) – označení komponent uživatelského rozhraní. Například  `role="alert"` pro časově omezené upozornění uživateli. Nebo `tab` a `tabpanel` pro vyznačení záložkové navigace uvnitř stránky a `menu`, `menuitem`, `menubar` pro dropdown navigaci.
- [Role pro strukturu dokumentu](https://www.w3.org/TR/wai-aria/roles#document_structure_roles_header) – například `role="article"` pro označení atomické části hlavního obsahu. Může to být článek v seznamu článků nebo položka ve výpisu produktů. Nebo `presentation` pro popis elementu, který je použitý jen pro prezentaci obsahu a nechceme zachovat jeho sémantický význam – třeba `<table role="presentation">`. Krásné, že?

Ani tím ale možnosti WAI-ARIA nekončí. Orientační body patří do kategorie rolí. Dalšími kategoriemi ještě jsou [stavy a vlastnosti](https://www.w3.org/TR/wai-aria/states_and_properties). Možností jejich využití v aplikacích je hodně. Příkladem budiž [hlášení počtu zbývajících znaků](https://www.youtube.com/watch?v=MOx9cX_nQMk) v textovém poli formuláře. Pokud vás to zajímá více, [doporučím seriál Radka Pavlíčka na Zdrojáku](https://www.zdrojak.cz/serialy/pristupnost-dynamickych-webovych-aplikaci/). A jestli chcete vidět praktické ukázky, [tady](http://heydonworks.com/practical_aria_examples/) jich je devět moc pěkných.

Sami vidíte, že WAI-ARIA je sémanticky (významově) daleko bohatší než běžné HTML. Kromě pomoci znevýhodněným uživatelům je tedy možné atributy využít v CSS nebo Javascriptu jako selektor.

## Pár příkladů z Bootstrapu

Pojďme si užitečnost ARIA atributů ukázat na dvou komponentách z Bootstrapu 4. První bude [skupina tlačítek](http://v4-alpha.getbootstrap.com/components/button-group/):

```html
<div class="btn-group" role="group" aria-label="Zvolte akci">
  <button type="button" class="btn btn-secondary">První akce</button>
  <button type="button" class="btn btn-secondary">Druhá akce</button>
</div>
```

`role="group"` tady asistivním technologií sděluje, že jde o skupinu prvků. Prvek samotný se pak nezařadí do struktury sekvenčního procházení stránky. `aria-label` tady je namísto skrytého nadpisu (cože, vy ještě pro přístupnost používáte skryté nadpisy?) – je to text, který asistivní technologie přečte pro označení téhle části stránky.

A ještě kousek z bootstrapího [dropdown menu](http://v4-alpha.getbootstrap.com/components/dropdowns/):

```html
<div class="dropdown open">
  <button class="btn btn-secondary dropdown-toggle" type="button" 
    id="dropdown-1" data-toggle="dropdown" 
    aria-haspopup="true" aria-expanded="false">
    Zvolte akci
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdown-1">
    <a class="dropdown-item" href="#">První akce</a>
    <a class="dropdown-item" href="#">Druhá akce</a>
  </div>
</div>
```

`aria-haspopup="true"` říká, že po aktivaci tohoto elementu vyskočí jiný, který je ve vizuální hierarchii výše. Prostě *popup*.  `aria-expanded="false"` říká, že tohle je element sice „rozkliknutelný“, ale teď „nerozkliknutý“. Použitelné třeba při „rozklikávání“ stromových struktur. `aria-labelledby="dropdown-1"` je sestra od `aria-label`. Tahle ale jen říká, kde že asistivní technologie v existující struktuře ten nadpis sekce najde.


## Můžu místo `role` použít HTML5 tagy?

Co třeba `<nav>` namísto `<div role="navigation">`? To bych nedělal. U HTML5 tagů [pořád neexistuje plná podpora](http://www.html5accessibility.com/) jejich sémantického propojení s asistivními technologiemi. WAI-ARIA je na tom podle mých informací výrazně lépe. Je ale možné zápisy kombinovat – `<nav role="navigation">`. Sémantika pomocí WAI-ARIA a zpřehlednění pomocí HTML5 tagu? OK, jinak ale ty [HTML5 značky zase taková výhra nejsou](http://kratce.vzhurudolu.cz/post/38371151431/html5-elementy).  Jinými slovy – HTML5 tagy jsou volitelné, WAI-ARIA povinná.

## Jak testovat?

ARIA role umí zobrazit rozšíření [Web Developer](http://chrispederick.com/work/web-developer/), které je dostupné pro Chrome, Firefox nebo Operu. Na Apple výrobcích to jde „z pohledu“ hendikepovaného uživatele testovat pomocí nativního rozšíření Voice Over ([OS X](http://www.apple.com/accessibility/osx/voiceover/), [iOS](http://www.apple.com/accessibility/ios/)).

