# CSS !important

<!-- Obsah zatím jen přebrán z css-cascade-layers.md -->

## K čemu vlastně slouží `!important`?

Než budeme pokračovat, je potřeba udělat odbočku k další části kaskády.
Tou je [důležitost pravidel](css-kaskada.md#dulezitost) a klíčové slovo `!important`.

Tak schválně: k čemu `!important` v CSS máme?

Chvilku zkuste přemýšlet.

Zněla vaše odpověď ve stylu „je to velké kladivo, kterým přebíjíme hodnoty vlastností“?
Pak to byla pravda jen částečně.

Ve [specifikaci](https://www.w3.org/TR/css-cascade-5/#importance) se píše:

> Deklarace může být označena jako důležitá, což zvýší její váhu v kaskádě a obrátí pořadí priority.

Všimněte si toho „obrátí pořadí priority“.
To je velmi důležité.
Už bez kaskádových vrstev `!important` obrací pořadí platnosti původu (origin).

Standardně máme nejvýše uživatelské styly, pod nimi styly nás autorů a pod nimi styly prohlížeče.
Pokud by ve stylu prohlížeče bylo použito `!important`, pak se pořadí mění a tato deklarace je automaticky nejvýše.
Nepůjde ji tedy ničím přebít.

To samé funguje také u kaskádových vrstev. Deklarace, kde použijete `!important`, budou měnit pořadí.
