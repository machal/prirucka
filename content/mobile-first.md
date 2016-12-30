# Filozofie „Mobile First“

Mobile First je způsob návrhu uživatelského rozhraní, který z pohledu důležitosti staví mobilní zařízení minimálně na úroveň tradičních počítačů s velkými obrazovkami. 

Kromě reflexe nástupu mobilů na trh má Mobile First  ještě jednu – daleko zajímavější – vedlejší účinek. Učí nás navrhovat jednodušší a myslím, že i lepší rozhraní.

Autor myšlenky, Luke Wroblewski, ji nadefinoval asi takto:

„Designéři, navrhujte nejprve pro mobily. Protože se prudce šíří mezi uživateli, díky svými omezením nás nutí zaměřit pozornost na to nejdůležitější a rozšiřují naše možnosti.“

Parafrázuji, necituji. Plné znění hledejte ve Wroblewskiho článku „Mobile First“. [vrdl.in/4slev](http://www.lukew.com/ff/entry.asp?933)

## Mobily mají větší budoucnost než desktop

Jak už jsem mnohokrát zmínil, podíl mobilů na trhu roste. Uživatelé příručních přístrojů budou jednou tvořit většinu návštěvnosti pravděpodobně i na vašem webu. 

Pro ilustraci ještě jedno číslo – 92 % aktivních uživatelů nyní na Facebook.com přistupuje přes mobilní zařízení. [vrdl.in/6xnd5](https://twitter.com/lukew/status/758433206882361345)

Proto „nejdříve mobily“.

## Malý displej nutí designéry zaměřit pozornost na to nejdůležitější

Návrh rozhraní v desktopovém světě počítal s tím, že máme k dispozici velkou plochu obrazovky. Z takto vymyšleného rozhraní se pak varianta pro mobily odvozuje velmi špatně.

Pro mnohé designéry, včetně mě, je proto lepší si rozhraní navrhnout nejprve pro ty nejmenší displeje. 

![VašeČočky.cz - dvě skici](dist/images/original/vdwd/vase-cocky-dve-skici.png)

*Obrázek: Rychlé ruční skici pro VašeČočky.cz.*

Při skicování mobilního rozhraní jsme omezení plochou a rozhraní zredukujeme na to nejpodstatnější. Pro přípravu verze pro větší displeje často stačí jen použít běžné techniky responzivního designu – zvětšení nebo mírné přeskládání elementů.

## Mobily ale také rozšiřují naše možnosti

Rád bych také zmínil, že příchod mobilů neznamená pro designéry jen omezení jako je zmenšení plochy displeje, horší vykreslovací výkon nebo pomalejší internetové připojení. Znamená také nové možnosti. Mobily máme stále u sebe, poskytují informace o naší poloze a tak dále. Mnoho vlastností dnešních webů a aplikací by bez mobilů vůbec nemohlo vzniknout.

## Jen ne „Desktop First“!

Uvědomme si, že Wroblewski s myšlenkou přišel v roce 2009. Jen dva roky po uvedení prvního iPhonu.  Návrh rozhraní nejdříve pro mobily vznikl ve své době jako reakce na v té době převládající postup. Weby se navrhovaly jen pro velké displeje. Takzvaným „Desktop First“ postupem. 

Mobily se pak řešily až v implementační fázi nebo dokonce až po implementaci rozhraní pro velké displeje. Nastávaly ohromné vývojářské i designérské potíže. Ve výsledku pak velké kompromisy v uživatelském rozhraní na mobilech. Že je téma stále žhavé, ukazuje fakt, že v mnoha českých webařských týmech jde stále o aktuální způsob práce. To bolí!

## Dnes už nejde o upřednostnění mobilů, ale hledání jednoho řešení vhodného pro všechny

Pojmenování Mobile First vyvolává dojem, že mobilní zařízení je nutné upřednostňovat. Já se ale přikláním k méně vyhraněnému přístupu: všechny typy relevantních zařízení považujme za důležité. 

I tak ale doporučuji myslet při návrhu rozhraní nejdříve na mobily. Je to těžký začátek, ale ušetříme si tak spoustu problémů v další fázích návrhu a implementace.

## „Desktop First“ a „Mobile First“ na příkladech

Příkladů „Desktop First“ řešení najdeme v Česku hodně. Vezměme Alzu, která má v době mého psaní dva oddělené weby pro malé a pro velké displeje. 

Jen si například spočítejte, kolik různých navigací má desktopová verze Alzy. Už to samo o sobě nevěstí nic dobrého pro převod do mobilní podoby. V té pak některé navigace zmizí, jiné pak vypadají výrazně jinak než na desktopu. Rozhraní tedy z pohledu uživatele trpí nekonzistencí. Vzpomeňte na moje čtyři principy.

![Alza.cz](dist/images/original/vdwd/alza-cz.png)

*Obrázek: Nynější Alza.cz jako příklad „Desktop First“ přístupu. Mobilní verze je odvozená a nekonzistentní s desktopovou.*

Weby jako Alza si za sebou pochopitelně táhnou zátěž v podobě své historie.  Provozovatelé velkých a úspěšných webů samozřejmě nechávají zásadní redesign až na chvíli, kdy je nezbytně nutný. Převod do responzivní „Mobile First“ verze bude v případě Alzy znamenat práci na mnoho měsíců až let. 

Na druhé straně je Maternia, provozovatel e-shopů jako VašeČočky.cz nebo Lentiamo.co.uk, a můj vážený klient. Tam se k zásadním změnám rozhodli už při zvažování mobilní verze. Mobile First postupem jsme postupně přepracovali celý web. Všechny komponenty rozhraní webu jsou jednotné z pohledu uživatele, ale i z pohledu návrhu a technologie.

![Lentiamo.co.uk](dist/images/original/vdwd/lentiamo-co-uk.png)
