# 8 tipů pro jednodušší rozhraní na mobilech

![Zetor.cz]()

<figure>
<img src="dist/images/original/vdwd/triky-ui-7.jpg" alt="">
<figcaption markdown="1">    
*Zbytečné ikony sociálních sítích na Albert.cz a podlehnutí ikonománii na EquaBank.cz*
</figcaption> 
</figure>

## 1) Dejte pryč všechny zbytečnosti 

Na obrazovce máme málo místa, proto tam nechte jen to opravdu nejdůležitější. Výběr jazyka viditelný hned v hlavičce webu Zetor.cz na obrázku lze dělat automaticky na serveru nebo přidat do uživatelského nastavení či prostě někam do patičky. Informace, které od uživatele nutně nepotřebujete, po něm nechtějte. Informace, které uživatel nutně nepotřebuje, mu nezobrazujte. 

## 2) Nepodlehněte ikonománii

Mnoho grafiků šetří místo v mobilních rozhraních nadměrným používaným ikon. Ale jak už bylo mnohokrát prokázáno, většina ikon má velmi nejednoznačný význam. Podívejme se na web EquaBank.cz na dalším obrázku a udělejme si kvíz: co má na starosti první, druhá a třetí modrá ikona? První vede do mapové aplikace nebo je to seznam poboček. Najdu tam i bankomaty? Druhá je… to vážně netuším. Třetí budou asi kontakty. Nebo jen telefon? Bude můj telefon hned volat na zákaznickou linku?

Na většinu ikon se nedá spolehnout. Doplňte je popisy dat. Více v textu „UX Myth: Icons enhance usability“ na UXMyths.com.[vrdl.in/7qc2n](http://uxmyths.com/post/715009009/myth-icons-enhance-usability)

<figure>
<img src="dist/images/original/vdwd/triky-ui-8.jpg" alt="">
<figcaption markdown="1">    
*Špatně použitelný seznam poboček v rozbalovací nabídce na FotoSkoda.cz a chytřejší výběr položek na CSOBpoj.cz*
</figcaption> 
</figure>

## 3) Šetřete rozbalovacími nabídkami 

S rozbalovacími nabídkami (typu `<select>`) je na mobilech tolik potíží, až o nich Luke Wroblewski napsal, že je máme použít jen jako poslední záchranu. Ani na webu FotoSkoda.cz  se nevyhnuli nasypání ohromného seznamu poboček Uloženky do rozbalovací nabídky. Zkuste si tam najít tu, která je nejblíž vašemu bydlišti. Třeba v Praze, kde samozřejmě všechny ulice znát nemůžete. A představte si počet otravných tapnutí, které takovému rozhraní musíte věnovat. To bolí! Web CSOBpoj.cz to má naopak hezky, rozbalovací nabídky vyměnili za přepínače. Podívejte se na obrázek. 

Více také v textu od Luke Wroblewskiho „Dropdowns Should be the UI of Last Resort“. [vrdl.in/gad1e](http://www.lukew.com/ff/entry.asp?1950)

<figure>
<img src="dist/images/original/vdwd/triky-ui-9.jpg" alt="">
<figcaption markdown="1">    
*Špatně použitelná alfanumerická klávesnice na CSOBpoj.cz a lepší numerická na SmileBox.cz*
</figcaption> 
</figure>

## 4) Otevírejte pohodlné klávesnice

Web CSOBpoj.cz uživatele nutí vyplnit číselný údaj na alfanumerické klávesnici. SmileBox.cz to myslím vymyšleno lépe, otevře čistě numerickou. Podívejte se na obrázek. Kdykoliv po uživateli chcete vyplnit telefonní číslo, volte specifický typ formulářového pole. Hodí se pro vkládání telefonů (`<input type="tel">`), emailů, URL adres nebo na vyhledávací pole.

Více na speciální stránce MobileInputTypes.com. [mobileinputtypes.com](http://mobileinputtypes.com/)

A ještě, prosím, telefonní čísla na stránce vždy na mobilních zařízeních vypisujte jako odkazy. [http://vrdl.cz/blog/57-href-tel](http://www.vzhurudolu.cz/blog/57-href-tel)

<figure>
<img src="dist/images/original/vdwd/triky-ui-10.jpg" alt="">
<figcaption markdown="1">    
*Krokovač na CSOBpoj.cz a našeptávač u vyhledávání na VaseCocky.cz*
</figcaption> 
</figure>


## 5) Používejte krokovače a další alternativní formulářové prvky

Opět se vracíme k náhradě nešťastného `<select>`. Krokovač (stepper) pomocí běžného HTML neuděláte, ale za vylepšený uživatelský prožitek pár řádků Javascriptu stát může. Zvažte i další alternativní formulářové prvky. Hledejte je rovnou v angličtině: Radio Group, Button Input,  Slider, Segmented Control.

## 6) Zamilujte si našeptávače 

Jsou velmi dobrým pomocníkem ve formulářových polích, kde je velké množství možných vstupů: hlavně ve vyhledávání, které je na mobilech kvůli časté nepřítomnosti plnohodnotné navigace velmi důležité. V HTML pro ten účel existuje prvek `<datalist>`. Jeho využití je omezené, ale určitě se na něj podívejte. Běžné našeptávače jsou v podobně pluginů dostupné pro každý moderní javascriptový framework.

<figure>
<img src="dist/images/original/vdwd/triky-ui-11.jpg" alt="">
<figcaption markdown="1">    
*Nutnost psát na SmileBox.cz a rozbalování méně významného obsahu na VaseCocky.cz*
</figcaption> 
</figure>

## 7) Nenuťte mobilního uživatele psát

 
Tohle bych na webu SmileBox.cz ještě dotáhl. Mám na mobilu napsat text „kde, kdy a jak“ chci přístroj pronajmout? To, prosím ne. Na mobilu se nepíše. Co takhle tři na pár kliků ovládatelné vstupy? 

## 8) Neprotahujte stránku

Spoléhám na to, že uživatelé stránku posunovat umí. To ano. Neznamená to ale, že stránka by měla být dlouhá jako ponožky Pipi dlouhé punčochy. Hezký objev od UX konzultanta Jana Kvasničky vidíte na obrázku:

<figure>
<img src="dist/images/original/vdwd/triky-ui-12.jpg" alt="">
<figcaption markdown="1">    
*Pro použití některých stránek bychom potřebovali trošku vyšší telefon. Tady je vidět předkošík na Smarty.cz. Je to modální okno, které se objeví po přidání zboží do košíku. Důležité aktivní prvky jsou červně orámované. Zdroj: Jan Kvasnička. [kvasnickajan.cz](http://blog.kvasnickajan.cz)*
</figcaption> 
</figure>

Dlouhá stránka kromě této konkrétní nevýhody taky odsunuje spodní část rozhraní – patičku. Jak už jsem psal, s koncem stránky roste pozornost uživatelů, protože tam bývá sekundární navigace. Příliš dlouhá stránka pak zhoršuje její přístupnost. Prostě se uživatel vyčerpá rolovacím maratonem.

Hledejte alternativní způsoby zobrazení: 

* offcanvas (vysunování obsahu ze strany)
* modální okna nebo karusely (jen pozor na správnou implementaci)
* roztahovací akordeóny (collapse)

Když už jsem zmiňoval Jana Kvasničku, vřele doporučuji jeho text a přednášku „Nejčastější chyby při návrhu mobilního a responzivního webu prakticky“. [vrdl.in/2tghs](http://blog.kvasnickajan.cz/prakticky-pruvodce-nejcastejsimi-chybami-pri-navrhu-mobilniho-a-responzivniho-webu/)

