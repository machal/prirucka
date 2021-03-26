# Autoprefixer

Autoprefixer je, jak z názvu vyplývá, automatizační nástroj, který přidává [prohlížečové prefixy](prefix.md) do CSS kódu.

Například z tohoto kódu:

```css
.box {
  hyphens: auto;
}
```

…udělá tento kód:

```css
.box {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

Tím pádem budou kódu rozumět všechny prohlížeče, i když vlastnost `hyphens` neznají a podporují jen prefixované varianty.

## Jak Autoprefixer funguje?

Autoprefixer je balíček, který si můžete do projektu nainstalovat jako plugin pro PostCSS.

PostCSS slouží ke automatickému zpracovávání CSS kódu.

Používat Autoprefixer můžete mnoha různými způsoby, o těch bude další část textu.

## Použití Autoprefixeru

### Online

Pokud si chcete jen hrát nebo přidat pár prefixů, využijte online pískoviště. [autoprefixer.github.io](https://autoprefixer.github.io/)


