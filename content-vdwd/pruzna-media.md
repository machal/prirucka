# Pružná média: obrázky, video a vkládané elementy

Jak zařídit, aby se obrázky, video a prvky vkládané přes `<iframe>` přizpůsobovaly šířce rodičovského elementu a ještě k tomu zachovávaly poměr stran?

## Pružné obrázky

Vezmeme to rovnou od kódu, co říkáte?

```css
.content img {
  max-width: 100%;
  height: auto;
}
```

`.content img` – ano, vím. Selektor by mohl být jednodušší (jen `img`), ale mám ve zvyku pružnost aplikovat jen na obrázky obsahové. Obvykle se nehodí takto ošetřovat například logotyp nebo ikony v hlavičce či patičce stránky.

`max-width: 100%` – nastaví šířku obrázku podle šířky rodiče. Neudělá ale ten ošklivý trapas, že by jej roztahoval nad rámec jeho velikosti v pixelech a tím deformoval. To by udělala nezbednější kolegyně mezi vlastnostmi, `width`.

`height: auto` – uvést musíme, aby si obrázek zároveň zachoval poměr stran. V opačném případě by se poměrově deformoval.

Vyzkoušet si to můžete na CodePen, kde je to ještě doplněno o drobné ošetření  občas neposlušného Internet Exploreru 8. [cdpn.io/e/jWebge](http://codepen.io/machal/pen/jWebge)


## Pružné vkládané elementy se zachovaním poměru stran

Vkládáte do stránky kód třetí strany pomocí `<iframe>`, máte tam `<video>` nebo nedejbože Flash v `<object>`?

Většina takto vkládaných elementů třetí strany má jakés-takés responzivní chování zajištěno díky výchově na straně dodavatele. Vám se ale může stát, že i u nich potřebujete zachovat poměr stran. 

```css
.rwd-object {
  position: relative;
  height: 0;
  padding-bottom: 60%; /* Udává poměr stran */
}

.rwd-object-in {
  position: absolute;
  width: 100%;
  height: 100%;
}
```

V HTML to pak bude vypadat asi takto:

```html
<p class="rwd-object">
  <iframe class="rwd-object-in" …></iframe>
</p>
```

A zase si to pojďme vysvětlit:

`position: relative` – vytvoří nový omezující blok, ve kterém lze absolutně pozicovat.

`height: 0` – potřebujeme proto, abychom výšku elementu mohli nastavit pomocí vnitřních okrajů prvku. Svislý padding se totiž narozdíl od vlastnosti `height` počítá ze šířky elementu, takže s jeho pomocí určíme poměr stran rodičovského bloku.

Poměr stran je zde tedy 100 ku 60, takže 5:3. Například pro 16:9 bychom do padding-bottom vložili `56.25%` (9 / 16 * 100).

`.rwd-object-in` – pak aplikujeme přímo na `<iframe>` nebo jiný vkládaný element. Ten už má jen za úkol se sobecky roztahovat na celou výšku i šířku rodiče.

Máte svrbění si to hned zkoušet?  Neváhejte, Codepen se na vás těší. [cdpn.io/e/BdniC](http://codepen.io/machal/pen/BdniC)
