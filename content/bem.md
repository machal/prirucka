# BEM

Block, Element, Modifier. Metodika pro pojmenovávání tříd v CSS.

Jde vlastně o pojmenovávací konvenci pro psaní [objektových CSS](oocss.md). BEM vymysleli v ruském Yandexu.

Hlavní myšlenka je v rozdělení tříd do těchto tří kategorií:

<table>
<tr>
  <th>Blok</th>
  <td><code>.block</code></td>
</tr>
<tr>
  <th>Element</th>
  <td><code>.block__element</code></td>
</tr>
<tr>
  <th>Modifikátor</th>
  <td><code>.block--modifier</code></td>
</tr>
</table>

Typ třídy poznáte podle způsobu pojmenování. Dvě podtržítka znamenají element, tedy potomka bloku. Modifikátor bloku je pak označený dvěmi „pomlčkami“.

## Příklad s navigací

Vezměme tohle HTML:

```html
<ul class="nav nav--hidden" role="navigation">
  <li class="nav__item">
    <a href="/">Úvod</a>
  </li>
  <!-- … -->
</ul>
```

Pak:

- `.nav` je blok (název komponenty)
- `.nav--hidden` je modifikátor (varianta komponenty)
- `.nav__item` je element (potomek komponenty)

Psaní BEM syntaxe si můžete hezky usnadnit v CSS preprocesorech pomocí zanořování:

```less
.nav {
  .&__item { }
  .&--hidden { }
}
```

Složitější komponentu podrobněji popisuje Harry Roberts: [csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

## Proč BEM?

- Protože v CSS i HTML snadno poznáte s jakým typem třídy máte tu čest. Poznají to i programátoři, kteří přijdou do styku jen s HTML.
- Protože je snadné se jej naučit a díky tomu se z BEMu stává standard.
- Protože je na rozdíl od jiných způsobů organizace CSS velmi přímočarý. Srovnejte třeba se SMACSS.

