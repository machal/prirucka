# <figure>, <figcaption>

Značka `<figure>` slouží ke vložení obrázku, videa, schématu, grafu, tabulky, ilustrace nebo ukázky kódu. Prostě netextového obsahu dovnitř textu:

```html
<figure>
  <img src="obazek.jpg" alt="…" />
  <figcaption>
    …
  </figcaption>
</figure>
```

Musí to ale být soběstačná jednotka. Tu si můžete představit jako jednu větu v textu. Když byste do obrázku dali jen část sdělení věty, `<figure>` použít nemůžete:

```html
<p>
  A řekl: 
  <blockquote><img src="rekl.png" alt="Dneska ti to fakt sluší"></blockquote>
</p>  
```

Jak jste si už všimli v první ukázce, obrázek, video nebo ilustraci je možné komentovat popiskem ve `<figcaption>`.

## Jak se liší parametr `alt` a popisek `<figcaption>`?

- `alt` je textový popis obsahu obrázku.
- `<figcaption>` obsahuje popis obrázku v kontextu obsahu, ke kterému se vztahuje.

Zkusím to ukázat:

```html
<figure>
  <img src="Falcon 9" alt="Falcon 9 připravený ke startu z mysu Canaveral na Floridě" />
  <figcaption>
    Americká společnost SpaceX jako první na světě opakovaně použila první stupeň nosné rakety Falcon 9 k vynesení družice na oběžnou dráhu.<br> 
    <small><a href="http://www.apimages.com/">SpaceX via AP</a></small>
  </figcaption>
</figure>
```
