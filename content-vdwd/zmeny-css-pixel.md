# CSS rozlišení 

Na školeních se stále setkávám se strachem mnohých webových tvůrců z ohromných rozlišení posledních modelů mobilů. Výrobci dnes udávají až FullHD plochu pro zobrazování, 1920×1080. Znamená to, že se na pětipalcových displejích budou weby zobrazovat stejně jako na velkých monitorech? Jen budou zmenšené do trpasličí velikosti?

Netrapme se tím. Nás, webové tvůrce, hardwarové rozlišení nezajímá. Prohlížeče jej pro nás přepočítávají do „CSS rozlišení“. 

V tabulce na příkladu několika zařízení ukazuji přepočet mezi hardwarovými a CSS rozlišením:

| Zařízení | Hardwarové rozlišení| CSS rozlišení |
| -------- | ------------------  | ------------- |
| iPhone 4 | 640×960 | 320×480 |
| Google Nexus 7 | 800×1280 | 604×966 |
| HTC One | 1080×1920 | 360×640 |
| Xiaomi Mi3 | 1080×1920 | 270×480 |

Vykreslení „CSS pixelů“ do harwarového rastru pak obstarají samy prohlížeče. 

## „Retina“ displeje

Přepočet se týká naprosté většiny dnešních mobilních zařízení a občas nějakého toho notebooku. Většinou se označují jako „Retina“ displeje. To není úplně přesné, protože jde o marketingový název těchto typů displejů na zařízeních společnosti Apple. Ale to nevadí. Hlavně, že si budeme rozumět.


## `px` je „CSS pixel“

CSS jednotka „pixel“ dříve vždy znamenala hardwarový pixel. Dnes už to neplatí. `px` se přepočítává do „CSS pixelů“, přepočtené jednotky, která se na každém zařízení vykresluje do jiného počtu hardwarových pixelů. Prostě do CSS rozlišení, které vidíte nahoře v tabulce. Nic zásadního to ale nemění.

Detailní technikálie tady ale nejsou tak důležité jako důsledky. 


## Nesprávně vložená bitmapová grafika bude rozmazaná

Vezměme, že do stránky vložíme obrázek kružnice, který jsme si předtím připravili v grafickém programu. Odtamtud ji vyexportujeme ve výšce a šířce 10 pixelů. Teď ji vložíme do stránky:

```html
<img src="kruznice_10x10.png" 
  width="10" height="10" alt="Kružnice">
```  

![Běžný vs. Retina displej](dist/images/original/bezny-vs-retina.jpg)

Na běžném displeji se soubor s obrázkem obsahující data pro 10×10 pixelů vykreslí do mřížky 10×10 hardwarových pixelů. Jenže na „Retina“ displeji je potřeba ho vykreslit do mřížky 20×20. Tady vznikají problémy, protože prohlížeč má data jen pro poloviční počet pixelů. Polovinu si tedy musí vymýšlet. Snaží se to dělat chytře, ale…

## Řešení: používejte SVG a responzivní obrázky

Celý problém v důsledku znamená, že vaše obrázky budou na těchto displejcíh působit více či méně rozmazaně. 

Řešením tedy je používat co nejvíce vektorové grafiky. Využívejte pro ni formát SVG. [vrdl.cz/prirucka/svg](www.vzhurudolu.cz/prirucka/svg)

U fotografií a obecně bitmapových formátů (PNG, JPG…) je pak potřeba zajistit prohlížeči dost variant pro to, aby si mohl pro různě husté rastry vybrat tu správnou. Více si o nich řekneme [v textu o responzivních obrázcích](responzivni-obrazky.md).
