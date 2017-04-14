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
    <div class="layout-heading">
      <!-- Název produktu -->
    </div>
    <div class="layout-main">
      <div class="layout-photos">
        <!-- Fotografie -->
      </div>      
      <div class="layout-photos">
        <!-- Text -->
      </div>            
    </div>      
  </main>
  <section class="layout-why">
    <!-- Sekce „Proč ForestKid?“ -->
  </section>    
</div>
```

Všimněte si, že došlo k určitému přeskupení sekcí. Ano, až dosud jsme pořadí stránky přizpůsobovali malým displejům. Některé drobné úpravy jsme proto udělali na základě přípravy pro layout ve větších velikostech okna prohlížeče.

Sekci „Proč ForestKid?“ jsme přesunuli až na konec. Týká se celého webu, nikoliv konkrétního produktu a její pozice tomu prostě neodpovídala. Pracujeme v *iteracích*, takže špatné rozhodnutí v dřívějších fázích vývoje není tak problematické. 

V HTML ukázce pro zjednodušení vynechávám další potřebné atributy. Například `role`, které zlepšují přístupnost zařízeními pro očečítání obrazovky. Jak definovat strukturu v HTML5 píšu ve zvláštním článku na blogu. [vrdl.cz/prirucka/html5-struktura](http://www.vzhurudolu.cz/prirucka/html5-struktura)

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

Tak jako kuchař míchá vařečkou, responzivní webdesignér zvětšuje a zmenšuje okno prohlížeče.  I po nakódování layoutu zmenšováním okna hledáme  minimální šířku okna, ve které layout dobře funguje. Díváme se, zda se nám nebortí důležité komponenty, ale posuzujeme i délku typografické řádky. Z [kapitoly o typografii](typografie.md) víme, že by měla být mezi 45-75 znaky. Tu hlídáme u jediného delšího textu na stránce: popisu produktu.

Minimální šířka okna, ve které layout funguje, je 800 pixelů. V takovém případě vždy přemýšlím, zda bych nedokázal layout udělat tak, aby fungoval už od 768 pixelů. 

Co je 768 pixelů? Je to menší rozlišení iPadů. Jak jsem psal [v kapitole o principech](4-principy-ui.md) návrhu responzivního rozhraní, snažím se o konzistenci rozhraní a obecně dost nerad těmto tabletům servíruji jiný layout v režimu na výšku než v poloze na šířku. Je to jedna z mála výjimek, kdy na můj výběr bodu zlomu mají vliv rozlišení zařízení. Většinou je ale lepší dávat přednost výběru podle obsahu komponenty nebo stránky. To už také víte [z kapitoly o tipech k Media Queries](media-queries-tipy.md).

Ve stejné kapitole píšu, že je lepší breakpointy nastavovat ve čtverčících. Do těch si naši pixelovou hodnotu musíme přepočíst:

```
768 pixelů 
÷ 16 pixelů základní velikost písma v tomto breakpointu
= 48 em
```

A tím se dostáváme k výsledné Media Query pro nasazení layoutu.

```css
@media only screen and (min-width: 48em) { … }
```

Pokud jste pozorně četli [kapitolu o Media Queries](css3-media-queries.md), zápisu byste měli bez problémů rozumět.

Layout tedy máme hotový. A vlastně i celý příklad.
