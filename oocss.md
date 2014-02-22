# OOCSS

## Object Oriented CSS. Koncept organizace kódu.

CSS objekt je opakující se vizuální pattern, který může být abstrahován kouskem HTML a CSS, případně JS. Je znovupoužitelný na jiném místě webu nebo aplikace.

## Cíle OOCSS

* zlepšit spravovatelnost 
* znovupoužitelnost kódu
  * žádné specificity wars
  * výkonnost CSS (méně kódu díky zamezení opakování)
  
  
## 2 základní pricipy

### 1) Oddělit strukturu a vzhled  

Tzn. `.button` a `.button.button-primary` namísto `.button-one` a `.button-second`. Cílem je zabránit opakování kódu vzhledu a zajistit znovupoužitelnost. Mrkněte na velmi zjednodušený příklad, obvykle je kód daleko složitější a ušetření řádků znatelnější.

Špatně:

```
.button-one {
  padding: 10px 20px;
  font-size: 14px;
  line-height: 1;
  border: 1px solid black;
}

.button-two {
  padding: 10px 20px;
  font-size: 14px;
  line-height: 1;
  border: 1px solid black;
  background: red;
  color: white;
}

```

Lépe:

```
.button {
  padding: 10px 20px;
  font-size: 14px;
  line-height: 1;
  border: 1px solid black;
}

.button-primary {
  background: red;
  color: white;
}
```

Vše musí být nezávislé na HTML elementech. Tzn. v CSS nepoužívat `input.button`, ale jen `.button`, protože nám programátor v HTML může `<input>` změnit na `<a>`, `<span>` nebo cokoliv jiného.

### 2) Oddělit kontejner a obsah

Tzn. nevytvářet styly závislé od umístění. `.head.head-smaller` raději než `.side .head`.

Protože…

* Všechny `.head` by v jakékoliv instanci v jakémkoliv umístění měly vypadat stejně.
* Nemusíte vytvářet složité přepisovací styly, pokud by náhodou `.side .head` měl vypadat zase stejně jako původní `.head`.
* A taky není nikdy jasné kde v codebase vlastně CSS zdroják pro `.side .head` najdete — u komponenty `.side` nebo komponenty `.head`?

## Další OOCSS pokyny

* Vyhněte se `#id` selektoru - má vysokou specifičnost. Používejte jen pro jiné potřeby než CSS. Třeba JS.
* Vyhněte se `!important`. Opět problém s vysokou specifičností. Jak přebijete `important!`? Nechte si jej v záloze pro debugování.
* Používejte [CSS lint](http://csslint.net/).

## Odkazy

* [http://specificity.keegan.st/](http://specificity.keegan.st/)
* [https://github.com/stubbornella/oocss/wiki](https://github.com/stubbornella/oocss/wiki)
* [http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

OOCSS už dávno vymyslela [Nicole Sullivan](http://www.stubbornella.org/content/). Já to tady jen česky převyprávěl a poupravil, tak abych tomu rozuměl.





