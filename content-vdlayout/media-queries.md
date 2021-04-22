# Media Queries

Media Queries, dotazy na média, jsou tady s námi od doby, kdy webdesignovém světu zavládly mobily. Jde o základní stavební kámen responzivního designu, takže při stavění CSS layoutů bez nich nestvoříme ani boudu pro psa.

Dovolím si zde shrnout úplné základy, pro případ, že knihu čtete a v Media Queries plavete. Vy zkušenější, kteří nestojíte o zopakování tématu, můžete úvodní část s čistým svědomím přeskočit, a rovnou jít na  část „Limity Media Qeuries“.

Pojďme na ten základní stavební kámen. Media Queries jsou podmínky, které umožňují aplikovat různá CSS pravidla v různých technických kontextech.

## Příklad

Vezměme toto triviální HTML:

```html
<h1>This is heading</h1>
```

V CSS pak nadpisu nastavíme velikost písma a podmínku:

```css
h1 { font-size: 2em }

@media (max-width: 40em) {
  h1 { font-size: 1.5em }
}
```

Možná i začátečníci už poznali, co se zde děje:

- Klíčové slovo `@media` oznamuje, že následuje dotaz na média.
- Podmínka `(max-width:40em)` říká, že vložený kód se má aplikovat jen pro šířky okna do `40em`, což je zde obvykle 640 pixelů. (40 × 16, při výchozí velikosti písma v dokumentu, není-li nastaveno jinak)
- V podmínce nadpisu nastavujeme jinou velikost písma `font-size:1.5em`. Pokud jste si to už nespočítali, půjde o 24 pixelů (16 × 1,5).

Zájemci se na to mohou ještě mrknout živě v CodePenu.

