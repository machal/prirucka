# CSS vlastnost contain

Vlastností `contain` označujeme části stránky, které jsou izolované od zbytku. Pokud je dobře použitá, umožníme tím zásadní optimalizace rychlosti vykreslování stránky v prohlížečích.

Vezměme, že na stránce máme stovky nebo tisíce samostatných položek typu články, produkty nebo třeba tweety. Většinu z nich uživatelé neuvidí v prvním vykresleném [viewportu](viewport.md) a zároveň jde o samostatné, izolované prvky, které se se zbytkem stránky nijak vzájemně neovlivňují.

## Jednoduchý příklad {#priklad}

Vezměme, že máme výpis článků ve stránce:

```html
<h1>Výpis článků</h1>
<article class="article">
  <!-- Zde bude složitější DOM struktura -->
</article>
<article class="article">
  <!-- Zde bude složitější DOM struktura -->
</article>
```

Prvků `.article` jsou zde alespoň desítky či stovky nebo mají poměrně složitou DOM strukturu uvnitř.

Pomocí vlastnosti `contain` můžeme prohlížeč informovat, že tyto prvky je možné vyjmout z celkového překreslení stránky:

```css
.element {
  contain: content;
}
```

Tímto prohlížeči sdělujeme, že prvky `.element`, které „nevidí“ ve viewportu může v klidu vynechat ze situací, kdy by běžně znovu počítal vzhled celé stránky.

Ušetříme tím v některých situacích slušný renderovací čas.

## Typy „containmentu“ {#typy}

Zatím se mi nepovedlo najít vhodné české slovíčko pro teorii, o které se [ve specifikaci](https://www.w3.org/TR/css-contain-2/) mluví jako o „CSS containmentu“. Jde o soběstačné a nezávislé zapouzdření prvku.

Známe čtyři typy zapouzdření, které jsou zároveň možné hodnoty vlastnosti `contain`:

- `size`  
Zapouzdření pro velikost. Prohlížeči říkám, že velikost prvku nijak neovlivní jeho potomkové. Pokud nastavíme `contain:size`, je potřeba v CSS také tomuto prvku nastavit nějakou velikost, jinak prohlížeč počítá, že ji má nulovou, což nechceme. Zapouzdření velikosti samo o sobě zase tak moc výkonu při renderování neušetří.
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

Hodnota `content` je vcelku bezpečně nastavitelná skoro na jakoukoliv větší skupinu elementů, o kterých víme, že se budou vykreslovat mimo obrazovku a že si nejsme jistí jejich skutečnou velikostí.

Hodnota `strict` ušetří prohlížeče ještě více času, ale zase musíme a definovat znát velikost prvku.

## Podpora: v Safari máme smůlu, ale je nám to jedno {#podpora}

Vlastnost `contain` nepodporuje Internet Explorer, ani původní MS Edge, což vůbec nevadí.

Ale nevadí nám ani chybějící podpora v Safari. „Containment“ je typickým příkladem postupného vylepšení (progressive enhancement). V Safari prostě nedojde k očekávané úspoře v rychlosti renderování, ale stránka se tam bez problémů vykreslí.

<figure>
<img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1/caniuse-embed/static/mdn-css__properties__contain-1597816681163.png" alt="Podpora CSS vlastnosti contain v prohlížečích">
<figcaption markdown="1">
*Obrázek: Podpora CSS vlastnosti contain v prohlížečích. Zdroj: [CanIUse Embed](https://caniuse.bitsofco.de/).*
</figcaption>
</figure>

Viz také [caniuse.com/css-containment](https://caniuse.com/#feat=css-containment)
