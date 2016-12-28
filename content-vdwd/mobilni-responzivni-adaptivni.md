# Weby responzivní, adaptivní, mobilní

Vlastně dnes máme jen dvě možnosti jak udělat web pro všechna zařízení. Adaptivní web nebo zvláštní verzi webu – mobilní. Kam zmizely weby responzivní? Víte, většina z nich dnes patří do kategorie webů *adaptivních*, ale budeme jim dále říkat responzivní. Čtěte a uvidíte.

## Mobilní web

Občas se říká „m tečka web“. Ano, jsou to ty weby, které pro přístupy z desktopů používají adresu jako www.example.cz a pro přístupy z mobilů m.example.cz. Z pohledu návštěvníka i provozovatele jsou to vlastně dva weby, které servírují stejný nebo případně i upravený obsah.

![Web banky Moneta](dist/images/vdwd/original/moneta.png)

*Obrázek: Příklad dvou aplikací pro jeden web. m.moneta.cz a www.moneta.cz.*

### Klady, zápory a co zvážit

* Může to být **rychle hotové**. Pokud máte složitý desktopový web a teprve uvažujete o řešení mobilních uživatelů, může to být na rozdíl od velkého responzivního redesignu výrazně časově méně náročné.
* **Správa dvou webů** se časem prodraží. Více o tom píšu v příběhu o Scuku níže.
* Pro někoho může být výhodou **serverové detekce zařízení**. Výjimečně se může stát, že chcete určité skupině uživatelů poslat výrazně jinou verzi designu nebo obsahu. Dříve se tak řešil problém existence velmi starých chytrých telefonů, které dnešní frontend technologie nezvládaly – třeba Nokií se Symbianem. Drobné detekce na serveru dělá dnes i řada responzivních webů. Nebo přesněji *adaptivních* jak uvidíte dále. U nich je ale drtivá většina frontend kódu pro všechny návštěvníky totožná.
* Je potřeba řešit situace **přesměrování** mezi jednou a druhou verzí. Vyvstávají i další problémy: co budou indexovat vyhledávače, jak jim říct o existenci dvou webů? Jako správce webu dvě verze nechcete, věřte mi. Pokud už ale v takové situaci jste, udělejte to dobře. Nejlépe podle Google: [https://developers.google.com/webmasters/mobile-sites/mobile-seo/separate-urls](https://developers.google.com/webmasters/mobile-sites/mobile-seo/separate-urls)
* **Co s tablety?** U speciálních mobilních webů často vznikne tento problém. Mobilní web bude na tablety moc jednoduchý a desktopový moc složitý.
* Speciální mobilní web se může **načítat rychleji**. Hlavně pokud je desktopová verze datově gigantická. V žádném případě to ale neznamená, že nelze udělat velmi rychlý responzivní web. Naopak!
* V některých velkých firmách ještě stále mají **oddělení specializovaná na mobily**. Dříve to tak bylo třeba v MTV.com a tady o tom hezky povídal Ryan Shafer, jejich víceprezident pro design: [http://responsivewebdesign.com/podcast/mtv/](http://responsivewebdesign.com/podcast/mtv/) 
Tedy hezky… ona ve výsledku bylo dělení týmů na desktop a mobily děsná pruda a doufám, že ve vaší firmě nic takového nemáte. 

Jak vidíte, tohle řešení má řadu nevýhod a považuji ho za dlouhodobě neudržitelné. V krátkodobém horizontu ale může být dobré. Ukážu to na příkladu.

### Scuk.cz: Příběh o dočasném mobilním webu

Kdysi jsem jako kodér spolupracoval na projektu Scuk.cz známého foodbloggera, pana Cuketky. http://www.scuk.cz/

Dnes už je Scuk responzivní, ale v roce 2010 ještě mobily nebyly v Česku tak důležité. Proto jsme – jako všichni v té době – vyrobili jen desktopovou verzi. Pár let od spuštění ovšem mobily v naší cílové skupině vyrostly. Responzivní web jsem tehdy udělat uměl, takže jsme se bavili o jakémsi „zresponzivnění“ desktopového webu. Nakonec jsme to ale zavrhli.

Desktopový Scuk.cz byl totiž *vymyšlený* pro desktop. Když je něco vymyšlené pro desktop, těžko z toho uděláte responzivní web. Musíte to vymyslet znovu. Scuk byl postavený na Google mapách, takže rozhraní bylo poměrně složité a řešení z pohledu frotnend technologií relativně těžkopádné. Hlavně pro mobily, kde potřebujete rychlé načtení a pohodlí ovládání, což vkládané Google mapy nenabízely.

![Původní verze Scuk.cz](dist/images/vdwd/original/scuk.png)

*Obrázek: Původní verze Scuk.cz a zpětně dodělaná mobilní verze.*

Nakonec jsme se rozhodli pro vytvoření ještě jednoho webu – „m tečka“ verze. Ale už v době, kdy jsme ji připravovali, jsme věděli, že bude dočasná. Po několika letech se oba staré weby zahodily a vznikl nový, responzivní. Už beze mě, protože naše domácnost se v té době rozrůstala o děti. Ale povedl se, že jo?

![Responzivní verze Scuk.cz](dist/images/vdwd/original/scuk-responzivni.png)

*Obrázek: Poslední, již plně responzivní generace Scuk.cz.*

Dalšího klienta – eshop VašeČočky.cz –  se mi naštěstí hned v počátcích spolupráce povedlo přesvědčit, aby myšlenku na mobilní web opustil. Rok a půl jsme pak pracovali na pořádném responzivním redesignu. Ale neztratili jsme čas vytvořením dočasné mobilní verze. A máme dlouhodobě udržitelné řešení, které jedním kódem obsluhuje všechna relevantní zařízení.

## Responzivní web

Web, který *responzivně* – tedy rychle a jednoznačně – reaguje na změny prostředí. Technicky jde o web, kterému pro přizpůsobení všem zařízením stačí jedna verze frontend technologií. Dle původní definice si vystačí s pružným layoutem a se změnami pro konkrétní skupiny rozlišení obrazovky realizovanými pomocí Media Queries. [http://vrdl.cz/prirucka/css3-media-queries](http://vrdl.cz/prirucka/css3-media-queries)

### Klady, zápory a co zvážit

* Není potřeba spravovat více verzí webové aplikace.
* Všechna zařízení sdílejí **stejné URL adresy**.
* Jen pozor, responzivní redesign vyžaduje **nezanedbatelné množství energie** pro všechny lidi, kteří se účastní procesu vývoje a správy webu.

![VašeČočky.cz](dist/images/vdwd/original/vase-cocky.png)

*Obrázek: VašeČočky.cz jako příklad responzivního webu.*

Responzivní web je to, čemu dávám vždy přednost a tomu se budeme také v dalších textech nejvíc věnovat.

## Adaptivní web

Technické prostředky původní definice responzivního designu dnes už k výrobě dobrého webu nestačí. Potřebujeme například řešit rychlost načítání a měníme pracovní postupy.

Ve výsledku tedy potřebujeme poslat každému zařízení jiný obrázek. Nebo občas potřeba udělat detekci na serveru a mobilům poslat něco jiného než desktopu. Například zvýraznit telefonní číslo jen na mobilech. [http://www.vrdl.cz/blog/57-href-tel](http://www.vrdl.cz/blog/57-href-tel)

Téhle širší kategorii řešení můžeme říkat adaptivní webdesign. 

![Adaptivní webdesign](dist/images/vdwd/original/adaptivni.png)

*Obrázek: Do adaptivního webdesignu patří kromě technik responzivního designu také například řešení rychlosti načítání nebo technologie responzivních obrázků.*

A proč to nenapsat – všechny dnešní větší weby nejsou responzivní, ale adaptivní. Jenže lidé pořád říkají *responzivní*. Proč? Protože si na to zvykli a už s tím nic nenaděláme. Pro potřeby zdejších textů tedy budeme dál říkat *responzivní* design a k jeho implementaci užívat technik *adaptivního* designu. [http://vrdl.cz/blog/23-adaptivni-responzivni](http://www.vrdl.cz/blog/23-adaptivni-responzivni)

Ono na tom vlastně v dlouhodobé perspektivě nezáleží. Fáze webdesignu, ve které bylo potřeba rozlišovat responzivní a „normální“ weby končí.

Ještě se ale ale jednou vraťme k tomu galimatyáši v pojmech *responzivní* a *adaptivní*. 

### Responzivní versus adaptivní layout

Jako „adaptivní layout“ je obvykle myšleno rozvržení responzivní stránky, které se šířce okna nepřizpůsobuje plynule (pixel po pixelu), ale skokově. Někteří designéři tuto variantu layout používají se hlavně na větších rozlišeních a je také výchozí například v Bootstrapu 3.

## Responzivní webdesign = adaptivní webdesign = webdesign

Z textu je asi patrné, že dnešní responzivní weby spadají více do škatule adaptivních. Ale říkat jim responzivní budeme i nadále. Je to obvyklejší. 

Proto to budu ve svých textech zjednodušovat, protože v důsledku je responzivní a adaptivní web totéž.

A pak – slovo *responzivní* v branži dnes má dva významy:

* děláme web, který se přizpůsobuje mobilním zařízením a
* neděláme jen desktopový web.

Ano, slovem *responzivní *se trochu vyhraňujeme vůči předchozímu způsobu tvorby webů. *Responzivní *je dnes tedy více pojmenování pro aktuální způsob tvorby. Pro aktuální etapu webdesignu.

Jenže tahle etapa končí.

Za pár let už slova responzivní nebo adaptivní potřebovat nebudeme. Všechny weby budou responzivní. Tedy vlastně adaptivní. 

Pochopili jste to správně. Jsem velkým zastáncem responzivní webů. Nebo spíše adaptivních, kterým říkáme responzivní. 

Přiznávám se ale, že jsem vynechal podložení menších argumentů, které jsem ve prospěch responzivních webů použil. Pokud svým šéfům, kolegům nebo klientům ještě stále potřebujete předkládat důvody pro přechod na responzivní web, kupte si výbornou argumentační příručku od Karen McGrane – Going Responsive. [https://abookapart.com/products/going-responsive](https://abookapart.com/products/going-responsive)
