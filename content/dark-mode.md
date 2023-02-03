# Dark mode, tmavý režim webů

Dark mode je mezi uživateli, ale i ve webařské komunitě velmi populární. Hodí se na weby, kde uživatelé čtou nebo prostě tráví více času.

V textu ukazuji svou cestu k tmavému režimu na Vzhůru dolů a sdílím některé nečekané zkušenosti.

<figure>
<img src="../dist/images/original/dark-mode-vd.jpg" width="1600" height="900" alt="Dark mode na Vzhůru dolů.">
<figcaption markdown="1">
*Dark mode na Vzhůru dolů. Pěkné to je, ale člověk se zapotí.*
</figcaption>
</figure>

Hlavní překvapení? Automatizovat to jde jen velmi málo.

> Podívejte se na video „Jak na dark mode?“.
>
> YouTube: [youtu.be/mv8NBsUka4k](https://www.youtube.com/watch?v=mv8NBsUka4k)

## Proč mít dark mode? {#proc}

Tmavý režim se v poslední době stal velmi populárním, protože jej většina uživatelů miluje. Jsou zde ale i [racionální](https://blog.superhuman.com/why-do-people-use-dark-mode/) [důvody](https://www.theraspecs.com/blog/dark-mode-for-headaches-eye-strain-light-sensitivity/):

1. Ušetří baterii na mobilech, hlavně u OLED/AMOLED displejů, protože snižuje jas.
2. Nevyzařuje tolik modré složky světla, která může ovlivnit spánek.
3. Pomáhá lidem se zvýšenou citlivostí např. světloplachostí a přecitlivělostí na světlo.

A navíc: je to cool.

## Jak na webu udělat tmavý režim? {#jak}

U webů je to dnes velmi jednoduché. Podpora v prohlížečích a v operačních systémech je prakticky stoprocentní.

### Dotaz prefers-color-scheme {#prefers-color-scheme}

Prohlížečů se můžeme na preferenci uživatele snadno zeptat v CSS použitím dotazu na vlastnost média `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  /* CSS pro dark mode */
}
```

V JavaScriptu se dotážeme pomocí vlastnosti [MediaQueryList.matches](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches):

```js
window.matchMedia("(prefers-color-scheme: dark)").matches
```

V JavaScriptu je samozřejmě možné rozchodit i ruční přepínání mezi světlým a tmavým režimem, které řada webů zavedla. Píše se o tom [na JeČas.cz](https://jecas.cz/dark-theme).

<!-- AdSnippet -->

U Vzhůru dolů se tmavý režim zapne automaticky, po přepnutí na úrovni systému.

### CSS proměnné {#css-promenne}

Pro nastavení barev se velmi hodí použít [CSS proměnné (nebo lépe autorské vlastnosti)](css-promenne.md).

Nejprve v CSS definujeme základní variantu barev:

```css
:root {
  --text-color: black;
  --background-color: white;
}
```

Následně tyto barvy upravíme pro tmavý režim:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: white;
    --background-color: black;
  }
}
```

Velmi se tudíž hodí mít alespoň základní barevné schéma uložené v autorských vlastnostech (custom properties).

O výhodách autorských vlastností pro tvorbu dark mode dobře psal [Adam Kudrna](https://frontend.garden/clanky/dark-mode-s-css-custom-properties/).

### Ladění v prohlížečích {#ladeni}

V prohlížečích můžete mezi režimy barev přepínat pomocí vývojářských nástrojů.

- V Chrome DevTools to je v sekci [Rendering](https://developer.chrome.com/docs/devtools/rendering/#open-rendering).
- Ve vývojářských nástrojích Firefoxu k tomu slouží tlačítko [Toggle Dark Mode](https://stackoverflow.com/a/60481298).
- V Inspectoru Safari k tomu slouží nenápadná ikonka „Force Dark Appearance“ v záložce Elements. (Za tip díky Alešovi Krejčímu.)

Pojďme se podívat, jak přemýšlet o samotné tvorbě barev.

## Tvorba barev pro dark mode {#tvorba-barev}

Když jsem na tmavém režimu začal pracovat, poněkud naivně jsem se domníval, že vezmu stávající barvy uložené v SCSS proměnných, proženu je nějakým automatickým převodníkem do tmavého režimu a mám hotovo.

<!-- AdSnippet -->

Ne, takhle jednoduché to nebylo.

### Méně barev je více kodérovy radosti {#mene-barev}

První problém byl v množství barev, které jsem na Vzhůru dolů používal. Do mého barevného schématu bylo potřeba opravdu hodně říznout.

Tohle je současné barevné schéma ukládané do autorských vlastností, které obsahuje zhruba polovinu původních barev:

```scss
:root {
  --vd-text-color-rgb: #{$vd-brown-color-rgb};
  --vd-text-color: rgb(var(--vd-text-color-rgb));
  --vd-text-color-lighter: rgba(var(--vd-text-color-rgb), 0.8);
  --vd-text-color-lightest: rgba(var(--vd-text-color-rgb), 0.5);
  --vd-background-color: #{$vd-bg-color};
  --vd-content-bg-color: #{$vd-white-color};
  --vd-border-color: rgba(var(--vd-text-color-rgb));
  --vd-border-color-light: rgba(var(--vd-text-color-rgb), 0.5);
  --vd-highlight-bg-color: #{$vd-bg-highlight};
  --vd-highlight-neutral-bg-color: #{$vd-bg-highlight-neutral};
  --vd-link-color: #{$vd-link-color};
  --vd-heading-color: #{$vd-heading-color};
  --vd-code-color: #{$vd-code-color};
  --vd-code-color-1: #{$vd-code-color-1};
  --vd-code-color-2: #{$vd-code-color-2};
  --vd-code-color-3: #{$vd-code-color-3};
  --vd-code-color-4: #{$vd-code-color-4};
  --vd-bg-hover: rgba(var(--vd-text-color-rgb), 0.1);
  --vd-box-bg-color: #{$vd-box-bg-color};
  --vd-interactive-bg-color: #{$vd-bg-interactive};
  --vd-badge-color: #{$vd-badge-color};
}

@media (prefers-color-scheme: dark) {
  :root {
    --vd-text-color-rgb: #{$vd-white-color-rgb};
    --vd-background-color: #{$vd-bg-color-dark};
    --vd-content-bg-color: #{color.scale($vd-brown-color, $lightness: -50%)};
    --vd-highlight-bg-color: #{$vd-bg-highlight-dark};
    --vd-highlight-neutral-bg-color: #{$vd-bg-highlight-dark};
    --vd-heading-color: #{$vd-heading-color-dark};
    --vd-code-color: #{$vd-code-color-dark};
    --vd-code-color-1: #{$vd-code-color-1-dark};
    --vd-code-color-2: #{$vd-code-color-2-dark};
    --vd-code-color-3: #{$vd-code-color-3-dark};
    --vd-code-color-4: #{$vd-code-color-4-dark};
    --vd-box-bg-color: #{$vd-box-bg-color-dark};
    --vd-interactive-bg-color: #{$vd-bg-interactive-dark};
    --vd-badge-color: #{$vd-badge-color-dark};
  }
}
```

Všimněte si, že některé barvy přebírám z SCSS proměnných, jiné se tvoří automaticky, například pomocí barevného schématu `rgba()`.

Aktuální počet používaných barev je oproti původnímu stavu výrazně menší. Web je teď barevně o něco jednodušší a snad i přehlednější a kontrastnější.

### Automatika nefunguje {#automatika-nefunguje}

Druhý problém jsem si uvědomil záhy. Barvy není možné jen automaticky převést na světelné složky.

Tvorba barev pro dark mode do určité míry odpovídá tvorbě zcela nového barevného schématu, které by pak mělo mít stejný „feeling“ jako původní schéma.

<!-- AdSnippet -->

O barvách toho zase tolik nevím, takže je možné, že se mi to zase tak nepovedlo. Ale věřím, že to není úplně špatné.

Pokud jste na tom podobně, velmi doporučuji nastudovat pár zdrojů o tvorbě barevného schématu:

- [Jak tvořit systematické barvy pro digitální produkty](https://blog.jirichlebus.cz/2019/11/18/jak-tvorit-systematicke-barvy-pro-digitalni-produkty/) (Jiří Chlebus)
- [Funkce barev v designu](https://www.you-ex.cz/funkce-barev-v-designu/) (Petr Staníček)
- [6 Simple Tips On Using Color In Your Design](https://uxplanet.org/5-simple-tips-on-using-color-in-your-design-40916d0dfa63) (Nick Babich)

## HSL barvy, planá naděje {#hsl}

Pro automatické počítání tmavého režimu se jako možnost nejčastěji uvádí HSL barvy. Ty jsou vyjádřeny v modelu, kde je barva definována třemi hodnotami:

- *Hue* (odstín) je úhel v kruhu barev. Hodnoty jsou v rozmezí 0–360°.
- *Saturation* (sytost) je procentuální hodnota, která určuje jak moc je barva sytá. Hodnoty jsou v rozmezí 0–100%.
- *Lightness* (světlost) je procentuální hodnota, která určuje jak světlá je barva. Hodnoty jsou v rozmezí 0–100%.

Může se zdát, že stačí převést barvy světlého schématu do HSL…

```css
:root {
  --text-color: hsl(180, 3%, 7%); /* = #111212 */
}
```

…a pak je automaticky překlopit do tmavého režimu tak, že invertujeme světlost:

```css
:root {
  /* 100% - 7% = 93%         ↓  */
  --text-color: hsl(180, 3%, 93%); 
}
```

Vypadá to pak tak jako na obrázku:

<figure>
<img src="../dist/images/original/dark-mode-hsl.jpg" width="1600" height="900" alt="Barvy HSL a dark mode">
<figcaption markdown="1">
*HSL by mohlo bylo super. Ale není to super.*
</figcaption>
</figure>

Pro některá jednodušší barevná schémata to může fungovat. Já to častečně použil například pro barev u ukázek kódu

Jinde to je nepoužitelné, protože barvy vypadají špatně. Najednou máte pocitově jiné schéma než původní.

Problém je totiž v tom, že HSL barvy nejsou optimalizované pro světlost vnímanou lidským okem a některé z nich prostě oku svítí více než jiné.

Více o tom píše Jiří Chlebus odkazovaný výše nebo [Lea Verou](https://lea.verou.me/2021/03/inverted-lightness-variables/).

V CodePenu můžete vidět, jak by to vypadalo u základních barev používaných na Vzhůru dolů:

CodePen: [cdpn.io/e/dyKvELv](https://codepen.io/machal/pen/dyKvELv?editors=1100)

Ano, vidíte dobře. Vypadalo by to blbě.

## RGBa barvy {#rgba}

Automatiky je možné občas dosáhnout i pomocí RGBa barvy. RGBa barva je vyjádřená v modelu RGB, ale s průhledností.

Pokud s průhledností pracujete, můžete si do proměnné uložit právě jen RGB složku barvy:

```css
:root {
  --text-color: 0, 0, 0; 
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: 255, 255, 255; 
  }
}
```

V kódu pak uvádíte jen proměnnou a průhlednost, barva se vám mění podle použitého barevného schématu:

```css
.text {
  color: rgba(var(--text-color), 0.5);
}
```

Více najde v textu [Theming with CSS variables in RGBA](https://codepen.io/finnhvman/post/theming-with-css-variables-in-rgba) od 
Bence Szabo.

Vyzkoušet si to můžete v mé ukázce, pokud si v prohlížeči nastavíte dark mode:

CodePen: [cdpn.io/e/XWYzRqz](https://codepen.io/machal/pen/XWYzRqz?editors=1100)

V CodePenu je také vidět, že jsem se pokoušel prohlížeči barvu vnutit jako HEXa hodnotu, se kterými se mi pracuje lépe. A taky je vidět, jak jsem neuspěl.

Učinil jsem také pár experimentů se osmimístným hexa zápisem, který by poloprůhlednost měl podporovat také:

```css
.text {
  color: #2e2c0933;
}
```

Podpora v prohlížečích už nějakou dobu je. [caniuse.com/css-rrggbbaa](https://caniuse.com/css-rrggbbaa)

Ale výsledek byl opět totožný se sedláky u Chlumce.

CodePen: [cdpn.io/e/mdKqmQN](https://codepen.io/machal/pen/mdKqmQN?editors=1100)

Na osmimístné HEXa si prostě (zatím) s autorskými vlastnostmi nepřijdete a pro dark mode zatím nejsou použitelné, viz [Stack Overflow](https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable).

## LAB barvy, budoucí naděje {#lab}

Pojďme se ale od HSL přesunout k zajímavějšímu barevnému modelu – LAB. Jak můžete vidět na následujícím obrázku, zatímco u HSL je světlost vnímaná jinak, u LAB působí na naše oči podobně.

<figure>
<img src="../dist/images/original/dark-mode-lab.jpg" width="1600" height="900" alt="Barvy LAB a dark mode">
<figcaption markdown="1">
*Barvy LAB a dark mode.*
</figcaption>
</figure>

LAB je barevný model více stavěný pro lidské oko. V CSS je k dispozici jako LCH barvy.

Podpora zatím není plná, ale dobrá zpráva je, že Safari už tyto barvy podporuje a Chrome se přidá ve verzi 111, takže za pár týdnů. [caniuse.com/css-lch-lab](https://caniuse.com/css-lch-lab)

Ke konverzi barev z HSL do LCH můžete použít [tento nástroj](https://css.land/lch/).

## Automatický převod není vše, bez citu to nepůjde {#automatika-neni-vse}

Pokud to dosud nebylo jasné, ještě to jednou akcentuji: ačkoliv kodérská čast mojí osoby by nejradši vytvářela barvy pro dark mode automaticky, realita je jinde.

Musí se zde zapojit i designer nebo designerská část osobnosti. Vytvoření barev pro dark mode vyžaduje cit a znalost barev. Automatika jako HSL, LCH nebo třeba RGBa je použitelná jen v některých případech.

## Obrázky a logotypy {#obrazky-a-logotypy}

Další, opět trošku nečekaný zásek, na mě číhal v případě obrázků a logotypů. Všechna tato média dosud koncipuji pro velmi světlé pozadí, ideálně bílé, a přepnutím do tmavé verze najednou začaly vypadat dost špatně.

Na obrázku vidíte několik možných variant jak zobrazovat logotyp na tmavém pozadí:

<figure>
<img src="../dist/images/original/dark-model-logotypes.jpg" width="1600" height="900" alt="Logotypy v dark mode">
<figcaption markdown="1">
*Logotypy v dark mode.*
</figcaption>
</figure>

Jednotlivé varianty z obrázku si vysvětleme:

1. Základní verze logotypu pro světlé pozadí.
2. Varianta logotypu pro tmavé pozadí, dle [logomanuálu](https://docplayer.cz/15897241-Manual-znacky-ceske-televize-verze-1-2.html).
3. Základní verze na tmavém pozadí s okraji.
4. Jednobarevné negativní provedení logotypu.

Pokud těch logotypů na webu máte hodně a zrovna tvoříte tmavý režim webu, můžete inklinovat k jednoduché variantě 3 – prostě ke stávajícím logům přidat světlé okraje. Nevypadá to ale dobře. Logotypy pak uživateli svítí do očí.

Ideální je držet se varianty podle logomanuálu, takže varianty 2. Může se vám ale stát, že značka logomanuál nemá nebo je plnobarevná negativní verze pro vás nevhodná.

Je možné převod logotypů do tmavého pozadí automatizovat? Ano, do určité míry to jde.

### Jednobarevné negativní logogypy {#jednobarevne-negativni-logogypy}

Vezměte stávající logotyp a s pomocí CSS je upravte pro tmavé pozadí. Možnosti jsou zhruba tyto:

1. Převod do odstínů šedi: `filter:grayscale(1)`. Nemusí to ale odpovídat povoleným variantám logotypu.
2. Odstranit bílé pozadí pomocí `mix-blend-mode:multiply`. Viz [CodePen Ondřeje Konečného](https://codepen.io/ondrejko/pen/abKQJRp).
3. Převést na inverzní barvy: `filter:invert(1)` viz [David Walsh](https://davidwalsh.name/dark-mode-invert-filter). Jen pozor, u většiny logotypů toto změní barvy, což není ideální.
4. Maximalizovat jas: `filter:brightness(100%)`. Všechny barvy v logotypu se stanou bílými. Víceméně to pak odpovídá variantě 4 podle obrázku. Toto je varianta, kterou jsem pro některé logotypy skutečně použil.

### Responzivní SVG je ideál {#responzivni-svg}

Pokud máte logotypy [v SVG](svg.md), což doufám máte, úplně ideální varianta je samozřejmě podpora tmavého režimu přímo v SVG souboru.

Jak jistě víte, SVG může být [responzivní](https://owenconti.com/posts/supporting-dark-mode-with-svg-favicons#how-to-support-dark-mode-in-your-svg-favicon), takže podporuje i dotaz `prefers-color-scheme`:

```html
<svg width="180" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    path {
      fill: #000000;
    }
    @media (prefers-color-scheme: dark) {
      path { fill: #ffffff; }
    }
  </style>
  <path d="…"/>
</svg>
```

Tak a je to hotové. Tmavý režim je na webu:

<div class="rwd-media">
  <video muted controls width="1920" height="1080">
    <source src="https://res.cloudinary.com/vzhurudolu-cz/video/upload/v1674017245/vzhurudolu-video/dark-mode-vd-opt_glqsbc.mp4"
      type="video/mp4">
  </video>
</div>

Připravte se na to, že dark mode obnáší více práce než jste očekávali. Ale myslím, že to stojí za to.
