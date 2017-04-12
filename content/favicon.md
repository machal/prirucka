# Favikony webu s RealFaviconGenerator

Ikona webu. Kromě tradiční `favicon.ico`, ikony na záložce rozhraní prohlížeče, se dnes „favikony“ zobrazují v celé řadě dalších kontextů: na ploše mobilních operačního systémů nebo jako součást širšího nastavení zobrazování na dlaždicích novějších Windows. 

Proto už ani ona *pitomá favikona* není téma triviální jako před lety. 

![Favicony](dist/images/original/favicon.jpg)

## Jednoduché řešení: použijte generátor

Nezajímají vás detaily a chcete vyřešit problém? Prostě jděte na skvělý web jménem Real Favicon Generator. [realfavicongenerator.net](http://realfavicongenerator.net/)

Nástroj vám vytvoří potřebný HTML kód a všechny externí soubory: obrázky a manifesty. Slouží také ale jako [validátor správného nastavení](http://realfavicongenerator.net/favicon_checker) favikon. Má taky API, různé pluginy pro [Grunt](grunt.md), Gulp a tak dále. Na takovou pitominu slušný ekosystém nástrojů a vědomostí, že? Autoři na tom dále pracují, proto, jestli můžete, [podpořte je](http://realfavicongenerator.net/donate). 

Tím bychom mohli skončit, ale vsadím se, že jste zvědaví, proč je kolem favikon potřeba psát tolik textů a programovat generátory.

Zaměřím se na HTML kód, který RealFaviconGenerator.net vytvořil pro Vzhůru dolů. Studna znalostí kolem favikon je ovšem hlubší. [realfavicongenerator.net/faq](https://realfavicongenerator.net/faq)

Některé další detaily najdete také na JeČas.cz. [jecas.cz/favicon](http://jecas.cz/favicon)

## Detaily pro zvědavce

**Touch ikonu** uvidíte na Androidu nebo iOS, když si web umístíte na plochu. Těchto ikon je ve skutečnosti daleko, daleko více. Jsou to všechny, které v [kompletním seznamu ikon](https://realfavicongenerator.net/faq) začínají na `apple-touch-icon-` nebo `android-chrome-`. Napočítal jsem sedmnáct souborů. Podle RealFaviconGenerator.net stačí soubory vytvořit a do HTML vložit tento kód:

```html
<link rel="apple-touch-icon" sizes="180x180" 
  href="/favicon/apple-touch-icon.png">
```

Dále tady máme standardizovaný **Web App Manifest**, který kromě ikon definuje  barvy a způsob zobrazení. Používá jej Chrome na Androidu. Více na [w3.org](http://www.w3.org/2008/webapps/manifest/):


```html
<link rel="manifest" href="/favicon/manifest.json">
```

V Chrome na Androidu můžete také upravit **barvy rozhraní prohlížeče**. Více na [developers.google.com](https://developers.google.com/web/fundamentals/design-and-ui/browser-customization/#meta_theme_color_for_chrome_and_opera):

```html
<meta name="theme-color" content="#1e3307">
```

Ikona pro **připnutou záložku v Safari na Mac OS**. Více na [developer.apple.com](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html):


```html
<link rel="mask-icon" 
  href="/favicon/safari-pinned-tab.svg" color="#1e3307">
```

Další manifest, tentokrát používaný **Internet Explorerem 11**:


```html
<meta name="msapplication-config" 
  content="/favicon/browserconfig.xml">
<meta name="application-name" 
  content="Vzhůru dolů">
```

`favicon.ico` používá **Internet Explorer**, ale slouží také jako fallback pro další prohlížeče. Je to takzvaný multiformát soubor, který obsahuje ikony v různých velikostech: 16 × 16, 32 × 32 nebo 48 × 48 pixelů:

```html
<link rel="shortcut icon" href="/favicon.ico">
```

Favicona pro **Safari na Mac OS**:


```html
<link rel="icon" type="image/png" 
  href="/favicon/favicon-32x32.png" sizes="32x32">
```

Klasická 16 × 16 ikona pro **všechny ostatní prohlížeče**:


```html
<link rel="icon" type="image/png" 
  href="/favicon/favicon-16x16.png" sizes="16x16">
```


## Dát je do adresáře nebo ne?

Dávám je tam všechny kromě `favicon.ico`. Proto, abych si hlavní adresář projektu nezaplevelil desítkami obrázků. Jenže některé prohlížeče a vyhledávače si favikony  chtějí stahovat právě z hlavního adresáře. Když si k nim ale nadefinujete meta značky, mělo by to být v pořádku. 

`favicon.ico` je výjimka, protože si pro ni do hlavního adresáře sahají starší Explorery a taky roboti vyhledávačů. Tu v rootu nechávám vždy, aby server zbytečně nevracel chyby „404 Nenalezeno“.
