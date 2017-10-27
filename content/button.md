# Vše o prvku BUTTON a tlačítkách v HTML

Prvek `<button>` reprezentuje tlačítko. Tím bychom mohli skončit a jít na pivo, že jo? To byste ale byli na špatném blogu. My půjdeme do hloubky.

* Doporučím vám [dávat prvku `<button>` přednost](#proc) před tlačítky v `<input>`.
* Upozorním, že [prvek `<a>` stylovaný jako tlačítko](#odkaz) vždy nemusí být dobrý nápad.
* Nakonec společně zjistíme, že `<button>` je vlastně [univerzální interaktivní prvek](#univerzalni).

Začneme ale u samotné HTML značky.


## Prvek BUTTON {#prvek}

[Specifikace](https://www.w3.org/TR/html5/forms.html#the-button-element) uvádí, že `<button>` reprezentuje tlačítko, jenže definice tlačítka je širší než bychom mohli čekat.

Nespornou výhodou prvku `<button>` je jeho párovost. Můžeme do něj vložit libovolný text, který zároveň slouží jako jeho popis (label). Můžeme do něj vložit libovolnou HTML strukturu.

<!-- AdSnippet -->

Atributem `type=""` můžete tlačítku vnutit různé vzorce chování:

* `<button type="submit">` nebo `<button>` – odesílá formulář
* `<button type="reset">` – resetuje hodnoty ve formuláři
* `<button type="button">` – nedělá nic

Poslední typ neodešle formulář, takže mu můžete přidávat nejrůznější funkce. Rozdíl mezi odesílacím a neodesílacím tlačítkem je patrný také v mé další ukázce. [cdnp.io/e/VrZJwX](https://codepen.io/machal/pen/VrZJwX)

To, že `type="button"` nic nedělá, neznamená, že nic neumí. Má vlastnosti, které jiným HTML prvkům chybí. Za chvilku se k nim dostaneme. Nejprve ještě k sesterské značce `<input>`.


## Proč prvek BUTTON a ne INPUT? {#proc}

Známe přeci `<input type="button">` nebo jiné s hodnotami `image`, `submit` a `reset` v atributu `type=""`. Proč tedy `<button>`? 

Protože je univerzální a snadněji se styluje.

### Do prvku BUTTON můžete vložit další element 

Prvek pojme skoro jakoukoliv HTML strukturu:

```html
<button>
  <img src="icon.svg" alt="">
  Tlačítko <em>s důrazem</em>
</button>
```

Přesněji řečeno: Pojme jakékoliv značky, které popisují text v odstavci (tzv. [Phrasing Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)). Takže `<svg>`, `<img>` nebo dokonce `<iframe>` je povolený. `<p>`, `<div>` nebo `<h1>` naopak zakázaný.

`<input>` přijímá pouze textové hodnoty nebo obrázek, který je ovšem dneska kvůli přístupnosti už dost krajní možností.

### Můžete používat pseudotřídy :before a :after

Tohle bychom s `<input>` jako nepárovou značkou opět nemohli:

```css
button:before {
  background: url(icon.svg)
}
```

Nicméně pozor na velké aktivní plochy. Jak uvádí Bohumil Jahoda, větší plochy pseudotříd nejsou aktivní ve Firefoxu. [kod.djpw.cz/mckc](http://kod.djpw.cz/mckc)

### Problémy se starými Explorery, spíše pro zajímavost

S `<button>` se pojily nějaké problémy v Internet Explorerech verzí 6-9. Zejména pak v situacích, když jste textovou hodnotu uvedenou v `<button>` chtěli poslat na server. Mě osobně to nevadí, protože to je velmi vzácný scénář a protože už i staré Explorery jsou dnes druh velmi vzácný, až vyhynulý. Problémy se starými Explorery přesně [popisuje Bohumil Jahoda](http://jecas.cz/button), ale nenechte se jimi odradit. 

## Nepleťte si tlačítko s odkazem

Odkaz (*link*) specifikace definuje jako interaktivní odkaz na interní nebo externí zdroj. Prostě kotva uvnitř dokumentu nebo odkaz na jinou adresu. Plně mu odpovídá prvek `<a>`. 

Odkaz má kromě toho speciální chování v prohlížečích. Jejich obsah lze pomocí drag'n'drop přemístit jinam. Některé prohlížeče po najetí myši ukazují cílovou adresu. Poslední specialita je možnost otevřít cílovou adresu v novém okně pomocí klávesové zkratky nebo z kontextové nabídky. [Někteří také tvrdí](https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b), že je jim *vyhrazený* kurzor v podobě ruky (`cursor:pointer`), ale s tím já se neztotožňuji. „Pracičkový“ kurzor se dnes na webech široce používá pro zvýraznění aktivních elementů a je to zažitá věc.

Tlačítko (*button*) je naproti tomu prvek, který po aktivování vyvolává akci uvnitř aktuální stránky. Plně mu odpovídá element `<button>`.

Pokud tedy prvek vyvolává akci, ale nemění lokaci, je správnější použít značku `<button>`. 

Neznamená to však, že byste měli pro všechny komponenty rozhraní s vizuálem tlačítka používat zásadně jen `<button>`. Občas je kvůli jednotnosti rozhraní potřeba odkaz nastylovat vizuálem tlačítka. 

Znamená to především, že byste neměli používat prvek `<a>` tam, kde je významově vhodnější tlačítko. Prostě pro akce, které nemění URL prohlížeče. Neměli byste dělat ošklivárny tohoto typu:

```html
<input type="text">

<a href="#" class="button">
  Tlačítko pro ovládání inputu
</a> 
```

Nebo takhle: Když už to udělat potřebujete, měli byste přidat všechny očekávané funkce tlačítka.

## Odkaz s vizuálem tlačítka: na co všechno myslet? {#odkaz}

Pojďme si to ukázat na příkladu. Předpokládeme, že se jedná z významového pohledu o tlačítko, tedy nepřecházíme na novou URL. Pojďme to zkusit udělat špatně, odkazem:

```html
<a href="#" class="button">
  Problémové tlačítko
</a>
```

Prvek bude mít díky třídě vizuál tlačítka. Čtečky dávají prvku `<a>` jiný význam než prvku `<button>`. Proto bychom museli přidat [WAI-ARIA roli](wai-aria.md) pro tlačítko:

```html
<a href="#" class="button" role="button">
  Problémové tlačítko
</a>
```

Ale je tu i další problém: Odkaz není na rozdíl od tlačítka možné v prohlížečích aktivovat mezerníkem. Tlačítko má být aktivovatelné mezerníkem i enterem, odkaz jen enterem. Více o tom píší třeba [na MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role).

Jak to vyřešit? Mohlo by vás napadnout třeba zanoření nativních prvků:

```html
<a href="#">
  <button>
    Problémové tlačítko
  </button>
</a>
```

Jenže to dobře fungovat nebude. Při ovládání z klávesnice musí uživatel zápasit se dvěmi zaměřeními, s dvojitým *focusem*. Nebude pro něj snadné vybrat ten správný. 

<!-- AdSnippet -->

Zkusme tedy další pokus s odkazem. Hlídání stisknutí mezerníku musíme ošetřit Javascriptem:

```html
<a href="#" role="button" class="btn btn-secondary"
  onkeypress="if(event.keyCode==13){alert('Ahoj!')};
  onclick="alert('Ahoj!')">
    Problémové tlačítko
</a>
```

Můžete si to zkusit na Codepenu: [cdpn.io/e/eExXmy](https://codepen.io/machal/pen/eExXmy?editors=1000#0).

### A teď úplná prasárna: prvek SPAN jako tlačítko

Existence ARIA `role="button"` by mohla napovídat, že bychom snad měli možnost udělat tlačítko z čehokoliv, třeba z prvku `<span>`:

```html
<span role="button">
  Tlačítko prasátko
</span>
```

Je to samozřejmě blbost. Pojďme si na tabulce ukázat, jaké všechny funkce jsou skryté v prvku `<button>` a které prvky `<span>` ani `<a>` nemají.

<figure>
<div class="rwd-scrollable"  markdown="1"> 
| Prvek      | Vzhled | Klik/touch | Focus | Význam | Mezerník |
|------------|:------:|:----------:|:-----:|:------:|:--------:|
| `<span>`   |  +     |      +     |       |        |          |
| `<a>`      |  +     |      +     |    +  |        |          |
| `<button>` |  +     |      +     |    +  |    +   |      +   |
</div>  
<figcaption markdown="1">    
*Tabulka: Přidáním třídy můžeme nastavit vzhled tlačítka na jakýkoliv element, prvek SPAN nebude možné aktivovat klikáním a dotyky a nebude možné jej zaměřit z klávesnice (:focus). To asi nepřekvapí. Prvek A ovšem nenese význam tlačítka a není možné jej aktivovat mezerníkem.*
</figcaption> 
</figure>

Do vytvoření tlačítka pomocí jiných prvků než `<button>` se proto ideálně nepouštějte. 

[Paul J. Adam](https://www.deque.com/blog/accessible-aria-buttons/) píše i o dalších věcech, které se mi sem nevešly. Cituji:

> There's a lot to consider when making a custom button control fully accessible with an experience equal to a native button. You need tabindex=0, role=button, onkeydown, .keyCode == 13, .keyCode == 32, event.preventDefault(), and extra CSS to make it look like a real button.

Ano, sémanticky správné tlačítko totiž vypadá úplně jednoduše:

```html
<button>
  Správné tlačítko
</button>
```

Jak navíc [ve své skvělé knize](https://shop.smashingmagazine.com/products/inclusive-design-patterns) píše Heydon Pickering, jen tlačítko udělané z prvku `<button>` je – a teď cituji – *„resizable, translatable, focusable, interoperable, stylable, restylable, maintainable, mutable, simple“*.

A jak za chvilku uvidíte, používat pro prvek `<button>` označení „tlačítko“ trochu zavání podceňováním.

## Značka BUTTON jako univerzální iteraktivní prvek {#univerzalni}

Button je zaměřitelný a aktivovatelný dotykem, myší i z klávesnice. To je věc, kterou potřebujeme fakt často. Co třeba akordeóny a další rozklikávací rozhraní?

Aktivační prvek akordeónu je totiž významem typické tlačítko:

```html
<h3>
  <button 
    aria-expanded="false" aria-controls="collapsible-0">
    Rozklikávač
  </button>
</h3>

<div id="collapsible-0" aria-hidden="true">   
  <p>Rozklikávaný obsah…</p>
</div>
```

[Příklad s akordeónem](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles) jsem si vypůjčil z ukázek Heydona Pickeringa. 

Další možnosti jsou vidět na webu [Inclusive Components](https://inclusive-components.design/). Jednou z nich je [stylování vlastních přepínačů](https://inclusive-components.design/toggle-button/#theswitchrole) – dvoupolohových tlačítek:


```html
<span id="notify-email">
  Notify by email
</span> 
<button role="switch" 
  aria-checked="true" aria-labelledby="notify-email">
  <span>on</span>
  <span>off</span>
</button>
```

Vidíte, že pomocí atributu `role=""` měníme význam tlačítka na „přepínač“. Věnujte prosím pozornost i dalším atributům začínajícím slovem `aria-`. 

Takovéto prvky v rozhraní jako běžná tlačítka nevypadají, přesto u nich může být prvek `<button>` díky svým vlastnostem velmi užitečný. 

Vzpomeňte si na něj až budete nějakou takovou komponentu stylovat. `<a>` pro tlačítka používejte jen tam, kde se to významově hodí. Jiné elementy nejlépe vůbec pro tlačítka nevyužívejte.

<!-- AdSnippet -->
