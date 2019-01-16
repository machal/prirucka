# CSS Grid v Internet Exploreru: Automatické umísťování

Pokud Vzhůru dolů čtete pravidelně, už víte, že CSS Grid je možné v řadě případů [použít i v Internet Exploreru](https://www.vzhurudolu.cz/prirucka/css-grid-msie).

Vděčíme za to nedávným změnám v Autoprefixeru, který se naučil generovat kód tak, abychom mohli používat i vlastnosti jako `grid-gap` (mezera mezi buňkami) nebo  `grid-template-areas` (pojmenované oblasti).

O čem jsem ale zatím nepsal, jsou nové možnosti automatického umísťování prvků v mřížce. Autoplacement je další důležitá vlastnost Gridu. A Explorer, který stále používá kolem desetiny českých uživatelů, ji nativně neumí.

Vezměme příklad: Chceme layout 2 × 2. HTML kód vypadá takto:

```html
<div class="container">
  <p class="box">Box</p>
  <p class="box">Box</p>
  <p class="box">Box</p>
  <p class="box">Box</p>
</div>
```

Díky automatickému umístění bude v moderních prohlížečích stačit definovat mřížku v CSS:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
}
```

Prvky se nám pěkně rozmístí. Jenže smůla, tohle nebude fungovat v Internet Exploreru.

![Autoplacement v MSIE nefunguje](https://gallery.mailchimp.com/d6be2f1899eba6a7651157403/images/72631c1a-dd36-4104-8dde-3efbeed4c309.jpg)

Pro něj nám ale Autoprefixer přidá pseudotřídy:

```css
.container > *:nth-child(1) {
  -ms-grid-row: 1;
  -ms-grid-column: 1;
}

.container > *:nth-child(2) {
  -ms-grid-row: 1;
  -ms-grid-column: 2;
}
```

…a tak dále.

Neřeší to všechno, ale máme tady o jeden silný důvod navíc použít [CSS Grid](https://www.vzhurudolu.cz/prirucka/css-grid).

## Co potřebujete?

V předchozím textu jsem psal [o podmínkách](css-grid-msie.md#autoprefixer-nastaveni) pro nastavení podpory MSIE. Stručně to zopakuji:

- Potřebujete Gulp, Grunt, skripty v NPM nebo podobné nástroje.
- V Browserslist, seznamu podporovaných prohlížečů, specifikovat také IE 11, případně i desátou verzi.
- Zavolat Autoprefixer s parametrem `grid: 'autoplace'`, který zařídí podporu právě pro automatické umístění.

Hotové a funkční nastavení je [v Gulpfile.js](https://github.com/machal/css-grid-demos/blob/master/gulpfile.js) mého demonstračního repozitáře. 

<small markdown="1">
Mimochodem, řešení v [NPM skriptu](https://github.com/machal/css-grid-demos/blob/master/package.json#L29) tam zatím nefunguje. Stejně tak se mi nedaří zařídit podporu autoplacementu [v Codepenu](https://codepen.io/machal/pen/aPRVOV).
</small>

## Pozor na výjimky

