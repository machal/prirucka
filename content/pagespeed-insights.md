# PageSpeed Insights: Co vám řeknou, kde tahají za nos a co vám už neřeknou

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs) (PSI) je asi nejznámější nástroj pro analýzu rychlosti načítání webů. 

Je skvělý pro získání základního přehledu, jak si web stojí. Je ale dobré vědět, že pro plnohodnotnou a dlouhodobou analýzu je nedostatečný.

Obsah článku: [Použití](#pouziti) – [Jak funguje](#fungovani) – [Co ukazuje a proč](#vlastnosti)

<!-- AdSnippet -->

A často vás může zbytečně stresovat. Stručně řečno: Je v principu špatně usilovat o stoprocentní hodnocení a nevyužít výstupů z jiných nástrojů.

## Použití {#pouziti}

Použití je snadné jako facka. Prostě jděte na adresu nástroje a zadejte tam adresu vašeho webu: [developers.google.com/speed/pagespeed/insights](https://developers.google.com/speed/pagespeed/insights/?hl=cs)

Jednoduchost použití z něj dělá nástroj pro širokou skupinu uživatelů: od laiků, přes majitele webů, marketéry, designéry až po vývojáře.

Používám ho také – jako jeden z nástrojů pro vstupní analýzu webů klientů, kterým pomáhám zrychlovat weby. Skvělé je, že kromě skóre ukazuje i seznam problémů k vyřešení. 

## Jak funguje {#fungovani}

Učité limity jsou vidět už ze způsobu fungování PSI:

1. Dělá syntetickou analýzu – netestuje se tedy skupina reálných uživatelů. 
2. Provádí se dva testy na počítači. Prohlížeč se spustí ve dvou režimech – desktop a mobil. Nastavení testů je jen jedno *TODO*. 
3. Testuje se jen *v aktuálním okamžiku*. Zkreslení zde může nastat momentálními  výkonnostními problémy serveru nebo naopak neobvykle dobrými podmínkami (například bez návštěvnosti v noci), které neodpovídají reálné uživatelské zkušenosti.

Tady je vidět onen zkreslený pohled – ze široké škály možných časů použití webu, rozlišení obrazovky, rychlostí načítání a výkonu zařízení uživatelů, vidíte jen malinkou a v mnoha směrech optimistickou výseč.

### Testujte adresy všech důležitých vstupních stránek {#vlastnost-vstupni-stranky}

Tahle poznámka je trochu mimochodem, ale musím to zmínit: Už při zadávání adresy ale můžete udělat chybu. Jak? Tím, že testujete jen adresu homepage webu. Mrkněte se do Google Analytics na nejčastější vstupní stránky webu a otestujte je všechny. Pravděpodobně budou vykazovat velmi podobné problémy, ale také narazíte na unikátní potíže, které vám analýza homepage nevyplivne.

## Co ukazuje a proč? {#vlastnosti}

*TODO obrázek s pěti body: analýza školení VD.cz*

### 1) Mobilní zařízení / Počítač {#vlastnosti-1}

Je fajn, že PSI testuje na dvou různých zařízeních. Z pohledu rychlosti jsou samozřejmě k problémům náchylnější mobily.

### 2) Rychlost {#vlastnosti-2}

Jak si stojíte s důležitými [rychlostními metrikami](metriky-rychlosti.md)?

- FCP je First Contentful Paint – kdy se vašemu uživateli poprvé zobrazí obsah?
- DCL je Dom Content Ready – kdy se v prohlížeči vyskládá DOM?

PSI vám tady řekne, v jaké třetině všech stránek se nachází rychlost vašeho webu. Pokud je to červená, nejhorší možnost – „Low“ – měl by to být spouštěč práce na zlepšení. Samozřejmě důležité také je, jak si vede vaše konkurence a pokud o rychlý web opravdu stojíte, měli byste se zde pohybovat v zelených číslech.

*TODO: Jaká jsou dobrá čísla?*

### 3) Optimalizace {#vlastnosti-3}

Jak si web stojí při porovnání s checklistem důležitých optimalizací, který má PSI vestavěný?

Opět platí, že červená čísla by měla spouštět nějakou aktivitu směřující k nápravě. 

Na druhou stranu – usilovat o 100 % v hodnocení tady smysl nedává. PageSpeed Insights jako „chyby“ hlásí například i „špatně“ nastavené kešování skriptů třetích stran. Jenže ono je to v principu vlastně dobře a navíc s tím nic neuděláte.


*TODO obrázek optimalizace - kešování*

### 4) Distribuce načítání stránky {#vlastnosti-4}

*TODO*

### 5) Návrhy k odstranění {#vlastnosti-5}

*TODO*


Shrňme si to:

- Pokud nemáte lepší nástroje, PageSpeed Insights používejte pro občasné ujištění, zda váš web není pomalý.
- Testujte všechny důležité vstupní stránky.
- Pokud jste v červených číslech, je čas zabývat se rychlostí webu.
- V poli Optimalizace neusilujte o skóre 100 / 100. V praxi je obvykle nedosažitelné. Takových 70-80 bodů je skvělý výsledek a značí, že byste měli začít používat pokročilejší nástroje jakko je Lighthouse nebo WebpageTest a metody optimalizace.

<!-- AdSnippet -->