CodePen: [cdpn.io/e/Bpajbz](https://codepen.io/machal/pen/Bpajbz)

## Různé typy dotazů

Kromě maximální šířky se samozřejmě můžeme ptát i na minimum:

```css
@media (min-width: 40em) { 
  /* Aplikuje se pro šířku viewportu od 40em */ 
}
```

Můžeme se ptát na výšku:

```css
@media (max-height: 800px) { 
  /* Aplikuje se pro výšku viewportu do 800px */ 
}
```

(Ano, uvnitř dotazu je možné používat jakoukoliv jednotku, ale `em` nebo `px` jsou nejpraktičtější.)

Můžeme také detekovat typ média:

```css
@media screen { 
  /* Aplikuje se jen pro obrazovky,  
     ne například v tisku
  */ 
}
```

Můžeme podmínky kombinovat pomocí logického „a zároveň“:

```css
@media screen 
  and (min-width: 30em) 
  and (max-width: 40em) {  
  /* Aplikuje se jen na viewport 
     obrazovky mezi 30 a 40 em
  */
}
```

Můžeme aplikovat logické „nebo“, a to pomocí čárky:

```css
@media screen and (max-width: 40em), 
  print {
  /* Aplikuje na obrazovky od šířky 
     viewportu 40 em nebo v tisku
  */ 
}
```

Můžeme detekovat poměr stran viewportu:

```css
@media (aspect-ratio: 16/9) {
  /* Aplikuje se v poměru stran 16:9 */
}
```

Můžeme zjišťovat orientaci viewportu:

```css
@media (orientation: portrait) {
  /* „Na výšku“, šířka je užší než výšky */
}
```

Můžeme detekovat hustotu pixelů na obrazovce:

```css
@media (min-resolution: 2dppx) {
  /* Aplikuje se na vysokokapacitní displeje typu „Retina“ */
}
```

Ještě se ale čistě obecně pozastavme u složení jednotlivých částí každého dotazu na médium.

## Anatomie Media Query

Dotaz na medium (anglicky *media query*) se skládá z typu média (*media type*, výchozí je `all`) a podmínky obsahující vlastnosti média (*media features*) s hodnotou nebo rozmezím hodnot.

<figure>
<img src="../dist/images/original/media-query.jpg" alt="">
<figcaption markdown="1">
*Anatomie Media Query.*
</figcaption>
</figure>

V téhle podkapitole se snažím být velmi stručný, protože předpokládám, že většina čtenářů už nějakou zkušenost s dotazy na média má.

## Chcete vědět více?

Ovládnutí dotazů na média je skutečně zcela nepostradatelná dovednost, každý profesionální webový vývojář i webová vývojářka píše Media Queries skoro denně.

Proto zde nabízím odkazy na další zdroje, pokud by vám tento rychlý úvod nestačil.

- Stránka o Media Queries na Vzhůru dolů: [vrdl.cz/p/css3-media-queries](https://www.vzhurudolu.cz/prirucka/css3-media-queries).
- Jak v responzivní layoutu dělat breakpointy, body zlomu: [vrdl.cz/p/breakpointy](https://www.vzhurudolu.cz/prirucka/breakpointy).
- Jak breakpointy řešit technicky: [vrdl.cz/p/breakpointy-css](https://www.vzhurudolu.cz/prirucka/breakpointy-css).
- Celý e-book o responzivním designu. Prý je docela dobrý, říkali to lidi. [vrdl.cz/kniha-responzivni-design](https://www.vzhurudolu.cz/kniha-responzivni-design)

V tomto bodě začnu předpokládat, že o Media Queries už něco víte a společně se tedy pustíme do jejich používání.

## Příklad: Media Object

„Media Object“ je ve webdesignu velmi populární komponenta. Tak populární, že se bez ní nemůže obejít žádná knížka. A pokud jde o knížku o layoutu v CSS, tím tuplem ne.

<figure>
<img src="../dist/images/original/vdlayout/media-object-mq.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
„Ahoj, já jsem Media Object a teď vás budu trochu trápit.“
</figcaption>
</figure>

V „objektu s médiem“ jsou tři základní prvky – obrázek (nebo jiné médium), nadpis a text. Na téhle komponentě sbírají webaři své responzivní ostruhy, je to krásný případ použití Media Queries.

I my si je zde vyzkoušíme. Pokud se podle knížky učíte, zkuste si objekt nakódovat podle výše uvedeného obrázku. Vám, kteří raději čtete, to teď jdu sepsat.

V prvé řadě potřebujeme nějaké HTML. Zjednodušeně vypadá takto:

```html
<div class="container">
  <div class="item">
    <p class="item__image">
      <img src="…" alt="…" width="300" height="300">
    </p>
    <div class="item__text">
      <h2>
        <a href="#">Nezůstane by péče položená…</a>
      </h2>  
      <p>
         David franků pozadí ty narozen žádná…
      </p>
    </div>
  </div> 
</div>
```

Základní CSS bez rozvržení vypadá také vcelku jednoduše:

```css
/* Barvy a odsazení: */

body {
  background: lightgrey;
}

.container {
  padding: 1em;
  margin: 2em;
  max-width: 50em;
  background: white;
}

.item__text, 
.item__image {
  padding: 1em;
}

/* Typografie: */

p, h2 {
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

/* Pružnost obrázku: */

img {
  height: auto;
  max-width: 100%;
}
```

Vzhledem k přirozenosti všech prvků – jako blokové elementy (`display:block`) se vyskládají pod sebe – máme takto hotové rozvržení pro menší displeje, řekněme mobily.

Na pivo však ještě jít nemůžeme. Musíme nějak vymyslet rozvržení pro širší displeje, nějak se propracovat k layoutu objektu s médii, který jsem vám ukázal na obrázku výše.

Navrhuji to pojmout [flexboxem](css-flexbox.md) takto:

```css
.item {
  display: flex;
}

.item__image {
  flex: 1;
}

.item__text {
  flex: 2;
}
```

Vysvětlení:

- `display:flex` nám zajistí umístění prvků vedle sebe a jejich flexibilitu vycházející z obsahu.
- V zápisu `flex:1` nebo `flex:2` používám [zkratku `flex`](css-flex.md). V případě, že v ní mám jen jednu hodnotu bez jednotky, říkám tím prohlížeči, aby šířku rozdělil podle uvedených čísel, bez ohledu na skutečnou šířku obsahu prvků. To je přesně to, co zde potřebuji.

Vy, kteří jste mezitím kódovali vlastní variantu, řekněte mi, dopracovali jste se ke stejnému zápisu?

Vsadím své ošoupané kodérské tenisky, že většina z vás ne. Možných řešení je dlouhá řada a určitě zde jsou i řešení lepší než to moje. Já se zde snažil hlavně o jednoduchost zápisu proto, abychom si mohli ukázat to, co nám zde chybí.

A chybí nám zde Media Queries:

```css
@media (min-width: 428px) {

  .item {
    display: flex;
  }

  .item__image {
    flex: 1;
  }

  .item__text {
    flex: 2;
  }
  
}  
```

Zopakujme si, že zápisem `@media` vytvářím podmínku, platící na určitém médiu. V tomto případě na šířce viewportu, proto `min-width`. Deklarace uvnitř CSS prohlížeč aplikuje jen od určité šířky. Čárymáryfuk a je tu vodorovné rozvržení našeho objektu.

A co to číslo `428px`? To by bylo na dlouhé povídání. A taky že bude. Vždyť k němu celou dobu trpělivě směřuji.

## Limity Media Qeuries

Tvorba breakpointů (bodů zlomu) je samostatné téma, ostatně odkázal jsem vás výše na docela dlouhý text, kde vás s ním můžu potrápit, chcete-li. Pojďme si ale ukázat, jak konkrétně jsem zde uvažoval:

1. Chtěl bych, aby vodorovný layout naskočil nejdříve v momentě, kdy obrázek dosáhne svých maximálních rozměrů. Řekněme, že v tomto případě jsem jej připravil tak, aby se v prohlížeči mohli zobrazovat až do šířky 300 pixelů. Proč ale v Media Query není číslo `300px`?
2. Dotazy na media se vztahují k šířce viewportu, k šířce plochy, kterou má prohlížeč k dispozici. Jak uvidíte na obrázku níže, mezi okrajem viewportu a okrajem obrázku jsou ještě další prvky, které také mají své rozměry.
3. Pojďme ty prvky spočítat: Obal `.container` má vnější i vnitřní okraj (`margin` i `padding`) o celkové šířce `3em`. Jedno `em` je vždy `16px`, pokud jej nenastavíme jinak. Dále je zde vnitřní okraj `1em` u prvků `.item__text` a `.item__image`. Celkem tedy 4 krát 16, to je 64 a ještě krát 2, protože musíme vzít v úvahu obě strany. Vychází nám 128. Přidáme šířku obrázku a vyjde nám 428 pixelů.

<figure>
<img src="../dist/images/original/vdlayout/media-object-mq-rozmery.png" width="1600" height="900" alt="…">
<figcaption markdown="1">
To je samý margin a padding. Kdo pak má ty Media Queries počítat?!
</figcaption>
</figure>

Trápím vás tou matematikou úmyslně. Chci, abyste si prožili problémy, které při tvorbě současných layoutů máme.

Media Queries jsou totiž v zaměřené na parametry celé stránky, respektive viewportu prohlížeče. Pro rozvržení celé stránky jsou skvělé. Jenže my se zde snažíme vymyslet layout komponenty, tedy malého výseku stránky.

Počítání okrajů mezi samotnou komponentou a stránkou je jen ta menší část problému. Představte si, že byste byli nuceni správným breakpoint vymýšlet v situaci, kdy objekt bude součástí většího layoutu. Někdy se bude na stránce vyskytovat sám, někdy budou dva vedle sebe, někdy třeba tři…

Už chápete limity věci zvané Media Qeuries?
