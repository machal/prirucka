# PostCSS jako jednoduchá náhrada preprocesoru

[PostCSS](http://postcss.org/) je nástroj pro transformaci CSS pomocí pluginů napsaných v Node.js. Naoko vlastně nic nedělá, je to ale nutná spodní vrstva pro fungování známějších a zajímavějších pluginů, například Autoprefixeru. 

V textu ukážu jak jej využít jako jednoduchý a rychlý preprocesor, který vám na spoustu projektů výborně poslouží. 


## PostCSS versus CSS preprocesory

Rozdíl je už **v momentě zpracování**. [Preprocesor](https://www.vzhurudolu.cz/blog/12-css-preprocesory-1) (SASS, LESS, Stylus) předzpracovává, což v důsledku znamená, že vytváří nový jazyk, který se kompiluje do CSS. PostCSS je postprocesor. Více či méně předpokládá, že to co píšete je současná nebo budoucí verze CSS.

Další rozdíl je **v modularitě**. Preprocesory jsou monolity, velké potvory, jejichž všechny vlastnosti nikdy nevyužijete. PostCSS je modulární. Samo o sobě nic neumí, pro každou vlastnost si musíte doinstalovat plugin. To je samozřejmě taky trochu nevýhoda, protože to vyžaduje režii na učení a prozkoumávání. S tím vám tady můžu trochu pomoci.

Díky modularitě **kompiluje rychleji**. A může být i enormě rychlé.  Podívejte se třeba [na tyhle testy](https://github.com/postcss/benchmark).

<!-- AdSnippet -->

Dobré taky je, že mnoho PostCSS pluginů **využívá standardizovanou syntaxi**. CSS píšete způsobem, který už dnes část prohlížečů umí nebo se předpokládá, že velmi brzy umět budou. Díky tomu můžete PostCSS použít jen jako fallback pro starší prohlížeče. Jenže v té *standarizované* syntaxi je ukrytý i ďábel. Hned vysvětlím.


## Proč ne CSSnext?

Dole ukážu jednoduchý preprocesor, který jsem si v PostCSS poskládal z různých pluginů. Někteři z vás se mohou ptát, proč jsem nepoužil [CSSnext](http://cssnext.io/). To je transpilátor budoucího CSS do stylů, kterým rozumí dnešní prohlížeče. CSSnext by mi vlastně většinu pluginů nahradilo. 

<!-- AdSnippet -->

Jenže pro mě je CSSnext z velké části demonstrace způsobu, jakým by se transpilátor dělat neměl. Příklady:

- [Pojmenované Media Queries](http://cssnext.io/features/#custom-media-queries) jsou založené na [`@custom-media` vlastnosti](https://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/#custom-mq), která v nové verzi Working Draft pro Media Queries Level 4 už není. Nevím o žádné implementaci v prohlížeči.
- [Nativní mixiny](http://cssnext.io/features/#custom-properties-set-apply) si zase v CSSnext troufli založit na `@apply` pravidlu, která [navrhuje Tab Atkinks](http://tabatkins.github.io/specs/css-apply-rule/). To je sice důležitá osoba, ale specifikaci napsal jako soukromník. Opět nevím o žádném pokračujícím specifikačním procesu natož implementaci.

Tvůrci CSSnext podlehli nedočkavosti a do „transpilátoru“ vložili i vlastnosti, které se v CSS možná nikdy neobjeví. Začali tím vlastně tvořit jen další preprocesor s vlastní nestandardní syntaxí.

Je pravda, že CSSnext obsahuje řadu pluginů, které chci sám používat: doplňování prefixů, fallbacky pro `rem` nebo nativní proměnné. Většinu ostatních vlastností ale neupotřebím.


## Preprocesor pomocí PostCSS

Jak už jsem [dříve psal](https://www.vzhurudolu.cz/blog/34-css-postprocessing) z preprocesorů toho moc nevyužívám: obejít se nedokážu hlavně bez proměnných a vkládaných importů. Teď ukážu, jak byste takhle malý preprocesor udělali pomocí PostCSS.

### Vkládané importy

[Importy](https://www.vzhurudolu.cz/blog/13-css-preprocesory-2#import), které znáte z preprocesorů, v čistém CSS neuděláte, proto doporučuji využít plugin [postcss-easy-import](https://github.com/TrySound/postcss-easy-import). Umí také automaticky rozpoznat cesty k do `/node_modules` nebo importovat všechny soubory v adresáři:

```css
/* komponenta z node_modules: */
@import "normalize.css"; 
/* relativní cesta: */
@import "./theme.css"; 
/* import všech souborů v adresáři: */
@import "./components/*.css"; 
```

Ještě chci zmínit, že jakmile váš web poběží na [HTTP/2](http-2.md), vychází teoreticky lépe importy nevkládat a nechat server posílat jednotlivé soubory. 

### Proměnné

[Proměnné](css-promenne.md) se v CSS zapisují tímto způsobem:

```css
:root {
  --colorPrimary: red;
}

a {
  color: var(--colorPrimary);
}
```

Mimochodem, nativní proměnné mají velmi dobrou [podporu v prohlížečích](https://caniuse.com/#feat=css-variables). PostCSS potřebujete hlavně kvůli náhradnímu řešení pro Internet Explorery a Edge.

Je dobré vědět, že CSS proměnné jsou na rozdíl od preprocesorových sester dynamické. Dědí se a jsou dostupné v Javascriptu. Mrkněte se na [Je čas](http://jecas.cz/var). 

Tyhle cool vlastnosti jsou ovšem dostupné jen v nativní podpoře. PostCSS plugin [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) se k proměnným chová stejně jako preprocesory.

### Matematika (i s proměnnými)

[CSS funkce `calc()`](css3-calc.md) má širokou podporu, takže plugin [postcss-calc](https://github.com/postcss/postcss-calc) potřebujete hlavně kvůli přepočítávání matematických výrazů právě s proměnnými. 

### Přidávání prefixů

Předpokládám, že [Autoprefixer](autoprefixer.md) znáte. Na přidávání [prohlížečových prefixů](prefix.md) nic lepšího není. 

Konfiguraci podporovaných prohlížečů je i kvůli dalším nástrojům nejlepší dělat přímo v `package.json`:

```javascript
"browserslist": [
  "> 1%",
  "last 2 versions",
  "IE 8-9"
]
```

Podívejte se na [`package.json`](https://github.com/machal/polaroid-example/blob/master/package.json) ke [školení](https://www.vzhurudolu.cz/kurzy/webova-koderina).

### `rem` fallback

Plugin [pixrem](https://github.com/robwierzbowski/node-pixrem) přidává náhradní řešení pro staré prohlížeče, které neumějí [jednotku `rem`](css3-jednotky.md):

```css
/* Fallback: */
margin-bottom: 48px;
/* Moderní prohlížeče: */
margin-bottom: 3rem;
```

## Instalace a nastavení

Pokud používáte [Grunt](grunt.md) nebo Gulp, nejdříve přes [NPM](npm.md) nainstalujte naše pluginy:

```bash
npm install 
  postcss postcss-easy-import postcss-calc 
  postcss-custom-properties autoprefixer pixrem  
  --save-dev
```

V `Gruntfile.js` si pak tenhle malý preprocesor přidáme do `postcss` sekce:

```javascript
options: {
  map: true,
  processors: [
    require('postcss-easy-import'),
    require('postcss-custom-properties'),
    require('postcss-calc'),
    require('autoprefixer'),
    require('pixrem')
  ]
},
src: 'src/css/index.css',
dest: 'dist/css/index.css'
```

Více je v příkladu ze [školení Dnešní webová kodéřina](https://www.vzhurudolu.cz/kurzy/webova-koderina) [na Githubu](https://github.com/machal/polaroid-example/blob/master/grunt/postcss.js). 

<!-- AdSnippet -->

Je to fajn základ, který můžete dále rozšiřovat, třeba [o Style Lint](https://stylelint.io/) a jiné pluginy. Inspirovat se můžete třeba i [u preprocesoru](https://github.com/suitcss/preprocessor/blob/master/README.md), který si pro framework Suit napsal Nicolas Gallagher. Neváhejte do komentářů napsat, jaké další používáte vy.


## PostCSS nebo preprocesor?

Když PostCSS vezmete jako jemné rozšíření vašeho CSS o proměnné a vkládané importy, s použitím na menší projekty neváhejte. Váš CSS kód bude kompatibilní i do budoucna a získáte velmi rychlou kompilaci. 

Pro ostatní projekty prostě využijte [preprocesory](https://www.vzhurudolu.cz/blog/12-css-preprocesory-1). Čím více budete ve stylech mít programátorského, imperativního kódu – mixinů, funkcí, cyklů – tím více potřebujete robustnější řešení. Jazyk, který je vymyšlený pro složité úkoly – nejlépe [Sass](http://sass-lang.com/). Extrémy jako [frameworky typu Bootstrapu](https://www.vzhurudolu.cz/frontend-frameworky) si napsané v nativním CSS a transpilované pomocí PostCSS zatím představit neumím, ale i to se časem může srovnat.


