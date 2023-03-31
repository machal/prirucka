# Meta značka pro viewport: Vše, co o ní potřebujete vědět

Meta značka „viewport“ se používá hlavně pro mobily [v responzivním designu](https://www.vzhurudolu.cz/responzivni-design).

Slouží k tomu, aby mobily nepoužily výchozí viewport, optimalizovaný pro ne-responzivní weby, ale své přirozené rozlišení.

Stačí uvést následující kus kódu do hlavičky HTML dokumentu:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Toto HTML přesně řečeno nastaví šířku [layoutového viewportu](viewport.md) na velikost rozlišení v [CSS pixelech](css-pixel.md).

V mobilech se tedy stane to, co vidíte na obrázku:

<figure>
<img src="../dist/images/original/meta-viewport-mobile.jpg" alt="Meta Viewport">
<figcaption markdown="1">
*Z desktopového rozlišení se stane mobilní. Stačilo upravit viewport.*
</figcaption>
</figure>

Bez použití meta značky se totiž web vykreslí do výchozího layoutového viewportu, který má většinou šířku 980 pixelů. Web bude vypadat „jako na počítači, jen zmenšený“.

Tohle by vám obvykle mohlo stačit. Dále pokračujte jen pokud jste hodně zvědaví, nebo pokročilí.

## Parametry meta značky pro viewport {#parametry}

Do atributu `content` je možné dávat různé vlastnosti a jejich hodnoty.

### width {#width}

Vlastnost `width` nastaví šířku layoutového viewportu.

Nejčastěji využívaná hodnota `device-width`, což je `100vw` neboli 100 % šířky viewportu. Sjednotí se tak šířka layoutového viewportu se šířkou ideálního viewportu, viz [text o viewportech](viewport.md). Uživatel tak nebude muset zoomovat a vaši responzivní stránku uvidí jedna ku jedné.

Pokud použijete hodnotu, např. `width=400`, nastavíte šířku layoutového viewportu na 400 pixelů. Nenapadá mě ale moc rozumných důvodů, proč to dělat. Snad jen v případě, že se vaši designéři zbláznili a navrhují pro jedno konkrétní rozlišení. Nedoporučuji to.

Existuje samozřejmě i podobný atribut `height`, který nastavuje výšku layoutového viewportu. 

### initial-scale {#initial-scale}

Vlastnost `initial-scale` nastaví výchozí zoom, ale také šířku layoutového viewportu. Ve výsledku dělá zápis `initial-scale=1` totéž jako `width=device-width`. Pokud chcete maximální kompatibilitu, uvádějte oba dva.

<!-- AdSnippet -->

Bez `initial-scale=1` totiž některé prohlížeče (bezpečně vím o Safari na iOS 8 a starších) renderují stránku do rozlišení, jako by bylo otočené na výšku, i když jej používáme na šířku.

### user-scalable {#user-scalable}

Vlastnost `user-scalable` určuje, zda uživatel může zoomovat.

Hodnota `no` zakazuje uživateli jakkoliv zoomovat.  Prosím, nepoužívejte ji.

Zoomování je na mobilních zařízení fakt potřeba. Ať už jde o zvětšení textu v horších světelných podmínkách, nebo jen touhu vidět detaily z nějakého obrázku, přibližování obsahu prostě potřebují všichni uživatelé. Safari na iOS 10 a novějších navíc zákaz zoomování úplně ignoruje. <span class="ebook-only">Více o tom píšu [v kapitole o častých chybách](responzivni-ui-caste-chyby.md).</span>

Pokud si však přejete, aby Safari nezoomovalo v textových polích `<input>`, které mají menší velikost písma než `16px`, pak je možné použít vlastnost `user-scalable=no`. Možnost zoomování celé stránky ale uživateli zůstane.

### minimum-scale/maximum-scale {#scale}

Vlastnosti `minimum-scale` a `maximum-scale` určují minimální a maximální možný zoom.

`maximum-scale=1` ruší možnost přiblížení stejně jako `user-scalable=no`. Opět naléhám – prosím, nepoužívejte to.

### interactive-widget {#interactive-widget}

Prostřednictvím vlastnosti `interactive-widget` můžete prohlížeči (nyní Chrome na Androidu) sdělit, jaké chování si přejete při otevření widgetu, což je většinou virtuální klávesnice.

Možné hodnota pro `interactive-widget` jsou:

- `resizes-visual` – Změní velikost pouze vizuálního viewportu, ale ne layoutového viewportu.
- `resizes-content` – Změní velikost obou viewportů.
- `overlays-content`: Nezmění velikost žádného viewportu.

Platí to od Chrome 108 na Androidu. Více je v článku [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/).

### shrink-to-fit {#shrink-to-fit}

Vlastnost `shrink-to-fit` už není relevantní.

Na starší verzích iOS bylo problematické umístění prvků částečně mimo viewport (například pomocí `position: absolute`), na zařízeních s iOS se vizuální viewport přepočítá tak, aby se zobrazil i onen pozicovaný element.

Dnes už je toto chování standardní a není potřeba používat `shrink-to-fit`.

Viz v textu Scotta O'Hary: [scottohara.me/blog/2018/12/11/shrink-to-fit.html](https://www.scottohara.me/blog/2018/12/11/shrink-to-fit.html)

### viewport-fit {#viewport-fit}

Relativně nová vlastnost, která řeší způsob zobrazování na zařízeních s jinou než hranatou obrazovkou.

<div class="web-only" markdown="1">
Jako příklad vezměme [chytré hodinky](weby-watchos.md) nebo [iPhone X](iphone-x.md) a novější.
</div>

Vlastnost může mít následující hodnoty (už znáte z `background-size`):

- `auto` – výchozí stav, který vše nechává na prohlížeči. U iPhone X a novějších to například odpovídá hodnotě `contain`.
- `contain` – zmenší viewport pro stránku tak, aby byla vidět celá. Jakou barvu vykreslí po stranách, záleží na prohlížeči. U nových iPhonů je to `background-color` z `body`.
- `cover` – roztáhne viewport pro stránku tak, aby nikde „nevyčuhovaly“ neobarvené části rozhraní prohlížeče. S tím rizikem, že kulaté rohy nebo výčnělky na displeji zařízení některé části stránky překryjí.

<figure>
<img src="../dist/images/original/viewport-fit-cover.jpg" alt="Viewport Fit">
<figcaption markdown="1">
*Pokud má stránka různobarevné pozadí, jako je to u Vzhůru dolů, hodí se do meta značky přidat viewport-fit=cover*
</figcaption>
</figure>

<div class="web-only" markdown="1">
Více o tom píšu [v článku o iPhone X](iphone-x.md).
</div>

<div class="ebook-only" markdown="1">
Více o tom píšu na blogu v článku o iPhone X. [vrdl.cz/p/iphone-x](iphone-x.md)
</div>

<!-- AdSnippet -->

Stručné řešení pro vaše weby: Pro layout s jednobarevným pozadím si jen zkontrolujte nastavení `background-color` na `body`. Pro weby s různobarevnými prvky zabírajícími celou šířku si přidejte parametr do meta značky pro viewport:

```html
<meta name="viewport"
  content="width=device-width, viewport-fit=cover">
```

## Tipy, triky, zajímavosti {#tipy}

### Meta viewport raději moc nenastavujte Javascriptem  {#js}

Hodí se to, jen když nemáte přístup do `<head>`. Teoreticky jde Javascriptem meta značka pro viewport i měnit, ale nedělejte to. Je to náročné na překreslování stránky. Vyrobte raději normální responzivní web s jedním meta tagem pro viewport.

### Odstranění prodlevy mezi tapnutím a akcí trvající 300 ms  {#300ms}

Když budete mít viewport nastavený správně, s hodnotou `width`, aktuální prohlížeče postavené na jádrech WebKit a Blink samy odstraní prodlevu mezi tapnutím a akcí. Starší prohlížeče totiž po tapnutí prstem čekaly, zda nepřidáte prst druhý a nemáte tedy v úmyslu stránku zvětšovat. Toto už dnes ale také, pokud vím, není platné.

### Zavináčové pravidlo `@viewport` v CSS {#zavinac}

Instrukce pro způsob zobrazování by se měla dávat do CSS, že ano? S logičtěji umístěným zápisem `@viewport { }` přišlo W3C, ale moderní prohlížeče jej zatím nezvládají. Výjimkou byl Internet Explorer 11 a Edge, kde je to bylo potřeba zapnout. Teď už to to tedy podle mě k ničemu není. <span class="ebook-only" markdown="1"> Psal jsem o tom ve starším článku. [vrdl.cz/p/viewport-windows](https://www.vzhurudolu.cz/prirucka/viewport-windows)</span> <span class="web-only" markdown="1">Psal jsem o tom [ve starším článku](https://www.vzhurudolu.cz/prirucka/viewport-windows).</span>

### Weby na WatchOS – pokud máte web optimalizovaný pro viewporty menší než 320px {#watch-os}

Chytré hodinky od Applu vynucují zobrazení našich webových dílek  na zápěstí uživatelů ve viewportu širokém 320 CSS pixelů. Pokud bychom tomu chtěli zabránit a zobrazit je ve výchozím CSS rozlišení (o šířce 272 nebo 312 pixelů podle typu hodinek), musíme si dupnout následujícím kódem:

```html
<meta name="disabled-adaptations" content="watch">
```

Vtipné je, že WatchOS ve výchozím režimu vynucují přepočítaný viewport uvnitř přepočítaného viewportu. Ale co už – my léta víme, že viewporty na mobilních zařízeních jsou jako teorie relativity: Víme, že existují, víme že jsou složité, ale skoro nikdo jim nerozumí.

<div class="ebook-only" markdown="1">

Více o [webech na WatchOS](weby-watchos.md) píšu ve zvláštní kapitole.

</div>

<!-- AdSnippet -->
