# Pruda s prefixovanými vlastnostmi

Výrobci prohlížečů v posledních letech často implementují vlastnosti, které nemají hotovou standardizační proceduru. Je to tedy zkušební, prototypová implementace. Aby ji odlišili od finální implementace, zavedli *vendor prefixy*.

Prefixované vlastnosti dnes už naštěstí nemusíte používat tak často jako před rokem či dvěma.

Pokud například chcete deklarovat CSS transformaci tak, aby ji aplikovaly všechny prohlížeče, musíte ji napsat hned několikrát:

```css
.box {
  /* Chrome, Safari 3.1+: */
  -webkit-transform: rotate(7.5deg);
  /* Firefox 3.5-15: */
  -moz-transform: rotate(7.5deg);
  /* IE 9 */
  -ms-transform: rotate(7.5deg);
  /* Opera 10.50-12.00 */
  -o-transform: rotate(7.5deg);
  /* FF 16+, IE 10+, Op 12.10+, Ch 36+ */
  transform: rotate(7.5deg);
}
```

Pokud v ukázce vynecháme verze prohlížečů s minimálním podílem na trhu, můžete vynechat `-moz`, `-o` a někdy i `-ms` variantu. Je ale lepší uvažování o tom, které prefixy u dané verze vypsat, nechat na nějakém nástroji.

Aby se prefixované vlastnosti nemusely zapisovat ručně, používaly se knihovny pro CSS preprocesory jako třeba LESShat nebo Compass.

## Autoprefixer

Dnes se problém řeší daleko elegantněji pomocí Autoprefixeru – [github.com/postcss/autoprefixer](http://github.com/postcss/autoprefixer).

CSS kód píšete tak, jako by všechny prohlížeče uměly standardizovanou nebo standardizující se syntaxi – `transform: rotate(7.5deg)`. Protože se Autoprefixer vyskytuje jako plugin do populárních sestavovacích nástrojů, jako je Grunt či Gulp, do vašeho kódu přidá prefixy pro prohlížeče, jejichž podporu řešíte.

