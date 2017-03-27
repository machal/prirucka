## CSS pixel 

Na školeních se stále setkávám se strachem mnohých webových tvůrců z ohromných rozlišení posledních modelů mobilů. Výrobci dnes udávají až FullHD plochu pro zobrazování, což je 1920×1080 pixelů. Někdy jen na čtyřpalcovém displeji. Netrapme se tím. Nás, webových tvůrců, se toto rozlišení netýká. Prohlížeče jej pro nás přepočítávají do „CSS rozlišení“. 

V tabulce na příkladu několika zařízení ukazuji přepočet mezi hardwarovými a CSS rozlišením:

| Zařízení | HW rozlišení| CSS rozlišení |
| -------- | ----------  | ------------- |
| iPhone 4 | 640×960 | 320×480 |
| Google Nexus 7 | 800×1280 | 604×966 |
| HTC One | 1080×1920 | 360×640 |
| Xiaomi Mi3 | 1080×1920 | 270×480 |

Vykreslení „CSS pixelů“ do harwarového rastru pak obstarají samy prohlížeče.

![CSS Pixel](dist/images/original/vdwd/css-pixel.png)

*Obrázek: Poměr mezi hardwarovými pixely udávanými výrobci a CSS pixely, se kterými pracují webový vývojáři u vybraných zařízení.*

Na Vzhůru dolů je pro zájemce o CSS pixel více informací. [vrdl.cz/prirucka/css-pixel](http://www.vzhurudolu.cz/prirucka/css-pixel)

Zjednodušeně z toho vyplývá, že dekorativní grafiku bychom teď měli dělat ve vektorových formátech a u fotografií zajistit prohlížeči dost variant pro to, aby si mohl pro různě husté rastry vybrat tu správnou. Více si o nich řekneme [v kapitole o obrázcích](kap-media.md).
