# Poměr stran obrázků pomocí atributů WITH a HEIGHT ve značce IMG

Nedávno jsem na Vzhůru dolů publikoval [text o nastavení poměru stran](css-pomer-stran.md) pro obrázky, video, iframy a další obsah vkládaný do HTML zvenčí, říkejme jim média.

Problém je v tom, že prohlížeče renderují stránku dříve než jsou tyto prvky stažené. Pokud neznají velikost ani poměr stran médií, dopadne to tak, že se stránka vykresluje vícekrát. Pro uživatele to znamená nepříjemné „poskakování“ obsahu v momentě, kdy už například čte text.

<!-- TODO video, obrázek…? -->

V původním článku jsme na to šli přes různé hacky a sliboval jsem, že se blýská na lepší časy a snad to bude rovnou vestavěné v prohlížečích.

No a ony lepší časy přicházejí, protože, jak jste se mohli už dočíst [na Smashing Magazine](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/), prohlížeče pro nastavení poměru stran prvků v `<img>` používají (Chrome a Firefox) nebo používat začnou (Safari) atributy pro nastavení výšky a šířky.

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
* Pokud je [obrázek pružný](pruzna-media.md), tzn. má v CSS nastavený atribut `width` nebo `height` na hodnoti `auto`), dejte do atributů poměr stran vycházející z reálné velikosti na nějakém populárním rozlišení.

Pokud vám vadí, že to zatím nefunguje v Safari a starších prohlížečích, je potřeba znát také [alternativní metody](css-pomer-stran.md) pro nastavení poměru stran.

### Video a ostatní média {#width-height-ostatni}

S videem, `<iframe>` a dalšími externími médii vám zatím prohlížeče nepomohou, takže používejte [padding trik](padding-trik.md) nebo jiné [alternativní metody](css-pomer-stran.md) pro nastavení poměru stran.

## Ukázka {#ukazka}

Obrázek v následujícím CodePenu má nastaveno spoždění načítání, takže byste měli vidět neprve šedivý zástupný symbol. Po čase se vám načte zelený obrázek:

CodePen: [codepen.io/e/WBRaPe](https://codepen.io/machal/pen/WBRaPe?editors=1100)

Všimněte si, že v Chrome a Firefoxu vám layout celou dobu drží jako přibitý. No a pak se podívejte, že v CSS pro toto nepoužíváme žádné speciální triky. Prohlížeči prostě stačily atributy `width` a `height`.

Pro pořádek ještě dva jiné CodePeny:

* [Bez atributu `width` a `height`](https://codepen.io/machal/pen/KKdNBew?editors=1100) - layout pak nehezky poskakuje.
* [S oběma atributy a padding trik fallbackem](https://codepen.io/machal/pen/MWabBBK?editors=1100) - pro případ, že byste to chtěli mít pojištěné i ve starších prohlížečích. (Za mě to není nutné.)

## Podpora v prohlížečích {#prohlizece}

Jak už bylo řečeno, všechny tři dnešní podstatné prohlížeče to umí nebo deklarovaly, že to naimplementují:

* Firefox to zapnul [ve verzi 71](https://bugzilla.mozilla.org/show_bug.cgi?id=1547231).
* Chrome vlastnost podporuje [od verze 79](https://chromestatus.com/feature/5695266130755584).
* Safari ústy vývojáře deklaruje, že ji přidá do příštího [Tech Preview 99](https://twitter.com/smfr/status/1220051332767174656?s=20).

Ostatní prohlížeče buď vycházejí z Chrome (Edge, Opera…) nebo jsou pro potřeby článku nerelevantní (V MSIE to už zasi nezapnou, na druhou stranu tenhle prohlížeč pozvolna odchází a na zařízeních s pomalým připojení se nevyskytuje.)

## Problémy a nedořešenosti {#problemy}

Jako každá nová metoda

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

Pokud nepoužíváte nativní líné načtení - je potřeba ošetřit přes aspect-ratio a ostatní metody

→ *Související: [Lazy loading obrázků a iframe](lazy-loading.md)*

## Mimo obrázky {#problemy-mimo}

A co prvky `<video>`, `<iframe>`, `<object>` a další externí média? Tam by se poměr stran hodil také, že ano…?

Opět jen můžu říct, že se [to řeší](https://github.com/whatwg/html/issues/4961), ale očekávám, že podobně jako u obrázků se to dořeší jen u videí, protože tam se poměr stran nastavuje podobně jako u obrázků.

Ostatní prvky jsou trochu jiné liga (dokumenty vkládané do dokumentu), takže bychom neměli očekávat podobné chování.

## Shrnutí {#shrnuti}

Prohlížeče se teď tedy v případě značky `<img>` chovají tak, jak jsme asi dlouho všichni očekávali. Jak jsem říkal [v nedávném podcastu](https://www.vzhurudolu.cz/podcast/165-podcast-na-dalku), mnozí a mnohé z webařů a webařek si stavu, kdy byl poměr stran obrázků rozbitý, ani nevšimly. Pro ně se nic nemění.

Pro nás ostatní to znamená, že můžeme z kódu odstranit [padding trik](padding-trik.md) a další [hacky](css-pomer-stran.md). Alespoň ve většině případů, protože se bez nich nadále neobejdeme mimo obrázky.

Lidem, kteří nastavují `width` a `height` špatně, tedy ne v souladu s poměrem stran obrázků může tento krok prohlížečů rozbít layout stránky během vykreslování.

No a pro úplně všechny webaře platí – vyplňujme prosím poctivě atributy `width` a `height` u `<img>`.
