# Tipy a triky k Media Queries

V produkčním kódu byste měli u Media Queries mít jednotku `em`. Podíváme se na způsob psaní Mobile First a povíme si něco o budoucnosti – o Element Queries.


## Správné je použít `em`, ale autorům se obvykle lépe pracuje s `px`

Často se vedou spory kolem použití jednotek v Media Queries. Správná jednotka je `em`, alespoň ve všech mně známých případech.

Jednotka `px` se nepřizpůsobuje změně velikosti písma, proto nefunguje dobře v situacích, jako je uživatelské zvětšení či zmenšení písma.

A `rem`? S těmi v Media Queries nepracuje korektně Safari, když změníte velikost písma autorsky. Takže by v produkčním kódu našich webů mělo být `em`. Detailní vysvětlení najdete v článku „PX, EM or REM Media Queries?“ [zellwk.com/blog/media-query-units/](https://zellwk.com/blog/media-query-units/)

Při návrhu bodu zlomu se ovšem na web díváme přes okno prohlížeče. Jeho šířka k naší smůle ale nepracuje s `em`, nýbrž s `px`. Proto obvykle nejdřív v hlavě musíme spustit kalkulačku přepočtů z pixelů do `em`. Alespoň v mém případě je ale spouštění kalkulačky náročné na výpočetní zdroje. 

Proto se i vám může hodit ve vývojářském kódu používat pixely a pro produkční kód si je nechat přepočíst do `em`. Pokud využíváte nějaký automatizační nástroj, je zde plugin „postcss-em-media-query“. [github.com/niksy/postcss-em-media-query](https://github.com/niksy/postcss-em-media-query)


## Zanořování Media Queries

Doporučuji vymýšlet body zlomu nejlépe vždy pro obsah a design konkrétní komponenty. V kódu bych pak podmínku chtěl vyjádřit jako podmnožinu selektoru komponenty, abych tím i vizuálně v kódu vyjádřil jejich vztah:

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
