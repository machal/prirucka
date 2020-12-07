# Formáty obrázků pro web: JPEG, WebP, AVIF, PNG, GIF a SVG

Nedávno jsem si dělal rešerši obrázkových formátů. Které je možné používat v dnešních prohlížečích nebo minimálně byl učiněn pokus o to, abychom je používat mohli?

Rozhodl jsem se, že se s vámi o ni musím podělit. Kromě jiného jde o krásný přehled (zatím neúspěšného) boje o nástupnictví JPEGu, přičemž starý král se pořád drží.

<!-- AdSnippet -->

To se nedá říct o jiných formátech, jako je GIF nebo PNG. Těmi tedy začneme.

## GIF {#gif}

<figure>
<img src="../dist/images/original/giphy.jpg" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Obrázek: Pokud se nepletu, formát GIF žádné logo nemá. Jako ilustraci jsem tedy vybral… ani se neptejte.*
</figcaption>
</figure>

- GIF (Graphics Interchange Format) uvedla firma CompuServe už v roce 1987.
- Používá bezeztrátovou kompresi, ale užití dnes limituje maximum 256 barev.
- GIF je na současném internetu synonymem pro krátké animace (koťátek), byť ty už většinou nejsou ukládány přímo v tomto formátu, ale často ve formátu krátkých videí.
- Z našeho seznamu jde už o nejvíc překonaný formát, nahraditelný PNG nebo WebP či nejnověji AVIFem.
- **Podpora v prohlížečích:** Všechny ([CanIUse.com](https://caniuse.com/png)).
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/GIF)

## PNG {#png}

<figure>
<img src="../dist/images/original/png.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Obrázek: Ani při hledání logotypu formátu PNG jsem úplně nepochodil. Takhle si formát představuje jeden z jeho autorů, [Greg Roelofs](http://www.libpng.org/pub/png/). Taky na vás dýchly devadesátky? Ano, ten formát je opravdu starý.*
</figcaption>
</figure>

- PNG (Portable Network Graphics) byl představen už v roce 1996 po licenčním zpoplatnění GIF.
- Je určený pro obrázky s bezeztrátovou kompresí. Není jako GIF omezený na 256 barev a zvládá osmibitovou průhlednost (tzv. alfa kanál).
- Kvůli nepřítomnosti ztrátové komprese se nehodí na obrázky typu fotografie. S animacemi je to u PNG horší (verze APNG je v prohlížečích [podporována](https://caniuse.com/apng), ale nevyužívá se v autorských nástrojích).
- Nejefektivnější knihovny pro optimalizaci PNG na trhu jsou nyní pravděpodobně [pngquant](https://pngquant.org/) a [oxipng](https://github.com/shssoichiro/oxipng).
- **Podpora v prohlížečích:** Všechny ([CanIUse.com](https://caniuse.com/png)).
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/Portable_Network_Graphics).

## JPEG {#jpeg}

<figure>
<img src="../dist/images/original/jpeg.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Obrázek: Logo formátu [JPEG](https://jpeg.org/) příliš známé není, byť je to vlastně král obrázkových formátů.*
</figcaption>
</figure>

- Představeno 1992. Název nese podle konsorcia Joint Photographic Experts Group.
- JPEG je určený pro ukládání fotografií a podobného obsahu. Tomuto obsahu už desetiletí vládne a ještě pravděpodobně dlouho bude díky tomu, jak je zavedený.
- Na webu je výhodou JPEG možnost [progresivního vykreslování](https://www.liquidweb.com/kb/what-is-a-progressive-jpeg/).
- Formát je omezený na 8bitové snímky a postrádá podporu pro alfa kanál. Možná je jen ztrátová komprese.
- Pravděpodobně nejefektivnější optimalizační knihovna na trhu je nyní [MozJPEG](https://github.com/mozilla/mozjpeg).
- **Podpora v prohlížečích:** Všechny.
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/JPEG).

U nejpopulárnějšího formátu se ještě pojďme podívat na nejznámější „podverze“, se kterými postupně konsorcium JPEG přicházelo.

### JPEG 2000 {#jpeg-2000}

- Rok 2000. Používá se zkratka JP2.
- Je založený na vlnkové transformaci. Přidává funkce jako rozsah podporovaných bitových hloubek, flexibilní počet barevných rovin, bezeztrátová komprese, průhlednost atd.
- Ve ztrátové kompresi má údajně lepší výsledky než původní JPEG a v bezeztrátové lepší než PNG.
- [Wikipedie](https://cs.wikipedia.org/wiki/JPEG_2000) také pravdivě uvádí, že se od JPEG 2000 „očekávalo, že nahradí originální standard JPEG, což se však nakonec nestalo“. Pravděpodobným důvodem je, že není zpětně kompatibilní s původní verzí formátu.
- **Podpora v prohlížečích:** Jen Safari ([CanIUse.com](https://caniuse.com/jpeg2000)).
- Více: [JPEG.org](https://jpeg.org/jpeg2000/), [Wikipedia](https://en.wikipedia.org/wiki/JPEG_2000), [Grafika.cz](https://www.grafika.cz/rubriky/polygrafie/jpeg2000-revolucni-format-pro-kompresi-obrazku--129130cz).

### JPEG XR {#jpeg-xr}

- Rok 2006. Pokus ve spolupráci s Microsoftem – původně se formát označoval jako _Windows Media Photo_ nebo _HD Photo_.
- **Podpora v prohlížečích:** Jen Explorer a starý Edge ([CanIUse.com](https://caniuse.com/jpegxr)).
- Více: [JPEG.org](https://jpeg.org/jpegxr/), [Wikipedie](https://cs.wikipedia.org/wiki/JPEG_XR).

### JPEG XT {#jpeg-xt}

- Rok 2015. Série rozšíření (XT asi jako _extension_).
- Rozšiřuje JPEG o více-bitové hloubky a podporuje alfa kanál, bezeztrátovou kompresi atd.
- Zůstává zpětně kompatibilní.
- **Podpora v prohlížečích:** Nejspíš žádný.
- Více: [JPEG.org](https://jpeg.org/jpegxt/), [Wikipedia](https://en.wikipedia.org/wiki/JPEG_XT).

## WebP {#webp}

<figure>
<img src="../dist/images/original/webp.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Obrázek: WebP od Google neslouží jen pro vykreslování fotografií, jak by se mohlo z loga zdát.*
</figcaption>
</figure>

- Rok 2010, autorem je [Google](https://developers.google.com/speed/webp).
- Webp je založen na „intra-frame“ kódování z formátu kódování videa VP8. Podporuje bezeztrátové kódování a také bezeztrátový alfa kanál, ale ne například všechny možnosti JPEG 2000.
- Je koncipován jako náhrada JPEG i PNG. Ve většině případů s WebP získáte lepší výsledky než s těmito dvěma formáty.
- **Podpora v prohlížečích:** Všechny, jen v Safari až od macOS 11 BigSur ([CanIUse.com](https://caniuse.com/webp)).
- Více: [WebP na Vzhůru dolů](webp.md).

## HEIF {#heif}

- Byl představen v roce 2015 organizací MPEG (Moving Picture Experts Group). High-Efficiency Image File Format (HEIF) přichází se standardem videa High-Efficiency Video Coding (HEVC).
- HEIF je od roku 2017 používán zařízeními Apple k ukládání zaznamenaných snímků.
- **Podpora v prohlížečích:** Žádný ([CanIUse.com](https://caniuse.com/heif)).
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/High_Efficiency_Image_File_Format).

## AVIF {#avif}

<figure>
<img src="../dist/images/original/av1.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Obrázek: AVIF vlastní logo nemá, proto si musíme vystačit se značkou pro rodičovský formáte videí, [AV1](https://cs.wikipedia.org/wiki/AV1).*
</figcaption>
</figure>

- V roce 2018 jej představila Alliance for Open Media jako součást otevřeného formátu kódování videa AV1.
- AVIF má obecně lepší kompresi než WebP, JPEG, PNG a GIF a je navržen tak, aby je nahradil.
- Zvládá ztrátovou i bezeztrátovou kompresi, alfa kanál, animace a mnoho dalšího.
- Nevýhodou je nemožnost postupného vykreslování, dlouhá doba převodu obrázku a zatím slabší podpora v prohlížečích.
- **Podpora v prohlížečích:** Chrome, Opera a brzy asi Firefox ([CanIUse.com](https://caniuse.com/avif)).
- Více: [AVIF na Vzhůru dolů](avif.md), [Jake Archibald](https://jakearchibald.com/2020/avif-has-landed/).

## SVG {#svg}

<figure>
<img src="../dist/images/original/svg.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Obrázek: Konečně pořádné logo. SVG nezklamalo.*
</figcaption>
</figure>

<div class="related" markdown="1">
- [SVG inspirace: efekty, animace…](svg-inspirace.md)
- [Z Illustra­to­ru přímo do pro­hlí­že­če](https://www.vzhurudolu.cz/blog/135-svg-workflow-superkoders)
- [Nepoužívejte ikonfonty](ikonfonty-vs-svg.md)
</div>

- První standard pochází z roku 2001. SVG je zkratka pro Scalable Vector Graphics.
- Jde o vektorový formát, ne jen pro obrázky, ale pro celé vektorové dokumenty.
- Chvíli trvalo než se prosadil, ale v současném světě webařiny je zcela nepostradatelný pro ikony, infografiky, animace a mnoho dalšího.
- SVG se samozřejmě z důvodu výkonu nehodí pro foto-realistické detaily. Původně zde stálo, že SVG neumí pracovat s 3D objekty, ale to podle Roberta Másla z komentářů není pravda. Děkujeme za doplnění. ([Demo](http://www.qcd.cz/3d/dvanactisten.svg), které ale nyní funguje jen ve Firefoxu.)
- **Podpora v prohlížečích:** Všechny ([CanIUse.com](https://caniuse.com/svg)).
- Více: [SVG na Vzhůru dolů](https://www.vzhurudolu.cz/prirucka/svg), [Téma „SVG“ na Vzhůru dolů](https://www.vzhurudolu.cz/svg), [Wikipedie](https://cs.wikipedia.org/wiki/Scalable_Vector_Graphics).

## Další nové formáty v přípravě {#dalsi}

Během psaní textu mám v hlavě rozmlžené informace ještě o následujících připravovaných formátech:

- [JPEG-XL](https://jpeg.org/jpegxl/) – aktualizace JPEG určené pro ztrátovou i bezeztrátovou kompresi, která by prý mohla být lepší než u WebP.
- WebPv2 – chystá se i nová verze WebP, ale zatím chybí více informací.

Uvidíme, jak se to s nimi vyvrbí.

## Jaké formáty obrázků používat? Moje stručné rady {#rady}

Dřívější praxe kodérů vypadala asi takto:

- Na fotky používejte JPEG.
- Na bannery, kde je text nebo obrázky s průhledností, používejte PNG.
- Na animace používejte GIF.

Myslím ale, že v poslední době se toho hodně změnilo.

Jednak — GIF se mě dneska už zdá zbytečný. Máme HTML5 video, animace děláme pomocí [CSS](css3-animations.md), JS nebo [SVG](svg-inspirace.md). Ale jasně, animovaná koťátka jej udrží při životě ještě dlouho.

<!-- AdSnippet -->

Moderní formáty jako [WebP](webp.md) nebo [AVIF](avif.md) umí řešit scénáře určené dříve specificky pro JPEG (fotky) i PNG (bannery). Podpora WebP je už velmi slušná.

Pokud by mi to tedy moje pracovní postupy dovolily, upřednostňoval bych WebP a konkrétní obrázky optimalizoval ještě jako AVIF, který má fantasticky nízký datový objem, ale dlouho trvá převod souboru.

Mít soubor také v JPEG je zatím většinou nutné jako alternativní řešení pro starší prohlížeče.

Pro srovnávání vzhledu obrázku v různých formátech existuje skvělý nástroj – [Squoosh](https://squoosh.app/). Je to velmi dobrý pomocník pro určení, jaký formát se pro vaše typy obrázků hodí.
