# Schovávání obsahu v CSS a HTML

Tohle totiž taky není žádná automatická bžunda.

## display: none a další destrukturivní schovávačky

Pokud chcete element schovat fakt všude, můžete použít například tyto tři metody:

display: none; 
visibility: hidden;
<div hidden>…</div>

Jenže – opravdu chcete něco schovat všude? Prvek nebude vidět vizuálně, ve čtečkách, ale i Google dá schovanému obsahu menší váhu. Takže pokud schovávat, nezkusíme to dělat chytřeji?

## Dočasné schování vizuálně, ale ne ve čtečkách

K tomu slouží metody ořezávací a zprůhledňovací:

max-height: 0;
overflow: hidden;
opacity: 0;

Čtečky nijak neřeší ořezaný obsah, takže tohle všechno normálně přečtou.
Hlavně max-height: 0; je užitečný pro různé rozklikávání obsahu nebo navigací na mobilech.

A Google? Tady pozor, opět může dát obsahu menší váhu, protože na weby kouká také vizuálně.

## Trvalé schování vizuálně, ale ne ve čtečkách

Nejčastěji se používá nějaká metoda napozicování mimo viewport. A jeden z nějčastějších scénářů použití je odkaz pro skok na hlavní obsah. Ten je důležitý pro starší čtečky, ale kupodivu také pro uživatele, kteří normálně vidí, ale zrovna prostě nemohou použít myš nebo dotykové ovládání. HTML vypadá takto:

<a href="#main" class="skip-link">
  Přejít na obsah
</a>

A tady jsou styly:

.skip-link {
  position: absolute;
  top: 0;
  right: 100%;
}

.skip-link:focus {
  right: auto;
}

Po prvním zmáčknutí klávesy Tam se objeví odkaz s možností přeskočit rovnou na obsah. Vyzkoušet si to můžete rovnou tady na Vzhůru dolů.

Fanoušci Bootstrapu – a nejen oni – něco podobného znají v podobě .sr-only tříd („Screeen Reader Only“).

Google by tohle mě přečíst, ale tomu dát jen malou váhu.

## Schovávání ve čtečkách (…jenže je to potřeba?)

Občas je potřeba v HTML použít element, který je tam jen proto, aby nesl vizuální informaci. Třeba span s ikonou v background-image:

<span class="icon" aria-hidden="true">
</span>

Otázka ovšem je, jestli není správnější chybějící obsah prostě přidat. Pokud se vám nehodí dávat obsah přímo do HTML, doporučuji si za uši zapsat atribut aria-label.

<span class="icon" aria-label="Menu">
</span>

Tímto prostě přidáme chybějící textový popisek.

Nepovedlo se mi dohledat důkaz, zda tyto atributy indexuje Google, ale dávalo by to smysl.
