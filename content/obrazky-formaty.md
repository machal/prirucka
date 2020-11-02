# Formáty obrázků pro web

Nedávno jsem si dělal rešerši obrázkových formátů, jaké je možné používat v dnešních prohlížečích.

Rozhodl jsem se, že se s vámi o ni musím podělit. Kromě jiného jde o krásný přehled (zatím neúspěšného) boje o nástupnictví JPEGu, přičemž starý král se pořád drží.

To se nedá říct o jiných formátech, jako je GIF nebo PNG. Těmi tedy začneme.

## GIF

- GIF (Graphics Interchange Format) uvedla firma CompuServe už v roce 1987.
- Používá bezeztrátovou kompresi, ale užití dnes limituje maximum 256 barev.
- GIF je na současném internetu synonymem pro krátké animace (koťátek), byť ty už dávno většinou nejsou ukládány přímo v tomto formátu.
- Z našeho seznamu jde už o nejvíc překonaný formát, nahrazený PNG nebo WebP či nejnověji AVIFem.
- Dostupnost v prohlížečích: Všechny ([CanIUse.com](https://caniuse.com/png)).
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/GIF)

## PNG

- PNG (Portable Network Graphics) byl představen už v roce 1996 po licenčním zpoplatnění GIF.
- Je určený pro obrázky s bezztrátovou kompresí, není jako GIF omezený na 256 barev, zvládá osmibitovou průhlednost (tzv. alfa kanál).
- Kvůli nepřítomnosti ztrátové komprese se nehodí na obrázky typu fotografie. S animacemi je to u PNG horší (verze APNG je v prohlížečích [podporována](https://caniuse.com/apng), ale nevyužívá se v autorských nástrojích).
- Dostupnost v prohlížečích: Všechny ([CanIUse.com](https://caniuse.com/png)).
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/Portable_Network_Graphics).

## JPEG

- Představeno 1992. Název podle konsorcia Joint Photographic Experts Group.
- Určený pro ukládání fotografií a podobného obsahu. Tomuto obsahu už desetiletí vládne a ještě pravděpodobně dlouho bude díky tomu, jak je zavedený.
- Na webu je výhodou JPEG možnost [progresivního vykreslování](https://www.liquidweb.com/kb/what-is-a-progressive-jpeg/).
- Omezený na 8bitové snímky a postrádá podporu pro alfa kanál. Možná je jen ztrátová komprese.
- Dostupnost v prohlížečích: Všechny.
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/JPEG).

### JPEG 2000

- Rok 2000. Používá se zkratka JP2.
- Je založený na vlnkové transformaci. Přidává funkce jako rozsah podporovaných bitových hloubek, flexibilní počet barevných rovin, bezztrátová komprese, průhlednost atd.
- Ve ztrátové kompresi má údajně lepší výsledky než původní JPEG a v bezstrátové lepší než PNG.
- [Wikipedie](https://cs.wikipedia.org/wiki/JPEG_2000) také pravdivě uvádí, že se od JPEG 2020 „očekávalo, že nahradí originální standard JPEG, což se však nakonec nestalo“. Pravděpodobným důvodem je, že není zpětně kompatibilní s původní verzí formátu.
- Dostupnost v prohlížečích: Jen Safari ([CanIUse.com](https://caniuse.com/jpeg2000)).
- Více: [JPEG.org](https://jpeg.org/jpeg2000/), [Wikipedia](https://en.wikipedia.org/wiki/JPEG_2000), [Grafika.cz](https://www.grafika.cz/rubriky/polygrafie/jpeg2000-revolucni-format-pro-kompresi-obrazku--129130cz)

### JPEG XR

- Rok 2006. Pokus ve spolupráci s Microsoftem – původně se formát označoval jako _Windows Media Photo_ nebo _HD Photo_.
- Dostupnost v prohlížečích: Jen Explorer a starý Edge ([CanIUse.com](https://caniuse.com/jpegxr)).
- Více: [JPEG.org](https://jpeg.org/jpegxr/), [Wikipedie](https://cs.wikipedia.org/wiki/JPEG_XR)


### JPEG XT

- Rok 2015. Série rozšíření (XT nejspíš jako _extension_).
- Rozšiřuje JPEG pro více-bitové hloubky a podporuje alfa kanál a bezztrátovou kompresi atd.
- Zůstává zpětně kompatibilní.
- Dostupnost v prohlížečích: Nejspíš žádný.
- Více: [JPEG.org](https://jpeg.org/jpegxt/), [Wikipedia](https://en.wikipedia.org/wiki/JPEG_XT)

## WebP

- Rok 2010, autorem je [Google](https://developers.google.com/speed/webp).
- Webp je založen na „intra-frame“ kódování z formátu kódování videa VP8. Podporuje bezztrátového kódování a také bezztrátový alfa kanál, ale například nemá všechny možnosti JPEG 2000.
- Je koncipován jako náhrada JPEG i PNG. Ve většině případů s WebP získáte lepší výsledky než s těmito dvěma formáty.
- Dostupnost v prohlížečích: Všechny, jan v Safari až od macOS 11 BigSur ([CanIUse.com](https://caniuse.com/webp)).
- Více: [Vzhůru dolů: WebP](webp.md)

## HEIF

- Představen v roce 2015 organizací MPEG (Moving Picture Experts Group). High-Efficiency Image File Format (HEIF) přichází se standardem videa High-Efficiency Video Coding (HEVC).
- HEIF je od roku 2017 používán zařízeními Apple k ukládání zaznamenaných snímků.
- Dostupnost v prohlížečích: Žádný ([CanIUse.com](https://caniuse.com/heif)).
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/High_Efficiency_Image_File_Format)

## AVIF

- V roce 2018 vydala Alliance for Open Media jako součást otevřeného formátu kódování videa AV1.
- AVIF má obecně lepší kompresi než WebP, JPEG, PNG a GIF a je navržen tak, aby je nahradil.
- Zvládá ztrátovou i bezztrátovou kompresi, alfa kanál, animace a mnoho dalšího.
- Nevýhodou je nemožnost postupného vykreslování, dlouhá doba převodu obrázku a zatím slabší podpora v prohlížečích.
- Dostupnost v prohlížečích: Chrome, Opera a brzy asi Firefox ([CanIUse.com](https://caniuse.com/avif)).
- Více: [Wikipedie](https://cs.wikipedia.org/wiki/AV1), [Jake Archibald](https://jakearchibald.com/2020/avif-has-landed/).

## SVG

- První standard pochází z roku 2001. SVG jako Scalable Vector Graphics.
- Jde o vektorový formát, ne jen pro obrázky, ale celé vektorové dokumenty.
- Chvíli trvalo než se prosadil, ale v současném světě webařiny je zcela nepostradatelný pro ikony, infografiky, animace a mnoho dalšího.
- SVG se samozřejmě z důvodu výkonu nehodí pro foto-realistické detaily, neumí také pracovat s 3D objekty.
- Dostupnost v prohlížečích: Všechny ([CanIUse.com](https://caniuse.com/svg)).
- Více: [SVG na Vzhůru dolů](https://www.vzhurudolu.cz/prirucka/svg), [Téma „SVG“ na Vzhůru dolů](https://www.vzhurudolu.cz/svg), [Wikipedie](https://cs.wikipedia.org/wiki/Scalable_Vector_Graphics).

Další nové formáty v přípravě:

- JPEG-XL – aktualizace JPEG určené pro ztrátovou i bezestrátovou kompresi, která by prý mohla být lepší než u WebP.
- WebPv2 – chystá se i nová verze WebP, ale zatím chybí více informací.
