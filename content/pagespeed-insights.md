# PageSpeed Insights: Kompletní průvodce testem rychlosti webu

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs) (PSI) od Google je asi nejznámější nástroj pro testování a analýzu rychlosti webů.

<figure>
<img src="../dist/images/original/pagespeed-insights.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Obrázek: Skóre od PSI je velmi dobrý ukazatel rychlosti. V textu se ale dozvíte, co za ním je a jak nástroj používat*
</figcaption>
</figure>

Na testeru PageSpeed Insights je skvělé, že kombinuje dva důležité pohledy na rychlost webu:

* Syntetická měření počítačem.
* Data od skutečných uživatelů.

Nástroj vám také rovnou nahlásí největší příležitosti, které na stránce našel a jejichž odstranění vám vylepší hodnocení a ve výsledku samozřejmě zrychlí web. K tomu se ještě dostaneme.

Teď ale šup na testování:

→ [developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs)

V dalším textu se vám pokusím pomoci s interpretací výsledků.

## Celkové skóre

PSI vám tady barvou nahlásí, jak si stojíte.

<figure>
<img src="../dist/images/original/pagespeed-insights.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Obrázek: Skóre rychlosti. Zelená je super, oranžová ujde, červená znamená, že je potřeba se rychlosti webu věnovat. Výsledky pod dvacet bodů by měly spouštět rychlostní paniku*
</figcaption>
</figure>

Zajímavé je samozřejmě také konkrétní číslo, které vám nástroj sdělí. Ale taky očekávejte výkyvy v rozsahu deseti procent i při měřeních vzdálených jen minuty od sebe. Nástroj je samozřejmě závislý na vytížení vašeho serveru a sítě.

Samozřejmě je také důležité, jak si vede vaše konkurence. Ale pokud o rychlý web opravdu stojíte, měli byste se zde prostě u klíčových stránek pohybovat v zelených číslech.

## Data pole aneb rychlost u skutečných uživatelů

