# Responzivní obrázky

V responzivním designu máme na výběr poměrně hodně řešení možných problémů s obrázky. Pojďme si nejprve udělat mapu těch problémů:

- *Rychlost načítání*   
  Velký obrázek pro počítač je zbytečné posílat do mobilu. Datový objem je jeden z největších problémů bránících rychlému načtení.
- *Retina displeje*  
  Pokud má displej dvojnásobnou a vyšší hustotu hardwarových pixelů, bude tam obyčejná bitmapa vypadat špatně. Znáte to z textu o [CSS pixelu](zmeny-css-pixel.md).
- *Art direction*  
  Občas chceme na různá zařízení poslat různé výřezy obrazovky. Celou fotku na počítač a výřez obličeje na mobil například.
- *Velikost okna*  
  Pro různé velká okna prohlížeče bychom rádi servírovali různé varianty obrázků.
- *Layout*  
  Úplně nejraději bychom, aby obrázky znaly layout stránky, protože ten je v responzivním designu velmi variabilní. 

Nejčastěji z těchto důvod, že chceme ušetřit datový objem stránky na mobilech nebo poskytnout kvalitní zobrazení pro vysokopacitní displeje typu Retina.

Pojďme si ale udělat kompletní přehled všech možných řešení, jejich výhod a nevýhod.

<figure markdown="1">

| Řešení               | Rychlost | Retina | AD  | Okno | Layout | Vhodné pro |
|:---------------------|:--------:|:------:|:---:|:----:|:------:|:------:|
| 1. SVG                  |    ✔     |    ✔   |  𐄂  |   𐄂  |    𐄂   | vektory |
| 2. `<img src>`          |    𐄂     |    𐄂   |  𐄂  |   𐄂  |    𐄂   | cokoliv |
| 3. `<img src>` 2 ×      |    𐄂     |    ✔   |  ✔  |   𐄂  |    𐄂   | cokoliv | 
| 4. `<img src>` kompr.   |    ✔     |    ✔   |  𐄂  |   𐄂  |    𐄂   |  fotky | 
| 5. `<img src/data-src>` |    𐄂     |    ✔   |  ✔  |   ✔  |    𐄂   | cokoliv | 
| 6. `<img srcset>`       |    ✔     |    ✔   |  𐄂  |   ✔  |    𐄂   | cokoliv | 
| 7. `<img srcset sizes>` |    ✔     |    ✔   |  𐄂  |   𐄂  |    ✔   | cokoliv | 
| 8. `<picture>`          |    ✔     |    ✔   |  ✔  |   ✔  |    𐄂   | cokoliv | 

<figcaption markdown="1">
  Srovnání řešení pro responzivní obrázky. Rychlost – zohledňují rychlost načítání? Retina – zohledňuji vysokokapacitní displeje? AD (Art Direction) – dokáží poslat různé ořezy obrázků na různá zařízení? Okno – umí vybírat obrázky podle velikosti okna prohlížeče? Layout – zohledňují layout webu? 
</figcaption> 

</figure>

Ve srovnání jsem leccos zjednodušil. Nevidíte tam, že jednotlivá řešení lze kombinovat. Třeba komprimované obrázky s technikou `srcset/sizes`. Ale to vám určitě došlo nebo dojde z dalšího textu. A teď už na jednotlivá řešení. 


## 1. Vektory? SVG

Tohle je jednoduché. Máte-li obrázek vyjádřitelný vektorem, prostě z něj udělejte SVG a pošlete jej ve stránce prohlížečům. Pokud to extra nezmrvíte, vektory jsou datově velmi úsporné a automaticky připravené. O [responzivních SVG](responzivni-svg.md) píšu v jedné z dalších podkapitol. 

## 2. Staré dobré `<img src>`

S bitmapami to bude složitější, ale jednu věc vím jistě. Jeden neoptimalizovaný obrázek vám pravděpodobně stačit nebude. 

