# Google Analytics: průvodce měřením pro webové vývojáře

Jednoduchá odpověď zní: nainstalovat Technical Performance Dashboard, ale půjdeme i dál. Podíváme se co mohou vývojáři sledovat a na nutné základy práce s daty.

## Vše v jednom: skvělý Technical Performace Dashboard

Pokud si do Analytics [přidáte tuto palubní desku](https://analytics.google.com/analytics/gallery/#posts/search/%3F_.tab%3DMy%26_.sort%3DDATE%26_.start%3D0%26_.viewId%3DsJXXMwZtSCmLNYXy-gmozA/), získáte *Analytics-konečně-zábavné-pro-vývojáře™*, to vám garantuji.  

![image alt text](image_0.png)

[Technical Performance Dashboard od Vigetu](https://www.viget.com/articles/a-google-analytics-dashboard-for-front-end-developers) vám z nitra Analytics vytáhne aktuální údaje týkající se rychlosti načítání, prohlížečů a podílu mobilních zařízení. Prostě tu část statistik, která zajímá právě vás. Pokud ji chcete mít ještě obohacenou o podíl návštěv bez spuštěného Javascriptu, výčet javascriptových chyb nebo velikosti viewportu (nikoliv rozlišení obrazovky), je potřeba doinstalovat jejich plugin [Trackomatic](https://www.viget.com/articles/making-cross-client-google-analytics-tracking-easy-with-trackomatic). Je to fajn, zkuste to.

## Statistiky pro webové vývojáře vestavěné v Google Analytics

### Rychlost webu

* Přehledy najdete v rozhraní Analytics pod *Chování > Rychlost webu*.
* Hodí se vidět *Časování stránek* napříč různými kontexty: prohlížeči, regiony atd.
* V *Časování uživatelů* mohou být vaše vlastní měření - např. jak rychle se načetl konkrétní obrázek nebo kdy se stáhly fonty z Google Fonts. [Je to potřeba nastavit](https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings).
* Standardně se pro měření rychlosti používá jednoprocentní vzorek vašich shlédnutí stránky. Pokud to chcete jinak, [je potřeba měřit s jiným nastavením](http://www.ericmobley.net/measuring-performance-google-analytics/). Ja například používám 'siteSpeedSampleRate': 50.

Mimochodem, o dalších [nástrojích pro analýzu rychlosti načítání](rychlost-nastroje.md) píšu ve speciálním článku.

### Prohlížeče, operační systémy, mobilní zařízení

* Menu: *Technologie > Prohlížeč* a pak odkazy nad tabulkou.   
<small>Zdejší statistiky se hodí pro zjištění, zda technické vybavení vaší cílové skupiny není v něčem specifické. (Starší, ale povětšinou pořád platné články k prohlížečům: [Stav trhu mobilních prohlížečů](http://www.vzhurudolu.cz/blog/18-mobilni-prohlizece) a [Proč podporovat i prohlížeče pod pětiprocentní hranicí podílu](http://www.vzhurudolu.cz/blog/20-pet-procent)).</small>
* V menu *Cílové publikum > Mobilní zařízení > Přehled* najdete momentální podíl desktopu, tabletů a mobilů.  
<small>Někde tam uvidíte i přehled nejpoužívanějších mobilních zařízení, ale těch je děsně moc, takže to obvykle k ničemu nebývá. Může snad jen sloužit jako rada jaké si koupit testovací zařízení [pro testování responzivních webů](jak-testovat-responzivni-weby.md).</small>

## Tipy pro práci s Analytics

### Všechny zásadnější změny zapisujte do poznámek

Analytics disponují výborným nástrojem pro evidenci zásadních změn v historii webu. Poznámky najdete v menu *Administrátor > Výběr dat > Poznámky* nebo přímo v přehledech vpravo po kliknutí na šipku pod grafem. 

Kromě vývojářských aktivit – jako je nasazení větší aktualizace nebo [optimalizace rychlosti](http://www.vzhurudolu.cz/kurzy/rychlost-nacitani) – se samozřejmě hodí i pro další větší změny kolem webu (úprava designu, publikování zásadnějšího obsahu…). Marketingové aktivity je lepší měřit pomocí [URL s parametry](https://support.google.com/analytics/answer/1033867?hl=cs).

### Nechávejte si posílat e-mailové reporty

Předpokládám, že jako vývojáři nebudete rozhraní Analytics navštěvovat zrovna každý den. Hodí se ale nastavit si vlastní upozornění a e-mailové reporty. (*Administrátor > Výběr dat > Vlastní upozornění / Naplánované e-maily* nebo v přehledech nahoře). Příklady: nárůst počtu mobilních uživatelů, pomalé načítání webu nebo snížení podílu starých prohlížečů pod požadovanou úroveň.

### Ladění: Analytics tajemství zbavená

Možnosti jak Analytics debugovat je docela dost:

* [Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) – rozšíření pro Chrome, které pro základní ladění úplně stačí. Výsledky zobrazuje v konzoli DevTools.
* Ladící verzi Analytics: [analytics_debug.js](https://google-analytics.com/analytics_debug.js). Prostě ji volejte v měřícím kódu a opět otevřete konzoli v DevTools.
* [WASP.inspector](http://www.webanalyticssolutionprofiler.com/) – komplexní rozšíření do Chrome DevTools pro průzkum všech doplňků stránky. Nejen pro Analytics, ale i Tag Manager nebo Facebook kódy.
* [Event Tracking Tracker](https://chrome.google.com/webstore/detail/event-tracking-tracker/npjkfahkbgoagkfpkidpjdemjjmmbcim) – ladění ukládání událostí do Analytics. Ty nezmizí ani při přechodu na jinou stránku. 

![TODO](image_1.png)

### Single Page apky a měření shlédnutí „stránky"

Analytics standardně změří shlédnutí stránky jen při konvenčním postupu, kdy se každá nová stránka načítá se serveru na vlastním URL.

Pokud měníte URL z javascriptu, pak to Analytics nepoznají a novou *pageview* nezapočtou. Musíte jim to výslovně říct. Takže ke každé změně URL javascriptem dávejte kód podobný tomuto:

```javascript
ga('send', 'pageview', '/new-page.html', {'title': 'Nová stránka'} );
```

Více [v podrobnějším článku od H1.cz](http://blog.h1.cz/aktualne/zkresleni-navstevnosti-dynamickych-webu/).

### Vlastní reporty: například ukládání breakpointu

Do Analytics si můžete uložit co chcete. V některých případech může být například užitečné [měřit aktivní breakpoint:](https://philipwalton.github.io/talks/2015-11-19/#31)

```javascript
var breakpoints = {
  sm: '(max-width: 767px)',
  md: '(min-width: 768px) and (max-width: 991px)',
  lg: '(min-width: 992px) and (max-width: 1199px)',
  xl: '(min-width: 1200px)'
};

Object.keys(breakpoints).forEach(function(breakpoint) {
  var mql = window.matchMedia(breakpoints[breakpoint]);
  if (mql.matches) {
    ga('set', 'dimension1', breakpoint);
  }
});
```

Tuhle vychytávku mám z prezentace Philipa Waltona [Google Analytics for Web Developers](https://philipwalton.github.io/talks/2015-11-19/), která je skvělá úplně celá a rozhodně si je projděte.

Dosavadními postupy získáme dost dat. Teď ještě, abychom je nějak uměli vyhodnocovat.

## Jak číst čísla z Analytics? Úplné základy

Pokud se nepovažujete za odborníka nebo odbornici, na vyhodnocování čísel si raději nějaké najděte. Opět platí, že mylnými závěry můžete nasekat zbytečné chyby.

Data vždy berte s rezervou. I když Analytics umí rozumně odfiltrovat roboty a spam, nedůvěřujte jim bezhlavě.

### Co je vlastně ta „návštěva", kterou vidím v rozhraní Analytics? 

Analytics operují s pojmy uživatel, návštěva a hit, což je například interakce se se stránkou. Jeden uživatel může během dne udělat více návštěv a v rámci každé z nich pak mnoho hitů.

Je důležité vědět, že k ukončení návštěvy a startu nové dochází v případě dvou návštěv na těchto hranicích: půlnoc, 30 minut nečinnosti uživatele, příchodu uživatele z jiného zdroje.

Analytics měří návštěvy standardně jen mezi při přechodu mezi jednotlivými stránkami. Více informací o pojmu návštěva najdete v kurzu [Jana Tichého na Seduo](https://www.seduo.cz/uvod-do-webove-analytiky/lekce/14).

### Jak porovnávat data? 

Vždy analyzujte větší časový úsek. Při porovnávání období také vedle sebe dávejte stejně období stejného typu. Pozor na sezonnost, online nebo i offline marketing, pozor na jiný počet vikendů a svátků v období a tak dále.

### Vlastní výběry dat pro vývojáře

V rámci jedné služby si můžete nastavit různé *Výběry dat*. Zde si můžete sestavit přehledy, provést jiná nastavení, přičemž výchozí výběr dat zůstane zachován. Můžete si pak třeba:

* nastavit jiné cíle – třeba konkrétní rychlost načtení stránky
* použít jiné poznámky, filtrace, upozornění
* nastavit uživatele pouze do vymezeného výběru dat

### Vlastní segmenty

V reportech lze přidat další segment (nahoře je volba *+ Přidat segment*, která po kliknutí umožní vybrat z možností). Vyberete si část vaší návštěvnosti, kterou pak můžete porovnávat s jinou částí. Výchozí segment je pochopitelně „Všichni uživatelé“. 

Pro začátek vám budou stačit přednastavené segmenty. Segmentem mohou být třeba návštěvy z mobilních zařízení nebo návštěvy, během nichž se na webu něco zakoupilo.

Jen pozor na *vzorkování*, tedy výběr dat. Při použití segmentu se může stát, že vidíte třeba jen 10 % návštěv. 

## Shrnutí základního použití Google Analytics pro vývojáře

* Naučte se Analytics [správně vložit](google-analytics-pridani.md).
* Nainstalujte si [Technical Performance Dashboard](https://www.viget.com/articles/a-google-analytics-dashboard-for-front-end-developers) a sledujte čísla o rychlosti webu, prohlížečích a dalších technických aspektech.
* Zásadnější změny zapisujte, nechte si posílat emailové reporty.
* Využívejte nástroje pro debugování Analytics.
* Nastavte měření i tam, kde se nemění URL adresa.
* Naučte se data správně číst, porovnávat a vyhodnocovat.

<small>Na článku spolupracovali: [Daniel Střelec](https://www.danielstrelec.cz/) a [Miroslav Pecka](http://miroslavpecka.cz/).</small>



