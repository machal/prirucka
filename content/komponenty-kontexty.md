# Komponenty vs. kontexty v CSS

Pokud používáte BEM nebo jinou komponentovou metodiku v CSS, byl by zázrak když byste nenarazili na problém stylování přes rodiče.

Vezměme, že máme tuhle komponentu se zeleným tlačítkem:

```css
.button {
  padding: 1rem;
  color: LimeGreen;  
  border: 1px solid currentColor;
  background: transparent;
}
```

Používáme ji vesele globálně pro celý projekt. Když tu nám náladu zkazí požadavek na vložení tlačítka do žluté sekce:

```html
<div class="section">
  <button class="button">
    Button
  </button>
</div>
```

```css
.section {
  background: gold;
  padding: 2rem;
}
```

Její CSS kód nám říká, že tlačítková zelená nepůjde se zlatou příliš dohromady. Začneme se hroutit, protože opět přichází ta chvíle, kdy si pokazíme komponentový přístup, dosud čistý jako studánku.

## Komponentový přístup

Pokud bychom se chtěli úzkostlivě držet předpisů [metodiky OOCSS](oocss.md) se zápisem [v BEM](bem.md), zřejmě bychom skončili u přidání modifikátoru do komponenty `button.css`:

```css
.button--section {
  color: DarkGreen;
}
```

Jenže — není to trochu přitažené za vlasy? Vytváříme modifikátor komponenty *jen* pro potřeby jednoho kontextu. Nemluvě o tom, že design našeho projektu *vůbec nemusí* být vymyšlený komponentově, že v tom designér nebo designérka žádný systém nemají.

Pak náš milý kolega programátor uvidí HTML, které mu navrhujeme:

```html
<div class="section">
  <button class="button button--section">
    Button
  </button>
</div>
```

Vyleze kvůli tomu ze své temné sluje, aby nám mlčky zaťukal na rameno a pak sám sobě na čelo. Načež prohlásí něco ve smyslu, že přeci nebude přidávat třídu na tlačítko podle toho, kde se zrovna vyskytuje. Že to je logika složitá a že tohle si má řešit CSS potažmo my. A v mnoha případech má pravdu.

## Kontextový přístupy

Ten se sám nabízí:

```css
.section .button {
  color: DarkGreen;
}
```

Jsme sice nešťastní, že si zvyšujeme specificitu, ale dvě třídy není ještě taková katastrofa. Z okna skákat nemusíme. 

Co ale musíme, je zařídit správné umístění takového kód. Odpověď na odvěkou otázku „Patří to do section.css nebo button.css“ je: `button.css`.

### Single source of truth

[SSOT](https://en.wikipedia.org/wiki/Single_source_of_truth) je starý princip v programování, který říká, že… TODO


…

Takhle to vypadá v celé kráse, pokud byste chtěli kód: https://codepen.io/machal/pen/JmdRaa
