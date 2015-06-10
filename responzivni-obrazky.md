# Responzivní obrázky

V [responzivním designu](http://www.vzhurudolu.cz/responzivn-design) často potřebujeme volit mezi různými variantami jednoho obsahového obrázku. Nejčastěji proto, že chceme ušetřit datový objem stránky na mobilech.

Naš starý známý `<img>` k tomu nestačí. A tak iniciativa [Responsive Images Community Group](http://responsiveimages.org/) přišla s novými atributy – `srcset` a `sizes` – a také s úplně novým tagem `<picture>`. 

Je to standard, jehož podporu deklarovali všichni významný výrobci prohlížečů, a který je s drobným přimhouřením očí [s pomocí polyfillu použitelný](http://www.vzhurudolu.cz/prirucka/picturefill) už dnes.

Bavíme se tady o bitmapových obrázcích, typicky fotografiích. Pro ikony, logotypy a další vektorový obsah je lepší použít formát [SVG](http://www.vzhurudolu.cz/prirucka/svg) nebo alternativu v podobě [ikonfontů](http://css-tricks.com/examples/IconFont/).

## Proč ne `<img src="">`?

Občas je pro responzivní obrázky možné vidět [řešení s nahrazováním atributu src](http://responsejs.com/):

```
<img src="large.jpg" data-small="small.jpg" …>
```

Javascriptem pak na malých displejích zkopírujete obsah `data-small` do `src` a prohlížeč zobrazí správný obrázek. Na pohled elegantní, jenže ve výsledku napytel.

Neexistuje totiž způsob jak prohlížeč odradit od stažení obrázku nalinkovaného v `<img src>`. Proto se v těchto řešeních obrázek sice vymění, ale stáhnou se oba soubory, což na pomalé mobilní síti moc nepotěší.

## Proč vlastně více variant obrázků?

Holky a kluci v RICG si sedli a [vymysleli 9 scénářů](http://usecases.responsiveimages.org/#use-cases) kdy je potřeba jeden obrázek reprezentovat různými variantami. My si tady ale budeme povídat jen o těch nejdůležitějších:

<img class="picture" src="content/schemes/rwd-obrazky-priklad-layout.jpg" width="700" height="394" alt="Scénáře pro nasazení responzivních obrázků">

1. Výběr varianty obrázku podle velikosti okna prohlížeče.
2. Výběr varianty podle velikosti obrázku v rámci layoutu stránky. V některých situacích totiž můžeme na větším displeji potřebovat menší obrázky. Srovnejte layout pro mobil a tablet na obrázku.
3. Výběr podle device-pixel-ratio neboli poměru mezi hardwarovým a [CSS rozlišením](http://www.vzhurudolu.cz/prirucka/css-pixel).
4. Výběr podle art direction, jinak řečeno výtvarné řežie. Typicky když obrázek na mobilu potřebujeme oříznout jinak než na desktopu.

## `srcset/sizes`

```
<img src="small.jpg"
  srcset="medium.jpg 600w, large.jpg 1200w" 
  sizes="(min-width: 600px) 600px, 100vw"
  alt="…" width="400" height="300">
```  

Nové atributy `<img>`, pomocí kterých autor stránky prohlížeči sděluje 2 informace. V `srcset` sadu variant obrázků a jejich vlastností. V `sizes` pak velikosti obrázků mezi jednotlivými breakpointy layoutu. Více [o srcset a sizes ve zvláštním článku](http://www.vzhurudolu.cz/prirucka/srcset-sizes). Se srcset a sizes si vystačíte ve všech scénářích kromě čtvrtého – výtvarné režie. To pak potřebujete speciální tag a to…

## `<picture>`

```
<picture>
    <source media="(min-width: 600px)" srcset="medium.jpg">
    <source media="(min-width: 1024px)" srcset="large.jpg">
    <img src="small.jpg" alt="…">
</picture>
```

Ve většině případů si asi vystačíte se `srcset` a `sizes`, nový tag `<picture>` vymysleli pro méně časté scénáře a kombinace scénářů použití. Více [o ](http://www.vzhurudolu.cz/prirucka/picture)[`<picture>`](http://www.vzhurudolu.cz/prirucka/picture)[ ve zvláštním článku](http://www.vzhurudolu.cz/prirucka/picture).

## Pomocník pro prohlížeč, ne příkaz

`srcset`, `sizes` i všechny konstrukce v `<picture>` jsou jen jakousi nádstavbou nad stále funkční a povinný mechanizmus `<img src>`. Co uzná prohlížeč za lepší alternativu obrázku v `<img src>` tam prostě zkopíruje a zobrazí.

## Podpora v prohlížečích

Prakticky všechny prohlížeče ústy svých tvůrců deklarovaly, že tento standard naimplementují. Ano, [včetně Internet Exploreru](http://blogs.msdn.com/b/ie/archive/2014/12/08/status-roadmap-update-srcset-lt-main-gt-element-and-date-inputs-in-development.aspx), ptáte se správně. Jenže jim bude chvíli trvat než to udělají. Nativní podpora je k dispozici [v posledních verzích Chrome, Opeře a zčásti Safari](http://caniuse.com/#feat=srcset). Do té doby – a samozřejmě kvůli starším prohlížečům – je potřeba používat polyfill [Picturefill](http://www.vzhurudolu.cz/prirucka/picturefill). Ten má jistá omezení, ale ve většině případů vám pomůže s výběrem správné varianty obrázku už nyní, takže se zkoušením není potřeba váhat.


## Další zdroje ke studiu

* Další části textů o [responzivních obrázcích](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky): [srcset a sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes), [`<picture>`](http://www.vzhurudolu.cz/prirucka/picture), [Picturefill](http://www.vzhurudolu.cz/prirucka/picturefill).
* [Dev.Opera: Scénáře použítí responzivních obrázků ](https://dev.opera.com/articles/responsive-images/)(anglicky).
* [Generátor variant obrázků](https://github.com/andismith/grunt-responsive-images) pro [Grunt](http://www.vzhurudolu.cz/prirucka/grunt). 
* [Compressive Images](http://www.filamentgroup.com/lab/compressive-images.html), alternativní technika pokud řešíte problém s device-pixel-ratio a datovým objemem na pomalých připojeních.


*Za cenné připomínky k materiálu o responzivních obrázcích autor děkuje [Robinovi Pokornému](http://robinpokorny.com/). Podívejte se na 3 Robinovy přednášky na toto téma: [úvod do problému responzivních obrázků](https://www.youtube.com/watch?v=PG2SZQjqKtw), [základní řešení](https://www.youtube.com/watch?v=3yzl4XG1524) a [pokročilé řešení](https://www.youtube.com/watch?v=vmj7tCBVJ6w).*