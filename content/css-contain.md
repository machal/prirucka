# CSS vlastnost contain

Vlastností `contain` označujeme části stránky, které jsou izolované od zbytku, proto, aby prohlížeč nemusel překreslovat celou stránku a ušetřil tak výkon.

<!-- AdSnippet -->

Prohlížeče se nějakým způsobem snaží nepřepočítávát vzhled celé stránky při každé změně samy. Kromě toho existují kodérské triky jak to udělat v běžném CSS (viz [Layout Boundaries](http://blog.wilsonpage.co.uk/introducing-layout-boundaries/)). No a poslední možností je použít vlastnost `contain`.

→ *Celá problematika „CSS Containmentu“ je nejzajímavější ve [vlastnosti `content-visibility`](css-content-visibility.md)*.

## Dva příklady {#priklad}

Vlastnost `contain` může ušetřit výpočetní čas hlavně v případech, kdy náš DOM obsahuje tisíce uzlů. Následující příklady proto berte jako schématické a hodně zjednodušené.

### Přidání prvku do DOMu {#priklad-pridani}

Tuhle ukázku jsem převzal [z dokumentace od Googlu](https://developers.google.com/web/updates/2016/06/css-containment). Máme následující HTML:

```html
<section class="view">
  Home
</section>

<section class="view">
  About
</section>

<section class="view">
  Contact
</section>
```

A teď JavaScriptem přidáme nový prvek:

```html
<section class="view">
  Home
</section>

<section class="view">
  About
  <div class="newly-added-element">Check me out!</div>
</section>

<section class="view">
  Contact
</section>
```

Přidání nového prvku spouští rovnou tři kroky procesu překreslování – styly, layout a paint. Blbé ovšem je, že se ten proces spouští pro celý DOM a celou stránku.

<figure>
<img src="../dist/images/original/css-contain.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Ilustrační obrázek: Čas pro layout může být omezen díky omezení na konkrétní boxík menšímu počtu prvku k přepočítání. Zdroj [developers.google.com](https://developers.google.com/web/updates/2016/06/css-containment).*
</figcaption>
</figure>

Může pak pomoci přidání vlastnosti `contain`.

### Výpis článků mimo viditelnou část obrazovky {#priklad-vypis}

Vezměme, že na stránce máme stovky nebo tisíce samostatných položek typu články, produkty nebo třeba tweety. Většinu z nich uživatelé neuvidí v prvním vykresleném [viewportu](viewport.md) a zároveň jde o samostatné, izolované prvky, které se se zbytkem stránky nijak vzájemně neovlivňují.

Vezměme jejich výpis ve stránce:

```html
<h1>Výpis článků</h1>
<article class="article">
  <!-- … -->
</article>
<article class="article">
  <!-- … -->
</article>
```

Prvků `.article` jsou zde alespoň desítky či stovky nebo mají poměrně složitou DOM strukturu uvnitř.

Pomocí vlastnosti `contain` můžeme prohlížeč informovat, že tyto prvky je možné vyjmout z celkového překreslení stránky:

```css
.element {
  contain: content;
}
```

Prohlížeči tak dáváme instrukci, že prvky `.element`, které „nevidí“ ve viewportu může v klidu vynechat z počítání vzhledu celé stránky.

Ušetříme tím v některých situacích slušný renderovací čas.

## Typy „containmentu“ {#typy}

Zatím se mi nepovedlo najít vhodné české slovíčko pro teorii, o které se [ve specifikaci](https://www.w3.org/TR/css-contain-2/) mluví jako o „CSS containmentu“. Jde o soběstačné a nezávislé zapouzdření prvku, což je ale poněkud kostrbaté označení.

Známe čtyři typy zapouzdření, které jsou zároveň možné hodnoty vlastnosti `contain`:

- `size`  
Zapouzdření pro velikost. Prohlížeči říkám, že velikost prvku nijak neovlivní jeho potomci. Pokud nastavíme `contain:size`, je potřeba v CSS také tomuto prvku nastavit nějakou velikost, jinak prohlížeč počítá, že ji má nulovou, což nechceme. Zapouzdření velikosti samo o sobě zase tak moc výkonu při renderování neušetří.
- `layout`  
Zapouzdření pro rozvržení. Říkáme tím, že se layout potomků prvku a zbytku stránky nijak vzájemně neovlivňují. Díky tomu může při zápise `contain:layout` prohlížeč vynechat počítání layoutu vnitřních prvků elementu a zaměřit se jen na prvek, který tuto vlastnost má nastavenou.
- `paint`  
Zapouzdření pro vykreslení. Informujeme tímto, že žádný vnitřní prvek nevyčnívá ze svého rodiče. Uvedení `contain:paint` prohlížeči umožňuje potenciálně přeskočit vykreslení potomků, pokud je prvek mimo obrazovku.
- `style`  
Zapouzdření pro styly. Říkáme, že ovlivněný prvek vyjímáme z počítání hodnot napříč dokumentem, které provádějí vlastnosti jako `counter-increment`, `counter-set` nebo `quotes`. `contain:style` podle všeho [nepodporuje Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1463600), ale asi to nevadí, protože tato hodnota není zase tak moc užitečná.

Hodnoty vlastnosti `contain` jde kombinovat, takže můžete například uvést `contain: style paint`.

## Speciální hodnoty {#specialni-hodnoty}

Za účelem zjednodušení problematiky pro nás, autory webů, přichází specifikace se speciálními hodnotami vlastnosti `contain`:

- `strict`  
Všechny typy zapouzdření, kromě stylů. Totéž jako zápis `contain: size layout paint`.
- `content`  
Všechny typy zapouzdření, kromě stylů a velikosti. Totéž jako `contain: layout paint`.

Hodnota `strict` ušetří prohlížeče  více času, ale zase musíme znát a definovat velikost prvku.

<!-- AdSnippet -->

Pojďme se zde vrátit k druhé ukázce – renderování desítek či stovek článků mimo viditelnou část obrazovky:

- Pokud bychom použili `contain:content`, nemusíme definovat výšku jednotlivých bloků, ale na druhou stranu ji prohlížeč bude při prvním vykreslení považovat za nulovou a nevykreslí například správně velká rolovátka.
- Pokud bychom použili `contain:strict`, prohlížeči musíme výšku sdělit, ale zase nenastane přepočítání velikosti rolovátka.

## Podpora: v Safari máme smůlu, ale je nám to jedno {#podpora}

Vlastnost `contain` nepodporuje [Internet Explorer](msie.md), ani původní MS Edge, což vůbec nevadí.

Ale nevadí nám ani chybějící podpora v Safari. „Containment“ je typickým příkladem postupného vylepšení (progressive enhancement). V Safari prostě nedojde k očekávané úspoře v rychlosti renderování, ale stránka se tam bez problémů vykreslí.

<figure>
<img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1/caniuse-embed/static/mdn-css__properties__contain-1597816681163.png" alt="Podpora CSS vlastnosti contain v prohlížečích">
<figcaption markdown="1">
*Obrázek: Podpora CSS vlastnosti contain v prohlížečích. Zdroj: [CanIUse Embed](https://caniuse.bitsofco.de/).*
</figcaption>
</figure>

Viz také [caniuse.com/css-containment](https://caniuse.com/#feat=css-containment)

## Odkazy {#odkazy}

- [CSS Containment na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment)
- [Igalia: An introduction to CSS Containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/)
- [Smashing Magazine: Helping Browsers Optimize With The CSS Contain Property](https://www.smashingmagazine.com/2019/12/browsers-containment-css-contain-property/)

Používáte vlastnost `contain`? Napište nám, kde se vám osvědčila a kde naopak ne do komentářů.

<small markdown="1">Za připomínky autor děkuje [Michalovi Matuškovi](https://www.vzhurudolu.cz/lektori/michal-matuska).</small>

<!-- AdSnippet -->
