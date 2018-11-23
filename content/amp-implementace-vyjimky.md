# Implementace AMP: Výjimky v kódu {#vyjimky}

Tohle je tak trochu hybridní řešení: Vezmete stávající web a pokud zjistíte, že by AMP validací neprošly jen jeho konkrétní části, upravíte je pomocí výjimek v kódu na serverové straně.

Jak už víte, je řada věcí, ve kterých musí kód AMP stránky vypada jinak než v případě ne-AMP verze. Například:

- Do hlavičky musí být vložená „AMP boilerplate“: `<style amp-boilerplate>`.
- V hlavičce musí být přímo ve `<style amp-custom>` vypsány všechny vaše CSS k dané stránce.
- Značky `<img>` musí být nahrazeny pomocí `<amp-img>`.
- Vkládaný kód z YouTube se řeší pomocí značky `<amp-youtube>`.

Seznam výjimek je samozřejmě delší. Ale jsou to pořád výjimky. To znamená, že drtivá část kódu je totožná pro obě verze.

Toho můžete využít a připravit nové adresy AMP stránek, ve kterých budete ošetřovat právě jen ty výjimky. 

V případě tohodle způsobu implementace vám tady můžu ukázat kousky backendového kódu, protože jsem byl přímo u jeho nasazování. Hádejte, na kterém webu jsem nasazoval AMP poprvé?

## Případ Vzhůru dolů

Ano, na mém vlastním web aktuálně používám tenhle způsob implementace. Princip je jednoduchý. Vezměme, že články mají adresu tohoto typu:

```
https://www.vzhurudolu.cz/prirucka/css3-flexbox
```

Pak AMP verze budou mít vždy tuto adresu:

```
https://www.vzhurudolu.cz/amp/prirucka/css3-flexbox
```

AMP-HTML stránka i kanonická HTML stránka pak na sebe odkazují formou meta značek.

V části kódu běžící na serveru pak máme proměnnou `$ampActive`, která se poté používá pro řešení výjimek. Zde je vidět vkládání stylů v syntaxi používající šablonovací jazyk Latte:

```latte
{if $ampActive}
  {include include/amp/amp-boilerplate.latte}
  {include include/amp/styles.latte}
{else}
  {include include/styles.latte}
{/if}
```

Pro vysvětlení: V části pro AMP-HTML verzi vkládáme „AMP boilerplate“ (soubor amp/amp-boilerplate.latte) a zvláštní styly pro AMP verzi (amp/styles.latte). V HTML verzi pak už jen běžné odkazy na CSS (styles.latte).

<!-- TODO: Výhody/nevýhody, obrázky, problémy co jsem řešil, vyhlídka do budoucna -->
