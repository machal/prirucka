# Mřížka účaří (Baseline Grid)

Layout vysázený v pravidelné vodorovné mřížce asi znáte, protože jej velmi zpopularizoval framework Bootstrap. Mřížka účaří je vlastně totéž ve svislém směru. Je to svislá mřížka, jinak též typografický rytmus.

Mezi webaři je často diskutována a já se vám tady bez mučení přiznám, že patřím do skupiny, která její použití považuje za zbytečnou komplikaci.

![Baseline Grid](dist/images/original/baseline-grid.jpg)

*Obrázek: Mřížku účaří na obrázku vidíte jako šedivé vodorovné čáry.  Zpopularizoval ji (na tehdejší dobu skvělý) framework pro tvorbu layoutu Blueprint. To ještě webdesign nebyl tak daleko od tištěných médií jako dnes. [blueprintcss.org](http://blueprintcss.org/)*

Mřížku účaří jsme opět zdědili z tištěných médií. Hlavně z novin, kde zaručuje, že na nekvalitním papíře nebudou do prostoru mezi řádky prosvítat texty z druhé strany, což zlepšuje čitelnost.

## Responzivní webové prostředí účaří nepřeje

Z tisku také víme, že text vysázený v mřížce účaří se lépe čte. Ale na webu je těžké toho dosáhnout: máme tady různé fonty, různě vykreslované na různých platformách. Co víc, do textu na webu vkládáme média typu obrázků a videí. A k tomu ještě externí dokumenty vkládané jako SVG nebo do `<iframe>`. 

Na webu používáme pružné rozvržení stránky. A jako na potvoru se web zobrazuje v různě velkých obrazovkách. 

Představte si, že jsou vaše vkládané elementy navržené tak, že je nutné ve všech šířkách okna zachovat jejich poměr stran. To je velmi obvyklé, ale znamená to, že při zmenšení okna musíte buď porušit poměr stran vkládaného elementu nebo účaří.

Nemyslím, že trvat na přísném dodržování mřížky účaří je v efektivních lidských silách. 

Je fajn účaří dodržovat v místech, kde spolu bezprostředně ve dvou sloupcích sousedí dva texty. Nebo v blocích s textem. Na stránce plné vkládaných médií nebo ovládacích prvků ale osobně dogmatické dodržování typografické mřížky vzdávám. 

