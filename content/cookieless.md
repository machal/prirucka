# Jak jsem web zbavoval šmírovacích cookies

Sledovací cookies jsou všude. Překvapilo mě, že i na menším webu není vlastně úplně jednoduché se jich zbavit. 

Asi víte, že od letoška mají weby povinnost si před ukládáním analytických „sušenek“ vyžádat souhlas uživatele. O [cookies v roce 2022](cookie-lista-2022.md) jsem psal text, který průběžně aktualizuji.

Zároveň se tam můžete dočíst, jak se můj postoj k problematice soukromí uživatelů na internetu za poslední měsíce změnil. Je to díky tomu, že jsem se věci začal více věnovat sám jako uživatel, ale také například díky kauzám Facebooku.

<!-- AdSnippet -->

Rozhodl jsem se, že se na Vzhůru dolů pokusím odstranit všechny jiné než funkční cookies tak, abych uživatelům nemusel klást překážky v podobě cookie lišty. Ale taky proto, abych z toho webu udělal alespoň symbolický ostrůvek, kde se nešmíruje.

## První řešení: Google Search Console {#gsc}

U hodně malých webů jako je třeba ten kamarádčin s nabídkou [ubytování v Provence](https://www.ubytovani-provence.cz/), jsem se rozhodl, že úplně odstraním komponenty třetí strany.

V zásadě stačilo odstranit Google Analytics (GA), u kterých je za běžných okolností nutné žádat o svolení s ukládáním cookies.

Jak získávám data o návštěvnosti? Stačí mi [Google Search Console](https://www.vzhurudolu.cz/prirucka/google-search-console), které ukazují přístupy z ekosystému Googlu, včetně vyhledávání. Tyto typy webíků mívají velmi malou návštěvnost odjinud (např. ze sociálních sítí), takže to vůbec nevadí.

Na Vzhůru dolů se ovšem bez nějaké základní analytiky neobejdu.

## Co když Google Analytics potřebuji? {#ga}

Proč potřebuji GA? Jednak se mi hodí znát hrubou čtenost článků a také zde prodávám [knížky](https://www.vzhurudolu.cz/ebooky) a [videa](https://www.vzhurudolu.cz/video), takže je to takový malý e-shop podporující mou publikační snahu. Zde není od věci například moci vyhodnocovat konverze.

Google Analytics ale sbírají obrovské množství další dat, které nepotřebuji. Chtěl jsem tedy najít řešení bez ukládání cookies v prohlížeči, které by zachovalo alespoň základní data.

Po delším pátrání se mi povedlo najít a ověřit tento kód pro verzi Universal Analytics:

⚠️ **Update:** Toto řešení je nejspíš bohužel špatně a bez cookie lišty se neobejdete:

> Řešení odesílá i data o uživateli, tj. s jeho nastavení prohlížeče etc.
> 
> — Marek Lecián na [Facebooku](https://www.facebook.com/machal/posts/10227467122962667?comment_id=10227467215444979)

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-XX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXX-XX', {
    'client_storage': 'none',
    'anonymize_ip': true
  });
</script>
```

Pokud vás to i tak zajímá, vysvětlím to více:

* Konfigurace `client_storage` zakazuje ukládat do cookies nebo jiného lokálního úložiště. (Pro potřeby zákona je špatně ukládání kamkoliv do prohlížeče.)
* `anonymize_ip` zapíná [anonymizaci IP](https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization). Toto není pro potřeby cookie lišty nutné. Respektive, ehm, názory se různí…
* Pokud kód budete někam kopírovat nezapomeňte namísto `UA-XXXXX-XX` doplnit svůj identifikátor pro Google Analytics.

Pozor, toto řešení je vhodné jen pro verzi Universal Analytics (identifikační řetězec začíná `UA-`). Novější Google Analytics 4 sice do režimu „neukládej lokálně“ přepnete taky, ale bohužel pak v rozhraní nevidíte žádná data. Prý se ukládají, ale nezobrazují.

<!--

### O co jsem vypnutím client storage přišel? {#ga-prisel}

Pokud nemá analytický nástroj k dispozici cookie (nebo jinou identifikaci konkrétního uživatele), nemůže samozřejmě navázat jednoho uživatele na návštěvy různých URL.

Přijdete tak o délku trvání session (bude vždy 0), bounce rate (míra okamžitého opuštění bude vždy 100 %), page views na jednoho uživatele (budou  vždy 1). Dále budou všichni uživatelé bráni jako noví, ve zdrojích silně  naroste „direct“…

<figure>
<img src="https://res.cloudinary.com/vzhurudolu-cz/image/upload/v1643092265/vzhurudolu-prirucka/cookieless-ga_sh0xxw.png" alt="Google Analytics cookie-less">
<figcaption markdown="1">
Hurá, narostla mi návštěvnost. Nebo ne? Srovnání měření s cookies (oranžové) a bez nich (modré) v Google Analytics.
</figcaption>
</figure>

Bohužel zmizelo i počítání konverzí, což se troch divím. Jde přece jen o zasílání událostí… Tohle mi zatím hlava nebere a budu to dál řešit.

Google Analytics se tak stanou jednoduchým počítadlem návštěv webu (s čísly neporovnatelnými se stavem před vypnutím cookies). Dobře ale vidím návštěvy jednotlivých stránek a další data.

Pro potřeby menšího webu, který něco vydělává, to je tedy díky ztrátě konverzí na hraně použitelnosti. Pro cokoliv většího a profesionálnějšího toto samozřejmě nebude dobrá cesta.

### Alternativní řešení pro analytiku {#ga-alt}

Během svého pátrání po „cookieless Google Analytics" jsem narazil na řadu zdrojů. Nejvíc se mi líbí [řešení Helgeho Kleina](https://helgeklein.com/blog/google-analytics-cookieless-tracking-without-gdpr-consent/), který v GA vypne lokální uložiště  a klienta si identifikuje na straně serveru:

```js
ga('create', 'YOUR-GA-TRACKING-CODE', {
   'storage': 'none',
   'clientId': clientIDHashed // <-- Backend
});
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');
```

-->

Jaké další alternativy jsou možné?

* Jiné měřiče jako Plausible, Fathom, Matomo… Ty se dle mého přeceňují, protože sice neukládají cookies, ale uživatele identifikují jinak, což je z pohledu zákona úplně to samé.
* V diskuzích padala možnost vrátit se k analýze logů serveru, ale kdo si to někdy dělal, ví, že to je cesta zpět na stromy.
* Do budoucna bude jistě zajímavá [server-side analytika](https://www.houseofrezac.com/blog/co-to-je-server-side-mereni).

## Audit komponent třetích stran {#audit}

Na Vzhůru dolů jsem ale komponent třetích stran používal daleko více než jen Google Analytics. Jakýkoliv obsah tahaný z cizích domén může ukládat sledovací cookies, takže člověk musí být obezřetný.

Jak jsem postupoval? V prvé řadě jsem si udělal seznam všech třetích stran. Už ten mě vlastně svou délkou překvapil:

* [Cast](https://tryca.st/) (vkládání podcastů)
* [Cloudinary](https://cloudinary.com/) (obrázky z CDN)
* [Codepen](https://codepen.io/) (vkládání ukázek kódu)
* [Disqus](https://disqus.com/) (komentářová služba pro články)
* [Facebook](https://www.facebook.com/) (měřící pixel a občas vkládaný obsah z Facebooku)
* [Twitter](https://twitter.com/) (vkládané tweety do článků)
* [Vimeo](https://vimeo.com/) (vkládaná videa pro kurzy)
* [YouTube](https://www.youtube.com/) (vkládaná videa do článků)

Dále jsem si udělal analýzu vkládaných cookies. Pro oddělení špatných (analytických) od dobrých (funkčních) cookies jsem použil nástroje [cookieserve.com](https://www.cookieserve.com/) a [cookiebot.com](https://www.cookiebot.com/en/), ale neobešel jsem se bez poctivého koukání do DevTools prohlížeče nebo procházení „Cookie Policy“ poskytovatelů komponent.

<figure>
<img src="https://res.cloudinary.com/vzhurudolu-cz/image/upload/v1643092265/vzhurudolu-prirucka/cookieless-devtools_zrgtw1.png" alt="DevTools a cookies">
<figcaption markdown="1">
DevTools. Hlavní pracovní nástroj sušenkového detektiva.
</figcaption>
</figure>

Připomínám, že cílem bylo obejít se bez cookie lišty, takže jsem komponenty rozdělil do několika kategorií a podle toho s nimi naložil.

## Komponenty, které musejí pryč {#komp-pryc}

Zde jsou tři nejzlobivější služby, které jsem nakonec bez náhrady odstranil.

### Disqus {#disqus}

Služba, která pod každý článek vkládá komentáře. Dříve poměrně užitečná, později se z toho stávalo stále větší peklo díky přibývajícím reklamám (a cookies), a to i přes fakt, že jde o placený produkt. Přínos pro Vzhůru dolů nebyl malý, takže jsem komponentu nechával žít.

Říká se, že patří Číňanům, ale podle všeho to pravda není, i když jejich management má čínsky znějící jména. Pohled na ukládané cookies a do jejich [cookie policy](https://disqus.com/cookie-policy/) mě ale přesvědčil o tom, že Disqus půjde pryč. Ukládají toho hodně a předávají to spouště firem. To nechci. Komentáře jsem v tuhle chvíli [odstranil úplně](https://twitter.com/machal/status/1483024831192911872).

### Facebook {#facebook}

Tuhle firmu vnímám jako vedoucího jezdce v pelotonu zneužívačů soukromí lidí. Kdysi jsem jim platil nějaké drobné za kampaně podporující naše kurzy a videa, ale od dob provalení [Facebook Papers](https://www.seznamzpravy.cz/clanek/facebook-zaziva-nejvetsi-krizi-v-historii-vylezly-jeho-interni-dokumenty-178786) jsem se rozhodl, že tam sice zůstanu přítomný, ale peníze té firmě platit nebudu. Analytiku tedy nepotřebuji a šmírovací pixel od Facebooku jsem tedy ze Vzhůru dolů odstranil.

### YouTube {#youtube}

Embedy ukládají a šmírují a to i [v případě „nocookie“ domény](https://stackoverflow.com/questions/61887699/gdpr-youtube-nocookie-embedded-urls-need-visitors-permission), která sice neukládá cookies, ale do local storage, což je to z pohledu zákona totéž. YouTube jsem z článků úplně odstranil spolu s dalším vkládaným obsahem ze sociálních sítí. Je možné to nahradit obrázkem s odkazem. Já si zatím vystačil s pouhým odkazem na sociální síť.

<!-- AdSnippet -->

Firmy v téhle kategorii mají leccos společné. Celkově špatné renomé v oblasti soukromí, podivnou cookie policy a nemožnost dohledat cokoliv kolem omezení sledování (varianta „do not track") ve vývojářské dokumentaci.

## Komponenty nastavená jako „do not track“ (bez sledování) {#komp-dnt}

Další kategorii embedů bylo možné je ponechat, protože umožňují nastavit režim bez sledování. Poskytovatelé zařazení v této kategorii projevili alespoň snahu.

### Vimeo {#vimeo}

Pro vkládání videí do stránek používám placený tarif, takže mě překvapilo, že do prohlížečů ukládají nemalé množství cookies. Umožňují ale [zakázat analytické cookies](https://developer.vimeo.com/player/sdk/embed) pomocí přidání parametru dnt=1 .

Viz například:

```html
<iframe src="https://player.vimeo.com/video/561810467?dnt=1"></iframe>
```

Trochu bolestivé je, že člověk pak přijde o všechny statistiky zobrazení videí. Je podivné, že úplně o všechny. Viz Google Analytics, které bez cookie zobrazí alespoň nějaká data o zobrazení stránek. Zatím jsem to vyhodnotil, tak že statistiky o videích nutně nepotřebuji, ale je možné, že mi to dlouho nevydrží.

### Twitter {#twitter}

Sociální síť plná tweetů umožňuje zrušit sledování dvěma způsoby. První je atribut `data-dnt` v kódu embedu:

```html
<a class="twitter-share-button" href="https://twitter.com/share"
  data-dnt="true">
  Tweet
</a>
```

Druhá je meta značka v HTML:

```html
<meta name="twitter:dnt" content="on">
```

Snaha byla, že ano. Zatím jsem ale neověřil, zda to funguje, protože jsem se rozhodl vkládaný obsah odstranit úplně. Pro jistotu. Ale je pravda, že Twitteru v tomto věřím výrazně více než například Facebooku. Asi tak o parník.

## Poskytovatelé, kteří jsou v pořádku {#komp-ok}

Tohle je nejlepší skupina. Patří do ní poskytovatelé vkládaných komponent, kteří pro poskytování služby nepotřebují ukládat cookie a tedy sledovat uživatele.

* Cloudinary -- původně mě vcelku vyděsili, protože v návaznosti na jejich doménu jsem u Vzhůru dolů viděl řadu uložených cookies, včetně analytických. Ale tyto cookies dostanou [jen přihlášení uživatelé](https://support.cloudinary.com/hc/en-us/community/posts/200787742-Cookieless-domain), tedy ti, kteří Cloudinary využívají na svých webech. Čtenáři webu už ale mají prohlížeč čistý jako studánku.
* Cast, poskytovatel přehrávače pro podcast, je v pohodě. Neukládá žádné sušenky.
* Codepen, poskytovatel vkládaných ukázek, se také zdá v pořádku a jiné než nutné cookies neukládá.

## Pojďme to shrnout {#shrnuti}

V tabulce následuje katovna – seznam komponent i s mým subjektivním hodnocením.

<div class="rwd-scrollable prop-table f-6"  markdown="1">

| Služba      | Hodnocení |      Poznámka      |
|-------------|:----------|:-------------------|
| Cloudinary  | ★★★       | bez cookies           |
| CodePen     | ★★★       | jen funkční cookies   |
| Cast        | ★★★       | bez cookies |
| Twitter     | ★★☆       | umožní „do not track“ |
| Vimeo       | ★☆☆       | umožní „do not track“, ale přijdete o měření |
| Google Analytics | ★☆☆       | umožní „do not track“, ale přijdete o měření |
| YouTube          | ☆☆☆       | sleduje tak či tak |
| Disqus           | ☆☆☆       | sleduje (a předává data dál) |
| Facebook         | ☆☆☆       | sleduje jak divý |

</div>

Tuhle analýzu jsem dělal hlavně pro Vzhůru dolů, což je zčásti volnočasový projekt. Problematikou soukromí se nezabývám a nejsem na ni expert, takže si to vše ověřte u svých vývojářů a advokátů.

Neberte to jako návod, jak postupovat u větších a komerčních projektů. Spíše jako pomocníka pro jiné „hobbíky“ a  ty, kteří usilují o provozování webu bez ukládání sledovacích cookies.

Berte ten text také jako zprávu o stavu soukromí na internetu, o tom co stojí za vlnou vášní kolem [cookie lišty](cookie-lista-2022.md).

Česko bylo asi jednou z posledních zemí EU, které povinnost cookie lišty zavedlo. Přesto mám pocit, že ani zahraniční poskytovatelé zatím většinou webařům příliš vstříc nevycházejí. Možnost „do not track“ je vzácná, dokumentace chybí a analytické nástroje na tuhle situaci zatím vůbec nejsou připraveny.

Jsme na začátku cesty. Ale vidím to tak, že prakticky každý web může pro ochranu soukromí svých uživatelů už teď něco udělat, pokud chce.

<!-- AdSnippet -->
