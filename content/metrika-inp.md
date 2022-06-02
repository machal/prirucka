# Interaction to Next Paint (INP): nová metrika prodlevy interakcí

INP je nová metrika rychlosti webu, se kterou přichází Google. Zatím je považována za experimentální, ale všeobecně se očekává, že po doladění nahradí v rámci [metrik Web Vitals](web-vitals.md).) zhruba v horizontu [jednoho roku](https://twitter.com/glenngabe/status/1526175755230760960) poměrně neuspokojivou metriku [FID (First Input Delay)](metrika-fid.md).

Tato změna se dotkne celé řady z vás, protože INP je metrika daleko přesnější a k webům přísnější.

## Metrika rychlosti odezvy {#metrika}

Metrika [Interaction to Next Paint (INP)](https://web.dev/inp/) zaznamenává prodlevu veškerých interakcí v průběhu celého životního cyklu stránky.

<!-- AdSnippet -->

Interaction to Next Paint  je podobně jako právě FID metrikou interaktivity. Stránka se vám načte a vykreslí, vy můžete provádět interakce z myši, z dotykové obrazovky nebo z klávesnice, ale stránka nereaguje. Hlavní příčinou bývá samozřejmě JavaScript.

Metriky jako INP a FID se snaží tyto nepříjemnosti v uživatelském prožitku změřit a tím nám umožnit je odstranit.

<figure>
<div class="rwd-media">
  <video muted controls width="1280" height="720">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1654070782/vzhurudolu-video/inp-google_zozj3y.mp4"
      type="video/mp4">
  </video>
</div>
<figcaption markdown="1">
Odezva vpravo je dobrá, protože indikátor načítání se zobrazí okamžitě po vstupu uživatele, který chce zobrazit obrázek.
</figcaption>
</figure>


Autoři z Googlu v případě INP namísto pojmu „interaktivita“ používají pojem „responsiveness“, tedy víceméně schopnost rychle reagovat. Zjednodušeně řečeno je INP metrikou rychlosti odezvy.

Ukazuje na to i samotný název. Interaction to Next Paint by se dalo přeložit jako „od interakce do dalšího vykreslení“. Překládat do češtiny se tento název bude špatně, a ani já o to tentokrát nebudu usilovat. Nicméně – v původním názvu se přesně odráží fungování tohoto nového ukazatele.

## Co INP měří a jak se liší od FID? {#co-meri}

Metriku First Input Delay už dlouho považuji za nevyhovující. Problém s odezvou u webů, které jsou plné reklam nebo špatně postavené na moderních frontendových frameworcích, zde máme dlouhodobě. Ale FID to ani u těchto webů neukazuje.

Důvody, proč FID nevyhovuje, jsou tři:

1. Měří jen prodlevu při první interakci, nikoliv celou dobu pobytu uživatele na stránce.
2. Neměří celou prodlevu, ale jen její první část.
3. FID je málo přísné, podle dat Googlu metriku splňuje 95 % webů.

Asi nikoho nepřekvapím, když napíšu, že INP toto všechno řeší:

### 1) Měří se celou dobu pobytu na stránce {#co-meri-1}

INP měří odezvu všech interakcí až do změny URL a vybere tu nejhorší odezvu se všech interakcí. Pokud je interakcí více než 50 (může se to stát např. u her v prohlížeči), vybírají se percentily, nejčastěji to bude 98\. percentil.

Měřením po celou dobu pobytu na URL se řeší velká slepota metriky FID, protože podle propočtů Googlu zhruba 90 % interakcí probíhá až po úvodním načtení stránky.

INP si tak můžete připodobnit k metrice [Cumulative Layout Shift (CLS)](metrika-cls.md), která se také měří po celou dobu pobytu na stránce.

### 2) Počítá se celá prodleva {#co-meri-2}

FID měří jen první část prodlevy reakce – než reakce probublá do JavaScriptu, který ji musí zpracovat.

Vůbec se ale nepočítá s dobou zpracování v samotném JS kódu, která může být opravdu dlouhá a nepočítá se s dobou vykreslení. Odhadem FID změří jen třetinu a poloviny reálného zpoždění po akci uživatele.

<figure>
<img src="../dist/images/original/inp-schema.jpg" width="1920" height="540" alt="Metrika INP - schéma, co měří">
<figcaption markdown="1">
*Metrika INP a tři části, kde může nastat průšvih*
</figcaption>
</figure>

Na schématu vidíme tři části možného zpoždění interakce:

* Zpoždění vstupu (input delay) – to, co nyní měří FID.
* Zpracování vstupu (processing time) – události, ale hlavně zpracování JS.
* Zpoždění prezentace (presentation delay) – většinou bývá v pohodě, mohou ale pokazit špatné CSS animace atd.

Už z tohoto je jasné, že weby, které dříve v pohodě procházely přes metriku FID, teď projít nemohou. A opravdu, troufnu si tvrdit, že INP bude pro spoustu provozovatelů webů docela postrachem.

### 3) Větší část webů přes INP neprojde {#co-meri-3}

Jak jsem psal, FID splní 95 % webů. Google deklaruje, že u INP to má spočteno zhruba [na dvě třetiny](https://youtu.be/Mizzbsvv8Os?t=810) splňujících webů.

Od doby, co je možné INP změřit, namátkou kontroluji hodnoty metriky pro weby klientů PageSpeed.cz i neklientů, u kterých bych osobně tipoval, že budou mít problémy. No a co myslíte? Skoro vždycky to tam je. :)

## Hodnoty metriky INP a jak je změřit? {#hodnoty}

Interaction to Next Paint má, stejně jako jiné Web Vitals, od výroby nastavené třístupňové hodnoty, kdy stránka (nebo doména) vyhovuje více či méně:

<p><img src="../dist/images/original/inp-metrika.jpg" width="1920" height="540" alt="Metrika INP - její hodnoty"></p>

Projděme to ještě slovně:

* Hodnota INP nižší nebo rovna 200 milisekundám = stránka má dobrou odezvu interakcí.
* INP nad 200 ms a pod 500 ms nebo na této hodnotě = odezva interakcí vyžaduje zlepšení.
* INP nad 500 ms = stránka má špatnou odezvu interakcí.

### Měření INP {#hodnoty-mereni}

Hodnoty nové metriky odezvy interakcí můžete pro své weby získat už teď, protože Google ji už nějakou dobu pro uživatele Chrome sbírá v rámci svého [Chrome UX Reportu](chrome-ux-report.md) a poskytuje ve svých měřících nástrojích.

Podobně jako u CLS nebo FID bude složitější ji naměřit pomocí syntetických měření typu [Lighthouse](lighthouse.md), protože metrika se sbírá až na základě uživatelských akcí. Ale je zde světlo na konci tunelu, totiž nové režimy fungování právě u nástroje s majákem ve znaku.

Takže jak novou metriku změřit?

* Data od uživatelů vašeho webu získáte například z PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev/).
* Můžete použít knihovnu [web-vitals](https://github.com/GoogleChrome/web-vitals/tree/next) nebo extension [Web Vitals](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma?hl=en) (a povolit logování do konzole prohlížeče).
* V Lighthouse je možné INP změřit v novém [režimu Time Span](https://github.com/GoogleChrome/lighthouse/blob/master/docs/user-flows.md) (zatím jen v Chrome Canary).

## Optimalizace INP {#optimalizace}

Asi byste ode mě rádi dostali rovnou návod, jak tuto metriku snadno optimalizovat. Ale bohužel, tak jednoduché to nebude.

Z praxe pro klienty vím, že obecné rady u jakékoliv metriky málokdy zafungují, vždy je potřeba analyzovat konkrétní web a konkrétní stránky. U této metriky to bude ještě složitější.

<!-- AdSnippet -->

Samozřejmě vás ale zkusím alespoň trochu navést.

### Zaměřte se na TBT {#optimalizace-tbt}

Metriky jako FID nebo nově INP jsou velmi citlivé na takzvané long tasks v JavaScriptu. Pokud má totiž prohlížeč práci s dlouhým zpracováním JS kódu, nemůže reagovat na vstupy od uživatele.

Zaměřit byste se tedy měli na optimalizaci metriky [TBT (Total Blocking Time)](metrika-tbt.md), kterou jde změřit snadno všemi možnými nástroji. Podle údajů Googlu koreluje TBT dvakrát lépe s INP než s FID, což je dobrá zpráva, protože optimalizace FID byla často docela peklíčko.

### Obecná rada? Optimalizujte JavaScript {#optimalizace-js}

Obecně samozřejmě pomáhá mít ve stránce co nejméně JS, který něco provádí: odstraňovat nevyužitý kód, správně bundlovat, odkládat stahování a spouštění kódu, který v daném uživatelském kontextu není potřeba. Dávat pozor na [třetí strany](third-party.md).

Důležitá v případě INP může být také [volba JS frameworku](https://web.dev/inp-in-frameworks/). Např. weby běžící na Next.js na mobilu splňují metriku jen z 20 %. Lidé z Googlu sice deklarují, že s autory těchto knihoven budou pracovat na zlepšení, ale tipuji, že některé autory webů běžících na těchto frameworcích čekají zajímavé časy.

## Co s tím teď? {#a-co-jako}

Pokud vám můžu poradit, zatím si INP pro své weby změřte hlavně změřte.

<!-- AdSnippet -->

Jestliže vám vyjdou velmi špatná čísla (červené spektrum) a chcete-li do budoucna Web Vitals splňovat a hlavně mít rychlý web, pak raději začněte připravovat plán na nápravu (s čímž vám [rádi pomůžeme](https://www.pagespeed.cz/sluzby)).

Z mé zkušenosti je totiž právě optimalizace JavaScriptu jedna z nejsložitějších a nejdéle se táhnoucích prací na rychlosti webu.

Pokud INP splňujete, nezbývá než vám gratulovat.  Ale i tak pozor – jde o novou, zatím experimentální metriku, která se ale může časem měnit, takže vám doporučuji sledovat její vývoj.