```html
<!-- Bude datově neúsporný nebo 
     ošklivý na Retina displejích: -->
<img src="image_100x100.jpg" 
  width="100" height="100" alt="…">
```

Tahle (ne)technika patří do muzea webového vývoje. Podlaží Počítačová éra.

## 3. Dvojnásobná velikost obrázku v `<img src>`

Občas se ještě setkávám s řešením, které upřednostňuje Retina displeje. Autoři prostě obrázek vloží ve dvojnásobné fyzické velikosti oproti původnímu:

```html
<!-- Bude datově neúsporný (a možná také 
     ošklivý na Retina displejích): -->
<img src="image_200x200.jpg" 
  width="100" height="100" alt="…">
```

Je to samozřejmě nevýhodné pro rychlost načtení na běžných (ne-Retina) displejích. Raději vás upozorním, že obrázek nebude datově dvakrát tak velký, ale tři- nebo čtyřikrát. Obsahuje přeci čtyřnásobný počet pixelů. Zajímavější to začne být, když obrázku uberete na zobrazovací kvalitě.

## 4. Razantně komprimované obrázky v `<img src>`

Datový objem i vysokopacitní displeje můžete v některých situacích vyřešit naráz. Zvětšíte pixelovou velikost obrázku a výrazně snížíte jeho kvalitu:

```html
<img src="image_300x300_lowquality.jpg" 
  width="100" height="100" alt="…">
```

Jak vypadá výroba takového obrázku ve třech krocích?

1. Původní obrázek uložíte ve výrazně větší pixelové velikosti.
2. Snížíte kvalitu exportu někam výrazně pod polovinu.
3. Prohlížeč necháte obrázek převzorkovat na původní velikost.

Komprimované obrázky jsme zkoušeli nasadit na jednom starším projektu. Udělali jsme si testy pro různé kombinace komprese a pixelové velikosti. Nakonec došli k tomu, že obrázky ve dvojnásobné pixelové velikosti a kvalitě komprese nastavené na 30 % měly nejlepší poměr kvality a datového objemu. Ten byl poloviční oproti původní verzi s 80 % kvalitou a velikostí stejné jako se používá ve stránce. U různých typů obrázků to ale bude různé.

