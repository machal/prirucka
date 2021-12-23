# Preconnect a dns-prefetch

Docela často se stává, že na stránce potřebujeme stahovat prvky z jiných domén než je ta hlavní, na které web běží.

Prohlížeč ovšem musí pro každou novou doménu zjednodušeně řečeno navázat spojení. A je blbé, když to dělá mnohokrát během procesu načítání stránky. Prostě to zdržuje.

Podívejte se na video „Zrychlení webu díky před-spojení“.

YouTube: [youtu.be/_jdXSjkdDFQ](https://www.youtube.com/watch?v=_jdXSjkdDFQ)

Možným řešením je použití meta značek `preconnect` a `dns-prefetch`, které prohlížeč informují o našich úmyslech navazovat spojení na cizí domény:

```html
<link rel="preconnect" href="https://www.example.com">
<link rel="dns-prefetch" href="https://www.example.com">
```

Stane se pak to, že prohlížeč tato spojení naváže hned zkraje zpracování stránky. No a díky tomu pak může být načtení stránky mírně rychlejší.

<figure>
<img src="../dist/images/original/preconnect.png" alt="Dopady použití meta značky preconnect">
<figcaption markdown="1">
*Obrázek: Tohle vypadá fajn, ale je to zjednodušené. V rámci „navázání spojení“ prohlížeč dělá tři úkony: DNS lookup, TCP handshake, Vyhodnocení TLS (kvůli [HTTPS](https.md)). CSS berte jen jako příklad. Preconnect je možné aplikovat na cokoliv.*
</figcaption>
</figure>

Dobře nastavený `preconnect`/`dns-prefetch` vám zlepší metriky jako je [Doba do interaktivity (TTI)](metrika-tti.md) nebo [Load](load.md). Hodí se to dělat především u webů běžících na [HTTP/2](http-2.md).

Nečekejte od téhle techniky kdovíjaké zázraky, ale určitě je dobré ji znát. Šetřete s ní a použijte na správných místech. Prostě to není tak jednoduché, proto prosím čtěte dále.

<!-- AdSnippet -->

Preload se občas zaměňuje s jinou užitečnou meta značkou `<link rel="preload">`. O té ale píšeme na jiném místě.

→ *Související: [Preload: přednačtení prvku stránky](preload.md)*

Zpět k `preconnect`. Pojďme to probrat nejprve z technického pohledu.

## Preconnect a dns-prefetch technicky {#technicky}

Určitě vás budou zajímat rozdíly mezi těmito dvěma zápisy:

* `preconnect`  
Obstará všechny tři úkony potřebné k navazování spojení (DNS lookup, TCP handshake, vyhodnocení TLS), ale nemá podporu v Internet Exploreru 11. [caniuse.com/preconnect](https://caniuse.com/#feat=link-rel-preconnect)
* `dns-prefetch`  
Uvládne z těchto tří kroků jen DNS lookup, ale má podporu ve všech prohlížečích. [caniuse.com/dns-prefetch](https://caniuse.com/#feat=link-rel-dns-prefetch)

Když tedy uvedeme oba zápisy, v moderních prohlížečích se provede `preconnect` a v IE11 `dns-prefetch`, který poslouží jako částečný fallback.

### Uvedení v HTML hlavičce {#technicky-html}

Jde o základní způsob použití. Prostě do hlavičky někam před link na CSS uvedeme:

```html
<link rel="preconnect" href="https://www.example.com" crossorigin>
<link rel="dns-prefetch" href="https://www.example.com">
```

Atribut [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) je totéž jako zápis `crossorigin="anonymous"` – povoluje sdílení prvků napříč doménami (Cross-Origin Resource Sharing aneb [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) – v případě hodnoty `anonymous` pak bez výměny cookies a podobných informací.

### HTTP hlavička  {#technicky-http}

Oba „hinty“ je pak možné vložit na backendu přímo do HTTP hlaviček a ušetřit tím nějaký čas potřebný pro stažení a parsování HTML:

```text
Link: <https://www.example.com/>; rel=preconnect
Link: <https://www.example.com/>; rel=dns-prefetch
```

Například CSS soubory přicházející z Google Fonts zrychlují následujícím způsobem spojení na doménu, ze které přicházejí soubory s fonty:

```text
link: <https://fonts.gstatic.com>; rel=preconnect; crossorigin
```

## Kdy preconnect použít a osvědčené postupy  {#best-practices}

Velmi často se vývojářky a vývojáři dostanou k nápadu na použití preconnect radami z nástroje [Lighthouse](lighthouse.md). Ten obvykle hlásí něco jako „Preconnect to required origins“ nebo „K potřebným zdrojům se připojujte předem“.

<!-- AdSnippet -->

Lighthouse je ale stroj, takže vyhodnocení, na které domény je vhodné `preconnect` skutečně nasadit, už je na nás. Pokusím se pomoci.

### Příklady scénářů použití {#best-practices-kdy}

* _Vlastní doména třetího řádu_  
Tady s preconnectem vůbec neváhejte. Pokud vám například HTML dokument běží na `www.example.com` a CSS na `cdn.example.com`, s preconnectem můžete ušetřit důležitý čas v kritické vykreslovací cestě.
* _Komponenty třetí strany_  
Něco se bude stahovat, nevíme přesně co, ale víme, z jakých domén. [Third parties](third-party.md) jsou většinou dobrý adeptem na preconnect. Ovšem pozor, vyberte si jen ty nejdůležitější pro vykreslení první obrazovky. Typický příklad je například reklama, která se zobrazuje nad zlomem, chatovací služby, Google Fonts nebo třeba Hotjar a podobné nahrávací služby.
* _Streamování médií_  
Je velmi pravděpodobné, že uživatel si na stránce pustí video nebo audio? Jasně, pojďme přednavázat spojení na doménu, z které stream pojede.

### Osvědčené postupy  {#best-practices-postupy}

Je nutné si uvědomit dvě věci:

* Každý `preconnect` „sežere“ prohlížeči výkon, který v tu chvíli potřebuje pro důležitější úkoly, například vykreslování stránky.
* Po 10 vteřinách od přednavázání spojení, kdy se z domény nezačalo nic stahovat, prohlížeč spojení zavře.

Z toho vyplývá – ano, používejte preconnect, ale opatrně s ním. Doporučené maximum přednavázaných spojení je za mě 5 - 7 domén. Preconnect je skvělý na zdroje nutné pro urychlení prvních vykreslení stránky a tak by se také měl používat.

<!-- AdSnippet -->
