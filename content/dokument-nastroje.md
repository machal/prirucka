# Nástroje pro vyladění dokumentu

Při práci na dokumentu, nevyhnutelném základu každého webu se může hodit pár nástrojů. Předpokládejme, že máme hotový obsah ve strukturovaném HTML. Co teď?

## Blanka HTML: výchozí šablona prázdného dokumentu

Blanka je má výchozí šablona pro HTML dokument.

Univerzálnost vyžaduje minimalismus. Pokud chci mít základní kousek HTML a CSS jednotný opravdu pro všechny projekty, nesmí být moc složitý. Nechci přemýšlet, kterou řádku kódu pro nový projekt převezmu a která je tam zbytečně. 

V Blance toho opravdu moc není. Věřím ale, že vše co tam je, užijete téměř pro každý váš projekt. Například:

- správný typ dokumentu, nastavený jazyk (`lang="en"`) a kódování znaků (`charset="utf-8"`)
- detekce starších Explorerů (`class="old-ie"`) nebo situace, kdy ve stránce nefunguje Javascript (class="no-js")
- správná [meta značka pro viewport](viewport-meta.md)
- ošetřená je základní přístupnost: prvek `<main>` umožňuje uživatelům čtečky JAWS snadný skok na obsah dokumentu, je tam i WAI-ARIA atribut (`role="main"`) 

Další věci se dozvíte přímo ze zdrojáků Blanka HTML. [github.com/machal/blanka-html](https://github.com/machal/blanka-html/blob/master/index.html)

Pokud byste raději robustní řešení, zajímejte se o projekt HTML5 Boilerplate. Pro mě to z výše uvedených důvodů není, ale jde rozhodně o zajímavý zdroj vzdělávání a inspirace. [html5boilerplate.com](https://html5boilerplate.com)

Více k HTML základům nepotřebujeme. Nuda? U stylů to ale bude vrstevnatější, nebojte.

## A teď CSS: výchozí styly prohlížečů

Často se zapomíná, že ještě než napíšeme první řádku CSS, náš dokument už nějaké styly má. Prohlížeč prostě musí mít nějaká zadní vrátka, kterými vejde škodolibý skřítek a dokument vysázený krásnými písmy ve Wordu pokazí ohyzdným Times New Roman s modrými odkazy, že ano? 

Prví vrstva stylů, která se aplikuje na váš dokument, jsou výchozí styly prohlížečů. Ve vývojářských nástrojích je v CSS kaskádě vidíte jako „user agent stylesheet“. Nevidíte? Doporučím vám si jejich zobrazování zapnout. Vlastnosti stylů totiž mají ošklivou vlastnost. V různých prohlížečích mohou mít různá nastavení. 

### Proč nepoužívat resetování?

Svého času se v prvním kroku technické práce prakticky na každém webu používal CSS Reset od Erika Meyera. Ten prostě vynuloval všechny vnější i vnitřní okraje prvku, čímž jsme získali konzistentně ošklivý Time New Roman a modré odkazy ve všech prohlížečích. [meyerweb.com/eric/tools/css/reset/](http://meyerweb.com/eric/tools/css/reset/)

Nevýhoda resetovacího přístupu je – to byste nečekali – v onom *resetování*. Když totiž nějaké vlastnosti „resetujeme“, musíme je v druhém kroku také „setovat“, nastavit na vysněné hodnoty. Co když nám ale vyhovovalo původní nastavení prohlížečů? To jsme pak udělali dva zbytečné kroky a práci na webu si zkomplikovali. Hned na startu.

## Normalize.css: sjednocení stylů prohlížečů

Normalize prostě zasahuje jen tam, kde jsou ve výchozích stylech prohlížečů nějaké rozdíly. Normalizace stylů. To je ale slovo, které v Česku a na Slovensku nemá moc hezké emoční zabarvení, takže pojďme mluvit o *sjednocení*. První krok je tedy přidat k dokumentu Normalize.css. [necolas.github.io/normalize.css](https://necolas.github.io/normalize.css/)

Díky Normalize.css, druhé vrstvě stylů dokumentu, máme výchozí stylování sjednocené napříč prohlížeči. V další vrstvě si konečně pojďme něco nastavit.

## Blanka CSS: typografické základna

Blanka je opět můj vlastní kousek CSS. Je to třetí vrstva achitektury webů a má dva hlavní účely:

- *Sjednocuje vzhled*. Normalize.css sjednocuje vzhled mezi prohlížeči, už ale neřeší jednodnost vzhledu uvnitř dokumentu. Třeba levé odsazení u prků `ul`, `ol` nebo `dd`. 
- *Nastavuje typografický rytmus*. Asi jste si všimli, že mám rád jednoduchost. Aby se mě s dokumentem dobře pracovalo, mají všechny typografické elementy nastavený vnější okraj jen zezdola. Nemusím myslet na horní vnější okraj, nemluvě o vnitřních, které se ve výchozích stylech prohlížečů hojně vyskytují. 

Ve stylové Blance je toho více, ale to už si můžete prohlédnout sami. TODO

Opět pro zájemce zmíním i složitější alternativu. Bootstrap 4 přichází s vlastní typografickou základnou, které říká Reboot. [vrdl.in/reboot](https://v4-alpha.getbootstrap.com/content/reboot/)

Reboot se mi líbí, ale ne všechna pravidla mám v úmyslu využít na všech svých projektech. Psal jsem o něm na Vzhůru dolů, když by vás to  zajímalo. [vrdl.cz/blog/53-reboot](http://www.vzhurudolu.cz/blog/53-reboot)

Když už máme jakžtakž vysázený dokument, můžeme k němu začít přidávat vlastní typografická pravidla. Vlastní písma, velikost textů a nadpisů. Vzhled seznamů, citací, tabulek, formulářových prvků… No však je znáte. Nebo neznáte?

## Blanka Type Test

Poslední členka rodiny Blanek vychází právě z toho, že ne všechny HTML elementy musíte znát. Nebo lépe: že si na ně prostě nemusíte vzpomenout a ve stylech je neošetříte.

Kdo snad nezažil situaci, kdy ve stylech počítal úplně se vším — dokud mu klient přes redakční systém na web nevložil prvek, se kterými jsme nepočítali?

Proto je tu Blanka Type Test, zátěžový test typografie. Je to vlastně dokument obsahující všechny myslitelné i nemyslitelné prvky. V kombinacích co by nás nenapadly. V zanořeních, se kterými jsme nepočítali. V rozměrech a délkách, jejichž představa nás budila ze sna.

Prostě si stáhněte dokument, přidejte si k němu vlastní CSS a zbavte se zlých snů. [github.com/machal/cz-typography-stress-test](https://github.com/machal/cz-typography-stress-test)


