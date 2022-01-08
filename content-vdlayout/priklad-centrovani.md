# Centrování boxu

Zatímco na vyrovnání textu na střed s pomocí CSS nic složitého není, při centrování prvků layoutu jsme se ve stylech dlouho drbali levou nohou za pravým uchem. Před příchodem flexboxu a gridu to nic příjemného nebylo.

V tomto jednoduchém příkladu otevřeme bránu do světa zarovnávání boxů, který má na starosti [CSS Box Alignment Module](css-box-alignment.md).

Cílem je to, co vidíte na obrázku. Boxík, který ve viditelné ploše obrazovky zůstane vycentrovaný vodorovně i svisle, i když se jeho obsah změní.

<figure>
<img src="../dist/images/original/vdlayout/priklad-centrovani.png" width="1600" height="900" alt="Centrování boxu na výšku i šířku">
<figcaption markdown="1">
*Centruj, centruj, vykrúcaj!*
</figcaption>
</figure>

Opět dám chvilku času těm z vás, kteří si řešení chcete vymyslet sami. Podmínky řešení jsou tyto:

- Prvek `.item` je centrovaný vodorovně i svisle uprostřed stránky.
- Maximální šířka `.item` je `20em`, výšku vždy určuje obsah prvku, který může být proměnlivý.

Toto je výchozí HTML:

```html
<div class="container">
  <p class="item">
    Jsem uprostřed!
  </p>
</div>
```

Také CodePen už čeká na váš fork a následné procvičování mozkových závitů. Jen pozor, použijte jen vlastnosti ze specifikací nového layoutu – gridu, flexboxu a zarovnávání boxů.

