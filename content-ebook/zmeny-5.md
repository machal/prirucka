# SVG a srcset/sizes, nové výzvy pro vkládání obrázků

Díky CSS pixelu a snaze posílat uživateli ve stránce datově co nejúspornější materiál řešíme daleko více otázek než jen — „Mám použít PNG, nebo JPG?“.

Obrázky užívané ve stránkách si nejdříve ale musíme rozdělit do dvou kategorií – obrázky v rozhraní a v obsahu.

## Obrázky v rozhraní: ikony, logotypy, dekorace

Tady je rozhodně jedinou udržitelnou cestou použít vektorovou grafiku. 

Takzvané ikonfonty – tedy ikony vkládané jako znaky ve speciálních webových fontech – považuji za dobré, ale spíše dočasné řešení. Hlavně proto, že fonty nebyly navrženy jako náhrada vektorové grafiky. S ikonfonty jsou spojené problémy s vykreslováním, ale ani práce s nimi nebývá příliš pohodlná.

Zajímavější možnosti nabízí vektorový formát SVG. [vrdl.cz/prirucka/svg](http://www.vzhurudolu.cz/prirucka/svg)

Pro dekorace v rozhraní (vlastní stíny, vlastní vzhled tlačítek nebo rámečků…) je určitě nejvýhodnější využít možností CSS3, alternativně opět SVG.

## Obsahové obrázky: fotografie

Fotky samozřejmě můžete připravit v ohromném rozlišení – klidně více než čtyřnásobném – a v HTML kódu stránky zmenšit.

Vyřešíte problém s `device-pixel-ratio`, ale nárůst datového objemu stránky bude tak šílený, že vás uživatelé brzy jistojistě přijdou ubít svými chytrými telefony. Připomínám, že fotka připravená pro Retina displej (2×) neobsahuje 2×, ale 4× více pixelů, takže její datový objem naroste klidně čtyřnásobně.

V praxi preferuji řešení pomocí nových atributů tagu `<img>` — `srcset` a `sizes`. [vrdl.cz/prirucka/srcset-sizes](http://www.vzhurudolu.cz/prirucka/srcset-sizes)
