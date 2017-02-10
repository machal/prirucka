# Responzivní obrázky

V responzivním designu často potřebujeme volit mezi různými variantami jednoho obrázku. Nejčastěji proto, že chceme ušetřit datový objem stránky na mobilech nebo ošetřit vysokopacitní displeje typu Retina.

Naš starý známý `<img>` k tomu nestačí. Proto iniciativa Responsive Images Community Group přišla s novými atributy – `srcset` a `sizes` – a také s úplně novým tagem `<picture>`. [responsiveimages.org](http://responsiveimages.org/)


## Proč ne `<img src="">`?

Občas je pro responzivní obrázky možné vidět řešení s nahrazováním atributu `src`:

```html
<img src="large.jpg" 
  data-small="small.jpg" …>
```

Na malých displejích pak autoři těchto řešení usilují o zkopírování obsahu `data-small` do `src` pomocí javascriptu. Pak prohlížeč zobrazí správný obrázek. Na pohled elegantní, ale nevýhody to má.

Neexistuje totiž způsob jak prohlížeč odradit od stažení obrázku nalinkovaného v `<img src>`. Proto se v těchto řešeních obrázek sice vymění, ale předtím se už stáhly oba soubory, což není potěšující zpráva pro uživatele čekajícího na pomalém připojení.

## Proč vlastně více variant obrázků?

Holky a kluci v RICG si sedli a vymysleli 9 scénářů kdy je potřeba jeden obrázek reprezentovat různými variantami. My si tady ale budeme povídat jen o těch nejdůležitějších:

![Scénáře pro nasazení responzivních obrázků](dist/images/original/rwd-obrazky-priklad-layout.jpg)

1. Výběr varianty obrázku podle velikosti okna prohlížeče.
2. Výběr varianty podle velikosti obrázku v rámci layoutu stránky. V některých situacích totiž můžeme na větším displeji potřebovat menší obrázky. Srovnejte layout pro mobil a tablet na obrázku.
3. Výběr podle device-pixel-ratio neboli poměru mezi hardwarovým a [CSS rozlišením](http://www.vzhurudolu.cz/prirucka/css-pixel).
4. Výběr podle art direction, jinak řečeno výtvarné řežie. Typicky když obrázek na mobilu potřebujeme oříznout jinak než na desktopu.

## Nové atributy značky `<img>`: `srcset` a `sizes`

Hodí se pro scénář s výběrem varianty podle velikosti okna:


```html
<img src="small.jpg"
  srcset="medium.jpg 600w, large.jpg 1200w"
  alt="…">
```
Častější je ale použití pro scénář s výběrem varianty podle velikosti obrázku v layoutu:

```html
<img src="small.jpg"
  srcset="medium.jpg 600w, large.jpg 1200w"
  sizes="(min-width: 600px) 600px, 100vw"
  alt="…">
```

Více [o srcset a sizes zjistíte hned v dalším textu](srcset-sizes.md). 

## Nová značka `<picture>`

```html
<picture>
    <source media="(min-width: 600px)" srcset="medium.jpg">
    <source media="(min-width: 1024px)" srcset="large.jpg">
    <img src="small.jpg" alt="…">
</picture>
```

Nový tag `<picture>` vymysleli pro méně časté scénáře jako v případě potřeby mít na konkrétních velikostech layoutu jinak oříznuté obrázky. Více si přečtete [v dalším textu](picture.md).

## Podpora v prohlížečích

`srcset`, `sizes` i `<picture>` podporují všechny moderní prohlížeče. Responzivní obrázky nám chybí hlavně ve všech verzích Exploreru a Android Browseru do čtyřkových verzí Androidu. [caniuse.com/srcset](http://caniuse.com/#search=srcset) 

Obzvlášť IE ve verzi 11 je ke dni psaní textu ještě velmi silně zastoupený. Je však dobré si uvědomit, jaké je v tomto případě chování „nepodporující prohlížečů“.

### První řešení: přirozené náhradní řešení

Prostě použijete parametr `src`, který v případě dostupného `srcset` moderní prohlížeče ignorují:

```html
<img 
  src="starsi_prohlizece.jpg"
  srcset="nove_prohlizece.jpg …">
```

### Druhé řešení: Picturefill

Polyfill, který zařídí fungování všech variant responzivních i ve starších prohlížečích. Jmenuje se Picturefill a považuji jej za dobré řešení, které mám odzkoušené na mnoha webech. [scottjehl.github.io/picturefill](https://scottjehl.github.io/picturefill/)

