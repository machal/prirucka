# Vlastnost place-self: Zarovnání položky na obou osách

Vlastnost `place-self` určí zarovnání položky na hlavní i příčné ose pro layouty v CSS.

![Vlastnost place-self](../dist/images/original/vdlayout/css-place-self-schema.png)

Jde o zkratku pro vlastnosti [`align-self`](css-align-self.md) a [`justify-self`](css-justify-self.md).

<!-- AdSnippet -->

Zapisuje se takto:

```css
place-self: <hodnota align-self> <hodnota justify-self>;
```

Pokud není druhá hodnota přítomná, použije se první pro oba směry, ale jen za předpokladu, že je pro obě vlastnosti platná. Pokud tomu tak není, máme smůlu a bude neplatná celá deklarace.

<div class="related web-only" markdown="1">
- [CSS Box Alignment](css-box-alignment.md)
</div>

## Jednoduchý příklad

V naší ukázce definujeme třísloupcový kontejner Gridu. Všechny tři položky mají omezenou výšku i šířku, aby byl hezky vidět efekt zarovnání, který zařídí vlastnost `place-self` na třetí položce:

```css
.item--3 {
  place-self: end center;
}
```

Jak jste asi poznali, položky zarovnáváme svisle dolů (`end`) a vodorovně n buňky (`center`).

CodePen: [cdpn.io/e/MWymbYw?editors=1100](https://codepen.io/machal/pen/MWymbYw?editors=1100)

## Možné hodnoty

Podívejte se na referenční příručku k oběma vlastnostem, pro které je `place-items` zkratkou:

- [`justify-items`](css-justify-items.md)
- [`align-items`](css-align-items.md)

## Podpora v prohlížečích

Vlastnost `place-self` bohužel v době psaní tohoto textu nepodporuje Internet Explorer, ale ani Safari.

Aktuální informace hledejte na [caniuse.com/place-self](https://caniuse.com/#search=place-self).

<!-- AdSnippet -->
