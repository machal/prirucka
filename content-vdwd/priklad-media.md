# Příklad: dokument s přizpůsobivými médii

Do příkladu jsme teď vložili veškerý mediální obsah. Podívejme se teď na něj společně v rozlišení dnešních běžných mobilů. 

![Příklad před aplikováním přizpůsobivých médií](dist/images/original/vdwd/priklad-media-pred.jpg)

*Obrázek: Příklad před aplikováním přizpůsobivosti médií.*

Text se chová hezky, ale média nám vystrkují růžky, že ano? Žádný strach, nůžky na ně brát nebudeme. Prostě jim domluvíme, aby se jejich chování stalo flexibilnějším.

## 1. SVG logo

Na logo aplikujeme trik, který jsme se naučili v podkapitole [o responzivním SVG](responzivni-svg.md). Odstraníme parametry `width` a `height`. Všechno necháme na jejich kolegovi: `viewBox`. Řešení  hledejte přímo v `index.html`.

Pro správně pružné chování v Internet Exploreru ještě doplníme rodičovský kontejner a trik se zachováním poměru stran pomocí `padding-bottom`. To hledejte v souboru `style/ui/logo.css`.


## 2. Obrázky produktu

První krok je jednoduchý: pružné přizpůsobení velikosti okna. Toho dosáhneme kódem pro obrázky, který jsme se naučili [na začátku kapitoly](pruzna-media.md). Najdete jej v `style/media/images.css`.

Druhý krok zajistí, aby se načítaly také správné varianty obrázků na různě velkých oknech a poměrech `device-pixel-ratio`.


## 3. Tabulka

V tomto rozlišení ještě vypadá hezky. Ale není tabulky, která by se někde nerozpadla. Stačilo by okno zmenšit o trochu více. Aplikujeme řešení pro posun do stran [z podkapitoly o tabulkách](responzivni-tabulky.md).



## 4. Vkládané video

Opět si stačí vzpomenout na „Pružné vkládané elementy se zachovaním poměru stran“ ze začátku této kapitoly. A opět se o slovo hlásí trik s `padding-bottom`, ten ostatně v responzivním designu budete potřebavat velmi často.
