# Google Tag Manager (GTM): Úvod pro vývojáře

_[Martin Kolář](https://martinkolar.eu/) pro Vzhůru dolů píše o nástroji, který u vývojářů není právě populární. Přesto se bez něj na dnešních webech nedá obejít. Po rychlém úvodu si v textu vysvětlíme, proč je GTM tak důležitý a proč by se vývojáři neměli vzdávat zodpovědnosti za správu GTM na svých webech._

<!-- Autor: Martin Kolář -->

Základním účelem správců značek (tag managerů) je snadná správa značek (tagů). V případě webu jsou značky defakto kusy javascriptového kódu.

V textu se budeme zabývat [Google Tag Managerem](https://tagmanager.google.com/#/home) (Správce značek Google, GTM). Kromě GTM existují i další, například Adobe Experience Platform, IBM Digital Data Exchange, Ensighten, Salesforce Data Management nebo Tealium.

## Několik základních pojmů

Pojďme si na začátek vysvětlit pár pojmů se kterými se můžete v GTM potkat. Záměrně uvádím anglický i český název:

- Tag - značka - Předdefinovaný či vlastní kus kódu nebo obrázek který se provede při splnění nějakého pravidla.
- Trigger - pravidlo - Značky spouštíme nad nějakými pravidly. Ty mohou velmi připomínat JS eventy (DOMContentLoaded, click, scroll).
- Variables - proměnné - Naše proměnné v rámci GTM kontejneru
- dataLayer - definovaná datová vrstva, do které můžeme pomocí funkce dataLayer.push() vkládat data.
- Kontejner - V něm máme všechny ty značky, pravidla a proměnné. Celý kontejner můžeme exportovat/importovat a pracujeme s ním jako s balíkem informací.
- Workspace - V řeči vývojářů by kontejner byl takový Git repozitář a workspace pak byla větev. Ideální pro práci v týmu.
- Publikace - Vytvoření verze a nasazení - takový merge request a deploy.

## GTM je správce značek, ale nic neměří

Než se pustíme do vkládání GTM na web bude dobré si také říct, že Google Analytics (GA) != GTM. Analytics je dostupné v GTM jako předdefinovaná značka. Můžete tedy použít GA mimo GTM, nebo GA v GTM. Spuštění měření při tahání GA z GTM může být pomalejší, ale rozdíl asi nepoznáte.

<figure>
<img src="../dist/images/original/gtm-schema.png" width="1600" height="900" alt="Schéma fungování Google Tag Managera">
<figcaption markdown="1">
*Obrázek…*
</figcaption>
</figure>

Spíše přemýšlejte nad použitím a budoucností. Pokud používám jen Analytics na počty návštěvníků a v GTM nemáte nic víc, je to zbytečný kód navíc. Pokud ale budu do GA posílat události a v GTM budu mít více značek - tadá, tady to dává smysl!

## Jak vložím GTM na svůj web

Na stránce [tagmanager.google.com](http://tagmanager.google.com/) použiji nebo si vytvořím účet a pod účtem si vytvořím kontejner. Po jeho pojmenování a vybrání, že jde o webovou stránku, mi GTM ukáže i samotné nastavení na webu. Jde o 2 kódy, první je javascriptový a ten vkládám do hlavičky webu, druhý je iframe v tagu noscript a slouží pro případy, kdy návštěvník má z nějakého důvodu vypnutý JavaScript.

Mohlo by se zdát, že už máte svoje GTM na webu, ale soubor gtm.js se vygeneruje až poté, co ve svém GTM odešlete první verzi svého kontejneru. Může být absolutně prázdný, ale musíte ho odeslat. Do té doby vložený script vrací Error 404.

<figure>
<img src="../dist/images/original/gtm-instalace.png" width="1600" height="900" alt="Instalace GTM do stránky">
<figcaption markdown="1">
*Obrázek…*
</figcaption>
</figure>

## Výhody GTM

Co nám teda GTM může přinést za výhody? Pojďme se na některé z nich podívat:

### Rychlá změna kódu

Potřebujete rychle přidat kus JS kódu tak, aby se dostal ke všem? Ideální situace, v GTM máte za minutku hotovo. Rozhodně to není trvalé řešení, tak na to prosím myslete.

### Částečná automatizace procesů

Tohle “rychlo-přidání” kódu můžete využít i pro automatizaci. Máte třeba menší tarif Hotjaru? Nevadí, nastavte si spuštění jen první 2 dny v měsíci. Nasadili jste novou věc a chcete vědět, zda funguje? Tadá, stačí v GTM kliknout a až zjistíte, jak se věci mají, zase to vypnete.

### Centralizace dat

Díky dataLayeru si můžete sjednotit všechny marketingové nástroje na jedno místo - do GTM. Nestane se potom, že váš markeťák nebude tušit, který ty kousky toho kódu potřebuje a které ne. A hlavně - neděláte si nepořádek v kódu marketingovými scripty.

### Optimální práce s daty

A když už máte ten dataLayer - netrápíte backenďáky nasazením nového trackovacího nástroje. Stačí přidat v GTM a druhý den můžete sbírat data. Jenže tady přichází ta věc…

## Sdílená zodpovědnost

Už asi chápete, že GTM nemůžeme nazvat marketingovým nástrojem – přeci jen většinu věcí dělá JavaScript a který markeťák ho umí? Ale taky ho nemůžeme nazvat frontenďáckým nástrojem – vážně frontenďák tuší k čemu je třeba FB Pixel?

Takže zodpovědnost je zde sdílená. Frontend zodpovídá za to, že všechny ty kódy správně fungují, nic nerozbijí a spouští se ve chvíli, kdy jsou potřeba.

Naopak marketing by si měl ohlídat, zda mu do GA apod. nástrojů chodí správné data.

No a pokud je na jedné z obou stran problém, musíte ho řešit skupinově. Ono to totiž, a teď se obracím na markeťáky, není o kopírování (pochybných) kódů do značek. A frontenďáci - pro vás zase GTM nemá být _magie_. Vaším cílem je mít web rychlý, funkční a měřitelný.

U GTM je dobré vzájemně komunikovat a být spolu v kontaktu. Jasně, je těžký někomu vysvětlit, že jQuery na webu fakt nemáte, ale jako frontenďák taky asi netušíte, k čemu jsou transakce v Analytics…

## Značky

Abychom si to zjednodušili, pojďme si rozdělit značky podle možných autorů:

- Předdefinované od Googlu - ty jsou zcela bezpečné.
- Značky třetích stran - Google je sice schvaluje a zdrojové kódy jsou veřejně dostupné. Myslete ale na to, že: “Google žádným způsobem nezaručuje funkčnost, kvalitu a obsah služeb a aplikací zajišťovaných těmito šablonami.”
- Vlastní značku - ať už kus HTML kódu, obrázek nebo vlastní šablonu.

Využití značek už tu zaznělo - většinou jde o marketingový nástroj (měřící kódy) nebo o vlastně JS kódy. Ty mohou spouštět nahrávání obrazovky, chaty nebo třeba Sentry.

<figure>
<img src="../dist/images/original/gtm-znacky.png" width="1600" height="900" alt="Značky v GTM">
<figcaption markdown="1">
*Obrázek…*
</figcaption>
</figure>

## Spouštění - triggery

Tuto část asi neporozumí markeťák, ale frontenďák už určitě tuší, že si budeme hrát s tím, kdy kterou věc spustíme. A důležitá otázka - Kdy tu značku sakra zapnout? Pokud se bavíme o značkách, které chceme spustit na každé stránce, máme 3 možnosti.

- Zobrazení (Page View)
- Model DOM je připraven (DOM Ready)
- Okno načteno (Window Loaded)

Události nastávají přesně v tomto pořadí. Asi tušíte kdy přesně, ale radši si to ještě projděme.

- Zobrazení nastane ihned, jak je GTM funkční. Vhodné tedy je pro analytické nástroje jako GA.
- DOM Ready využijete pro scripty, které potřebují už celý DOM a nejsou potřeba spouštět co nejdříve. 
- Okno načteno je vnitřní událost, která se spouští až ve chvíli, kdy se přestane nějaký obsah stahovat. Ideální pro nějaké chaty a další blokující nekritický JS.

Mimo tyto eventy můžete používat také eventy na kliknutí, odeslání formuláře, posun stránky, viditelnost prvku apod.

Vlastní kapitolou jsou pak vlastní eventy, které se posílají přes dataLayer. Můžete si tak například do dataLayeru poslat event „prohlédnutí obrázku“ a v GTM ho nějaký způsobem zpracovat do analytických nástrojů.

<figure>
<img src="../dist/images/original/gtm-pravidla.png" width="1600" height="900" alt="Události v GTM">
<figcaption markdown="1">
*Obrázek…*
</figcaption>
</figure>

## dataLayer

Už jsem tu mnohokrát zmínil pojem dataLayer. Jeho [dokumentaci pro GA4](https://developers.google.com/tag-manager/ecommerce-ga4) případně pro [Universal Analytics](https://developers.google.com/tag-manager/enhanced-ecommerce) je dobré si pročíst.

Ve zkratce se jedná o datovou vrstvu, do které posíláte data. Co uživatel viděl, kam kliknul, co si vložil do košíku… Následně tyto data můžete dále v rámci GTM uložit do GA a dalších analytických nástrojů. Tzv. „push“ potom může na detailu produktu vypadat takto:

```js
dataLayer.push({
  'event': 'view_item',
  'ecommerce': {
    'items': [{
      'item_name': 'Zlatý prsten s postranními diamanty Plautine',
      'item_id': '36552',
      'price': '15470',
      'item_category': 'Zásnubní prsteny',
      'item_category2': 'Zásnubní prsteny s diamantem',
      'item_category3': 'Diamantové zásnubní prsteny s postranními kameny',
    }]
  }
});
```

- `event` - jakou událost v GTM spouštíme
- `view_item` - předdefinovaná událost pro měření prohlížení produktů (viz [dokumentace](https://developers.google.com/tag-manager/ecommerce-ga4#measure_productitem_list_viewsimpressions))
- `ecommerce` - data pro ecommerce vrstvu
- `items` - předdefinová struktura dat pro GTM

## GTM a rychlost

Může být web rychlý i s GTM? Ano, jde to. Jde jen o to, co si do něj dáte, jak si ho budete hlídat a jak se o něj budete starat. Můžeme si říct pár takových základních pouček:

- Vypínejte značky, které nepoužíváte - nenechávejte zapnutý např. Hotjar, pokud uživatele aktivně nesledujete.
- Nastavte správné spouštění značek - jak jsem psal výše, myslete na to, kdy se která značka má spustit. Ne všechno potřebujete spouštět hned -  i když ten spouštěč s názvem „Zobrazení“ zní tak krásně…
- Vybírejte značky podle reálný dopadů. Není totiž [chat jako chat](https://pagespeed.cz/blog/vliv-chatovacich-widgetu-na-rychlost-webu).
- Dobře a kvalitně [měřte aplikace třetích stran](third-party.md), případně webu jako celku. Jednoduše pak zjistíte, co přesně web z ničeho nic zpomalilo.

## Bezpečnost a GTM

Na závěr jedna důležitá a velmi ignorovaná věc. GTM teď může znít jako super nástroj. Dejte si ale pozor, kdo k němu má přístup. Ona totiž vlastní značka s kódem…

```html
<script>
  document.body.style.display = 'none'
</script>
```

…udělá přesně to, co si myslíte. Ano, asi toto nenastane, ale krásně to vypovídá o tom, jak moc opatrní u udělování přístupů musíte být.

<!-- AdSnippet -->

Pokud už dáte přístup správným lidem, předdefinovaným značkám a komunitním můžete věřit. Google jejich bezpečnost řeší a upozorní i na to, k čemu mají přístup. A v průběhu času se vám nezmění na tajného sledovače vašich uživatelů.

## Závěrem

Jak už jsem napsal, GTM je dobrý sluha, ale zlý pán. V rukou _jen_ markeťáka, nebo _jen_ frontenďáka může být nebezpečný. V rukou obou těchto oborů to může být skvělý nástroj, který vám ušetří spoustu nervů.

O GTM by se toho dalo napsat ještě spoustu dalšího. Například jak na vlastní šablony značek, práci s proměnnými, verzování a workspaces… Pokud vás zajímá více, přihlašte na naši marketingo-frontendovou sérii webinářů o GTM na [gtmskoleni.cz](https://gtmskoleni.cz/).
