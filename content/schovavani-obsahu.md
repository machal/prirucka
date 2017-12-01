# Schovávání obsahu v CSS a HTML

Máte čtyři možnosti, jak pomocí CSS nebo HTML schovat obsah před určitým typem uživatelů (a robotů):

1. [Destruktivně](#destruktivne) 
2. [Dočasně vizuálně](#docasne-vizualne)  
3. [Trvalé vizuální](#trvale-vizualne) 
4. [Schování před odečítači](#pred-odecitaci) 

Ještě předtím cítím pnutí, abych tady zmínil rozdíly mezi stroji a způsobem jejich zpracování stránky.


## Roboti a zpracování vizuální části stránky {#roboti}

Zjednodušeně jde o tři kategorie:

### Stroje, které čtou jen HTML {#roboti-html}

Sem patří naprostá většina robotů: ten od Seznamu, od Facebooku a mnoho dalších. Pro ně je důležité mít hlavně dobře strukturované HTML. CSS, JS nezpracovávají.

### Stroje, které čtou DOM {#roboti-html}

Příkladem mohou být zejména odečítače obrazovky pro zrakově hendikepované jako JAWS, NVDA a tak dále. Ke stránce mají přístup skrze běžné prohlížeče. Vidí tedy už hotový DOM zpracovaný Javascriptem. Pokud je mi známo, čtou i některé části CSS. Z pochopitelných důvodů ale nijak nehodnotí vizuální stránku webu. 

### Stroje, které stránku „vidí“ {#roboti-html}

To jsou roboti od Google. Kromě přečtení HTML si pak (některé) stránku ještě prohlíží jako běžný uživatel, takže hotový DOM a návazné styly. Snaží se tak například zjistit, jestli nemáte v HTML texty, které byste podstrkovali jen strojům a běžný uživatel je už neuvidí.


## Destrukturivní schovávání {#destruktivne}

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

Vím, že [v responzivním designu](https://www.vzhurudolu.cz/responzivni-design) je občas potřeba na některých breakpointech obsah schovávat. Vždy prosím zvažte, zda je to potřeba. Pokud ano, snažte se, aby byl obsah viditelný na výchozím „pohledu“ Googlebota. Dnes je to desktopové rozlišení, v blízké budoucnosti bude ale Google indexovat [primárně v mobilním rozlišení](https://www.vzhurudolu.cz/blog/73-google-mobile-first).

`display: none` a podobné vlastnosti jsou tedy poměrně nebezpečné. Pokud schovávat, nezkusíme to dělat chytřeji?


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

Všechny stroje obsah v `.nav` uvidí. A Google? Tady pozor, domnívám se, že může obsahu dát menší váhu. Právě proto, že na weby kouká také vizuálně.


## Trvalé schování vizuálně, ale ne ve čtečkách {#trvale-vizualne}

Nejčastěji se používá nějaká metoda napozicování mimo viewport. A jeden z nějčastějších scénářů použití je odkaz pro skok na hlavní obsah. Ten je důležitý pro starší čtečky, ale kupodivu také pro uživatele, kteří normálně vidí, ale zrovna prostě nemohou použít myš nebo dotykové ovládání. HTML vypadá takto:

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

Po prvním zmáčknutí klávesy Tab se objeví odkaz s možností přeskočit rovnou na obsah. Vyzkoušet si to můžete rovnou tady na Vzhůru dolů.

Fanoušci Bootstrapu – a nejen oni – něco podobného znají v podobě rodiny [.sr-only tříd](https://getbootstrap.com/docs/4.0/utilities/screenreaders/) („Screeen Reader Only“).

Google by tohle mě přečíst, ale tomu dát jen malou váhu.


## Schovávání ve čtečkách (…jenže je to potřeba?) {#pred-odecitaci} 

Občas je potřeba v HTML použít element, který je tam jen proto, aby nesl vizuální informaci. Třeba `span` s ikonou v background-image:

```html
<span class="icon" aria-hidden="true">
</span>
```

Otázka ovšem je, jestli není správnější chybějící obsah prostě přidat. Pokud se vám nehodí dávat obsah přímo do HTML, doporučuji si za uši zapsat atribut `aria-label`.

```html
<span class="icon" aria-label="Menu">
</span>
```

Tímto prostě přidáme chybějící textový popisek.

Nepovedlo se mi dohledat důkaz, zda tyto atributy indexuje Google, ale dávalo by to smysl.
