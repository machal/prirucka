CSS3 Animations: plnohodnotné animace
=====================================

Možná se  budete divit, ale toto jsou první nativní webové animace vůbec. Překvapující? Všechny existující způsoby animace jsou buď zapouzdřené ve vlastním technologickém kontejneru (Gif, Flash, Silverlight…), nebo animují prostředkem, který pro tento účel nebyl navržen – Javascriptem.

Jak se liší od [transitions](css3-transitions.md)? V animacích (`animation`) máte celou akci daleko víc pod kontrolou a nemusíte se omezovat na CSS vlastnosti, které u animovaného objektu existují před startem animace. Přechody (`transition`) jsou určené jen pro jednoduché animované přechody změny stavu CSS vlastnosti.


Syntaxe
-------

Animaci si nejdřív nadefinujete pomocí at-rule (zavináčové funkce) `@keyframes`. Následně ji můžete kdekoliv zavolat a nastavit si podle libosti.

```css
@keyframes _nazev_animace_ {
	_cas_ { _deklarace_vlastnosti_ }
	_cas_ { _deklarace_vlastnosti_ }
}

#example {
	animation:
		_nazev_animace_
		_cas_trvani_
		_casova_funkce_prubehu_
		_zpozdeni_
		_pocet_opakovani_
		_smer_prubehu_
		_fill_mode_
		(,_dalsi_animace_);
}
```

### `animation-name` – název animace

Můžete použít i samostatně jako `animation-name: my_animation`.


### `animation-duration` – čas trvání

Nastavíte ve vteřinách (`.5s`) nebo v milisekundách (`500ms`). Výchozí hodnota `animation-duration: 0s`.


### `animation-timing-function` – časová funkce průběhu


Podobně jako u [transition](css3-transitions.md) lze využít funkce přednastavené nebo definovat vlastní. Samostatný zápis a výchozí hodnota vypadá takto: `animation-timing-function: ease`.

### `animation-delay` – zpoždění startu

Jakou dobu má animace čekat, než se rozběhne? Opět ve vteřinách nebo milisekundách. Přednastavena je samozřejmě nulová hodnota: `animation-delay: 0`.


### `animation-iteration-count` – počet opakování

Lze nastavit číslo nebo nekonečný počet opakování pomocí `infinite`. Přednastavená je hodnota `animation-iteration-count: 1`.


### `animation-direction` – směr průběhu

Na rozdíl od transitions se v případě opakování animace stav vrátí na výchozí keyframe (0%) a znovu pokračuje k cíli. Pokud chceme, aby na sebe jednotlivá opakování animace navazovala, musíme směr průběhu nastavit na hodnotu `alternate`. Samostatně jako `animation-direction: alternate`.


### `animation-fill-mode` – směr přepsání vlastností

Výchozí stav naší animace bude vypadat takto: Před startem animování a po jeho skončení se na animovaný element nijak neaplikují CSS vlastnosti z keyframů animace. Vlastností `animation-fill-mode` toto chování můžeme změnit.

Může nabývat čtyř hodnot:

- `none` — výchozí hodnota.
- `backwards` — i když má element jiné nastavení vlastností, při jeho zobrazení se použijí hodnoty z keyframe 0%.
- `forwards` — po skončení poslední iterace animace zůstane objekt ve stejném stavu, jako je v keyframe 100%, a nevrací se zpět.
- `both` — aplikuje `forwards` i `backwards`.

### `animation-play-state` – stav přehrávání

Vlastnost, která jako jediná není součástí zkratky animation a je třeba ji používat vždy samostatně. Animaci můžete dočasně zastavit pomocí `animation-play-state: paused`. Co dělá druhá možná hodnota – `running` – je asi zřejmé.

### `@keyframes` – klíčové snímky průběhu animace

Definují začátek (klíčové slovo `from` nebo `0%`), průběh (pomocí procent z průběhu) a konec (`to` nebo `100%`) animace. Přechod mezi jednotlivými keyframes vypočítá prohlížeč sám. Začátek a konec je potřeba nastavit vždy, počet keyframes mezi nimi není nijak limitovaný.


Podpora v prohlížečích
----------------------

CSS3 animace nepodporuje například IE9 a starší: [caniuse.com/css-animation](http://caniuse.com/#feat=css-animation).

Strategii podpory starších prohlížečů je dobré zvolit podle typu animace.

V případě **vylepšujících animací** (měnší i větší estetické drobnosti v uživatelském rozhraní, u kterých uživateli nevadí, že neproběhnou) není důvod tvořit alternativní řešení.

Pokud **animace nese informaci** (například indikátor stavu načítání uživatelem vloženého souboru), pak je nutné nahradit CSS3 animaci Javascriptem nebo detekovat prohlížeče, jež CSS3 animace neovládají a alternativu nabídnout jen jim.

