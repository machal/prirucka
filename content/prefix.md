CSS prefixy
===========

Předpony experimentálních implementací CSS vlastností od výrobců prohlížečů. 

Nebo také podivná věc, která nás nutí duplikovat CSS kód. Dnes už prefixy nepáchají tak moc komplikací, ale kvůli novým vlastnostem jako je [flexbox](css-flexbox.md) si s nimi nějak poradit musíme.

Pojďme si to ukázat na příkladu. [CSS3 transformaci](css3-transforms.md) otočením bychom v době největší slávy prefixů měli zapsat takhle:

```css
.box {
  /* Chrome, Safari 3.1+: */
  -webkit-transform: rotate(7.5deg);
  /* Firefox 3.5-15: */
  -moz-transform: rotate(7.5deg);
  /* IE 9: */
  -ms-transform: rotate(7.5deg);
  /* Opera 10.50-12.00: */
  -o-transform: rotate(7.5deg);
  /* Firefox 16+, IE 10+, Opera 12.10+: */
  transform: rotate(7.5deg);
}
```

Dnes už to tak složité není. Podívejte se ostatně na web „Should I Prefix“, který skladuje aktuální potřebu prefixů pro jednotlivé vlastnosti stylů. [shouldiprefix.com](http://shouldiprefix.com/)

Na posledním místě by měla být neprefixovaná a tedy standardní verze zápisu. I v situaci, kdy ji aktuální verze prohlížečů nepodporují a je pravděpodobné, že jednou budou. Bezprefixová implementace bude totiž lepší než prefixová. I proto je nutné ji mít na závěr, přebíjí tu starší a horší, pokud se v některé verzi prohlížeče vyskytují obě najednou.

Typy prefixů
------------

Říká se jim občas „vendor prefixy“. Vendor je dodavatel software, v tomto případě jádra prohlížeče.

* `-webkit`. Prohlížečové jádro Webkit v tuhle chvíli používá Safari včetně iOS verze a některé menší prohlížeče. Dříve také Google Chrome a od verze 15 i Opery. Poslední dva jmenovaní ovšem odešli k vlastnímu jádru Blink.
* `-moz`. Gecko je jádro všech verzí Firefoxu.
* Prefix `-ms` používá hádejte kdo… Microsoft, přeci.
* Prefix `-o` se vztahuje k aktuálně již neexistujícímu jádru Opery jménem Presto.


Minulost a budoucnost prefixů
-----------------------------

Výrobci prohlížečů jsou v posledních letech docela horliví při implementaci nových vlastností z HTML5 a nových verzí CSS. Implementují pak i vlastnosti, které W3C zatím neposlalo do finálních fází procesu standardizace. 

Implementují tedy něco, co nemá hotový standard. Je to tedy zkušební, prototypová implementace. Aby ji odlišili od finální implementace, zavedli vendor prefixy. Detailně proces vzniku prefixů kdysi hezky popsal Martin Hassman. [vrdl.in/i4s8m](https://blog.root.cz/met/k-cemu-jsou-v-css-potreba-vendor-prefixy/)

Během roku 2016 ovšem vyvrcholila snaha výrobců prohlížečů a tvůrců standardů o nový přístup. Standardy se už nějakou dobu vyvíjejí v menších modulech, takže jdou vpřed rychleji. Z toho kromě jiného vyplývá, že prefixy přestávají být potřeba.

Nové vlastnosti teď výrobci prohlížečů přidávají pod „vlaječky“ (flags), skrytá nastavení. Můžete si je snadno zkusit otevřením `chrome:flags` v Chrome nebo třeba `about:config` ve Firefoxu. Bližší vysvětlení přechodu od prefixů k vlaječkám je na Mozilla Developer Network.
[vrdl.in/akgm5](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)

Jak si s prefixy poradit? Autoprefixerem
----------------------------------------

[Autoprefixer](autoprefixer.md) je nástroj, kterému řeknete jaké prohlížeče chcete podporovat. On se pak podívá do vašeho CSS kódu a doplní prefixy. Nejlépe se používá automaticky, v kombinaci [s Gruntem](grunt.md) nebo podobným nástrojem. [github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)

Alternativně je možné prefixy nechat doplňovat editorem kódu nebo CSS preprocesorem. To je ale postrádá kouzlo Autoprefixeru, který sám aktualizuje databázi prefixů podle jejich aktuální podpory v prohlížečích.
