# Proč na mobilech neschovávat obsah? 

Jako příklad si vezmeme tabulku fotbalové ligy.

<figure>
<img src="dist/images/original/tabulky_6.jpg" alt="">
<figcaption markdown="1">    
*Tabulka pořadí fotbalové ligy v prosinci 2016. Zdroj obsahu: sport.cz*
</figcaption> 
</figure>

Pokud jste, stejně jako já, zcela mimo fotbalové dění, pak „Z“ je počet zápasů, „V“ je počet výher, „R“ remíz a „P“ proher. Tohle v mobilním pohledu úplně chybí. A protože mě už trochu znáte, víte, že tady začnu zvedat obočí.

Vezmeme to ale od začátku. Pojďme si představit, že navrhujeme řešení pro konkrétní web. Víme, že návštěvníci jsou běžní fotbaloví fanoušci. O fotbale něco ví, ale nepotřebují detailní informace jako třeba sázkaři. Obsah tabulky známe a teď vymýšlíme řešení designu na malých displejích. Do zařízení s rozlišením 320 nebo nedejbože 240 pixelů se nám celá tabulka nevejde, že? Neodstraníme prostě na mobilech některé sloupečky? 

## Informace na vašich stránkách mají být dostupné na všech zařízeních

Je pravda, že informace v takové tabulce mají nějakou hierarchii: Pořadí, tým a počet bodů jsou nejdůležitější. Skóre a počet zápasů hned za nimi. Výhry, remízy a prohry méně důležité a logo týmu na posledním místě. Na obrázku jsem poslední jmenované v mobilním pohledu odstranil. Jenže…

*Logo týmu* zde sice nese informaci, kterou už můžete získat z názvu týmu, ale je důležité navigačně. Na mobilu se lidem bude bez loga oblíbený tým hledat hůř. Schováním loga jsem sice ušetřil místo, ale zároveň zhoršil uživatelský prožitek.

*Výhry, remízy a prohry* jsou sice méně důležité, ale… proč je pak máme na velkých displejích? Pokud jsme na základě rozboru cílových skupin došli k tomu, že uživatelé tohoto webu takové informace potřebují, mají tady být na všech zařízeních. Vzpomeňte si, když jsem zmiňoval, že jeden člověk vidí vaše weby na různých zařízeních. Na jiném webu, třeba obecně zpravodajském by pak nepřítomnost těchto informací smysl dávala. 

Jak bych tedy na tabulku na mobilech vyzrál? Použil bych řešení „Posun do stran s fixním sloupcem“ z [podkapitoly o tabulkách](responzivni-tabulky.md). Ponechal bych v ní všechny informace a zajistil fixní pozici sloupečků s pořadí, logem a názvem týmů. Ostatní sloupečky pak nechal uživatele posouvat do stran.


