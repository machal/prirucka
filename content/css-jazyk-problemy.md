# Kaskáda a další „problémy“ CSS: Jak je řešit, když vás pálí?

CSS své trable bezpochyby má. Pokud se ale jedná o organizaci a architekturu projektu, těžko o nich mluvit jako o problémech. 

Stejně jako jiné jazyky prostě nijak nespecifikuje, jak se máme starat o větší projekty. Musíme vzít na pomoc metodiky organizace kódu.

<!-- AdSnippet -->

Dneska se podíváme na tři problémy, které kritici stylům pravidelně otloukají o kaskádovou hlavu:

* [Pořadí vlastností a specifičnost selektorů](#poradi-specificnost)
* [Globální platnost selektorů](#globalni-platnost)
* [Nemožnost izolovat externí závislosti](#externi-zavislosti)

Než se dostaneme k architektuře – první věc, u které se musím pozastavit, je povaha jazyka. Tady jsem svého času dost často slýchaval výtky ze strany programátorů.

## Divný jazyk – ale dobře známý {#divny-jazyk}

CSS je kód. Není to však programovací, ale deklarativní jazyk, protože popisuje design. S tím se holt musíme smířit.

Řadě vývojářů se nelíbí z toho vycházející repetitivní povaha CSS a tak si všelijak uzpůsobují a „zefektivňují“ zápis:

```scss
.nav {
  @extend %m-b-0;
  @extend %clearfix;
  @include pos-r;
  @include dis-b;
}
```

A je to. Z divného jazyka tím vytvoří ještě divnější. Nový jazyk, kterému rozumí autor a pár zasvěcených. Nikdo jiný.

[CSS preprocesory](https://www.vzhurudolu.cz/blog/12-css-preprocesory-1) přinesly mnoho dobrého, ale také možnost vytvořit si zcela nové jazyky, velmi málo podobné kaskádovým stylů. A to je peklo.

[CSS je třetí nejčastěji používaný jazyk](https://www.vzhurudolu.cz/blog/108-stack-overflow-2018), takže mu prostě většina vývojářů a vývojářek rozumí. Když nad ním vytvoříme jazyk nový, zkomplikujeme tím zapojování nových lidí do vašeho projektu. Pro ty, kteří spravují více projektů, jsou silně proprietární nádstavby nad styly komplikující.


## Pořadí vlastností a specifičnost – bez metodik to nejde {#poradi-specificnost}

Dvě ze tří vlastností kaskády způsobily dva ze tří šedivých vlasů na hlavách těch zasloužilejších z nás. Pořadí vlastností a [specifičnost](https://specificity.keegan.st/), neboli váha selektorů.

Ano, uznávám – to, že poslední pravidlo vyhrává, ale zároveň ještě záleží na váze selektoru, je trochu složitější. Ale takhle jsou kaskádové styly postavené. [Se s tím smiř](http://historje.tumblr.com/image/36601964626).

Vezměme toto HTML:

```html
<section class="box">
  <div class="tabs">
    <h2 class="mb-0">…</h2>
  </div>   
</section>
```

CSS kód si často naběhne sám:


```html
/* base.scss */

h2 {
  color: red;
}

/* helpers.scss */

.mb-0 {
   margin-bottom: 0;
}

/* components/box.scss */

.box h2 {
  color: green;
  margin-bottom: 1rem;
}

/* components/tabs.scss */

.tabs h2  { 
  background: blue; 
  margin-bottom: 1rem;
}
```

Máte? Tak a teď vezměme, že cílem bylo, aby nadpis `<h2>` byl v boxíku zelený a neměl spodní vnější okraj (`margin`). Jenže: 

* díky pořadí v kódu vyhraje selektor `.tabs h2` a ten nastaví modrou barvu
* díky specificitě nezafunguje  helper `.mb-0` a `<h2>` bude mít spodní vnější okraj o velikosti `1rem`

[Kaskáda](css-kaskada.md) nám to pokazila. Tady pardon – ne kaskáda, ale špatně napsaný kód, který kaskádu nerespektoval.

<!-- AdSnippet -->

Nezbývá než se s kaskádou smířit a přizpůsobit tomu dvě věci:

* *Držet specifičnost co nejníže*  
To je ostatně jedno z pravidel metodiky [OOCSS](https://www.vzhurudolu.cz/prirucka/oocss), ze kterého pak vychází [BEM](https://www.vzhurudolu.cz/prirucka/bem). V tomto příkladě jsou samozřejmě špatně selektory `.box h2` a `.tabs h2`.
* *Nastavit pořadí kategorií stylů podle rostoucí specifičnosti*  
To hlásá například metodika [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/). V tomto příkladu by se hodilo změnit pořadí v kódu tak, aby užitková třída (`.mb-0`) následovala až za komponentami.

Lépe napsaný kód vypadá takto:

```html
<section class="box">
  <div class="tabs>
    <h2 class="head head--green mb-0">…</h2>
  </div>   
</section>
```

CSS:


```scss
/* base.scss */

h2 {
  color: red;
}

/* components/head.scss */

.head { … }

.head--green {
  color: green;
}

/* helpers.scss */

.mb-0 {
   margin-bottom: 0;
}
```

Občas je také výhodnější utilitám zvýšit specificitu nebo použít `!important`. Hlavně v situacích, kdy je přidáváme do starého a nezbedného kódu s nevyzpytatelnou úrovní specificity.

Je dobré používat komponentový přístup a zbavit elementy závislosti na kontejneru. Prostě používat [OOCSS](oocss.md), abychom se vyhnuli problémům s kaskádou.

<div class="related" markdown="1">
- [Kaskáda v CSS](kaskada.md)
- [Atomický design a Pattern Lab](pattern-lab.md)
</div>

Tady se dotýkáme i toho, že aby to celé dávalo smysl, i design musí být komponentový.



## Globální platnost – komponentový přístup a metodiky to řeší {#globalni-platnost}


To, že každý selektor platí globálně, byl svého času první argument pro používání [CSS v JS.](https://www.vzhurudolu.cz/podcast/77-css-v-js)  Vlastně jsem mu ale nikdy úplně plně nerozumněl, hlavně omílanému srovnání s globálními konstantami v programovacích jazycích. 



Na kódu výše je vidět, jak bojujeme se stylováním `<h2>`. Jenže při použití OOCSS nebo ještě lépe BEM problémy s globálností neplatí. Všechny komponenty, jejich podelementy nebo modifikátory mají prefix s název komponety:

```
.box h2 → .head--green
```

Zůstává jen jediný problém – s vymýšlením unikátních prefixů a pojmenováním komponent. 

Není to dokonalé řešení, ale leta to funguje velké části kodérů včetně mě. Mimochodem, zbývající problémy s globální platností snad jednou vyřeší nějaká standardizovaná technologie typu [ShadowDOM](https://developers.google.com/web/fundamentals/web-components/shadowdom). 

## Externí závislosti – do trezoru s nimi {#externi-zavislosti}


I kodéři a kodérky, kteří udržují kód v čistotě, jsou při nasazení externí knihovny do projektu v úzkých. 

Cizí knihovny jsou z pohledu CSS obvykle napsány přímo strašidelně. Možnost nastavit je přes proměnné preprocesorů je vzácná. Často používají selektory se zbytečně vysokou specifičností. A některé se vůbec nebojí vám přepsat váš vlastní kód. Odtud vede cesta už jen [do ordinace doktora Chocholouška](https://www.youtube.com/watch?v=9GrfpfmCAg0).

Pokud se komponenta dopouští agrese na vašem vlastním kódu, je to zlé. Do doby než budeme moci takové komponenty uzavřít do nějakého ShadowDOM,  prostě nezbývá než dobře testovat než nějakou vybereme.

Vezměme tento ošklivý příklad:

```scss
/* base.scss: */

h2 { … }

/* libraries/lightbox.scss (padouch) */

#lightbox #heading h2 { … }

/* components/heading.scss (můj krásný kód je v čudu) */

.heading { … } 
```

Bez technologií typu CSS v JS nebo ShadowDOM izolace padoucha nedosáhneme. Máme tu ale i problémy ze „zašpiněním“ čístého kódu. To je řešitelné – externí závislosti a boj s nimi se prostě dají do externí složky:

```scss
/* base.scss: */

h2 { … }

/* components/heading.scss (můj krásný kód je v čudu) */

.heading { … } 

/* libraries/lightbox.scss (padouch) */

#lightbox #heading h2 { … }

/* libraries/lightbox-custom.scss (boj s padouchem) */

#lightbox #heading h2 { … }
```

Na složku `libraries/` pak samozřejmě nepouštíme [Stylelint](https://www.vzhurudolu.cz/prirucka/stylelint) a vůbec se k ní raději moc nepřibližujeme.

Tak dobře. Ještě zbývá pár chytrých rad v závěrečném shrnutí:

* Ať už vám CSS připadá divné nebo ne, nezhoršujte kód vymýšlením vlastního jazyka v preprocesorech.
* Respektujte kaskádu: držte specificitu co nejníže, řaďte podle ní soubory v projektu a snažte se o komponentový přístup.
* Docela účinný lék na globální platnost selektorů je opět komponentový přístup a metodika BEM.
* Externí závislosti izolujte alespoň kvůli lintování do zvláštní složky.

<!-- AdSnippet -->
