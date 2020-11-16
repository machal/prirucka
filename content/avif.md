# Obrázkový formát AVIF

Chrome [od verze 85](https://developers.google.com/web/updates/2020/08/nic85) začal vcelku překvapivě a bez velkých oslav ze strany Googlu podporovat nový obrázkový formát AVIF.

Nové obrázkové formáty nás webaře zajímají hlavně z pohledu datové efektivity a nových vlastností. Obojí je zde splněno, protože AVIF obvykle ušetří oproti JPEG výrazně více dat než dřívější alternativa, [formát WebP](webp.md).

Nový formát AVIF je ostatně s WebP příbuný. Oba jsou založeny na video kodeku z rodiny VPx. WebP používá starou verzi VP8, zatímco AVIF je založen na AV1, což je nová generace po VP10. Formát WebP už je starý více než 10 let a tak AVIF přináší opravu největších nedostatků svého staršího příbuzného.

AVIF přináší také zajímavé a pro web užitečné vlastnosti. Jeho velkou výhodou je například je, že i při vysoké kompresi zachovává ostré hrany barevných přechodů.

## Odkud se AVIF vzal {#odkud}

AVIF má kořeny v těžko překonávaném, ale velmi málo rozšířeného [formátu HEIF](obrazky-formaty.md#heif) a novém úsporném formátu videa AV1 od skupiny [Alliance for Open Media](https://aomedia.org/).

Mezi členy skupiny počítáme například Google, Amazon, Facebook, Intel, Microsoft, Mozillu, Netflix, Samsung Electronics — a Apple. Tohle si zapamatujme jako velmi důležité, ještě se k tomu vrátíme.

## Výhody AVIF {#vyhody}

<!-- TODO Datová úspora je razantní…  -->

### Datová úspora {#vyhody-uspora}

Množství ušetřených dat je velké a leckomu může u konkrétních obrázků vyrazit dech. Pojďme se ale podívat na studii, která používá širší datovou základnu než jednotlivé obrázky.

Daniel Aleksandersen na Ctrl.blog spravuje nezávislou sadu 600 obrázků v šířkách 96 až 1080 pixelů. Porovnával sady původních JPEG obrázků s jejich variantami ve WebP a AVIF.

<!-- TODO slajd 9 -->

Výsledky jsou velmi zajímavé:

- Medián datové úspory AVIF je kolem 50 % oproti JPEG. (U WebP je to kolem 30 %).
- AVIF ukázal lepší výsledek komprese než JPEG a WebP pro každý jednotlivý obrázek v jeho testu. (U WebP je z grafu vidět, že některé typy obrázků mohou být i datově větší než původní JPEG.)

Tyto výsledky potvrzují i další. [Ve studii Netflixu](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4) se potvrdila úspora poloviny dat oproti JPEG.

Výsledky ale mohou být pro konkrétní obrázky i výrazně lepší. Mám sadu pěti různorodých obrázků, na kterých si nové formáty zkouším. V původní, nepříliš efektivní JPEG variantě, mají dohromady 3,2 MB. Převod do WebP stáhl velikost na 1 MB. AVIF na 0,37 MB.

### Nový typ komprese a nové vlastnosti  {#vyhody-komprese}

Datovou velikostí to ale nekončí: 

- AVIF přichází s novým typem komprese, které [říkají „chroma-from-luma“](https://blog.cloudflare.com/generate-avif-images-with-image-resizing/).
- AVIF podporuje 10- a 12bitové barvy v plném rozlišení a vysoký dynamický rozsah (HDR). Formát WebP je omezen na 8bitovou barevnou hloubku.

Celkově vzato to znamená, že nový formát „nekostičkuje“ jako JPEG a AVIF a „nerozmazává“ ostré hrany.

<!-- TODO slajd 15 -->

Z toho také vychází nové možnosti využití.

### Rozšířené možnosti použití {#vyhody-pouziti}

Bylo by ke škodě věci zapamatovat si AVIF jako alternativu pro JPEG. Ano, pro zobrazování fotografií na webu se velmi dobře hodí. 

Už formát WebP ale přišel s podporou bezeztrátové komprese a alfa-průhledností (a podporou animací), takže se stal téměř plnohodnotnou náhradou formátu PNG.

Problém u WebP ale zůstával s „rozmazáváním“ ostrých hran, jak jste mohli vidět v předchozím obrázku. Trochu to eliminuje [vlastnost „sharp YUV“](https://www.ctrl.blog/entry/webp-sharp-yuv.html), ale ne zcela.

AVIF ale díky novému algoritmu ostré hrany téměř nijak nedeformuje. Dělá to z něj výbornou alternativu také pro obrázky s ostrými hranami – například typografické bannery nebo produktové obrázky na jednobarevném pozadí.

[Jake Archibald](https://jakearchibald.com/2020/avif-has-landed/) ve svém skvělém článku o AVIF také experimentoval s náhradou AVIFu za vektory (!) a mělo to slušný úspěch, zejména u komplexnějších [SVG obrázků](svg.md).

## Nevýhody AVIF {#nevyhody}
