# Co je „Doba do načtení prvního bajtu“ (aneb „Time To First Byte“ aneb TTFB)?

[Metrika rychlosti webu](metriky-rychlosti.md), která vzniká ve chvíli, kdy prohlížeč stáhne první bajt z vašeho HTML.

Ukazuje tedy rychlost serveru a backendové části aplikace. A taky samozřejmě rychlost sítě mezi serverem a klientem, tedy měřící aplikací či prohlížečem.

<figure>
<img src="../dist/images/original/metrika-ttfb.jpg" alt="TTFB">
<figcaption markdown="1">
*TTFB nebo taky „Time To First Byte“*
</figcaption>
</figure>

Laicky řečeno: Pokud je server pomalý může to být připojením mezi ním a prohlížečem. Pokud je to pomalý odevšad, asi máte pomalý server.

## Je to důležité? Ne tak moc jak si mnozí myslí. Držte to ale pod půl vteřinou {#dulezite}

[Jeden z mýtů](rychlost-myty.md#2) kolem webové rychlosti je to, že ji čas serveru obecně zásadně ovlivňuje.

TTFB ale tvoří skoro vždy tu menší část problému u pomalých webů – větší zásek je obvykle v (ne)optimalizaci frontendu.

Nicméně i tak není dobré TTFB podceňovat: Důležitý je například pro [Crawl Budget vyhledávačů](https://www.contentkingapp.cz/akademie/crawl-budget/) – kolik stránek vám robot bude schopný projít, což se týká hlavně velkých webů.

<!-- AdSnippet -->

TTFB byste měli i na pomalých připojeních držet co nejvíce pod půl vteřinou.

## Jak TTFB měřit? {#mereni}

TTFB ukazují asi všechny pořádnější nástroje:

- [PageSpeed Insights](pagespeed-insights.md) (jako „dobu odezvy serverů“)
- [WebpageTest.org](https://www.webpagetest.org/) (jako „First Byte“)
- [SpeedCurve](speedcurve.md) a další monitorovací nástroje.

První uvedený je postavený na analyzátoru [Lighthouse](lighthouse.md), takže vám rovnou nahlásí, pokud je váš serverový čas příliš vysoký.

Nástroje pro průběžné monitorování jsou u TTFB skoro nepostradatelné, protože jednotlivá měření se od sebe mohou i relativně hodně lišit.

Záleží prostě na momentálním vytížení serveru a sítě.

### Vývojářské nástroje prohlížečů

Myslím, že všechny moderní prohlížeče mají v Developer Tools nějakou záložku „Network“, kde si stačí nahrát stahování webu a pak rozkliknout řádek se stažením úvodního HTML. 

Dostanete graf podobný tomu, který je uvedený dole u nástroje ByteCheck.

### Měření z příkazové řádky {#terminal}

Lze to dělat samozřejmě z terminálu pomocí příkazu `curl`. Líbí se mi řešení [od Haydona Jamese](https://haydenjames.io/analyze-websites-ttfb-time-first-byte/):

```bash
curl -o /dev/null -w "Connect: %{time_connect} TTFB: %{time_starttransfer} Total time: %{time_total} \n" https://www.vzhurudolu.cz/
```

Ve shrnutí vrací tohle:

```bash
Connect: 0.040612
TTFB: 0.904507
Total time: 1.886265
```

### ByteCheck: Specializovaný měřič TTFB {#bytecheck}

Pro netechniky může být zajímavý tenhle online nástroj:

→ [bytecheck.com](http://www.bytecheck.com)

<figure>
<img src="../dist/images/original/ttfb-bytecheck.jpg" alt="TTFB od ByteCheck">
<figcaption markdown="1">
*TTFB rozebraný na jednotlivé části procesu od ByteCheck.com*
</figcaption>
</figure>

Jak vidíte z obrázku, doba do načtení prvního bajtu se skládá z několika časových úkonů:

- Rozlišení *DNS* (převod názvu domény na IP adresu)
- *SSL* čas (pro zpracování bezpečnostního certifikátu)
- *Send* je  zaslání dotazu na server
- *Wait* označuje čas, po který se čekalo na samotný server
- *Receive* je doba do příchodu prvního bajtu do klienta (nejčastěji prohlížeče)

Je to zjednodušené, protože do hry cestou vstupují různé proxy servery nebo třeba technologie Service Worker. Detailní vysvětlení je na [developers.google.com](https://developers.google.com/web/tools/chrome-devtools/network/reference#timing-explanation).

Jen pozor, čísla z nástrojů vždy porovnávejte s jinými weby, nejlépe konkurenčními.

<!-- AdSnippet -->

Pokud chcete příklad hodně rychlého TTFB, zadejte si tam doménu `google.cz`. Sami uvidíte, že ByteCheck dává špatné hodnocení v zásadě všem. Důležitá jsou ovšem čísla uvedená v grafu.

## Kde leží příležitosti ke zlepšení? {#zlepseni}

Právě onen *Wait* čas ukazuje dobu práce samotného serveru. A zde leží příležitosti ke zlepšení. Do backendu a do serverů moc nevidím (a navíc je u každého projektu použité jiné technologie), takže zůstanu u obecných tipů:

- optimalizace databáze nebo backendového kódu
- implementace cache
- úprava serverové konfigurace
- lepší hosting

Takhle se to dobře říká, že ano?

Ještě mám poznámku ke kompresi a pak už jen shrnutí.

## Proč to Gzip zpomaluje, ale stejně jej chceme? {#gzip}

[V Cloudflare](https://blog.cloudflare.com/ttfb-time-to-first-byte-considered-meaningles/) pro legraci změřili jak moc se liší TTFB u stránky se zapnutou a vypnutou kompresí pomocí gzipu.

První sloupec možná některé z vás překvapí:

|              | TTFB  | Stažení HTML |
|--------------|------:|-------------:|
| Gzip vypnutý | 213µs | 43ms         |
| Gzip zapnutý | 1.7ms | 8ms          |

Jasně, před vysláním prvního bajtu Gzip opravdu věci zpomalí. Jenže pak začne dělat svou komprimační práci a už na HTML kódu ušetří spoustu času a dat.

Takže ne, tohle nemá být návod na vypnutí Gzipu. Spíše se prosím ujistěte, zda jej máte zapnutý pro všechny textové zdroje stránky.

Shrnu teď to nejdůležitější a už vám dám pokoj:

- TTFB je dobrý způsob jak měřit výkon serveru.
- Pro měření rychlosti webu je velmi nedostačující, mrkněte se na [jiné metriky](metriky-rychlosti.md).
- Do měření TTFB se může projevovat pomalé internetové připojení, zpomalení způsobené měřícím nástrojem atd.
- TTFB může být pro různá měření a různé stránky webu velmi různě vysoké. Má tedy smysl sledovat jen jeho dlouhodobý trend a srovnávat se s adekvátní konkurencí.

<!-- AdSnippet -->


