CSS3 Box Sizing: způsob počítání velikosti boxu
===============================================

Změna způsobu počítání šířky a výšky elementu, jinak též řečeno box-modelu.

<!-- AdSnippet -->

Dozvíte se, proč `box-sizing: border-box` milují vývojáři, kteří dělají fluidní layout, a taky nepřátelé počítání. Čtěte dále.

## Syntaxe

```css
box-sizing: content-box | border-box | padding-box;
```

Vzpomínáte na tradiční box-model, který počítal IE6 a starší v nestandardním módu? Nevzpomínáte? Gratuluji, jste šťastní lidé. [wikipedia.org/wiki/Internet_Explorer_box_model_bug](http://en.wikipedia.org/wiki/Internet_Explorer_box_model_bug)

```
Šířka nebo výška elementu =
viditelná šířka nebo výška obsahu
+ padding + border.
```

Už víte? To je **`border-box` box-model**.

![Box Sizing](dist/images/original/box-sizing.svg)

Naproti tomu **`content-box` neboli „W3C box-model“** používají všechny moderní prohlížeče. Výpočet znáte:

```
Šířka nebo výška elementu =
viditelná šířka nebo výška obsahu.
```

A to je taky přednastavená hodnota vlastnosti `box-sizing`, kterou – naštěstí – můžeme změnit.

<!-- AdSnippet -->

Pro pořádek uveďme, jak se počítá šířka a výška elementu u `box-sizing: padding-box` – je to vlastně `border-box`, kde se do výpočtu nepřipočítá šířka vlastnosti `border`.

Dobře, ale jak to můžeme využít? Podívejme se na několik možných scénářů.

## Příklady využití

### `* { box-sizing: border-box }`

Někdo využívá vlastnosti box-sizing v situaci, kdy se mu špatně pracuje s W3C box modelem. Ten totiž významná část webových vývojářů považuje za neintuitivní. Takoví pak prohlížeče nechávají počítat v border-box všechny elementy. Podobný přístup mají i moderní frontend frameworky Bootstrap nebo Foundation.

### Fluidní layout

Mnoho využití má tato vlastnost v responzivním webdesignu, konkrétně při práci s layoutem definovaným v procentuálních jednotkách. Představte si například navigaci, jež má vždy 5 položek. Šířka jedné pak bude 20 %. Oddělovač mezi položkami je vytvořený rámečkem fixní šířky:

```css
.nav li {
  width: 20%;
  display: inline-block;
  border-left: .25em solid #fff;
}
```

Jenže takhle nám pátá  položka navigace odskočí na další řádku. Potřebujeme však jen prohlížeči oznámit, ať laskavě šířku položek navigace počítá pomocí `box-sizing: border-box`:

```css
.nav li {
  box-sizing: border-box;
  width: 20%;
  display: inline-block;
  border-left: .25em solid #fff;
}
```

Živá ukázka příkladu je na [cdpn.io/e/FeLkJ](http://cdpn.io/e/FeLkJ).


### Změna počítání rozměrů formulářových elementů

Vlastnost `box-sizing` se moc hodí na sjednocení způsobu počítání výšky nebo šířky formulářových elementů. Některé z nich totiž prohlížeče počítají jako `content-box` a některé `border-box` způsobem (např. `input type=„submit“ `nebo `select`). Pokud chcete zajistit stejnou výšku formulářových prvků ve vašem designu, než je začnete stylovat, přepněte si je nejlépe do `box-sizing: border-box`. Živá ukázka problému s formulářovými elementy je na [cdpn.io/e/iBquK](http://cdpn.io/e/iBquK).

## Podpora v prohlížečích

IE7+ a všechny moderní prohlížeče. Pokud jste vlastnost neznali, budete se divit, jak výborně je podporována. [caniuse.com/box-sizing](http://caniuse.com/box-sizing)

Je ale dobré vědět, že méně používanou hodnotu `padding-box` podporuje jen Firefox.


