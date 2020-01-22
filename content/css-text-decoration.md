# Rodina vlastností text-decoration v CSS

Když se pustíte do studia dříve jednoduchých vlastností v CSS, můžete být překvapení jejich robustností (nebo pro někoho také přílišnou složitostí). To se mě stalo právě teď u vlastnosti `text-decoration`.

Pojďme to vzít ovšem čistě pragmaticky, jako příručku této rodiny vlastností.

## Rychlý příklad

## Seznam vlastností

Ano, v rodině vlastností `text-decoration` jde hlavně o pouhé podtrhávání odkazů, ale celá rodina slouží pro všechny možné dekorace písma – užitečná je například také pro autory různých textových editorů. Však uvidíte.

Nejprve ale ty vlastnosti

- [`text-decoration`](#text-decoration)
- [`text-decoration-line`](#text-decoration-line)
- [`text-decoration-style`](#text-decoration-style)
- [`text-decoration-color`](#text-decoration-color)
- [`text-decoration-skip-ink`](#text-decoration-skip-ink)
- [`text-underline-position`](#text-underline-position)
- [`text-underline-offset`](#text-underline-offset)
- [`text-decoration-width` &amp; `text-decoration-thickness`](#text-decoration-width)

### `text-decoration` – hlavní zkratka (a hlavní problém) {#text-decoration}

Vlastnost, která je zkratkou pro následující tři vlastnosti, přičemž uvést můžeme libovolný počet z nich:

```css
text-decoration:
  <'text-decoration-line'> ||
  <'text-decoration-style'> ||
  <'text-decoration-color'>
```  

Například:

```css
/* Linka zezdola: */
text-decoration: underline;

/* Tečkovaná linka zezdola: */
text-decoration: dotted underline;

/* Nic, protože nedefinujeme text-decoration-line: */
text-decoration: dotted;
```

Na tomhle místě se hodí říct, že specifikace má jednu dokončenou úroveň (všem dobřo známé [CSS2](https://www.w3.org/TR/CSS2/text.html#lining-striking-props)) a zároveň dvě v návrhu či implementaci rozpracované aktualizace v podobě [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/) a [CSS Text Decoration Module Level 4](https://www.w3.org/TR/css-text-decor-4/).

No a mezi CSS „dvojkou“ a novými moduly je rozdíl v pojetí zápisu `text-decoration`. Původně šlo o běžnou vlastnost, nyní je to zkratka více vlastností.

Liší se tedy implementace v prohlížečích. Zatímco Chrome (a z něj odvozené prohlížeče) a Firefox berou `text-decoration` „po novu“ jako zkratku, Safari a Explorer „po staru“ jako samostatnou vlastnost.

Takže, pokud bychom chtěli udělat zelené tečkované podtržení odkazů jinak než obvyklým ale nesprávným trikem s vlastností `border`, takhle to fungovat nebude:

```css
.shorthand a {
  text-decoration: dotted green underline;
}
```

V Exploreru s ním nic nenaděláme (což vadí stále méně), ale v Safari to můžeme ještě zachránit uvedením jednotlivých vlastností:

```css
.individuals a {
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: green;
}
```

CodePen: [cdpn.io/e/abzPKNB](https://codepen.io/machal/pen/abzPKNB)

Hlavní problém bychom tedy měli umět vyřešit. Pojďme se ještě podívat na jednotlivé vlastnosti.

<!-- 

### `text-decoration-line` – typ dekorační linky {#text-decoration-line}
### `text-decoration-style` – styl linky {#text-decoration-style}
### `text-decoration-color` – barva dekorace {#text-decoration-color}
### `text-decoration-skip-ink` – zamezení křížení linek {#text-decoration-skip-ink}
### `text-underline-position` – pozice dekorační linky {#text-underline-position}
### `text-underline-offset` – posun dekorace {#text-underline-offset}
### `text-decoration-width` &amp; `text-decoration-thickness` – tučnost dekorační linky {#text-decoration-width}





* text-decoration-line
    * none | [ underline || overline || line-through || blink ]
    * jaký typ linky bude přidán k textu
    * blink je deprecated
    * je možné jich použít více: text-decoration-line: underline overline
* text-decoration-style
    * solid | double | dotted | dashed | wavy
    * styl dekorace textu
    * používá se jen jedna a jen v případě, že je definovaná nějaká text-decoration-line
    * wavy např. u zvýrazňování chyb ve slovech
* text-decoration-color
    * currentcolor nebo jakákoliv barva
    * barva, kterou se označuje
    * v level 3+ je to zkratka tří vlastností
    * TODO demo s fallbackem na IE https://www.w3.org/TR/css-text-decor-3/#text-decoration-property
* text-decoration-skip-ink
    * pokud je povolená, dekorační linka nepřerušuje 
    * auto | none
    * původně jako text-decoration-skip, ale ze specifikace je tato vlastnost odstraňována - bude rozdělená na více pod-vlastností
* text-underline-position
    * auto | [ under || [ left | right ] ]
    * left/right se týká asijských jazyků, které se zapisují vertikálně (čínština, japonština, korejština…)
    * pro nás je zajímavá hodnota under, která zajistí vykreslení pod dolní dotažnice (to, co přečuhuje dolů u písmen jako p, y nebo j)
    * ve specifikaci je doporučení použít to v matemetických nebo chemických textech, aby dekorační linka nerušila čísla na spodních indexech — TODO příklad
* text-underline-offset
    * posun od původní pozice
    * chová se různě podle text-underline-position
    * auto | <šířka>
    * <šířka> je doporučovaná v em, aby škálovala s velikostí textu
* CodePen: všechny vlastnosti
* ATD
    * Level 3, Level 4
    * pořadí vykreslení (bottommost first):
        * shadows (text-shadow)
        * underlines (text-decoration)
        * overlines (text-decoration)
        * text
        * emphasis marks (text-emphasis)
        * line-through (text-decoration)
    * text-emphasis
        * užitečné pro východoasijské jazyky, proto vynecháme
        * vlastnosti text-emphasis-style, text-emphasis-color, text-emphasis-postion a zkratka text-emphasis
        * TODO obrázek 
    * text-decoration-width
        * tloušťka dekorační linky
        * auto | <šířka>
        * <šířka> je doporučovaná v em, aby škálovala s velikostí textu

 -->
