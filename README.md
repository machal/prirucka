# Příručka pro VzhůruDolů.cz

Texty o technikách a technologiích moderní webové kodéřiny.

Opravy, bugreporty, změny jsou vítány: [github.com/machal/prirucka/issues](https://github.com/machal/prirucka/issues).

## Používáme Markdown Extra

- http://parsedown.org/extra/
- https://michelf.ca/projects/php-markdown/extra/

## Pravidla psaní

Texty zde vložené se čtou nebo mohou být čteny na různých místech:

1. V tomto veřejném repozitáři.
2. V Příručce na VzhůruDolů.cz: [vrdl.cz/prirucka/css3](http://www.vzhurudolu.cz/prirucka/css3).
3. V e-boocích: [vrdl.cz/ebooky](http://www.vzhurudolu.cz/ebooky)
4. V tištěných knihách.

Před každým zveřejněním na těchto místech prochází Markdown obsah určitými transformacemi a proto je potřeba držet se jednotného způsobu psaní.

V prvé řadě je potřeba psát obecně ve stylu například „v době psaní tohoto textu“, nikoliv „v době psaní tohoto článku“.

### Název článku

Měl by být maximálně stručný, stroze technický. Primárně pro e-booky a jejich obsah. Např. e-book o AMP je dost komplexní, takže se do něj obsah knížky (TOC) vkládá na úrovni podkapitol, tedy samotných článků.

Šťavnatější a pro SEO upravené názvy pro online výskyt na Vzhůru dolů se používají názvy vložené do administrace při zveřejnění textu.

### Formátování

Pro ebooky je lepší co nejjednodušší formátování, proto:

- Pro zvýrazňování slov v textu nepoužíváme tučný řez, ale kurzívu. Jedinou výjimkou jsou „nadpisy“ v `ul`/`ol` seznamech. Tučný řez jinak rezervujeme pro nadpisy.
- `ul`/`ol` seznamy nepoužíváme pro texty delší než jedna věta. V eboocích se pak rozpadají na více řádek.
- Kombinace nadpisu a podnadpisu nevypadá dobře. Stejně jako nadpis a ukázka kódu. Prostě by pod každým nadpisem měl být nějaký text a až pak teprve jiný typ obsahu.

### Odkazy

V textu odkazujeme obecně jen interně - přímo na Markdown soubory, které jsou v eboocích, externí jako celé url. Aby to v ebooku bylo jasné. Na co lze klikat a co vede ven. A taky kvůli případnému tisku odkazy ven pomocí celých url.

- **Interní** v rámci stejného ebooku - uvnitř textu:  
```markdown
Lorem ipsum [odkaz](odkaz.md) lorem ipsum.
```
- **Důležité interní i externí** - nakonci odstavce ve zkrácené verzi - odkaz ale vede na plnou, abychom šetřili přesměrování:  
```markdown
Lorem ipsum lorem ipsum:
([vrdl.cz/p/grunt](http://www.vzhurudolu.cz/prirucka/grunt)).
```
- **Méně důležité** - bez odkazu (máme Google, že…)

A pozor, zápis odkazu na konci odstavce nesmí začínat `http://` např. `[vrdl.cz…]`. Vždy `[vrdl.cz…]`. Jednak kvůli stručnosti a jednak kvůli možným chybám v XHTML pro ePub.

Pozor také na to, že ne vždy je čtenář online. K důležitým odkazům tedy dávat do textu shrnutí.

## Komponenty ve stránce

### Obrázky

- Zatím jen JPG nebo PNG.
- Bílé pozadí. Obsah až ke krajům.
- Ideálně bez efektů jako stíny na pozadí screenshotů z Maca.
- 16:9. Minimálně 2000 pixelů široké v 300dpi. Kvůli případnému tisku.
- Shora může být odsazení a barevný rámeček (ebooky). Zezdola zase odsazení a text.
- Font vždy Foro Extra Bold a Light a jeho varianty. Minimální velikost písma 40pt.
- Informace nebo jejich vazba nesmí být závislá jen na barvě. Kůli černobílým Kindle čtečkám.
- Zdroje ukládáme buď přímo do příručky, nebo exterimentálně taháme z Cloudinary, ale to spíše pro články na blogu.

Standardně vkládáme jako obrázek:

```markdown
![Podíl mobilů](../dist/images/original/statistika-mobily.jpg)
```

Alternativně s popiskem jako `<figure>`:

```html
<figure>
<img src="../dist/images/original/todo.jpg" width="1600" height="900" alt="…">
<figcaption markdown="1">
*Google PageSpeed Insights zobrazí skóre webu, ale také rovnou návrhy na vylepšení*
</figcaption>
</figure>
```

Popisek (`figcaption`) není potřeba uvádět jako: „Obrázek: …“, protože je ve všech místech výskytu vizuálně oddělený od zbytku obsahu.

#### Jiný poměr stran než 16:9

Hlavně kvůli AMP a layoutu v `<amp-img>` je potřeba u obrázků, které mají jiný poměr stran než 16:9, uvádět rozměry explicitně. Stačí poměr stran. Například pro výškou poloviční obrázky – 32:9:

```html
<img src="../dist/images/original/pagespeed-insights-skore.jpg" width="1920" height="540"  alt="PageSpeed Insights Skóre">
```

`width` je kvůli bugu v PHP Simple HTML DOM Parser potřeba vždy jako první.

#### Široké obrázky

Zabezpečí to třída `.img-wide`, ale pak už tam nesmí být `<figure>`.

```html
<img … class="img-wide">
```

Hodí se to na všechna možná podrobnější schémata atd.

#### Obrázek v tabulce

Možné to je, viz `/prirucka/css-box-alignment`:

Je potřeba je vkládat ve `small` variantě.

Příklad:

```markdown
|          | Vlastnost                               | Co dělá?  |
|----------|-----------------------------------------|-----------|
| ![Vlastnost justify-items](../dist/images/small/vdlayout/css-justify-items-schema.png) | [`justify-items`](css-justify-items.md) | Zarovnání na řádkové ose (obvykle vodorovně). <br> Např. `justify-items: center` centruje všechny položky. |
| ![Vlastnost align-items](../dist/images/small/vdlayout/css-align-items-schema.png) | [`align-items`](css-align-items.md)     | Zarovnání na blokové ose (obvykle svisle). <br> Např. `align-items: end` zarovná položky ke spodní hraně kontejneru. |
```

### Video

#### Vložení z YouTube

Ideální je vložení pomocí HTML kódu. Markdown je tady nespolehlivý:

```html
<p class="video">
Video: <a href="https://www.youtube.com/watch?v=VN8CFG-YajE">BrowserStack</a> ~ Jak testovat web ve všech prohlížečích a nemuset řešit virtuály a emulátory.
</p>
```

Pro případné přímé vložení iframe z Youtube je na webu potřeba obalit jej pomocí `.rwd-media`. Jinak se nechová responzivně k velikost okna:

```html
<div class="rwd-media">
<iframe width="560" height="315" src="https://www.youtube.com/embed/eywi0h_Y5_U" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
```

Komponenta `.rwd-media` standardně dělá poměr stran 16:9, ale lze přidat různé modifikátory, např. `.rwd-media--160-45` pro poloviční výšku. Viz stejnojmenná komponenta u Vzhůru dolů webu.

#### Vložení MP4

Alternativně můžeme vložit přímo video, se zdrojem [na Cloudinary](https://cloudinary.com/console/c-60c23162d9f57381294359118f02c1/media_library/folders/32912d254fbd3f0fdb1571f58bb93817). viz např. [content/img-pomer-stran.md](content/img-pomer-stran.md).

Ale je potřeba vložit jako MP4, protož např. Safari WEBM neumí. Při vytváření v QuickTime stačí po uložení do `.mov` přejmenovat koncovku na `.mp4`. Pokud video stahuješ ze zdrojů od Googlu, stahuj v Safari, tam se to uloží do MP4.

Nedávej `autoplay`, žere ti to kredit na Cloudinary.

```html
<div class="rwd-media">
  <video muted controls width="1600" height="900">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1587737526/vzhurudolu-video/img-aspect-ko_gdcr9f.mp4"
      type="video/mp4">
  </video>
</div>
```

### CodePen s ukázkou

Ukázky vkládáme jako běžný odstavec v Markdownu:

```markdown
CodePen: [cdpn.io/e/XzYzXJ](https://codepen.io/machal/pen/XzYzXJ?editors=1100)
```

Na webu se to pak přepíše vkládaného `<iframe>`.

- Důležité je uvést první adresu jako zkratku, kvůli kontextům mimo web, jako jsou e-booky nebo Github.
- Odkaz ale vede na plné URL na CodePenu.
- V parametru `?editors=` jsou uvedeny záložky se záložkou a typem kódu, který má být otevřený. Je to v řadě HTML, CSS, JS kód a konzole.

### Tabulka

Jednodušší:

```markdown
| Prvek      | Vzhled | Klik/touch |
|------------|:------:|:----------:|
| `<span>`   |  +     |            |
```

Pro dvoustavové značky v tabulkách používáme `+`, protože je dostupné ve všech písmech, kterými se obsah vykresluje.

Složitější tabulky ideálně jako `<figure>`:

```html
<figure>

<div class="rwd-scrollable prop-table f-6"  markdown="1">
| Prvek      | Vzhled | Klik/touch | Focus | Význam | Mezerník |
|------------|:------:|:----------:|:-----:|:------:|:--------:|
| `<span>`   |  +     |      +     |       |        |          |
| `<a>`      |  +     |      +     |    +  |        |          |
| `<button>` |  +     |      +     |    +  |    +   |      +   |
</div>  

<figcaption markdown="1">
*Tabulka: Přidáním třídy můžeme nastavit vzhled tlačítka na jakýkoliv element*
</figcaption>

</figure>
```

- Třída `rwd-scrollable` zajišťuje rolování do stran na blogu u širších tabulek.
- Třída `prop-table` zajistí stejné rozvržení pro všechny tabulky s vlastnostmi - viz CSS flexbox.
- Třída `f-6` zmenší písmo pro větší tabulky.

### Podcast

Vložení opět pomocí HTML kódu.

```html
<p class="podcast">
Podcast: <a href="https://soundcloud.com/vzhurudolu/s-robinem-pokornym-o-css-v-js" data-id="296642310">S Robinem Pokorným o CSS v JS</a>
</p>
```

### Související články

Vložení opět pomocí HTML kódu.

```html
<div class="related" markdown="1">
- [S Robinem Pokorným o CSS v JS](/blog/link)
- [Nějaký další odkaz na článek z příručky](/prirucka/link)
</div>
```

Jednotlivé články zatím vkládáme takto:

→ *Související: [Vkládání JavaScriptu jako async, defer a type="module"](js-async-defer-module.md)*

### Ukázky kódu

Značku `<code>`, respektive její Markdown obdobu používáme jen výjimečně:

- V bloku kódu.
- Uvnitř textu. Např. „Značka `<html>` slouží…“. Možné to je uvnitř odstravců, odrážek, ale i uvnitř tabulek.

`<code>` naopak nepoužíváme v nadpisech:

- V nadpisech, protože jsou vyvedené tučným řezem (kód není), vypadají nehezky atd.
- Rozbijou mPDF proces tvorby PDF e-booku.
- Jediná výjimka jsou situace, kdy nadpis tvoří jen samotný kód. [Příklad](https://www.vzhurudolu.cz/prirucka/pruzna-media)
  
Kód nepoužíváme i na dalších místech:

- V citacích (`blockquote` a `cite`). 
- `figcaption`, protože jsou vyvedené kurzívou.

HTML značky lze opsat kapitálkami („Značka HTML slouží…“). JS a CSS kód prostě uvedeme bez `<code>` tak jak je. Vyplývá z toho samozřejmě, že je lepší se kódu na takovýchto místech vyhnout.

Kvůli e-bookům by bloková ukázka kódu měla mít maximální délku kódu kolem 60 znaků na řáku.

### Zobrazení jen na webu nebo v e-boocích

Prostě odstavec s třídou `.web-only`. V ebooku bude při předzpracování textu odstraněno.

```markdown
<div class="web-only" markdown="1">
Čtete referenční příručku vlastností, které je možné přiřadit položkám [flexboxu](css-flexbox.md).
</div>
```

Totéž jen pro e-booky pomocí `.ebook-only`:

```markdown
<div class="ebook-only" markdown="1">
Čtete referenční příručku vlastností, které je možné přiřadit položkám [flexboxu](css-flexbox.md).
</div>
```

Pozor, není možné totéž udělat inline pomocí `<span class="ebook-only" markdown="1">`. Nějak to prostě nefunguje.

### Speciální znaky

mPDF jako generátor PDF verze e-booků neumí fallback pro znaky, které nejsou ve fontech. Respektive, [měl by umět](https://mpdf.github.io/reference/mpdf-variables/usesubstitutions.html), ale vrací to chyby.

V textech pro e-booky je tedy potřeba se vyhnout speciálním znakům jako je → nebo ⚡.

- *Navigace v menu UI*  
Původně se používalo →, ale nově lépe › (_Správce (Admin) › Služba (Property) › Údaje o měření (Tracking info))

### Umístění reklamy na webu

Standardně po druhém odstavci. Lze změnit jednou nebo více kotvami `<!-- AdSnippet -->` v obsahu.

### Vkládání statistik CanIUse

Vložení obrázku nejlépe přes CanIUse Embed: [caniuse.bitsofco.de](https://caniuse.bitsofco.de/).

Uvést ale adresu přímo z Cloudinary, přesměrování nemá rád náš lightbox:

```html
<figure>
<img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1/caniuse-embed/static/link-rel-preload-1590381119841.png" alt="Podpora preload v prohlížečích">
<figcaption markdown="1">
*Obrázek: Podpora přednačtení prohlížečích. Zdroj: [CanIUse Embed](https://caniuse.bitsofco.de/).*
</figcaption>
</figure>
```

Odkaz pak například touto formou:

```
Viz také [caniuse.com/css-containment](https://caniuse.com/#feat=css-containment)
```

## Autorství

Pokud není řečeno jinak, autorem všech textů Příručky je Martin Michálek: [vrdl.cz/martin]([www.vzhurudolu.cz/martin).

### Externí autoři

Toto platí jak pro příručku, tak pro blog: 

- Do [této složky na Cloudinary](https://cloudinary.com/console/c-60c23162d9f57381294359118f02c1/media_library/folders/aac47b2dab0cb485cf86478fe48483fe) vložit obrázek autora, výřez jen s hlavou.
- Do redakčního systému je potřeba vložit jméno autora, odkaz na jeho web a obrázek z Cloudinary.

Ukázky:

- Robin Pokorný: https://www.vzhurudolu.cz/podcast/169-podcast-next-js
- Marek Čevelíček: https://www.vzhurudolu.cz/blog/166-ux-tipy
