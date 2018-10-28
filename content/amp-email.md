# AMPHTML Email: Revoluce ve tvorbě e-mailů se (možná) blíží

AMPHTML Email je podmnožina AMP HTML, která slouží ke tvorbě e-mailů. Zatím jde o zkušební verzi technologie a jen pro Gmail, ale v případě rozšíření by to byla opravdová revoluce. 

Představte si totiž, že byste v e-mailu mohli používat komponenty uživatelského rozhraní jako je akordeón (`<amp-accordion>`) nebo obrázkový lightbox (`<amp-image-lightbox>`).

Z pohledu uživatele by pak bylo možné například:

- přihlásit se na konferenci
- objednat se k lékaři
- vyplnit krátký dotazník

<!-- AdSnippet -->

Ve testovacím režimu běží spolupráce autorů Gmailu se značkami jako je Pinterest, Booking.com and Doodle.

## Proč AMP? 

Google ve zprávě představující e-mailovou odnož AMP píše, že AMP začal jako snaha pomoci vydavatelům, ale teď prý jde o jednu z nejlepších cest jak vybudovat interaktivní weby.

Klasický AMP využívá efektu *něco za něco* - technologie vás omezí při tvorbě (např. zákazem vlastního Javascriptu), ale za to vám dá něco, co při běžné tvorbě webu nemáte k dispozici (např. hotové komponenty uživatelského rozhraní).  A zrovna tohle se hodí také e-mailovým platformám - když nebude muset řešit velké množství variant (a možných chyb) ve vašem Javascriptovém kódu, rády tvůrcům poskytnou proprierární funkce navíc.

Pro Google a jeho Gmail navíc už nebude tak moc složité obstarat distribuci kódu propritárních komponent, když už je používají ve vyhledávání.

Více se dočtete v článku „Bringing the power of AMP to Gmail“ na hlavním blogu Google. [blog.google/products/g-suite/bringing-power-amp-gmail](https://www.blog.google/products/g-suite/bringing-power-amp-gmail/)

## Rozšíří se to i mimo Gmail?

Těžko říct. Pozice Google by mohla napovídat, že ano. Na druhou stranu – pozice Gmailu mezi platformami pro e-maily není tak jednoznačná jako pozice Chrome mezi prohlížeči. 

Vy, kteří jste v poslední době měli tu *čest* kódovat nějaký HTML e-mail, navíc víte, že zde panuje naprostý *punk* a nejednotnost podpory moderních technologií. Pokud vím, chybí zde silné standardizační hnutí a každá platforma si to tak nějak *pytlíkuje* po svém.

## Kritika

### TechCrunch: „Dochází nám snad záložky v prohlížeči?“

Interaktivitu v e-mailu nepotřebujeme. Je užitečné, že máme *říkání* věcí v e-mailu oddělené od *dělání* věcí ve webech a aplikacích. „Dochází nám snad záložky v prohlížeči, že chce Google slučovat tyto dva kontexty?“ ptá se vtipně Devin Coldewey v „AMP for email is a terrible idea“ na TechCrunch.

V určitých ohledech má pravdu, ale osobně neočekávám rozvoj chatování, přenosu videa, složitějšího nakupování nebo dalších komplexních interakcí uvnitř e-mailu. Ono to *dělání* věcí je skříň s mnoha šuplíky. Akce typu rychlá objednávka nebo filtrování obsahu patří do šuplíku, který naopak v e-mailu smysl má – rychlá a jednoduchá interakce na zákadě doručeného obsahu.

<!-- AdSnippet -->

Dále se v článku argumentuje bohužel opakováním klišé „Google chce vlastnit a kontrolovat další náš obsah“. Ale i v tomto bodě přichází se zajímavým postřehem – interaktivní e-mail bude díky AMP možné obohacovat daleko přesnějšími měřeními chování uživatelů a následným hojnějším servírováním a přesnějším cílením reklam. [tcrn.ch/2o49P24](https://techcrunch.com/2018/02/13/amp-for-email-is-a-terrible-idea/)

### Litmus: Marketéři se těší, ale AMP taky přinese nové problémy

Jaina Mistry zase na blogu Litmusu píše. Uvádí například tyhle důvody:

1. Exkluzivita pro Gmail, chybějící podpora dalších poskytovatelů. To je asi jasné, vzhledem k tomu, že technologie se teprve rodí a to hlavně v týmu pro vývoj Gmailu. Podobně jako u AMP pro weby ale očekávám relativně rychlé šíření dál.
2. Nejasný způsob měření interaktivity. Tradiční metody měření e-mailů interaktivitu (jako výběr položky z karuselu) moc neumí. Ale nemyslím si, že by autoři AMP for e-mail byli tak hloupí a nechali tady marketérům nepopsaný list.
3. Aktualizace e-mailů po odeslání. To je velmi zajímavý postřeh a opravdu to problém být může. Příklad: Hledám něco v nabídce o Booking.com z minulého týdne. Jenže obsah e-mailu se mezitím změnil. Bude velmi záležet, jak s tím budou autoři e-mailů pracovat.

Více najdete v článku „Marketers Can’t Wait to Use AMP for Email, But Here’s What Will Be Holding Them Back“. [vrdl.in/amplitmus](https://litmus.com/blog/marketers-cant-wait-to-use-amp-for-email-but-heres-what-will-be-holding-them-back)

## Technicky

Minimální HTML je velmi podobné svému sourozenci u klasického AMP:

```html
<!doctype html>
<html ⚡4email>
<head>
  <meta charset="utf-8">
  <style amp4email-boilerplate>body{visibility:hidden}</style>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
</head>
<body>
Hello, world.
</body>
</html>
```

Dále tady například platí:

- Vlastní styly do `<style amp-custom>`. Podobně jako u běžného AMP nesmějí být větší než 50 kB. Platí stejná omezení (zakázané `!important` a omezené animace). Každý e-mailový klient navíc přidává vlastní a vy víte, že Gmail jich má požehnaně.
- Otimální šířka layoutu je `800px` nebo méně. Autoři upozorňují, že širší obsah se může v některých e-mailových klientech oříznout.
- E-mailová verze AMP nebude podporovat vlastní Javascript, i kdyby to rodičovská technologie umožnila.
- Pokročilé trackování příjemců e-mailů jako na webech – například pomocí `<amp-analytics>` možné nebude. Zůstaneme u klasického měřícího pixelu, známého z HTML e-mailů.

### Co zpětná kompatibilita?

Nebojte, kompatibilita je zajištěná. E-mail ve formážu AMP může být odesílán v jednom balíčku spolu s již existujícím formáty. Jde o MIME typ  `text/x-amp-html`, který pošlete vedle `text/html` a `text/plain` pod rodičovským typem `multipart/alternative`.

A co odpovídání? Klient, který „AMPHTML Email“ zvládá by měl v odpovědi nebo při přeposlání odmazat AMP část. Je zde proto opravu důležité, aby existovala alternativa v HTML nebo čistém textu.

Více najdete ve specifikaci „AMPHTML email“ [ampproject.org/docs/interaction_dynamic/amp-email-format](https://www.ampproject.org/docs/interaction_dynamic/amp-email-format)

<!-- AdSnippet -->
