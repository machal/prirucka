# Opravená reklama a analytika

Představte si, že máte vyladěnou stránku. Je rychlá? Hurá!

Teď do ní ale vložíte pět reklamních bannerů, tři měřicí kódy, nějaká ta sdílecí tlačítka a přehrávač videa z YouTube. Hra končí, realita začíná.

Nejspíš je vám jasné, že hezké rychlostní metriky odcházejí v tuhle chvíli do věčných lovišť.

<figure>
<img src="../dist/images/original/todo" alt="">
<figcaption markdown="1">
_Obrázek: Co se stahuje pro samotný web a co pro analytiku a reklamu třetích stran? Ilustrační vodopád načítání externích zdrojů z jednoho velkého českého zpravodajského webu._
</figcaption>
</figure>

I na tohle samozřejmě autoři AMP mysleli. Jak by ne, vždyť za hlavního iniciátora technologie je stále považován Google, který je známý tím, že ho reklama na webech _tak trochu_ živí.

## Přísná pravidla a měřit jen jednou

Obecná odpověď na obavy z nekvalitního kódu třetích stran zní: AMP dává přísná pravidla i jim. To zaprvé. A zadruhé se snaží zobecnit to, co zobecnitelné je. Hned to vysvětlíme.

AMP reklama funguje asi takto: Banner může být nakódovaný ve striktně daném formátu AMP Ads, což je podmnožina AMP komponent. Distribuci souborů  obstarává server, jehož nastavení je předem definováno, opět ve specifikaci AMP. Vložení do stránky je možné jen přes komponenty jako `amp-ad` nebo `amp-sticky-ad`, které zobrazování reklamy dále optimalizují.

Tím se dostáváme k měření. Kromě přítomnosti optimalizovaných komponent jako `amp-analytics` je zde zamezeno negativnímu dopadu na rychlost principem „změř jednou, pošli všem“. Nedochází tedy k tomu, že deset externích služeb využije desetkrát výkon uživatelského zařízení, aby desetkrát změřily to samé.

Pokud vás to zajímá, můžete hned skočit na text o komponentách [pro reklamu a analytiku](https://docs.google.com/document/d/11f3LQGb-u04WPfER8vjkyaMokmx73jwITJ0LvlKI1u4/edit#). Ještě více píšeme [o reklamě v AMP](https://docs.google.com/document/d/18rnJuIl-BGSa1wjRysuBNN4gset5As4MpN4h5Brjpps/edit#) v šesté kapitole.

## Je to vyladěné, ale není zde vše

Je ovšem třeba říct, že u reklamy a analytiky je do AMP zapojený jen omezený počet dodavatelů. I když jsou jejich seznamy dlouhé, někteří méně významní zatím vlastní komponenty pro AMP framework nepřipravili.

AMP je (a musí být) v tomto uzavřené. Nedávalo by smysl, kdyby autoři neuplatňovali na kód třetí strany stejně přísné požadavky jako na kód stránky. Každý dodavatel zatím musí mít vlastní AMP plugin a kontrola tedy probíhá v určité „ruční“ podobě.

Navíc – o některých typech komponent si zde zatím můžeme jen nechat zdát. Napadá nás třeba populární online chat nebo nástroje pro nahrávání uživatelů, jako je Hotjar, či A/B testování jako například Optimizely.

Na druhou stranu – právě tyto komponenty patří mezi ty, jež nejvíce zatěžují výkon stránky a pod záminkou měření zhoršují uživatelský prožitek. Pokud chtějí autoři AMP udržet nejpřísnější standardy pro rychlost, výběr komponent zde bude vždy menší.

O [měření](https://docs.google.com/document/d/1wU9f1eK9gfV09AVCkB_zNOAzmMn9IgDB9RWCi_vlGBo/edit) (hlavně pomocí Google Analytics) píšeme i v závěrečné kapitole.

AMP přichází s inovacemi také v jiné poměrně důležité oblasti, v chování prohlížečů.
