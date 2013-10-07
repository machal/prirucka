CSS3 Animace
============
    
Možná se  budete divit, ale CSS3 animace jsou první pořádné nativní webové animace vůbec. Překvapující? Všechny existující způsoby animace jsou buď zapouzdřené ve vlastním technologickém kontejneru (Gif, Flash, Silverlight …) nebo animují prostředkem, který pro tento účel nebyl navržen — javascriptem.

Jak se liší od [transitions](css3-transitions.md)? Jednoduše — jen `animation` jsou plnohodnotný animační nástroj. V `animation` máte celou animaci daleko víc pod kontrolou a nemusíte se omezovat na CSS vlastnosti, které u animovaného objektu existují před startem animace. `transition` jsou určené vyloženě pro jednoduchou animaci změny stavu CSS vlastnosti.

Příklady
--------

* Jednoduchá animace [pokličky na hrncem](http://www.scuk.cz/kurzy/) na Scuk kurzech. (V IE9- se neanimuje, jen se posune.)
* [Kolovrátek](http://dabblet.com/gist/1689261) nebo-li preloader. Tady pak článek  o [výhodách z pohledu spravovatelnosti kódu](http://kratce.vzhurudolu.cz/post/17279304470/spravovatelnost-css3).
* Vyšší dívčí – malý film [Madmanimation](http://stuffandnonsense.co.uk/content/demo/madmanimation/) zpracovaný v CSS3 animacích.
* A opravdová animace dokazující, že bez Flashe se pro animace v budoucnu obejdeme. [Běžící kočka](http://codepen.io/rachelnabors/pen/rCost). Tady je k ní [tutoriál](http://24ways.org/2012/flashless-animation/).


Syntaxe
-------
  
Animaci si nejdřív nadefinujete pomocí at-rule (zavináčové funkce) `@keyframes`. Následně ji můžete kdekoliv zavolat a nastavit si podle libosti.

    @keyframes _nazev_animace_ {
      _cas_   { _deklarace_vlastnosti_ }
      _cas_   { _deklarace_vlastnosti_ }
    }
    
    #example {
      animation: 
        _nazev_animace_ 
        _cas_trvani_ 
        _casova_funkce_prubehu_ 
        _zpozdeni_ 
        _pocet_opakovani_ 
        _smer_prubehu_ 
        _fill_mode_ 
        (,_dalsi_animace_);
    }
    

### `animation-name` — název animace

Můžete použít i samostatně jako `animation-name: my_animation`. 

  
### `animation-duration` — čas trvání

Nastavíte ve vteřinách (`.5s`) nebo v milisekundách (`500ms`). Výchozí hodnota `animation-duration: 0s`.

  
### `animation-timing-function` – časová funkce průběhu


Podobně jako u [transition][1], lze využít funkce přednastavené nebo definovat vlastní, například nástrojem [Ceaser](http://matthewlein.com/ceaser/). Samostatný zápis a výchozí hodnota vypadá takto: `animation-timing-function: ease`.
  
### `animation-delay` – zpoždění startu

Jakou dobu má animace čekat než se rozběhne? Opět ve vteřinách nebo milisekundách. Přednastavena je samozřejmě nulová hodnota: `animation-delay: 0`.

  
### `animation-iteration-count` — počet opakování

Lze nastavit číslo nebo nekonečný počet opakování pomocí `infinite`. Přednastavená je hodnota `animation-iteration-count: 1`. 

  
### `animation-direction` — směr průběhu

Na rozdíl od transitions, v případě opakování animace se stav vrátí na výchozí keyframe (0%) a znovu pokračuje k cíli. Pokud chceme, aby na sebe jednotlivá opakování animace navazovaly, musíme směr průběhu nastavit na hodnotu `alternate`. Samostatně jako `animation-direction: alternate`.

  
### `animation-fill-mode` — směr přepsání vlastností

Výchozí stav naší animace bude vypadat takto: před startem animování a po jeho skončení se na animovaný element nijak neaplikují CSS vlastnosti z keyframů animace. Vlastností `animation-fill-mode` toto chování můžeme změnit.

Může nabývat čtyř hodnot:

- `none` - výchozí hodnota. 
- `backwards` - i když má element jiné nastavení vlastností, při jeho zobrazení se použijí hodnoty z keyframe 0%. 
- `forwards` - po skončení poslední iterace animace zůstane objekt ve stejném stavu jako je v keyframe 100% a nevrací se zpět.
- `both` - aplikuje `forwards` i `backwards`.

### `animation-play-state` — stav přehrávání

Vlastnost, která jako jediná není součástí zkratky animation a je třeba ji používat vždy samostatně. Animaci můžete dočasně zastavit pomocí `animation-play-state: paused`.
  
### `@keyframes` – klíčové snímky průběhu animace

Definují začátek (klíčové slovo `from` nebo `0%`), průběh (pomocí procent z průběhu) a konec (`to` nebo `100%`) animace. Přechod mezi jednotlivými keyframes vypočítá prohlížeč sám. Začátek a konec je potřeba nastavit vždy, počet keyframes mezi nimi neni nijak limitovaný.

Příklady k vyzkoušení
---------------------

Na tomhle jednoduchém příkladu si vyzkoušejte úplné základy. Elementu v nekonečné smyčce měníme opacity:

<p data-height="158" data-theme-id="502" data-slug-hash="pKodf" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/pKodf'>CSS animace</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Druhý příklad je pokročilejší. Řetězíme v něm dvě různé animace, využíváme směr průběhu a další: 

<p data-height="167" data-theme-id="502" data-slug-hash="xipAj" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/xipAj'>CSS3 animace: pokročilejší</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Tipy a triky
------------

* Ve Webkit prohlížečích můžete při spouštění animace někdy sledovat nepříjemné probliknutí celé stránky. Pomáhá vynucené [zapnutí hardwarové akcelerace](http://www.html5rocks.com/en/tutorials/speed/html5/#transanim). Například takto `.animovany_element { -webkit-transform: translateZ(0); }`


Zajímavé odkazy
---------------

- Materiál o animacích na [NetMagazine](http://www.netmagazine.com/tutorials/masterclass-css-animations).
- Pokud potřebujete snadno nastavit dráhu animovaného objektu, mrkněte na animační nástroj [Stylie](http://jeremyckahn.github.io/stylie/).


Podpora v prohlížečích
----------------------

CSS3 animace nepodporuje IE9 a starší. Animace tedy můžete buď využít jako drobná estetická vylepšení uživatelského rozhraní v moderních prohlížečích nebo s pomocí detekce vlastností ve starších prohlížečích animovat jiným způsobem.


  [1]: /css3-transitions