# Dělená cache v prohlížečích: konec sdílení zdrojů jako CSS, JS a webfonty

Chrome příchází od verze 86 s takzvanou dělenou mezipamětí ([partitioned cache](https://www.stefanjudis.com/notes/say-goodbye-to-resource-caching-across-sites-and-domains/)), která znemožňuje sdílení zdrojů z CDN mezi weby běžícími na různých doménách.

Aktuálně řada webů spoléhá na sdílení CSS, JS a webfontů ze společných adres, umístěných na velkých CDN. Vezměme pár typických příkladů:

```text
https://cdn.jquery.com/jquery.latest.js
https://www.google-analytics.com/analytics.js
https://fonts.gstatic.com/s/anton/v12/1Ptgg87LROyAm3Kz-C8CSKlv.woff2
https://cdn.example.cz/obrazek.png
```

Pokud uživatel měl některý z těchto zdrojů v mezipaměti prohlížeče, na webu, který tento zdroj používal také, už jej prohlížeč nemusel stahovat.

Nyní jsou ale soubory do prohlížečové cache ukládány jako kombinace URL zdroj a názvu domény:

```text
https://cdn.jquery.com/jquery.latest.js-alza.cz
https://cdn.example.cz/obrazek.png-alza.cz

https://cdn.jquery.com/jquery.latest.js-mall.cz
https://cdn.example.cz/obrazek.png-mall.cz
```

Takže se sdílením souborů napříč doménami máme utrum.

Pokud na to spoléháte ve svých strategiích pro optimalizaci rychlosti webu, může to mít nemalý vliv na rychlost webu u uživatelů.

## Proč nám to ty prohlížeče dělají?

Pokrok nezastavíš. Aktuálně je mezi uživateli velká poptávka po bezpečnosti a soukromí. Safari, které je v této oblasti napřed, dělenou cache bez většího ohlasu naimplementovalo [už v roce 2013](https://bugs.webkit.org/show_bug.cgi?id=110269).

Shrňme si důvody, proč o to izolaci dříve sdílených souborů uživatelé a tedy i tvůrci [prohlížečů](prohlizece.md) stojí:

- _Bylo možné zjisti návštěvu konkrétního webu._  
Padouch mohl z historie procházení uživatele zjistit, zda navštívil konkrétní web nebo sadu webů.
- _Sledování uživatele napříč weby._  
Mezipaměť bylo možné použít k ukládání identifikátorů, které pak sloužily ke sledování uživatele napříč weby.

Více je v textu [Explainer - Partition the HTTP Cache](https://github.com/shivanigithub/http-cache-partitioning).

## Prohlížeče: jak to přesně funguje a jaká je podpora?

Ve skutečnosti to není tak jednoduché jak ukazuji na začátku článku. Do klíče, který identifikuje zdroj v mezipaměti prohlížeče se toho ukládá více.

Vezměme příklad se sdíleným obrázkem:

```text
https://cdn.example.cz/obrazek.png
```

Pak si představme, že se obrázek vkládá do stránky `https://www.iframe.cz/` a ta se jako `<iframe>` vkládá do `https://www.e-shop.cz/kategorie`.

Autoři Chrome mluví o novém klíči „Network Isolation Key“, který obsahuje tuto sadu:

- Doménu druhého řádu pro stránku (přesněji [eTLD+1](https://web.dev/same-site-same-origin/)) (`e-shop.cz`).
- Totéž pro aktuální iframe (`iframe.cz`).
- Adresu zdroje (`https://cdn.example.cz/obrazek.png`).

Podle textu [Gaining security and privacy by partitioning the cache](https://developers.google.com/web/updates/2020/10/http-cache-partitioning) od Googlu je podpora následující:

<div class="rwd-scrollable"  markdown="1">

| Prohlížeč | Podpora | Klíč domény | Klíč iframe |
|-----------|:-------:|:-----------:|:------------|
| Chrome    | ano     |     +       |     +       |
| Safari    | ano     |     +       |             |
| Firefox   | [v plánu](https://bugzilla.mozilla.org/show_bug.cgi?id=1536058) |             |             |

</div>

<!-- TODO 

- co to pro mě znamená?
	- those that serve large volumes of highly cacheable resources across many sites (such as fonts and popular scripts) may see an increase in their traffic.
		- (There's a proposal to enable shared libraries in a privacy-preserving way called Web Shared Libraries (presentation video), but it's still under consideration.)
	- sdílení knihoven napříč weby
- proč není sdílení souborů hlavní důvod pro CDN?



## Co když to ale má uživatel v cache prohlížeče už z jiného webu? {#cache-prohlizece}

Dříve jste se mohli poměrně spolehnout, že uživatelé mají v cache prohlížeče soubory populárních knihoven už z jiných webů.

Osobně jsem z téhle představy začal střízlivět poté, co jsem si přečetl [statistiky Stevea Souderse](https://www.stevesouders.com/blog/2013/03/18/http-archive-jquery/) z roku 2013. Ty ukazují, že roztříštěnost verzí jQuery na webech je obrovská. A představa, že vývojáři používají poslední verze je mylná.

<figure class="f-6" markdown="1">
| Verze jQuery   | Podíl na webech  |
|----------------|-----------------:|
| 1.4.2 (http)   | 1,7 % |
| 1.7.2 (http)   | 1,6 % |
| 1.7.1 (http)   | 1,6 % |
| 1.3.2 (http)   | 1,2 % |
| 1.7.2 (https)  | 1,1 % |
<figcaption markdown="1">
*Tabulka: Podíl jQuery na webech v roce 2013. V té době ještě navíc záleželo na tom, zda je používaná verze běžící na HTTP nebo [HTTPS](https.md).*
</figcaption>
</figure>

To bylo v roce 2013, jež před druhou a třetí verzí jQuery. Nyní máme na světě zhruba [80 verzí jQuery](https://code.jquery.com/jquery/), přičemž v produkčním používání jich na světě, ale i v ČR a SR bude – no osmdesát, že ano. Soudě dle mé osobní zkušenosti, vývojáři zrovna tuhle knihovnu bohužel aktualizují překvapivě hodně málo.

Šance, že uživatelé budou mít zrovna vaši verzi vaší oblíbené knihovny v keši prohlížeče, prostě byla i před rokem 2020 nevelká. A to ještě nepřišla poslední rána, hned o ni budu mluvit.

## Dělená mezipaměť od Chrome 86

Nově Chrome zavádí takzvané [cache partitioning](https://developers.google.com/web/updates/2020/10/http-cache-partitioning). Zatímco tyto dva soubory byly napříč doménami ukládány pod jednotným klíčem:

```text
https://cdn.jquery.com/jquery.latest.js
https://cdn.example.cz/obrazek.png
```

Nyní jsou ukládány jako kombinace názvu a zdroje:

```text
https://cdn.jquery.com/jquery.latest.js-alza.cz
https://cdn.example.cz/obrazek.png-alza.cz

https://cdn.jquery.com/jquery.latest.js-mall.cz
https://cdn.example.cz/obrazek.png-mall.cz
```

Není tedy možné sdílet zdroje napříč weby.

Důvodem pro toto je bezpečnost a soukromí uživatele. V případě zdrojů sdílených napříč doménami bylo možné uživatele sledovat nebo provádět útok [Cross-site search attack](https://portswigger.net/daily-swig/new-xs-leak-techniques-reveal-fresh-ways-to-expose-user-information). Safari, které v oblasti soukromí vede peleton, toto [naimplementovalo už v roce 2013](https://bugs.webkit.org/show_bug.cgi?id=110269).

Takže pokud stahujete soubory např. ono jQuery od Google, moduly z unpkg.com, fonty od Google fonts, nikdo vám to rozhodně nezakazuje, ale miminálně z důvodů sdílené cache už to smysl nedává.

-->
