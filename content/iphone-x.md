# iPhone X: jak si pro něj nastavit weby a proč je potřeba to udělat?

Schválně jsem text nenazval „jak *optimalizovat* weby pro iPhone X“. To, co zde ukazuji je totiž běžný a ve standardech W3C zanesený způsob přípravy webů na zařízení, která mají jiný než hranatý tvar obrazovky. 

Můžete z toho být nešťastní, ale asi to ničemu nepomůže. Lepší je vzít to s humorem:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I think I’ve fixed the notch issue in landscape 🍾 <a href="https://twitter.com/hashtag/iphoneX?src=hash&amp;ref_src=twsrc%5Etfw">#iphoneX</a> <a href="https://t.co/hGytyO3DRV">pic.twitter.com/hGytyO3DRV</a></p>&mdash; Vojta Stavik (@vojtastavik) <a href="https://twitter.com/vojtastavik/status/907911237983449088?ref_src=twsrc%5Etfw">September 13, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Nebo ještě lépe: Zjistit důvody, proč je potřeba nehranaté obrazovky řešit a podle toho uzpůsobit své weby. Od toho jsem tady já a tenhle článek.

Stačí si představit chytré hodinky s prohlížečem a hned víte, že za to nějaký Apple s iPhone X nemůže. 

<!-- AdSnippet -->

V čem je problém? Zařízení tohoto typu totiž neví, zda byste raději chtěli, aby stránka šla vidět celá nebo aby byla roztažená ke krajům za cenu ořezání jejích prvků.


## Weby s jednou barvou pozadí {#weby-jednobarevne}

U bílé barvy pozadí asi vše na iPhone X vše funguje. 

Pokud používáte jinou barvu, zkontrolujte si, zda ji máte nastavenou na pozadí stránky:

```css
body {
  background-color: <vaše-barva-pozadí>;
}
```

Mělo by to stačit.

V režimu na šířku vám iPhone X ke stranám přidá proužky v oné barvě a stránku zobrazí v šířce 724 [CSS pixelů](css-pixel.md).


## Weby s různobarevnými prvky roztaženými přes celou šířku stránku  {#weby-ruznobarevne}

I tady to může být jednoduché. Klíč je [v meta značce pro viewport](meta-viewport.md). 

```html
<meta name="viewport" 
  content="width=device-width, initial-scale=1, viewport-fit=cover">
```

Hodnotou `cover` vlastnosti [viewport-fit](meta-viewport.md#viewport-fit) říkáte, že se stránka má roztáhnout na celou šířku dostupné plochy v okně prohlížeče. A že vám nevadí, že něktré její části budou překryté kulatými rohy nebo výčnělkem.

![Úprava Vzhůru dolů pro iPhone X](dist/images/original/iphone-x.jpg)

Pokud váš podbarvený obsah drží nějakou postranní ochrannou zónu, asi už nic dalšího nepotřebujete udělat.

V režimu na šířku vám iPhone X zobrazí stránku v plné šířce 812 [CSS pixelů](css-pixel.md).

<!-- AdSnippet -->

Na obrázku je vidět ještě jeden krok, který jsem musel udělat v případě layoutu Vzhůru dolů. Posunul jsem breakpoint roztažení stránky na plnou šířku z `768px` na `813px`. U ostatních zařízení je to jedno, ale na iPhone X vypadá layout bez okrajů lépe.


## Weby s různobarevnými prvky bez ochranné zóny {#weby-bez-zony}

Postranní ochrannou zónu si vyrobte vlastními paddingy nebo převezměte vestavěné hodnoty. Na iPhone X jsou všechny čtyři směry doporučené ochranné zóny uložené v proměnných `safe-area-*` funkce `env()`:

```css
.container {
  padding: 1rem;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

Na iPhone X se tady převezmou vestavěné hodnoty, v ostatních prohlížečích to bude `1rem`.

Více o tom je [v článku na blogu vývojářů Safari](https://webkit.org/blog/7929/designing-websites-for-iphone-x/).

Ještě poznámka k pozicování elementů. 

## Zase to fixní pozicování! {#fixni}

Vraťte se k obrázku nahoře a v posledním screenshotu se podívejte na [Tracy](https://tracy.nette.org/cs/), ladící nástroj frameworku Nette. Vidíte křížek na její zavření? Správně nevidíte. Je schovaný pod zakulaceným růžkem obrazovky zařízení.

A všimli jste si, že její levá část je překrytá ovládacím prvkem prohlížeče? Nepůjde ovládat ani ta.

Už dlouho říkám, že fixní pozicování prvků je na mobilech dost nebezpečné a musíte jej opravdu hodně promýšlet. Více o tom píšu [v knížce o responzivním designu](https://www.vzhurudolu.cz/ebook-responzivni).


## Jak to testovat? {#jak-testovat}

<div class="related" markdown="1">
- [Efektivní ladění responzivních webů](/prirucka/jak-testovat-responzivni-weby)
</div>

[Browserstack](https://www.browserstack.com/s) sice iPhone X testovat umí, ale v době psaní článku jen v režimu na výšku.

Jste tedy odkázáni [na simulátor vestavěný v Xcode](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html), pokud máte Maca. 

Nebo na kamarády a kamarádky s iPhone X. Já vím, ti jsou centrem pozornosti i bez toho.

<!-- AdSnippet -->
