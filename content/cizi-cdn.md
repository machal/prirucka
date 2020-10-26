# Proč nestahovat JS a CSS z cizích CDN?

Na webech to ještě často vídám:

```html
<script 
  src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
</script>
```

Vývojáři a vývojářky to dělají z několika důvodů:

1. „Je to jednoduché.“  
Prostě se ten řádek zkopíruje z jiného projektu nebo [z webu Googlu](https://developers.google.com/speed/libraries). Žádné nastavování [sestovacícho procesu](rozcestnik-npm-node.md), prostě pohoda.
2. „Z Googlu se to stáhne rychleji než z naší domény.“  
Je optimalizovaná CDN, takže to bude rychlé jako blesk.
3. „Je velká šance, že to uživatel bude mít v cache z jiného webu.“  
Pokud už byl na webu, který tuto verzi používá, pravděpodobně soubor vůbec nebude muset stáhnout.

Chtěl bych tady proklamovat, že ke dnešku je pravdivný už jen bod 1. Ano, je to jednoduché, ale tím výčet výhod končí.

## HTTP/2 změnilo situaci poprvé {#http2}

[Druhá verze protokolu HTTP](http-2.md) zrychlila servírování stránek mimo jiné tím, že v momentě navázání spojení na vaši doménu dokáže přicházet velké množství souborů najednou.

<figure>
<img src="../dist/images/original/http-1-vs-2.jpg" alt="HTTP/2 versus HTTP/1.1">
<figcaption markdown="1">
*Obrázek: Zatímco na HTTP/1.1 tvoří prvky stránky „frontu na banány“, na HTTP/2 je může prohlížeč stahovat prakticky najednou.*
</figcaption>
</figure>

Úzkým hrdlem se pak stává ono navazování spojení, nutnost spojit se na novou doménu.

<figure>
<img src="../dist/images/original/navazovani-spojeni.jpg" alt="TODO">
<figcaption markdown="1">
*Obrázek: Navazování spojení na ajax.googleapis.com - tyrkysová je čas na DNS, oranžová navazování spojení, fialová SSL.*
<!-- TODO https://www.webpagetest.org/result/201026_DiKK_7a9233aad4f42b37101343ef2a1471e1/ -->
</figcaption>
</figure>

Už po nasazení HTTP/2 situaci přestalo být rozumné stahovat kritické zdroje, jako jsou CSS a vlastní JS, z CDN od Googlu, Microsoftu a dalších velkých firem.

## Co když to ale má uživatel v cache prohlížeče už z jiného weub? {#cache-prohlizece}

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

<!-- 
TODO
https://www.stefanjudis.com/notes/say-goodbye-to-resource-caching-across-sites-and-domains/
https://developers.google.com/web/updates/2020/10/http-cache-partitioning

DAlší
https://shkspr.mobi/blog/2020/10/please-stop-using-cdns-for-external-javascript-libraries/
-->
