# „Retina“ displeje a CSS pixel

CSS pixel. [Referenční pixel](http://blog.garcon.cz/post/48994636229/pixel-je-mrtev-at-zije-referencni-pixel). Ať už tomu říkáme jakkoliv, pixel už hold [není co za našeho mládí býval](http://alistapart.com/article/a-pixel-identity-crisis).

Na to jak je CSS pixel v dnešním webdesignu důležitý, je pohříchu málo známý. Proto tady začneme úplně od základů.

## Hardwarové rozlišení nás moc nezajímá

Retina, Amoled, QuadHD. Asi jste si všimli, že mobilní zařízení mají v poslední době dost šílená rozlišení. A trend u mobilních zařízení neskončí, viz [MacBook Pro s Retina displejem](https://www.apple.com/cz/macbook-pro/features-retina/).

Kouká se přes ně na weby dobře, což o to. Ale kdo má pro ně ty weby navrhovat?!

Vezměme iPhone5S, ten má rozlišení 640×1136 pixelů. Když tohle na [školení](http://www.vzhurudolu.cz/kurzy/responzivni-design) zmíním, je to přesně ta chvíle kdy se někteří webaři začnou čertit: „Když si někdo otočí iPhone na šířku, zobrazí se mu web tak jsem ho v breakpointu 1024px připravoval pro tablet nebo menší desktop. Hrůza!"

Není to tak. Hardwarové pixely nás webaře totiž skoro nezajímají. Zato CSS pixely jsou naši kamarádi.

## CSS rozlišení vs. hardwarové rozlišení

Autorům webů totiž prohlížeče hardwarové rozlišení přepočítají do takzvaného CSS rozlišení.

V případě iPhone5S to bude polovina, tedy 320×568. To už je docela normální „mobilní" rozlišení, že?

Retina displej na iPhone má tedy poměr mezi CSS a hardwarovým rozlišením 1:2. Ale pozor, když v CSS vykreslíme objekt 1×1 pixel, bude zabírat 4 hardwarové pixely. Půjde o mřížku o velikosti 2×2 pixely, odtud ten poměr 1:2.

Když tedy do stránky vložíme obrázek…

```html
<img src="fotka.jpg"
    width="100" height="100"
    alt="Fotka z dovolené">
````

…vykreslí se na Retina displeji v ploše 200×200 hardwarových pixelů.

A tady vznikají problémy. Prohlížeč totiž nebude mít fotografii v dostatečné kvalitě, protože vykresluje 100×100 velký obrázek na 200×200 mřížce. Na iPhone s Retina displejem bude tedy naše úžasná fotografie z dovolené prostě nebude tak krásně ostrá. Kurnik šopa!

Zjednodušeně řečeno je tedy lepší fotografii rovnou vyrobit ve velikosti 200×200 pixelů. Do stránky ji ale vložíte stejným HTML kódem. Prohlížeč ji zmenší na 100×100 CSS pixelů, na běžných displejích nic nepoznáte a na Retina displeji to bude vypadat hezky.

Jenže tak jednoduché to není a tak raději ještě chvilku čtěte.

Nejdříve ale ještě o tom, kde všude s CSS pixely pracují webaři. Stručná odpověď je — všude.

## Autoři stránek pracují jen s CSS pixely

Raději doslovně připomenu, když použijete [meta značku pro viewport](viewport-meta.md), pak v HTML, CSS i Javascriptu vždy pracujeme s CSS pixely. K hardwarovým zatím rozumný přístup nemáme.

Takže když napíšu media query…

```css
@media screen and (max-width: 600px) { … }
```

…cílím s její pomocí na rozlišení obrazovky nebo velikosti okna, které mají méně než 600 CSS pixelů. A cílím tedy i na ten proklatý iPhone5S.

## 2×? 1.5×?! 1.325×!!! 2.37×!!! 3×!!!! 4×!!!!

Ještě mi rozumíte? Výborně, trochu to zkomplikujeme.

![device-pixel-ratio](http://www.vzhurudolu.cz/prirucka-content/schemes/device-pixel-ratio.png)

Poměru mezi hardwarovým a CSS rozlišením se říká `device-pixel-ratio.`Mimochodem, pomocí [media query](http://www.vzhurudolu.cz/prirucka/css3-media-queries) je možné zacílit [zařízení s displeji v určitém poměru](http://mnt.github.io/dpitest/) i v CSS:

```css
@media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {  …  }
```

Jenže tady se děje další častá chyba webařů. Jejich responzivní weby počítají jen s poměrem 1:2, (technicky řečeno `device-pixel-ratio: 2`).

Už dříve existovaly zařízení s poměry [1.5×, 1.325×, 2.37× a dalšími](http://www.canbike.org/CSSpixels/). A ne vždy na nich obrázek ve 2násobném rozlišení vypadá uspokojivě, zejména pokud jde o ikonku.

Poměrně běžné jsou také 3× displeje. Ostatně i v době psaní článku zveřejněný iPhone6+ bude z téhle kategorie. No a někteří z nás pak budou na svém zařízení používat [čtyřnásobný poměr](http://www.theverge.com/2014/9/3/6097297/samsung-galaxy-note-edge-wraparound-display) mezi hardwarovými a CSS pixely. Tam už ani obrázek ve dvojnásobném rozlišení zřejmě stačit nebude.

Vezměme si pár oblíbených zařízení. Jaký je tam poměr mezi HW (hardwarovým) a CSS rozlišením?

<table class="margin-bottom-xs"><caption>Poměr mezi HW a CSS rozlišením u vybraných zařízení</caption>
<tbody>
<tr>
<th>Zařízení</th>
<th>HW rozlišení</th>
<th>CSS rozlišení</th>
<th>device-pixel-ratio</th>
</tr>
<tr>
<td>iPad Mini</td>
<td>768×1024</td>
<td>768×1024</td>
<td>1</td>
</tr>
<tr>
<td>iPhone 4</td>
<td>640×960</td>
<td>320×480</td>
<td>2</td>
</tr>
<tr>
<td>Google Nexus 7</td>
<td>800×1280</td>
<td>604×966</td>
<td>1.325</td>
</tr>
<tr>
<td>HTC One</td>
<td>1080×1920</td>
<td>360×640</td>
<td>3</td>
</tr>
<tr>
<td>Xiaomi Mi3</td>
<td>1080×1920</td>
<td>270×480</td>
<td>4</td>
</tr>
</tbody>
</table>

<small>_Další zařízení najdete na [canbike.org/CSSpixels](/web/20150702122011/http://www.canbike.org/CSSpixels/)_</small>

Ježíši, to je průšvih, co? Budeme vytvářet obrázky pro každé `device-pixel-ratio`?

Ale nějak se to řešit dá, nebojte. Jen člověk musí opustit staré zvyky.

## Řešení pro svět s nekonečným množstvím device-pixel-ratio

Pokud vaše fotky nebo ikony nevypadají na některém `device-pixel-ratio` dobře, máte dvě možnosti:

1.  připravovat pro každý poměr speciální bitmapový obrázek, což je ekvivalentní frázi _„brzy se zbláznit"_ nebo…
2.  pro ikony použít vektory a chytřeji pracovat s fotografiemi

### Obrázky v rozhraní – ikony, logotypy, dekorace

Tady je rozhodně jedinou možnou cestou použít vektorovou grafiku. [Ikonfonty](/web/20150702122011/http://css-tricks.com/examples/IconFont/) považuji za dobré, ale spíše dočasné řešení. Do budoucna zajímavější možnosti nabízí [SVG](/web/20150702122011/http://www.vzhurudolu.cz/prirucka/svg). Obě varianty jsou dnes ale dobré. Pro každý projekt se hodí něco jiného, posuzujte [všechny aspekty](/web/20150702122011/http://css-tricks.com/icon-fonts-vs-svg/).

Pro dekorace v rozhraní (vlastní stíny, vlastní vzhled tlačítek nebo rámečků…) je určitě nejvýhodnější využít možností [CSS3](/web/20150702122011/http://www.vzhurudolu.cz/prirucka/css3). Pokud jeho možnosti nestačí, zkuste SVG.

### Obsahové obrázky – fotografie

Fotky samozřejmě můžete připravit v ohromném rozlišení – klidně více než 4násobném – a v HTML kódu stránky zmenšit. Bude to vypadat všude hezky, ale nárust datového objemu stránky bude tak šílený, že vás brzy jistojistě uživatelé přijdou ubít svými smartphony. Připomínám, že fotka připravená pro Retina displej (2×) neobsahuje 2×, ale 4× více pixelů, takže její datový objem naroste klidně čtyřnásobně.

Osobně preferuji kombinaci [responzivních obrázků](/web/20150702122011/http://scottjehl.github.io/picturefill/) s metodou chytré komprese pomocí [stlačených (Compressive) obrázků](/web/20150702122011/http://filamentgroup.com/lab/compressive-images.html). Více o ní třeba příště. Univerzální řešení však neexistuje a u každého projektu je potřeba vyzkoušet si různé varianty a hledat rovnováhu mezi kvalitou zobrazení na různých zařízeních a datovým objemem.
