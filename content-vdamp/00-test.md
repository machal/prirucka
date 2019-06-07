# Test

Když se podíváte na základní kostru dokumentu, bude vypadat následovně:

```html
<!doctype html>
<html ⚡ lang="cs">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp-custom>…</style>
    <style amp-boilerplate>…</style>
    <link rel="canonical" href="…">
    <title>Ahoj světe</title>
  </head>
  <body>
    <h1>Ahoj světe, tady AMP</h1>
  </body>
</html>
```

JS:

```js
// ahoj.js
const button = document.getElementById('hello');
button.addEventListener('click', () => {
  const el = document.createElement('h1');
  el.textContent = 'Nazdar!';
  document.body.appendChild(el);
});
```

CSS:

```css
.container {
  padding: 10px;
  background: lightgrey;
}
```

```css
@media screen and (min-width: 600px) {

  .container {
    -moz-display: grid;
    -webkit-display: grid;
    display: grid;
    height: 100vh;
    grid-template-rows: 10em auto 5em;   
    grid-template-columns: auto 30%;
    grid-template-areas:
      "head head"
      "main side"
      "foot foot";
  }
  
  .head {
    grid-area: head;
  }


}  

/* etc. */

body {
  margin: 0;  
}

h2, p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.head,
.foot {
  background: lightgrey;
}
```

CSS:

```css
/* Odkazy */
/* TODO: tmave pozadi v epub */

a,
a:link {
  color: inherit; /* Vzdy v barve textu (viz treba figure/figcaption) */
  /* -webkit-text-fill-color: #2F2B00; TODO http://stackoverflow.com/questions/6263703/style-anchors-in-ibooks-epub */
  text-decoration: none;
  border-bottom: 1px solid #5dafc5;
}
```



Zjednodušený kód vypadá následovně:

```html
<style amp-boilerplate>
  body {
    animation: -amp-start 8s steps(1, end) 0s 1 normal both
  }
  @keyframes -amp-start {
    from { visibility: hidden }
    to { visibility: visible }
  }
</style>
<noscript>
  <style amp-boilerplate>
    body {
      animation: none
    }
  </style>
</noscript>
```

Obsah se nejprve schová, ale pokud se na AMP runtime čeká neúměrně dlouho, po osmi vteřinách se zase zobrazí.

Pro zpravodajský článek se tedy hodí třeba něco takového:

```html
<script type="application/ld+json">
{
 "@context": "http://schema.org",
 "@type": "NewsArticle",
 "mainEntityOfPage": {
   "@type": "WebPage",
   "@id": "https://example.com/clanek"
 },
 "headline": "Název článku",
 "image": [
   "https://example.com/photos/1x1/photo.jpg",
   "https://example.com/photos/4x3/photo.jpg"
 ],
 "datePublished": "2019-02-05T08:00:00+08:00",
 "dateModified": "2019-02-05T08:00:00+08:00", 
 "author": "Franta Vomáčka",
 "publisher": {
   "@type": "Organization",
   "name": "Example.com",
   "logo": {
      "@type": "ImageObject",
       "url": "https://example.com/images/logo.png",
       "width": "300",
       "height": "100"
    }   
  }    
}
</script>
```

Kromě zpravodajského článku můžete takto popsat strukturu obsahu webové stránky, videa nebo receptu.

```html
<button on="eventName:targetId.methodName(arg1=value, arg2=value)">
  Tlačítko vyvolávající akci
</button>
```

