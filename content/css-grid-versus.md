# Grid v kontextu dalších systémů layoutu

Za dobu, co dělám weby, mě bylo dopřáno rozvržení stránky i jejich komponent realizovat mnoha způsoby. Ani jeden z nich ale pro layout určený nebyl:

* Rámce `<frame>` sice dělí stránku do menších částí, ale jinak nemají s implementací jejího rozvržení nic společného.
* Tabulky `<table>` jsou určené pro vykreslení tabulkového obsahu.
* Plovoucí prvky (vlastnosti `float` a `clear`) vznikly pro zajištění obtékání elementů textovým obsahem.
* Metoda „inline layoutu“ (vlastnost `display:inline-block`) slouží k možnosti vkládat blokové prvky (s definovaným rozměrem) do řádků textů.
* Techniky využívající pozicování lámou přes koleno vlastnost `position`, která slouží k umístění prvků mimo přirozený proud stránky.
* Layout je možné tvořit i pomocí vlastností `column`, ale ty jsou určené pro automatizaci vícesloupcové sazby textu, nikoliv jiná použití.

Jak vidíme, technik použitelných pro tvorbu layoutu máme v CSS více než dost. To ale neznamená, že bychom je pro tvorbu rozvržení měli používat. Každá z uvedených metod totiž pravděpodobně vyřeší jen některé z vašich problémů a navíc zavede problémy nové.

<!-- TODO obrázek: Palička vs. kladívko -->

Paličku na maso je totiž v případě nouze také možné využít k zatloukání hřebíků. Jen si musíte dát pozor na prsty, hřebíky i stěnu, protože ten nástroj vymysleli na úplně jinou práci.

Pokud máte vyřešené problémy s kompatibilitou Gridu (a v delší perspektivě v každém případě) by vašim cílem mělo být na všechny tyto metody prostě zapomenout.

Máte kladívko, takže paličkou dále už jen naklepávejte maso.

Jedinou další technikou, kterou můžete potřebovat, je flexbox. 

## Flexbox a Grid

Předně chci zdůraznit, že Grid nenahrazuje [flexbox](css3-flexbox.md). Potřebujete obojí. Naučte se obojí. Ale nějaké rozdíly zde jsou.

### Jednorozměrný flexbox, vícerozměrný Grid

Grid je byl navržen pro dvourozměrné layouty – po svislé i vodorovné ose. Flexbox se více hodí na rozvržení jednosměrná, ať už svislá nebo vodorovná.

Jakmile je váš layout víceřádkový a nevystačíte si s pouhým zalomením bez definice pravidel layoutu druhé řádky, je pravděpodobné, že potřebujete Grid.

### Flexbox je pro layout z obsahu, Grid více z mřížky

Grid je zaměřený více na „grid in“ layout, kdy se obsah musí vždy přizpůsobit mřížce.

Flexbox je super na „content out“ situace, kdy se layout musí přizpůsobit obsahu a vy nechcete nastavovat parametry layoutu.

Ne, že by Grid layout z obsahu neuměl, ale musíte si jej v každém případě nastavit. V případě flexboxu leccos pořeší automatika.

Pokud tedy chcete umístit pár prvků vedle sebe a není nutné jim definovat rozměry, volte flexbox. Pokud položkám flexboxu složitě nastavujete rozměry, pak asi potřebujete Grid.

### Kompatibilita s Internet Explorerem je silná stránka flexboxu

Flexbox ja takřka plně podporován Internet Explorery 10 i 11. 

Grid v těchto prohlížečích podporu má, jenže s velkým „ale“. I s pomocí nástroje Autoprefixer vám tam budou fungovat spíše jen základní vlastnosti.

Pokud nutně potřebujete obsloužit i uživatele těchto prohlížečů a není možné zajistit fallback k řešení v Gridu, pak může flexbox vaše problémy řešit.

<!-- TODO aktuální rozšíření IE -->

### A co další vlastnosti?

Je dobré si uvědomit, že velkou část vlastností mají CSS Grid s flexboxem společné nebo podobné:

* Všechny vlastnosti pro zarovnávání ve svislém a vodorovném směru.
* Flexibilní jednotky (Grid `fr`, flexbox čísla ve vlastnosti `flex-basis`).


Našli bychom toho více. Platí ale, že Grid tyhle vlastnosti pokrývá více ze do hloubky a je celkově robustnější.

### Srovnání flexboxu a gridu

|   Vlastnost              |   Flexbox   |   Grid   |
|:-------------------------|:-----------:|:--------:|
|   Jednorozměrný layout   |       +     |     +    |
|   Dvojrozměrný layout    |             |     +    |
|   Layout z obsahu        |       +     |     ?    |
|   Layout z mřížky        |             |     +    |
|   Kompatibilita v IE     |       +     |     ?    |

Celá problematika je složitější. Doporučuji vám naučit se flexbox i Grid.

Ale pokusím se to za cenu jistého zjendodušení shrnout do rozcestníku: 

Pokud nemusíte podporovat Internet Explorer, jako výchozí způsob nastavování layout volte vždy Grid. Flexbox vytáhněte pro jednodušší zarovnání dvou menších prvků vedle sebe.

Pokud řešíte podporu MSIE, pak si přečtete můj text o zprovoznění základních vlastností Gridu v tomto prohlížeči. Nestačí vám? Pak jako náhradu používejte flexbox.
