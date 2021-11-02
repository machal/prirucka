# Příklad: návrh fotogalerie krok za krokem

Nedivil bych se, kdybyste v této části knihy měli hlavu jako meloun. Jen díky tomu ale máme dost vědomostí, abychom navrhli první komponentu uživatelského rozhraní. A tak nevěšme meloun a pojďme si shrnout, jak budeme postupovat.

1. Do *skic* si nakreslíme všechny možnosti zobrazení komponenty, které nás napadnou.
2. Varianty vyhodnotíme a vybereme vítěznou.
3. Uděláme *prototyp* vybraného řešení.
4. Povíme si něco o předpokladech pro čistou implementaci.

Jak vypadá fotogalerie před naším designérským zásahem? Fotky jsou prostě seřazené pod sebe. To nebude to pravé ořechové, že?

## Skicování

Teď prostě, jak jsem popisoval v kapitole [o skicování](skicovani.md), nabrousíme tužku, přimhouříme oči (to abychom vypadali jako skuteční profíci), a hlavně – vypneme veškeré tendence hodnotit to, co vytváříme. Nakreslíme prostě všechny varianty zobrazení fotogalerie, které nás napadnou.

Než si skici ukážeme, měli bychom si rozmyslet, kde se vlastně fotogalerie nachází v kontextu struktury obsahu stránky detailu produktu.  

### Kde se fotogalerie nachází v hierarchii stránky?

V případě prodeje bot přes internet platí, že obrázek nahradí tisíc slov. Návštěvníci a návštěvnice ForestKid.cz by měli mít možnost si na produkt vytvořit názor hned a bez dalšího klikání. Takže fotky chceme zobrazovat dostatečně velké.

Zároveň jim ale nechceme dát tak zásadní váhu, aby upozadily všechny ostatní informace z horní poloviny stránky. Hlavně pak název produktu a cenu. Řekněme proto, že významem jsou fotografie někde na úrovni názvu produktu a ceny. 

Musíme si také vyjasnit, jestli jsme od našich dodavatelů schopní získat dostatečně kvalitní obrázky produktů pro komponentu tak zásadní váhy. V naší hypotetické situaci ano, ale pozor, neplatí to zdaleka pro každý e-shop nebo web obecně.

A ještě na jednu věc nesmíme zapomenout, a sice na variabilitu obsahu. V našem případě vycházím z toho, že všechny fotografie budeme mít produkčně připravené ořezané na bílém pozadí v poměru 1 : 1 a že jich u jednoho produktu bude mezi třemi a patnácti.

### Posouzení jednotlivých skic

Zpět ke skicám. Já ze sebe dostal šest možností, co vy?

<figure>
<img src="../dist/images/original/vdwd/priklad-skici.jpg" alt="">
<figcaption markdown="1">    
*Šest řešení ve skicách komponenty fotogalerie*
</figcaption> 
</figure> 

1. *Výpis pod sebe*  
Velmi jednoduchý z pohledu ovládání uživateli. V kontextu dalších prvků stránky je ovšem obvykle nepoužitelný. Na malých i velkých displejích odsunuje další informace, jako je cena nebo dostupnost velikostí. Vzpomeňte si také, jak jsem v kapitole [o principech návrhu rozhraní](principy-ui.md) bojoval proti otravně dlouhým stránkám na mobilech. Ne, tahle varianta pro náš skvělý e-shop nebude.
2. *Středně velký náhled s navigací pomocí karuselu*  
Vypadá dobře. Šetří totiž prostor na výšku, ale zároveň zobrazuje jednu fotku dostatečně velkou. Na velkých displejích je možné tuto i další varianty doplnit o rozkliknutí do ještě větší verze pomocí lightboxu. 
3. *Středně velký náhled v karuselu*  
Ve svislém směru je ještě úspornější. Pokud bychom karusel navrhli správně, může jít o moc prima řešení pro malé displeje. Uživatelé velkých monitorů takovou míru úspornosti neocení, tam bychom dali přednost řešení jinému. Jednou z našich zásad ale je [konzistence rozhraní](4-principy-ui.md) napříč všemi zařízeními, vzpomeňte si. 
4. *Malé náhledy*  
Nesplňují náš požadavek zobrazení co největší fotografie bez potřeby klikání.
5. *Lupa*  
Pro prohlížení detailu výřezů považuji lupu za uživatelsky komplikované řešení, které je navíc možné pohodlně ovládat jen na *myšovitých* zařízeních.
6. *Lightbox*  
Zobrazení fotky přes celou obrazovku samo o sobě použít nemůžeme. Necháme si jej jako možný stav některé z našich variant.

Pro ForestKid.cz jsem vybral druhou variantu se středně velkým náhledem a navigací pomocí karuselu. 

Uděláme technický test hypotézy vzešlé ze skicování. Navážeme teď zase na předchozí text [o prototypování v HTML](html-prototypovani.md). 


## Prototyp vybrané varianty

