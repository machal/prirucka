# Zachování poměru stran v CSS: Metoda s pading-top nebo padding-bottom

Často se stává, že během načítání externích zdrojů stránky – jako jsou obrázky, video nebo obsah prvku `<iframe>` – potřebujeme držet [poměr stran](css-pomer-stran.md).

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=bi6Y6UqPEZU">Padding trik v CSS</a> ~ Padding trik a další techniky přehledně v krátkém videu.
</p>

Ze své podstaty se totiž načítají asynchronně, takže stránka může být vykreslená, uživatelka ji používá a ejhle… layout se jí překreslí, obsah se posune, protože prohlížeč stáhl externí médium.

<!-- AdSnippet -->

Problém se týká zejména těch médií, které chceme vkládat jako [pružná (responzivní)](pruzna-media.md), takže se přizpůsobují šířce rodiče.

Metod, jak problém vyřešit, je více, tady se zaměříme na tu nejčastější. Takzvaný „padding-bottom trik“.

Předpokládejme toto HTML:

```html
<p class="aspect-ratio-box aspect-ratio-box--16-9">
  <img class="aspect-ratio-box__in"
    src="obrazek.jpg" alt="…"
    width="320" height="180">
</p>
```

V CSS si objekt napíšeme podle [metodiky BEM](bem.md), že ano?

```css
.aspect-ratio-box {
  position: relative;
  height: 0;
  padding-bottom: 75%; /* Udává poměr stran */
}

.aspect-ratio-box__in {
  position: absolute;
  width: 100%;
  height: 100%;
}
```

„padding-bottom trik“ je v tom, že se svislý `padding` uváděný v procentech ze šířky elementu. Tím se dostaneme k potřebnému poměru stran, který jinak není v CSS snadné zajistit.

<!-- AdSnippet -->

Teď si to samozřejmě vysvětlíme detailně. Nejprve k rodičovskému prvku `aspect-ratio-box`:

- `position:relative` vytvoří nový omezující blok, ve kterém lze absolutně pozicovat.
- `height:0` výšku nulujeme proto, abychom ji mohli nastavit pomocí vnitřních okrajů prvku.
- `padding-bottom:75%` určí poměr stran rodičovského bloku. Poměr stran je zde 4:3. Výpočet pak vypadá jako `3 / 4 * 100`. Vyjde `75%`.

A co vnitřní prvek `aspect-ratio-box__in`?

- `position:absolute` nám umožní umísťování do prostoru relativně pozicovaného rodiče.
- `width:100%` a `height:100%` dokoná dílo tím, že zajistí, aby se potomek roztáhl do celé plochy nadřazeného elementu.

Možná jste si všimli, že v příkladu máme obrázek o rozměrech 320 × 180 pixelů, což naznačuje poměr stran 16:9, nikoliv 4:3. Vytvoříme si tedy ještě jednu modifikační třídu (podle BEM):

```css
.aspect-ratio-box--16-9 {
  padding-bottom: 56.25%; /* 16:9, tedy 9 / 16 * 100 */
}
```

Takových modifikačních tříd si samozřejmě pro daný web musíme vytvořit celou řadu – podle toho, jaké poměry stran externích médií v designu používáme.

CodePen: [cdpn.io/e/OJJZOGZ](https://codepen.io/machal/pen/OJJZOGZ?editors=1100)

Mohli bychom to uzavřít, ale zkušenější jistě napadne řada vylepšení, nebo ne?

## Poznámky a možná vylepšení {#poznamky}

- Čitelnější kód by neuváděl hotový výsledek, ale výpočet pomocí [funkce `calc()`](css3-calc.md). Zde by vypadal takto: `padding-bottom: calc(9 / 16 * 100)`.
- Můžeme si vytvořit [mixin v preprocesoru](https://www.vzhurudolu.cz/blog/13-css-preprocesory-2), které zápis zjednodušší.
- Někdo pro tyto účely používá „`padding-top` trik“, tedy odsazení sezhora, nikoliv zdola. Kromě [jediné drobnosti](https://www.facebook.com/groups/frontendisti/permalink/2301797503365094/?comment_id=2305102236367954) to je asi jedno.
- Pokud toto řešení nasadíte pro držení poměru stran při [lazy loadingu obrázků](lazy-loading-obrazku.md) a jiných médií, doporučuji v CSS definovat nějakou barvu pozadí nebo třeba jednoduchou animaci, aby bylo jasné, že v daném místě se odehrává stahování externího prvku.

<!-- AdSnippet -->
