# Barevný kontrast ve webdesignu a nástroje 

## Proč kontrast řešit? {#proc}

Jak asi tušíte, důvod leží především [v inkluzi](https://www.vzhurudolu.cz/podcast/96-podcast-radek-pavlicek). Je ve vašem zájmu zajistit čitelnost obsahu vašeho webu co nejširší skupině lidí v co největším množství kontextů. Jde zejména o následující skupiny:

- Uživatelé s poruchou barvocitu. [Barvoslepost](https://cs.wikipedia.org/wiki/Barvoslepost) není zdaleka tak okrajová, jak se může zdát. Podle Wikipedie se týká 9 % mužů a 0,4 % žen.
- Každý návštěvník ve ztížených světelných podmínkách, u špatně nastaveného nebo nekvalitního displeje.

Nedostatečným kontrastem na webech jsme ale postižení úplně všichni, bez ohledu na nastavení našich očí, displejů nebo momentální nálady slunce.

Pojďme si tedy říct, jaké hodnoty bychom při návrhu a vývoji webu měli splňovat.

## Doporučený kontrastní poměr: 7:1 ideálně, 3:1 minimálně {#doporuceny}

Nemůžu tady navázat na nikoho jiného než [na Radka Pavlíčka](http://poslepu.cz/jak-vybrat-barvy-pro-graficky-navrh/). Správný kontrastní poměr je následující:

- *7:1* — ideální minimální kontrastní poměr. Vyhovuje nejvyšší úrovni AAA normy [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Jde o ideální stav.
- *4,5:1* — minimální kontrastní poměr pro text stránky. Je to definováno jako běžné písmo do velikosti 18 bodů nebo tučné písmo do velikosti 14 bodů. To je podle [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) v úrovni AA.
- *3:1* — minimální kontrastní poměr pro větší texty typu nadpisů. Jde o oísmo nad 18 bodů nebo tučné písmo nad 14 bodů. [Radek Pavlíček](http://poslepu.cz/musi-byt-text-neaktivniho-prvku-rozhrani-dostatecne-kontrastni/)  tenhle kontrastní poměr doporučuje také jako minimum pro neaktivní prvky rozhraní.

Píšu tady o minimech. Ale myslím, že bychom na sebe měli být přísnější. Geri Coady, autorka příručka [Color Accessibility Workflows](https://abookapart.com/products/color-accessibility-workflows) doporučuje splnit AAA úroveň pro veškerý text a AA pro nadpisy a méně významný obsah ve stránce.

Je dobré zmínit, že nejde jen o text ve stránce, ale také v grafických elementech jako jsou všelijaké bannery.

Máte? Pojďme teď ověřit, jestli je na vašem webu kontrast dostatečný.

## Nástroje pro testování kontrastu {#nastroje-testovani}

Začneme tím nejjednodušším, dostupným online.

### Contrast Ratio od Ley Verou {#nastroje-lea}

<figure>
<img src="../dist/images/original/kontrast-lea.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Contrast Ratio porovnává dvě barvy a počítá jejich kontrast*
</figcaption>
</figure>

Fakt jednoduchý nástroj, kam prostě vložíte dvě barvy a v zeleném poli uvidíte jejich vzájemný kontrastní poměr. [contrast-ratio.com](https://contrast-ratio.com)

### Chrome DevTools {#nastroje-devtools}

Docela fajn utilitu pro měření kontrastu máme také [od verze 65](https://developers.google.com/web/updates/2018/01/devtools#contrast) ve vývojářských nástrojích nejrozšířenějšího prohlížeče.

<figure>
<img src="../dist/images/original/kontrast-lea.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Chrome DevTools: Kliknutím na jakoukoliv barvu (1) se vám rovnou může zobrazit barevný kontrast (2). Jen je občas potřeba ručně doplnit barvu pozadí (3)*
</figcaption>
</figure>

Po zapnutí Chrome DevTools (Ctrl/Cmd+Alt+i) je jen potřeba najet v záložce Inspect na nějakou barvu mezi CSS vlastnostmi.

Také [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector#Highlighting_of_UI_items) umožňuje najít kontrastní poměr ve svých nástrojích pro vývojáře. Ke dni psaní textu je jen potřeba zapnout „Accessibility Features“.

Online nástrojů a rozříšení pro prohlížeče je samozřejmě jako dříví v lese. Z dalších vyjmenujme alespoň následující:

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Jonathan Snook: Colour Contrast Check](https://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333)
- Kontrast kontroluje také [Lighthouse](lighthouse.md), o kterém jsem tady už psal.

Pojďme se ale ještě mrknout na jinou sadu nástrojů, užitečnou spíše pro grafiky a designéry. Pomohou totiž už s *výběrem* barev pro připravovaný projekt.

## Nástroje pro výběr barev {#nastroje-vyber}

Vyjdu tady opět [z přehledu Radka Pavlíčka](http://poslepu.cz/jak-vybrat-barvy-pro-graficky-navrh/):

- [Color Safe](http://colorsafe.co/) umožňuje vybírat paletu z barev, které mají dostatečný kontrast s vaší barvou pozadí. A zároveň nejsou ošklivé.
- [Tanaguru Contrast Finder](http://contrast-finder.tanaguru.com/) zase hledá dostatečně kontrastní odstíny „vašich“ barev. Cool nástroj, který jsem několikrát použit pro korekci nedostatečných kontrastů.
- [Paletton](http://www.paletton.com/) od Petra Staníčka je nástroj pro geeky do barev, který asi znáte. Kromě jiného umí z dostupných barev filtrovat podle nastaveného minimálního kontrastu. Mrkněte se do sekce „Tables / Export…“.
