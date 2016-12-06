# Na rychlé HTTP/2 je skoro vše připraveno

HTTP/2 je nová verze protokolu, která dokáže urychlit načítání vašich webů. Je už téměř plně podporovaná na straně prohlížečů i serverového software.

Pokud máte vlastní server, není problém dvojku hned nasadit a já vám radím, abyste to taky udělali. České sdílené hostingy zatím většinou čekají. Na co? Vše se dozvíte. 

<!-- AdSnippet -->

Frontendu webu se přechod na HTTP/2 dotkne kromě jiného tak, že přestává být potřeba  slučovat více vývojářských souborů do jednoho distribučního.


## Co je HTTP/2 a jak se liší od HTTP/1.1?

- Weby na něm fičí jako když bičem mrská. 
- Je binární, takže se rychleji parsuje a přenáší.
- Komprimuje i hlavičky a tedy třeba i přenášené cookies.
- Podporuje [multiplexing](https://http2.github.io/faq/#why-is-http2-multiplexed): v jednu chvíli jde po síti více požadavků i odpovědí, odpadá pak řazení dotazů do fronty.
- Podporuje [Server Push](https://http2.github.io/faq/#whats-the-benefit-of-server-push): při prvním dotazu (na HTML) můžete rovnou poslat assety: obrázky, CSS nebo JS.
- Umí [prioritizaci](https://nghttp2.org/blog/2014/11/16/visualization-of-http-slash-2-priority/), takže prohlížeče mohou například upřednostnit stahování CSS před obrázky.
- V praxi ale nejdřív musíte běžet na HTTPS.

![HTTP/2 versus HTTP/1.1](dist/images/original/http-1-vs-2.jpg)

<small markdown="1">
Více informací: [Michal Špaček o HTTP/2](https://www.michalspacek.cz/prednasky/http2-develcz), [Jak funguje HTTP/2](https://www.root.cz/clanky/jak-funguje-novy-protokol-http-2/), [Ebook o HTTP/2](https://daniel.haxx.se/http2/).  
Nástroje: [Firefox plugin](https://addons.mozilla.org/cs/firefox/addon/spdy-indicator/) pro detekci, zda web běží na HTTP/2. [Totéž pro Chrome](https://chrome.google.com/webstore/detail/http2-and-spdy-indicator/mpbpobfflnpcgagjijhmgnchggcjblin). [Jak poznat protokol](https://ma.ttias.be/view-http-spdy-http2-protocol-google-chrome/) v Chrome DevTools.
</small>


## Web může být na HTTP/2 až násobně rychlejší

Dema jsou působivá: [http2demo.io](http://www.http2demo.io/) a [httpvshttps.com](https://www.httpvshttps.com/), ale vždy záleží na způsobu servírování konkrétního webu do prohlížeče. Pokud je hodně optimalizovaný pro HTTP/1.1, může být po přechodu na dvojku i mírně pomalejší. Je tedy dobré zmínit, že přechod na dvojku není bez práce.



## Jak na web nasadit HTTP/2?

1. Nejdříve je potřeba přejít na bezpečný [protokol HTTPS](http://jecas.cz/https). Tady je [kontrolní seznam](https://jakdelatseo.cz/checklist-pro-prechod-z-http-na-https/).
2. Zapnutí na serveru:
  - Máte vlastní? Je potřeba aktualizovat nebo případně 
    jen nastavit Apache, IIS, NGINX nebo to co vám tam běží. 
  - Jste na sdíleném hostingu? V Česku vám ve většině případů nezbývá 
    než prudit webhosting a čekat. Čest výjimkám popsaným níže.
3. Aktualizujte frontend. To si na tomto blogu zaslouží mírně rozvést, že? Čtěte dále.

Webů běžících na HTTP/2 je už v Česku docela dost. Třeba [VašeČočky.cz](https://www.vasecocky.cz/) nebo [Zdroják](https://www.zdrojak.cz/), ten ale jen ve Firefoxu.

## Optimalizace frontendu se mění: hodně malých souborů je plus

Při optimalizaci pro HTTP/1.1 frontendisti dbající [na rychlost](http://www.vzhurudolu.cz/rychlost-nacitani) minimalizují data co stránka posílá a počet dotazů na server. Na HTTP/2 už na počtu dotazů tak moc nezáleží.

<!-- AdSnippet -->

Pro HTTP/2 je tedy ideální posílání menších CSS, JS souborů. Hlavní důvody pro některé aktuální optimalizační triky odpadají:

- **CSS sprite** (slučování obrázků do jednoho)    
  Pokud „sprajty“ děláte jen kvůli frontě requestů, není to na HTTP/2 potřeba. Jsou ale i jiné důvody pro jejich použití - třeba datová velikost nebo pořadí zobrazení. Sprity prostě, zdá se, pro potřeby některých scénářů přežijí.
- **Data-uri** (přímé vkládání obrázků do HTML nebo CSS)  
  Ty se dělaly hlavně kvůli requestům, což nyní padá. Na druhou stranu zvětšovaly datový objem původního obrázku. 
- **Spojování CSS a JS**  
  Obvykle bude lepší posílat řadu malých souborů. Pokud soubory rozdělíme, nemusí být potřeba připravovat [kritické CSS](http://www.vzhurudolu.cz/blog/35-critical-css), protože menší soubory s CSS dorazí dříve. Jednotlivé CSS a JS také můžeme kešovat s různými pravidly. Nemusíme také do stránky vkládat CSS, které stránka neobsahuje. Totéž u Javascriptu. Samozřejmě v praxi je potřeba zkoušet všechny možnosti. Univerzální doporučení zatím nemám, jen ta papírová.
- **Domain sharding** (rozdělování domén pro znásobování fronty)  
  Díky tomu se navíc zbavíme vytváření potřeby vytváření nových TCP spojení.

Na tomhle místě si asi řeknete, že ono fakt nestačí změnit protokoly. Moje zkušenost je taková, že pokud jste hodně optimalizovali pro HTTP/1.1, budete do frontendu muset pořádně sáhnout. Pokud jste dosud optimalizaci neřešili, pouhé přepnutí na HTTP/2 vašemu webu nejspíš více či méně pomůže.

## Podpora: všude to běží s výjimkou většiny sdílených hostingů

### Prohlížeče

HTTP/2 je podporované prakticky všemi moderními prohlížeči. Podívejte se [na Can I use](http://caniuse.com/#feat=http2). Protokol nepodporují jen Explorery 10 a starší a prohlížeče na čtyřkových Androidech. U webu s běžnou českou návštěvností [odhadem do pěti procent](prohlizece.md). 

Nový protokol je ale zpětně kompatibilní, takže obstaróžním prohlížečům web přijde na starém dobrém HTTP/1.1. Raději tedy zmíním, že váš frontend optimalizovaný pro HTTP/2 může být na starých křápech o dost pomalejší.

### Web servery

Pro Apache je tady [mod_http2](https://httpd.apache.org/docs/trunk/mod/mod_http2.html) (nyní ale označený jako *experimental*), NGINX podporuje dvojku [od verze 1.9.5](https://www.nginx.com/blog/nginx-1-9-5/) a Microsoft IIS [od verze 10](https://blog.sslmarket.cz/ssl/nova-verze-iis-10-uz-umi-http-2-jak-na-to/).

Luděk Michera v komentářích zmiňuje, že u distribucí založených na RedHatu to bude trvat „hodně dlouho“ kvůli čekání na [OpenSSL 1.0.2](https://www.openssl.org/news/openssl-1.0.2-notes.html), který umožňuje běh rychlého protokolu v Chrome (potřebuje ALPN).

Serverový software je tedy u některých platforem takřka připravený. Teď ještě, aby to někdo na těch serverech zapnul.

<!-- AdSnippet -->

Pokud máte vlastní nebo pronajatý server, nebude problém *zapnutí* HTTP/2 domluvit. Horší je to na sdíleném hostingu.

### České sdílené hostingy

Ty většinou čekají stabilní verzi mod_http2. Na [cn130.com](http://cn130.com/2015/12/webhosting-s-http-2-0/) je pěkný seznam českých hostingů, které HTTP/2 podporují. Tedy seznam… Jsou zatím dva, možná tři. 

- [Wedos](https://hosting.wedos.com/cs/newsletters/2016/05/01.html) prý podporuje HTTP/2 u všech linuxových tarifů.
- [Tele3](https://www.tele3.cz/) to prý nastavuje na vyžádání.
- [Active24](https://www.active24.cz/) údajně [umí na všech tarifech](https://www.facebook.com/active24cz/posts/10211267842150771), což je cool. Škoda jen, že aktuálně to využijí jen vaší uživatelé s Firefoxem.
- [WPHosting](https://www.wp-hosting.cz/programatori/) pro WordPress to píše na webu.
- [ONEBit](https://www.onebit.cz/cz/webhosting/) také na webu zmiňuje HTTP/2 u všech tarifů.

Vyjádření některých dalších hostingů:

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr"><a href="https://twitter.com/machal">@machal</a> Současná stabilní verze platformy Debian/apache, kterou používáme, HTTP/2 nepodporuje. S přechodem na Debian 9 s HTTP/2 počítáme.</p>&mdash; IGNUM (@ignum) <a href="https://twitter.com/ignum/status/801353087189454848">November 23, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

V podobném duchu mě psal Matěj Kloubek z [Českého hostingu](http://www.cesky-hosting.cz/):

> Experimentální věci samozřejmě nechceme na servery nasazovat, protože jednak není jisté, že budou správně fungovat, a taky se ještě mohou dost měnit. Takže čekáme, až ten modul bude vydán jako stabilní (a to jak obecně, tak pro Debian).

Vývoj budu sledovat. Pokud něco víte, napište prosím do komentářů.

Na statické weby je možné použít CDN jako je třeba [cdn77.com](https://www.cdn77.com/), které novou verzi protokolu obvykle podporují.


## Nasazení HTTP/2 s Cloudflare

Zajímavou možnost nabízí [Cloudflare](https://www.cloudflare.com/) - CDN, které může fungovat jako HTTPS a HTTP/2 proxy před vaším webem. Ve free plánu pro jeden web je kromě toho také základní DDOS a výhody CDN. Stačí na ně nastavit nameservery své domény. Zkoušel jsem zatím experimentálně a je to hezké.


## Co teď?

Pokud máte vlastní server, nebo hostujete tam, kde už HTTP/2 umí, rozhodně do toho jděte. Budu rád, když vaše zkušenosti nasdílíte. Ostatní mohou zkusit Cloudflare nebo čekat. 

