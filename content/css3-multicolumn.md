CSS3 Multi-column Layout: vícesloupcová sazba textu
===================================================

Díky tomuto modulu text snadno nasázíte do více sloupců definované šířky podobně jako v novinové sazbě.

Modul sestává z několika vlastností:

```css
column-width: _sirka_sloupce_;
column-count: _pocet_sloupcu_;
column-gap: _sirka_odsazeni_mezi_sloupci_;
column-rule: _vlastnosti_cary_mezi_sloupci_;
```

Kromě „novinové“ sazby textu se hodí také na položky seznamu. Třeba náhledy obrázků ve fotogalerii nebo položky e-shopu.

Příklad k vyzkoušení
--------------------

Definujeme šířku sloupce pomocí `column-width: 15em` a šířku odsazení mezi sloupci v deklaraci `column-gap: 2em`.

V příkladu je i ukázka oddělovací čáry mezi sloupci – `column-rule: 1px dotted #ddd`.

Když si zmenšíte okno prohlížeče a nezbude dost místa pro více sloupců vedle sebe, prohlížeč sám od vícesloupcové sazby upustí.

Příklad vyzkoušejte na [cdpn.io/e/ohLgJ](https://cdpn.io/e/ohLgJ).


Podpora v prohlížečích
----------------------

IE10+. Starší prohlížeče doporučuji řešit tvrdým fallbackem – text se tam prostě jen nezalomí do sloupců.
