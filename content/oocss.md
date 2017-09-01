# OOCSS: objektové psaní CSS

OOCSS je zkratka pro [Object Oriented CSS](https://github.com/stubbornella/oocss/wiki). Je to koncept psaní kódu od Nicole Sullivan zaměřený na „komponentovou“ část CSS kódu.

CSS objekt je opakující se vizuální komponenta, která může být abstrahována kouskem HTML a CSS, případně JS. Je znovupoužitelná na jiném místě projektu. Ideálně pak i na dalších projektech. 

Cílem OOCSS je kromě zajištění znovupoužitelnosti kódu i zlepšení jeho spravovatelnost a také zmenšení objemu CSS souboru.

<!-- AdSnippet -->

Myslím, že uplatnění objektových principů na psaní CSS je jistým způsobem nutnost. Alespoň u webů, [psaní javascriptových aplikací](https://www.vzhurudolu.cz/blog/77-css-v-js) totiž může být z pohledu organizace CSS úplně jiná písnička.

Ukažme si nejprve zjednodušený kód komponenty s tlačítkem:

```css
/* Komponenta */
.button { … }

/* Elementy komponenty */
.button-icon { … }

/* Modifikátory komponenty */
.button-primary { … }
.button-login { … }
```

OOCSS má pět principů. Alespoň podle toho, jak jej vnímám já:


## 1) Nezávislost vzhledu na struktuře {#vzhled-na-strukture}

Do CSS selektorů nikdy nedáváme HTML tagy. Mohou se totiž změnit a změny nechceme provádět na dvou místech – v HTML i CSS. Proto `.button` raději než `input.button`.

OOCSS je v tomto přísné, takže byste v komponentové části kódu opravdu neměli mít některé z uvedených typů selektorů:

```css
/* Tohle je v objektovém CSS zakázáno: */
button { … }
input.button { … }
.comment img { … }
```

Selektor jako `.comment img` může vypadat neškodně. Jenže co když třeba do komponenty váš kolega, kolegyně nebo třeba klient přes redakční systém přidá do struktury komponenty další obrázek? 

<!-- AdSnippet -->

Jediná rozumná výjimka je stylování základní typografické vrstvy projektu. Tam jsou samozřejmě selektory jako `p` nebo `h1` úplně v pořádku. V této vrstvě kódu ani OOCSS nevyužijete, objekty jsou určené pro vrstvu komponent uživatelského rozhraní.


## 2) Nezávislost obsahu na kontejneru {#obsah-na-kontejneru}

Do CSS selektorů nikdy nepromítáme strukturu HTML nebo přesněji stromu DOM. I ta se totiž  může změnit:

```css
/* Špatně: */
.login-form .button { … }

/* Dobře: */
.button { … }
.button-login { … }
```

Komponenta `.button` s modifikátorem `.button-login` je totiž snadněji přenositelná do jiné struktury HTML než komponenta v kontejneru (`.login-form .button`). U komponenty v kontejneru opět platí, že úpravu struktury HTML budete muset promítat do CSS.


## 3) Co nejnižší specifičnost {#specificnost}

V CSS nikdy nepoužíváme selektory identifikátorů (`#id`), protože mají vysokou specifičnost. Atributy `id=""` v HTML ale samozřejmě smysl mají – například pro kotvy uvnitř dokumentu nebo použití v javascriptových selektorech.

Klazule `!important` je víceméně také zapovězená. Tu si necháváme pro debugovací nebo prostě vysoce specifické účely.

Kvůli zachování nízké specifičnosti se také snažíme co nejméně používat následující:

- selektorů potomka  
`.button .button-icon → .button-icon`
- kombinované selektory  
`.button.button-primary → .button-primary`

Více o specifičnosti v CSS: 

- [Lidsky popsáno na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Kalkulačka specifičnosti na specificity.keegan.st](http://specificity.keegan.st/).
- [W3.org specifikace](https://www.w3.org/TR/css3-selectors/#specificity)


## 4) Vývoj zaměřený na komponenty, znovupoužitelnost {#komponenty}

Komponenty (neboli objekty) nezávislé na struktuře HTML lze snadno používat i na jiných projektech.

Tvoří pak samostatný celek, který importujeme:

```css
@import "button.css";
@import "nav.css";
```

Zpřehledňují nám nejen kód samotný, ale i commity do repozitáře. [O organizaci CSS do souborů](https://www.vzhurudolu.cz/blog/29-organizace-css-2014) jsem kdysi psal samostatný článek.

Na protokolu HTTP/1 bude obvykle výhodnější importované CSS opět slučovat. Mohou pomoci [preprocesory](https://www.vzhurudolu.cz/blog/12-css-preprocesory-1) nebo [PostCSS](postcss.md). Na [HTTP/2](http-2.md) potřeba slučování souborů do jednoho už tak moc neplatí.


## 5) Princip prefixování: objekt, element, modifikátor {#objekt-element-modifikator}

Máme tři typy prvků:

- objekt – jinak též komponenta nebo blok (`.button`)
- element – prvek uvnitř objektu, jinak též podobjekt (`.button-icon` pro ikonu uvnitř tlačítka)
- modifikátor – vlastnost objektu (`.button-primary` pro hlavní call-to-action tlačítko)

Pro někoho už tohle patří do [metodiky BEM](bem.md). Já si ji ale vykládám jako pravidla pro způsob zápisu tříd. 

Tím jsme ukončili procházku po pěti principech OOCSS. Teď ještě musím odbočit ke spolupráci kodérů s vývojáři. Někdy totiž není přísné uplnatnění principů OOCSS možné už z principu. Z principu designu.


## OOCSS v praxi {#praxe}

Ukážu čtyři možnosti, jak v CSS napsat kód pro přihlašovací tlačítko. Jen ta poslední je v pořádku. Předpokládejme, že jde o komponentu, která nějak výchází ze základního tlačítka. To v CSS vypadá následovně:

```css
.button {
  text-align: center;
  padding: .5em 1em;
}
```

Další předpoklad je, že přihlašovací tlačítko používat na různých místech projektu. Pak chci využít objektové CSS.

### Špatně: závislý na kontejneru

V HTML by vypadalo takto:

```html
<form class="login-form">
  <button class="button"></button>
</form>  
```  

V CSS se mi pak, jak už jsem psal, vytváří závislot na konkrétním kontejneru a tato varianta tlačítka je tedy nepřenositelná. Proto je nesprávná.

```css
.login-form .button { … }
```

### Špatně: bez prefixování

HTML:

```html
<button class="button login"></button>
```

Vymanili jsme se tedy ze závislosti na kontejneru. Prima. Jenže… Člověku, který HTML čte, nebude jasné, co vlastně `login` znamená. 

Je to nový objekt? Je to modifikátor původního objektu `button`? Je to nějaká globální helper třída? Pak je obtížné z HTML vyvodit, jak komponentu používat nebo ve kterém souboru najít kód komponenty.


### Špatně: přesun zátěže do CSS

HTML:

```html
<button class="button-login"></button>
```

V CSS pak kromě původního `.button` budu mít ještě kód pro přihlašovací verzi tlačítka:

```css
.button-login {
  text-align: center;
  padding: .5em 1em;
  background: blue;
  color: white;
}
```

Jak vidíte, je to prakticky totožný kód, který jen přidává dvě nové vlastnosti. Problém je v tom, že vám CSS kód neúměrně a zbytečně bobtná. 

### Správně: pomocí modifikátoru

HTML:

```html
<button class="button button-login"></button>
```

Z uvedeného kódu díky prefixování snadno poznáme, že jde o komponentu `button` s modifikací.  V CSS u modifikace jen přidáme kód, který nemá původní objekt:

```css
.button-login {
  background: blue;
  color: white;
}
```


## Objektový kód v neobjektovém designu {#neobjektovy-design}

Netrvejte na komponentovém přístupu, pokud není design komponentově zaměřený.

<!-- AdSnippet -->

CSS je zápis designu. CSS kodér, který používá objektový zápis dělá v designu systém. Jenže ne každý design je vymyšlený systematicky. Dnešní podklady designérů jen vzácně tvoří striktní systém typu [atomického designu](pattern-lab.md). Většinou se pohybují v rozmezí mezi částečně komponentovým přístupem a naprosto nekomponentovým, kdy každé tlačítko vypadá trochu jinak.

Milí kodéři, nesnažte se proto aplikovat přísné objektové přístupy tam, kde to není z principu možné. Obvykle ale můžete naštěstí alespoň základy principů OOCSS využít i tam, kde designéři na znovupoužitelnost designu nemysleli. Široce použitelné jsou hlavně principy nezávislosti vzhledu na struktuře, obsahu na kontejneru a zachování nízké specifičnosti.


