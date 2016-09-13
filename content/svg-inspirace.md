# SVG inspirace: efekty, animace, interakce, přechody a další udělátka


[SVG](svg.md) je pro webdesign velká věc, ale trápí mě jak málo se to ví. V tomto textu budu shromažďovat dema možností, které SVG nabízí.


## Text: výplně, filtry, efekty 

![Text: výplně, filtry, efekty v SVG](dist/images/small/svg-inspirace-animace.jpg)

Práce s textem je jasná volba. Výhoda SVG je v tom, že text je plně přístupný: indexovatelný Googlem, čtený slepeckými čtečkami a je možné jej kopírovat.

1 Výplně textu obrázky nebo barevnými přechody: [Codrops demo](http://tympanus.net/codrops/2013/12/02/techniques-for-creating-textured-text/).
- Animované textové výplně: [Codrops demo](http://tympanus.net/codrops/2015/02/16/create-animated-text-fills/).
- Filtry na text jako v grafickém editoru: [Článek na Smashing Magazine](https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/)
- Animované ohraničení textu: [Codepen demo](http://codepen.io/mullany/pen/kkYNNQ) 


## Obrázky: výřezy a filtry

![Obrázky: výřezy a filtry v SVG](dist/images/small/svg-inspirace-obrazky.jpg)

Ořezávání obrázků vlastními tvary bude do budoucna možné [i v CSS](http://bennettfeely.com/clippy/). Teď je však nejspolehlivější cestou SVG. Zajimavé využití nabízí SVG i pro filtry přes obrázky. Sledujte co s nimi dělá [Michael Mullany](http://codepen.io/mullany/pens/popular/).

1. Vlastní ořez obrázku: [Codepen demo](http://codepen.io/machal/pen/jrPpdO). 
- Filtry přes fotky: [Codepen demo](http://codepen.io/machal/pen/JaECv).


## Animace

![Animace v SVG](dist/images/small/svg-inspirace-animace.jpg)

Animování jednotlivých částí SVG má daleko širší škálu než v případě elementů stránky stylovaných pomocí CSS. SVG animace – [SMIL](http://caniuse.com/#search=smil) – nemají plnou podporu a tak se pro rozhýbání používá buď CSS nebo javascriptové knihovny: [Snap.svg](http://snapsvg.io/) se bude líbit kodérům nebo [Greensock](http://greensock.com/) s velmi pokročilými možnostmi.

1. Animované zatržítka s vlastním vzhledem: [Codrops demo](http://tympanus.net/codrops/2013/10/15/animated-checkboxes-and-radio-buttons-with-svg/).
- Animované interakce s textovými políčky: [Codrops demo](http://tympanus.net/Development/TextInputEffects/index2.html).
- Animované ikony: [Codrops demo](http://tympanus.net/Development/AnimatedSVGIcons/).
- Animace cesty na mapě pomocí posunu stránky: [Codrops demo](http://tympanus.net/Development/StorytellingMap/).
- Pružnost: [Codrops demo](http://tympanus.net/Development/ElasticSVGElements/index.html).
- Lepkavost: [Codrops demo](http://tympanus.net/Development/CreativeGooeyEffects/pagination.html).
- Animované interakce s tlačítky: [Codrops demo](http://tympanus.net/Development/DistortedButtonEffects/)
- Zajímavé animované diagramy v článcích dělá [Jake Archibald](https://jakearchibald.com/2016/streams-ftw/).
- [Symbio](https://symbio.agency/) na svém webu animují epicky. A přitom vkusně, pro dobro věci.


## Interakční přechody

![Interakční přechody v SVG](dist/images/small/svg-inspirace-prechody.jpg)

Ano, i přechody mezi stránkami se hodí animovat. Tohle se ve webdesignu zatím moc nepoužívá, ale dovolím si tomu věštit velkou budoucnost. 

1. Animované načítání položek: [Codrops demo](http://tympanus.net/Development/ItemRevealer/).
- Přechod seznam → detal: [Codrops demo](http://tympanus.net/Development/CardExpansion/).
- Mezistránkové přechody: [Codrops demo](http://tympanus.net/Development/PageLoadingEffects/).
- Rozmazaný přechod mezi položkami prezentace: [Codrops demo](http://tympanus.net/Tutorials/MotionBlurEffect/).


## Widgety: bannery, mapy, infografiky

![Udělátka v SVG](dist/images/small/svg-inspirace-interakce.jpg)

SVG se mimojiné hodí jako náhrada Flashe jako pomocník pro realizaci *udělátek*, malých webů uvnitř webů. Bannery, malé interaktivní apky, interaktivní infografiky… Prostě věci co jsme dřív dělali ve Flashi. A já vím – SVG je zatím spíše srandovní náhrada Flashe. Hlavně z pohledu nepřítomnosti pořádných designérských nástrojů. Ale však ono se to časem zlepší.

1. Interaktivní mapy: [Codrops demo](http://tympanus.net/Development/Interactive3DMallMap/
- Interaktivní infografika realizovaná [SuperKodéry](http://www.superkoderi.cz/): [IslamophobiaNetwork.com](https://islamophobianetwork.com/).
- Bannery v SVG: [Codepen demo](http://codepen.io/chriscoyier/pen/dvjhn
- Omalovánka pro syna Lukáše Wernera: [Blesk]http://pics.prosexsound.cz/blesk.html).


## …a, no jasně, ikony

Na samotných ikonkách nic zajímavého není. SVG ale otevírá nové možnosti jak pracovat s většími sadami ikon. Mnozí doporučují [SVG Store](https://github.com/FWeinb/grunt-svgstore), já jsem si oblíbil nástroj [Grunticon](http://www.grunticon.com/), o kterém jsem také [nedávno psal](svg-grunticon.md).

Další inspiraci hledejte v téhle nesmrtelné prezentaci od [Sary Soueidan](http://slides.com/sarasoueidan/building-better-interfaces-with-svg/), na [Codrops](http://tympanus.net/codrops/tag/svg/) nebo třeba u [Lucase Bebbera](http://codepen.io/lbebber/pens/popular/).

Vsadím boty, že tímhle sbírka jen začíná. Zmiňte se komentářích, pokud máte jiné hezké příklady z vlastní praxe. Rád je sem přidám.

<div class="web-only text-center text-small" markdown="1">

---

Zaujaly vás, ale nevíte jak ty věci zrealizovat? Vše co potřebujete znát vás naučí Michal Matuška na našem [kurzu SVG](http://www.vzhurudolu.cz/kurzy/svg).

</div>



