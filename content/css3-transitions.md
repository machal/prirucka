CSS3 Transitions: jednoduché animace přechodu
=============================================

Animace přechodů mezi stavy vlastností elementu.

Zní to možná komplikovaně. Představte si ale tuto situaci:

```css
.box {
  background: green;
}

.box:hover {
  background: blue;
}
```

Nic složitého. Představte si také, že chcete změnu barvy po najetí myši animovat. A právě k tomu slouží transitions, animace přechodů mezi stavy CSS vlastností.

```css
.box {
  background: green;
  transition: 300ms;
}

.box:hover {
  background: blue;
}
```

CSS přechody se typicky spouští po najetí myši, můžete je ale spustit například přidáním třídy javascriptem po kliknutí `.box.clicked { background: blue; }`.

Zkuste si to na [cdpn.io/e/hJljB](https://cdpn.io/e/hJljB).

V praxi
-------

Takto můžete animovat téměř libovolnou CSS vlastnost včetně pozicování nebo [transformací](css3-transforms.md).

Včetně docela divokých hover stavů nad boxy. [tympanus.net/Tutorials/OriginalHoverEffects](http://tympanus.net/Tutorials/OriginalHoverEffects/)

Plnohodnotný animační nástroj to ovšem není. Pokud chcete mít průběh animace zcela pod kontrolou, podívejte se na [CSS3 animace](css3-animations.md).

Ale pozor, i s Transitions lze hrát velké divadlo! Čtěte dále.


Syntaxe
-------

```css
transition:
  (_hlidane_vlastnosti_)
  _trvani_animace_
  (_funkce_prubehu_)
  (_zpozdeni_)
  (, _dalsi_transition_);
```

### Trvání animace

Jediná povinná položka ve zkratce `transition`. Čas můžete udat v sekundách nebo milisekundách. Samostatně tedy s výchozí hodnotou jako `transition-duration: 0s`.

### Hlídané vlastnosti

Z vlastností, které v elementu měníte, si můžete vybrat jen některé. Ostatní se prostě nebudou animovat. Samostatně s výchozí hodnotou jako `transition-property: none`. Příklad:

```css
.box {
  background: green;
  transition: margin 300ms;
}

.box:hover {
  background: blue;
  margin-left: 200px;
}
```

Je dobré vědět, že animované přechody nelze aplikovat úplně na všechny CSS vlastnosti. Třeba vlastnost `display` byste animovali marně. Tady je seznam animovatelných na W3.org. [vrdl.in/hgx4v](http://www.w3.org/TR/css3-transitions/#animatable-properties)

### Funkce průběhu

Samostatně jako `transition-timing-function: ease`. Vybrat si můžete z přednastavených. Více je na W3.org. [vrdl.in/p3rh6](http://www.w3.org/TR/css3-transitions/#transition-timing-function)

Lze si samozřejmě také nadefinovat vlastní. [matthewlein.com/ceaser](http://matthewlein.com/ceaser].

### Zpoždění

Animaci můžete spustit o chvíli později, než nastane změna vlastností. Samostatně jako `transition-delay: 0s`.

### Řetězení animací

Pokud měníte více vlastností, nemusíte je animovat najednou. Docela snadno je poskládáte za sebe. A otevřete tím úplně novou dimenzi možností tvorby animací.

Obě animace v následujícím příkladu trvají 200 milisekund. Druhá, která animuje `background-color`, se spouští s vteřinovým zpožděním po skončení první:

```css
transition: transform 200ms,
  background-color 200ms 1s;
```

Nejlépe je to opět vidět v prohlížeči: [cdpn.io/e/vIGAk](https://cdpn.io/e/vIGAk).


Podpora v prohlížečích
----------------------

IE10+. Když budete `transition` používat pro dekorativní (nikoliv funkční) animaci, můžete ji udělat výrazně snadněji než Javascriptem a ve starších prohlížečích nebude chybějící animace nikomu vadit.

Pokud děláte funkční animaci (např. indikaci stavu nahrávání), připravte pomocí detekce vlastností alternativní řešení pro starší prohlížeče.
