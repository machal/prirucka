# Tipy a triky k Media Queries

Doporučím vám nastavovat body zlomu podle obsahu a dávat přednost komponentovým před globálními. V produkčním kódu byste měli u Media Queries mít jednotku `em`. Podíváme se na způsob psaní Mobile First a povíme si něco o budoucnosti – o Element Queries.


## Body zlomu se vždy snažte nastavovat podle obsahu

Častou chybou je vymýšlení breakpointů „podle zařízení“. Dejme tomu, že chceme oslovit všechny tablety. Usmyslíme si, že to zařídíme následující podmínkou:

```css
/* Bod zlomu „pro tablety“ (špatně) */
@media only screen 
  and (min-width: 40em) and (max-width: 48em) { 
    /* Kod pro obrazovky mezi 640 a 768 px */
}
```

Vypadá to hezky, ale je to konina. Jak už jsem psal, rozlišení mobilů i tabletů je tolik, že se nelze na nějaké rozmezí pro tablety nebo mobily spoléhat. V naší ukázce tak některé tablety podmínku splní, jiné zase ne. 

Takový Samsung Nexus 10 má rozlišení na delší straně v hodnotě 1280 pixelů, takže podmínku nesplní. Splní ji naopak mnoho chytrých telefonů, jako třeba iPhone 6 v režimu na šířku se 736 pixely. Media Queries proto k detekci zařízení vůbec nepoužívejte.

Vždy se při vymýšlení bodu zlomů snažte zaměřit na obsah a jeho rozvržení na obrazovce. Media Queries mají vyplynout z obsahu.

Dejme tomu, že máme jednoduchou vodorovnou navigaci, jejíž obsah se nemění. Rozhodujeme se o hodnotě bodu zlomu šířky okna, kdy se navigace z vodorovné stane svislou pro menší displeje.

```css
/* Bod zlomu nastavený podle obsahu */
@media only screen and (min-width: 27.5em) { … }
```

