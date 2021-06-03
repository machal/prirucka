# Krkavčí technika

Zde si rozebereme „The Raven Technique“ popsanou Mathiasem Hülsbuschem na CSS-Tricks v roce 2020. Jde o alternativu k žádaným [Container Queries](container-queries.md), které v ale době psaní nemají podporu v prohlížečích.

Její výhodou je podpora ve všech moderních prohlížečích. Nevýhodou je krkolomnost. Zkuste sedmkrát za sebou říct „krkolomný krkavec“. Přesně tak jsem si připadal, když jsem o té technice četl poprvé.

Posuďte to sami z ukázky kódu:

```css
.item {
width: --dyn_length: calc(
    min(var(--is_wide) * var(--very_big_int), var(--length_4_wide)) 
    + min(var(--is_medium) * var(--very_big_int), var(--length_4_medium))
    + min(var(--is_small)  * var(--very_big_int), var(--length_4_small))
  );
}
```

Ale nechci to úplně shazovat. Pokud něco jako podmínku `@container` na vašem projektu zoufale potřebujete a podpora v prohlížečích zatím pořád neexistuje, věnujte mi ještě chvíli pozornosti.

Havraní technika je založená na matematických funkcích a dalších novinkách v CSS:

- [Funkce `calc()`](css3-calc.md) umožní vložit namísto hodnoty matematický výraz.
- Funkce `min()` a `max()` asi mají zjevný význam – vracení nejnižší, respektive nejvyšší hodnotu ze všech uvedených v argumentech.
- Funkce `clamp()` je kombinací `min()` a `max()` pro tříčiselné hodnoty.
- [Proměnné v CSS](css-promenne.md) jako `--color:blue` zase umožňují udržovat a měnit hodnoty výpočtu, podobně jako v programovacích jazycích.

V prvním kroku krkavčí techniky si definujeme proměnné se šířkou a s body zlomu layoutu:

```css
.breakpoints_1 {
  /* Základní šířka rodiče: */
  --base_size: 100%;
  /* Breakpointy: */
  --breakpoint_wide: 1000px;
  --breakpoint_medium: 500px;
}
```  

Dále definujeme šířky prvků pro tři rozmezí, která vznikla definicí breakpointů:

```css
/* Šířka elementů: */
.breakpoints_1 {
  --length_4_small: calc((100% / 1) - 10px);
  --length_4_medium: calc((100% / 3) - 10px);
  --length_4_wide: calc((100% / 4) - 10px);
}
```  

Asi je zřetelné, že na nejmenších viewportech (`--length_4_small`) zabere celou šířku jeden boxík (`calc((100% / 1)`), zatímco největších už budou vedle sebe čtyři (`calc((100% / 4)`).

Magie probíhá v následujícím kroku. Tady pomocí matematických funkcí plníme proměnné, které indikují, na jakém breakpointu se aktuálně nalézáme:

```css
.container {
  --is_wide: clamp(0px,(var(--base_size) - var(--breakpoint_wide)),1px);
}  
```

Proměnná `--is_wide` vrací `1px` pokud je `--base_size` větší než `--breakpoint_wide`. Představte si to `1px` jako `true`. V opačném případě vrací `0px` jako false.

V `--base_size` máme uloženou hodnotu `100%`, což je ale skutečná šířka rodičovského prvku. Už chápete?

Podobné to bude pro hodnoty `--is_medium` a `--is_small`.

Proměnné indikující breakpoint můžeme nakrásně využít v dalším kroku, kde nastavujeme šířku pro konkrétní prvky v layoutu:

```css
.item {
  width: calc(
    (var(--is_small)  * 100) 
  + (var(--is_medium) * 200) 
  + (var(--is_wide)   * 500) 
  );
}
```

Pokud bude například aktivní proměnná `--is_medium`, vyjde nám zde `200px` (`0px*100 + 1px*200 + 0px*500`).

To by mohlo pro pochopení základního pricipu The Raven Technique stačit. Je to samozřejmě ještě trochu složitější, sami jste to viděli z úvodní ukázky kódu.

Ale zkušenější to jiště ocení a je fajn, že jsme si udělali výlet do pokročilejších vlastností CSS.

CodePen: [cdpn.io/e/QWpqJjJ](https://codepen.io/machal/pen/QWpqJjJ?editors=1100)

Zájemci o více informací, mrkněte se na celý článek „The Raven Technique: One Step Closer to Container Queries“. [vrdl.in/raven](https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/)
