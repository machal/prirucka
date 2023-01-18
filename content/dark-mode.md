# Dark mode, tmavý režim webů

<figure>
<img src="../dist/images/original/dark-mode-vd.jpg" width="1600" height="900" alt="Dark mode na Vzhůru dolů.">
<figcaption markdown="1">
*Dark mode na Vzhůru dolů.*
</figcaption>
</figure>

## Proč mít dark mode? {#proc}

Tmavý režim se v poslední době stal velmi populárním, protože jej uživatele milují. Jsou zde ale i [racionální](https://blog.superhuman.com/why-do-people-use-dark-mode/) [důvody](https://www.theraspecs.com/blog/dark-mode-for-headaches-eye-strain-light-sensitivity/):

1. Ušetří baterii na mobilního telefonu, hlavně u OLED/AMOLED displejů.
2. Nevyzařuje tolik modré složky světla, která může ovlivnit spánek.
3. Šetří baterii displeje, protože se výrazně snižuje jeho jas.
4. Pomáhá lidem se zvýšenou citlivostí (např. světloplachostí a přecitlivělostí na světlo).

A navíc: je to cool.

## Jak to udělat? {#jak}

U webů je to dnes velmi jednoduché, podpora v prohlížečích a v operačních systémech je prakticky stoprocentní.

### prefers-color-scheme {#prefers-color-scheme}

Prohlížečů se můžeme na preferenci uživatele snadno zeptat v CSS použitím dotazu na vlastnost média `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  /* CSS pro dark mode */
}
```

### CSS proměnné {#css-promenne}

K tomu můžeme pro nastavení barev použít [CSS proměnné (nebo lépe autorské vlastnosti)](css-promenne.md):

```css
:root {
  --text-color: black;
  --background-color: white;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: white;
    --background-color: black;
  }
}
```

### Ladění v prohlížečích {#ladeni}

V prohlížečích můžete přepínat mezi režimy pomocí vývojářských nástrojů.

- V Chrome DevTools to je v sekci [Rendering](https://developer.chrome.com/docs/devtools/rendering/#open-rendering).
- Ve vývojářských nástrojích Firefoxu k tomu slouží tlačítko [Toggle Dark Mode](https://stackoverflow.com/a/60481298).
- V Inspectoru Safari to dle mého nastavit nejde, ale zase je velmi snadné přepnout do tmavého režimu v macOS.


<!-- TODO -->

<figure>
<img src="../dist/images/original/dark-mode-hsl.jpg" width="1600" height="900" alt="Barvy HSL a dark mode">
<figcaption markdown="1">
*Barvy HSL a dark mode.*
</figcaption>
</figure>

<figure>
<img src="../dist/images/original/dark-mode-lab.jpg" width="1600" height="900" alt="Barvy LAB a dark mode">
<figcaption markdown="1">
*Barvy LAB a dark mode.*
</figcaption>
</figure>

<figure>
<img src="../dist/images/original/dark-model-logotypes.jpg" width="1600" height="900" alt="Logotypy v dark mode">
<figcaption markdown="1">
*Logotypy v dark mode.*
</figcaption>
</figure>

<div class="rwd-media">
  <video muted controls width="1920" height="1080">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1674017245/vzhurudolu-video/dark-mode-vd-opt_glqsbc.mp4"
      type="video/mp4">
  </video>
</div>
