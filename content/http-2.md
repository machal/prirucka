# Na HTTP/2 je všechno připraveno. Až na české hostingy

- HTTP/2 je nová verze protokolu, která dokáže velmi urychlit načítání vašich webů.
- Na frontendu webu není s HTTP/2 potřeba sjednocovat více souborů do jednoho.
- HTTP/2 je už téměř plně podporováno na straně prohlížečů i serverového software.
- Pokud máte vlastní server, není problém to hned nasadit. Problém je s českými sdílenými hostingy.


## Co je HTTP/2 a jak se liší od HTTP/1.1

- Je binární, takže se rychleji parsuje a přenáší.
- Komprimuje i hlavičky a tedy třeba i přenášené cookies.
- Podporuje [multiplexing](https://http2.github.io/faq/#why-is-http2-multiplexed): v jednu chvílí může jít více požadavků i odpovědí, odpadá pak řazení dotazů do fronty.
- Podporuje [Server Push](https://http2.github.io/faq/#whats-the-benefit-of-server-push): při prvním dotazu (na HTML) můžete rovnou poslat assety: obrázky, CSS nebo JS.
- VSše musí běžet na HTTPS.

<small markdown="1">
Více informací: [Michal Špaček o HTTP/2](https://www.michalspacek.cz/prednasky/http2-develcz), [Root.cz - Jak funguje HTTP/2](https://www.root.cz/clanky/jak-funguje-novy-protokol-http-2/), [Ebook HTTP/2 explained](https://daniel.haxx.se/http2/).  
Nástroje: [Firefox plugin](https://addons.mozilla.org/cs/firefox/addon/spdy-indicator/) pro detekci, zda web běží na HTTP/2. [Totéž pro Chrome](https://chrome.google.com/webstore/detail/http2-and-spdy-indicator/mpbpobfflnpcgagjijhmgnchggcjblin). [Jak poznat protokol](https://ma.ttias.be/view-http-spdy-http2-protocol-google-chrome/) v Chrome DevTools.
</small>


## Web může být na HTTP/2 až násobně rychlejší

Dema jsou působivá: [http2demo.io](http://www.http2demo.io/) a [httpvshttps.com](https://www.httpvshttps.com/), ale vždy záleží na způsobu servírování konkrétního webu do prohlížeče. Pokud je hodně optimalizovaný pro HTTP/1.1, může být po přechodu na dvojku i mírně pomalejší. Je tedy dobré zmínit, že přechod na dvojku není bez práce.



## Jak na web nasadit HTTP/2?

1. Nejdříve je potřeba přejít na bezpečný [protokol HTTPS](http://jecas.cz/https). Tady je ([kontrolní seznam](https://jakdelatseo.cz/checklist-pro-prechod-z-http-na-https/)).
2. Zapnutí na serveru:
  - Máte vlastní? Je potřeba aktualizovat nebo případně 
    jen nastavit Apache, IIS, ngix nebo to co vám tam běží. 
  - Jste na sdíleném hostingu? V Česku vám ve většině případů nezbývá 
    než prudit webhosting a čekat. Čest výjimkám popsaným níže.
3. Aktualizujte frontend. To si na tomto blogu zaslouží mírně rozebrat, že? Čtěte dále.



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

Na tomhle místě si asi řeknete, že ono fakt nestačí změnit protokoly. Moje zkušenost je taková, že pokud jste hodně optimalizovali pro HTTP/1.1, budete do frontendu muset pořádně sáhnout. Pokud jste dosud optimalizaci neřešili, přepnutí na HTTP/2 vašemu webu nejspíš děsně moc pomůže.

## Podpora: všude to běží s výjimkou českých sdílených hostingů

### Prohlížeče

HTTP/2 je podporované prakticky všemi moderními prohlížeči. Podívejte se [na Can I use](http://caniuse.com/#feat=http2). Protokol nepodporují jen Explorery 10 a starší a prohlížeče na čtyřkových Androidech. U webu s běžnou českou návštěvností odhadem do pěti procent. 

Nový protokol je ale zpětně kompatibilní, takže starý prohlížečům web přijde na starém dobrém HTTP/1.1. Raději tedy zmíním, že váš frontend optimalizovaný pro HTTP/2 může na starých křápech být o dost pomalejší.

### Web servery

Pro Apache je tady [mod_http2](https://httpd.apache.org/docs/trunk/mod/mod_http2.html) (nyní ale označený jako *experimental*, NGINX podporuje dvojku [od verze 1.9.5](https://www.nginx.com/blog/nginx-1-9-5/) a Microsoft IIS [od verze 10](https://blog.sslmarket.cz/ssl/nova-verze-iis-10-uz-umi-http-2-jak-na-to/).

Serverový software je takřka připravený. Teď ještě, aby to někdo na těch serverech zapnul.

Pokud máte vlastní server, nebo pronajatý server, nebude problém *zapnutí* HTTP/2 domluvit. Horší je to na sdíleném hostingu.

### České sdílené hostingy

Na [cn130.com](http://cn130.com/2015/12/webhosting-s-http-2-0/) je pěkný seznam českých hostingů, které HTTP/2 podporují. Tedy seznam… Jsou zatím tři. Možná.

- Wedos podle seznamu podporuje HTTP/2 u všech NoLimit tarifů.
- Tele3 to prý nastavuje na vyžádání.
- Active24 se [chlubí, že umí](https://www.zdrojak.cz/clanky/neomezeny-webhosting-na-cz-domene-vcetne-https-http2-a-php-7/), ale na jejich webu o podpoře nové verze protokolu žádná zmínka není. Jejich vlastní web na HTTP/2 ovšem běží, což je nadějné.

Docela pitomé je, že webhosteři detailní informace velmi dobře schovali před mým usilovným googlováním. Takže vycházím jen ze zmíněného seznamu. Zjišťuji ale další informace a situaci budu monitorovat. Pokud něco víte, napište prosím do komentářů.

Na statické weby je možné použít CDN jako je [cdn77.com](https://www.cdn77.com/), které novou verzi protokolu podporují.

### Nasazení HTTP/2 s Cloudflare

Zajímavou možnost nabízí [Cloudflare](https://www.cloudflare.com/) - CDN, které může fungovat jako HTTPS a HTTP/2 proxy před vaším webem. Ve free plánu pro jeden web je kromě toho také základní DDOS a výhody CDN. Stačí na ně nastavit nameservery své domény. Zkoušel jsem zatím experimentálně a je to hezké.



