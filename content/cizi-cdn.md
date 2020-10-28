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


<!-- 
TODO
https://www.stefanjudis.com/notes/say-goodbye-to-resource-caching-across-sites-and-domains/
https://developers.google.com/web/updates/2020/10/http-cache-partitioning

DAlší
https://shkspr.mobi/blog/2020/10/please-stop-using-cdns-for-external-javascript-libraries/
-->
