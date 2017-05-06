# Blanka a další nástroje pro dokumentovou vrstvu webu

Při formování dokumentu, nevyhnutelném základu každého webu, se může hodit pár nástrojů. Předpokládejme, že máme hotový obsah ve strukturovaném HTML. Co teď?

Seznamte se s Blankou. Žádný tunel to není, nebojte se. Blanka od anglického *blank*: prázdný, čistý, nepopsaný. 

Je to má sada nástrojů pro nastavení typografické základny každého webu. Třetí vrstva stavby hned po výchozích stylech prohlížečů a Normalize.css. Dám sem rovnou odkaz, ale nebojte, Blanku pořádně rozpitváme. [github.com/machal/blanka-html](https://github.com/machal/blanka-html)


## Blanka HTML: výchozí šablona prázdného dokumentu

Je to má výchozí šablona pro dokument. Když ji zjednoduším, aby se vešla sem do knížky, vypadá následovně. Neprve se podíváme na definici typu dokumentu:

```html
<!doctype html>
<!--[if lte IE 8]><html class="no-js old-ie" lang="cs"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="cs">
<!--<![endif]-->
```

Máme zde správný typ dokumentu, nastavený jazyk (`lang="cs"`) a kódování znaků (`charset="utf-8"`).

Připravili jsme si detekci starších Explorerů (`class="old-ie"`) nebo situace, kdy ve stránce nefunguje Javascript (`class="no-js"`). Můžeme využít při stylování komponent.

Teď pojďme k hlavičce:

```html
<head>
  <meta charset="utf-8">
  <title>____Title____</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    document.documentElement.className =
      document.documentElement.className.replace("no-js", "js");
  </script>
</head>
```

Kromě jiného vidíte i správnou [meta značku pro viewport](viewport-meta.md). Ještě si o ní povíme v následující kapitole.

A nakonec tělo stránky:


```html
<body>
  <a href="#main">skip to main content</a>
  <div class="container">
    <main id="main" role="main" class="content">
      <h1>
        Hello, I'm Blanka!
        <br>Minimal HTML boilerplate.
      </h1>
    </main>
  </div>
</body>
```

Ošetřená je základní přístupnost: Prvek `&lt;main&gt;` umožňuje uživatelům odečítačů obrazovky snadný skok na obsah. Ze stejných důvodů nezapomínáme na WAI-ARIA atribut (`role="main"`). Detaily čtěte u mě na blogu. [vrdl.cz/prirucka/html5-struktura](http://www.vzhurudolu.cz/prirucka/html5-struktura)

Univerzálnost vyžaduje minimalismus. Pokud chci mít základní kousek kódu jednotný opravdu pro všechny projekty, nesmí být moc složitý. Nechci přemýšlet, kterou řádku pro nový projekt převezmu a která je tam zbytečně. 

V Blance toho opravdu moc není. Věřím ale, že vše, co tam je, využijete téměř pro každý váš projekt. Nezkrácenou verzi najdete na Githubu v `blanka.html`. [github.com/machal/blanka-html](https://github.com/machal/blanka-html/blob/master/blanka.html)

### HTML Boilerplate: až moc robustní alternativa

Pokud byste dávali přednost maximalistické variantě, zajímejte se o projekt HTML5 Boilerplate. Pro mě není. Mé projekty se od sebe poměrně dost liší, proto upřednostňuji jednoduché řešení před robustním. Jde ale rozhodně o zajímavý zdroj pro vzdělávání a inspiraci. [html5boilerplate.com](https://html5boilerplate.com)

Více k základům HTML nepotřebujeme. Nuda? U stylů to ale bude zajímavější, nebojte.

## Výchozí styly prohlížečů

Často se zapomíná, že ještě než napíšeme první řádku CSS, náš dokument už nějaké styly obsahuje. Vždyť prohlížeč musí mít nějaká zadní vrátka, kterými vejde škodolibý skřítek, a klientův vymazlený *dizájn* z wordovského dokumentu vysázený písmem Comic Sans pokazí vědecky vyhlížející stránkou s modrými odkazy vysázenou Times New Roman, že ano? 

První vrstvou vzhledu, která se aplikuje na váš dokument, jsou výchozí styly prohlížečů. Ve vývojářských nástrojích je v CSS kaskádě vidíte jako „user agent stylesheet“. Nevidíte? Doporučím vám si jejich zobrazování zapnout. Výchozí styly totiž mají ošklivou vlastnost: V různých prohlížečích mohou mít mírně různá nastavení. Nejprve je vhodné je sjednotit.

### Resetování CSS: raději ne

Svého času se v prvním kroku technické práce prakticky na každém webu nasadil CSS Reset od Erika Meyera. Ten vynuloval všechny vnější i vnitřní okraje prvku, čímž jsme získali konzistentně ošklivý Times New Roman a modré odkazy ve všech prohlížečích. [vrdl.in/cssreset](http://meyerweb.com/eric/tools/css/reset/)

Nevýhoda resetovacího přístupu je (to byste nečekali) v onom *resetování*. Když totiž nějaké vlastnosti „resetujeme“, musíme je v druhém kroku také „setovat“. Nastavit na vysněné hodnoty. Co když nám ale vyhovovalo původní nastavení prohlížečů? To jsme pak udělali dva zbytečné kroky, a styly webu si zkomplikovali hned na startu.


## Normalize.css: sjednocení stylů prohlížečů

Normalize zasahuje jen tam, kde jsou ve výchozích stylech prohlížečů nějaké rozdíly. *Normalizace* stylů, sjednocení jejich vzhledu mezi prohlížeči. Prvním krokem je tedy přidat k dokumentu soubor se stylem Normalize.css. [vrdl.in/normal](https://necolas.github.io/normalize.css/)

Díky této druhé vrstvě stylů dokumentu máme výchozí stylování sjednocené napříč prohlížeči. V další vrstvě si už konečně pojďme něco nastavit.


## Blanka CSS: typografický základ

Blanka CSS je třetí vrstva stavby stylů webu a má dva hlavní účely:

### Sjednocuje vzhled elementů 

Normalize.css ladí vzhled napříč prohlížeči, už ale neřeší jednotnost vzhledu uvnitř dokumentu. Třeba levé odsazení u prvků `ul`, `ol` nebo `dd`. 

```css
ul, ol, dd {
  padding-left: 1.75rem;
}
```

### Nastavuje základní typografický rytmus 

Asi jste si všimli, že mám rád jednoduchost. Aby se mi s dokumentem dobře pracovalo, mají všechny typografické elementy nastavený vnější okraj jen zezdola. Nemusím myslet na horní vnější okraj, nemluvě o vnitřních, které se ve výchozích stylech prohlížečů hojně vyskytují. 

Ve stylové Blance je toho více, ale to už si můžete prohlédnout sami v souboru `blanka.css`. [github.com/machal/blanka-html/](https://github.com/machal/blanka-html/blob/master/blanka.css)

```css
p, ul, ol, dl, table,
blockquote, pre, hr, figure {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 1rem;
}
```

### Reboot: až moc nastavující alternativa

Opět pro zájemce zmíním i složitější alternativu. Bootstrap 4 přichází s vlastní typografickou základnou, které říká Reboot. [vrdl.in/reboot](https://v4-alpha.getbootstrap.com/content/reboot/)

Základna obsahuje sjednocení stylu mezi prohlížeči (pro které používáme Normalize.css), sjednocení vzhledu mezi prvky (používáme Blanka.css), ale také jistá nastavení vlastního vzhledu. A právě ne všechna pravidla z poslední kategorie mám v úmyslu využít na všech svých projektech. Nechci jim už v této fázi vnucovat konkrétní písma, konkrétní typografickou stupnici a výšky řádku. To vše vychází ze zvoleného typografického systému a mělo by se psát na míru projektu. O Rebootu jsem ale psal na Vzhůru dolů. [vrdl.cz/blog/53-reboot](http://www.vzhurudolu.cz/blog/53-reboot)

Když už máme jakžtakž vysázený dokument, můžeme k němu začít přidávat vzhled vlastního webu. Řezy písem, velikostní stupnici, barvy. Promítnou se pak do vzhledu základních prvků dokumentu, nadpisů, odstavců, seznamů, citací, tabulek, formulářových prvků… No však je všechny znáte. Nebo neznáte?

## Blanka Type Test

Poslední členka sesterského komanda Blanek vychází právě z toho, že ne všechny HTML elementy musíte znát. Nebo lépe: že si na ně prostě nemusíte vzpomenout, takže ve stylech je neošetříte.

Kdo z nás nezažil situaci, kdy ve stylech počítal úplně se vším — dokud mu klient přes redakční systém na web nevložil úplně novou kombinaci prvků, která rozbila celý web?

Proto je tu Blanka Type Test, zátěžový test typografie. Je to vlastně dokument obsahující všechny myslitelné i nemyslitelné HTML elementy. V kombinacích, které by nás nenapadly. V zanořeních, se kterými jsme nepočítali. V rozměrech a délkách, jejichž představa by vás budila ze sna.

Prostě si stáhněte dokument, přidejte si k němu vlastní CSS a otestujte si všechny možné i nemožné kombinace prvků. Podívejte se na soubor `blanka-type-test.cz.html`. [github.com/machal/blanka-html/](https://github.com/machal/blanka-html/blob/master/blanka-type-test.cz.html)


