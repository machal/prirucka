# <figure>, <figcaption>

Značka `<figure>` slouží ke vložení obrázku, videa, schématu, grafu, tabulky, ilustrace nebo ukázky kódu. Prostě netextového obsahu dovnitř textu:

```html
<figure>
  <img src="obrazek.jpg" alt="…">
</figure>
```

Musí to ale být soběstačná jednotka. Tu si můžete představit jako jednu větu v textu. Když byste do obrázku dali jen část sdělení věty, `<figure>` použít nemůžete:

```html
<p>
  A řekl: 
  <blockquote><img src="rekl.png" alt="Dneska ti to fakt sluší"></blockquote>
</p>  
```

Obrázek, video nebo ilustraci je možné okomentovat popiskem ve `<figcaption>`. Mělo by jít o první nebo poslední potomek uvnitř `<figure>`:

```html
<figure>
  <img src="obrazek.jpg" alt="…">
  <figcaption>…</figcaption>
</figure>
```


## Jak se liší parametr `alt` a popisek `<figcaption>`?

- `alt` je textový popis obsahu obrázku.
- `<figcaption>` komentuje obrázek v kontextu obsahu, ke kterému se vztahuje.

Zkusím to ukázat:

```html
<figure>
  <img src="falcon.jpg" alt="Pohled zdola na Falcon 9 připravený ke startu z mysu Canaveral na Floridě">
  <figcaption>
    Americká společnost SpaceX jako první na světě opakovaně použila první stupeň nosné rakety Falcon 9 k vynesení družice na oběžnou dráhu.
    <br><small>Foto: <a href="http://www.apimages.com/">SpaceX via AP</a></small>
  </figcaption>
</figure>
```

`<figcaption>` samozřejmě může obsahovat plnohodnotný HTML obsah, takže dokáže obsah popsat lépe než `alt`. Může se hodit u složitějších grafů nebo schémat.

Podrobnější pojednání o textových alternativách k obrázkům napsal [Radek Pavlíček pro Zdroják](https://www.zdrojak.cz/clanky/metody-poskytovani-textovych-alternativ-obrazku-shrnuti/).


## Odkazování na `<figure>`

Prvek nemusí být součástí hlavního obsahu. Lze jej přesunout třeba do postranní lišty a pojmenovat pro potřeby odkazu:

```html
<p>
  …jak je vidět <a href="#f-1">na obrázku 1</a>,
  Falcon 9 odstartoval z mysu Canaveral…
</p>

<aside role="complementary">
  <figure id="f-1">
    <img src="obrazek.jpg" alt="…">
    <figcaption>Obrázek 1: …</figcaption>
  </figure>
</aside>
```

Jak už víte z textu o [HTML5 značkách](html5-struktura.md), do `<aside>` dáváme méně významné informace, které se vztahují k hlavnímu obsahu stránky.

Různé asistivní technologie podporují `<figure>` různě. Proto je vhodné kromě HTML odkazu (`<a href="#f-1">`) použít i provázání přes pojmenování („Obrázek 1“). 

Nedoporučuje se používat relativní textové odkazy: „na obrázku níže“, „jak ukazuje následující graf“. Po přestylování stránky totiž přestávají platit.

## Fotogalerie

`<figure>` je možné zanořovat, proto se hodí pro vyznačení fotogalerie:


```html
<figure>
  <figcaption>
    Fotogalerie ze startu Falcon 9
  </figcaption>
  <figure>
    <img src="falcon-1.jpg" alt="…">
    <figcaption> … </figcaption>
  </figure>
  <figure>
    <img src="falcon-2.jpg" alt="…">
    <figcaption> … </figcaption>
  </figure>
</figure>
```