Zvolili jsme `27.5em` (440 pixelů) podle šířky okna, kdy se položky navigace ještě vejdou vedle sebe. Více na CodePenu: [cdpn.io/e/bBPdgQ](https://codepen.io/machal/pen/bBPdgQ)

Jsou ale situace, kdy je nastavení bodů zlomu podle obsahu nemožné. Někdy obsah prostě při tvorbě layoutu neznáme: Například když pracujeme na frameworku nebo připravujeme šablonu pro obsah, který má v rukách až koncový uživatel našeho redakčního systému. Jako příklad můžu opět jmenovat Bootstrap, který má body zlomu nastavené pevně. Naštěstí jdou měnit a vždy můžete přidat nějaké vlastní. 


## Komponentové a globální body zlomu

Obsahové body zlomu nejčastěji definuji podle obsahu konkrétních komponent. Říkám jim *komponentové*. Jako příklad vezměme záložkovou navigaci:

```css
/* Komponentový bod zlomu */
@media only screen and (min-width: 16em) { 
  .tabs { display: flex; }
}
```

To ale neznamená, že nepotřebujete body zlomu *globální*. Ty se nejčastěji hodí pro nastavení layoutu stránky:

```css
/* Komponentový bod zlomu */
@media only screen and (min-width: 40em) { 
  .page-layout { display: flex; }
}
```

Globální breakpointy jsou obvykle uložené v nějaké hodnotě sdílené napříč projektem – v proměnné CSS preprocesoru a podobně. Mohou je pak samozřejmě přebírat i komponenty.


## Správné je použít `em`, ale autorům se obvykle lépe pracuje s `px`

Často se vedou spory kolem použití jednotek v Media Queries. Správná jednotka je `em`, alespoň ve všech mně známých případech.

Jednotka `px` se nepřizpůsobuje změně velikosti písma, proto nefunguje dobře v situacích, jako je uživatelské zvětšení či zmenšení písma.

A `rem`? S těmi v Media Queries nepracuje korektně Safari, když změníte velikost písma autorsky. Takže by v produkčním kódu našich webů mělo být `em`. Detailní vysvětlení najdete v článku „PX, EM or REM Media Queries?“ [zellwk.com/blog/media-query-units/](https://zellwk.com/blog/media-query-units/)

Při návrhu bodu zlomu se ovšem na web díváme přes okno prohlížeče. Jeho šířka k naší smůle ale nepracuje s `em`, nýbrž s `px`. Proto obvykle nejdřív v hlavě musíme spustit kalkulačku přepočtů z pixelů do `em`. Alespoň v mém případě je ale spouštění kalkulačky náročné na výpočetní zdroje. 

Proto se i vám může hodit ve vývojářském kódu používat pixely a pro produkční kód si je nechat přepočíst do `em`. Pokud využíváte nějaký automatizační nástroj, je zde plugin „postcss-em-media-query“. [github.com/niksy/postcss-em-media-query](https://github.com/niksy/postcss-em-media-query)


## Zanořování Media Queries

Doporučoval jsem vymýšlet body zlomu vždy pro obsah konkrétní komponenty. V kódu bych pak podmínku chtěl vyjádřit jako podmnožinu selektoru komponenty, abych tím i vizuálně v kódu vyjádřil jejich vztah:

```css
.el {
  /* Styly pro vše */
  @media only screen and (min-width: 20em) { 
    /* Styly pro zařízení splňující podmínku */
  }  
}
```

Bylo by to krásně přehledné, že? Tento typ zápisu ovšem v prohlížečích nepřipadá v úvahu. Na pomoc byste si museli vzít některý z CSS preprocesorů nebo postprocesor PostCSS. 

Možné ovšem je zanořování Media Queries do sebe se selektorem uvnitř:

```css
@media only screen and (min-width: 100px) {
  @media only screen and (max-width: 3000px) {
    .el {
        color: red;
    }
  }  
}
```

Jen pozor, nebude to fungovat v žádném Internet Exploreru, takže spolehlivější je opět využít automat pro zpracování CSS, jako je preprocesor. Živá ukázka různých typů zanořování je na CodePenu. [cdpn.io/e/xEkKd](https://codepen.io/machal/pen/xEkKd)


## Psaní kódu stylem Mobile First

Kromě [designérské filozofie](mobile-first.md) můžeme o Mobile First mluvit také v souvislosti s psaním CSS kódu:

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

Je to ale i obecně výhodnější než opačný přístup, „Desktop First“. Kód pro menší displeje je obvykle jednodušší. A je lepší další deklarace přidávat než odstraňovat nadefinované, což bychom museli dělat u opačného přístupu:

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

## Element Queries: podmínky týkající se vlastností rodičovského prvku

Media Queries se dotazují vždy jen na parametry okna prohlížeče. To je fajn, když vymýšlíme body zlomu pro layout obrazovky. Horší je to pro jednotlivé, v něm rozmístěné komponenty. Zvláště pro ty, které se mohou vyskytovat na různých místech uživatelského rozhraní.

Představme si, že bychom se mohli v CSS ptát na velikost rodičovského elementu. Ano, většinou nás zajímá právě ten. Mohlo by to pak vypadat třeba takto:

```css
/* Od šířky 20em naskládej položky vedle sebe: */
@element ".item" and (min-width: 20em) {  
  $this {
    display: flex;
  }
}
```

Kód by se aplikoval, pokud by šířka rodiče elementu `.item` byla alespoň `20em`. Ukázka je v kódu javascriptové implementace konceptu – EQCSS.

Problém je právě v té závislosti na Javascriptu. Při havárii JS by vám přestalo fungovat CSS. A nebude to také výkonnostně optimální. Specifikace pro Element Queries se teprve rodí, takže pokud nemáte výjimečnou motivaci, doporučuji zatím jen sledovat diskuzi na toto téma. Bližší informace mám na blogu. [vrdl.cz/p/element-queries](https://www.vzhurudolu.cz/prirucka/element-queries)