Autoři nápadu, Filament Group, svůj zkušební obrázek vkládali dvaapůlkrát velký a kvalitu JPG snížili na 0 %. Výsledný obrázek se pyšnil opět méně než polovinou datového objemu toho původního. [vrdl.in/z7k34](https://www.filamentgroup.com/lab/compressive-images.html)

Asi sami vidíte, že řešení je vhodné jen pro JPG nebo WebP obrázky, kde je možné nastavit ztrátovou kompresi různých úrovní. Typově je pak použití metody vhodné spíše pro fotografie než třeba obrázky s textem, kde by v ostrých hranách mezi barvami byla ztráta kvality viditelná.


## 5. Vlastní řešení pomocí `<img src/data-src>`

Občas je pro responzivní obrázky možné vidět řešení s nahrazováním atributu `src`:

```html
<img src="image_100x100.jpg" 
  data-src="image_300x300.jpg"
  width="100" height="100" alt="…">
```

Na velkých displejích pak autoři těchto řešení usilují o zkopírování obsahu `data-src` do `src` pomocí Javascriptu. Ano, prohlížeč pak zobrazí správný obrázek. Takto pracuje například knihovna Response. [responsejs.com](http://responsejs.com/)

Na pohled elegantní, ale nevýhody to má. Neexistuje totiž způsob jak prohlížeč odradit od stažení obrázku nalinkovaného v atributu `src`. Proto se v těchto řešeních obrázek sice vymění, ale předtím se už stáhl tento soubor. To není potěšující zpráva pro uživatele čekající na pomalém připojení.

Navíc je nutné naprogramovat i logiku pro další scénáře, které mají responzivní obrázky řešit. Například ony Retina displeje. Logiku, kterou už navíc prohlížeče mají v sobě. Hned k ní dojdeme, ale musíme se rozloučit se starým známým atributem `src`.

Iniciativa Responsive Images Community Group totiž před lety přišla s novými atributy – `srcset` a `sizes` – a také s úplně novým tagem `<picture>`. To jsou řešení, která dnes považuji za standardní a pokud je to možné, dávám jim přednost. 


## 6. Atribut `srcset` značky `<img>`


Hodí se pro scénář s výběrem varianty podle velikosti okna. Do atributu `srcset` uvedete velikostní varianty, které jste si předtím uložili na server:

```html
<img src="image_300x300.jpg" 
  srcset="
    image_100x100.jpg 100w,
    image_200x200.jpg 200w,
    image_300x300.jpg 300w"
  width="100" height="100" 
  alt="…">
```

Všimněte si `w`, takzvaného *deskriptoru*, který nese informaci o šířce obrázku. Proč je tam potřeba? Dobrá otázka, zodpovíme si ji v textu o atributech [`srcset` a `sizes`](srcset-sizes.md).

## 7. Atribut `sizes` značky `<img>`

Řešení s atributem `srcset` je fajn, ale zajistí výměnu obrázků jen podle velikosti okna. Obrázky se ale obvykle vyskytují v nějakém prostředí layoutu webu. Proto potřebujeme ještě atribut `sizes`, kterým prohlížeči předáváme onu informaci o layoutu:


```html
<img src="image_300x300.jpg" 
  srcset="
    image_100x100.jpg 100w,
    image_200x200.jpg 200w,
    image_300x300.jpg 300w"
  sizes="980px"
  width="100" height="100" 
  alt="…">
```

Pro více informací vás pošlu opět do podrobně rozepsaného materiálu o atributech [`srcset` a `sizes`](srcset-sizes.md).

## 8. Nová značka `<picture>`

Nový tag `<picture>` vymysleli pro méně časté scénáře jako v případě potřeby mít na konkrétních velikostech layoutu jinak oříznuté obrázky:

```html
<picture>
    <source media="(min-width: 600px)" srcset="image_100x100.jpg">
    <source media="(min-width: 1024px)" srcset="image_300x300.jpg">
    <img src="image_100x100.jpg" alt="…">
</picture>
```

Na první pohled méně zkušených očí vypadá užitečněji než atributy `srcset` a `sizes`, ale není to pravda. Hodí se opravdu hlavně jen na ty speciální ořezové verze a další méně časté scénáře. Více si přečtete [v samostatném textu](picture.md).

Co ale ještě zmínit chci, je podpora nových atributů a značky `<picture>` v prohlížečích. Je výborná, nebojte se.


## Podpora `srcset`, `sizes` a `<picture>` v prohlížečích

Podporují je všechny moderní prohlížeče. Responzivní obrázky nám chybí hlavně ve všech verzích Exploreru a Android Browseru do čtyřkových verzí Androidu. [caniuse.com/srcset](http://caniuse.com/#search=srcset) 

Obzvlášť IE ve verzi 11 je ke dni psaní textu ještě velmi silně zastoupený. Je však dobré si uvědomit, jaké je v tomto případě chování „nepodporujících prohlížečů“.


### První náhradní řešení: přirozené

Použijete parametr `src`, který moderní prohlížeče ignorují, pokud je přítomný `srcset`:

```html
<img 
  src="starsi_prohlizece.jpg"
  srcset="nove_prohlizece.jpg …">
```

### Druhé náhradní řešení: Picturefill

Javascriptová knihovna, která zařídí fungování atributů `srcset`, `sizes` a značky `<picture>` i ve starších prohlížečích. Jmenuje se Picturefill a považuji jej za dobré řešení, které mám odzkoušené na několika webech. [scottjehl.github.io/picturefill](https://scottjehl.github.io/picturefill/)

