# Komponenty v AMP

V dokumentaci na amp.dev je ve dnech psaní tohoto textu k dispozici stovka komponent.

To už je docela dost na to, aby člověk „jen tak prolétl dokumentaci a přitom se to naučil“.

Abychom však mohli využít celou šíři vlastností, které AMP nabízí, a využili ji správně, potřebujeme do hlavy dostat alespoň ty nejdůležitější.

Občas nám do textu utekl nějaký ten názor, proto jej berte jako komentovanou prohlídku zaměřenou na subjektivní výběr komponent. Nejprve vás ale musí průvodce poučit, že ne všechny komponenty jsou si v AMP rovny.

## Tři typy komponent podle úrovně vestavěnosti

Protože se nám slovo „vestavěnost“ zalíbilo, musíme vám sdělit, že _nejvestavěnější_ jsou ty vestavěné. Nevestavěné jsou pak rozšiřující. A ty úplně nejméně vestavěné komponenty jsou experimentální.

### Vestavěné (built-in)

Komponenty, které jsou přímo v základní javascriptové knihovně. V tuto chvíli má tato kategorie pouhé tři členy:

* `amp-layout` – vykreslovací layout, který jsme zmiňovali už v podkapitole [o layoutu](https://docs.google.com/document/d/1_YjH3UxCrJAd9KTH0laO5YXMaFTv3hD7zkVP3fwMJhw/edit).
* `amp-img` – vložení obrázku, o kterém si něco povíme v podkapitole [o mediálních komponentách](https://docs.google.com/document/d/1Csl_K3hAJqeiF_kauKRmvf9te6bYGSGSlpRCwps-J3A/edit).
* `amp-pixel` – měření návštěvnosti, kterému se budeme věnovat v podkapitole [o analytice](https://docs.google.com/document/d/1wU9f1eK9gfV09AVCkB_zNOAzmMn9IgDB9RWCi_vlGBo/edit).

### Rozšiřující (extended)

Ty, které je potřeba do stránky nainstalovat v samostatné knihovně. Sem patří drtivá většina z existujících komponent, takřka celá stovka. Jako příklad vezměme `amp-analytics`, které se instalují vložením následujícího skriptu do hlavičky HTML dokumentu:

```html
<script async custom-element="amp-analytics"
  src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js">
</script>
```

### Experimentální

AMP je velice živý projekt, neustále tedy přibývají nové komponenty. Jsou však nehotové, a tak se k jejich používání musíte přihlásit. Jde o obdobu vlaječek (flags) pro zapínání nových vlastností v prohlížečích.

Více informací o zkoušení experimentálních vlastností najdete zde: [vrdl.in/ampexp](https://amp.dev/documentation/guides-and-tutorials/learn/experimental).

A tady je seznam experimentálních komponent, ke kterým se můžete přihlásit jako uživatelé: [cdn.ampproject.org/experiments.html](https://cdn.ampproject.org/experiments.html).

Na rozdíl od těch experimentálních je rozšiřujících komponent opravdu hodně, takže jsou rozdělené do kategorií. Pojďme si je projít a ukázat na nich možnosti použití.
