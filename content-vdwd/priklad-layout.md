# Příklad: rozvržení stránky

V příkladu žádný složitý layout nepotřebujeme. I tak si ale stavbu rozvržení stránky projdeme krok za krokem. Využijeme přitom totiž spoustu znalostí z předchozích částí knihy.

## Struktura stránky

Ta teď vypadá následovně:

```html
<div class="container">
  <header>
    <!-- Logo stránky -->
  </header>
  <main class="layout-container">
    <!-- Hlavní část stránky -->      
  </main>
  <section class="layout-why">
    <!-- Sekce „Proč ForestKid?“ v patičce -->
  </section>    
</div>
```

Pokud bychom se na zoubek podívali hlavní části stránky (`.layout-container`), je rozdělená takto:


```html
<div class="layout-heading">
  <!-- Název produktu -->
</div>
<div class="layout-main">
  <div class="layout-photos">
    <!-- Fotografie -->
  </div>      
  <div class="layout-text">
    <!-- Text -->
  </div>            
</div>      
```

Všimněte si, že došlo k určitému přeskupení sekcí. Sekci „Proč ForestKid?“ jsme přesunuli až na konec. Týká se celého webu, nikoliv konkrétního produktu a její pozice tomu prostě neodpovídala. 

Až dosud jsme pořadí stránky přizpůsobovali malým displejům. Tuto změnu jsme  udělali na základě přípravy pro layout ve větších velikostech okna prohlížeče. Pracujeme v *iteracích* a přímo v prohlížeči, kde jsou úpravy snadné. Špatné rozhodnutí z dřívějších fází vývoje nebude tak problematické. 

V HTML ukázce pro zjednodušení vynechávám další potřebné atributy. Například `role`, které zlepšují přístupnost zařízeními pro odečítání obrazovky. Přidají prvkům stránky význam, který samy o sobě nenesou. Jak definovat strukturu v HTML5 píšu ve zvláštním článku na blogu. [vrdl.cz/prirucka/html5-struktura](http://www.vzhurudolu.cz/prirucka/html5-struktura)

## Rozvržení hlavního obsahu flexboxem

Fotografie (`.layout-photos`) a text (`.layout-text`) rozdělíme do dvou stejně širokých sloupců.

Začneme tím, že jejich rodiče označíme za nositele layoutu:

```css
.layout-main {
  display: flex;
}
```
Už to sami o sobě vykouzlí rozvržení do dvou sloupců. Flexbox ale vyjde ze šířky obsahu, takže na některých velikostech okna vám sloupce vykreslí různě široké. A to nechceme. Oba sloupce prostě rozdělíme na polovinu šířky rodiče:

```css
.layout-text {
  width: 50%;
}

.layout-photos {
  width: 50%;
}
```

Tohle rozvržení ale nechceme na mobilech. Proto ještě musíme vymyslet bod zlomu, od kterého layout nasadíme.

## Bod zlomu a Media Query

Responzivní webdesignér zvětšuje a zmenšuje okno prohlížeče stejně často jako kuchař míchá vařečkou. Po přípravě layoutu tedy pomocí zmenšování okna hledáme minimální šířku, ve které layout dobře funguje. Díváme se, zda se nám nebortí důležité komponenty, ale posuzujeme i délku typografické řádky. Z [kapitoly o typografii](typografie.md) víme, že by měla být mezi 45—75 znaky. Tu hlídáme u jediného delšího textu na stránce: popisu produktu.

Minimální šířka okna, ve které layout funguje, je `800px`. Hodnota je však velmi blízko `768px`, což je menší rozlišení iPadů. Jak jsem psal [v kapitole o principech](4-principy-ui.md) návrhu responzivního rozhraní, snažím se o konzistenci rozhraní a obecně dost nerad těmto tabletům servíruji výrazně layout v režimu na výšku než v poloze na šířku. Je to jedna z mála výjimek, kdy na můj výběr bodu zlomu mají vliv rozlišení zařízení. Většinou je ale lepší dávat přednost výběru podle obsahu komponenty nebo stránky. To už také víte [z kapitoly o tipech k Media Queries](media-queries-tipy.md).

Tady tedy testuji, zda bych nedokázal layout udělat tak, aby fungoval už od 768 pixelů. A layout by tam fungoval měl.

V kapitole o Media Qureies také píšu, že je lepší breakpointy nastavovat v jednotkám `em`. Do těch si naši `px` hodnotu musíme přepočíst:

```
768px
÷ 16px (základní velikost písma)
= 48em
```

A tím se dostáváme k výsledné podmínce pro nasazení layoutu.

```css
@media only screen and (min-width: 48em) { … }
```

Pokud jste pozorně četli [kapitolu o Media Queries](css3-media-queries.md), zápisu byste měli bez problémů rozumět.

Layout tedy máme hotový. 
