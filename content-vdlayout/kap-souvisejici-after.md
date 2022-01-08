# Shrnutí kapitoly

Poslední test knihy je tady. Co jste se naučili v této kapitole?

1. **Jaký typ zobrazení zajistí deklarace `display:inline-block`?**  
a) zvnějšku je prvek blokový, zevnitř se vykresluje do řádku  
b) vnitřně se jedná o blokový element, zvnějšku inline – netvoří zalomení  
c) v nové verzi specifikace je toto psát již zakázáno
1. **Jak zajistit, aby plovoucí prvky nevytékaly z rodičovského elementu?**  
a) `display:flow-root`  
b) `display:float-root`  
c) `display:clear-float`
1. **K čemu slouží logické vlastnosti a hodnoty (CSS Logical Properties)?**  
a) jde o logické funkce při počítání matematiky v `calc()`  
b) k sázení layoutu v závislosti na směru toku jazyka dokumentu  
c) jde o obecný název pro vnitřní a vnější okraje prvku
1. **Jaký je ideální způsob nastavení velikosti písma v dokumentu?**  
a) v procentech: `html { font-size: 120% }`  
b) v „root em“: `html { font-size: 1.2rem }`  
c) v „emkách“: `html { font-size: 1.2em }`
1. **Co definuji zápisem `html {--color: blue}`**  
a) globální proměnnou `--color` s hodnotou `blue`  
b) jde jen o hack, který zamezí viditelnosti zápisu v Exploreru verze 4  
c) autorskou vlastnost `--color` s hodnotou `blue`
1. **Jaké jsou výhody autorských vlastností a jejich použití v proměnných?**  
a) je to totéž jako proměnné v preprocesoru  
b) počítají se v prohlížeči, podléhají kaskádě, jsou dostupné z HTML i JS  
c) je to totéž jako proměnné v JavaScriptu
1. **Co udělá zápis `margin-bottom:calc(1em-2px)`**  
a) prohlížeč spočte `1em` a výsledek výpočtu v závorce dosadí místo hodnoty  
b) výsledná hodnota bude vždy `14px`  
c) výsledná hodnota bude vždy výška řádku mínus 2 pixely
1. **Jak se prohlížeče zeptat na podporu vlastnosti `transform-style`?**  
a) `@supports transform-style { }`  
b) `@supports (transform-style) { }`  
c) `@supports (transform-style: preserve) { }`
1. **Co je Autoprefixer?**  
a) automatizační nástroj, který přidává (nejen) prefixy do CSS kódu  
b) automatizační nástroj pro zprovoznění webu v Exploreru verze 6  
c) značka fixů určených pro frontend vývojářky a vývojáře

---

Řešení:

1. **Jaký typ zobrazení zajistí deklarace `display:inline-block`?**  
b) vnitřně se jedná o blokový element, zvnějšku inline – netvoří zalomení  
1. **Jak zajistit, aby plovoucí prvky nevytékaly z rodičovského elementu?**  
a) `display:flow-root`
1. **K čemu slouží logické vlastnosti a hodnoty (CSS Logical Properties)?**  
b) k sázení layoutu v závislosti na směru toku jazyka dokumentu
1. **Jaký je ideální způsob nastavení velikosti písma v dokumentu?**  
a) v procentech: `html { font-size: 120% }`
1. **Co definuji zápisem `html {--color: blue}`**  
c) autorskou vlastnost `--color` s hodnotou `blue`
1. **Jaké jsou výhody autorských vlastností a jejich použití v proměnných?**  
b) počítají se v prohlížeči, podléhají kaskádě, jsou dostupné z HTML i JS
1. **Co udělá zápis `margin-bottom:calc(1em-2px)`**  
a) prohlížeč spočte `1em` a výsledek výpočtu v závorce dosadí místo hodnoty
1. **Jak se prohlížeče zeptat na podporu vlastnosti `transform-style`?**  
c) `@supports (transform-style: preserve) { }`
1. **Co je Autoprefixer?**  
a) automatizační nástroj, který přidává (nejen) prefixy do CSS kódu
