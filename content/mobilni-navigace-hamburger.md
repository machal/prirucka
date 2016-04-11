# Jak řešit mobilní navigace a proč potřebujeme hamburgery?

Na mobily se navigace nevejde a tak ji schováme a opatříme nějakým vypínačem. OK, ale vznikly nám díky tomu nějaké problémy. Pojďme si je pojmenovat a povědět si jak to vlastně je s tou ikonou hamburgeru.

## Proč jsme vlastně navigace do ikony neschovávali už dávno?

Dobrá otázka. Odpověď zní: Protože nejsme blbí. Víme, že navigace musí na webech plnit minimálně tři úkoly:

1. *Mapa webu*. Uživatel by měl z navigace snadno pochopit strukturu webu a najít co hledá.
- *Ukazatel* . Uživatel by měl vědět, kde se na mapě aktuálně nachází.
- *Reklama na obsah*. Zájmem provozovatele webu je, aby uživatel nepřišel o nic nového či zajímavého.

Jak dobře plní tyto tři úkoly schovaná navigace? Že je neplní vůbec? Bingo!

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Schováváte vždy navigaci webu do hamburger ikony? A co je na ni tak nedůležitého, že je potřeba ji schovat?</p>&mdash; Martin Michálek (@machal) <a href="https://twitter.com/machal/status/686878575400714240">January 12, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Dobře, pro ideální svět stručných navigací na velkých displejích bychom měli vyřešeno. Jenže tady máme i složité navigace a malé displeje. 

Ach jo, ještě chvilku budete muset číst. :-(

## Navigace na mobilech – jak to tedy řešit?

Předně – pokud jde navigace zobrazit celá, **prostě ji zobrazte celou i na mobilech**. Zní to trochu blbě, jenže svět je plný webů s navigací o čtyřech položkách, které používají hamburger jen proto, že to je *in*. Pokud je rozlišení dostatečně široké, prostě tu pitomou navigaci zobrazte. 

Pokud ji celou zobrazit nedokážete, zvažte jiné návrhové vzory než schování navigace, třeba [ten pro prioritizaci položek](https://css-tricks.com/the-priority-navigation-pattern/).

**Vymyslete navigaci tak, aby byla co nejjednodušší.** Ano, už vymýšlení struktury webu aktivujte [Mobile First](mobile-first.md) režim. Na 27 položek v hlavní navigace a druhou i třetí úroveň prostě zapomeňte. Zachrání vám to kejhák při tvorbě drátěných modelů nebo samotném kreslení vzhledu.

**Navrhněte web tak, jako by tam navigace nebyla.** Je jasné, že na těch nejmenších displejích budeme muset skoro vždy minimálně část navigace schovat. Proto se musíme naučit vymýšlet weby bez ní. Navigační schéma prostě duplikujte v obsahu, do úvodní stránky dejte něco jako mapu webu.

Až pokud žádné z těchto možností nezabrala, volte návrhový vzor s vypínačem navigace. Ano, tomu co přeneseně říkáme *hamburger*. 

*TODO obrázek*

Číst ale nepřestávejte, protože volbou hamburgeru se otevírá nová sada potenciálních průšvihů, které můžete nechtěně napáchat.

## Hamburger a obecně vypínače navigace přidávají další problémy

Ikony jsou obecně problematické v tom, že ty nové uživatelé neznají. Hamburger nový je a situaci nám ještě komplikují operační systémy a nativní aplikace na nich. Ty pro otevření navigace používají různé ikony (hamburger, kebab, masové kuličky…). Myslím si ale, že ikonu pro schování navigace ve webdesignu potřebujeme. Pak je třeba říct, že mnozí lidé dodnes neznají třeba ikony pro play, pause a stop na hudebních přehrávačích. Prostě – s ikonami tenhle problém vždy bude. My jej můžeme postupně odstranit současným používáním ikony s textem. 

Je také dobré v době minimalizmu a flat designu zmínit, že ikonu bez tlačítkového vzhledu lidé ignorují ještě více než ikonu, která vypadá jako tlačítko.

Každá ikona je zjednodušenou abstrakcí toho co aktivuje. V případě hamburgeru je to seznam horizontálních položek. To velmi dobře odpovídá jednoduché navigaci s položkami řazenými pod sebe.  Odpovídá to ale třeba víceúrovňové navigaci nebo bohatému obsahu, na který se dostanete kliknutím na hamburger u Respektu? 

*TODO obrázek dobrý a špatný hamburger*

Prostě – pokud nechceme naše milé uživatele úplně zničit, měli bychom hamburger používat k tomu co skutečně reprezentuje.

## Jenže něco jako hamburger ve webdesignu prostě potřebujeme

Takže – některé weby navigaci zobrazí celou, některé se bez navigace zcela obejdou a některé použijí chytrý navigační vzor jako je prioritizace položek. Zbývá nám tu ale velká množina webů, u kterých se schovávání navigace  nebo její části prostě hodí. Minimálně na opravdu malých displejích, vezměme třeba šířky 240 pixelů. A nějakou ikonu k tomu potřebovat budeme.

Takže ano, hamburger je dobrý! Je dobré ale splnit tyto podmínky:

1. Ikonu nezneužíváme pro typ obsahu, který nepředstavuje.
- Ikonu opatříme popiskem „Menu“. Hlavně u webů, které cílí mimo geekovské kruhy. 
- Navigaci neschováváme na těch šířkách displeje, kde by ještě šla zobrazit celá nebo její podstatná část.
- Zařídíme, aby tlačítko kolem hamburgeru jako tlačítko vypadalo.
