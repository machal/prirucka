# Metrika Largest Contentful Paint

Largest Contentful Paint (LCP) představuje přesnější způsob měření momentu, kdy se vykreslí hlavní obsah stránky.

LCP se „dívá“, kdy byl vykreslen největší prvek ve stránce a z pohledu uživatelům pomáhá vyhodnotit, zda je stránka užitečná.

**IMG TODO: příklady https://web.dev/lcp/**

Dobré LCP by podle Googlu mělo proběhnout do 2,5 sekundy. V měřeních reálných uživatelů (RUM) byste měli podle stejného zdroje měřit 75. precentil.

## Proč LCP potřebujeme? {#proc}

Pro měření vykreslení hlavního obsahu stránky zde už nějaké metriky máme, ale jsou složité nebo nepřesné:

- *[First Contentful Paint (FCP)](metrika-fcp.md)*  
  Popisuje spíše začátek vykreslování. Pokud stránka zobrazuje úvodní obrazovku nebo indikátor načítání, FCP se spustí, ale pro uživatele není tento okamžik  příliš relevantní.
- *[First Meaningful Paint (FMP)](metrika-fmp.md)*  
  Vykreslení primárního obsahu stránky. Bohužel, FMP je nepřesné – dle Google je kolem 20 % měření nepovedených a já můžu jen souhlasit. Na webech klientů se FMP spouští velmi nespolehlivě.
- *[Speed Index (SI)](speedindex.md)*  
  Index rychlosti ukazuje, jak rychle je viditelný obsah stránky naplněn do stavu stoprocentního vykreslení. SI ale reflektuje vykreslení viditelného [viewportu](viewport.md), ale ne hlavního obsahu. Často je navíc Speed Index zkreslený komponentami třetí strany zobrazujícími cookie lištu nebo okno s chatem.

Largest Contentful Paint je nová metrika [vyvinutá](https://calendar.perfplanet.com/2019/developing-the-largest-contentful-paint-metric/) jedním z týmů prohlížeče Chrome především jako spolehlivější alternativa First Meanful Paint.

*TODO IMG ukázky korelací u webů*

## Jaké nástroje použít na měření LCP? {#mereni}

Metrika zatím není běžně dostupná, ale bude se postupně přidávat do nových verzí všech nástrojů

### Google Lighthouse {#mereni-lighthouse}

V [Lighthouse](lighthouse.md) je LCP dostupné [od verze 5.5.0](https://github.com/GoogleChrome/lighthouse/releases/tag/v5.5.0). V produkovaném JSONu je k dispozici jako `observedLargestContentfulPaint`, ale v HTML reportu jej neuvidíte a do výsledného skóre se nepočítá.

V Lighthouse verze 6 bude k dispozici [v úplně novém](https://wpo.plus/performance/google-lighthouse-score-weighting/) počítání [Lighthouse Performance Score](metrika-lps.md).

Podobné je to s webovou implementací Lighthouse, [PageSpeed Insights](pagespeed-insights.md).

## SpeedCurve {#mereni-speedcurve}

V profi-nástroji [SpeedCurve](speedcurve.md) je LCP k dispozici už nějakou dobu, ale je třeba říct, že se neměří vždy spolehlivě.

*TODO IMG: speedcurve a korelace k ostaním metrikám*

## WebpageTest {#mereni-webpagetest}

Mocný WebpageTest zatím přidání FCP do uživatelského rozhraní [jen zvažuje](https://github.com/WPO-Foundation/webpagetest/issues/1315) a čeká, zda se metrika ukáže jako užitečná.

## Vlastní měření JavaScriptem {#mereni-js}

Existuje návrh standardu jménem [Largest Contentful Paint API](https://wicg.github.io/largest-contentful-paint/), kde je možné vytáhnout data z API [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver). Zhruba takto:

```js
const observer = new PerformanceObserver((list) => {
  let perfEntries = list.getEntries();
});
observer.observe({entryTypes: ['largest-contentful-paint']});
```

Takto je možné LCP získat z prohlížeče Chrome. Více informací o měření JavaScriptem je na [web.dev od Googlu](https://web.dev/lcp/#measure-lcp-in-javascript).

<!-- TODO

* jak se měří?
    * měření je specifikováno v Largest Contentful Paint API, zatím se kouká na největší z těchto prvků
        * Blokové prvky obsahující textové uzly nebo jiné podřízené textové prvky.
        * Obrázky (<img> elementy nebo <image> elementy uvnitř <svg> elementu)
        * <video> prvky (používá se plakát)
        * Prvek s obrázkem na pozadí načteným pomocí url() v CSS (na rozdíl od barevných přechodů)
        * všimněte si, že podle všeho se zatím neměří např. prvky <svg>, <canvas> nebo <audio>
    * prohlížeč kouká do PerformanceEntry na typ události largest-contentful-paint
    * ty na stránce postupně přibývají, protože… 
        * přibývají nové prvky, 
        * čeká se na stažení obrázků, webfontů, 
        * do viewportu můžete pomocí JS přidat nebo odebrat prvek
    * přestává se měřit, jakmile uživatel interaguje se stránkkou (tapnutím, myší, klávesnicí, scrollem)
    * pro potřeby měření se bere vždy poslední reportovaný largest-contentful-paint z PerformanceEntry 
    * Poznámka: Pokud uživatel otevře stránku na kartě na pozadí, je možné, že FCP se nestane, dokud uživatel na záložku znovu neotevře.
    * Pozor na obrázky servírované z jiné domény, hlavička Timing-Allow-Origin
        * Z bezpečnostních důvodů není časové razítko vykreslování vystaveno pro cross-origin obrázky.
        * Místo momentu vykreslení dostane prohlížeč informaci o jejich stažení, což může zkreslovat měření.
        * Doporučuje se nastavit hlavičku Timing-Allow-Origin  

 -->
