# Weby v iPhone X: jak nastavit viewport?

Schválně jsem nenapsal „jak *optimalizovat* weby v iPhone X“. To, co zde ukazuji je totiž běžný a ve standardech W3C zanesený způsob optimalizace webů pro zařízení, které mají jiný než hranatý tvar obrazovky. 

Stačí si představit chytré hodinky s prohlížečem a hned víte, že za to nějaký Apple s iPhone X nemůže.

Zařízení totiž neví, jakému zobrazení byste jako autoři stránky dali přednost.


## Weby s jednolitou barvou pozadí

U bílé barvy pozadí asi vše na iPhone X vše funguje. 

Pokud používáte jinou barvu, zkontrolujte si, zda ji máte nastavenou na pozadí stránky:

```css
body {
  background-color: <vaše-barva-pozadí>;
}
```


## Weby s různobarevnými prvky roztaženými přes celou stránk

I tady to může být jednoduché. Klíč je [v meta značce pro viewport](meta-viewport.md). 

```html
<meta name="viewport" 
  content="initial-scale=1, viewport-fit=cover">
```

Hodnotou `cover` vlastnosti [viewport-fit](meta-viewport.md#viewport-fit) říkáte, že se stránka má roztáhnout na celou šířku dostupné plochy v okně prohlížeče. A že vám nevadí, že něktré její části budou překryté kulatými rohy nebo výčnělkem.

Pokud váš podbarvený obsah drží nějakou postranní ochrannou zónu, asi už nic dalšího nepotřebujete udělat.


## Weby s různobarevnými prvky bez ochranné zóny

Postranní ochrannou zónu si vyrobte vlastními paddingy nebo převezměte vestavěné hodnoty. Na iPhone X jsou všechny čtyři směry doporučené ochranné zóny uložené v proměnných `safe-area-*` funkce `env()`:

```css
.post {
  padding: 12px;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

Na iPhone X se tady převezmou vestavěné hodnoty, v ostatních prohlížečích to bude `12x`.

Více o tom je [v článku na blogu vývojářů Safari](https://webkit.org/blog/7929/designing-websites-for-iphone-x/).


## Jak testovat?

[Browserstack](https://www.browserstack.com/s) sice iPhone X testovat umí, ale jen v době psaní článku jen v režimu na výšku.

<div class="related" markdown="1">
- [Více o efektivním ladění responzivních webů](jak-testovat-responzivni-weby.md)
</div>

Jste tedy odkázáni na simulátor vestavěný v Xcode, pokud máte Maca. Nebo na kamarády a kamarádky s iPhone X.


