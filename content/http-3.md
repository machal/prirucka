# HTTP/3

Třetí verze protokolu HTTP vypadá slibně. Zatím ji lze z pohledu webaře spíše jen po očku sledovat, na reálné použití si totiž na většině našich projektů zatím kvůli slabé podpoře asi počkáme.

Na téhle stránce budu průběžně aktualizovat stav podpory a pokoušet se zpřesňovat, co nám tahle nová technologie přinese. Ale pokusím se zde i v rámci svých omezených znalostí frontendisty evidovat výhody nového protokolu.

## Co to je HTTP/3 a jak se liší od předchozích verzí protokolu? {#co}

Očima frontendového vývojáře nebo kohokoliv, kdo zase tak moc nerozumí problematice serverů nebo infrastruktury, zde oproti [HTTP/2](http-2.md) není tolik nového.

Ve „střevech“ protokolu se však odehrály velké změny.

<figure>
<img src="../dist/images/original/http-3-architektura.png" width="1600" height="900" alt="Architektura protokolu HTTP/3">
<figcaption markdown="1">
*Změny v architektuře HTTP/3 ve srovnání s předchozími verzemi. Zdroj: [Nginx.com](https://www.nginx.com/blog/introducing-technology-preview-nginx-support-for-quic-http-3/)*
</figcaption>
</figure>

### HTTP/3 = HTTP over QUIC {#http-over-quic}

Jak jste si asi z obrázku všimli, protokol [TCP](https://cs.wikipedia.org/wiki/Transmission_Control_Protocol) je zde nahrazen zcela novým – [QUIC](https://cs.wikipedia.org/wiki/QUIC).

<!-- AdSnippet -->

HTTP/2 má totiž zabudovanou moc prima věc zvanou multiplexing. Ta umožňuje posílat více zdrojů současně přes jediné připojení. Jenže právě tohle je místo, kde to starý protokol TCP zpomaluje. Jeho pakety jsou vždy přijímány v pořadí odeslání. Navíc pokud dojde ke ztrátě jednoho paketu, celé připojení je blokováno, zatímco je tento paket znovu vyžadován. Tomuto problému se říká „head-of-line-blocking“, [blokování čela fronty](https://cs.wikipedia.org/wiki/Blokov%C3%A1n%C3%AD_%C4%8Dela_fronty).

A tady přichází QUIC, nový protokol transportní vrstvy, který tento problém řeší vytvořením několika multiplexovanými spojeními mezi body A a B. To znamená, že 2 zdroje, které jsou odesílány současně, mohou být odeslány přes 2 různá připojení, přičemž se nemohou navzájem blokovat.

Tolik k základní síťové teorii, ale nyní zpět k webařině.

### Konec HTTP/2 prioritizace? {#prioritizace}

Kniha [HTTP/3 explained](https://http3-explained.haxx.se/en/h3/h3-h2) v části s porovnáním s předchozí verzí protokolu uvádí, že třetí verze pravděpodobně [nebude podporovat prioritizaci](https://http3-explained.haxx.se/en/h3/h3-prio).

Připomínám, že prioritizaci zdrojů ovlivňují prohlížeče, může je ovlivnit vývojář (např. [způsobem servírování JS](https://www.vzhurudolu.cz/prirucka/js-priority) nebo pomocí [přednačtení](https://www.vzhurudolu.cz/prirucka/preload)), ale také je ovlivní server, vlastním způsobem implementace priorit.

Dalo by se říct, že s prioritizací jsou na HTTP/2 jenom potíže. Ty vychází hlavně ze špatného nastavení na serverech. V oboru je proto populární následující video od Pata Meenena.

YouTube: [youtu.be/sgjxuhFQktE](https://www.youtube.com/watch?v=sgjxuhFQktE)

Prioritizace na HTTP/1.x byla jednoduchá – prohlížeče uměly navázat 6 spojení pro každou doménu. Když zdroje stáhly, pokračovaly dál.

Na HTTP/2 pak prioritizaci ovlivňují servery (často negativně) a taky prohlížeče – každý k prioritizaci zdrojů přistupuje jinak. Firefox a Chrome se snaží stahovat nejprve nejdůležitějšího zdroje jako CSS nebo blokující JS, Safari se pokouší stáhnout vše najednou.

<!-- AdSnippet -->

Díky složitosti prioritizace se pak stávají zlem i dříve populární techniky, jako je _domain sharding_, stahování zdrojů z více domén, které jsme používali abychom na HTTP/1.x znásobili fronty.

Na HTTP/2 je toto z pohledu prioritizace špatně. Servery neví o dalších spojeních a tak upřednostňují ty své prvky - takže např. fronty priorit pro `www.domena.cz` a `cdn.domena.cz` pak bojují o síť proti sobě.

<!-- 

### Srovnání HTTP/2 a HTTP/3

| Vlastnost            | HTTP/2 | HTTP/3 |
|:--------------------:|--------|--------|
| Transportní protokol | TCP    | QUIC   |
| Streamy              | HTTP/2 | QUIC   |
| Textová verze        | +      | -      |
| Komprese hlaviček    | HPACK  | QPACK  |
| Prioritizace         | +      | -      |
| 0-RTT handshake      | -      | +      |

zdroj: https://www.root.cz/clanky/http-3-co-nam-novy-protokol-prinese-a-proc-to-hned-tak-nebude/

TODO srovnání viz https://developer.akamai.com/blog/2020/04/14/quick-introduction-http3 a obrázek 

-->

## Jak se HTTP/3 projevuje? {#vyhody}

Na rychlém připojení a na počítači rozdíl nepoznáte. Nejde o tak zásadní posun jako mezi druhou a první verzí HTTP.

<figure>
<img src="../dist/images/original/http-3-chrome.png" width="1600" height="900" alt="HTTP/3 v Chromu">
<figcaption markdown="1">
*HTTP/3 na produkci YouTube. Prohlíženo přes Network panel z Chrome 87.*
</figcaption>
</figure>

[Google](https://blog.chromium.org/2020/10/chrome-is-deploying-http3-and-ietf-quic.html) nicméně po nasazení nové verze protokolu na svých obrovských datech vidí zlepšení:

- Při nasazení do Vyhledávání Google kleslo zpoždění odpovědi o více než 2 %.
- Data z YouTube: Čas obnovení vyrovnávací paměti videa (re-buffer) se snížil o více než 9 %, propustnost klientů se zvýšila o více než 3 % na počítačích a o více než 7 % na mobilních zařízeních.

Údajně se to více projeví u klientů, kteří mají nejhorší výchozí podmínky. To vše zní slibně.

## Podpora je zatím po všech směrech slabá {#podpora}

Podpora pro reálné nasazení je v době psaní textu mizerná. HTTP/3 podporuje prakticky jen Safari na MacOS 11 a navíc prohlížečům data po novém protokolu nemá jaksi kdo poslat.

### Prohlížeče {#podpora-prohlizece}

Aktuální stav je takovýto:

- Safari – podporuje od verze 14. Musíte ale mít MacOS 11 Big Sur.
- Chrome – zatím testuje, ale [od října 2020](https://blog.chromium.org/2020/10/chrome-is-deploying-http3-and-ietf-quic.html) to pomalu zapínají části všech uživatelů. Je si to možné zkoušet pomocí parametrů na příkazové řádce `--enable-quic` a `--quic-version=h3-29`, když se Chrome spouští. Případně je možné podporu zapnout nebo vypnout v `chrome://flags/` a `Experimental QUIC protocol`.
- Firefox – zatím testuje. Je to možné pustit vlaječkovým nastavením `network.http.http3.enabled` v `about:config`.

<figure>
<img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1607863524337/caniuse-embed/all/http3.webp" alt="Podpora HTTP/3 v prohlížečích">
<figcaption markdown="1">
*Obrázek: Podpora HTTP/3 prohlížečích. Zdroj: [CanIUse Embed](https://caniuse.bitsofco.de/).*
</figcaption>
</figure>

### Servery {#podpora-servery}

Hezký přehled je [u této otázky na StackOverflow](https://stackoverflow.com/questions/60324166/is-there-any-way-to-implement-http-3-quic-in-apache-http-server):

- Apache – nepodporuje a podle všeho zatím k tomu ani nic neohlásili.
- Nginx – už existuje [preview podpory HTTP/3](https://www.nginx.com/blog/introducing-technology-preview-nginx-support-for-quic-http-3/).

Podporující alternativy: [LiteSpeed](https://www.litespeedtech.com/http3-solutions), [Caddy](https://caddyserver.com/).

Mimo „klasiku“ mezi webservery ale podpora HTTP/3 a QUIC přibývá – např. ve světě serverového JavaScriptu: [Node.js od verze 15](https://nodejs.org/api/quic.html), existuje [rmarx/quicker](https://github.com/rmarx/quicker) (NodeJS/TypeScript implementation of the IETF QUIC and HTTP/3 protocols).

V dalších jazycích pak například [lucas-clemente/quic-go](https://github.com/lucas-clemente/quic-go) (Go) nebo [aiortc/aioquic](https://github.com/aiortc/aioquic) (Python). (Za doplnění v komentářích děkujeme uživateli Mlocik97.)

Lepší je samozřejmě podpora u CDN, například [u Cloudflare](https://developers.cloudflare.com/http3/) si obsluhu klientů přes HTTP/3 už můžete nastavit.

### České hostingy {#podpora-hosting}

Zatím je víceméně mrtvo. U HTTP/2 jsem to docela podrobně sledovat. V případě HTTP/3 udělal první průzkumnické kolečko [Wladass](https://wladass.cz/budeme-pripraveni-na-http-3/). Výsledkem je, že našel jediný podporující hosting – [exon.io](https://exon.io/nexthosting).

Je potřeba říci, že je nyní opravdu hodně brzy a specifikace kolem HTTP/3 jsou zatím pořád ve stadiu návrhu.

## Další zdroje {#zdroje}

Pokud si toho o HTTP/3 chcete přečíst více, neváhejte pokračovat:

- [Root.cz: HTTP/3: co nám nový protokol přinese a proč to hned tak nebude](https://www.root.cz/clanky/http-3-co-nam-novy-protokol-prinese-a-proc-to-hned-tak-nebude/)
- [HTTP/3 explained](https://http3-explained.haxx.se/)
- [Akamai: A QUICk Introduction to HTTP/3](https://developer.akamai.com/blog/2020/04/14/quick-introduction-http3)
- [Fastly: The state of QUIC and HTTP/3 2020](https://www.fastly.com/blog/state-of-quic-and-http3-2020)
- [Cloudflare: HTTP/3: the past, the present, and the future](https://blog.cloudflare.com/http3-the-past-present-and-future/)

Vývoj ale budu sledovat a tuto stránku dále aktualizovat. Budu rád, když mi napíšete komentář nebo rovnou navrhnete [úpravu zdroje](https://github.com/machal/prirucka/blob/master/content/http-3.md), pokud narazíte na informaci, kterou zde nezohledňuji.

<!-- AdSnippet -->
