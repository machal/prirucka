# CSS Grid v MSIE: Můžete mít i automatické umísťování do mřížky

Pokud Vzhůru dolů čtete pravidelně, už víte, že CSS Grid je možné v řadě případů [použít i v Internet Exploreru](css-grid-msie.md).

Vděčíme za to nedávným změnám v Autoprefixeru, který se naučil generovat kód tak, abychom mohli používat i vlastnosti jako `grid-gap` (mezera mezi buňkami) nebo  `grid-template-areas` (pojmenované oblasti).

O čem jsem ale zatím nepsal, jsou nové možnosti automatického umísťování prvků v mřížce. *Autoplacement* je další důležitá vlastnost [Gridu](css-grid.md). A Explorer, který stále používá minimálně [desetina českých uživatelů](prohlizece.md), ji nativně neumí.

Pojďme tradičně na příklad. Chceme layout 2 × 2. HTML kód vypadá takto:

```html
<div class="container">
  <p class="box">Box</p>
  <p class="box">Box</p>
  <p class="box">Box</p>
  <p class="box">Box</p>
</div>
```

Díky automatickému umístění bude v moderních prohlížečích stačit definovat mřížku v CSS:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
}
```

Prvky se nám pěkně rozmístí. Jenže smůla, tohle nebude fungovat v Internet Exploreru.

<figure>
<img src="../dist/images/original/msie-grid-autoplacement-browsers.jpg" alt="PageSpeed Insights">
<figcaption markdown="1">
*Obrázek: Ale to je nepříjemné, automatické umístění v MSIE nefunguje*
</figcaption>
</figure>

Pro MSIE 10 a 11, ve kterých nějaká verze CSS Gridu funguje, nám ale Autoprefixer přidá pseudotřídy:

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

Neřeší to všechno, ale máme tady o jeden silný důvod navíc použít [CSS Grid](css-grid.md).

## Co potřebujete?

V předchozím textu jsem psal [o podmínkách](css-grid-msie.md#autoprefixer-nastaveni) pro nastavení podpory MSIE. Stručně to zopakuji:

- *Automatizaci*  
Gulp, [Grunt](grunt.md), skripty v [NPM](npm.md) nebo podobné nástroje, které umí využít Autoprefixer.
- *Zapnout podporu IE11*  
V Browserslist, seznamu podporovaných prohlížečů, je nutné specifikovat také IE 11, případně i desátou verzi.
- *Zapnout Grid a auto-umístění*  
Zavolat Autoprefixer s parametrem `grid: 'autoplace'`, který zařídí podporu právě pro automatické umístění. Alternativa jsou komentáře přímo v CSS: `/* autoprefixer grid: autoplace */`.

Hotové a funkční nastavení je například [v Gulpfile.js](https://github.com/machal/css-grid-demos/blob/master/gulpfile.js) mého demonstračního repozitáře.

<small markdown="1">
Mimochodem, řešení v [NPM skriptu](https://github.com/machal/css-grid-demos/blob/master/package.json#L29) tam zatím nefunguje. Stejně tak se mi nedaří zařídit podporu autoplacementu [v Codepenu](https://codepen.io/machal/pen/aPRVOV). Nevím proč. Pokud vy ano, napište mi, prosím.
</small>

## Pozor na výjimky

Autoplacement rozhodně nefunguje ve všech použitích mřížky. Následuje seznam možných problémů, ale bude jich více.

- *Nefunguje pro neznámý počet položek*  
Je možné tedy automatizace použít jen pro explicitní mřížky definované pomocí `grid-template-*` vlastností, nikoliv `grid-auto-*`.
- *Pozor na zpětné nasazení na starých projektech*   
Doporučení zní: Nechte grid vypnutý a pomocí CSS komentářů jej zapínejte pouze pro nové deklarace.
- *Neumí to repeat() v kombinaci a auto-fill, auto-fit*  
I když IE funkci `repeat()` zvládá, klíčová slova `auto-fill` a `auto-fit` bohužel ne.
- *Vyberte si: Buď autoplacement nebo manuální umístění v gridu*  
V moderních prohlížečích lze obojí kombinovat, v IE bohužel ne. Buď tedy budete všechny prvky gridu umísťovat ručně (použijte vlastnost `grid-template-areas` v definici gridu) nebo automaticky (bez `*-areas`).
- *Pozor na pseudoelementy*  
`::before` a `::after` uvnitř Gridu vám v IE rozbijí mřížku, to se vsaďte.
- *V Media Qeuries nelze změnit jen grid-gap*  
Namísto toho je Autoprefixeru potřeba znovu deklarovat explicitní mřížku pomocí vlastností `grid-template-*`.

Více najdete [v dokumentaci Autoprefixeru](https://github.com/postcss/autoprefixer#grid-autoplacement-support-in-ie). 
