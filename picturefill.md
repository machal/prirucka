# Picturefill

[Polyfill](http://www.vzhurudolu.cz/prirucka/polyfill), který dokáže zařídit podporu nově standardizovaných [responzivních obrázků](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky) ([atributů srcset a sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes) a [elementu <picture>](http://www.vzhurudolu.cz/prirucka/picture)) ve všech prohlížečích. Picturefill má dvě použitelné verze, obě mají svá pro i proti. Standardně doporučuji používat verzi 2.x.

## Picturefill 2

Novější verze [2.x](http://scottjehl.github.io/picturefill/) obsluhuje daleko více scénářů použití responzivních obrázků – je to plnohodnotný polyfill dočasně emulující funkčnost [srcset/sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes) i tagu [<picture>](http://www.vzhurudolu.cz/prirucka/picture) ve všech prohlížečích.

Nic ale není zadarmo. První nevýhoda Picturefillu 2 spočívá v nutnosti vynechat `src` atribut, aby prohlížeče bez podpory `<picture>` nestáhly dva obrázky. To také znamená, že prohlížeče bez Javascriptu uvidí místo obrázku jen alternativní text. Vzniknou také problémy s ne-indexováním obrázku v Google Images nebo ne-možností vložit obrázek při sdílení stránky na Facebooku. Pokud je nicméně autorovi známo, pak kromě toho, že tak vznikne dočasně nevalidní kód, nemá vynechání `src` žádné jiné negativní dopady ani na čtení stránky slepeckými čtečkami. Zda chcete používat variantu se `src` nebo bez něj si rozmyslete podle požadavků projektu. 

Druhá verze Picturefillu využívá standardizované syntaxe a tak se zápis blíží tomu co za pár let budou prohlížeče umět nativně.

Příklad zápisu pro [srcset a sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes):

```
<img 
  sizes="(min-width: 40em) 80vw, 100vw"
  srcset="small.jpg 375w, medium.jpg 480w, large.jpg 768w" 
  alt="Obrázek" width="500" height="250">
```  

Příklad zápisu pro [<picture>](http://www.vzhurudolu.cz/prirucka/picture):

```
<picture>
  <!--[if IE 9]><video style="display: none;"><![endif]-->
  <source srcset="extralarge.jpg" media="(min-width: 1000px)">
  <source srcset="large.jpg" media="(min-width: 800px)">
  <!--[if IE 9]></video><![endif]-->
  <img srcset="medium.jpg" alt="Obrázek">
</picture>
```

Kroutíte hlavou nad použitím `<video>` tagu? Ano, to je [další obezlička](http://scottjehl.github.io/picturefill/#support), tentokrát pro Internet Explorer 9. 

Jasně, Picturefill 2, má těch obezliček a drobných nevýhod docela dost, ale dobře se zamyslete co vám jeho použití přinese. Pokud chcete mít responzivní obrázky a zároveň jsou pro vás nevýhody druhé verze nepřekonatelné, zkuste ještě původní verzi Picturefillu.

## Picturefill 1

Verze [1.x](https://github.com/scottjehl/picturefill/blob/1.2.1/README.md) se vyznačuje ošklivou syntaxí postavenou na spanech a umí vyřešit jen dva scénáře použití responzivních obrázků – podle rozlišení obrazovky a `device-pixel-ratio`. 

<span data-picture data-alt="Obrázek">
  <span data-src="small.jpg"></span>
  <span data-src="medium.jpg" 
    data-media="(min-width: 400px)"></span>
  <span data-src="large.jpg"
    data-media="(min-width: 800px)"></span>
  <!-- Fallback pro ne-JS prohlížeče -->
  <noscript>
    <img src="small.jpg" alt="Obrázek">
  </noscript>
</span>

Výhodou ale je bezchybná funkčnost ve všech možných prohlížečích, včetně toho že nějaký ten obrázek uvidí i uživatel sedící u prohlížeče bez Javascriptu. Picturefill 1 má navíc jen asi 2 kB.

Pojďme to shrnout. Pokud [v responzivních obrázcích](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky) vidíte přínos pro váš projekt a potřebujete podporu ve všech prohlížečích, volte Picturefill. Volte 2.x verzi. 1.x jako poslední záchranu, pokud vám nevýhody dvojky trhají kóderské srdce.

## Čtěte dále

* Další části textů o [responzivních obrázcích](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky): [srcset a sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes), [<picture>](http://www.vzhurudolu.cz/prirucka/picture)
* Moje přednáška [Responzivní obrázky v praxi](https://www.youtube.com/watch?v=zsE6caTsi1M) a [slajdy k ní](http://www.slideshare.net/machal/frontendisti-rwd-obrazkypublic)
* [Web Picturefillu](http://scottjehl.github.io/picturefill/)
