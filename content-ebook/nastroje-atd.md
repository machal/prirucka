# Další nástroje a weby

Teď už to vezmeme hodně stručně.

## HTML5 Please

Pro každou CSS3 (nebo HTML5) vlastnost vám tento web řekne, zda a za jakých podmínek ji doporučuje používat. Takže – zda vlastnost použít a zda použít s prefixy, nebo s polyfillem. U některých samozřejmě raději počkat. Berte to jako obecná doporučení a vždy se dívejte na cílovou skupinu svého konkrétního projektu. [html5please.com](http://html5please.com)


## Can I Use

Jsou to tabulky s informací o tom, které prohlížeče vaši vlastnost podporují a které naopak ne. Pokud si chcete zapamatovat jen jeden web, tohle je on. Can I Use je možné si propojit s vašimi statistikami z Google Analytics. Podíly podpory vlastností na globální úrovni samozřejmě nemají pro konkrétní projekt vypovídající hodnotu. [caniuse.com](http://caniuse.com)


## Should I Prefix

Musím u konkrétní CSS3 vlastnosti použít prefixované verze, nebo nemusím? Může se hodit, ale obecně je lepším řešením Autoprefixer zmíněný v předchozích částech webu. [shouldiprefix.com](http://shouldiprefix.com)

## Modernizr

Toto je javascriptová knihovna pro detekci vlastností. Vyberete si CSS3 nebo HTML5 vlastnosti, které na svém projektu využíváte, a web Modernizru vám vytvoří kus kódu, který pak vložíte do vlastního zdrojového kódu. V CSS pak můžete využívat podmínky jako `.no-flexbox .form`, v Javascriptu třeba něco jako `if (Modernizr.canvas) { … }`. [modernizr.com](http://modernizr.com)

## Šablony projektů

Pokud vás nebaví začínat projekty úplně od nuly, podívejte se na HTML5 Boilerplate, šablonu výchozího HTML souboru. Osvědčilo se mi brát ji jako zdroj znalostí, ale nepoužívat ji na reálných projektech. [html5boilerplate.com](https://html5boilerplate.com)

Masivnější základna projektu je pak Web Starter Kit od Google. Kromě výchozích HTML, CSS a JS souborů je tam rovnou hotové Gulp workflow. [developers.google.com/web/starter-kit](https://developers.google.com/web/starter-kit/)

Spoustu (i docela složitých) šablon pro start projektu obsahují generátory v rámci nástroje Yeoman. [yeoman.io/generators](http://yeoman.io/generators/)

## Dokumentace

Vynikající dokumentaci nových webových technologií najdete na Mozilla Developer Network. Třeba i pro CSS3 – [developer.mozilla.org/en-US/docs/Web/CSS/CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3).

Část obsahu tohoto e-booku najdete na webu – [vrdl.cz/prirucka/css3](http://www.vzhurudolu.cz/prirucka/css3).

## Pokročilejší nástroje

Jak už jsem psal v úvodu, s nástroji se to nemá přehánět. V e-booku se soustředím na méně až středně pokročilého vývojáře uživatelského rozhraní. Pokud se počítáte k pokročilým, neměly by vám utéct nástroje Broccoli, Browserify, Webpack či CSSNext. Případně Babel a Traceur, pokud píšete hodně v Javascriptu.
