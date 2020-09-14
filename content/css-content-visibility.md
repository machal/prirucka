# CSS vlastnost content-visibility

Už víme, že cílem CSS containmentu (a [vlastnosti `contain`](css-contain.md)) je umožnit vylepšení výkonu prohlížeče poskytnutím předvídatelné izolace části DOMu od zbytku stránky.

Vlastnost `content-visibility` je na tom postavená. Na rozdíl od `contain` ale umožňuje určit, zda prohlížeče vůbec vykreslí obsah dotčeného. Dovolí tak prohlížeči při počítání renderingu přeskočit náročné [fáze *layout* a *paint*](css-contain.md#typy).

Je to víceméně jako [lazy loading](lazy-loading.md) pro vykreslení velkých obsahových celků. Obvykle může vhodné použití `content-visibility` například vylepšit čas úvodního zpracování stránky tím, že přeskočí vykreslování obsahu mimo obrazovku.

## Hodnoty {#hodnoty}

<div class="rwd-scrollable f-6"  markdown="1">

| Hodnota      | Co dělá?                        |
|:-------------|:--------------------------------|
| `visible`    |  Bez efektu. Obsah elementu se vykreslí běžným způsobem. (Výchozí hodnota.)|
| `hidden`     |  Obsah elementu není vidět. Je to podobné jako `visibility:hidden`. Element není dosupný pro funkce jako najít na stránce, procházení tabulátory; nelze jej označit ani jinak zaměřit přes `:focus`.  |
| `auto`       |  Zapíná layout, style a paint containment. Na rozdíl od `hidden` jsou `auto` prvky stále k dispozici pro hledání, tabulátory i zaměření.  |

</div>  

Výchozí hodnota `visible` nás zase tak moc nezajímá. Pojďme si však něco říct o těch dalších dvou.

Dobře, prozradím to – nejzajímavější je hodnota `auto`, ale nejprve něco k té třetí vlastnosti.

## Hodnota hidden {#hodnota-hidden}

Deklaraci `content-visibility:hidden` použijte, když chcete, aby obsah nebyl vyrenderován bez ohledu na to, zda je nebo není na obrazovce. No a zároveň využívat výhody uložení stavu vykreslování v mezipaměti.

Nebyl vyrenderován, nebyl vyrenderován… počkat nemáme pro tohle v CSS už jiné vlastnosti?

### Srovnání s jinými typy schovávání {#hodnota-hidden-schovavani}

- `display:none`  
  Skryje prvek a zahodí jeho vykreslovací stav. To znamená, že skrytí prvku je z pohledu výkonu stejně drahé jako vykreslení nového prvku se stejným obsahem. `display:none` navíc neumožňuje na dotčeném obsahu realizovat akce typu vyhledání na stránce atd.
- `visibillity:hidden`  
  Skryje prvek a udržuje jeho vykreslovací stav. To skutečně neodstraní prvek z dokumentu, protože na něj lze stále kliknout. Aktualizuje také stav vykreslování, kdykoli je to třeba, i když je skrytý. Nicméně, potomci prvku s `visibility:hidden` si mohou kdykoliv nastavit `visibility:visible` a začít se zobrazovat, což v případě `content-visibility:hidden` nehrozí.  Prvky s `visibility:hidden` stále zabírají původní prostor na stránce, což prvek s `content-visibility:hidden` nedělá, šetří rendering díky containmentu. `content-visibility` navíc nepodléhá průběžnému přepočítávání layoutu. Prohlížeč musí spočítat vzhled prvku s `content-visibility` až v momentě, kdy jej potřebuje znovu zobrazit. Podle specifikace pro `content-visibility` platí, že pokud jsou jeho omezení přijatelná, může to být spolehlivější a konzistentnější způsob, jak skrýt obsah prvku než u `visibility`.

### Příklad použití content-visibility:hidden {#hodnota-hidden-priklad}

Chcete mít v DOMu připravený kus obsahu, který uživatel nevidí a zároveň už DOM není příliš složitý, takže není nutné jej načítat AJAXem?

Může se to týkat různých pohledů v JS aplikacích (SPA), zobrazování panelů záložek a tak dále.

Pokud byste použili přepínání `display:none`/`display:block`, prohlížeč musí pokaždé prvek znovu celý přepočítat pro vykreslování a nebude k dispozici například pro hledání nebo tabulátorovou navigaci. Pokud byste prvek umístili mimo obrazovku přes `position:absolute`, k dispozici pro tyhle akce bude, ale zase tyto prvky bude muset prohlížeč při každé změně ve stránce přepočítávat.

## Hodnota auto {#hodnota-auto}

Element, který má `content-visibility:auto` spouští [containment pro vykreslovací fáze *layout*, *style* a *paint*](css-contain.md#typy), takže může ušetřit docela dost výkonu.

Pokud je prvek mimo obrazovku (a není pro uživatele jinak relevantní - například tedy nemá fokus nebo není vybraný), získá také [*size* containment](css-contain.md#typy).

Pokud je na stránce velké množství obsahu, které bude často mimo obrazovku (například dlouhý rolovatelný seznam komplexnějších prvků), je v pořádku to na tento obsah aplikovat.

### Příklad s Twitterem {#hodnota-auto-twitter}

Ve [specifikaci](https://www.w3.org/TR/css-contain-2/#using-cv-auto) uvádějí příklad s Twitterem. Jednotlivé tweety jsou relativně komplexní prvky DOMu, které prohlížeč nemusí nutně vykreslovat, když jsou mimo viditelný [viewport](viewport.md).

Nebylo by v úplně pořádku aplikovat `content-visibility:auto` na celý rodičovský prvek pro tweety, ale na jednotlivé tweety se to naopak velmi hodí.

Připomeňme si ale, že `content-visibility:auto` zapíná *size* containment, takže prohlížeč prvkům nerezervuje prostor ve stránce.

Takto označeným prvkům ale nějak musíme nastavit alespoň odhadovanou výšku pro vykreslení, aby prohlížeč věděl, jaké rozměry mají mít rolovací lišty. K tomu slouží vlastnost `contain-intristic-size`.

## Vlastnost contain-intristic-size {#contain-intristic-size}

Vlastnost, která určuje přirozenou velikost prvku, pokud je prvek ovlivněn size containmentem.

To jsou právě prvky, které mají nastaveno `content-visibility:auto` a vyskytují se mimo viditelnou část stránky.

Prohlížeč je vynechá z renderování, ale nezná jejich velikost (chová se jako by měly `height:0`), což může při posunu stránky ovlivňovat právě například velikost rolovátek.

Deklarace vypadá takto:

```css
contain-intrinsic-size: <šířka> <výška>;
```

První hodnota definuje vnitřní šířku prvku, druhá vnitřní výšku. Pokud je druhá hodnota vynechána, bude výchozí výška nastavená na stejnou hodnotu jako je šířka.

Na výše uvedeném příkladu Twitteru si např. můžeme říct, že průměrný tweet je zhruba 200px vysoký a 500px široký:

```css
.tweet {
  contain-intrinsic-size: 500px 200px
}
```

## Příklady a testy {#testy}

Vlastnost prý může ušetřit desítky až stovky milisekund při počítání vykreslování stránky. [Una Kravets](https://web.dev/content-visibility/) udělala demo, kde je vidět sedmkrát méně času, spotřebovaného při renderingu. [Jan Šablatura](https://www.zdrojak.cz/clanky/content-visibility-jedna-css-vlastnost-vsem-rychle-vykresleni-kaze/) to vyzkoušel na webu českých Novinek a teoreticky by tam prý došlo k ušetření více než 40 % renderovacího času.

Moje testy takto dobře ovšem zdaleka nedopadly. Testoval jsem například onu homepage Novinek. Udělal jsem tři testy před a tři po nastazení `content-visilibity:auto` a výsledek je takový, že po nasazení jsou průměrné výsledky naopak horší. Podívejte se na [tabulku](https://docs.google.com/spreadsheets/d/16RrVQn2C6ILugZ0fTdj3yiV2btYPAgdJbqQ5Tp0-YDE/edit#gid=0).

Zde je metodika:

- Testuji `https://www.novinky.cz/` v Chrome DevTools, záložce Performance. Emuluji zařízení „Moto G4“ a nastavuji Network na „Fast 3G“, CPU na „4× slowdown“.
- Pomocí Local Overrides upravuji kód souboru `plum.min.css`. Obě verze testuji s Local Overrides, aby se neprojevilo zkreslení způsobené načtením stylů z lokálního adresáře. Ve verzi testů „před“ prostě jen deklaraci zakomentuji.
- Vybral jsem tři velké části skryté mimo obrazovku na mobilech a nastavuji `.n_h7, tpl-king-bottom-content, .n_iD { content-visibility: auto; }`.
- Ve výsledném profilu vybírám celou časovou osu, nikoliv předvolený výběr.

## Podpora v prohlížečích {#podpora}

Vlastnost `content-visibility` podporuje Chrome od verze 85. Přepodkládáme, že se to vztáhne na všechny prohlížeče založené na Chromiu, jako je Edge nebo Opera.

Firefox se jeví, že by vlastnost [rád naimplementoval](https://github.com/mozilla/standards-positions/issues/135). Safari se [neozývá](https://lists.webkit.org/pipermail/webkit-dev/2020-May/031217.html).

V tuto chvíli je pro nás ale podstatná podpora vlastnosti na pomalejších zařízeních, hlavně těch mobilních. A na těch běží právě Chrome. Z *nepodpory* v ostatních prohlížečích si tedy těžkou hlavu dělat nemusíme.
