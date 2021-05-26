# Google Page Experience update

Asi víte, že Google bude od poloviny června postupně nasazovat aktualizaci algoritmu nazvanou [Page Experience](https://developers.google.com/search/docs/guides/page-experience), navrženou tak, aby zvýrazňovala stránky, které nabízejí výborný uživatelský prožitek.

V tomhle článku se zaměříme na to, abychom tu poněkud vágní definici upřesnili.

Důležité je hned na začátku říct, že podle Google nepůjde o žádnou revoluci. Signál Page Experince bude používat spolu se stovkami další a nikdy [nebudou silnější](https://developers.google.com/search/blog/2020/05/evaluating-page-experience) než signály pro kvalitní obsah:

> Our systems will continue to prioritize pages with the best information overall, even if some aspects of page experience are subpar. A good page experience doesn't override having great, relevant content.

## Kdy se to začne nasazovat?

Změny začne Google aplikovat na své systémy od poloviny června 2021. Bude to nasazovat postupně, aby odladil případné bugy a očekává, že celou akci ukončí ke konci srpna.

Na jaké atributy se ale budou ve svých automatizovaných hodnoceních dívat?

## Signály

Ve [videu](https://www.youtube.com/watch?v=h00kn5J-F2Q) z letošní konference Google.IO ukazuje Jeffrey Jose všechny atributy, které má dobrá uživatelská zkušenost se stránkou a zároveň je Google bude v aktualizaci zohledňovat.

<iframe width="560" height="315" src="https://www.youtube.com/embed/h00kn5J-F2Q?start=122" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Je zajímavé, že se signály nyní třídí trochu jinak. Není to dokonalé, ale řekněme, že blíž k dokonalosti. Signály jsou roztříděné do následujících oblastí.

### Načítání

V originále se kategorie jmenuje „Loading“. Patří sem metriky:

* _[*Largest Contentful Paint (LCP)*](metrika-lcp.md)_  
Největší vykreslení obsahu. Metrika, která popisuje rychlost načítání stránky – *načítací (loading)* výkon. Jde o něco mezi [FCP](metrika-fcp.md) a [SpeedIndexem](speedindex.md). Pro splnění musíte mít LCP na úrovni 2,5 s nebo méně.
* _[*First Input Delay (FID)*](metrika-fid.md)_  
Prodleva prvního vstupu. Metrika, která popisuje jak rychle může uživatel na stránce začít provádět úlohy – výkon *interaktivity*. Jedná se tedy o metriku podobnou [TBT](metrika-tbt.md). Pro splnění musíte mít FID 100 ms a rychlejší.

Možná by téhle oblasti bylo lepší říkat „rychlost“, protože výkon interaktivity a JavaScriptu vyjádřený v FID zase tak moc o „načítání“ není.

### Obtěžování uživatele

V originále „User Annoyance“. Metriky jsou následující:

* _[*Cumulative Layout Shift (CLS)*](metrika-cls.md)_  
Kumulativní posun layoutu. Metrika, která popisuje *vizuální stabilitu* layoutu během vykreslování. Pro splnění je potřeba zvládnout CLS na hodnotě 0,1 a lepší.
* _Žádné otravné překryvné prvky_  
V originále „no abusive interstitials“ znamená, že byste neměli přikrývat obsah stránky velkými modálními okny s reklamou. Více najdete v [textu od Googlu](https://developers.google.com/search/blog/2016/08/helping-users-easily-access-content-on).

Všimněte si, že CLS, se neuvádí mezi rychlostními metrikami, což je samozřejmě dobře, protože s rychlostí zase tak nesouvisí.

<!-- TODO obrázek hodnoty metriky WV -->

→ *Související: [Metriky Web Vitals od Googlu](web-vitals.md)*.

### Bezpečnost a soukromí

V originále „Security & Privacy“. Hlídá se zde toto:

* _[HTTPS](https.md)_  
Měli byste na webu mít zapnutý bezpečný protokol HTTPS. Tohle už snad máte, ale pro jistotu odkaz na [podklady od Googlu](https://developers.google.com/search/blog/2016/11/heres-to-more-https-on-web).
* _Žádná upozornění k bezpečnému prohlížení_  
Lépe to asi vysvětlí originál - „No safe browsing flags“. Váš web nebo stránka nesmí být detekována jako ohrožující uživatele. Více [v textu od Googlu](https://developers.google.com/search/blog/2016/09/more-safe-browsing-help-for-webmasters).

### Přístupnost

V originále pochopitelně říkají „Accessibility“ a patří sem jen jedna oblast:

* _Přívětivost pro mobilní uživatele_  
V originále „Mobile friendliness“. V této oblasti [Google sleduje](https://developers.google.com/search/blog/2015/02/finding-more-mobile-friendly-search) zda jsou stránky dobře optimalizované pro uživatele mobilních webů. Je možné si použitelnost na mobilech [otestovat](https://search.google.com/test/mobile-friendly).  

## Jak se to bude posuzovat?

Zaměřím se zde hlavně na Web Vitals, metriky LCP, FID a CLS, které jsou z uvedného seznamu nejnovější. A zároveň se mi zdá, že kolem [měření rychlosti](https://www.vzhurudolu.cz/video/webinar-rychlost-mereni) existuje celá řada mýtů.

### 1) Měří se u uživatelů

Důležité je, že se budou využívat data od skutečných uživatelů, z [Chrome UX Reportu](chrome-ux-report.md).

Explicitně raději uvádím, že Google nezajímají syntetická měření v [Lighthouse](lighthouse.md) a už vůbec ne [Lighthouse skóre](metrika-lps.md). Ty slouží pro vývojáře a zjednodušení optimalizací, nikoliv pro zjištění, jak na tom web je u Googlu.

Data od uživatelů můžete nejjednodušším způsobem vytáhnout v [PageSpeed Insights](pagespeed-insights.md), podrobněji pak v našem [testeru na PageSpeed.cz](https://pagespeed.cz/). Doplňujte to vždy pohledem do [Google Search Console](google-search-console.md), ale o tom ještě psát v textu dále.

Další aspekty, které byly uváděny na Google.IO skvěle [v tweetu](https://mobile.twitter.com/fabkru/status/1396331280585928707) shrnul Fabian Krumbholz, takže z něj vyjdu.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My take aways from the Google’s Web Vitals Q&amp;A: <a href="https://t.co/v1BnVXtkTN">https://t.co/v1BnVXtkTN</a><a href="https://twitter.com/hashtag/CWV?src=hash&amp;ref_src=twsrc%5Etfw">#CWV</a> <a href="https://twitter.com/hashtag/SEO?src=hash&amp;ref_src=twsrc%5Etfw">#SEO</a> <a href="https://twitter.com/hashtag/WebPerf?src=hash&amp;ref_src=twsrc%5Etfw">#WebPerf</a> <a href="https://t.co/2M7eIrqpKe">pic.twitter.com/2M7eIrqpKe</a></p>&mdash; Fabian Krumbholz (@fabkru) <a href="https://twitter.com/fabkru/status/1396331280585928707?ref_src=twsrc%5Etfw">May 23, 2021</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 2) Každá metrika samostatně jako signál

Po Page Experience update bude Google hodnotit každou z Web Vitals samostatně jako signál pro hodnocení.

Chápu to tak, že nemusíte mít všechny zelené, ale pro každou jednotlivou metriku budete porovnáváni s konkurencí.

Takže pokud konkurence nebude mít zelené LCP a vy ano, můžete za tuto oblast získat zvýhodnění.

### 3) Zvýhodnění dostanete za zelené metriky

Viz obrázek v Tweetu. John Mueller to podepřel půvabnou grafikou vytvořenou snad v Malování:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Think of it like this. Graphic not to scale. <a href="https://t.co/6lLUYNM53A">pic.twitter.com/6lLUYNM53A</a></p>&mdash; 🍌 John 🍌 (@JohnMu) <a href="https://twitter.com/JohnMu/status/1395798952570724352?ref_src=twsrc%5Etfw">May 21, 2021</a></blockquote>

Systém vyhodnocování je nastavený na zvýhodňování. Pokud máte metriku v červené oblasti hodnot, nezískáváte žádné. 

Pokud v oranžové oblasti hodnot, čím blíže bude hodnota optimu, tím vyšší zvýhodnění získáte.

Nejvyšší „boost“ získáváte s metrikou v zeleném škále hodnot.

### 4) Lepší než zelené už to být nemůže

Google dále [píše](https://support.google.com/webmasters/thread/104436075/core-web-vitals-page-experience-faqs-updated-march-2021):

> Dopad na hodnocení stránek bude stejný pro všechny stránky, které jsou v dobrém rozsahu u všech základních ukazatelů Web Vitals, bez ohledu na jejich individuální skóre v Core Web Vitals.

To znamená, že když už máte zelené skóre, nemůže to být lepší.

Google píše, že například stránka s LCP 1750 ms (lepší než „dobrá“ hranice pro LCP) a jiná stránka s 2500 ms (na úrovni „dobré“ hranice) by se na základě signálu LCP nerozlišovaly.

Mimo dobrý rozsah by rozdílné hodnoty metriky Core Web Vital u dvou stránek mohly vést k rozdílnému hodnocení v rámci Page Experience.

### 5) Doména > Skupina stránek > URL

Když se podíváte na grafiku od Fabiana Krumbholze, měla by vás zaujmou část týkajících se domény (Origin) a skupiny stránek.

Víte, že z CrUX dat často nejde vytáhnout informace pro konkrétních URL. Je zajímavé, že Google v tom případě nesáhne po datech pro celou doménu, ale po datech pro „skupinu stránek“.

Skupinu stránek osobně chápu podle seskupení, které Google dělá v reportu Web Vitals v Search Console. Na jednu hromadu tam dává stránky, které jsou si podobné (např. všechny kategorie v e-shopu) a zároveň vidí, že mají problémy s podobnými metrikami.

Takže, když nejsou data pro URL, vezmou se data pro skupinu stránek. Když nejsou data pro skupinu stránek, vezmou se data pro doménu. Přesně jak říká Babica.

A co když nejsou data pro doménu? I to se stává, zejména u méně navštěvovaných webů. Myslím, že pak prostě výhodu na základě Page Experience signálů získat nemůžete.

### 6) Data se berou globálně

Zajímavé také je, že data se z CrUX nevezmou podle aktuální lokality, takže například pro Česko nebo Slovensko, ale z globální návštěvnosti.

Takže pokud v ČR a SR máte dobré hodnoty Web Vitals, ale kazí vám je malá část návštěvníků kdesi na druhém konci světa, budete to muset vyřešit.

### 7) Data se berou ze posledních 28 dní

Google nebude pracovat s měsíčními daty, která např. na PageSpeed.cz zobrazujeme v [záložce Domény](https://pagespeed.cz/r/c8c4649e8e44#domeny), ale se stavem za posledních 28 dní, který znáte z PageSpeed Insights a který zobrazujeme [v záložce Shrnutí](https://pagespeed.cz/r/c8c4649e8e44#shrnuti).

## Konec zvýhodnění AMP (a konec AMP?)

Asi víte, že [AMP stránky](amp.md) dříve získávaly zvýhodnění na určitých místech ve vyhledávání Googlu.

Určitě to platilo v takzvaném Top Stories karuselu, ale také nejspíš v Google News.

<!-- TODO obrazek AMP v Top Stories -->

Google za to byl terčem kritiky, že tímto způsobem tlačí lidem svou technologii, což asi chápu. Nicméně už v době, kdy toto implemtovali, mluvili v Googlu o dočasnosti tohoto řešení.

Google totiž nebyl schopný dobře měřit rychlost webu u uživatelů, proto dal zvýhodnění webům psaným v technologii, která určitou rychlost dokáže garantovat.

Nyní už to neplatí, takže zvýhodnění v Top Stories, Google News a na dalších místech může získat jakýkoliv web, který je dostatečně rychlý, respektive plní dostatečně signály z Page Experience.

Respektive – v zásadě ani rychlý být nemusí, stačí když plní podmínky specifikované [v Google News policies](https://support.google.com/news/publisher-center/answer/6204050).

## Konec AMP?

Přání je otcem myšlenky, takže mnoho lidí, kteří AMPu nemohou přijít na jméno, sepsalo [články](https://www.lafoo.com/the-end-of-amp/) o [konci](https://plausible.io/blog/google-amp) AMPu.

Proč by měly firmy publikovat v AMP, když „jediným důvodem“ pro použití AMP je právě přítomnost v exkluzivních místech SERPu?

Přátelé, problém je s tím „jediným důvodem“.

AMP je technologie, která dokáže garantovat vysokou kvalitu výstupu z pohledu rychlosti, uživatelské zkušenosti nebo například přístupnosti. Z mé zkušenosti konzultanta rychlosti webů můžu říct, že na takové úrovni to u běžných webových technologií dokáže jen velmi málo týmů.

Mimochodem, uvedené potvrzují [i statistiky](https://blog.amp.dev/2020/10/13/meet-amps-page-experience-guide/):

> 60% of AMP domains and 12% non AMP domains pass Web Vitals.

Pokud se někdy přiblíží konec AMP, bude to z úplně jiných důvodů a bude pak velmi zajímavé o tom psát i diskutovat. Teď se to ale nestane.

AMP stránky také pravděpodobně nebudou mít označení ve výsledcích vyhledávání. Pokud to chápu správně, Google uvažuje o zvýraznění webů, které splňují Core Web Vitals.


<!-- signed exchanges -->

<!-- co musím udělat? -->
