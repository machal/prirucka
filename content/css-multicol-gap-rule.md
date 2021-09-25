# Vlastnosti column-gap a column-rule: Mezery a oddělovače ve vícesloupcovém rozložení

Ve vícesloupcovém rozvržení (CSS Multi-column layout) je většinou potřeba změnit výchozí mezeru mezi sloupci nebo přidat oddělovač. K tomu slouží tyto vlastnosti.

<div class="connected" markdown="1">

![CSS vlastnosti column-gap a column-rule](../dist/images/small/vdlayout/css-multicol-gap-rule-scheme.png)

<div class="web-only" markdown="1">

Vlastnosti `column-gap` a `column-rule` patří do specifikace vícesloupcového layoutu – [CSS Multi-column Layout](css-multicolumn.md).

</div>

<div class="ebook-only" markdown="1">

→ [vrdl.cz/p/css-multicol-gap](https://www.vzhurudolu.cz/prirucka/css-multicol-gap)

</div>

</div>


Je jich hned několik:

- `column-gap` – nastavení šířky mezery mezi sloupci.
- `column-rule` – definice grafického oddělovače sloupců. Jde o zkratky pro vlastnosti `column-rule-color`, `column-rule-style`, `column-rule-width`.

Je dobré vědět, že mezery místo v layoutu zabírají, ale oddělovače nikoliv. Oddělovač jakékoliv šířky neubírá místo mezerám nebo sloupcům v rozvržení. Nedává vám to smysl? Podívejte se na příklad na konci tohoto textu.

<figure>
<img src="../dist/images/original/vdlayout/css-multicol-gap-rule.png" width="1600" height="900" alt="CSS vlastnosti column-gap a column-rule">
<figcaption markdown="1">
*Na obrázku jsme definovali mezeru mezi sloupečky o šířce `3em` a k ní ještě přidali oddělující čáru v podobě světle šedivých teček.*
<!-- TODO na obrázku jsou spíše čárky -->
</figcaption>
</figure>

A co teď? No, co by…? Vzhůru na jednotlivé vlastnosti.

## `column-gap`: mezera mezi sloupci {#column-gap}

Šířka výchozí mezery je `1em`. Pokud to chcete změnit, je pro definici šířky mezery je možné použít vlastnost `column-gap`.

<!-- AdSnippet -->

Mezeru můžeme definovat také pomocí obecné [vlastnosti `gap`](css-gap.md), kterou asi znáte z flexboxu nebo CSS gridu. Ta zde ale nebude fungovat v Exploreru.

Možné hodnoty jsou následující:

- `auto` nebo `normal` – výchozí mezera (`1em`).
- `<délka>` – jakákoliv délka, včetně nulové.

→ *Související: [Jednotky pro tvorbu webu](jednotky.md)*

Záporné hodnoty délky pochopitelně nejsou možné.

## `column-rule-color`: barva oddělovače {#column-rule-color}

Barvu oddělovače je možné definovat přesně tak, jak jste na to zvyklí u všech možných vlastností. Nebudeme tedy příklady ztrácet čas.

Je ale dobré zmínit, že jako výchozí barva se zde použije `currentcolor`, tedy barva textu deklarovaná nebo poděděná pro kontejner vícesloupcového rozvržení.

→ *Související: [Dědičnost v CSS](css-dedicnost.md)*

## `column-rule-style`: grafické ztvárnění oddělovače {#column-rule-style}

Grafický styl oddělovače můžete určit stejnými klíčovými slovy jako určujete barvy rámečků: `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` nebo `outset`.

Grafiku oddělovače je také samozřejmě možné vypnout pomocí hodnoty `none`, čímž se pochopitelně vypne i zobrazení oddělovače.

## `column-rule-width`: šířka oddělovače {#column-rule-width}

I zde se samozřejmě akceptují jakékoliv jednotky šířky, které si v CSS umíte představit, včetně slovních označení `thin`, `medium` a `thick`, která ale pravděpodobně každý prohlížeč vykreslí jinak. V Chrome to myslím odpovídá šířce 1, 2 a 5 pixelů.

Výchozí hodnota je `medium`.

Oddělovač je samozřejmě možné vypnout pomocí hodnoty `none`.

## `column-rule`: zkratka pro deklaraci oddělovače na jednom místě {#column-rule}

Všechny tři vlastnosti můžete použít v jedné zkratce:

```css
column-rule: <column-rule-width> <column-rule-style> <column-rule-color>
```

Samozřejmě je možné vlastnosti `column-rule-width` nebo `column-rule-color` vynechat, vyplývá to z jejich výchozích hodnot. Všechny tyto zápisy by fungovaly:

```css
column-rule: 2px solid blue;
column-rule: 2px solid;
column-rule: solid blue;
```

## Ukázka tří možností použití {#ukazka}

Připravil jsem pro vás CodePen, ve kterém si můžete přepínat mezi třemi různými deklaracemi. Slibuji si od toho, že vám to pomůže pochopit výše uvedené. I když v tomto případě se nejedná o nic složitého.

CodePen: [cdpn.io/e/eYdGEKR](https://codepen.io/machal/pen/eYdGEKR?editors=1100)

1. První deklarace (`gap: auto; column-rule: none;`) nastavuje mezeru i oddělovač na výchozí hodnoty, tzn. mezera má šířku `1em` a oddělovač se nevykresluje. Všimněte si použití vlastnosti `gap` namísto `column-gap`. V moderních prohlížečích je to prostě synonymum.
2. Druhá deklarace (`gap: 3em; column-rule: dotted lightgrey;`) – nastaví trojnásobnou mezeru a tečkovaný oddělovač. Jeho šířku jsem byl líný definovat, takže se použije `medium`.
3. Třetí deklarace (`gap: 3em; column-rule: 4em solid lightgrey;`) je záludná – nastaví oddělovač o větší šířce než mezeru. Jasně, asi to hned nepoužijete, to chápu. Chtěl jsem zde totiž ukázat to, co píšu výše – oddělovač si z celkové šířky rodičovského kontejneru nevezmě ani pixel. Vykreslí se doprostřed mezery a když ta mu přestane stačit, neváhá překrývat ani obsah ve sloupcích. Ano, takhle bezzkurpulózní ten oddělovač je…

A jak tyhle legrace můžete využívat v dnešních prohlížečích?

## Podpora v prohlížečích {#podpora}

Žádné strachy, vlastnosti `column-gap`, `column-rule` i všechny ostatní, zde zmíněné, moderní prohlížeče zvládají.

Zvládá je také Internet Explorer. Ten ovšem neumí nahradit `column-gap` pomocí `gap`. Ale to je jen malá bolístka jinak výborné podpory.

Více je na CanIUse. [caniuse.com/column](https://caniuse.com/?search=column)

<!-- AdSnippet -->
