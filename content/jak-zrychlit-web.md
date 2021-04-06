# Jak zrychlit web v roce 2021?

V květnu letošního roku proběhne ve vyhledávání Googlu aktualizace zvaná [Page Experience](https://developers.google.com/search/docs/guides/page-experience), kde mají nový význam ukazatele uživatelského prožitku, včetně metrik rychlosti webu zvaných [Core Web Vitals](web-vitals.md).

Podle všech vyjádření z Googlu, které jsem měl možnost číst, nepůjde o velký revoluční posun a pokud nemáte obzvlášť pomalý web, asi se nemusíte bát. 

<!-- AdSnippet -->

V každém případě se ale mít rychlý web vyplatí. Důvody jsem kdysi sepisoval [na blogu](rychlost-nacitani-proc.md), ale detailněji také [na PageSpeed.cz](https://pagespeed.cz/blog/proc-mit-rychly-web). Kromě možných výhod ve vyhledávání k nim patří vliv na obchodní výkonnost webu, včetně konverzního poměru.

V následujícím seznamu tipů pro zrychlení webu nemám ambici být obsahově vyčerpávající. Spíše připomínám metody, které jsou relativně nové, které se mi osvědčily při práci pro klienty, a o kterých jsem psal [na Vzhůru dolů](https://www.vzhurudolu.cz/rychlost-nacitani).

<div class="web-only f-6" markdown="1">
1. [Dobře měřte](#mereni)
2. [Metriky? Sledujte hlavně Core Web Vitals](#metriky)
3. [Lazy loading dejte skoro všude](#lazy-loading)
4. [Nepoužívejte CDN pro kritické zdroje](#ne-CDN)
5. [Preconnect pro kritické zdroje](#preconnect)
6. [Preloadujte, ale šetřete s tím](#preload)
7. [Využijte nové formáty obrázků: AVIF, WebP](#obrazky)
8. [Držte layout](#shift)
</div>

Předpokládám, že základy znáte. Že zmenšujete datový objem, snižujete počet requestů, máte nasazené [HTTP/2](http-2.md) a neděláte moc velké [blbosti](rychlost-myty.md). Pojďme už na ten seznam.

## 1) Dobře měřte {#mereni}

Nezapomeňte, že [skóre nástroje Lighthouse](metrika-lps.md) neudává rychlost webu. Jen zhruba indikuje, kolik problémů na webu máte. V různých oborech vrací různá čísla a většinou nedává smysl usilovat o stoprocentní hodnocení.

<figure>
<img src="../dist/images/original/pagespeed-insights-skore.png" width="1920" height="540" alt="PageSpeed Insights Skóre">
<figcaption markdown="1">
*Obrázek: [Lighthouse Performance Score](metrika-lps.md) je užitečný ukazatel, když víte, jak jej číst. V opačném případě je to jedna velká kulatá past.*
</figcaption>
</figure>

Dívejte se na jednotlivé metriky a snažte se je vylepšit, zejména ty důležité

<figure>
<img src="../dist/images/original/pagespeed-insights-lab.png?2" alt="Metriky rychlosti v Lighthouse">
<figcaption markdown="1">
*Obrázek: Lighthouse Performance Score je fajn, ale důležitější je vidět jednotlivé metriky a filmový pás vykreslování. I to však Lighthouse nebo [PageSpeed Insights](pagespeed-insights.md) nabízejí.*
</figcaption>
</figure>

Když už používáte tyto jednoduché nástroje, dívejte se na data data od uživatelů – z [Chrome UX Reportu](chrome-ux-report.md).

<figure>
<img src="../dist/images/original/pagespeed-insights-crux.png" alt="Data pole v PageSpeed Insights">
<figcaption markdown="1">
*„Data pole“, metriky přímo od uživatelů Chrome pro konkrétní stránku a jejich shrnutí pro celou doménu – v „Origin Summary“.*
</figcaption>
</figure>

Rychlost webu je vždy nutné posuzovat v širším kontextu a ten vám jednorázový test neukáže. Náš nástroj – [PageSpeed.cz](https://pagespeed.cz/) – vám k už uvedenému přidá pohled na vývoj v čase:

<figure>
<img src="https://res.cloudinary.com/vzhurudolu-cz/image/upload/v1591775251/vzhurudolu-blog/page-speed-cz/pagespeed-alza_wp5zz4.png" alt="Přehled v čase v PageSpeed Insights">
<figcaption markdown="1">
*Obrázek: Porovnání rychlosti úvodních stránek prodejců elektroniky, konkrétně vývoj Lighthouse skóre (LPS) v čase. Čím je v grafu vyšší, tím lépe. Zdroj: [Test na PageSpeed.cz](https://pagespeed.cz/r/4c4c72e3abc3)*
</figcaption>
</figure>

Pro vývojáře je pak podstatné umět používat DevTools v prohlížeči, protože žádný checklist, žádný článek, ani tento vám nevyřeší konkrétní problémy na konkrétní stránce.

<blockquote class="twitter-tweet"><p lang="cs" dir="ltr">Jednomu z největších omylů kolem <a href="https://twitter.com/hashtag/RychlostWebu?src=hash&amp;ref_src=twsrc%5Etfw">#RychlostWebu</a> říkám „checklistová optimalizace“.<br><br>Práce podle kontrolních seznamů je důležitá, ale velké posuny skoro nikdy neudělá. <br><br>Pro dobré optimalizace potřebujeme chirurgicky přesně najít problémy. A taky vymyslet jejich efektivní řešení.</p>&mdash; Martin Michálek (@machal) <a href="https://twitter.com/machal/status/1362670762860118017?ref_src=twsrc%5Etfw">February 19, 2021</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Vývojáři, naučte se používat Chrome DevTools, zejména nástroje Performance, Network a Lighthouse, naučte se tam číst, co brzdí rychlost vašeho webu.

👉  **Tip:** Záznam z webináře [Ladíme rychlost v Chrome DevTools](https://www.vzhurudolu.cz/video/webinar-devtools-rychlost).

## 2) Metriky? Sledujte hlavně Core Web Vitals {#metriky}

[Metrik rychlosti](metriky-rychlosti.md) je opravu hodně, pro různé projekty se hodí různé ukazatele.

<figure>
<img src="../dist/images/original/metriky-rychlosti.jpg" alt="">
<figcaption markdown="1">
*Postupný vznik událostí při vykreslování stránky.*
</figcaption>
</figure>

Raději než na [Lighthouse skóre](metrika-lps.md) se v prvé řadě se zaměřte na Core Web Vitals získané od uživatelů – alespoň z Chrome UX Reportu. Ony totiž určují, jak si povedete v Page Experience signálech v Googlu.

- [LCP](metrika-lcp.md) – největší vykreslení obsahu. Asi nejdůležitější metrika, protože udává rychlost načtení. Mám o ní [video](https://www.vzhurudolu.cz/video/webinar-lcp).
- [FID](metrika-fid.md) – první nečinnost procesoru, tedy zhruba jak moc máte pokažený javascriptový kód. Obvykle je na webech v pořádku, protože v rámci Core Web Vitals je nastavená málo přísně. V syntetických měřeních sledujte [TBT](metrika-tbt.md).
- [CLS](metrika-cls.md) – kumulativní posun layoutu. Nová a poněkud zmatená a matoucí metrika. I o ní jsem natočil hodinové [video](https://www.vzhurudolu.cz/video/webinar-cls).

<figure>
<img src="../dist/images/original/web-vitals.png" alt="Jednotlivé metriky Web Vitals">
<figcaption markdown="1">
*Obrázek: Jednotlivé metriky Web Vitals a jejich doporučené hodnoty.*
</figcaption>
</figure>

Teď, když jsme se naučili základně měřit a sledovat správné metriky, můžeme přistoupit k technickým metodám, které rozšířily kufřík s optimalizačním nářadím v posledních letech.

👉  **Tip:** Záznam z webináře [Jak správně měřit rychlost webu?](https://www.vzhurudolu.cz/video/webinar-rychlost-mereni).

## 3) Lazy loading dejte skoro všude {#lazy-loading}

[Líné načtení](lazy-loading-obrazku.md) pro `<img>` nebo `<iframe>` opravdu pomůže. Sníží datový objem stránky, vylepší prioritizaci zdrojů.

<figure>
<img src="../dist/images/original/lazyloading.jpg" alt="Lazy loading obrázků">
<figcaption markdown="1">
*Odložené načtení ušetří to data a může zrychlit vykreslení stránky.*
</figcaption>
</figure>

Je to dostupné už skoro ve všech prohlížečích, takže stačí přidat atribut `loading`:

```html
<img src="obrazek.jpg" loading="lazy"
  alt="…" width="200" height="200">
```

Je to možné nastavit i pro vkládané rámce:

```html
<iframe src="https://example.com" loading="lazy">
</iframe>
```

Zatím to nepodporuje Safari, ale tam nic použitím nativního líného načtení nerozbijete. A v moderních prohlížečích by byla škoda použít javascriptovou knihovnu k něčemu, co prohlížeče zvládají samy.

Líně ale nenačítejte zdroje důležité pro první viewport a už vůbec ne elementy, které jsou označené jako „LCP prvky“.

👉  **Tip:** O líném načtení mám [hodinový webinář](https://www.vzhurudolu.cz/kurzy/webinar-lazy-loading).

## 4) Nepoužívejte CDN pro kritické zdroje {#ne-CDN}

Díky přechodu Chrome na [partitioned (dělenou) cache](partitioned-cache.md), přestaly CDN dávat smysl pro sdílení zdrojů mezi weby. Zdroje kritické pro první vykreslení na externí CDN raději nedávejte.

## 5) Preconnect pro kritické zdroje {#preconnect}

[Včasné připojení](preconnect.md) pomocí `<link rel=preconnect>` může stránku urychlit, pokud jsou kritické zdroje uložené na jiných doménách. Nepoužívejte to ale na všechny domény, kde jsou uložené zdroje stránky, například u analytiky to většinou smysl nedává.

## 6) Preloadujte, ale šetřete s tím {#preload}

`<link rel=preload>` může opravdu hodně pomoci, hlavně s metrikou LCP. Jenže zpravidla řeší problém, který vznikl špatným nakódovaním stránky. A může přinést problémy nové. Přemýšlejte, než [přednačtení](preload.md) nasadíte. Je to hack a může to být past.

👉  **Tip:** O preload mluvím [na videu z webináře o metrice LCP](https://www.vzhurudolu.cz/video/webinar-lcp).

## 7) Využijte nové formáty obrázků: AVIF, WebP {#obrazky}

Formát [WebP](webp.md) jde použít už ve všech moderních prohlížečích. Jděte do toho. Experimentujte také s famózně úsporným [AVIF](avif.md).

## 8) Držte layout {#shift}

Optimalizace pro metriku Cumulative Layout Shift vyžaduje, abyste asynchronním prvkům jako jsou obrázky nebo externí zdroje drželi prostor v rozvržení. U [obrázků](img-pomer-stran.md) je to už poměrně snadné, jinde pomůže nová metoda [s funkcí `aspect-ratio()`](css-aspect-ratio.md) nebo starší [triky](css-pomer-stran.md).

👉  **Tip:** O metrice CLS mám také [video z webináře](https://www.vzhurudolu.cz/video/webinar-cls) a lidé říkají, že je bezva.
