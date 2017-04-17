# Filozofie „Mobile First“

Mobile First je způsob návrhu uživatelského rozhraní, který z pohledu důležitosti staví mobilní zařízení minimálně na úroveň tradičních počítačů s velkými obrazovkami. 

Kromě reflexe nástupu mobilů na trh má Mobile First  ještě jednu – daleko zajímavější – vedlejší účinek. Učí nás navrhovat jednodušší a myslím, že i lepší rozhraní.

Autor myšlenky, Luke Wroblewski, ji nadefinoval asi takto:

> Designéři, navrhujte nejprve pro mobily. Prudce se šíří mezi uživateli. Nutí zaměřit pozornost na to nejdůležitější. A rozšiřují naše možnosti.

Parafrázuji, necituji. Plné znění hledejte ve slavném Wroblewskiho článku „Mobile First“. [vrdl.in/4slev](http://www.lukew.com/ff/entry.asp?933)

## Mobily budou používanější než desktop. Někde už jsou

Jak už jsem mnohokrát zmínil, podíl mobilů na trhu roste. Uživatelé příručních přístrojů budou jednou tvořit většinu návštěvnosti téměř jistě i na vašem webu. Proto „nejdříve mobily“.

<figure>
<img src="dist/images/original/mobile-facebook-graph.jpg" alt="VašeČočky.cz - dvě skici">
<figcaption markdown="1">    
*94 % uživatelů Facebooku přistupovalo ke konci roku 2016 na Facebook přes mobilní zařízení. 62 % používalo výlučně mobilní zařízení. Zdroj: Luke Wroblewski. [vrdl.in/6xnd5](https://twitter.com/lukew/status/758433206882361345)*
</figcaption> 
</figure>



## Malý displej nutí designéry zaměřit pozornost na to nejdůležitější

Návrh rozhraní v desktopovém světě počítal s tím, že máme k dispozici velkou plochu obrazovky. Z takto vymyšleného rozhraní se pak ale varianta pro mobily odvozuje velmi špatně.

Pro mnohé designéry, včetně mě, je proto lepší si rozhraní navrhnout nejprve pro ty nejmenší displeje. 

<figure>
<img src="dist/images/original/vdwd/vase-cocky-dve-skici.png" alt="">
<figcaption markdown="1">    
*Rychlé ruční skici pro VašeČočky.cz*
</figcaption> 
</figure>

Při skicování mobilního rozhraní jsme omezení plochou a rozhraní zredukujeme na to nejpodstatnější. Pro přípravu verze pro větší displeje často stačí jen použít běžné techniky responzivního designu: zvětšení nebo mírné přeskládání elementů.

Je ale tento nový pohled na návrh jediným důsledkem „Mobile First“ filozofie?


## Mobily také rozšiřují naše možnosti

Příchod mobilů neznamená pro designéry jen omezení: zmenšení plochy displeje, horší vykreslovací výkon nebo pomalejší internetové připojení. 

Znamená také nové možnosti. Mobily máme stále u sebe, poskytují informace o naší poloze a tak dále. Mnoho vlastností dnešních webů a aplikací by bez mobilů vůbec nemohlo vzniknout. Vezměme třeba daleko lepší možnosti lokalizace uživatelů nebo možnost jejich okamžité reakce na newslettery nebo sociální sítě.

Opravdu ale chceme dávat mobily na první místo?


## Hlavně ne „Desktop First“!

Uvědomme si, že Wroblewski s myšlenkou přišel v roce 2009. Jen dva roky po uvedení prvního iPhonu.  Zvolání „Mobile First!“ vzniklo jako reakce na v té době převládající postup. Weby se navrhovaly jen pro velké displeje. Takzvaným „Desktop First“ postupem. 

Mobily se pak řešily až v implementační fázi nebo dokonce až po implementaci rozhraní pro velké displeje. Nastávaly ohromné vývojářské i designérské potíže. Ve výsledku pak velké kompromisy v uživatelském rozhraní na mobilech. Že je téma stále žhavé, ukazuje fakt, že v mnoha českých webařských týmech jde stále o aktuální způsob práce. To bolí!

## Dnes už nejde o upřednostnění mobilů, ale hledání jednoho řešení vhodného pro všechny

Pojmenování Mobile First vyvolává dojem, že mobilní zařízení je nutné vždy a všude upřednostňovat. Já se ale přikláním k méně vyhraněnému přístupu: všechny typy relevantních zařízení považujme za důležité. 

Pro mě i mnoho dalších je ale efektivnější myslet při návrhu rozhraní nejprve na mobily. Je to těžký začátek, ale šetřím si tak spoustu problémů v další fázích návrhu a implementace.

## „Desktop First“ a „Mobile First“ na příkladech

Příkladů „Desktop First“ řešení najdeme v Česku hodně. Vezměme Alzu, která má v době mého psaní dva oddělené weby pro malé a pro velké displeje. Webařský tým Alzy odvádí skvělou práci, stačí se podívat na jejich pozici na trhu. Nesou si s sebou ale zátěž návyku uživatelů na web, který už dnes nesplňuje podmínky efektivního vývoje.

Jen si například spočítejte, kolik různých navigací má desktopová verze Alzy. Už to samo o sobě nevěstí nic dobrého pro „převod“ do mobilní podoby. V té pak některé navigace zmizí, jiné pak vypadají výrazně jinak než na desktopu. Rozhraní tedy z pohledu uživatele trpí nekonzistencí. 

<figure>
<img src="dist/images/original/vdwd/alza-cz.jpg" alt="">
<figcaption markdown="1">    
*Nynější Alza.cz jako příklad „Desktop First“ přístupu. Mobilní verze je  samostatný web na jiné doméně. Rozhraní na obou typech zařízení trpí nejednotností*
</figcaption> 
</figure>

Provozovatelé velkých a úspěšných webů samozřejmě nechávají zásadní redesign až na chvíli, kdy je nezbytně nutný. Převod do responzivní „Mobile First“ verze bude v případě Alzy znamenat práci na mnoho měsíců až let. 

Na druhé straně je Maternia, provozovatel e-shopů jako VašeČočky.cz nebo Lentiamo.co.uk, a můj vážený klient. Tam se k zásadním změnám rozhodli už při zvažování výroby speciální mobilní verze. 

Mobile First postupem jsme postupně přepracovali celý web. Všechny komponenty rozhraní webu jsou co možná nejvíce jednotné z pohledu uživatele všech zařízení, ale i z pohledu návrhu a technologie.

<figure>
<img src="dist/images/original/vdwd/vasecocky-mobil-desktop.jpg" alt="">
<figcaption markdown="1">    
*VašeČočky.cz jako příklad „Mobile First“ přístupu*
</figcaption> 
</figure>
