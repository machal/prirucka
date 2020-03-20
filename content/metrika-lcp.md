# Metrika „Největší vykreslení obsahu“ (Largest Contentful Paint, LCP)

Nová [metrika rychlosti webu](metriky-rychlosti.md) – Largest Contentful Paint (LCP) – představuje přesnější způsob měření momentu, ve kterém se vykreslí hlavní obsah stránky.

LCP se „dívá“, kdy byl prohlížeč zobrazil největší prvek ve stránce. Uživatelům tak pomáhá vyhodnotit, zda je stránka užitečná.

<figure>
<img src="../dist/images/original/metrika-lcp-weby.png" alt="">
<figcaption markdown="1">
*Obrázek: A máme tě! Jak vidíte, FCP poměrně chytře odhalí obsahově nejpodstatnější část stránky. Zde je ilustrace na různých typech webů. Zdroj: [web.dev](https://web.dev/lcp/#measure-lcp-in-javascript).*
</figcaption>
</figure>

Dobré LCP by podle Googlu mělo proběhnout do 2,5 sekundy. V měřeních reálných uživatelů (RUM) byste měli podle stejného zdroje vyhodnocovat 75. precentil.

## Proč LCP potřebujeme? {#proc}

Asi si řeknete, že pro měření vykreslení hlavního obsahu stránky už nějaké metriky máme. Jenže ty jsou složité nebo nepřesné:

<div class="related" markdown="1">
- [Metriky rychlosti webu](metriky-rychlosti.md)
- [Mýty o rychlosti webů](rychlost-myty.md)
</div>

- *[First Contentful Paint (FCP)](metrika-fcp.md)*  
  Popisuje spíše začátek vykreslování. Pokud stránka zobrazuje úvodní obrazovku nebo indikátor načítání, FCP se spustí, ale pro uživatele není tento okamžik  příliš relevantní.
- *[First Meaningful Paint (FMP)](metrika-fmp.md)*  
  Vykreslení primárního obsahu stránky. Bohužel, FMP je nepřesné – dle Google je kolem 20 % měření nepovedených a já můžu jen souhlasit. Na webech klientů se FMP spouští velmi nespolehlivě.
- *[Speed Index (SI)](speedindex.md)*  
  Index rychlosti ukazuje, jak rychle je viditelný obsah stránky naplněn do stavu stoprocentního vykreslení. SI ale reflektuje vykreslení viditelného [viewportu](viewport.md), nikoliv hlavního obsahu. Často je navíc Speed Index zkreslený komponentami třetí strany zobrazujícími cookie lištu nebo okno s chatem. SI je ještě k tomu obtížné ukládat do RUM dat, protože potřebujete záznam průběhu vykreslování.

Largest Contentful Paint je nová metrika [vyvinutá](https://calendar.perfplanet.com/2019/developing-the-largest-contentful-paint-metric/) jedním z týmů prohlížeče Chrome především jako spolehlivější alternativa [First Meaningful Paint FMP](metrika-fmp.md). 

<!-- AdSnippet -->

Dle autorů ale slušně koreluje hlavně s [Indexem rychlosti (SI)](speedindex.md) a do budoucna můžeme očekávat, že jej nahradí v RUM datech.

## Jaké nástroje použít na měření LCP? {#mereni}

Metrika zatím není dostupná bez technických znalostí, ale očekávám, že se bude se postupně přidávat do nových verzí všech nástrojů.

### Google Lighthouse {#mereni-lighthouse}

V [Lighthouse](lighthouse.md) je LCP dostupné [od verze 5.5.0](https://github.com/GoogleChrome/lighthouse/releases/tag/v5.5.0). V produkovaném JSONu je k dispozici jako `observedLargestContentfulPaint`, ale v HTML reportu jej neuvidíte a do výsledného skóre se nepočítá.

V Lighthouse verze 6 bude k dispozici [v úplně novém](https://wpo.plus/performance/google-lighthouse-score-weighting/) počítání [Lighthouse Performance Score](metrika-lps.md).

Podobné je to s webovou implementací Lighthouse, [PageSpeed Insights](pagespeed-insights.md).

### SpeedCurve {#mereni-speedcurve}

V profi-nástroji [SpeedCurve](speedcurve.md) je LCP k dispozici už nějakou dobu, ale je třeba říct, že se neměří vždy spolehlivě.

<figure>
<img src="../dist/images/original/metrika-lcp-speedcurve.png" alt="">
<figcaption markdown="1">
*Obrázek: Na sadě velkých webů měřených synteticky přes [SpeedCurve](speedcurve.md), můžeme ilustrovat korelaci Largest Contentful Paint s indexem rychlosti.*
</figcaption>
</figure>

### WebpageTest {#mereni-webpagetest}

Mocný WebpageTest zatím přidání FCP do uživatelského rozhraní [jen zvažuje](https://github.com/WPO-Foundation/webpagetest/issues/1315) a čeká, zda se metrika ukáže jako užitečná.

### Chrome UX Report {#mereni-crux}

V datech z [CrUX](chrome-ux-report.md) už se LCP nějakou dobu ukládá jako experimentální a nyní jako běžné získávaná metrika. Není dostupný v běžných reportech, např. v Data Studiu, ale s trochu SQL si jej můžete vytáhnout z Google BigQuery.

### Vlastní měření JavaScriptem {#mereni-js}

Existuje návrh standardu jménem [Largest Contentful Paint API](https://wicg.github.io/largest-contentful-paint/), kde je možné vytáhnout data z API [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver). Zhruba takto:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
});
observer.observe({entryTypes: ['largest-contentful-paint']});
```

Takto je možné LCP získat z prohlížeče Chrome. Více informací o měření JavaScriptem je na [web.dev od Googlu](https://web.dev/lcp/#measure-lcp-in-javascript).

## Jak se LCP měří? {#jak-se-meri}

Od začátku renderování stránky prohlížeč vyhodnocuje, které prvky jsou v daný moment v aktuálním viewportu uživatele největší.

### Které prvky stránky se sledují? {#jak-se-meri-prvky}

- Blokové prvky obsahující textové uzly nebo jiné podřízené textové prvky.
- Obrázky (`<img>` elementy nebo `<image>` elementy uvnitř `<svg>` elementu).
- `<video>` prvky (používá se plakát).
- Prvky s obrázkem na pozadí načteným pomocí `url()` v CSS ([barevné přechody](css3-gradients.md) se ale ignorují).

Všimněte si, že podle všeho se zatím nezohledňují např. prvky `<svg>`, `<canvas>` nebo `<audio>`.

### Jaký je postup měření? {#jak-se-meri-postup}

Postup měření v Chrome je následující:

1. Prohlížeč „kouká“ do [PerformanceEntry API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry) na typ události `largest-contentful-paint`.
2. Tyto události na stránce postupně přibývají, protože se vykreslují nové prvky. Také se donačítají obrázky a webfonty nebo do viewportu může autor pomocí JS přidat nebo odebrat prvek.
3. Přestává se měřit, jakmile uživatel interaguje se stránkou (tapnutím, myší, klávesnicí, scrollem).
4. Prohlížeč reportuje vždy poslední `largest-contentful-paint` z `PerformanceEntry`.

Poznámky:

- Pokud uživatel otevře stránku na kartě na pozadí, je možné, že FCP se neaktivuje dokud uživatel záložku prohlížeče znovu neotevře.
- Pozor na obrázky servírované z jiné domény. Z bezpečnostních důvodů není časové razítko vykreslování vystaveno pro cross-origin obrázky. Místo momentu vykreslení dostane prohlížeč informaci o jejich stažení, což může zkreslovat měření. Doporučuje se nastavit hlavičku [`Timing-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin).

Měření je specifikováno v [Largest Contentful Paint API](https://wicg.github.io/largest-contentful-paint/). Při psaní jsem vycházel hlavně z podrobného [textu o LCP na webu web.dev](https://web.dev/lcp/).

<!-- AdSnippet -->
