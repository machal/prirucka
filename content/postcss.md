# PostCSS

Sada nástrojů pro transformaci CSS kódu. 

[PostCSS](http://postcss.org/) samo o sobě vlastně nic neumí. Je to ale nutná spodní vrstva pro fungování známějších a zajímavějších nástrojů. Plugin [Autoprefixer](https://github.com/postcss/autoprefixer) vám třeba do CSS psaného podle standardů přidává takzvané [vendor prefixy](prefix.md). Díky [CSSnext](http://cssnext.io/) zase můžete používat CSS vlastnosti, které zatím všechny prohlížeče neumí.

## Příklady využití

TODO

## PostCSS versus preprocesory

Rozdíl je už _v momentě zpracování_. [Preprocesor](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1) (SASS, LESS, Stylus) předzpracovává, takže vytváří nový jazyk, který se kompiluje do CSS. Postprocesor PostCSS více či méně předpokládá, že píšete CSS a to pak ještě nějak transformujeme.

Další rozdíl je _v modularitě_. Preprocesory jsou molochy, z nichž asi nevyužíváte všechny vlastnosti. PostCSS je modulární. Samo o sobě nic neumí, pro každou vlastnost si musíte doinstalovat plugin.

Díky tomu je _PostCSS rychlejší_. A může být enormě rychlé, podívejte se [na tyhle testy](https://github.com/postcss/benchmark).

### Kolik toho využíváte z preprocesorů?

Jak už jsem [dříve psal](http://www.vzhurudolu.cz/blog/34-css-postprocessing), z preprocesorů používám hlavně proměnné a vkládané importy. 


### Zvolit preprocesory nebo PostCSS?

Pro běžné weby a menší aplikace vám bude opravdu PostCSS nebo možná někdy úplně čisté CSS bude naprosto stačit. Čím více ale budete mít programátorského, imperativního kódu – mixinů, funkcí, cyklů – tím více potřebujete spíše preprocesor. Prostě jazyk, který je vymyšlený pro složité úkoly. Framework typu Bootstrapu si prostě v PostCSS představit neumím, ale i to se časem může srovnat.
