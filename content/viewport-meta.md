# Meta značka pro viewport

Lidsky řečeno slouží k informování prohlížeče o tom, zda a jak jste web připravili pro mobilní zařízení.

<figure>
<img src="dist/images/original/meta-viewport-mobile.jpg" alt="Meta Viewport">
<figcaption markdown="1">    
*Bez použití meta značky se web vykreslí do výchozího layoutového viewportu, který má většinou šířku 980 pixelů. Web bude vypadat „jako na počítači, jen zmenšený“. S použitím meta značky pro viewport se šířka layoutového viewportu nastaví na velikost rozlišení v CSS pixelech*
</figcaption>
</figure>

Začnu bez vysvětlování zápisem meta tagu pro viewport, který je v pořádku:

```html
<meta name="viewport" 
  content="width=device-width, initial-scale=1">
```

K tomu si do CSS doplňte:

```css
@-ms-viewport { 
  width: device-width; 
}
```

Tohle vám u drtivé většiny responzivních webů bude stačit. Pokud ale máte chvilku času navíc, pojďte se o meta značce dozvědět něco víc.

## Parametry meta značky pro viewport {#parametry}


Do atributu `content` je možné dávat různé vlastnosti a jejich hodnoty.

### `width` {#width}

Nastaví šířku layoutového viewportu v pixelech. Nejčastěji využívaná hodnota `device-width` sjednotí šířku layoutového viewportu se šířkou ideálního viewportu. Takže uživatel nebude muset zoomovat a vaši responzivní stránku uvidí jedna ku jedné. Pokud použijete hodnotu, např. `width=400`, nastavíte šířku layoutového viewportu na 400 pixelů. Nenapadá mě ale moc rozumných důvodů, proč to dělat.

### `initial-scale` {#initial-scale}

Nastaví výchozí zoom, ale také šířku layoutového viewportu. Ve výsledku dělá zápis `initial-scale=1` totéž jako `width=device-width`, jenže kvůli drobným prohlížečovým nekompatibilitám musíme uvádět oba. Za chvíli o tom píšu.

### `user-scalable` {#user-scalable}

Hodnota `no` zakazuje uživateli jakkoliv zoomovat.  Prosím, nepoužívejte ji. Zoomování je na mobilních zařízení fakt potřeba. Ať už jde o zvětšení textu v horších podmínkách, nebo jen touhu vidět detaily z nějakého obrázku, přibližování obsahu prostě potřebují všichni uživatelé. Safari na iOS 10 navíc zákaz zoomování úplně ignorují. <span class="ebook-only">Více o tom píšu [v kapitole o častých chybách](responzivni-ui-caste-chyby.md).</span>

### `minimum-scale`/`maximum-scale` {#scale}

Minimální a maximální možný zoom. `maximum-scale=1` ruší možnost přiblížení stejně jako `user-scalable=no`. Prosím, nepoužívejte to.

### `shrink-to-fit` {#shrink-to-fit}

Pokud by váš layout bláznil na iPadech s iOS od verze 9, zkuste ještě přidat atribut s hodnotou `shrink-to-fit=no`. Proč? To vlastně skoro nikdo neví. Maximiliano Firtman o tom píše v textu „The new viewport shrink-to-fit attribute (that nobody understands)“. [vrdl.in/xpub9](http://www.mobilexweb.com/blog/safari-on-ios-9-3-picture-shrink-fit-iphone-se)


### `viewport-fit` {#viewport-fit}

Nová vlastnost, která řeší způsob zobrazování na zařízeních s jinou než hranatou obrazovkou. Jako příklad vezměme chytré hodinky nebo iPhone X. Vlastnost může mít následující hodnoty (už znáte z `background-size`):

- `auto` - výchozí stav, který vše nechává na prohlížeči. U iPhone X například odpovídá hodnotě `contain`.
- `contain` - zmenší viewport pro stránku tak, aby byla vidět celá. Jakou barvu vykreslí po stranách, záleží na prohlížeči. iPhone X v `background-color` z `body`. 
- `cover` - roztáhne viewport pro stránku tak, aby nikde „nevyčuhovaly“ neobarvené části rozhraní prohlížeče. S tím rizikem, že kulaté rohy nebo výčnělky na displeji zařízení některé části stránky překryjí.

Prakticky o tom píšu  i s příklady pro konkrétní weby na blogu v článku o iPhone X. [vrdl.cz/p/iphone-x](https://www.vzhurudolu.cz/prirucka/iphone-x)

Stručně popsané řešení pro vaše weby: Pro layout s jednobarevným pozadím si jen zkontrolujte nastavení `background-color` na `body`. Pro weby s různobarevnými prvky zabírajícími celou šířku si přidejte parametr do meta značky pro viewport:

```html
<meta name="viewport" 
  content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## Proč `width=device-width` a zároveň `initial-scale=1`? {#proc-oba}

Jak už jsem psal, `width=device-width` je instrukce pro sjednocení layoutového viewportu s ideálním.

`width=device-width` má ovšem jednu známou nevýhodu: Safari na iOS pak jako ideální viewport v režimu zobrazení na šířku použije ideální viewport pro výšku. Ano, přesně tohle je příčinou toho problému se „zvětšováním“ stránky v landscape režimu na iOS.

Je zde jedna záchrana: použít namísto toho zápis `initial-scale=1`. Světe, div se, na všech mobilních zařízeních má ten samý efekt jako `width=device-width`. Světe, div se, podruhé, Safari na iOS už v režimu landscape renderuje do ideálního landscape viewportu. A světe, div se, má to svoje nevýhody! Internet Explorer se na mobilních Windows 8 totiž začne chovat úplně stejně špatně jako mobilní Safari.

Nevadí. Problémy vyřešíme tím, že použijeme obě hodnoty.


## Zavináčové pravidlo `@viewport` v CSS {#zavinac}

Instrukce pro způsob zobrazování by se měla dávat do CSS, že ano? S logičtěji umístěným zápisem `@viewport { }` přišla Opera, která ovšem následně zběhla k renderovacímu jádru Blink, takže jej už zase nejspíš neumí. V praxi je ten zápis nyní potřeba hlavně pro Internet Explorer na Windows Phone 8. [vrdl.cz/p/viewport-windows](https://www.vzhurudolu.cz/prirucka/viewport-windows)


## Meta viewport raději moc nenastavujte Javascriptem  {#js}

Hodí se to, jen když nemáte přístup do `<head>`. Teoreticky jde Javascriptem meta značka pro viewport i měnit, ale nedělejte to. Je to náročné na překreslování stránky. Vyrobte raději normální responzivní web s jedním meta tagem pro viewport.


## Odstranění 300ms prodlevy  {#300ms}

Když budete mít viewport nastavený správně, s hodnotou `width`, aktuální prohlížeče postavené na jádrech WebKit a Blink samy odstraní prodlevu mezi tapnutím a akcí. Starší prohlížeče prodlevu dělaly proto, že po tapnutí prstem čekaly, zda nepřidáte prst druhý a nemáte tedy v úmyslu stránku zvětšovat. Více si o tom můžete přečíst na blogu vývojářů WebKitu. [vrdl.in/l72eg](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)

<div class="ebook-only" markdown="1">

Teď se pojďme podívat na jeden parametr webů, jehož podcenění může mít daleko horší důsledky – rychlost načítání. Nepatří sem jen zdánlivě. V průběhu práce na projektu ji totiž nesmíme nechat na závěr.

</div>
