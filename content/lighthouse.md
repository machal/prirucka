# Lighthouse: Nepostradatelná analýza webu od Google

Lighthouse je velmi důležitý nástroj. Chcete vědět proč? Google jeho prostřednictvím totiž radí webařům jak vyzrát na Google.

Používám jej hlavně pro analýzu rychlosti, ale o webu umí podat daleko barevnější obrázek. Pokrývá přístupnost, SEO a další oblasti.

<!-- AdSnippet -->

Velmi jej doporučuji používat a nejlépe to dělat pravidelně a automaticky.

Obsah článku: [Proč jej používat?](#proc) – [Co umí analyzovat](#co-umi) – [Jak jej používat](#jak-pouzivat) – [Pravidelné spouštění](#pravidelne)

## Proč jej používat? {#proc}

Lighthouse vám pomůže najít problémy na úrovni designu a frontendového kódu, které nějakým způsobem škodí nebo mohou škodit přísunu uživatelů na web a jeho použitelnosti.

Provozovatel největšího světového vyhledavače jej připravil pravděpodobně proto, aby webmasterům pomohl s odstraňováním chyb, které jim mohou snižovat návštěvnost nebo zhoršovat spokojenost návštěvníků.

<!-- AdSnippet -->

Nejde tak do hloubky jako propracovanější nástroje, které analyzují jednotlivé oblasti. Ale je snadno spustitelný (a to i automaticky) a zdarma.


## Co umí analyzovat? {#co-umi}

*TODO ukázkový report*

1. *Performance* – rychlost načítání a výkon při vykreslování. Pro mě velmi důležité.
2. *Progressive Web App* – jak se web drží doporučení pro [progresivní webové aplikace](weby-vs-aplikace.md#progresivni-webove-aplikace).
3. *Best Practices* – guláš osvědčených postupů mimo uvedené škatulky, například k bezpečnosti (použití  [HTTPS](https.md)) nebo použití zastaralých technologií (Web SQL).
4. *Accessibility* – [přístupnost webu](https://www.vzhurudolu.cz/pristupnost).
5. *SEO* – technická připravenost webu pro indexování vyhledavači.

## Jak jej používat? {#jak-pouzivat}

Ligthouse je balíček pro Node.js, proto je způsobů jeho použítí fakt hodně:

- Online verze – [developers.google.com/web/tools/lighthouse/run](https://developers.google.com/web/tools/lighthouse/run) ([ukázkový výstup](https://builder-dot-lighthouse-ci.appspot.com/report.1536812843174.html)).
- Chrome DevTools – stačí otevřít developerské nástroje Chrome (Ctrl/Cmd+Alt+I) a jít do záložky „Audits“.
- V dalších nástrojích – výstupy „majáku“ jsou dostupné z testů aplikací jako WebpageTest.org, SpeedCurve a dalších. K dispozici je [seznam integrací](https://github.com/GoogleChrome/lighthouse#lighthouse-integrations).
- Příkazová řádka – díky ní vděčí za rozšíření: [github.com/GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse).


## Jak funguje? {#jak}

Lighthouse se ve většině případu použití spouští na vašem počítači a dělá se jen jeden test, takže se výsledky testů mohou lišit podle momentálního vytížení. Hlavně v oblasti *Performance*.

**TODO obrázek**

V testech jsou na výběr dvě zařízení:

- *Desktop* – váš aktuální Chrome v aktuálním nastavení rozlišení, rychlosti připojení atd.
- *Mobile* – ve výchozím nastavení jde o „Emulated Nexus 5X“ se simulovaným zpomalením procesoru (4×) a zpomalením rychlosti připojení, které odpovídá zhruba „3G fast“ z nastavení WebpageTest.org (150 ms TCP RTT, 1,638.4 Kbps throughput).

Se zajímavou možností přišel Lighthouse [ve verzi 3]( https://developers.google.com/web/updates/2018/05/lighthouse3) v nastavení zpomalení – *Throttling*:

- *Simulated* je rychlejší test, navíc lépe porovnatelný. Znamená to, že se web otestuje na vašem aktuálním připojení a výkonu procesoru a čísla se následně přepočítají. Tohle je myslím lepší používat.
- *Applied* je přesnější, ale pomalý test. Připojení a procesor se uměle zpomalí a pak teprve Lighthouse operuje. Jde o původní metodu.

No a poslední možnost – *Clear storage* – před testy smaže obsah lokálních uložišť, aby měl Lighthouse prožitek úplně nového uživatele.

## Pravidelné spouštění {#pravidelne}

*TODO*

- Příkazová řádka
- Nástroje jako SpeedCurve, Etnetera něco…

## Shrnutí

- Používejte Lighthouse! 
- Pouštějte jej pravidelně a nejlépe automaticky.
- Držte se jeho doporučení, jsou rozumná.

<!-- AdSnippet -->
