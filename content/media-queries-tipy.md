# Tipy a triky k Media Queries

## Body zlomu vždy se snažte nastavovat podle obsahu

Častou chybou je vymýšlení breakpointů „podle zařízení“. Dejme tomu, že chceme oslovit všechny tablety. Usmyslíme si, že to zařídíme následující podmínkou:

```css
/* Bod zlomu „pro tablety“ (špatně) */
@media only screen 
  and (min-width: 40em) and (max-width: 48em) { 
    /* Kod pro obrazovky mezi 640 a 768 px */
}
```

Vypadá to hezky, ale je to konina. Jak už jsem psal, rozlišení mobilů i tabletů je tolik, že se nelze na nějaké rozmezí pro tablety nebo mobily spoléhat. V naší ukázce tak některé tablety podmínku splní, jiné zase ne. Takový Samsung Nexus 10 má rozlišení na delší straně v hodnotě 1280 pixelů, takže podmínku nesplní. Splní ji naopak mnoho chytrých telefonů, jako třeba iPhone 6 v režimu na šířku se 736 pixely. Media Queries proto k detekci zařízení vůbec nepoužívejte.

„Podmínka pro tablety“ navíc nijak nereflektuje obsah a jeho rozvržení na obrazovce. Tohle by mělo být tou hlavní motivací k přidání bodu zlomu či breakpointu. Media Queries mají vyplynout z obsahu.

Dejme tomu, že máme jednoduchou vodorovnou navigaci, jejíž obsah se nemění. Rozhodujeme se o hodnotě bodu zlomu šířky okna, kdy se navigace z vodorovné stane svislou pro menší displeje.

```css
/* Bod zlomu nastavený podle obsahu */
@media only screen and (min-width: 27.5em) { … }
```

Zvolili jsme `27.5em` (440 pixelů) podle šířky okna, kdy se položky navigace ještě vejdou vedle sebe. Více na Codepenu: [cdpn.io/e/bBPdgQ](http://codepen.io/machal/pen/bBPdgQ)

Jsou ale situace, kdy je nastavení bodů zlomu podle obsahu nemožné. Někdy obsah prostě při tvorbě layoutu neznáme: například když pracujeme na frameworku nebo připravujeme šablonu pro obsah, který má v rukách až koncový uživatel našeho redakčního systému. Jako příklad můžu opět jmenovat Bootstrap, který má body zlomu nastavené pevně. Naštěstí jdou měnit a vždy můžete přidat nějaké vlastní. [getbootstrap.com/css/](http://getbootstrap.com/css/#grid-media-queries)

## Správné je použít `em`, ale lépe mi se pracuje s pixely

Často se vedou spory kolem použití jednotek v dotazech na media. Správná odpověď je: `em`. 

Media Queries většinou nastavujeme kvůli optimální délce řádku písma. Pixely se velikosti písma nepřizpůsobují, proto v situacích jako je uživatelské zvětšení písma nemohou fungovat dobře. A `rem`? S těmi nepracuje korektně Safari, když změníte velikost písma autorsky. Detailní vysvětlení najdete v článku „PX, EM or REM Media Queries?“ [zellwk.com/blog/media-query-units/](https://zellwk.com/blog/media-query-units/)

Při návrhu bodu zlomu se ovšem na web díváme přes okno prohlížeče. Jeho šířka k naší smůle ale nepracuje s `em`, nýbrž s `px`. Proto obvykle nejdřív v hlavě musíme spustit kalkulačku přepočtů z pixelů do `em`. Alespoň v mém případě je ale spouštění kalkulačky náročné na výpočetní zdroje. 

Proto se i vám může hodit ve vývojářském kódu používat pixely a pro produkční kód si je nechat přepočíst do `em`. Pokud využíváte nějaký automatizační nástroj, je zde plugin „postcss-em-media-query“. [github.com/niksy/postcss-em-media-query](https://github.com/niksy/postcss-em-media-query)

## Zanořování Media Queries

Doporučoval jsem vymýšlet body zlomu vždy pro obsah konkrétní komponenty. V kódu bych pak dotaz na media chtěl vyjádřit jako podmnožinu selektoru komponenty:

```css
.el {
  /* Styly pro vše */
  @media only screen and (min-width: 20em) { 
    /* Styly pro zařízení splňující podmínku */
  }  
}
```

Bylo by to krásně přehledné, že? Tento typ zápisu ovšem v prohlížečích nepřipadá v úvahu. Na pomoc byste si museli vzít některý z CSS preprocesorů nebo postprocesor PostCSS. [vrdl.cz/blog/12-css-preprocesory-1](http://www.vzhurudolu.cz/blog/12-css-preprocesory-1) a [postcss.org](http://postcss.org/).

Možné ovšem je zanořování Media Queries do sebe se selektorem uvnitř. Jen pozor, nebude to fungovat v žádném Internet Exploreru, takže spolehlivější je opět využít automat pro zpracování CSS. [cdpn.io/e/xEkKd](http://codepen.io/machal/pen/xEkKd)

## Mobile First psaní kódu

Kromě designérské filozofie můžeme o Mobile First mluvit také v souvislosti s psaním CSS kódu:

```css
/* „Mobile First“ přístup (lepší): */
.el {
  /* Styly pro menší obrazovky */
}

.el {
  @media only screen and (min-width: 25em) { 
    display: flex;
    /* Styly pro větší obrazovky */
  }  
}
```

Pokud design vaší komponenty nese nálepku „Mobile First“, budete pravděpodobně i její kód psát od varianty pro nejmenší displeje. 

Je to ale i obecně výhodnější než opačný, „Desktop First“, přístup. Kód pro menší displeje je obvykle jednodušší. A je lepší další deklarace přidávat než odstraňovat nadefinované, což bychom museli dělat u opačného přístupu:

```css
/* „Desktop First“ přístup (horší): */
.el {
  /* Styly pro větší obrazovky */
  display: flex;
}

.el {
  @media only screen and (max-width: 25em) { 
    display: block;
    /* Styly pro menší obrazovky */
  }  
}
```

## Container Queries: dotazy na vlastnosti rodičovského prvku

Media Queries se dotazují vždy jen na parametry okna prohlížeče. To je fajn, když vymýšlíme body zlomu pro layout obrazovky. Horší je to pro jednotlivé, v něm rozmístěné komponenty. Zvláště pro ty, které se mohou vyskytovat na různých místech uživatelského rozhraní.

Představme si, že bychom se mohli v CSS pát na velikost rodičovského elementu. Ano, většinou nás zajímá právě ten. Mohlo by to pak vypadat třeba takto:

```css
*:media(min-width: 20em) > .el { … }
```

Kód by se pak aplikoval jen v rodičovských elementech, které mají šířku alespoň `20em`.

Specifikace pro Container Queries se teprve rodí, takže pokud nemáte výjimečnou motivaci, doporučuji zatím jen sledovat diskuzi kolem nich. Pěkný je článek „Container Queries: Once More Unto the Breach“ na A List Apart. [http://vrdl.in/fivt0](http://alistapart.com/article/container-queries-once-more-unto-the-breach)

Pro vás, nedočkavé, přikládám i odkaz na jednu z javascriptových implementací, EQCSS. Jen pozor, může to být při překreslování stránky v prohlížeči výpočetně náročnější. [elementqueries.com](http://elementqueries.com/)
