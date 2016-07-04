# Buildování: Prepros, Grunt, Gulp

Skoro vždy se nám na frontendu hodí provádění nějakých operací nad zdrojovými kódy. CSS chceme kompilovat z preprocesoru, pak ještě třeba minifikovat. Javascriptové soubory chceme zmenšit a spojit. Obrázky chceme datově optimalizovat a slepit do jedné „CSS sprite“. 

Zdrojové soubory tedy v HTML kódu nelinkujeme prohlížečům přímo. Nahradily je optimalizované distribuční verze. No a pro vytvoření distribučních verzí potřebujeme sestavovací (buildovací) nástroje.

Sestavovací nástroje pro webový frontend jsou dvojího typu:

- zjednodušené – snadněji se používají, ale mají omezený rozsah funkcí (Prepros, CodeKit a další)
- plnohodnotné – rozsahem funkcí téměř neomezené, ale začátečníci nebo neprogramátoři se do nich dostávají hůř (Grunt, Gulp a další)

## Prepros

Zástupce zjednodušených buildovacích nástrojů. Obvykle doporučuji začít s ním, protože je multiplatformní a pro jeho ovládání je jen potřeba umět klikat.

![Prepros](dist/images/original/prepros.jpg)

Kromě všech základních úkolů nad CSS, Javascripty a obrázky umí aktualizovat weby přes FTP a provádět synchronizované prohlížení webu na více zařízeních.

Pokud se ale nechcete omezovat a jste ochotní investovat čas do učení složitějšího nástroje, začněte používat rovnou Grunt.
