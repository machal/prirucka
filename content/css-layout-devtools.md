# CSS layout a DevTools

Vsadím se, že už jen při listování touto knížkou jste si všimli, že rozvržení v CSS jsou sakra složitá věc.

Máme ale štěstí, že autoři nástrojů pro vývojáře to vidí také a v „devtools“ všech dnešních prohlížečů je řada nadstaveb, které nám práci s gridem a flexboxem usnadní.

## Firefox, pak Chrome a nakonec i Safari

Lídrem trhu bychom v této oblasti mohli s klidným srdcem jmenovat autory Firefoxu.

<figure>
<img src="../dist/images/original/vdlayout/devtools-layout-firefox.png" width="1600" height="900" alt="Livesport.cz v DevTools Firefoxu">
<figcaption markdown="1">
*CSS grid Inspector v DevTools Firefoxu používaný na Livesport.cz.*
</figcaption>
</figure>

Už v březnu 2017, zároveň s implementací CSS gridu do Firefoxu přibyl propracovaný CSS grid Inspector. Jediný prohlížeč nezávislý na velké korporaci v té době patřil v oblasti vývojářského pohodlí mezi lídry trhu.

Firefox ale od té doby bohužel prošel krizí, kdy musel snižovat počet lidí, kteří vývojářské nástroje navrhují a programují.

Někde jsem pod dojmy z nevyváženosti množství vývojářů pracujících na Firefoxu a Chrome napsal, že prohlížeč od Googlu všechny dobré vlastnosti Firefoxu rychle zkopíruje.

<figure>
<img src="../dist/images/original/vdlayout/devtools-layout-chrome.png" width="1600" height="900" alt="Livesport.cz v DevTools Chrome">
<figcaption markdown="1">
*Jako dvojče. CSS grid na Livesport pitvaný pomocí vývojářských nástrojů Chrome.*
</figcaption>
</figure>

V tomto případě to ale trvalo mnoho let, až do podzimu 2020. Tehdy přišli autoři Chrome s vlastní verzí, pojmenovanou „CSS grid debugging tools“, velmi silně inspirovanou Firefoxem. [vrdl.in/griddevchr](https://developer.chrome.com/blog/new-in-devtools-87/)

A co Safari? Jako skoro vždy – dlouho nic a pak to přišlo. V březnu 2021 představili velice podobný nástroj.

V květnu 2021 je možné zkoumat grid jen v Safari Technology Preview, ale myslím, že než tyhle texty vydám, bude to už dostupné v běžném Safari, které mají majitelé počítačů od Applu k dispozici.

## Co přesně můžete v prohlížečích zkoumat?

Pojďme se na tyhle nástroje podívat z větší blízkosti.

V Chrome zkoumání gridu nebo flexboxu zapnete takto:

1. Pusťte na stránce DevTools: F12 nebo Ctrl/Cmd+Alt/Option+I.
2. Otevřete záložku Elements. Prvky, které je možné takto ladit mají štítek „grid“ nebo „flex“. Klikněte na štítek.
3. Na stránce se vám pak objeví překryvná vrstva, která nese více informací o daném rozvržení.
4. Ve vývojářských nástrojích navíc přibyla záložka „Layout“, kde je seznam všech flexových a gridových prvků, plus také další informace.

Pokud používáte Firefoxu, v návodu namísto záložky Elements dosadíte Inspector.

Osobně se mi zdá, že Firefox má v této oblasti pořád alespoň malý náskok. Zejména jejich překryvná vrstva pro ladění gridu je navržená velmi dobře.

<figure>
<img src="../dist/images/original/vdlayout/devtools-layout-firefox-detail.png" width="1600" height="900" alt="Livesport.cz v DevTools Chrome">
<figcaption markdown="1">
*Překryvná vrstva ve Firefoxu. Zkoumám tam tento Codepen: [cdpn.io/e/bXeWjb](https://codepen.io/machal/pen/bXeWjb?editors=1100)*
</figcaption>
</figure>

V překryvné vrstvě gridu a flexboxu ve Firefoxu krásně vidím [linky, oblasti a další pojmy](css-grid-pojmy.md), které jsou při návrhu gridu podstatné.

Chrome ale přišel s jednou novou vlastností, která se mi moc líbí.

<figure>
<img src="../dist/images/original/vdlayout/devtools-layout-ikony.png" width="1600" height="900" alt="Vizualizace vlastností flexboxu v DevTools Chrome">
<figcaption markdown="1">
*Chrome: Vizualizace a možnost přenastavení vlastností layoutu.*
</figcaption>
</figure>

Ve velmi složité oblasti, kterou představují vlastnosti [gridu](css-grid.md), [flexboxu](css-flex.md) a [zarovnávání](css-box-alignment.md) je tohle dobrý směr. Bez vizuální ztvárnění začíná být velmi těžké si hodnoty vlastností zapamatovat.

Těším se, co nám konkurence prohlížečů ještě v tomhle směru přinese a zda se Firefoxu podaří těmito chytrými vlastnostmi alespoň v některých věcech porážet rozjetý tým Chrome.

Odkazy na texty představující tyto nástroje v jednotlivých prohlížečích:

- „Firefox 52 for developers“ [vrdl.in/griddevfir](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/52)
- „Chrome 87: What's New In DevTools“ [](https://developer.chrome.com/blog/new-in-devtools-87/)
- „WebKit: Introducing CSS grid Inspector“. [vrdl.in/griddevsaf](https://webkit.org/blog/11588/introducing-css-grid-inspector/)
