# Open Graph a oEmbed: meta značky pro sociální sítě (Facebook, Twitter, LinkedIn, Slack…)

V tomto článku si budeme povídat o starých dobrých HTML značkách postavený na specifikaci [Open Graph](https://ogp.me/) od Facebooku.

Asi je skoro všichni znáte, ale všiml jsem si, že je tam pár nuancí, které řada lidí nezná. A taky jsem to ještě na Vzhůru dolů nezdokumentoval, což je pro mě silný důvod.

Takže čtěte, i když si myslíže, že tomu rozumíte. Slibuju, že tady nezůstanu u základů.

## Co to přesně je a jak se to liší od `<title>`?

Základy ovšem přeskočit nemůžu, protože sem pár neznalých čtenářek a čtenářů určitě zavítá.

Meta značky pro sociální sítě a moderní chatovací programy vytvářejí automatické náhledy stránek v momentě, kdy uživatel někde sdílí URL vašeho webu.

<figure>
<img src="../dist/images/original/meta-open-graph.png" alt="">
<figcaption markdown="1">
*Takhle to může vypadat na Facebooku, Twitteru, LinkedIn nebo Slacku, když se to dobře nastaví.*
</figcaption>
</figure>

Dále platí, že do `<head>` stránky musíme uvádět značky `<title>` a `<meta name="description">`:

```html
<title>CSS grid: mřížka v kostce (Video)</title>
<meta name="description" content="Kupte si kurz „CSS grid: mřížka v kostce“. Praktické video postavené…">
```

Asi víte, že tohle je nutné a že se to použije na mnoha různých místech – počínaje názvem okna v prohlížeči a konče výsledky vyhledávání Googlu nebo Seznamu. Tam to bude ovlivňovat například i šanci, jak moc bude uživatel chtít kliknout právě na ten váš výsledek.

Teoreticky by to mohlo stačit všem sociálním sítím. Jenže často je struktura informací potřebných pro náhled v prohlížeči, vyhledávači a nebo pro Twitter dost odlišná.

Ten hlavní rozdíl je v obrázku, který po vás sociální síť vyžaduje:

```html
<meta property="og:image" content="/img/webinar-css-grid.png">
```

Bez téhle metaznačky se při sdílení vašeho článku, produktu nebo firemní stránky zobrazí jen výchozí náhled nebo obrázek žádný. A žádný obrázek, to je výrazně nižší šance kliknutí během boje o uživatelskou pozornost.

Proto je dobré, abyste alespoň obrázek měli doplněný vždy.

## Validátory

V tomhle textu chci, jak je ostatně u mě zvykem, postupovat salámovou metodou. Nezahltit vás těžkými sousty hned zkraje. Proto si k informaci o nutnosti přiřadit obrázek přidejte ještě odkaz na tento validátor:

→ [metatags.io](https://metatags.io/)

Vrátí vám docela přesnou vizuální emulaci toho, jak bude vaše URL vypadat při sdílení na různých sociálních sítích.

<figure>
<img src="../dist/images/original/meta-open-graph-validator.png" alt="">
<figcaption markdown="1">
*Mám to dobře. Alespoň mi to ukazuje MetaTags.IO.*
</figcaption>
</figure>

Tenhle validátor ovšem může za rok, dva být neplatný nebo prostě nebude dostačovat vašim pokročilým nárokům.

Proto se vždy dívejte ještě do validátorů pro sociální sítě, které vás zajímají:

- [Facebook: Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter: Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn: Post Inspector](https://www.linkedin.com/post-inspector/inspect/)
- [Pinterest: Rich Pins Validator](https://developers.pinterest.com/tools/url-debugger/)

Minimálně ty první dva (Facebook a Twitter) doporučuji projít u každého typu URL, které na webu máte. Vzhledem k významnému podílu návštěvnosti se sociálních sítích je to nutnost.

Takže teď víte, že máte vždy připravit obrázek a pak se případně nechat řídit validátory. Pojďme ukrojit další, tentokrát více hutné, kolečko salámu.

## Plné znění meta značek pro obsahovou stránku

Obyčejný článek nebo detail produktu může mít strukturu meta značek podobnou s tou mojí:

```html
<meta property="og:title" content="CSS grid: mřížka v kostce (Video)">
<meta property="og:description" content="Kupte si kurz…">
<meta property="og:image" content="/img/webinar-css-grid.png">
<meta property="og:url" content="https://www.vzhurudolu.cz/video/webinar-css-grid">
<meta property="og:site_name" content="Vzhůru dolů">
<meta property="og:type" content="product">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@vzhurudolu">
```

Následuje vysvětlení:

- `og:title` a `og:description` je titulek a popisek pro sociální sítě a chaty. Můžete jej kreativně využít k lepší proklikovost.
- `og:image` je onen důležitý obrázek.
- `og:url` je kanonické URL, které si přičte všechna sdílení a lajkování této stránky. Prý je to povinné i pro URL, která nemají kanonickou adresu.
- `og:site_name` použijte raději vždy,ale hodí se hlavně u webů, které sedí na více (sub)doménách a chtějí používate jednu značku.
- `og:type` je důležité označení typu stránky. Různé typy mohou mít různé zobrazení náhledů. Možné typy jsou např. `article`, `book`, `product`… Více k tomu později.
- `twitter:card` je označení typu karty, což umožňuje změnit Twitter.
- `twitter:site` odkazuje na Twitter účet, který se může u karty objevit s výzvou k přihlášení odběru.

## Open Graph, Twitter Cards a hlavně oEmbed

Asi jste si všimli, že kromě technologie [Open Graph](https://ogp.me/) od Facebooku (prefix `og:`) se zde používají také [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started) (prefix: `twitter:`).

V praxi se můžete setkat ještě s třetí specifikací – [oEmbed](https://oembed.com/), která na to technicky jde trochu jinak.

V HTML definujete jen cestu k XML nebo JSON dokumentu:

```html
<link rel="alternate" type="application/json+oembed"
  href="http://flickr.com/services/oembed?url=http%3A%2F%2Fflickr.com%2Fphotos%2Fbees%2F2362225867%2F&format=json"
  title="Bacon Lollys oEmbed Profile">
```  

V JSON pak definujete potřebně parametry pro vzhled sdílecího náhledu:

```json
{
  "version": "1.0",
  "type": "photo",
  "width": 240,
  "height": 160,
  "title": "ZB8T0193",
  "url": "http://farm4.static.flickr.com/3123/2341623661_7c99f48bbf_m.jpg",
  "author_name": "Bees",
  "author_url": "http://www.flickr.com/photos/bees/",
  "provider_name": "Flickr",
  "provider_url": "http://www.flickr.com/"
}
```

Vypadá to zajímavě, hlavně z pohledu vývojářů, protože díky umístění „bokem“ není potřeba dále zvětšovat HTML kód.

Zdá se, že minimálně obecně s oEmbed [Facebook](https://developers.facebook.com/docs/features-reference/oembed_read) i [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/oembed-api) pracovat umí.

<!-- TODO socsítě odpovědi? -->

O využití oEmbed pro zobrazení náhledu ve vaší webové aplikaci dříve psal Bohumil Jahoda [na Ječas.cz](https://jecas.cz/oembed).

## Typy obsahu

Vraťme se teď k nejrozšířenějšímu Open Graph a k tématu kategorií obsahu. Specifikovat přesnou kategorii obsahu a sémantický popis vašeho obsahu může být užitečné.

Kdysi jsem viděl případové studie, jak je  Facebook schopný přidat „lajknutý“ mediální obsah typu video do oblíbeného obsahu konkrétního uživatele a tím vytvořit o trochu silnější vazbu mezi provozovatelem webu a oním uživatelem sociální sítě.

Pokud tedy připravujete obsah jednoho z následujících typů, zvažte, zda ty metaznačky ještě více nerozšířit:

- články
- knížky
- profil uživatele
- hudba
- video

Například pro případ typu `article` by se metaznačky mohly rozšířit následovně:

```html
<meta property="og:type" content="article">
<meta property="og:url" content="http://www.example.com/">
<meta property="og:image" content="http://example.com/image.jpg">
<meta property="og:description" content="…">
<meta property="og:site_name" content="…">
<meta property="article:published_time" content="2013-09-17T05:59:00+01:00">
<meta property="article:modified_time" content="2013-09-16T19:08:47+01:00">
<meta property="article:section" content="…">
<meta property="article:tag" content="…">
```

Více o typech obsahu píší [ve specifikaci Open Graph](https://ogp.me/#types) nebo [v článku na Moz.com](https://moz.com/blog/meta-data-templates-123).

<!-- ATD viz Evernote -->


