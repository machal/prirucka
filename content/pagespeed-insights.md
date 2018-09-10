# PageSpeed Insights: Podrobný průvodce nástrojem pro měření rychlosti

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs) je asi nejznámější nástroj pro analýzu rychlosti načítání webů.

Je skvělý pro získání základního přehledu, jak na tom web je. Vytahuje rychlostní ukazatele od reálných uživatelů a porovnává zdrojový kód webu s obecně osvědčenými postupy.

Obsah článku: [Použití](#pouziti) – [Dvě rady](#rady) – [Co ukazuje a proč](#vlastnosti)

<!-- AdSnippet -->

PageSpeed Insights (dále jen PSI) ale také může méně zasvěcené zbytečně stresovat. Hlavní problém je v tom, že řada lidí zde bezhlavě  usiluje o stoprocentní hodnocení, aniž by znala širší kontext problematiky rychlosti načítání webů.


## Použití {#pouziti}

Použití je snadné jako facka. Prostě jděte na adresu nástroje a zadejte tam adresu vašeho webu: [developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs)

Jednoduchost dělá z PSI nástroj pro širokou skupinu uživatelů: od laiků, přes majitele webů, marketéry, designéry až po vývojáře.

Používám ho také – jako jeden z nástrojů pro vstupní analýzu webů klientů, kterým pomáhám zrychlovat weby.

Na PSI je skvělé, že kombinuje dva zdroje dat:

- Pro report *Rychlost stránek* bere čísla [z Chrome UX report](https://developers.google.com/web/tools/chrome-user-experience-report/), což jsou data od návštěvníků vašeho webu, kteří použili Google Chrome.
- *Optimalizace* je klasický syntetický report. Prostě se pustí dva virtuální počítače – desktop (zařízení šířce viewportu 1366px) a mobil (šířka 412px) – a testuje se v nich váš web.

## Dvě základní rady {#rady}

### Neusilujte o stoprocentní hodnocení {#100procent}

Usilovat o hodnocení 100 ze 100 v políčku *Optimalizace* smysl nedává. (I když je takových návodů plný internet.) 

PageSpeed Insights jako „chyby“ hlásí například i „špatně“ nastavené kešování skriptů třetích stran. Jenže ono je to v principu vlastně dobře a navíc s tím nic neuděláte.

Berte prosím PSI je jako stroj, který váš web porovná s obecně osvědčenými postupy. Berte ho jako inspiraci pro odstranění největších chyb, ale stát o stoprocentní hodnocení nemá cenu.

### Testujte adresy všech důležitých vstupních stránek {#vsechny-vstupni-stranky}

Už při zadávání adresy můžete udělat chybu. Jak? Tím, že testujete jen adresu homepage webu.

Mrkněte se do Google Analytics na nejčastější vstupní stránky webu a otestujte je všechny. Pravděpodobně budou vykazovat velmi podobné problémy, ale také narazíte na unikátní potíže, které vám analýza homepage nevyplivne.

Například u e-shopů mám ve zvyku testovat některý z nejnavštěvovanějších detailů produktu, seznam produktů – no a nakonec i tu úvodní stránku.

## Co PSI ukazuje a proč? {#vlastnosti}

![Analýza Smarty.cz v PageSpeed Insights](dist/images/original/pagespeed-insights-numbers-1.jpg)

### 1) Mobilní zařízení / Počítač {#vlastnosti-1}

Je fajn, že PSI testuje na dvou různých zařízeních. Z pohledu rychlosti jsou samozřejmě k problémům náchylnější mobily.

### 2) Rychlost stránek {#vlastnosti-2}

Jak si stojíte s důležitými [rychlostními metrikami](metriky-rychlosti.md)?

- *FCP* je [First Contentful Paint](metriky-rychlosti.md#FCP) – kdy se vašemu uživateli poprvé zobrazí obsah?
- *DCL* je [DOM Content Ready](metriky-rychlosti#DCL) – kdy se v prohlížeči vyskládá DOM?

PSI vám tady řekne, v jaké třetině všech stránek se nachází rychlost vašeho webu. Pokud je to červená, nejhorší možnost – „Low“ – měl by to být spouštěč práce na zlepšení. Samozřejmě důležité také je, jak si vede vaše konkurence. Ale pokud o rychlý web opravdu stojíte, měli byste se zde pohybovat v zelených číslech.

### Proč tam nejsou čísla mého webu? {#nejsou-cisla-webu}

U docela dost velké části webů zatím v Chrome UX reportu [není dost dat](https://developers.google.com/speed/docs/insights/faq#speedscoreunavailable), takže vám je ani PageSpeed Insights nezobrazí. Bohuže netuším, jaká je přesná podmínka zobrazení, ale mám odsledováno, že se to obecně týká webů s menší návštěvností.

Pokud chcete ukázat data pro celou doménu, je to možné. Stačí v políčku pro vložení adresy webu použít operátor `origin:`. Například:

```
origin:https://www.vzhurudolu.cz
```

Hodí se vědět, že [Chrome UX report se aktualizuje jednou za měsíc](https://twitter.com/rick_viscomi/status/1022828987490426880?ref_src=twsrc%5Etfw), kdežto reporty PSI každý den. Je tedy zajímavé se na data od uživatelů chodit koukat sem.

### 3) Optimalizace {#vlastnosti-3}

Jak si web stojí při porovnání s kontrolním seznamem důležitých optimalizací, který má PSI vestavěný? 

Pokud se v problematice neorientujete, zde je rychlý návod na vyhodnocení:

- *zelená barva* – všechno je v pořádku
- *žlutá barva* – na vašem webu může být prostor pro vylepšení, zeptejte se vývojářů
- *červená barva* – na vašem webu je určitě prostor pro vylepšení, zaúkolujte vývojáře

### 4) Distribuce načítání stránky {#vlastnosti-4}

Tohle je důležité a ukazuje to krásy měření na reálných uživatelích (s krásnou zkratkou RUM = Real User Monitoring).

Ve zkratce: Čím méně je tam červené a žluté barvy, tím lépe. Dobře udělané weby mají zelenou alespoň ve dvou třetinách grafu.

Přesněji řečeno: Jaké části uživatelů vašeho webu spadají u obou metrik (FCP i DCL) do tří kategorií: rychlý, průměrný nebo pomalý. Když to píšu, považuje se za rychlý FCP do 1,5 a DCL do 1,9 vteřiny.

A zbývá nám pátý bod. Doporučení k úpravám webu.

![PageSpeed Insights - bod 5](dist/images/original/pagespeed-insights-numbers-2.jpg)


### 5) Optimalizační návrhy {#vlastnosti-5}

Tady se dozvíte, co byste mohli (vy nebo vaši vývojáři) na stránce vylepšit. Opět platí: Pokud zde PSI hlásí prostor k vylepšení, neznamená to, že nějaký nutně musí být.

Pojďme si ale okomentovat některé z návrhů. Schválně vybírám ty, u kterých se stává, že se osvědčené postupy míjejí s praxí na části webů:

- *Eliminujte v obsahu na okrajem kód JavaScript a CSS blokující vykreslení*  
  U JS je ta rada obvykle v pořádku, ale u CSS to bez blokování vykreslení nepůjde.
- *Využijte načítání do mezipaměti prohlížeče*  
  PSI vám právě zde budou hlásit i „špatně“ nastavené kešování na doménách dodavatelů analytických a jiných řešení. Já zde například vídám `https://www.google-analytics.com/analytics.js (2 hodiny)`, což chyba není.
- *Optimalizujte obrázky*  
  Obvykle jsou rady v této sekci na místě, ale může se stát, že jste provedli poctivou analýzu komprese obrázků a aktuální nastavení kvality je pro vás vyhovující.

Shrňme si to:

- PageSpeed Insights používejte hlavně pro občasné ujištění, zda váš web není pomalý.
- Testujte všechny důležité vstupní stránky.
- Pokud jste v červených číslech, je čas zabývat se rychlostí webu.
- Neusilujte o skóre 100 / 100. V praxi je obvykle nedosažitelné. Každá zelená hodnota je skvělý výsledek a značí, že byste měli začít používat [pokročilejší nástroje](rychlost-nastroje.md) jako je Lighthouse nebo WebpageTest.

<!-- AdSnippet -->
