CSS3 Font Face
==============

Webové fonty nebo-li vlastní (nesystémové) fonty do stránky? Font Face je dnes už standardní technika s takřka plnou podporou v prohlížečích, které se z technického pohledu není potřeba bát.

Pokud začínáte, dejte si pozor hlavně na dvě věci:

- Autorská práva. Ne každý font existuje ve verzi dovolující publikaci na webu. 
- [Vykreslování na starších systémech][1]. Zkontrolujte, zda se font v dané velikosti vykresluje hezky i na Windows XP (hlavně v alternativních prohlížečích) a na starších verzích Androidu.

Webdesign je z velké části typografie. Takže pokud jste ještě nezačali, hned si webfonty vyzkoušejte!

Syntaxe
-------

    @font-face {
      font-family: _nazev_rodiny_;
      src: url(_cesta_k_souboru_s_pismem_) format(_format_souboru_);
    }

    .element {
        font-family: _nazev_rodiny_;
    }

Nejdřív v bloku `@font-face` nadeklarujete název rodiny a cestu k souboru. Pak název rodiny jednoduše zavoláte v běžném CSS. 

Téměř každý prohlížeč využívá trochu jiný formát. Ke dnešku známe [WOFF](http://caniuse.com/woff), [SVG font](http://caniuse.com/svg-fonts), [TTF/OTF](http://caniuse.com/ttf) a starší MSIE potřebují [EOT](http://caniuse.com/eot).

V reálu je díky tomu syntaxe trošku složitější, podívejte se vždy na [aktuální verzi syntaxe][2].


Příklad k vyzkoušení
--------------------

Tady je příklad využívající aktuální syntaxi fungující ve všech prohlížečích.

<p data-height="182" data-theme-id="502" data-slug-hash="aLeGg" data-user="machal" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/machal/pen/aLeGg'>Příklad: CSS Font-Face</a> by Martin Michálek (<a href='http://codepen.io/machal'>@machal</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>


Kde najít fonty?
----------------

### Optimální varianta: Typekit, Fonts.com, písmolijny

Tyhle dvě služby zaměstnávají špičkové typografy i techniky a vlastní licence velmi dobrých i známých fontů. Budou po vás chtít nějaké peníze, ale vyhnete se spoustě problémů, které tady ani nezvládneme nastínit.

Dobré je hledat přímo u typografů. V Česku nabízí dobré webfonty třeba [Tomáš Brousil][3] nebo [František Štorm][4]. 

### Docela dobré alternativy: Google Fonts, Fontsquirrel, ...

- [Google Fonts][5] je fajn služba s velkým množstvím písem zdarma. Ne všechny jsou ale bůhvijak kvalitní a ne všechny mají českou lokalizaci.
- [Fontsquirrel][6] má jednak vlastní databázi fontů s podobnými problémy jako Google, ale taky velmi známý [generátor][7], který vám udělá webfont z písma, které vlastníte v diginální podobě.

### Pozor na fonty zdarma

Na internetu se jich povaluje docela dost zdarma. Ale kvalitních je málo. Font by měl mít nějaké technické (např. velikost souboru), typografické (např. optimalizace způsobu vykreslování pro web, čitelnost) a estetické kvality. Pokud nemáte po ruce technika a typografa, nebo patřičné znalosti, můžete na své stránce leccos pokazit. Na systémových fontech není nic špatného.

Podpora v prohlížečích
----------------------

Není co řešit — `@font-face` podporuje Explorer od verze 4. Podporu musíte řešit, jen pokud v cílové skupině máte velké množství uživatelů s Androidem 2.1, což je velmi málo pravděpodobné.

  [1]: http://blog.typekit.com/2010/10/15/type-rendering-operating-systems/
  [2]: http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax
  [3]: http://www.suitcasetype.com/
  [4]: http://www.stormtype.com/
  [5]: http://www.google.com/fonts/
  [6]: http://www.fontsquirrel.com/
  [7]: http://www.fontsquirrel.com/tools/webfont-generator