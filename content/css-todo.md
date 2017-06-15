# TODO komentáře: úkoly v CSS kódu

Občas je potřeba kód opravit rychle, jindy zase z drobné úpravy vyjde potřeba vytvoření velkého úkolu. Nežijeme prostě v ideálním světě a nemáme nekonečné množství času a pozornosti.

Jak zařídit, aby se na potřebu pozdější úpravy kódu nezapomnělo?
 
Možná znáte značky pro komentáře typu `TODO`, `FIXME` nebo `HACK`. Říká se jim [Codetags](https://en.wikipedia.org/wiki/Comment_%28computer_programming%29#Tags) nebo prostě štítky v kódu. Slouží k informování čtenáře kódu o potenciálních problémech, které zde předchozí autor vědomě zanechal nebo objevil:
 
- `FIXME`: chyba, kterou je potřeba opravit
- `HACK`: nehezké, rychlé řešení problému
- `TODO`: úkol vyplývající z kódu

## Proč to dělat?

V ideálním světě bychom každou objevenou chybu rovnou opravili, že ano? Proč tedy zanechávat nějaké vzkazy v kódu?

### Nedostatek času teď

Znáte to – plníte úkol, tím, že opravujete problém. Jenže během jeho plnění zjistíte, že se tím systém komplikuje. Přidáte třeba novou modifikaci komponenty a zjistíte, že by bylo potřeba refaktorovat celou komponentu nebo ji dokonce rozdělit na dvě nezávislé.

### Nedostatek znalostí

Bylo by skvělé, když by všichni, kteří kód upravují, měli stejné znalosti a vědomosti. Jenže tak to nikdy není a nebylo. Může se vám stát, že upravujete část, jejímuž kontextu nejlépe rozumí kolega. Vaše úprava sice může fungovat, ale zhorší čitelnost kódu. A vy to víte. Co uděláte? Poprosíte kolegu a revizi 
kódu a v `TODO` komentáři mu vysvětlíte svůj problém.

### Uvolnení kapacity na soustředění

Tohle znáte z každé rozumné metodiky organizace práce. Pokud plním úkol, potřebuji se soustředit a nemůžu zároveň v hlavě držet seznam dalších úkolů. Proto je vždy lepší si vyplývající úkoly někam odložit. Na papír, do aplikace nebo v našem případě přímo do kódu.

### Dostatek času, soustředění a znalostí

Na tohle se často zapomíná a je to důvod, proč úkoly evidovat v systému pro evidenci úkolů (Jira, Trello, Github…) a ty menší také v kódu. I vám se může stát, že naopak máte dostatek času a dostatek znalostí. A jen díky tomu, že problematické části evidujete v kódu, víte o nich a můžete se jim věnovat.

Pokud tedy souhlasíte, že dělat štítky je rozumné, vrhněme se na jejich anatomii. 

 
## Co obsahuje dobrý štítek?
 
- Proč byl vytvořen? 
- Jak problém vyřešit?
- Autora a datum vytvoření.
- Odkaz na úkol v systému, pokud jde o větší problém

Naopak by neměl obsahovat emotivný výlevy a poznámky na adresu kolegů a kolegyň. Píšeme o kódu, nikoliv o jejich autorech, protože chyby děláme úplně všichni.
 
Ukázka:
 
```css 
/*
TODO: V layout systému je nepořádek.
Je zde mnoho duplicit a nejasností. V prvním kroku je potřeba jej pročistit, v druhém zdokumentovat.
https://trello.com/c/MAt1yu75/35-layout
(Jun 15 2017, Martin Michálek)
*/
```
 
To vše ale platí pro situaci, kdy máme CSS kód jakžtakž v pořádku a pod kontrolou. Určitě jste ale někdy spravovali projekt, do jehož CSS kódu bylo nepříjemné se jen podívat, natož v něm něco opravovat. Pak doporučuji převzít koncept TODO.css.
 

## TODO.css

Malý soubor, který umístíte za váš ohromný, nehezký a nepořádný CSS soubor, do kterého prostě z nějakých důvodů nechcete sahat. Právě do `TODO.css` doporučiji dávat všechny hotfixy a úpravy.

S myšlenkou v podobě Shame.css přišel [Harry Roberts](https://csswizardry.com/2013/04/shame-css/). Pojmenování souboru mě ale nepřipadá tak jednoznačné a přímočaré, proto doporučuji `TODO.css`.

Bude se vám hodit ve dvou situacích:

- Na projektu máte kolegy, kteří organizaci CSS nerozumí.
- Hlavní CSS soubor je ve velmi špatném stavu a oprava chyb je komplikovaná nebo vyžaduje konkrétního člověka.
 
TODO.css pak obsahuje seznam úkolů k řešení. Opět je ale nutné správně popisovat

<!-- 
 
TODO
- http://wiki.c2.com/?FixmeComment 
- https://hackernoon.com/never-forget-anything-before-after-and-while-coding-98d187ae4cf1
- https://en.wikipedia.org/wiki/Comment_%28computer_programming%29#Tags
- Node plugin pro vytažení Fixme
http://johnpostlethwait.github.io/fixme/

-->
