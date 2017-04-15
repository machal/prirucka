# Weby responzivní, adaptivní, mobilní

Vlastně dnes máme jen dvě možnosti, jak udělat web pro všechna zařízení: adaptivní web, nebo zvláštní verzi webu pro mobilní zařízení. Kam zmizely weby responzivní? Víte, většina z nich dnes patří do kategorie webů *adaptivních*, ale budeme jim dále říkat responzivní. Asi bych vám měl něco vysvětlit, že? Čtěte dále.

## Mobilní web

Občas se říká „m tečka web“. Ano, jsou to ty weby, které pro přístupy z počítačů používají adresu jako `www.example.cz` a pro přístupy z mobilů něco jako `m.example.cz`. Z pohledu návštěvníka i provozovatele jsou to vlastně dva weby, které servírují stejný nebo případně i upravený obsah.

<figure>
<img src="dist/images/original/vdwd/moneta.jpg" alt="">
<figcaption markdown="1">    
*Příklad mobilního webu: [m.moneta.cz](http://m.moneta.cz) a [www.moneta.cz](http://www.moneta.cz)*
</figcaption> 
</figure> 



### Výhoda: Mobilní web může být relativně rychle hotový

Pokud máte složitý desktopový web a teprve uvažujete o řešení pro mobilní uživatele, může to být na rozdíl od velkého responzivního redesignu časově i finančně o dost méně náročné.

### Výhoda: Serverová detekce se může hodit 

Pro někoho může být výhodou serverová detekce zařízení. Výjimečně se může stát, že chcete určité skupině uživatelů poslat výrazně jinou verzi designu nebo obsahu. Dříve se tak řešil problém existence velmi starých chytrých telefonů, které dnešní frontend technologie nezvládaly – třeba Nokií se Symbianem. Drobné detekce na serveru dělá dnes i řada responzivních webů. U nich je ale drtivá většina frontend kódu pro všechny návštěvníky totožná.

### Nevýhoda: Dvě URL adresy a nutnost udržovat vazby mezi nimi

Je potřeba řešit situace přesměrování mezi jednou a druhou verzí. Vyvstávají i další problémy: Co budou indexovat vyhledávače, jak jim říct o existenci dvou webů? Jako správce webu dvě verze nechcete, věřte mi. Pokud už ale v takové situaci jste, udělejte vazbu mezi oběma verzemi dobře. Nečekali byste to, ale odkážu vás na doporučení Google: [vrdl.in/os3y1](https://developers.google.com/webmasters/mobile-sites/mobile-seo/separate-urls)

### Nevýhoda: Co se středně velkými displeji?

Co s tablety? U speciálních mobilních webů často vznikne problém – mobilní web bude na tablety moc jednoduchý a desktopový moc složitý.

A co dále? Občas se argumentuje tím, že speciální mobilní web se může načítat rychleji. Hlavně pokud je desktopová verze datově oplácaná. V žádném případě to ale neznamená, že nelze udělat velmi rychlý responzivní web. Naopak! [V páté kapitole](kap-rychlost.md) o tom něco málo píšu.

Jak vidíte, tohle řešení má řadu nevýhod a považuji ho za dlouhodobě neudržitelné. 

V krátkodobém horizontu může být „m tečka“ web docela záchrana, ale v dlouhodobém se údržba dvou webů prodraží. Ukážu to na příkladu.

### Příběh Scuk.cz: Když je něco vymyšlené pro desktop, těžko z toho uděláte responzivní web

Před lety jsem jako kodér spolupracoval na projektu Scuk.cz známého foodbloggera, pana Cuketky. [scuk.cz](http://www.scuk.cz/)

Dnes už je Scuk responzivní, ale v roce 2010 ještě mobily nebyly v Česku tak důležité. Proto jsme, jako všichni v té době, vyrobili jen desktopovou verzi. Pár let po spuštění ovšem v naší cílové skupině podíl mobilních uživatelů vzrostl. Responzivní web jsem tehdy udělat uměl, takže jsme se bavili o jakémsi „zresponzivnění“ desktopového webu. Nakonec jsme to ale zavrhli.

Desktopový Scuk.cz byl totiž *vymyšlený* pro desktop. Když je něco vymyšlené pro desktop, těžko z toho uděláte responzivní web. Musíte to vymyslet znovu. 

Scuk byl postavený na mapách Google, takže rozhraní bylo poměrně složité a řešení z pohledu tehdejších frontend technologií relativně těžkopádné. Na mobilech, kde potřebujete rychlé načtení a na pohodlnost ovládání má uživatel vyšší nároky, by bylo ještě těžkopádnější.

<figure>
<img src="dist/images/original/vdwd/scuk.jpg" alt="">
<figcaption markdown="1">    
*Původní verze Scuk.cz a zpětně dodělaná mobilní verze*
</figcaption> 
</figure> 

Nakonec jsme se rozhodli vytvořit ještě jeden web: právě „m tečka“ verzi pro mobily. Už v době příprav jsme ale věděli, že bude dočasná. Po několika letech se oba staré weby zahodily a vznikl nový, jednotný responzivní web. Už beze mě, protože naše domácnost se v té době rozrůstala o děti. Ale povedl se, že ano?

<figure>
<img src="dist/images/original/vdwd/scuk-responzivni.jpg" alt="">
<figcaption markdown="1">    
*Poslední, již plně responzivní generace Scuk.cz*
</figcaption> 
</figure> 

A teď už konečně obracím kormidlo směrem k našim responzivním webům. Hurá!

## Responzivní web

Jde o web, který reaguje *responzivně*, tedy rychle a jednoznačně, na změny prostředí. Technicky je to web, kterému pro to, aby se přizpůsobil všem zařízením, stačí jedna aplikace. Dle původní definice si vystačí s pružným layoutem a se změnami pro konkrétní skupiny rozlišení obrazovky realizovanými pomocí Media Queries. O tom si ale ještě budeme povídat [v šesté kapitole](3-principy-rwd.md).

Responzivní web vlastně odstraňuje nevýhody speciálního mobilního webu, které jsem jmenoval výše: 

- Není potřeba spravovat více verzí webové aplikace.
- Všechna zařízení sdílejí stejné URL adresy, takže není potřeba řešit vztahy mezi nimi.

Jen pozor, bez nevýhod to není: Responzivní redesign vyžaduje nezanedbatelné množství energie pro všechny lidi, kteří se účastní procesu vývoje a správy webu. Často je nutná zcela zásadní změna v pracovních postupech nejen designérů a vývojářů, ale prakticky všech, kdo se na webu, jeho obsahu a marketingu podílejí.

### Responzivní redesign VašeČočky.cz: rok a půl práce

Dalšího klienta, firmu Maternia, se mi hned v počátcích spolupráce (někdy v roce 2015) povedlo přesvědčit, aby myšlenku na mobilní web opustil. Rok a půl jsme pak pracovali na pořádném responzivním redesignu všech jeho e-shopů. Nyní ale má dlouhodobě udržitelné řešení, které jedním kódem obsluhuje všechna relevantní zařízení.

<figure>
<img src="dist/images/original/vdwd/vase-cocky.jpg" alt="">
<figcaption markdown="1">    
*VašeČočky.cz jako příklad responzivního webu*
</figcaption> 
</figure> 

Responzivní web je to, čemu dávám vždy přednost a čemu (to byste nevěřili!) se budeme také v dalších textech nejvíc věnovat.

V boji za úměrnou délku textů jsem vynechal menší argumenty, které ve prospěch responzivních webů používám. Pokud svým šéfům, kolegům nebo klientům ještě stále potřebujete předkládat důvody pro přechod na responzivní web, pořiďte si výbornou argumentační příručku „Going Responsive“ od Karen McGrane. Ta je důvodům pro responzivní web a ošemetnostem přechodu na něj věnovaná celá. [vrdl.in/goingrwd](https://abookapart.com/products/going-responsive)

Tady bychom mohli skončit, ale dlužím vám ještě poznámku k přídavnému jménu *adaptivní*.

## Adaptivní web

Technické prostředky původní definice responzivního designu dnes už k výrobě dobrého webu nestačí. Potřebujeme například řešit rychlost načítání nebo měníme pracovní postupy. Mimo jiné potřebujeme poslat každému zařízení jiný obrázek. Nebo zvýraznit telefonní číslo jen na mobilech. [vrdl.cz/blog/57-href-tel](http://www.vrdl.cz/blog/57-href-tel)

Téhle širší kategorii řešení můžeme říkat adaptivní webdesign. 

<figure>
<img src="dist/images/original/vdwd/adaptivni.jpg" alt="">
<figcaption markdown="1">    
*Do adaptivního webdesignu patří kromě technik responzivního designu také například řešení rychlosti načítání nebo technologie responzivních obrázků*
</figcaption> 
</figure> 

Původní definice responzivního designu už prostě dnešním webům nestačí.


## Responzivní webdesign = adaptivní webdesign = webdesign

Mnohé dnešní weby tedy nejsou responzivní, ale adaptivní. Jenže lidé je jako *responzivní* pořád označují. Proč? Protože si na to zvykli a my už s tím nic nenaděláme. Pro potřeby zdejších textů tedy budeme dál mluvit o *responzivním* designu a k jeho implementaci užívat technik designu *adaptivního*. 

Ono na tom vlastně v dlouhodobé perspektivě nezáleží. Fáze webdesignu, ve které bylo potřeba rozlišovat responzivní a „normální“, snad už brzy skončí. Všechny weby budou responzivní, takže to přídavné jméno můžeme přestat používat.

Slovem *responzivní* se totiž dnes už hlavně vyhraňujeme vůči předchozímu způsobu tvorby webů. *Responzivní* je tedy více pojmenování pro aktuální způsob tvorby. Pro aktuální etapu webdesignu. A tahle etapa skončí.

Za pár let už slova „responzivní“ nebo „adaptivní“ potřebovat nebudeme. Všechny weby budou responzivní, jen budované prostředky adaptivního designu. Nebude responzivní webdesign, zůstane zase jen *webdesign*. 

<p class="ebook-only">
  Pojmologii už ale uzavřeme. V další kapitole budeme pracovat na příkladu konkrétního (responzivního) webu, takže nás čeká praxe. Začít ale musíme zeširoka, protože rozumný návrh (responzivního) uživatelského rozhraní vzniká až na základě informací získaných z analytické fáze projektu. Víte vy co? Pojďme si raději povědět něco o tom, jak se dneska tvoří weby. Slibuji, že to bude stručné.
</p>

