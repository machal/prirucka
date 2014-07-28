# CSS3 Box Sizing

Změna způsobu počítání šířky a výšky elementu, nebo-li box-modelu.

Dozvíte se, proč `box-sizing: border-box` milují vývojáři co dělají fluidní layout a taky nepřátelé matematiky. Čtěte dále.

Vzpomínáte na [tradiční box-model](http://en.wikipedia.org/wiki/Internet_Explorer_box_model_bug), který počítal IE6 a starší v quirks módu? Šířka nebo výška elementu = viditelná šířka nebo výška obsahu + padding + border.

To je border-box box-model.

<img class="picture" src="content/schemes/CSS3-box-sizing.svg" width="700" height="394" alt="box-sizing">

`content-box` nebo-li W3 box-model používají všechny moderní prohlížeče. Výpočet znáte: šířka nebo výška elementu = viditelná šířka nebo výška obsahu. Tohle je přednastavená hodnota vlastnosti box-sizing.

## Syntaxe

    box-sizing: content-box | border-box | padding-box

První dva už znáte z textu výše. No a `padding-box` je `border-box` kde se do výpočtu nepřipočítá šířka vlastnosti `border`.

## Tipy a triky

1. Někdo využívá vlastnosti box-sizing v situaci kdy se mu špatně pracuje s W3 box modelem. Ten totiž spousta lidí [nemůže vystát](http://css-tricks.com/box-sizing/). Nelze se jim divit, od vývojáře W3 model očekává přátelství s matematikou. A tak prohlížeče nechávají v `border-box` počítat [všechny elementy](http://paulirish.com/2012/box-sizing-border-box-ftw/) — `* { box-sizing: border-box }`. Na to jsem si nikdy netroufl a tuhle úžasnou vlastnost používám jen [ve specifických situacích](http://kratce.vzhurudolu.cz/post/18092366948/css3-rolecek).
2. Kde se `box-sizing` hodí určitě je sjednocení způsobu počítání [rozměrů formulářových elementů](http://www.vzhurudolu.cz/test/etc/input_box-sizing.html). Některé z nich totiž prohlížeče počítají jako `content-box` a některé `border-box` způsobem (např. `input type=„submit“ `nebo `select`).
3. Mnoho využití má vlastnost Box Sizing v definování **fluidního layoutu**. Představte si například navigaci, jež má vždycky 5 položek. Šířka pak jedné bude 20%. A oddělovač mezi položkami je tvořený rámečkem fixní šířky. Pak opět potřebujete `box-sizing: border-box`.
