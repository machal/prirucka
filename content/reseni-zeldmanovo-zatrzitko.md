# CSS řešení: Zeldmanovo zatržítko

Podíváme se na další z řešení, které jsem ukazoval v přednášce [na WebExpo 2016](http://www.vzhurudolu.cz/prednaska/webexpo-2016-246).

Žádné SVG ani flexbox tady tentokrát nehledejte. Jen [animované přechody](css3-transitions.md) a [tranformace](css3-transformations.md) z CSS. Zatržítko mě zaujalo právě svou jednoduchostí.

Proč Zeldmanovo? Řešení jsem poprvé viděl na [studio.zeldman.com](http://studio.zeldman.com/).

Podívejte se: [cdpn.io/e/ozgPwm](http://codepen.io/machal/pen/ozgPwm).

Jak na to? 


## 1. Na HTML nic není…

…a to je dobře, protože řešení je plně přístupné.

```html
<label class="checkbox">
  <input type="checkbox" class="checkbox__input" />  
  <span class="checkbox__label">Touch me!</span>
</label>
```

Jak na vlastní vzhled zatržítka? Stylování samotného checkboxu funguje jen v prohlížečích postavených na jádrech Webkit a Blink. Pomocí `appearance: none` bychom zrušili jeho výchozí styl a pak z něj prostě udělali běžný čtverec s rámečkem.

My ale chceme univerzální řešení. Jedno z nich spočívá v překrytí nativního zatržítka  vrstvou a přidání falešného zatržítka do druhé.


## 2. Překryjte nativní zatržítko

Z rodiče uděláme kontejner pro absolutní pozicování: 

```css
.checkbox {
  position: relative;  
  …
}
```

Z nového pseudoelementu pak vytvoříme překryvnou vrstvu:

```css
.checkbox__label:before {
  content: ' ';
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
  background: #EDE29F;  
}
```

## 3. Vytvoříme falešné zatržítko

Pomůžeme si dalším pseudoelementem:

```css
.checkbox__label:after {
  content: ' ';
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  border: .35rem solid #48440E;
  transition: 200ms;
  position: absolute;
  top: 0;
  left: 0;
  background: #EDE29F;  
}
```


## 4. Nastylujeme cílový vzhled zatržítka

```css
.checkbox__input:checked ~ .checkbox__label:after {
  border-top-style: none; 
  border-right-style: none;
  transform: rotate(-45deg);
  height: 1.25rem;
  border-color: green;
}
```

Jakmile na něj někdo klikne: 

- zmizí horní a pravý rámeček (`border-*` pravidla)
- otočí se o 45 stupňů doleva (`transform: rotate(-45deg)`)
- zmenší se výška na polovic (`height: 1.25rem`)
- zmení se barva rámečku (`border-color: green`)

## 5. Animujeme!

Tohle je ta jednodušší část. Pomohou nám [animace přechodů](css3-transitions.md). Však se podívejte na kód:

```css
.checkbox__input {
  transition: 100ms;
}
```

Řešení bude fungovat ve všech dnešních prohlížečích. 

Tady je živé demo: [cdpn.io/e/ozgPwm](http://codepen.io/machal/pen/ozgPwm).
