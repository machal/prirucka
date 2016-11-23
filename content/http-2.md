# HTTP/2

- Nová verze protokolu, která dokáže velmi urychlit načítání vašich webů.
- Na frontendu webu není s HTTP/2 potřeba sjednocovat více souborů do jednoho.
- HTTP/2 je už téměř plně podporováno na straně prohlížečů i serverového software.
- Pokud máte vlastní server, není problém to hned nasadit. Problém je s českými sdílenými hostingy.


## Co je HTTP/2 a jak se liší od HTTP/1.1

- je binární, takže se rychleji parsuje a přenáší
- komprimuje i hlavičky a tedy třeba i přenášené cookies
- podporuje [multiplexing](https://http2.github.io/faq/#why-is-http2-multiplexed): v jednu chvílí může jít více požadavků i odpovědí, odpadá pak řazení dotazů do fronty
- podporuje [Server Push](https://http2.github.io/faq/#whats-the-benefit-of-server-push): při prvním dotazu (na HTML) můžete rovnou poslat assety: obrázky, CSS nebo JS
- vše musí běžet na HTTPS

<small markdown="1">
Více informací:  
[Michal Špaček o HTTP/2](https://www.michalspacek.cz/prednasky/http2-develcz)
[Root.cz - Jak funguje HTTP/2](https://www.root.cz/clanky/jak-funguje-novy-protokol-http-2/)
[Ebook HTTP/2 explained](https://daniel.haxx.se/http2/)
</small>


## Web může být na HTTP/2 až násobně rychlejší

Dema jsou působivá: [http2demo.io](http://www.http2demo.io/) a [httpvshttps.com](https://www.httpvshttps.com/), ale vždy záleží na způsobu servírování konkrétního webu do prohlížeče. Pokud je hodně optimalizovaný pro HTTP/1.1, může být po přechodu na dvojku i mírně pomalejší. Je tedy dobré zmínit, že přechod na dvojku není bez práce.



## Jak na web nasadit HTTP/2?

1. Nejdříve je potřeba přejít na bezpečný [protokol HTTPS](http://jecas.cz/https). Tady je ([kontrolní seznam](https://jakdelatseo.cz/checklist-pro-prechod-z-http-na-https/)).
2. Zapnutí na serveru.
  - Máte vlastní server? Je potřeba aktualizovat nebo případně jen nastavit Apache, IIS, ngix nebo to co vám tam běží. 
  - Jste na sdíleném hostingu? V Česku vám ve většině případů nezbývá než prudit webhosting a čekat. Čest výjimkám popsaným níže.
3. Aktualizujte frontend. 



## Jak se mění optimalizace frontendu?

Při optimalizaci pro HTTP/1.1 se minimalizují data co stránka posílá a počet dotazů na server. Na HTTP/2 už na počtu dotazů tak moc nezáleží.

Pro HTTP/2 je tedy ideální posílání menších CSS, JS souborů. Spousta dřívějších optimalizačních triků tedy padá:

- **CSS sprite,** (slučování obrázků do jednoho) nemusí být dobré řešení.  
  Pokud „sprajty“ děláte jen kvůli frontě requestů, není to na HTTP/2 potřeba. Jsou ale i jiné důvody pro jejich použití - třeba datová velikost nebo pořadí zobrazení. Sprity prostě, zdá se, mrtvé nejsou.
- **data-uri** (přímé vkládání obrázků do HTML nebo CSS) potřeba nejsou. 
  Ty se dělaly hlavně kvůli requestům, což nyní padá. Na druhou stranu zvětšovaly datový objem původního obrázku. 
- **Spojování CSS a JS** do jednoho už nemusí být potřeba.  
  Obvykle bude lepší posílat řadu malých souborů. Pokud soubory rozdělíme, nemusí být potřeba připravovat [kritické CSS](http://www.vzhurudolu.cz/blog/35-critical-css), protože menší soubory s CSS dorazí dříve. Jednotlivé CSS a JS také můžeme kešovat s různými pravidly. Nemusíme také do stránky vkládat CSS, které stránka neobsahuje. Totéž u Javascriptu. Samozřejmě v praxi je potřeba zkoušet všechny možnosti. Univerzální doporučení zatím nemám, jen ta papírová.
- **Domain sharding** (rozdělování domén pro znásobování fronty) netřeba.  
  Díky tomu se navíc zbavíme vytváření potřeby vytváření nových TCP spojení.

Nestačí prostě změnit protokoly
viz Vzhůru dolů: Porovnání HTTP1 vs. 2 u jednoduché stránky
H/2 verze je horší, protože jsme třeba JS spojili do velkých souborů. Lepší je více malých.

## Podpora: prohlížeče

- je podporované prakticky všemi novými prohlížeči http://caniuse.com/#feat=http2
- je zpětně kompatibilní, takže staré prohlížeče dostanou http1.1
Jen pozor – v těch několika málo prohlížečích, co HTTP/2 nepodporují, se váš web po optimalizaci frontendu zpomalí.

- http://caniuse.com/#feat=http2

## Podpora: server software

- https://daniel.haxx.se/blog/2015/03/31/the-state-and-rate-of-http2-adoption/
- apache, ngix, iis? tady dole https://istlsfastyet.com/

## Hostingy podporující HTTP/2

- Active24 jen kecá: https://www.zdrojak.cz/clanky/neomezeny-webhosting-na-cz-domene-vcetne-https-http2-a-php-7/
- Statické https://www.cdn77.com/
- https://twitter.com/machal/status/733533840740732929
- Sdílený:
    - Wedos a Tele3: http://cn130.com/2015/12/webhosting-s-http-2-0/
- Většina u hostingů to umožní u virutálních a managed serverů

## Nasazení HTTP2 s Cloudflare

- funguje jako proxy před vašim webem
- ve free plánu je https a http/2 (ale taky základní ddos ochrana a jejich CDN)
- potřeba na ně nastavit nameservery
- https://www.cloudflare.com/a/overview/teckacezet.cz

## Nástroje a odkazy

- Chrome extension
- Chrome protocol: https://ma.ttias.be/view-http-spdy-http2-protocol-google-chrome/
- Tools http2 CloudFlare
- https://addons.mozilla.org/cs/firefox/addon/spdy-indicator/
