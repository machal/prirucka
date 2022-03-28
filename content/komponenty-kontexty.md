# Komponenty vs. kontexty v CSS

Pokud používáte BEM nebo jinou komponentovou metodiku v CSS, byl by zázrak když byste nenarazili na problém stylování přes rodiče. Takřka filozofický problém.

<!-- AdSnippet -->

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

Její CSS kód nám říká, že barva „tlačítková zelená“ nepůjde se zlatou příliš dohromady:

```css
/* section.css: */

.section {
  background: gold;
  padding: 2rem;
}
```

Začneme se kroutit (a někteří hroutit), protože už zase přišla ta chvíle, kdy si pokazíme komponentový přístup, dosud čistý jako studánku.

CodePen: [cdpn.io/e/JmdRaa](https://codepen.io/machal/pen/JmdRaa?editors=1100)

## Komponentový přístup {#komponenty}

Pokud bychom se chtěli úzkostlivě držet předpisů [metodiky OOCSS](oocss.md) se zápisem [v BEM](bem.md), zřejmě bychom skončili u přidání modifikátoru do komponenty `button.css`:

```css
/* button.css: */

.button--darker {
  color: DarkGreen;
}
```

Tohle by bylo naprosto v pořádku, pokud by šlo o *znovupoužitelný* modifikátor komponenty Button.

Co ale v případě jednorázové modifikace pro konkrétní kontext – není to už pak  trochu přitažené za vlasy? Vytváříme modifikátor komponenty *jen* pro potřeby jednoho kontextu. Nemluvě o tom, že design našeho projektu *vůbec nemusí* být vymyšlený komponentově… Že v tom designér nebo designérka žádný systém nemají, i když bychom móóc chtěli.

Pak se stane něco špatného. Náš milý kolega programátor si přečte HTML, které mu navrhujeme…

```html
<div class="section">
  <button class="button button--darker">
    Button
  </button>
</div>
```

… vyleze kvůli tomu ze své temné sluje, aby nám mlčky zaťukal na rameno a pak sám sobě na čelo. Načež prohlásí něco ve smyslu, že přeci nebude přidávat třídu na tlačítko podle toho, kde se zrovna vyskytuje. Že to je složitá logika a že tohle si má řešit CSS, potažmo my. A v tomto případě má pravdu.

## Kontextový přístup {#kontexty}

Ten se sám nabízí:

```css
/* button.css: */

.section .button {
  color: DarkGreen;
}
```

Někdo by mohl říct, že to není *čisté* řešení. Odpovídám, že to určitě není čistě komponentové, jenže většina uživatelských rozhraní *čistě komponentově* navržená není.

Nevýhoda leží v tom, že kód jedné komponenty (Button) bude závislý na kódu druhé komponenty (Section). Když tu druhou začneme refaktorovat, budeme si muset vzpomenout na všechny výskyty v cizích komponentách.

Také můžeme považovat ze nehezké, když si zvyšujeme specificitu, ale dvě třídy nedělají katastrofu. Z okna skákat nemusíme.

Co bychom ale měli, je zařídit správné umístění takového kódu. Odpověď na odvěkou otázku „Patří to do `section.css` nebo `button.css`?“ zní: `button.css`.

### Kam s ním? Do button.css s ním

Klíčový selektor je vždy ten poslední vpravo. V našem případě `.button`. A právě do souboru s touto komponentou bychom měli zapsat tenhle kód.

<!-- AdSnippet -->

Docela nerad v souvislosti s CSS používám pojmy z programátorských klasik, ale tady se mi líbí označení `button.css` jako „Single source of truth“ pro tuto komponentu. Používá ho [Ben Frain v Enduring CSS](http://ecss.io/chapter4.html). Prostě: Všechno co souvisí s komponentou, dávejte do souboru, který nese její název.

Pojďme ještě ale ukázat třetí řešení.

## Kontextový přístup s můstkem  {#komponenty-s-mustkem}

Může se vám stát, že projekt je opravdu přísně komponentový a použití kontextů je výjimka. Obvykle se to stává, když potřebujete změnit layout nebo velikost vložené komponenty, ale zůstaňme u našeho příkladu s tlačítkem:

```css
/* section.css: */

.section__button {
  color: DarkGreen;
}
```

V HTML pak:

```html
<div class="section">
  <button class="section__button button">
    Button
  </button>
</div>
```

V elementu `.section__button` si tak vytvoříme vlastně modifikátor původního tlačítka, jen s tím rozdílem, že jej můžeme v uložit do `section.css` a specificita zůstává nízká.

Nevýhoda je, že se zde zcela vytrácí návaznost na původní komponentu `button.css`, takže zrovna v případě obarvení tlačítka bych použil raději jeden ze dvou výše uvedených přístupů.

## Shrnutí {#shrnuti}

Ukázal jsem tři možnosti, ale jednoduchý rozhodovací algoritmus vám poskytnout neumím. Vždy záleží na obsahu komponent, způsobu práce vás, programátorů i designérů.

Ale hlavní rozhodování je asi takovéto:

- Pracujete striktně komponentově? Pro znovupoužitelné varianty volte BEM modifikátor původní komponenty (`<button class="button button--darker">`). Pokud jde spíše o výjimku, volte můstek (`<button class="section__button button">`).
- Pro všechny ostatní případy je úplně v pohodě modifikovat komponentu přes kontext. Jen vždy dohlédněte, abyste měli kód na jednom místě.

<!-- AdSnippet -->
