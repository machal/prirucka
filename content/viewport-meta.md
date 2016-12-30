# Vše o meta značce pro viewport

Zjednodušeně ale lidsky řečeno slouží k informování prohlížeče, zda a jak jste web připravili pro mobilní zařízení.

![Meta Viewport](dist/images/original/meta-viewport-mobile.svg)

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

Tohle vám u drtivé většiny responzivních webů bude stačit. Pokud ale máte 5 minut času, pojďte se o nejpopulárnější metaznačce dozvědět něco víc.

## Různé typy viewportů

Na mobilních zařízeních potřebujeme znát alespoň tyto dva typy viewportů:

- *Layoutový* – plocha, do které se vykresluje layout stránky. To je to, co mají prohlížeče na iOS a Androidu nastaveno na 980 pixelů. 
- *Ideální* – ideální rozlišení. Dostanete jej, když vydělíte hardwarové rozlišení hodnotou `device-pixel-ratio` (viz [CSS pixel](css-pixel.md)). iPhone 4 měl ideální viewport 320 &times; 480 pixelů. 

Existují ještě minimálně další dva typy viewportů, ale to tom až jindy.

## Parametry meta značky pro viewport

Do atributu `content` je možné dávat různé vlastnosti a jejich hodnoty.

### `width`

Nastaví šířku [layoutového viewportu](viewport-mobily.md) v pixelech. Nejčastěji využívaná hodnota `device-width` sjednotí šířku layoutového viewportu se šířkou ideálního viewportu.
Pokud použijete hodnotu, např. `width=400`, nastavíte šířku layoutového viewportu na 400 pixelů. To snad nebude chtít ani muset dělat.

### `initial-scale`

Nastaví výchozí zoom, ale také šířku layoutového viewportu. Ve výsledku dělá zápis `initial-scale=1` totéž jako `width=device-width`.

### `user-scalable`

Hodnota `no` zakazuje uživateli jakkoliv zoomovat. Prosím, nepoužívejte ji. Zoomování je na mobilních zařízení fakt potřeba. Ať už jde o zvětšení hůř navržené stránky, zvětšení textu v horších podmínkách nebo prostě jen touhu vidět detaily z nějakého obrázku — přibližování obsahu prostě potřebují všichni uživatelé.

### `minimum-scale`/`maximum-scale`

Minimální a maximální možný zoom. Netuším, k čemu by mohlo být dobré. `maximum-scale=1` ruší možnost přiblížení stejně jako `user-scalable=no`. Prosím, nepoužívejte to.

## Proč `width=device-width` a zároveň `initial-scale=1`?

Jak už jsem psal, `width=device-width` je instrukce pro sjednocení layoutového s ideálním viewportem.

Lidsky řečeno: mobilní prohlížeč vaši stránku nevykreslí do přednastaveného viewportu – nejčastěji 980 pixelů. Použije namísto toho „normální“ mobilní rozlišení – třeba 360 pixelů.

`width=device-width` má ovšem jednu známou nevýhodu – Safari na iOS pak jako ideální viewport v režimu zobrazení na šířku použije ideální viewport pro výšku. Ano, přesně tohle je příčinou toho problému se „zvětšováním“ stránky v landscape režimu na iOS.

Je zde jedna záchrana – použít namísto toho zápis `initial-scale=1`. Světe div se, na všech mobilních zařízeních má ten samý efekt jako `width=device-width`. Světe div se podruhé, Safari na iOS už v landscape režimu renderuje do ideálního landscape viewportu. A světe – teď se nemůžeš divit – má to svoje nevýhody! Internet Explorer se na mobilních Windows 8 totiž začne chovat úplně stejně špatně jako mobilní Safari.

Nevadí. Problémy vyřešíme tím, že použijeme obě hodnoty — `width=device-width, initial-scale=1`.

## Zavináčové pravidlo `@viewport` v CSS

Instrukce pro způsob zobrazování by se měla dávat do CSS, že ano? Se logičtěji umístěným zápisem `@viewport { }` přišla Opera, která ovšem následně zběhla k renderovacímu jádru Blink, takže jej už zase nejspíš neumí. V praxi je ten zápis nyní potřeba hlavně pro Internet Explorer na Windows Phone 8. [vrdl.cz/prirucka/viewport-windows](http://www.vzhurudolu.cz/prirucka/viewport-windows)

## A ještě pár rychlých tipů

<!-- TODO http://kihlstrom.com/2015/shrink-to-fit-no-fixes-zoom-problem-in-ios-9/ -->

1. Meta viewport jde nastavit Javascriptem. To se hodí, když nemáte přístup do `<head>`. Teoreticky jde javascriptem i měnit, ale nedělejte to. Je to náročné na vykreslování. Vyrobte raději normální responzivní web s jedním meta tagem pro viewport.
2. Když budete mít viewport nastavený správně – s hodnotou `width` – přicházející prohlížeče postavené na Webkitu a Chrome samy odstraní 300ms čekání mezi tapnutím a akcí. [vrdl.in/l72eg](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
