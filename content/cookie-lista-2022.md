# Cookie lišta, verze 2022

Už to došlo i do Česka. Od ledna 2022 bude nutné od uživatelů žádat souhlas s ukládáním personalizačních a analytických cookies do jejich prohlížečů.

Stačí když na webu máte základní analytiku, např. Google Analytics, a od konce roku máte povinnost před uložením cookies (nebo do jakéhokoliv úložiště v prohlížeči) žádat souhlas pomocí takzvané cookie lišty. Pokud tedy Analytics nezakážete ukládat cookies.

Pravděpodobně jste to už řešili, pravděpodobně to už máte vyřešené. Pokud spravujete velké weby, tím spíše. Já spravuju jen Vzhůru dolů a pár malinkých webů, takže jsem to nechával na poslední chvíli. Neměl jsem to dělat.

<!-- AdSnippet -->

Text budu tedy spíše cílit na majitele menších webů nebo ty, kteří zatím neměli potřebu to řešit. Dole v textu odkazuji na všemožné zdroje, takže to můžete dostudovat. V textu základy řešit nebudu, spíše otevřu témata, která mě zaujala a jinde jsem je nenašel.

Předem říkám, že se v téhle oblasti nepovažuji za odborníka – pokud se webařinou živíte, nasazení na weby konzultujte s advokáty (já využívám [Dostupného advokáta](https://dostupnyadvokat.cz/spolecnosti/cookies)), experty na UX a marketing.

Můj pohled je víceméně pohledem „hobbíka“, člověka, který spravuje pár webů, ale denodenní vývojařinou se neživí.

Než se do toho pustíme, velmi rád bych zde nejprve ventiloval svůj celkový osobní dojem. On se totiž za poslední týdny dost významně změnil.

## Uživatelé platí soukromím za to, že my šetříme čas a peníze {#plati}

Ještě před měsícem jsem nechápal, proč bychom měli už i v Česku na všechny weby nasazovat cookie lištu.

[GDPR](gdpr.md) už máme vyřešené a od roku 2015 nějak i v Česku řešíme [„EU cookies“](https://www.vzhurudolu.cz/blog/36-eu-cookies). Vždyť přece stačí, že uživatele informujeme…

Čím více to studuji, tím více dávám za pravdu zákonné úpravě, která bude platit od ledna.

Jasně, forma je fakt nešťastná. Cookie lišta je zlo. Cookie lišta je zlo pro uživatele i provozovatele, takže se těším se na [normu ePrivacy](https://digital-strategy.ec.europa.eu/en/policies/eprivacy-regulation), která to přesune do nastavení prohlížeče.

To soukromí ale fakt musíme řešit.

> Nepoužívat a nešmírovat. Za analytické nástroje nechat platit toho, kdo data měří a nenechávat to na ceně uživatelského soukromí lidí, kteří ani nevědí co schvalují.
>
> — *<cite>Honza ChemiX Černý [na Twitteru](https://twitter.com/janhonzacerny/status/1465985275268632579)</cite>*

Představte si situaci že přijdete do obchoďáku a u vchodu vám bez ptaní dají do kapsy krabičku, která bude ukládat vaši polohu – jaké obchody jste navštívili, co jste tam dělali. Dají vám ji s úsměvem a s tím, že příště ta data použijí pro zlepšení vašeho nákupního prožitku. A že je možné, že ta data někomu prodají. Pro vaše dobro.

Líbilo by se vám to? Mně ne. Ale na webu je to úplně běžné:

* Přijdete, dostanete cookie od Google Analytics, která sleduje váš pohyb webem.
* Pokud je na webu vložené YouTube video, cookie se ukládá nejen pro úpravu obsahu a reklamy nejen na navštíveném webu, ale také na YouTube a také na jiných webech.
* Taková komentářová služba Disqus se s tím už vůbec nemaže. V [Cookie Policy](https://disqus.com/cookie-policy/) přiznává jen zlomek cookies, které reálně ukládá, a rovnou říká, že data vašich uživatelů posílá i dalším firmám.

To všechno proto, že na webech mocně využíváme služby třetích stran. Zvykli jsme si na to. Šetří nám to jako vývojářům a marketérům čas a peníze. Jenže nic jako komponenta třetí strany zdarma neexistuje. I ty placené mají daleko větší cenu než si myslíme.

Za náš ušetřený čas a peníze platí uživatelé svým soukromím. Jejich data, informace o pohybu našim webem využíváme nejen my, ale i úplně cizí firmy.

<figure>
<img src="https://res.cloudinary.com/vzhurudolu-cz/image/upload/v1639995817/vzhurudolu-prirucka/cookie-lista-2022-fun_end4jh.png" width="1600" height="900" alt="Cookie lišta">
<figcaption markdown="1">
*Někomu sledování nevadí. Ale vědět to předem je asi dobré, ne?*
</figcaption>
</figure>

Můj postoj je silně ovlivněný studiem třetích stran, které jsem dosud běžně používal zde na Vzhůru dolů a které pravděpodobně používáte taky – Google Analytics a vkládaný obsah od YouTube, Twitteru, Facebooku… Jejich přístup k soukromě je prostě o dost horší, než jsem si myslel.

Takže – pojďme soukromí řešit. Pojďme to řešit bez paniky a nadávání na zákon nebo EU. Pojďme vzít ty (formálně špatné) cookie lišty jako příležitost se něco naučit a zlepšit web jako celek.

<!-- AdSnippet -->

Jednou třeba lišty dáme pryč a zůstanou nám, doufám, weby, které více dbají na soukromí lidí. Neprodávají jejich duši, aniž by to jako návštěvníci věděli.

Teď už se pustím do praktických rad, co s tím dělat na malém webu. Dávám sem svůj stav mysli.

## Nutné základy {#zaklady}

Nejprve pár textů a videí, které se vám mohou hodit při studiu:

* Právní pohled: [Lupa.cz](https://www.lupa.cz/clanky/od-1-ledna-se-zmeni-pravidla-pro-cookies-pripravte-si-listy-radi-pravnicka/), od [Petry Dolejšové](https://www.pavelungr.cz/jak-na-cookie-listu-v-roce-2022-prace-s-cookies-v-roce-2022-saga-pokracuje-petra-dolejsova/) nebo [Dostupného advokáta](https://dostupnyadvokat.cz/blog/povinnosti-cookies).
* Marketingový pohled: [House of Řezáč](https://www.houseofrezac.com/blog/mereni-a-marketing-bez-cookies).
* UX pohled: [Ondřej Ilinčev](https://www.ilincev.com/cookies-2022).
* Můj pohled k rychlosti webu na [PageSpeed.cz](http://pagespeed.cz/). (To jediné, čemu doopravdy rozumím.)
* [Komplexní webinář](https://www.youtube.com/watch?v=mvMyEVr_kMg) organizovaný Pavlem Ungrem.
* [Diskuze o cookies](https://www.youtube.com/watch?v=s4I6TjZMR_I) u Frontendistů. (Martin Kopta a Honza Chemix Černý tam velmi hezky argumentují z pohledu soukromí uživatele.)

Než budeme pokračovat, musím dodat pár úplných základů. Jen pár.

## Které cookies jsou nově se souhlasem a jak zjistím, že je na webu mám? {#typy}

Tohle jste už asi četli stokrát, ale pro jistotu to opakuju.

Pravděpodobně na webu používáte cookies nutné např. pro přihlášení nebo uložení nastavení jazyka (funkční cookies). Touto kategorií se vůbec trápit nemusíte, dále je možné je bez souhlasu používat.

Dejte si pozor na tyto typy cookies:

* reklamní
* analytické
* personalizační

K těmto potřebujete od 1. ledna souhlas.

Nástroje, které pomáhají odhalit, které cookies na webu potřebujete:

* [CookieBot.com](https://www.cookiebot.com/en/)
* [CookieServe.com](https://www.cookieserve.com/)

Nejdříve dobrá zpráva – analyzovat těmito nástroje je jednoduché.

A teď ta špatná. Ani na Vzhůru dolů, takže strukturou menším webu, mě to nenašlo zdaleka všechny cookies, které bych měl „řešit“.

Navíc jde samozřejmě o statickou analýzu webu, takže např. komponenty [načítané líně](lazy-loading.md) nebo na akci uživatele, to neodhalí.

Prostě bez zkoumání uložených cookies ve vývojářských nástrojích prohlížečů a čtení „Cookie Policy“ dodavatelů třetích stran se myslím neobejdete.

## Zákon praví… {#zakon}

Z jaké změny v zákoně vlastně celý ten humbuk vychází?

> Každý, kdo hodlá používat nebo používá sítě elektronických komunikací k ukládání údajů nebo k získávání přístupu k údajům uloženým v koncových zařízeních účastníků nebo uživatelů, je povinen tyto účastníky nebo uživatele předem prokazatelně informovat o rozsahu a účelu jejich zpracování a je povinen nabídnout jim možnost takové zpracování odmítnout. Tato povinnost neplatí pro technické ukládání nebo přístup výhradně pro potřeby přenosu zprávy prostřednictvím sítě elektronických komunikací nebo je-li to nezbytné pro potřeby poskytování služby informační společnosti, která je výslovně vyžádána účastníkem nebo uživatelem.
>
> — *[Zákon o elektronických komunikacích](https://www.zakonyprolidi.cz/cs/2005-127) (§ 89 Důvěrnost komunikací)*

To je vše. Složitě napsané, ale překvapivě krátké, že?

Víte co, pojďme se tedy nejprve zkusit na to celé vykašlat.

## „Peču na to", aneb řešení bez cookie lišty {#pecu}

Cookie lišta je otrava. Ano, to je.

> Víte jaká je nejlepší cookie lišta?  Žádná!
>
> — *<cite>Z ohlasů [na Twitteru](https://twitter.com/count_lovelace/status/1466352798149271555)</cite>*

Pokud máte velký web, řešil bych to, u malinkých asi nemá smysl propadat panice a nutně nasazovat lištu hned po Vánocích.

Jak to riziko chápu já? Postihy za nedodržení zákona samozřejmě budou udělovány, ale [úřad ÚOOU](https://www.uoou.cz/), který to řeší by se musel rozkrájet, aby řešil i menší přestupky. Osobně čekám spíše akčnost typu „česká hygiena během pandemie“. U svých malých webů nebudu s cookie lištou zase tak moc spěchat a stresovat.

Advokáti navíc říkají, že vás nejprve úředníci musejí vyzvat k nápravě, takže i kdyby na vás „vlítli“, máte čas to opravit. Pokuty by navíc neměly být likvidační.

> Kontrolu provádí @UOOUCR, sankce dává samozřejmě podle uvážení, ale horní hranice je vždycky předpisem limitovaná, navíc nesmí být nepřiměřená a likvidační.
>
> — *<cite>Petra Dolejšová [na Twitteru](https://twitter.com/DolejsovaPetra/status/1470436779803262988)</cite>*

Nechci tady ale nabádat k očůrávání zákona. S jeho smyslem souhlasím, svoje weby podle něj upravím. Výše uvedené mi ale dává čas a klid to dát do pořádku, když už jsem to začal řešit pozdě.

Jen pro pořádek – je potřeba odlišit [GDPR](gdpr.md) a nový odstaveček zákona týkajícího se cookie lišty. Píšu tady o tom druhém. Pokuty za porušování GDPR jsou myslím úplně jiná písnička. GDPR by už ale měli mít v pořádku všichni. A dávno.

## Jak nemít cookie lištu a zároveň dodržovat zákon? {#nemit}

V prvé fázi jsem u všech svých webů přemýšlel nad tímto nejčistším řešením. U miniaturních webů je to realizovatelné, jen nevím jak tomu bude u Vzhůru dolů.

Pokud potřebujete běžné měření [Google Analytics](google-analytics.md), cookie lištu musíte mít. GA totiž přidávají cookie, kterou měří uživatele napříč webem.

Pokud potřebuji jakoukoliv jinou komponent třetí strany (YouTube a jiné embedy, GTM, chat, pravděpodobně i Google Fonts), pak vysoce pravděpodobně cookie lištu musíte mít.

Touto cestou se vydaly i velké weby [jako Github](https://github.blog/2020-12-17-no-cookie-for-you/). Když si ale ke dnešku prohlédnete cookies, které vám Github a jimi používané third-parties uloží na stránce tohoto oznámení, vůbec není jisté, zda byli schopní tu proklamovanou čistotu udržet.

Takže – nezajímá vás návštěvnost a chování návštěvníků, nepotřebujete kód třetí strany? Lištu nepotřebujete. Jinak to budete mít složitější.

## Lze mít Google Analytics a nemít lištu?  {#ga}

Ano, Google Analytics (GA) můžeme zakázat ukládání do lokálních úložišť:

```js
'client_storage': 'none',
```

Ztratíte ale přehled o počtu shlédnutých stránek na jednu návštěvu a vše související.

→ *Celé řešení pro GA popisuji v textu o [zbavování webu cookies](cookieless.md).*

Taky je ale možné nepoužívat Google Analytics, že ano?

### Alternativy ke Google Analytics

Popularitu teď nabírají alternativní nástroje jako je [Matomo](https://matomo.org/) nebo [Fathom](https://usefathom.com/) a další. Z toho co jsem pochopil z komentářů analytiků, kterým věřím… Je to past.

Tyhle nástroje často nepoužívají cookies, to je fajn, ale zároveň uživatele identifikují jinak, nejčastěji kombinací různých faktorů, takže [fingerprintingem](https://en.wikipedia.org/wiki/Device_fingerprint), což je z pohledu soukromí úplně to samé.

[Simple Analytics](https://simpleanalytics.com/), další alternativu, údajně bez fingerprintingu, ale bez sledování uživatele napříč webem, doporučovali další lidé, jako např. [Jan Smitka na Twitteru](https://twitter.com/jansmitka/status/1471592040479825923).

Pokud už alternativy plní požadavky na soukromí, chovají se vlastně podobně jako Google Analytics v Consent Mode. Přičemž GA mají velkou výhodu – jsou de facto průmyslovým standardem.

Zdá se mi, že ani tudy cesta nevede. (Ale samozřejmě budu moc rád za argumenty, proč vy si myslíte, že ano.)

## Co další komponenty třetích stran? {#3p}

Musím se přiznat, že právě tahle část analýzy, kterou jsem si dělal pro Vzhůru dolů a další menší webíky, mě přesvědčila, že soukromí na webu je fakt problém. A že dodavatelé komponent třetích stran dělají většinou vše proto, aby to problém zůstal.

Pojďme si projít pár [third-parties](third-party.md), které jsem zkoumal.

* **Google Fonts:** názory se různí. Nějakou personalizaci dělají, ale spíše na základě lokality. Ve [FAQ píší](https://developers.google.com/fonts/faq#what_does_using_the_google_fonts_api_mean_for_the_privacy_of_my_users), že „no cookies are sent“. [Vladimír Smitka](https://twitter.com/smitka/status/1471132548990439434) ale říká, že „Google fonty sbírají data o koncovém uživateli“ a tak je při přísném výkladu potřeba souhlas. Nebo si fonty stáhnout lokálně.
* **Vložení obsahu z Twitteru:** Ukládají cookies, personalizační i reklamní, tzn. souhlas by myslím standardně byl potřeba. Je to však možné vypnout a chránit soukromí uživatele, viz [nápověda](https://twitter.com/machal/status/1471031073027076098).
* **Vložení videa z YouTube:** Standardně souhlas potřebujete, ukládají reklamní cookies. Embedy lze servírovat z domény `youtube-nocookie.com` a cookies se neuloží dokud uživatel video nepustí. Tzn. pak není potřeba souhlas? Nevím. Vladimír Smitka [píše](https://twitter.com/smitka/status/1471132859402489865), že ta cookieless doména je fejk.
* **Facebook embed i Facebook pixel:** Ukládají cookie jak diví a nikde jsem nenašel možnost to změnit.
* **Komentáře Disqus:** Ukládá cookies jak divý, v [Cookie Policy](https://disqus.com/cookie-policy/) přiznává jen část a ještě vesele prohlašuje komu všemu ty údaje cookies nepředává. A to je prosím placená služba! Zde budu muset při pročišťování webu od nepořádných služeb třetí strany začít.

Můj celkový dojem? Pardon, ale asi budu blinkat… Takhle špatné jsem to nečekal. Čest výjimce, čest Twitteru.

→ *Související: Jak jsem dělal [analýzu cookies třetích stran](cookieless.md).*

Hodně se mi líbí řešení, kdy si souhlas k vložení obsahu vkládaném třetími stranami vyžádáte až při najetí na tento obsah. Připravené je to např. v komponentě [Iframe Manager](https://github.com/orestbida/iframemanager).

<figure>
<img src="https://res.cloudinary.com/vzhurudolu-cz/image/upload/v1639995815/vzhurudolu-prirucka/cookie-lista-2022-iframe-manager_a3wgnj.png" width="1600" height="900" alt="Iframe Manager">
<figcaption markdown="1">
*Iframe Manager. Chce opravdu přehrát tohle video? Počkejte… i za cenu šmírování?*
</figcaption>
</figure>

Celé moje vlákno k problematice third-parties je [na Twitteru](https://twitter.com/machal/status/1471031067708641282), pokud by vás to zajímalo doplněné o cenné názory dalších.

Dobře, teď už vím, že s vysokou pravděpodobností budu i na Vzhůru dolů nějakou lištu potřebovat. Jak to ale implementovat?

## Řešení souhlasu s Google Tag Managerem  {#gtm}

[Martin Kolář](https://martinkolar.eu/) udělal o tomto jednoduchém řešení pěknou přednášku.

YouTube: [youtu.be/KW7lNaLfu9c](https://www.youtube.com/watch?v=KW7lNaLfu9c)

Martin ukazuje řešení vhodné právě pro jednoduché weby a vlastní implementaci lišty.

Veškeré komponenty třetích stran je ale nutné vložit právě přes [Google Tag Managera](google-tag-manager.md):

```js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'personalization_storage': 'denied'
});
```

V GTM se pak nastaví souhlas pro konkrétní kategorii v nastavení kontejneru. Více je v přednášce.

Přes Google Tag Manager je pak možné i nastavit nesouhlas se vším, nechat přes nastavení GTM pak např. Google Analytics běžet v Consent Mode a uživatele netrápit cookie lištou.

## Řešení pro cookie lištu třetích stran  {#reseni}

Toto jsem zatím neřešil, proto zde využiju možností získaných od kolegů

* **[CookieConsent](https://orestbida.com/demo-projects/cookieconsent/)**: Malý plugin i s [ukázkovým kódem](https://gist.github.com/lynt-smitka/1f795c2d0410659ac8fea0992eb1b977) od Vladimíra Smitky.
* **[CookieConsent.com](https://www.cookieconsent.com/)** se jmenuje stejně, dělá to podobné věci, ale je to něco jiného.
* **[Complianz](https://wordpress.org/plugins/complianz-gdpr/)** (Wordpress): Kolega [Dan Střelec](https://www.danielstrelec.cz/) mi píše: „V základu je zdarma, nasazení pár hodin hodina práce (podle webu). Pokud potřebujete ukládat souhlasy, je třeba placená verze (39 EUR/rok).

Větší řešení jsou například [Cookiebot](https://www.cookiebot.com/en/): V ČR velmi populární. Dan Střelec: „Neplacená verze je pouze do 100 stránek/web, od 500 stránek/web stojí €9/měsíc.“.

Zajímavé srovnání řešení, hlavně pro weby běžící na WordPressu, připravili v [eHub.cz](https://ehub.cz/blog/post/jak-vyresit-novou-podobu-cookies-listy-na-wordpress-webech).

Větší weby využívají velmi robustní [OneTrust (dříve Optanon)](https://www.onetrust.com/), Didomi nebo Funding Choices od Google.

## Cookie lišta a rychlost webu {#rychlost}

Na [blogu PageSpeed.cz](https://pagespeed.cz/blog/cookie-rychlost-webu) jsem psal o trablech z pohledu rychlosti webu, které může nasazení cookie lišty způsobit.

Svoje jsme si užili s OneTrust, Didomi i Google Funding Choices. Nicméně vždy jsme nalezli cestu k optimalizaci.

Pravidlo číslo jedna? Načtěte tu lištu co nejdříve:

> Mezi vývojáři se rozšířil mýtus, že vykreslení obsahu typu cookie lišty se musí odložit co nejvíce to jde. Nejde přece o hlavní obsah stránky. Jde ale o jednu z velkých chyb, které můžete při implementaci lišt udělat.

## Co dál? {#dal}

Osobně budu pro Vzhůru dolů hledat co nejjednodušší řešení, které mi umožní splnit to, co zákon káže. Je už skoro jisté, že minimálně na nějaký čas zde cookie lišta bude viset.

Po počáteční negaci beru ale celou věc kolem cookies od roku 2022 za velkou příležitost brát oblast soukromí uživatelů našich webů daleko vážněji.

Moje znalosti jsou samozřejmě omezené, ale tento text budu postupně doplňovat, takže pokud vám zde něco chybí nebo přebývá, napište mi.

<!-- AdSnippet -->
