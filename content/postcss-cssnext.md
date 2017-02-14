# PostCSS a CSSnext jako náhrada preprocesoru

[PostCSS](http://postcss.org/) samo o sobě vlastně nic neumí. Je to ale nutná spodní vrstva pro fungování známějších a zajímavějších pluginů. 

Jedním z nich je [CSSnext](http://cssnext.io/): sada, která přináší vlastnosti, kterou jsou specifikované v CSS, ale nemají plnou podporu. CSSnext se prostě toto moderní CSS snaží přepsat do staršího CSS nebo to přepočte tak, aby to mu rozuměly i starší prohlížeče.

Můžete tak využívate nativní CSS proměnné, zanořování a další vlastnosti, které znáte z CSS preprocesorů.

Myslím si ale, že je to v mnoha případech elegentnější než využití preprocesoru. 

## PostCSS/CSSnext versus preprocesory

Rozdíl je už **v momentě zpracování**. [Preprocesor](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1) (SASS, LESS, Stylus) předzpracovává, takže vytváří nový jazyk, který se kompiluje do CSS. Postprocesor PostCSS více či méně předpokládá, že píšete CSS a to pak ještě nějak transformujeme.

Další rozdíl je **v modularitě**. Preprocesory jsou molochy, z nichž asi nevyužíváte všechny vlastnosti. PostCSS je modulární. Samo o sobě nic neumí, pro každou vlastnost si musíte doinstalovat plugin. To je samozřejmě taky trochu nevýhoda, proto bych to nenasadil na komplexní projekty.

Díky tomu je PostCSS **rychlejší**. A může být enormě rychlé, podívejte se [na tyhle testy](https://github.com/postcss/benchmark).

Zajímavé taky je, že CSSnext **využívá standardizovanou syntaxi**. Takže CSS píšete v syntaxi, které už dnes část prohlížečů umí. Díky tomu můžete CSSnext použít jen jako fallback pro starší prohlížeče. Jenže v té *standarizované* syntaxi je ukrytý i ďábel v PostCSS. Hned vysvětlím.

## Horší strana PostCSS/CSSnext 

Když dneska procházím [vlastnosti](http://cssnext.io/features/), které CSSnext umí, je to z velké části demonstrace způsobu, jakým by se transpilátor (tedy překladač budoucích vlastností jazyka do těch současných) dělat neměl. Příklady:

- [Pojmenované Media Queries](http://cssnext.io/features/#custom-media-queries) jsou založené na [`@custom-media` vlastnosti](https://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/#custom-mq), která v nové verzi Working Draft pro Media Queries Level 4 už není. Nevím o žádné implementaci v prohlížeči.
- [Nativní mixiny](http://cssnext.io/features/#custom-properties-set-apply) si zase v CSSnext troufli založit na `@apply` pravidlu, která [navrhuje Tab Atkinks](http://tabatkins.github.io/specs/css-apply-rule/). Toje sice důležitá osoba, ale specifikaci napsal jako soukromník. Opět nevím o žádném specifikačním procesu natož implentaci.

Tvůrci CSSnext prostě podlehli nedočkavosti a implementovali i vlastnosti, které se v CSS nejspíš nikdy neobjeví. Začali tím vlastně tvořit jen další preprocesor s vlastní nestandardizovanou syntaxí.

Druhý problém je s časem potřebným pro průzkum a nastavování vlastních řešení pomocí PostCSS. To vyplývá z modulárního přístupu.

## PostCSS nebo preprocesor?

Když kombinaci PostCSS/CSSnext vezmete jako drobné rozšíření vašeho CSS o proměnné, importy a další drobnosti, s použitím na menší projekty neváhejte. Pro ty ostatní prostě využijte [preprocesory](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1). 

Pro běžné weby a menší aplikace vám bude opravdu PostCSS nebo možná někdy úplně čisté CSS bude naprosto stačit. Čím více ale budete mít programátorského, imperativního kódu – mixinů, funkcí, cyklů – tím více potřebujete spíše preprocesor. Prostě jazyk, který je vymyšlený pro složité úkoly. Framework typu Bootstrapu si prostě v PostCSS představit neumím, ale i to se časem může srovnat.

## Vlastnosti preprocesorů v novém CSS

Jak už jsem [dříve psal](http://www.vzhurudolu.cz/blog/34-css-postprocessing), z preprocesorů používám hlavně proměnné, vkládané importy, pojmenované breakpointy a občas nějaké to zanořování. Teď ukážu, jak byste to psali v čistém CSS nebo s pomocí CSSnext a PostCSS.

### Proměnné

Proměnné se v CSS zapisují tímto způsobem:

```css
:root {
  --colorPrimary: red;
}

a {
  color: var(--colorPrimary);
}
```

Mimochodem, nativní proměnné mají velmi dobrou [podporu v prohlížečích](http://caniuse.com/#feat=css-variables). CSSnext potřebujete hlavně kvůli náhradnímu řešení pro Internet Explorery a Edge.

Je dobré vědět, že CSS proměnné na rozdíl od preprocesorových sester dynamické. Dědí se a jsou dostupné v Javascriptu. Mrněte na [Je čas](http://jecas.cz/var). Tyhle cool vlastnosti jsou ovšem dostupné jen v nativní podpoře. CSSnext se k proměnným chová stejně jako preprocesory.


### Vkládané importy

[Importy](http://www.vzhurudolu.cz/blog/13-css-preprocesory-2#import), které znáte z preprocesorů, v čistém CSS neuděláte, proto doporučuji využít jeden plugin navíc: [postcss-import](https://github.com/postcss/postcss-import). Umí také automaticky rozpoznat cesty k do `/node_modules`:

```css
@import "normalize.css"; 
  /* == @import "./node_modules/normalize.css/normalize.css"; */
@import "ui/komponenta.css";
```

Pokud byste hledali pokročilejší funkce jako hromadné importy z adresářů, mrkněte se na [postcss-easy-import](https://github.com/trysound/postcss-easy-import).

Ještě chci zmínit, že jakmile váš web poběží na [HTTP/2](http-2.md), vychází teoreticky lépe importy nevkládat a nechat server posílat jednotlivé soubory. 

TODO: autoprefixer, pixrem.


## Instalace a nastavení

Pokud používáte [Grunt](grunt.md) nebo Gulp, nejdříve přes NPM nainstalujte tři hlavní pluginy:

```bash
npm install postcss postcss-cssnext postcss-import --save-dev
```

V `Gruntfile.js` si pak nastavíte náš malý preprocesor:

```javascript
postcss: {
  options: {
    map: true,
    processors: [
      require('postcss-import'),
      require('postcss-cssnext')
    ]
  },
  src: 'src/css/index.css',
  dest: 'dist/css/index.css'
}
```
