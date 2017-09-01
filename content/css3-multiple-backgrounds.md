CSS3 Multiple Backgrounds: více obrázků na pozadí
=================================================

Vrstvení více obrázků nebo barev na pozadí jednoho elementu.

Není to přímo CSS3 vlastnost, jen nová možnost již existující vlastnosti `background`.

Syntaxe? Je to snadné, vrstvy oddělujeme čárkou:

```css
background:
  url('obrazek_nahore.png'),
  url('obrazek_uprostred.png'),
  #ddccaa;
```

Pozadí před první čárkou je vždy vrstva nejvíc nahoře.

Pokud nepoužijeme shorthand `background`, deklarace dalších vlastností obrázku na pozadí se pro jednotlivé vrstvy rovněž oddělují čárkou:

```css
background-image:
	url('obrazek.png'),
	url('dalsi_obrazek.png');
background-repeat:
	no-repeat,
	repeat;
```

Příklad k vyzkoušení
--------------------

Nezapomeňte, že obrázkem může být i [CSS3 gradient](css3-gradients.md) s poloprůhledným pozadím. Toho lze využít pro efekt postupného překrytí obrázku, i když neznáte výšku elementu:

```css
background:
  linear-gradient(180deg, transparent 0%, #333 100%),
  url('bg.jpg');
```

Naživo zkoušejte na [cdpn.io/e/lvKkC](https://cdpn.io/e/lvKkC).


Podpora v prohlížečích
----------------------

IE9+. Pozor, vlastnost `background` s vícenásobnou hodnotou je ignorována, pokud ji prohlížeč neumí. Pro starší prohlížeče jako IE8 vždy musíte definovat fallback. Například:

```css
background: #ddccaa;
background:
  url('obrazek_nahore.png'),
  url('obrazek_uprostred.png'),
  #ddccaa;
```
