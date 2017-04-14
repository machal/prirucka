# Proč na mobilech neschovávat obsah? 

Jako příklad si vezmeme tabulku fotbalové ligy na Sport.cz, která v den, kdy tento text píšu, vypadá jako na obrázku.

![](dist/images/original/tabulky_6.png)

*Tabulka pořadí první fotbalové ligy v prosinci 2016. Zdroj: sport.cz*

Mimochodem, pokud jste, stejně jako já, zcela mimo fotbalové dění, pak „Z“ je počet zápasů, „V“ je počet výher, „R“ remíz a „P“ proher. Tohle na mobilu úplně chybí. A protože mě už trochu znáte, víte, že tady začnu zvedat obočí.

Vezmeme to ale od začátku. Pojďme si představit, že vymýšlíme chování tabulky na malých displejích. Do zařízení s rozlišením 320, nedejbože 240 pixelů se nám tabulka nevejde, že? Kterou z variant chování tabulek na responzivních webech použít? Neodstranit na mobilech některé sloupečky? 

Je pravda, že informace v takové tabulce mají nějakou hierarchii: Pořadí, tým a počet bodů jsou nejdůležitější. Skóre a počet zápasů hned za nimi. Výhry, remízy a prohry méně důležité a logo týmu na posledním místě. Stejně to vyhodnotili autoři tabulky a poslední jmenované na mobilech zkrátka vyšoupli. Jenže…

*Logo týmu* nenese zde nese informaci, kterou můžete získat z názvu týmu. Důležité je ale navigačně. Na mobilu se lidem bude oblíbený tým hledat hůř. Autoři řešení tedy ušetřili místo, ale zároveň mohli zhoršit uživatelský prožitek.

*Výhry, remízy a prohry* jsou sice méně důležité, ale… proč je pak máme na velkých displejích? Nemám tady samozřejmě rozbor cílových skupin a jejich potřeb pro Sport.cz, ale tipuji, že zrovna uživatelé tohoto webu takové informace potřebují. Na jiném webu, třeba obecně zpravodajském by pak nepřítomnost těchto informací smysl dávala. 

Jak bych tedy tabulku na mobilech řešil? Použil bych řešení „Posun do stran s fixním sloupcem“ za [podkapitoly o tabulkách](responzivni-tabulky.md). Ponechal bych v ní všechny informace a zajistil fixní pozici sloupečků s pořadí, logem a názvem týmů. Ostatní sloupečky pak nechal uživatele posouvat do stran.


