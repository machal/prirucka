# git st

Rozhraní webů nebo aplikací stavěné na Bootstrapu můžete budovat dvěma způsoby. V prvním si přidáte vlastní CSS a bez velkého uvažování píšete kód nových komponent.

Dnes vám doporučím jít druhou cestou. Cestou respektu k zákonitostem Bootstrapu. Bohatě se vám to vyplatí, uvidíte. Navenek se to nezdá, ale i v sazbě je tenhle populární framework uvnitř přísně systematický.

Designéři podobné principy znají pod pojmy [typografický nebo vertikální rytmus](http://typecast.com/blog/4-simple-steps-to-vertical-rhythm). Systém, který dále popisuji ale oceníte i v případě kdy vertikální mřížku dodržujete spíše od oka.

Ať už jste sazeč exaktní nebo „od oka“, vždy potřebujete vycházet ze základní velikosti písma a výšky řádku.

## Velikost písma a výška řádku

Podstatná je tedy [LESS proměnná](http://getbootstrap.com/css/#less-variables) `@font-size-base`. Výchozí hodnota je `14px`.

Pokud jste v Bootstrapu zkoušeli její hodnotu změnit, víte, že se vám přepočítaly proporce téměř všech elementů. Jednou z výhod dodržování systému popsaného v tomto článku je, že tohle chování zachováte i ve vašich částech kódu.

Pro výšku řádku máme k dispozici 2 proměnné:

* `@line-height-base` – pro nastavování výšky řádku v inline elementech typu tlačítka. Výchozí je vypočtena na přibližně `1.4`.
* `@line-height-computed` – výchozí výška řádku převedená do pixelových hodnot. Použitelná právě pro budování vertikálního rytmu pomocí okrajů elementu (margin a padding). Výchozí se počítá na `20px`.

Tu druhou ve vlastním kódu využívám velmi často. Obvykle jako podíly nebo násobky výchozí hodnoty. Stejný princip Bootstrap totiž používá ve svém vlastním kódu. Vaše odvozená komponenta může vypadat takto:

    .page-section {
        margin-bottom: 2*@line-height-computed;
        …
    }

## Další velikosti písma a výšky řádku

Velikosti písma ve vašem kódu nastavíte pomocí `@font-size-base`, `@font-size-large`, `@font-size-small`. Výchozí hodnoty jsou `14px`, `18px` nebo `12px`. Pro vlastní nadpisy použijete nebo modifikujte nadpisové proměnné `@font-size-h1` - `@font-size-h6`.

    .page-section-header {
        font-size: @font-size-h2;
        …
    }

Podobně v proměnných najdete varianty pro výšku řádku `@line-height-large: 1.3333333`  a `@line-height-small: 1.5`.

## Vnitřní okraje elementů

Vnitřní okraje nebo prostě padding. Pro velikosti tlačítek, formulářů a dalších inline prvků odvozených z paddingu Bootstrap interně využívá [rodinu padding-proměnných](https://github.com/twbs/bootstrap/blob/master/less/variables.less#L90).

`@padding-base`, `-large`, `-small`, `-xs` s příznaky `-horizontal` a `-vertical`. Takže horní padding totožný s tím co používá například Bootstrap tlačítko získáte z proměnné `@padding-base-vertical`. Tyhle  hodnoty také používám velmi často:

    .inline-element {
        padding: @padding-base-vertical
            @padding-base-horizontal;
        …
    }

Samozřejmě — typografické principy nejsou jediným systémem uvnitř Bootstrapu, který se vyplatí používat i ve vlastním kódu. Mohli bychom vést dlouhé řeči o barvách, responzivních breakpointech, layoutu, nastavování vzhledu komponent… To ale nechme na další články nebo [doražte na školení](http://www.vzhurudolu.cz/kurzy/bootstrap).

## Bez zapojení designéra to bude bolet

Typografické, ale i další principy Bootstrapu by měli znát designéři, kteří pro vás vytvářejí grafické podklady. Pokud se tahle pravidla porušují už během přípravy grafického systému, začne se vám Bootstrap stavět na zadní a nezřídka vás nehezky nakopne. Takže designéra zapojte a kolem Bootstrapu s ním našlapujte opatrně. :)

