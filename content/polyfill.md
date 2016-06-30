
Polyfill
========

V kontextu webového frontendu jde o javascriptový kód co vám HTML5 fíčuru rozchodí i v prohlížečích, které ji neumí.

Většina polyfillů vám umožní používat HTML5 vlastnost tak jak byste ji používali v moderních prohlížečích a podporu ve starých si nějak pořeší sami.

Kdybych to uměl, napsal bych Ódu na polyfilly. Myslím, že na poměrně rychlém nástupu HTML5 technologií měly polyfilly zásadní podíl.

Je jich [opravdu velmi hodně](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills), pojďme připomenout jen ty nejznámější:

* [**Respond.js**](https://github.com/scottjehl/Respond) — rozchodí [CSS3 media queries](css3-media-queries.md) v IE8−
* [**History.js**](https://github.com/browserstate/history.js/) — [HTML5 history](html5-history.md), tedy history.pushState() i v docela starých křápech
* [**CSS3Pie**](http://css3pie.com/) – [zaoblené rohy](css3-border-radius.md), [stíny](css3-box-shadow.md) a [barevné přechody](css3-gradients.md) v IE6-9
* [**MediaElement.js**](http://mediaelementjs.com/) — HTML5 video. Připravíte mu video v patřičných formátech a on se za vás rozhodne, jestli vygeneruje flashový nebo HTML5 přehrávač.

Na HTML5Please.com je seznam všech HTML5 vlastností, které se doporučuje [používat s polyfillem](http://html5please.com/#polyfill).

Pokud jste zvědaví kde přesně se slovo „polyfill“ vzalo, mrkněte k [Remy Sharpovi](http://remysharp.com/2010/10/08/what-is-a-polyfill/).

