# Gutenberg: Co je zač ten emoce vyvolávající editor (nejen) pro WordPress?

[Gutenberg](https://wordpress.org/gutenberg/) je plugin pro vizuální tvorbu strukturovaného obsahu. Myslím, že může přinést výraznou inovaci do tvorby webů nejen prostřednictvím WordPressu.

Zaujal mě, protože je to logický a moderní způsob tvorby obsahu. S návaznostmi na nejpopulárnější redakční systém mi zde pomáhá [Honza Bien](https://www.vzhurudolu.cz/lektori/jan-bien), lektor našeho [školení WordPressu](https://www.vzhurudolu.cz/kurzy/wordpress). Sám totiž s WordPressem nepracuji, takže mě v tomhle textu bude Gutenberg zajímat spíše z pohledu webaře nespecializovaného na konkrétní CMS.

Mrkneme se jak Gutenberg reflektuje současný stav tvorby obsahu na webu a kam ho posouvá. A proč je tak kontroverzní.

## Co Gutenberg vlastně je? {#co-je}

Bylo by možné jej vnímat jako náhradu WYSIWYG editoru TinyMCE, od webového pravěku zadrátovaného do WordPressu. Jenže on to není jen editor obsahu, měl by to být editor webů.

![Editor Gutenberg](../dist/images/original/gutenberg.jpg)

Gutenberg umožňuje definovat stránky jako sadu upravitelných bloků. Bloky pak autoři designu nastaví tak, aby úpravy jejich obsahu byly pro uživatele příjemné a výstupem byla vývojářsky dobře zpracovatelná struktura. Prostě konec bordelu, který produkují WYSIWYG editory.

Gutenberg navazuje na současný stav editací ve webdesignu. Jak píší v detailním textu [na Smashing Magazine](https://www.smashingmagazine.com/2018/08/complete-anatomy-gutenberg-wordpress-editor/):

> Gutenberg kombinuje ty nejlepší vlastnosti z page-builderů jako jsou [Divi](https://www.elegantthemes.com/gallery/divi/) a [ Visual Composer](https://visualcomposer.io/), stejně jako z platforem jako jsou Medium, Wix and Squarespace, které uplatňují princip udělej si sám (DIY).

Ano, Medium uvnitř WordPressu, říkal jsem si, když jsem viděl první dema. [David Bíňovec](https://davidbinda.wordpress.com/2018/02/26/gutenberg-bloky-a-sablony-obsahu/) to pak rozebírá z pohledu tvůrce šablon. Ty krásné nové věci, které Gutenberg přináší, obnášejí:

* *Bloky* jsou útržky obsahu – odstavce, nadpisy… Těm autoři mohou nastavit nástroje a nastavení, jež jsou uživateli dostupné. Například nadpis v bloku „cover image“ z obrázku může být vysázen tučným řezem, italikou a tak dále.
* *Šablony* chápu jako soustavu bloků. Zajímavé na nich je, že jejich části mohou být nastavené jako neměnné, což je z pohledu autora výborné. Uživatel vám tak nerozbije, co nechcete.
* *Zástupné symboly* (placeholders) umožňují autorovi předdefinovat ukázkový obsah do jednotlivých bloků a tím mu usnadnit tvorbu kvalitního obsahu.

## Reakce jsou rozporuplné, ale vidina potenciálu převažuje  {#reakce}

Jako každá nová věc, která toho hodně mění, i Gutenberg dostává od části komunity za uši. Aktuálně má například v repozitáři pluginů velmi nízké hodnocení – [2,5 hvězdičky](https://wordpress.org/plugins/gutenberg/). 

<!-- AdSnippet -->

Bodejť by neměl, skupina uživatelů WordPressu se hloubkou zainteresování pohybuje na stupnici od špičkových technických expertů až po uživatele, kteří kódu a věcem uvnitř nerozumí a rozumět nechtějí. 

Právě ti nebudou zrovna moc naklonění velkému přestavování základů jejich oblíbeného „naklikatelného“ redakčního systému. A právě ti budou nejnaštvanější a nejvíce motivovaní dávat Gutenbergu špatná hodnocení.

Jenže určitou kritiku je možné slyšet i od zainteresovaných:

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Gutenberg za mě: <br>• Technicky → super rozšiřitelný editor (JS + React) <br>• Filosoficky → něco modernějšího a modulárnějšího než TinyMCE potřebujeme.<br>• Použitelnost → nic moc (doufejme že zatím), souhlas s <a href="https://twitter.com/wptavern?ref_src=twsrc%5Etfw">@wptavern</a>: <a href="https://twitter.com/hashtag/wordpress?src=hash&amp;ref_src=twsrc%5Etfw">#wordpress</a> <a href="https://twitter.com/hashtag/gutenberg?src=hash&amp;ref_src=twsrc%5Etfw">#gutenberg</a> <a href="https://twitter.com/hashtag/editor?src=hash&amp;ref_src=twsrc%5Etfw">#editor</a><a href="https://t.co/B8hvbzA85a">https://t.co/B8hvbzA85a</a></p>&mdash; Honza Bien (@HonzaBien) <a href="https://twitter.com/HonzaBien/status/1027872362656681984?ref_src=twsrc%5Etfw">August 10, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

S Honzou a výtkou k použitelnosti musím souhlasit i já. V [demu](https://testgutenberg.com/) je docela obtížně realizovatelné obvyklé psací flow „nejdříve píšu, pak formátuji“. Přidání například odrážkového seznamu vyžaduje vyskočit z flow a použít klávesovou zkratku nebo naklikat nový blok.

WP Tavern pak v článku [Gutenberg Plugin Garners Mixed Reactions from New Wave of Testers](https://wptavern.com/gutenberg-plugin-garners-mixed-reactions-from-new-wave-of-testers) dělí kritiku do tří okruhů:

1. *Použitelnost.* Dříve jednoduché úkoly mohou být složité – například přidávání každého textového bloku vyžaduje klikání na ikonu „plus“.
2. *Rozdělení úplně všeho do bloků* místy komplikuje psací flow. („I do not want 50 zillion little fussy blocks on a page“.)
3. *Způsob komunikace* týmu kolem Gutenberga („they felt that leaving specific feedback was a waste of time“).

Zatím se ale zdá, že přes to všechno směřuje Gutenberg do jádra WordPressu, což skupinu nesouhlasících povzbudilo k tvrdému odklonu vlastním směrem:

<blockquote class="twitter-tweet" data-lang="en"><p lang="cs" dir="ltr">Tak už tu máme tvrdý WordPress fork – ClassicPress. Odloučená vývojová větev nebude obsahovat Gutenberga. Působí to na mě jako demonstrativní protest, celá komunikace kolem Gutenberga nabývá na emocích <a href="https://twitter.com/GetClassicPress?ref_src=twsrc%5Etfw">@GetClassicPress</a> <a href="https://twitter.com/scotty_bowler?ref_src=twsrc%5Etfw">@scotty_bowler</a> <a href="https://twitter.com/hashtag/wordpress?src=hash&amp;ref_src=twsrc%5Etfw">#wordpress</a> <a href="https://twitter.com/hashtag/gutenberg?src=hash&amp;ref_src=twsrc%5Etfw">#gutenberg</a><a href="https://t.co/hIbWgT0Amq">https://t.co/hIbWgT0Amq</a></p>&mdash; Honza Bien (@HonzaBien) <a href="https://twitter.com/HonzaBien/status/1034117672231948288?ref_src=twsrc%5Etfw">August 27, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Bude určitě zajímavé to dále sledovat. Podstatné ale je, že komunita WordPressu na modernizaci pracuje a že v Gutenbergu vidí potenciál. Přes všechny nedostatky, které aktuálně má.

Mimochodem: Nejen komunita WordPressu. Gutenberg se rozšiřuje i do dalších míst webového světa – například do [konkurenčního CMS Drupal](https://www.maxiorel.cz/jak-vypada-gutenberg-novy-editor-z-wordpressu-po-implementaci-do-drupalu). Jan Polzer v článku píše:

*Myslím, že pokud by se šlo cestou Gutenbergu … Drupalu by to jen prospělo.*

Gutenberg si můžete vyzkoušet na [testgutenberg.com/](https://testgutenberg.com/) nebo si o něm přečtěte více na prezentační stránce [wordpress.org/gutenberg](https://wordpress.org/gutenberg/).