Rychlé demo si vytvoříme na už zmíněném online editoru *CodePen* a použijeme přitom generátor zástupných obrázků *Satyr.dev*. Výsledek si prohlédneme v *Re:view*, neméně skvělém nástroji pro komparativní testování návrhů v mobilních rozlišeních.

Aktuální stav prototypu vidíte na obrázku nebo naživo na CodePenu. [cdpn.io/e/JEKxEK](https://codepen.io/machal/pen/JEKxEK).

<figure>
<img src="../dist/images/original/vdwd/priklad-komponenta-review-1.jpg" alt="">
<figcaption markdown="1">    
*Komparativní pohled na vybraná rozlišení mobilních zařízení s Androidem přes Re:view*
</figcaption> 
</figure> 


Je vidět, že na zařízeních s vyšším poměrem šířky k výšce uvidí uživatelé při načítání stránky spolehlivě jen navigaci, název produktu a obrázky. Jde samozřejmě o prototyp, takže přesná výška těchto elementů nám v této fázi známá není. 

Problém ale zčásti můžeme upravit už teď. Prostě zajistíme, aby se hlavní obrázek nikdy neroztáhl na celou šířku stránky, a zmenšíme tím také výšku komponenty:

```css
.gallery-pane {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}  
```

I tento další krok si můžete vyzkoušet naživo. [cdpn.io/e/XpKOxd](https://codepen.io/machal/pen/XpKOxd)

Vsadím se ale, že při pohledu na obrázek z testování prototypu vás do očí praštilo ještě něco jiného. Právě to taky od prototypů chceme – aby obtěžovaly naše oči tím, co naše mozky nedomyslely. Jasně, myslím tím náhledy ze zařízení držených na šířku.

### Řešení pro zobrazení na šířku 

V režimu landscape je vybrané řešení bohužel velmi neuspokojivé. Naše milá uživatelka uvidí v lepším případě jen horní část hlavního obrázku. Když naroluje na malé navigační obrázky, uvidí zase jen jeho spodní část. Tady bohužel musíme sáhnout po jiném řešení. Které ze skicovaných využívalo lépe šířku?

No jasně, třetí varianta, karusel. Ten totiž nevyžaduje roztažení obrázku do plné šířky okna, což zmenší výšku komponenty. Obrázků se do karuselu vejde více vedle sebe, což opět šetří prostor na výšku. Karusel je navíc návrhový vzor, který bychom tak či tak využili pro menší náhledy obrázků v původním řešení. Pravidlo konzistence zde tedy tak moc neporušujeme.

Když kód pro režim na šířku hodně zjednodušíme, bude vypadat následovně:

```css
@media only screen and (orientation: landscape) {    
  .gallery-pane img {
    width: 30%;
  }

  .gallery-thumbs {
    display: none;
  }  
}
```

Využíváme `orientation: landscape`, jednu z [Media Queries](css3-media-queries.md), o kterých budeme mluvit v další kapitole.

<figure>
<img src="../dist/images/original/vdwd/priklad-komponenta-review-2.jpg" alt="">
<figcaption markdown="1">    
*Výsledný prototyp designu fotogalerie*
</figcaption> 
</figure> 

CodePen výsledného prototypu: [cdpn.io/e/dNXrMe](https://codepen.io/machal/pen/dNXrMe) 

Vy zkušenější jste jistě mírně pozvedli obočí nad schováváním jedné části s obrázky pomocí `display: none`. Tohle v produkčním kódu být nesmí, protože by nám mobilní prohlížeče neviditelné obrázky tak či tak stáhly a zpomalily  tím nehezky načtení stránky.

Je dobré ale na tomto místě zopakovat, že děláme prototypování *designu*. Určité technické zjednodušení je tady namístě, a to v zájmu zrychlení jednotlivých kroků vývoje.

Snad byly na příkladu dobře vidět výhody prototypů přímo v kódu, o kterých jsem už psal.

* Bylo to *brzy v prohlížeči*, takže jsme na nevýhody původně vybraného řešení nepřišli až při drahé technické implementaci.
* Je to *plnohodnotná* webová stránka, takže jsme mohli testovat jakýkoliv kontext. V tomto případě stačily různě velké obrazovky mobilních zařízení. Stejně tak bychom CodePen mohli testovat s uživateli.
* Kód je zčásti *znovu použitelný* a při následné implementaci jej použijeme jako základ.

Jde ovšem pořád jen o mou designérsko-kodérskou hypotézu, kterou bych měl ověřit uživatelským testováním. To je ale téma, které se nám do knížky už nevejde. Zájemce odkážu na už zmíněný kurz „Human-Centered Design: Design zaměřený na člověka“, který je dostupný zdarma. [seduo.cz/human-centered-design](https://www.seduo.cz/human-centered-design)

A ještě odkazy na dva zde zmíněné nástroje:

- *Re:view* – skvělé rozšíření Google Chrome pro komparativní testování návrhů v mobilních rozlišeních. [re-view.emmet.io/](http://re-view.emmet.io/) 
- *Satyr.dev* – vynikající generátor zástupných obrázků pro vaše prototypy. [satyr.dev](https://satyr.dev/)
