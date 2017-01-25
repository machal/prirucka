# Blanka a další nástroje pro dokumentovou základnu webu

Při práci na dokumentu, nevyhnutelném základu každého webu se může hodit pár nástrojů. Předpokládejme, že máme hotový obsah ve strukturovaném HTML. Co teď?

Překvapivě vás teď někomu představím. Seznamte se s Blankou. Pro klid manželství musím ovšem rychle dodat, kdo to vlastně je. Žádný tunel. Nic většího než vlastní sada nástrojů pro stavbu základů každého webu. Pro mě třetí vrstva stavby hned po výchozích stylech prohlížečů a Normalize.css. Dám sem rovnou odkaz, ale nebojte, ještě to pořádně rozebereme. [github.com/machal/blanka-html](https://github.com/machal/blanka-html)

## Blanka HTML: výchozí šablona prázdného dokumentu

Blanka HTML je má výchozí šablona pro dokument.

Univerzálnost vyžaduje minimalismus. Pokud chci mít základní kousek HTML a CSS jednotný opravdu pro všechny projekty, nesmí být moc složitý. Nechci přemýšlet, kterou řádku kódu pro nový projekt převezmu a která je tam zbytečně. 

V Blance toho opravdu moc není. Věřím ale, že vše co tam je, užijete téměř pro každý váš projekt. Například:

- Správný typ dokumentu, nastavený jazyk (`lang="cs"`) a kódování znaků (`charset="utf-8"`).
- Detekce starších Explorerů (`class="old-ie"`) nebo situace, kdy ve stránce nefunguje Javascript (`class="no-js"`).
- Správná [meta značka pro viewport](viewport-meta.md).
- Ošetřená je základní přístupnost: prvek `<main>` umožňuje uživatelům čtečky JAWS snadný skok na obsah dokumentu. Nezapomínáme na WAI-ARIA atribut (`role="main"`). 

Další věci se dozvíte přímo z kódu `blanka.html`. [github.com/machal/blanka-html](https://github.com/machal/blanka-html/blob/master/blanka.html)

### HTML Boilerplate: až moc robustní alternativa

Pokud byste raději robustní řešení, zajímejte se o projekt HTML5 Boilerplate. Pro mě není. Upřednostňuji jednoduché řešení nad robustním, ze kterého musím u každého projektu mnoho věcí odebírat. Jde ale rozhodně o zajímavý zdroj vzdělávání a inspirace. [html5boilerplate.com](https://html5boilerplate.com)

Více k HTML základům nepotřebujeme. Nuda? U stylů to ale bude vrstevnatější, nebojte.

## A teď CSS: výchozí styly prohlížečů

Často se zapomíná, že ještě než napíšeme první řádku CSS, náš dokument už nějaké styly obsahuje. Prohlížeč prostě musí mít nějaká zadní vrátka, kterými vejde škodolibý skřítek a klientův vymazlený *dizájn* z wordovského dokumentu pokazí ohyzdným Times New Roman s modrými odkazy, že ano? 

Prví vrstva vzhledu, která se aplikuje na váš dokument, jsou výchozí styly prohlížečů. Ve vývojářských nástrojích prohlížeče je v CSS kaskádě vidíte jako „user agent stylesheet“. Nevidíte? Doporučím vám si jejich zobrazování zapnout. Vlastnosti stylů totiž mají ošklivou vlastnost. V různých prohlížečích mohou mít různá nastavení. Nejprve je musíme sjednotit.

### Proč nepoužívat resetování?

Svého času se v prvním kroku technické práce prakticky na každém webu používal CSS Reset od Erika Meyera. Ten prostě vynuloval všechny vnější i vnitřní okraje prvku, čímž jsme získali konzistentně ošklivý Time New Roman a modré odkazy ve všech prohlížečích. [meyerweb.com/eric/tools/css/reset/](http://meyerweb.com/eric/tools/css/reset/)

Nevýhoda resetovacího přístupu je – to byste nečekali – v onom *resetování*. Když totiž nějaké vlastnosti „resetujeme“, musíme je v druhém kroku také „setovat“. Nastavit na vysněné hodnoty. Co když nám ale vyhovovalo původní nastavení prohlížečů? To jsme pak udělali dva zbytečné kroky a práci na webu si zkomplikovali. Hned na startu.

## Normalize.css: sjednocení stylů prohlížečů

Normalize zasahuje jen tam, kde jsou ve výchozích stylech prohlížečů nějaké rozdíly. *Normalizace* stylů. To je ale spojení, které pro nás, kteří v Česku a na Slovensku pamatujeme komunismus, nemá zrovna hezké emoční zabarvení. Takže pojďme mluvit o *sjednocení*. První krok je tedy přidat k dokumentu Normalize.css. [necolas.github.io/normalize.css](https://necolas.github.io/normalize.css/)

Díky sjednocení, druhé vrstvě stylů dokumentu, máme výchozí stylování sjednocené napříč prohlížeči. V další vrstvě si konečně pojďme něco nastavit.

## Blanka CSS: typografické základna

Blanka CSS je třetí vrstva stavby webu a má dva hlavní účely:

- *Sjednocuje vzhled*. Normalize.css ladí vzhled napříč prohlížeči, už ale neřeší jednodnost vzhledu uvnitř dokumentu. Třeba levé odsazení u prků `ul`, `ol` nebo `dd`. 
- *Nastavuje typografický rytmus*. Asi jste si všimli, že mám rád jednoduchost. Aby se mě s dokumentem dobře pracovalo, mají všechny typografické elementy nastavený vnější okraj jen zezdola. Nemusím myslet na horní vnější okraj, nemluvě o vnitřních, které se ve výchozích stylech prohlížečů hojně vyskytují. 

Ve stylové Blance je toho více, ale to už si můžete prohlédnout sami v souboru `blanka.css`. [github.com/machal/blanka-html/](https://github.com/machal/blanka-html/blob/master/blanka.css)

### Reboot: až moc nastavující alternativa

Opět pro zájemce zmíním i složitější alternativu. Bootstrap 4 přichází s vlastní typografickou základnou, které říká Reboot. [vrdl.in/reboot](https://v4-alpha.getbootstrap.com/content/reboot/)

Reboot se mi líbí, ale ne všechna pravidla mám v úmyslu využít na všech svých projektech. Nechci svým projektům už v této fázi vnucovat konkrétní písma, konkrétní typografickou stupnici a výšky řádku. To vše odvisí od zvoleného typografického systému a mělo by se psát na míru projektu. O Rebootu jsem ale psal na Vzhůru dolů, když by vás to zajímalo. [vrdl.cz/blog/53-reboot](http://www.vzhurudolu.cz/blog/53-reboot)

Když už máme jakžtakž vysázený dokument, můžeme k němu začít přidávat vlastní typografická pravidla. Písmové řezy, velikost textů a nadpisů. Vzhled seznamů, citací, tabulek, formulářových prvků… No však je znáte. Nebo neznáte?

## Blanka Type Test

Poslední členka sesterského komanda Blanek vychází právě z toho, že ne všechny HTML elementy musíte znát. Nebo lépe: že si na ně prostě nemusíte vzpomenout a ve stylech je neošetříte.

Kdo snad nezažil situaci, kdy ve stylech počítal úplně se vším — dokud mu klient přes redakční systém na web nevložil nečekanou kombinaci prvků. Která rozbila celý web.

Proto je tu Blanka Type Test, zátěžový test typografie. Je to vlastně dokument obsahující všechny myslitelné i nemyslitelné HTML elementy. V kombinacích co by nás nenapadly. V zanořeních, se kterými jsme nepočítali. V rozměrech a délkách, jejichž představa by nás budila ze sna.

Prostě si stáhněte dokument, přidejte si k němu vlastní CSS a zbavte se zlých snů. Podívejte se tentokrát na soubor `blanka-type-test.cz.html`. [github.com/machal/blanka-html/](https://github.com/machal/blanka-html/blob/master/blanka-type-test.cz.html)


