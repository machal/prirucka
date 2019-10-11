# Devstack vs. Boilerplate vs. Starter Kit: Co je co?

[V aktuálním textu](devstacky.md) jsem chtěl poskytnout rozcestník po hotových výchozích nastaveních frontendových projektů. Jenže přitom – jako už tradičně – narážím na to, že každý si pod slovem „devstack" představuje něco jiného.

Pojďme si na tedy trochu zadefinovat.

## Devstack (základní sada vývojářských nástrojů)

Z „development stack". Sada nástrojů používaných pro vývoj v daném ekosystému.

V případě webového frontendu v ní bývají nástroje pro automatizaci (např. Gulp), zpracování kódu do distribuční verze (např. [Webpack](webpack.md)),  nástroje pro zpracování CSS a JS kódu (CSS preprocesory, PostCSS, Babel…) a další.

V zásadě se ale „devstack" netýká samotného kódu v HTML, CSS nebo JS. Nějaký kód ukazuje boilerplate.

Typickou ukázkou devstacku je například [actum/gulp-dev-stack](https://github.com/actum/gulp-dev-stack).

## Boilerplate

Boilerplate je výchozí šablona kódu pro rychlý start projektu. Nezaměřuje se ovšem na automatizační nástroje („tooling"), ale přímo na webové technologie.

Jako asi všichni, i já mám svou HTML a CSS Boilerplate, které říkám [Blanka](https://github.com/machal/blanka-html) (a kterou označuji jako „baseline", ehm…).

<!-- AdSnippet -->

Mimochodem, až při psaní textu jsem zjistil, odkud se vlastně vzalo pojmenování „boilerplate". [Pochází to z tiskařiny](https://en.wikipedia.org/wiki/Boilerplate_text) a má to opravdu něco společného s bojlery, pokud by vás to zajímalo.

## Starter kit (startovní balíček)

Starter kit pak ve světě jak si ho představuji já míchá obě kategorie nástrojů – devstack, boilerplate a případně přidává i další.

[Web Starter Kit](https://github.com/google/web-starter-kit) byl asi nejznámějším zástupcem. Vyvíjel jej Google a kromě devstacku (Sass, ES2015, BrowserSync) obsahuje základní HTML šablony (tedy Boilerplate) a k tomu ještě spoustu věcí navíc: použití frameworku Material Design, použití Service Worker pro offline přístup. Už se ne nevyvíjí, ale inspirovat leckoho může.

„Devstack" je tedy nejspodnější vrstva s nástroji, „boilerplate“ navazuje, „starter kit“ obojí spojuje.

Bohužel v praxi se tyhle tři pojmy mísí  navzájem, anebo i s dalšími – [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) je například jasný starter kit. Ale tady jsme na seriózním blogu a nedopustíme to.

<!-- AdSnippet -->
