# Jak AMP funguje?

AMP dělá dvě věci:

- Zčásti omezuje a zčásti rozšiřuje možnosti tvorby webů pomocí HTML, CSS a JavaScriptu.
- Inovuje distribuci. Stránky se automaticky optimalizují a jsou dostupné na serverech platforem, nikoliv našem hostingu.

Proces mezi publikováním a zveřejněním stránky probíhá asi takhle:

1. [Vyrobíte AMP verzi stránky](#1)
2. [Řeknete robotům, že máte AMP](#2)
3. [Roboti uloží AMP stránku na CDN](#3)
4. [Stránku přechroustá AMP optimalizátor](#4)
5. [Stránka je připravená pro distribuci platformami](#5)

Mírně to zjednodušíme, technické detaily necháme na později. Podívejte se na schéma:

*TODO IMG Schéma fungování AMP*

## 1) Vyrobíte AMP verzi stránky {#1}

Za pomocí prostředků, které zmiňuji v dalším textu vyrobíte zvláštní verzi stránky. Trik je v tom, že může (a myslím, že by *měla*) vycházet z vaší současné stránky. Prostě jen některé věci vyměníte.

V HTML máme například kód pro vložení obrázku takovýto:

```html
<img src="obrazek.jpg" alt="…">
```

V AMP verzi jej pak vložíme takhle:

```html
<amp-img src="obrazek.jpg" alt="…"
  layout="responsive" width="1" height="1">
```

O detaily nepřijdete, vydržte do dalšího textu. 

Pak samozřejmě AMP stránku publikujeme na nějaké zvláštní adrese. Na Vzhůru dolů je například příručka pro CSS vlastnost Flexbox dostupná na této adrese:

```url
https://www.vzhurudolu.cz/prirucka/css3-flexbox
```

AMP verze je pod „lomítko AMP“:

```url
https://www.vzhurudolu.cz/amp/prirucka/css3-flexbox
```

Znění adresy je pak zcela na vás. To uvidíte hned v dalším kroku.

## 2) Řeknete robotům, že máte AMP {#2}

Do původní verzi stránky vložíme meta značku informující o tom, že AMP máme:

```html
<link rel="amphtml"
  href="https://www.vzhurudolu.cz/amp/prirucka/grunt">
```

Do AMP verze pak informaci kanonické adrese, naší původní stránce:

```html
<link rel="canonical"
  href="https://www.vzhurudolu.cz/prirucka/css3-flexbox">
```

Ano, je to stejná kanonická adresa jako v případě, že chcete zabránit duplicitám při optimalizaci pro vyhledavače.

Kanonická adresa zde slouží k tomu, aby distribuční platformy mohly například nabídnout odkaz na původní adresu. Může se hodit pro případ, že uživatel chce obsah sdílet.

## 3) Roboti uloží AMP stránku na CDN {#3}

Googlebot nebo roboti jiných platforem pak prostě stránku stáhnou a následně uloží na CDN. U Google a českým AMP webů to bude na adresu obsahující `https://www.google.cz/amp/s/`.

## 4) Stránku přechroustá AMP optimalizátor {#4}

AMP optimalizátor je software, který má na starosti převést určité části předepsaného kódu do podoby, která bude výhodná pro použití na CDN.

Vezměme například povinný kód pro vložení základních stylů do AMP stránky. Zjednodušeně vypadá takto:

```html
<style amp-boilerplate>…</style>
```

To, že jsou AMP styly vložené přímo do HTML je výhodné jen pokud je dokument umístěný na vašem hostingu.

AMP optimalizátor ale uvedené převede na následující:

```html
<link rel="stylesheet" href="https://cdn.ampproject.org/v0.css">
```  

Na CDN se totiž počítá s tím, že servírování externích stylů nebude vadit tak jako na vaší doméně. Předpokládám, že se tady dělá nějaký preload a že se očekává, že uživatelé budou mít tento externí stylopis v dočasné paměti prohlížeče z dřívějších návštěv jiných AMP webů.

Pak už je to připravené a dané k dispozici všem distributorům AMP.

Pokud na webu zveřejníte AMP verzi, celý proces by měl trvat hodiny až maximálně nízké jednotky dní. K tomu se ale ještě také vrátíme.

## 5) Stránka je připravená pro distribuci platformami {#5}

Aktuálně AMP používá Google ve svém Search, vyhledavač Bing stejným způsobem. LinkedIn, Twitter a Pinterest pak ve svých mobilních aplikacích. 

Jakým přesně způsobem? Ptáte se správně, je zde další text.
