# Poměr stran obrázků jednoduše (pomocí atributů WITH a HEIGHT ve značce IMG)

Nedávno jsem na Vzhůru dolů publikoval [text o nastavení poměru stran](css-pomer-stran.md) pro obrázky, video, iframy a další obsah vkládaný do HTML zvenčí. Říkejme mu média.

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=zmkIvMSKU8U">Obrázky (IMG v HTML): Poměr stran jednoduše</a> ~ Zjednodušený obsah článku ve videu.
</p>

Problém je v tom, že prohlížeče vykreslují stránku dříve než jsou tyto prvky stažené. Pokud neznají velikost ani poměr stran médií, dopadne to tak, že se stránka vykresluje vícekrát. Pro uživatele to znamená nepříjemné „poskakování“ obsahu v momentě, kdy už například čte text.

## Před responzivním designem to bylo v pořádku {#pred-rwd}

Jak píše Jakub Vrána v komentářích:

> Používat atributy `width` `height` jsem doporučoval už před dvaceti lety přesně z tohohle důvodu. To se na to postupně nějak zapomnělo?

Nezapomnělo. Přišel totiž přišel [responzivní design](https://www.vzhurudolu.cz/responzivni-design) a [pružné obrázky](pruzna-media.md):

```css
img {
  max-width: 100%;
  height: auto;
}
```

Díky `height:auto`, které přebilo parametr `height` z HTML, přestaly být prohlížeče schopné spočítat skutečnou výšku v responzivním layoutu.

Takže uvádět atributy v HTML dříve stačilo, pak díky responzivnímu designu přestalo stačit a dnes prohlížeč mění chování, aby to zase stačil mohlo. A o tom posledním kroku je tento článek.

Takhle to na webech vypadat nemá, ale skoro vždy vypadá:

<div class="rwd-media">
  <video autoplay muted controls width="1600" height="900">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/eo_4/v1587737526/vzhurudolu-video/img-aspect-ko_gdcr9f.mp4"
      type="video/mp4">
  </video>
</div>

V původním článku jsme na to šli přes různé hacky a sliboval jsem, že se blýská na lepší časy. Zmiňoval jsem, že to snad bude brzy rovnou vestavěné v prohlížečích.

<!-- AdSnippet -->

Ty lepší časy teď přicházejí, protože, jak jste se mohli už dočíst [na Smashing Magazine](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/) nebo slyšet [v podcastu](https://www.vzhurudolu.cz/podcast/165-podcast-na-dalku), prohlížeče pro nastavení poměru stran prvků `<img>` používají (Chrome a Firefox) nebo používat začnou (Safari) atributy pro nastavení výšky a šířky.

Takhle to vypadat má:

<div class="rwd-media">
  <video autoplay muted controls width="1600" height="900">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/eo_4/v1587737529/vzhurudolu-video/img-aspect-ok_jqylkx.mp4"
      type="video/mp4">
  </video>
</div>

Zajímavé je, že nyní jde o řešení přímo na úrovni vykreslování v prohlížeči, takže se nepoužívá původně plánovaná [CSS vlastnost `aspect-ratio`](css-pomer-stran.md#aspect-ratio).

## Poměr stran obrázku nastavíte atributy `width` a `height` {#width-height}

Aktuální stav si můžeme zjednodušit následovně.

### Obrázky {#width-height-obrazky}

U obrázků prostě vždy vyplňte atributy `width` a `height` u značky `<img>`:

```html
<img src="image.jpg" alt="…"
  width="640" height="360">
```

Dále platí:

* Pokud je obrázek fixních rozměrů, dejte do atributů pixelovou velikost, kterou má zabrat v layoutu.
* Pokud je [obrázek pružný](pruzna-media.md), tzn. má v CSS nastavený atribut `width` nebo `height` na hodnotu `auto`), dejte do atributů poměr stran vycházející z maximální velikosti obrázků v responzivním layoutu.

Pokud vám vadí, že to zatím nefunguje v Safari a starších prohlížečích, je potřeba znát také [alternativní metody](css-pomer-stran.md) pro nastavení poměru stran.

### Ukázka {#width-height-ukazka}

Obrázek v následujícím CodePenu má nastaveno zpoždění načítání, takže byste měli vidět nejprve šedivý zástupný symbol. Po čase se vám načte zelený obrázek:

CodePen: [codepen.io/e/WBRaPe](https://codepen.io/machal/pen/WBRaPe?editors=1100)

Všimněte si, že v Chrome a Firefoxu vám layout celou dobu drží jako přibitý. No a pak se podívejte, že v CSS pro toto nepoužíváme žádné speciální triky. Prohlížeči prostě stačily atributy `width` a `height`.

<div class="related" markdown="1">
- [Poměr stran: alternativní metody](css-pomer-stran.md)
- [Padding trik](padding-trik.md)
</div>

Pro pořádek ještě dodám dva jiné CodePeny:

* [Bez atributu `width` a `height`](https://codepen.io/machal/pen/KKdNBew?editors=1100) - layout pak nehezky poskakuje.
* [S oběma atributy a padding trik fallbackem](https://codepen.io/machal/pen/MWabBBK?editors=1100) - pro případ, že byste to chtěli mít pojištěné i ve starších prohlížečích. (Za mě to není nutné.)

### Jaké rozměry dát do `width` a `height`? {#ukazka-rozmery}

Možná vás napadlo, že pokud atributy určují poměr stran, nemuseli byste si s tím lámat hlavu a vložit do nich nějaké nízké číslo, které onen poměr stran vyjadřuje…

```html
<!-- Tohle fungovat nebude: -->
<img src="image.jpg" alt="…"
  width="16" height="9">
```

…a mě to napadlo určitě, protože přesně takhle elegantně funguje responzivní layout [v AMP](amp.md).

Jenže to fungovat nebude. Pokud do `width` a `height` vložíte menší čísla než je aktuální potřeba layoutu, vykreslí se obrázek ve fixních rozměrech.

<!-- AdSnippet -->

Takže vkládaný rozměr musí být rovný nebo větší než je největší rozměr obrázku ve vašich layoutech. Pro zájemce přikládám [CodePen](https://codepen.io/machal/pen/jObBbKR?editors=1100) tohoto neúspěšného pokusu.

### Video a ostatní média {#width-height-ostatni}

S videem, `<iframe>` a dalšími externími médii vám zatím prohlížeče nepomohou, takže používejte [padding trik](padding-trik.md) nebo jiné [alternativní metody](css-pomer-stran.md) pro nastavení poměru stran.

## Podpora v prohlížečích {#prohlizece}

Jak už bylo řečeno, všechny tři dnešní podstatné prohlížeče to umí nebo deklarovaly, že to naimplementují:

* Firefox to zapnul [ve verzi 71](https://bugzilla.mozilla.org/show_bug.cgi?id=1547231).
* Chrome vlastnost podporuje [od verze 79](https://chromestatus.com/feature/5695266130755584).
* Safari ústy vývojáře deklaruje, že ji přidá do příštího [Tech Preview 99](https://twitter.com/smfr/status/1220051332767174656?s=20).

Ostatní prohlížeče buď vycházejí z Chrome (Edge, Opera…) nebo jsou pro potřeby článku nerelevantní. V takovém MSIE to už asi nezapnou, na druhou stranu tenhle prohlížeč pozvolna odchází a na zařízeních s pomalým připojení se nevyskytuje.

## Problémy a nedořešenosti {#problemy}

Jako každá nová metoda má i tahle zatím své mouchy. Dejte si pozor hlavně v případě použití následujících tří metod.

### Art direction {#problemy-art-direction}

Pokud používáte [značku `<picture>`](picture.md) pro vkládání různě rozměrných obrázků na různých rozlišeních…

```html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <img src="small.jpg" alt="…" width="640" height="360">
</picture>
```

…může vám tato metoda haprovat, protože u alternativních zdrojů uvedených v `<source>` není možné atributy `width` a `height` definovat. O tom se ale ví a [už se to řeší](https://github.com/whatwg/html/issues/4968).

### Lazy loading obrázků {#problemy-lazy-loading}

S nativním lazy loadingem by „nativní poměr stran“ fungovat měl…

```html
<img src="image.jpg" alt="…" loading="lazy"
  width="640" height="360">
```

…ale je zde jeden [bugísek v Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1045745), který se hodí sledovat.

Pokud nepoužíváte nativní líné načtení - je potřeba ošetřit přes `aspect-ratio` a ostatní metody

→ *Související: [Lazy loading obrázků a iframe](lazy-loading.md)*

## Nasazení mimo obrázky {#problemy-mimo}

A co prvky `<video>`, `<iframe>`, `<object>` a další externí média? Tam by se poměr stran hodil také, že ano…?

Opět jen můžu říct, že se [to řeší](https://github.com/whatwg/html/issues/4961), ale očekávám, že podobně jako u obrázků se to dořeší jen u videí, protože tam se poměr stran nastavuje podobně jako u obrázků.

Ostatní prvky jsou trochu jiné liga (dokumenty vkládané do dokumentu), takže bychom neměli očekávat podobné chování.

## Shrnutí {#shrnuti}

Prohlížeče se teď tedy v případě značky `<img>` chovají tak, jak jsme asi dlouho všichni očekávali.

Jak jsem říkal [v nedávném podcastu](https://www.vzhurudolu.cz/podcast/165-podcast-na-dalku), mnozí z webařů a mnohé z webařek si stavu, kdy byl poměr stran obrázků rozbitý, ani nevšimly. Pro ně se nic nemění.

Pro nás ostatní to znamená, že můžeme z kódu odstranit [padding trik](padding-trik.md) a další [hacky](css-pomer-stran.md). Alespoň ve většině případů, protože se bez nich nadále neobejdeme mimo obrázky.

Lidem, kteří nastavují `width` a `height` špatně, tedy ne v souladu s poměrem stran obrázků může tento krok prohlížečů rozbít layout stránky během vykreslování.

No a pro úplně všechny webaře platí – vyplňujme prosím poctivě atributy `width` a `height` u `<img>`.

<!-- AdSnippet -->
