# Implementace AMP: Pluginy redakčních systémů {#pluginy}

Pokud používáte známé redakční systémy jako je WordPress nebo Drupal, vytvoření AMP stránek pro vás může být relativně snadné. Jsou zde totiž pluginy, které práci vezmou alespoň částečně za vás. Jmenujme příklady:

- AMP for WordPress, [wordpress.org/plugins/amp/](https://wordpress.org/plugins/amp/)
- AMP for Drupal, [drupal.org/project/amp](https://www.drupal.org/project/amp)
- JAmp for Joomla, [extensions.joomla.org/extension/jamp](https://extensions.joomla.org/extension/jamp/)

Podívejme se blíže na rozšíření do nejpopulárnějšího systému pro správu webů.

## WordPress plugin

Rozšíření si nainstalujete a pak si můžete vybrat, v jakém režimu bude váš WordPress implementovat AMP:

1. *Classic:* Klasický režim, kdy články dostanou AMP verzi automaticky. Je vytvořená zvláštní šablonou, kterou je možné upravovat jen zlehka. Jedná se o jednoduché řešení, ale na vážnou práci s AMP to moc nedoporučuji, protože bude design obou verzí stránek pravděpodobně dost odlišný.
2. *Paired:* Párující režim. Na zvláštní URL adrese vytvoří AMP verzi všech stránek, ale použije se aktuální šablona. Pokud tedy uděláte chybu a AMP verze neprojde validací, jako alternativní řešení je k dispozici běžná verze webu.
3. *Native:* Totéž jaké „paired“, ale neexisují zde zvláštní URL pro AMP verze. Stránka prostě odkazuje sama na sebe. Přepokladem je, že jde o „AMP-only“ řešení, o kterém píšu později.

Jak vidíte, možností máte celou škálu. Dlouhodobě nejudržitelnější je podle mě třetí řešení. Ale volba sakramentsky závisí na tom zda a jak vaše šablona pro WordPress podporuje AMP. Být vámi, velmi se na to při její volbě dívám.

## Ukázky: BellaRose.cz nebo Dotekomanie.cz

*TODO*

## Výhody a nevýhody pluginů

Lesk pluginů může být jednoduchosti nasazení AMP. Bída pak znovu v té jednoduchosti: Viz třeba režim *Classic* u rozšíření pro WordPress, kde pro vás nebude snadné dosáhnout stejného vzhledu a funčnosti jako má váš plnohodnotný web.
