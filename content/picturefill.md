# Picturefill

[Polyfill](polyfill.md), který dokáže zařídit podporu nově standardizovaných [responzivních obrázků](responzivni-obrazky.md) – nových atributů `srcset` a `sizes` a nové značky `<picture>` – ve všech prohlížečích. 

[Picturefill](https://scottjehl.github.io/picturefill/) využívá standardizované syntaxe. Tady je třeba příklad zápisu pro [srcset a sizes](srcset-sizes.md):

```html
<img
  sizes="(min-width: 40em) 80vw, 100vw"
  srcset="small.jpg 375w, medium.jpg 480w, large.jpg 768w"
  alt="Obrázek" width="500" height="250">
```

Příklad zápisu pro [`značku <picture>`](http://www.vzhurudolu.cz/prirucka/picture):

```html
<picture>
  <!--[if IE 9]><video style="display: none;"><![endif]-->
  <source srcset="extralarge.jpg" media="(min-width: 1000px)">
  <source srcset="large.jpg" media="(min-width: 800px)">
  <!--[if IE 9]></video><![endif]-->
  <img srcset="medium.jpg" alt="Obrázek">
</picture>
```

Kroutíte hlavou nad použitím `<video>` tagu? Ano, to je [obezlička](http://scottjehl.github.io/picturefill/#support) pro Internet Explorer 9. Ten má ale fakt minimální tržní podíl, takže u spousty projektů už nebude nutné `<video>` vkládat.

## Musíte vynechat `src`

Nic není zadarmo, znáte to. Drobná nevýhoda Picturefillu spočívá v doporučení vynechat `src` atribut, aby prohlížeče bez podpory `<picture>` nestáhly dva obrázky. 

Má to dva negativní důsledky. Prohlížeče bez Javascriptu uvidí místo obrázku jen alternativní text. A taky nebude možné vložit obrázek při sdílení stránky na Facebooku. 

Vynechání `src` ale nemá žádné zásadní negativní dopady na čtení stránky slepeckými čtečkami, ani na [ukládání obrázků do Google Images](http://www.stefan-weiss.net/responsive-image-seo.htm).

Jasně, Picturefill má pár drobných nevýhod, ale dobře se zamyslete co vám jeho použití přinese. Vyřešení problému s datový objemem obrázků na mobilech, `device-pixel-ratio` a dalšími obtížemi moderního frontendu za to obvykle stojí.

## Čtěte dále

* Další části textů o [responzivních obrázcích](http://www.vzhurudolu.cz/prirucka/responzivni-obrazky): [srcset a sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes), [`<picture>`](http://www.vzhurudolu.cz/prirucka/picture).
* Moje přednáška [„Responzivní obrázky v praxi“](https://www.youtube.com/watch?v=zsE6caTsi1M) a [slajdy k ní](http://www.slideshare.net/machal/frontendisti-rwd-obrazkypublic).
