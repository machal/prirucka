# Možnosti implementace AMP stránek do webů

Z pohledu vývojářů je několik přístup, jak AMP naimplementovat do současných webů. Liší se samozřejmě náročností, dlouhodobou udržitelností, ale i výhodností pro uživatele.

| Metoda         | Výroba   | Údržba | UX   |
|----------------|----------|--------|------|
| Pluginy        | +        | +      | ?    |
| Extra verze    | +++      | +++    | +    |
| Výjimky v kódu | ++       | ++     | +++  |
| Nejprve AMP    | ?        | ?      | ?    |
| Jen AMP        | ?        | ?      | ?    |

## Pluginy redakčních systémů {#pluginy}

Pokud používáte známé redakční systémy jako je WordPress nebo Drupal, vytvoření AMP stránek pro vás může poměrně efektivní. Jsou zde totiž pluginy, které práci vezmou alespoň částečně za vás:

- AMP for WordPress, [wordpress.org/plugins/amp/](https://wordpress.org/plugins/amp/)
- AMP for Drupal, [drupal.org/project/amp](https://www.drupal.org/project/amp)

Podívejme se blíže na rozšíření do nejrozšířenějšího systému pro správu webů.

### WordPress plugin

Rozšíření si nainstalujete a pak si můžete vybrat, v jakém režimu bude váš WordPress implementovat AMP:

1. *Classic:* Klasický režim, kdy články dostanou AMP verzi automaticky. Je vytvořená zvláštní šablonou, kterou je možné upravovat jen zlehka. Jedn se o jednoduché řešení, ale na vážnou práci s AMP to moc nedoporučuji, protože bude design obou verzí stránek pravděpodobně dost odlišný.
2. *Paired:* Párující režim. Na zvláštní URL adrese vytvoří AMP verzi všech stránek, ale použije se aktuální šablona. Pokud tedy uděláte chybu a AMP verze neprojde validací, jako alternativní řešení je k dispozici běžná verze webu.
3. *Native:* Totéž jaké „paired“, ale neexisují zde zvláštní URL pro AMP verze. Stránka prostě odkazuje sama na sebe. Přepokladem je, že jde o „AMP-only“ řešení, o kterém píšu později.

Jak vidíte, možností máte celou škálu. Dlouhodobě nejudržitelnější je podle mě třetí řešení. Ale volba sakramentsky závisí na tom zda a jak vaše šablona pro WordPress podporuje AMP. Být vámi, velmi se na to při její volbě dívám.

### Ukázky: BellaRose.cz nebo Dotekomanie.cz

*TODO*

## Zvláštní verze webu {#zvlastni-verze}

Po zvláštní AMP verzi webu sáhnou nejspíše ti, kteří z nějakého důvodu nemohou nebo nechtějí sahat do stávajícího webu. 

Důvodů může být více: Je například možné, že vývojářské a designérské zásahy do existujícího webu by ve výsledku byly dražší než vytvoření nové verze. Také se může stát, že na AMP stránkách chcete plnit jiné cílé a že by tedy měly vypadat jinak.

Jde ostatně o původně jediný a nyní převažující způsob tvorby AMP. Jenže, co ušetříte při tvorbě extra verze, propálíte při následné správě webu a více místech.

Vypráví se zde stejný příběh jako v případě takzvaných „m tečka“ webů – zvláštních mobilních verzí fungujících vedle tehdy běžných webů pro desktopové počítače. Autorům poměrně rychle vyřeší problém – poskytnutí obsahu mobilním uživatelům. Jenže záhy díky neefektivitě aktualizací dvou webů zvažují přechod na sjednocující verzi, což je responzivní web.

AMP-First a AMP-Only přístup je ostatně stejné myšlenkové paradigma jako [Mobile-First](mobile-first.md): Udělej jednu verzi tak, že přizpůsobíš řešení nejvíce omezujícímu kontextu. Před lety šlo o mobily, dnes o distribuci obsahu pomocí AMP.

Jak už jste asi pochopili, zvláštní verze webu považuji za fajn dočasné řešení. Efektivita ale týmy požene ke stále většímu sjednocování obou verzí do jedné. 

### Ukázky: Reflex.cz a …

*TODO*

## Výjimky v kódu {#vyjimky}

Tohle je tak trochu hybridní řešení: Vezmete stávající web a pokud zjistíte, že by AMP validací neprošly jen jeho části, upravíte je pomocí výjimek v kódu na serverové straně.

*TODO: ukázky kódu z VD*



## Nejprve AMP (AMP-first)

## Jen AMP (AMP-only)