Jde o metriky od skutečných uživatelů vašeho webu. Alespoň těch, kteří používají Google Chrome. Zdrojová databáze se jmenuje [Chrome UX Report](https://developers.google.com/web/tools/chrome-user-experience-report/), pokud by vás to zajímalo. A mělo by zajímat.

<figure>
<img src="../dist/images/original/pagespeed-insights.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Obrázek: „Data pole“, metriky přímo od uživatelů Chrome a jejich shrnutí pro celou doménu v „Origin Summary“*
</figcaption>
</figure>

Tohle je důležité a ukazuje to krásy měření na reálných uživatelích (s nádhernou zkratkou RUM = Real User Monitoring).

Vídíme zde distribuci uživatelů pro dvě [rychlostní metriky](metriky-rychlost.md):

1. *První vykreslení obsahu*  
[First Contentful Paint](metriky-rychlost.md#FCP) (FCP) – kdy se vašemu uživateli poprvé zobrazí obsah?
2. *Prodleva prvního vstupu*  
First Input Delay (FID) – za jak dlouho od prvního kliku stránka zareaguje?

Graf v obrázku ukazuje jaké části uživatelů vašeho webu spadají u obou metrik (FCP i FID) do tří kategorií zastupujících rychlý, průměrný nebo pomalý uživatelský prožitek. Když to píšu, [považuje se za rychlý](https://developers.google.com/speed/docs/insights/v5/about) FCP do jedné vteřiny a FID do 50 ms.

Jednoduše řečeno: Čím více je tam zelené a méně červené barvy, tím lépe. Dobře udělané weby mají zelenou alespoň ve dvou třetinách obou grafů.

### Neukazuje to výsledky pro vaši stránku?

U velké části stránek se dozvíte, že k nim *„není k dispozici dostatek dat o rychlosti v reálném světě“*. Znamená to, že stránka patří k těm méně navštěvovaným. Těch je většina, ať se s nimi mazlíme jak chceme.

Nás zajímá ale to, co si Google myslí o rychlosti celého webu – „Origin Summary“, nebo také „Souhrn pro zdroj“.

### „Šmarjá, náš web je pomalý!“

Pravděpodobně se v přehledu „Data pole“ dozvíte, že váš web patří mezi ty „pomalé“. Netřeba panikařit, takových webů je většina. Nechci to ale snižovat – nějaká ta optimalizace rychlosti webu s červenými čísly rozhodně prospěje.

Při psaní článku přemýšlím, které české nebo slovenské weby mají v přehledu uživatelského dojmu zelenou barvu. A přemýšlím marně. Pokud tedy nějaký větší znáte, napište mi, prosím.

Hodí se vědět, že [Chrome UX report se aktualizuje jednou za měsíc](https://twitter.com/rick_viscomi/status/1022828987490426880?ref_src=twsrc%5Etfw), kdežto reporty PSI každý den. Je tedy užitečné se na data od uživatelů chodit koukat sem.

## Laboratorní data

Nebo také měření strojem, která [od listopadu 2018](https://webmasters.googleblog.com/2018/11/pagespeed-insights-now-powered-by.html) tester PSI provádí vynikajícím nástrojem [Lighthouse](lighthouse.md). 

Měření strojem? Prostě se pustí dva virtuální počítače – desktop (zařízení šířce viewportu 1366 px) a mobil (šířka 412 px) – a testuje se v nich váš web. 

<figure>
<img src="../dist/images/original/pagespeed-insights.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Obrázek: Laboratorní data ze syntetických měření počítačem. Neukazují obrázek o rychlosti v cílové skupině, ale za to jsou podrobnější*
</figcaption>
</figure>

Jak si stojíte s důležitými [rychlostními metrikami](metriky-rychlost.md)?

1. *První vykreslení obsahu*  
[First Contentful Paint](metriky-rychlost.md#FCP) (FCP) – kdy se vašemu uživateli poprvé nějaký obsahový text nebo obrázek?
2. *První smysluplné vykreslení*  
First Meaningful Paint (FMP) – kdy začíná být viditelný primární obsah stránky?
3. *Index rychlosti*  
[Speed Index](metriky-rychlost.md#SpeedIndex) (SI) – kdy se vykreslí celá obrazovka nad zlomem stránky?
4. *První nečinnost procesoru
*First CPU Idle (FCI) – kdy přestane hlavní proces pracovat a je možné zpracovat vstupy od uživatele?
5. *Doba do interaktivity *  
Time to Interactive (TTI) – kdy začne být stránka plně interaktivní?
6. *Odhadovaná latence vstupu*  
Jak rychle bude stránka reagovat na vstup uživatele?

[Ideální hodnoty metrik](https://www.vzhurudolu.cz/blog/112-metriky-cile) jsem zkoumal ve zvláštním textu na blogu.

## Optimalizační návrhy: Příležitosti a diagnostika

<figure>
<img src="../dist/images/original/pagespeed-insights.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Obrázek: Příležitosti ke zrychlení stránky. Většinou se to vyplatí poslechnout*
</figcaption>
</figure>

Tady se dozvíte, co byste mohli (vy nebo vaši vývojáři) na stránce vylepšit.

Po začínající až středně pokročilé optimalizátory to je skvělý zdroj. Dokud není vyřešená většina z uvedených doporučení, nemá smysl se poohlížet po jiných nástrojích.

Pojďme si ale okomentovat některé z návrhů. Schválně vybírám ty, u kterých se stává, že se osvědčené postupy míjejí s praxí na části webů:

* *Eliminujte zdroje, které blokují vykreslení*
U JavaScriptu je ta rada obvykle v pořádku, ale u CSS to bez blokování vykreslení nepůjde. PSI to ale radí co nejvíce omezit, což je správné.
* *Statické podklady zobrazujte s efektivními zásadami pro mezipaměť*
PSI vám právě zde budou hlásit i „špatně“ nastavené kešování na doménách dodavatelů analytických a jiných řešení. Já zde například vídám `https://www.google-analytics.com/analytics.js (2 hodiny)`, což chyba není.
* *Používejte efektivní kódování obrázků*
Obvykle jsou rady v této sekci na místě, ale může se stát, že jste provedli poctivou analýzu komprese obrázků a aktuální nastavení kvality je pro vás vyhovující.

Už jsme na konci. Ještě malá připomínka k časté chybě při testování webů.

## „Homepage slepota“: Co lze pokazit ještě než začnete testovat {#slepota}

Už při zadávání adresy můžete udělat chybu. Jak? Tím, že testujete jen adresu homepage webu.

Mrkněte se do Google Analytics na nejčastější vstupní stránky webu a otestujte je všechny. Pravděpodobně budou vykazovat velmi podobné problémy, ale také narazíte na unikátní potíže, které vám analýza homepage nevyplivne.

Měření rychlosti se týká stránek, nikoliv celého webu. Přílišné zaměření na – často velmi málo důležitou – domovskou stránku je tak rozšířené, že jsem mu začal říkal „homepage slepota“.

Testujte prostě adresy všech důležitých vstupních stránek. U Vzhůru dolů jde například o tyhle unikátní stránky nebo zástupce typových šablon:

```text
https://www.vzhurudolu.cz/
https://www.vzhurudolu.cz/prirucka/weby-watchos
https://www.vzhurudolu.cz/blog/131-skoleni-6-duvodu
https://www.vzhurudolu.cz/kurzy
https://www.vzhurudolu.cz/kurzy/rychlost-nacitani
https://www.vzhurudolu.cz/kniha-responzivni-design
```

Například u e-shopů mám ve zvyku testovat některý z nejnavštěvovanějších detailů produktu, seznam produktů – no a nakonec i tu úvodní stránku.

Shrňme si, co jste se (doufejme) dozvěděli o testování rychlosti webů v PageSpeed Insights:

* Používejte PageSpeed Insights. A dělejte to často.
* Testujte všechny důležité vstupní stránky.
* Pokud jste v červených číslech, je čas zabývat se rychlostí webu.
* Každá zelená hodnota je skvělý výsledek.
* Dlouhodobě sledujte hlavně pokroky v ukazatelích od reálných uživatelů v sekci „Data pole“.
* Poslouchejte rady v sekci Příležitosti a Diagnostika, jsou velmi rozumné.
