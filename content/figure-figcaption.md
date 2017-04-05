# Ilustrující obsah ve stránce: `<figure>` a `<figcaption>`

Značka `<figure>` obvykle slouží ke vložení doplňkového obsahu vztahujícímu se k hlavním obsahu:

```html
<figure>
  <img src="obrazek.jpg" 
    alt="Start rakety Falcon 9">
</figure>
```

Nemusí jít jen o obrázky. Možné je takto vkládat videa, schémata, grafy, tabulky, ilustrace, ukázky kódu nebo třeba reklamy. Klidně ale kusy textu, citace. Prostě cokoliv k čemu se může hodit přidat popisek. 

Může to být  ilustrace či doplnění hlavního obsahu. Prvek `<figure>` může ale tvořit i hlavní obsah, jak za chvíli uvidíte.


## Proč to používat?

Může to mít pozitivní dopad na sémantiku, hlavně při zpracování stránky odečítači obrazovky. Dobře se to styluje. A nakonec: podle specifikace je to jediný správný způsob, jak do HTML vložit ilutraci doplněnou popiskem.

Ukázka používaná v článku je také na Codepenu. http://codepen.io/machal/pen/oZOOer


## `<figure>` je vždy soběstačná, ale ne nezávislá jednotka {#sobestacna}

Soběstačnou jednotku si můžete představit jako jednu větu v textu. Když byste do obrázku dali jen část sdělení věty, `<figure>` použít nemůžete:

```html
<p>
  Start rakety
  <img src="rekl.png" alt="Falcon 9">.
</p>  
```

Obsah elementu `<figure>` ovšem není nezávislý na hlavním obsahu stránky. Buď  je z hlavního obsahu odkazovaný, v hlavním obsahu vložení nebo sám tvoří hlavní obsah. `<figure>` byste tedy neměli použít pro vložení čehokoliv nerelevantního k hlavnímu obsahu stránky.


## Textový popisek: `<figcaption>` {#figcaption}

Je nepovinný. Mělo by jít o první nebo poslední potomek uvnitř `<figure>`:

```html
<figure>
  <img src="obrazek.jpg" alt="…">
  <figcaption>…</figcaption>
</figure>
```

Nojo, ale jak se liší parametr `alt` a popisek `<figcaption>`? 

- `alt` je textový popis obsahu obrázku.
- `<figcaption>` komentuje obrázek v kontextu obsahu, ke kterému se vztahuje.

Zkusím to ukázat:

```html
<figure>
  <img src="falcon.jpg" alt="Pohled zdola na Falcon 9 
    připravený ke startu z mysu Canaveral na Floridě">
  <figcaption>
    Americká společnost SpaceX jako první na světě 
    opakovaně použila první stupeň nosné rakety 
    Falcon 9 k vynesení družice na oběžnou dráhu.
    <br>
    <small>
      Foto: 
      <a href="http://www.apimages.com/">SpaceX via AP</a>
    </small>
  </figcaption>    
</figure>
```

`<figcaption>` samozřejmě může obsahovat plnohodnotný HTML obsah, takže dokáže obsah popsat lépe než `alt`. Může se hodit u složitějších grafů nebo schémat.

Podrobnější pojednání o textových alternativách k obrázkům před lety napsal [Radek Pavlíček pro Zdroják](https://www.zdrojak.cz/clanky/metody-poskytovani-textovych-alternativ-obrazku-shrnuti/).

Tady je ukázka nestylovaného vložení `<figure>` do stránky: [cdpn.io/e/qrgQMw](http://codepen.io/machal/pen/qrgQMw).


## Odkazování na `<figure>` {#odkazovani}

Prvek nemusí být součástí hlavního obsahu. Lze jej přesunout třeba do postranní lišty a pojmenovat pro potřeby odkazu:

```html
<p>
  …jak je vidět <a href="#f-1">na první videu</a>,
  Falcon 9 odstartoval z mysu Canaveral…
</p>

<aside role="complementary">
  <figure id="f-1">
    <video></video>
    <figcaption>První video: …</figcaption>
  </figure>
</aside>
```

Jak už víte z textu o [HTML5 značkách](html5-struktura.md), do `<aside>` dáváme méně významné informace, které se vztahují k hlavnímu obsahu stránky.

Různé asistivní technologie podporují `<figure>` různě. Proto je vhodné kromě HTML odkazu (`<a href="#f-1">`) použít i provázání přes pojmenování („Obrázek 1“). 

Nedoporučuje se používat relativní textové odkazy: „na obrázku níže“, „jak ukazuje následující graf“. Po přestylování stránky totiž přestávají platit.


## Více médií v jednom `<figure>` {#vice-medii}

Fotogalerii s jedním společným popiskem si asi představit umíte. Tohle je samozřejmě správně:

```html
<figure>
  <img src="falcon-1.jpg" alt="…">
  <img src="falcon-2.jpg" alt="…">
  <img src="falcon-3.jpg" alt="…">
  <figcaption>
    …
  </figcaption>
</figure>
```

## Fotogalerie s mnoha obrázky {#zanorovani}

`<figure>` je možné zanořovat, proto se hodí pro vyznačení fotogalerie. Tentokrát s jedním společným a několika samostatnými popisky:

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


## Stylování {#stylovani}

Ve výchozích stylech všech prohlížečů, které jsem během psaní článku testoval, má `<figure>` nastavený vnější okraj zleva i zprava na `40px`. Pravděpodobně se toho budete chtít zbavit:

```css
figure {
  margin-left: 0;
  margin-right: 0;
}
```

Normalize.CSS ani [Reboot](http://www.vzhurudolu.cz/blog/53-reboot) z Bootstrapu to samy neodstraňují.


## Podpora v prohlížečích a čtečkách {#podpora}

Vazba na odečítače obrazovky funguje ve všech aktuálních prohlížečích kromě [všech verzí Exploreru a Safari](http://www.html5accessibility.com/). Plná podpora u prohlížečů je tedy jen otázkou času. 