CodePen: [cdpn.io/e/xxdOJOX](https://codepen.io/machal/pen/xxdOJOX?editors=1100)

Čtenáři mezi vámi nechť směle pokračují dál.

## Středění boxu v boxu a poněkud komplikovaný flexbox

Začneme jednodušší variantou příkladu, ve které budeme centrovat boxík uvnitř jiného boxíku.

K HTML výše si doplníme zhruba toto CSS, které doplňuje zadání o omáčku kolem:

```css
.container {
  min-height: 10rem;
  padding: 1rem;
}

.item {  
  padding: 1em;
  max-width: 20em;  
}
```

Jak vidíte, přidali jsme vnitřní okraje (`padding`), nastavili minimální výšku pro rodiče (`.container`) a maximální šířku dle zadání pro samotný centrovaný boxík (`.item`).

Ve skutečnosti je ve výsledném CodePenu stylů více. Slouží ale jen k nastavení vzhledu, s rozvržením nemají nic společného.

Náš první centrovací pokus učiníme s pomocí flexboxu:

```css
.container {
  display: flex;
}
```

Je nám jasné, že toto žádné zázraky neučiní. Spíše naopak - vytvoří nám to problémy. Boxík je teď roztažený na celou výšku rodiče.

Je to častá potíž začátečníků s flexboxem. Výchozí hodnota vlastnosti, která určuje zarovnání na výšku, je totiž nastavená na maximální rozpínavost.

O kterou vlastnost jde? Tady máme dobrou příležitost ukázat si tahák, který převezmeme z referenční příručky k CSS Box Alignment.

![Tahák k CSS Box Alignment](../dist/images/original/vdlayout/css-box-alignment-tahak.png)

Vidíme, že vlastnosti ve výchozím směru layoutu (vodorovně) začínají na `justify-` a ty v příčném směru (ve výchozím nastavení svisle) na `align-`. Snad i vidíme, že dotčená vlastnost se týká položek, takže hlavní podezřelým je zde [vlastnost `align-items`](css-align-items.md).

Ano, je to tak. Ve flexboxu má výchozí hodnotu `stretch`, která je příčinou toho roztažení na výšku.

My však chceme zarovnávat doprostřed:

```css
.container {
  display: flex;
  align-items: center;
}
```

Povedlo se nám zařídit centrování ve svislém směru. Teď ještě vodorovně, že ano… Podívejte se do taháku na obrázku. Odtamtud asi zjistíte, že v horizontálním směru (`justify-`) potřebujete zarovnávat položky (`-items`).

Jenže znovu ouha! Ve světě flexboxu vám v tuto chvíli `justify-items:center` fungovat nebude. Nejen hodnota, ale rovnou vlastnost `justify-items` a tedy i [`justify-self`](css-justify-self.md) je ve specifikaci i prohlížečích v tuto chvíli pro použití ve flexboxu zapovězena. Pokud vás to zajímá více, mrkněte se na podkapitoly o těchto vlastnostech v příručkách dále.

Tento typ zarovnávání se ve flexboxu totiž dělá starým dobrým `margin:auto`:

```css
.container {
  display: flex;
  align-items: center;
}

.item {
  margin: auto;
}
```

CodePen: [cdpn.io/e/abWZjVE](https://codepen.io/machal/pen/abWZjVE?editors=1100)

Můžeme s tím být spokojení, protože naše řešení funguje. Ale víte, co vám řeknu? Já s tím spokojený nejsem. Hlavně proto, že znám lepší řešení, řešení gridem, které není tak komplikované.

Ještě než k němu přejdeme, zmíním ještě jednu možnost poměrně populární u zkušených kodérů: k centrování využít [vlastnost `justify-content`](css-justify-content.md):

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Tohle řešení bude v řadě případů pro centrování z obou stran ve flexboxu perfektně fungovat.

O jeho „čistotě“ se ovšem můžeme přít. Zkušenější mohou již `justify-content` dobře znát a tedy se při jeho použití ve složitějších příkladech nenapálit.

Pro méně zkušené může být nepříjemný fakt, že vlastnost neslouží k zarovnání položek, ale prostoru mezi nimi. Tohle vás může někdy doběhnout.

CodePen: [cdpn.io/e/poWLQRX](https://codepen.io/machal/pen/poWLQRX?editors=1100)

Ale pojďme už na ten elegantní grid.

## Středění boxu v boxu: situaci zachraňuje grid

Asi už víte, že zarovnávací vlastnosti CSS Box Align, jako je `align-items`, můžete s drobnými výjimkami použít jako pro flexbox, tak pro grid. V gridu jsou tyto vlastnosti ale k dispozici řekněme v plném míře.

Naše původně zvažované řešení pro zarovnání položek na výšku i šířku by zde krásně fungovalo:

```css
.container {
  display: grid;
  align-items: center;
  justify-items: center; 
}
```

A víte vy co? Znám ještě elegantnější možnost:

```css
.container {
  display: grid;
  place-items: center;
}
```

[Vlastnost `place-items`](css-place-items.md) je totiž zkratkou pro nám již známé `align-items` a `justify-items`. Poskytuje tedy možnost zarovnávat v obou směrech, což je pro naši potřebu úplně dokonalé.

CodePen: [cdpn.io/e/wvGLEvJ](https://codepen.io/machal/pen/wvGLEvJ?editors=1100)

Vlastnost `place-items` má u layoutů tvořených gridech samozřejmě podporu ve všech třech aktuálních prohlížečích.

## Středění boxu ve stráce

Zatím jsme se zaměřovali na zarovnávání doprostřed rodičovského prvku. Zadání pro tento příklad ovšem hovořilo o centrování uvnitř viditelné části stránky.

Předpokládáme tedy HTML tohoto typu:

```html
<body>
  <p class="item">
    Jsem uprostřed!
  </p>
</body>
```

Řešení by mohlo být nasnadě:

```css
body {
  display: grid;
  place-items: center;
}
```

Pokud si to takto vyzkoušíte v prohlížečích, zjistíte, že na větších displejích vás boxík jaksi neposlechne a o centrování na výšku nemůže být řeč.

Problém je v povaze výšky prvku `<body>`, která je vždy určená obsahem. Pokud tedy máme ve stránce málo obsahu, tělo stránky je nižší než celý viewport.

Můžeme jej roztáhnout s pomocí jednotky `vh`, viewport height, na sto procent výšky viewportu:

```css
body {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

Obsah se bude centrovat na výšku i šířku. V CodePenu si pak můžete vyzkoušet přímo v prohlížeči editovat obsah prvku `.box`. I při výrazném bobtnání obsahu bude prvek stále uprostřed.

CodePen: [cdpn.io/e/VwbjBPB](https://codepen.io/machal/pen/VwbjBPB?editors=1100)

Na tomto příkladě jsme si mohli vyzkoušet základy zarovnávání pomocí vlastností modulu CSS Box Alignment. Jak jste viděli, k dispozici jsou ve flexboxu i gridu, ale ten druhý k nim má řekněme plný přístup a pro zarovnávání tedy bývá efektivnější použít právě mřížku.
