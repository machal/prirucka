# Ilustrace ve stránce: figure a figcaption

Značka `&lt;figure&gt;` slouží k vložení ilustrací vztahujících se k  hlavnímu obsahu:

```html
<figure>
  <img src="obrazek.jpg" 
    alt="Start rakety Falcon 9">
</figure>
```

Nemusí jít jen o obrázky. Je možné  takto vkládat videa, schémata, grafy, tabulky, ilustrace, ukázky kódu nebo třeba reklamy. Klidně ale kusy textu, citace. Prostě cokoliv, k čemu se může hodit přidat popisek. 

<!-- AdSnippet -->

Obvykle značkou vkládáme ilustraci či doplnění hlavního obsahu. Prvek `&lt;figure&gt;` ale někdy použijeme i pro hlavní obsah stránky. To za chvíli uvidíte.


## Proč to používat?

Může to mít pozitivní dopad na sémantiku, hlavně při zpracování stránky odečítači obrazovky. Ale nijak zásadní pomoc to myslím v době psaní článku není.

Dobře se to styluje. Ale hlavně: je to jediný rozumný způsob, jak do stránky vložit ilustraci doplněnou popiskem.


## `&lt;figure&gt;` je vždy soběstačná, ale ne nezávislá jednotka {#sobestacna}

Soběstačnou jednotku si můžete představit jako jednu větu v textu. Kdybyste do obrázku dali jen část sdělení věty, `&lt;figure&gt;` použít nemůžete:

```html
<p>
  Start rakety
  <img src="falcon-9.png" alt="Falcon 9">.
</p>  
```

Obsah elementu `&lt;figure&gt;` ovšem není nezávislý na hlavním obsahu stránky. Buď  je z hlavního obsahu odkazovaný, v hlavním obsahu vložený nebo sám tvoří hlavní obsah. `&lt;figure&gt;` byste tedy neměli použít pro vložení čehokoliv nerelevantního k hlavnímu obsahu stránky.


## Textový popisek: `&lt;figcaption&gt;` {#figcaption}

Je nepovinný. Mělo by jít o první nebo poslední potomek uvnitř `&lt;figure&gt;`:

```html
<figure>
  <img src="obrazek.jpg" alt="…">
  <figcaption>…</figcaption>
</figure>
```

Nojo, ale jak se liší parametr `alt` a popisek `&lt;figcaption&gt;`? 

- `alt` je textový popis obsahu obrázku.
- `&lt;figcaption&gt;` komentuje obrázek v kontextu obsahu, ke kterému se vztahuje.

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

Jak vidíte, `&lt;figcaption&gt;` může obsahovat plnohodnotný HTML obsah. Takže dokáže obrázek popsat lépe než `alt`. To se vám bude hodit u složitějších grafů nebo schémat.

<!-- AdSnippet -->

Podrobnější a stále platné pojednání o textových alternativách k obrázkům před lety napsal [Radek Pavlíček pro Zdroják](https://www.zdrojak.cz/clanky/metody-poskytovani-textovych-alternativ-obrazku-shrnuti/).


## Odkazování na `&lt;figure&gt;` {#odkazovani}

Prvek nemusí být součástí hlavního obsahu. Lze jej přesunout třeba do postranní lišty a pojmenovat pro potřeby odkazu:

```html
<p>
  …jak je vidět <a href="#f-1">na prvním videu</a>,
  Falcon 9 odstartoval z mysu Canaveral…
</p>

<aside role="complementary">
  <figure id="f-1">
    <video></video>
    <figcaption>První video: …</figcaption>
  </figure>
</aside>
```

Jak už víte z textu o [HTML5 značkách](html5-struktura.md), do `&lt;aside&gt;` dáváme méně významné informace, které se vztahují k hlavnímu obsahu stránky.

Různé asistivní technologie podporují `&lt;figure&gt;` různě. Proto je vhodné kromě HTML odkazu (`&lt;a href="#f-1"&gt;`) použít i provázání přes pojmenování („Obrázek 1“). 

<!-- AdSnippet -->

Nedoporučuji používat relativní textové odkazy: „na obrázku níže“ nebo „jak ukazuje následující graf“. Po přestylování stránky totiž přestávají platit.


## Více médií v jednom `&lt;figure&gt;` {#vice-medii}

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

`&lt;figure&gt;` je možné zanořovat, proto značku klidně využijte pro vyznačení fotogalerie. Tentokrát s jedním společným a několika samostatnými popisky:

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

Ve výchozích stylech všech prohlížečů, které jsem během psaní článku testoval, má `&lt;figure&gt;` nastavený vnější okraj zleva i zprava na `40px`. Pravděpodobně se toho budete chtít zbavit:

```css
figure {
  margin-left: 0;
  margin-right: 0;
}
```

Normalize.CSS ani [Reboot](http://www.vzhurudolu.cz/blog/53-reboot) z Bootstrapu to samy neodstraňují.


## Podpora v prohlížečích a odečítačích {#podpora}

Vazba na odečítače obrazovky funguje ve všech aktuálních prohlížečích kromě [všech verzí Exploreru a Safari](http://www.html5accessibility.com/). Plná podpora u prohlížečů je asi jen otázkou času. 

<!-- AdSnippet -->

A co odečítače obrazovky? Testoval jsem to v Chrome přes VoiceOver na Macu a NVDA na Windows. Obrázek i popisek z ukázky v pohodě přečtou. Na druhou stranu nijak speciálně nehlásí, že jde o obrázek s popiskem nebo přímo značku `&lt;figure&gt;`. Ale to se samozřejmě může v různých čtečkách různit a do budoucna změnit.

Ukázka používaná v článku je na CodePenu. [cdpn.io/e/oZOOer](http://codepen.io/machal/pen/oZOOer)




