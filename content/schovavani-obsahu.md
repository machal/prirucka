# Schovávání obsahu v CSS a HTML

Máte čtyři možnosti, jak pomocí CSS nebo HTML schovat obsah před nějakou skupinou uživatelů (nebo robotů):

1. [Destruktivně](#destruktivne) 
2. [Dočasně vizuálně](#docasne-vizualne)  
3. [Trvale vizuálně](#trvale-vizualne) 
4. [Trvale před odečítači](#pred-odecitaci) 

Ještě předtím cítím pnutí, abych hned teď rozvedl rozdíly mezi stroji a způsobem jejich zpracování stránky.


## Roboti a zpracování vizuální části stránky {#roboti}

Zjednodušeně jde o tři kategorie:

### Stroje, které čtou jen HTML {#roboti-html}

Sem patří naprostá většina robotů: ten od Seznamu, od Facebooku a mnoho dalších. Pro ně je důležité mít hlavně dobře strukturované HTML. CSS, JS nezpracovávají.

### Stroje, které čtou DOM {#roboti-html}

Příkladem mohou být zejména odečítače obrazovky pro zrakově hendikepované jako JAWS, NVDA a tak dále. Ke stránce mají přístup skrze běžné prohlížeče. Vidí tedy už hotový DOM zpracovaný Javascriptem. Pokud je mi známo, čtou i některé části CSS. Z pochopitelných důvodů ale nijak nehodnotí vizuální stránku webu. 

### Stroje, které stránku „vidí“ {#roboti-html}

To je třeba Googlebot z vyhledávání Google. Kromě přečtení HTML si ještě (některé) stránky ještě prohlíží jako běžný uživatel, takže s hotovým DOMem a návaznými styly. Snaží se tak například zjistit, jestli nemáte v HTML texty, které byste podstrkovali jen strojům a běžný uživatel je už neuvidí.


## Destruktivní schovávání {#destruktivne}

Pokud chcete element schovat fakt všude, můžete použít například tyto dvě deklarace v CSS:

```css
display: none; 
visibility: hidden;
```

Nebo parametr v HTML:

```html
<div hidden>…</div>
```

Jenže! Opravdu chcete něco schovat všude? Prvek nebude vidět vizuálně, nebude dostupný v odečítačích obrazovky, ale i Google může schovanému obsahu [dát menší váhu](https://www.seroundtable.com/google-display-none-20626.html). 

Vím, že [v responzivním designu](https://www.vzhurudolu.cz/responzivni-design) je občas potřeba na některých breakpointech obsah schovávat. Ale myslím, že deklarace `display:none` má ve stránce být jako šafránu. Vždy prosím zvažte, zda je to potřeba. Pokud ano, snažte se, aby byl obsah viditelný na výchozím „pohledu“ Googlebota. Dnes je to desktopové rozlišení, v blízké budoucnosti bude ale Google indexovat [primárně v mobilním rozlišení](https://www.vzhurudolu.cz/blog/73-google-mobile-first).

Destruktivní schovávání je tedy poměrně riskantní. Pokud schovávat, nezkusíme to dělat chytřeji?


## Dočasné schování vizuálně, ale ne ve čtečkách {#docasne-vizualne}

K tomu slouží metody ořezávací a zprůhledňovací:

```css
max-height: 0;
overflow: hidden;
opacity: 0;
```

Odečítače obrazovky [neschovávají ořezaný obsah](https://webaim.org/blog/screen-readers-and-css/), takže tohle všechno normálně přečtou.

Hlavně vlastnost `max-height` je užitečná pro použití na různé rozklikávání obsahu. Asi to znáte z příkladu rozklikávání navigace na mobilu:

```css
@media screen and (max-width: 60em) {
  .nav {
     max-height: 0;
  }  

  .nav--visible {
     max-height: 50em; /* Nějaké vysoké číslo */
  }
}
```

Vy zkušenější víte, že vlastnost `max-height` je také možné animovat. Je to vidět například na tomto Codepenu: [cdpn.io/e/ICkwe](https://codepen.io/LFeh/pen/ICkwe).

Všechny stroje obsah v `.nav` uvidí. A Google? Protože stránku „vidí“, domnívám se, že může obsahu dát menší váhu. 


## Trvalé schování vizuálně, ale ne ve čtečkách {#trvale-vizualne}

Nejčastěji se používá nějaká metoda napozicování mimo [viewport](viewport-mobily.md). A jeden z nějčastějších scénářů použití je odkaz pro skok na hlavní obsah. Ten je důležitý pro starší čtečky, ale kupodivu také pro uživatele, kteří normálně vidí, ale zrovna prostě nemohou použít myš nebo dotykové ovládání. HTML vypadá takto:

```html
<a href="#main" class="skip-link">
  Přejít na obsah
</a>
```

A tady jsou styly:

```css
.skip-link {
  position: absolute;
  top: 0;
  right: 100%;
}

.skip-link:focus {
  right: auto;
}
```

Po prvním zmáčknutí klávesy Tab se objeví odkaz s možností přeskočit rovnou na obsah. Vyzkoušet si to můžete rovnou tady [na Vzhůru dolů](https://www.vzhurudolu.cz).

Fanoušci Bootstrapu – a nejen oni – něco podobného znají v podobě rodiny [.sr-only tříd](https://getbootstrap.com/docs/4.0/utilities/screenreaders/) („Screeen Reader Only“). Tato varianta ovšem nepočítá s možností zobrazení obsahu po přístupu z klávesy Tab:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}
```

Google by tohle mě přečíst, ale kvůli vizuální neviditelnosti obsahu dá myslím jen malou váhu.


## Schovávání ve čtečkách (…jenže je to potřeba?) {#pred-odecitaci} 

Občas je potřeba v HTML použít element, který je tam jen proto, aby nesl vizuální informaci. 

Třeba `span` s ikonou nalinkovanou přes CSS vlastnost `background-image`:

```html
<span class="icon" aria-hidden="true">
</span>
```

Tlačítko v Bootstrapu 3:

```html
<button class="btn" aria-label="Left Align">
  <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
</button>
```

*Jenže: Je to fakt potřeba, když je to prázdný element? Navíc mi aria-hiden nefičí na Safari/Voiceover.*

Další tlačíko v Bootstrapu, tentokrát s obsahem:

```
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

Akordeon podle [Heydona Pickeringa](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles):

```
<h3>
   <button aria-expanded="false" aria-controls="collapsible-0">What is this all about?</button>
</h3>
<div id="collapsible-0" aria-hidden="true">
   <p>Lorem ipsum with a <a href="http://example.com">link thrown in</a> etc.</p>
   <p>etc.</p>
</div>
```

* celé tlačítko je `<button>`
*  `aria-controls="collapsible-0"` - co kontroluje
    * "use the JAWS key + ALT + M to move to the controlled element"
* `aria-expanded="false"`, zda je kontrolovaný obsah
* `aria-hidden="true"` - není vidět
* JS pak podle aria-controls mění aria-expanded a aria-hidden http://heydonworks.com/practical_aria_examples/js/a11y.js


*Jenže: Je tam potřeba aria-hidden, když by to bylo stylované přes max-width: 0? Vlastně asi je, protože jinak to čtečka všechno přečte.*

---

Otázka ovšem je, jestli není správnější chybějící obsah prostě přidat. Pokud se vám nehodí dávat obsah přímo do HTML, doporučuji si za uši zapsat atribut `aria-label`.

```html
<span class="icon" aria-label="Menu">
</span>
```

*Jenže: aria-label mi nefičí na Safari/Voiceover.*

Tímto prostě přidáme chybějící textový popisek.

Nepovedlo se mi dohledat důkaz, zda tyto atributy indexuje Google, ale dávalo by to smysl.


