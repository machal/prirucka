# Google Analytics: průvodce pro přidání webu

Přidání nového webu do Analytics může vypadat jako jednoduchá záležitost, ale není tomu tak. Tenhle návod je primárně určený pro webové vývojáře, takže nepředpokládám hlubokou znalost problematiky.

## Vložení přes Google Tag Manager nebo do kódu stránky?

Pravděpodobně máte po ruce markeťáka, analytika nebo jiného specialistu na měření. Tento váš kolega nebo kolegyně už nejspíš používá [Google Tag Manager](https://www.google.com/analytics/tag-manager/), česky Správce značek nebo také GTM. 

Z pohledu vývojáře to je skript umožňující vkládat další skripty. Tag Manager je ovšem mince o dvou stranách: 

* Z pohledu *markeťáka* výborná věc, která umožní vkládat kódy měřících, remarketingových nebo testovacích služeb přímo do kódu. Tedy bez vývojářů, což má nesporné výhody. Ale těch [důvodů je z pohledu markeťáka více](http://miroslavpecka.cz/blog/5-duvodu-pro-google-tag-manager/).
* Očima *vývojáře* je to ale potenciální problém, který při špatném nastavení může neblaze ovlivnit rychlost načítání stránky. No a tu by na starost měli mít především vývojáři. Ostatně je v zájmu všech účastníků vývoje webu [rychlost řešit](http://www.vzhurudolu.cz/prirucka/rychlost-nacitani-proc). 

U svých webů mám plný přístup ke kódu a zároveň jsem nejčastější uživatel Analytics, takže Tag Manager je zbytečná vrstva. Vy ale pravděpodobně budete v jiné situaci a nezbývá, než zvážit pro a proti konkrétní implementace a s analytikem se dohodnout.

### Pokud se rozhodnete pro Google Tag Managera

Obstarání měření v Analytics a dalších nástrojích necháte na expertovi s přístupem do Tag Managera. Pokud jej máte na starosti sami, nezapomeňte [na správné nastavení](https://www.danielnytra.cz/nastaveni-google-tag-manager/).

### Vložení Analytics do zdrojáku webu: obvykle je lepší asynchronní verze

I v případě přímého vložení se o jeho nastavení poraďte s expertem nebo expertkou. [Vložení podle Google](https://developers.google.com/analytics/devguides/collection/analyticsjs/) můžete provést dvěma způsoby. Buď vezmete oficiální skript nabízený v rozhraní Analytics nebo tento asynchronní, který vám doporučím já:

```html
<!-- Google Analytics -->
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->
```

Stačí co nejvýše do kódu každé stránky vašeho webu vložit tento kód a nahradit `UA-XXXXX-Y` vašim „Property (Tracking ID)“.

V čem je tahle verze lepší? Klade důraz na rychlost stažení a spuštění skriptu v moderních prohlížečích. 

Standardně nabízená verze bez značky `<script>` totiž bere až příliš velké ohledy na staré Explorery – osmičku a devítku. Pokud ty ve vaší cílovce netvoří významnou část, použijte vždy tento *rychlejší* kód.

Před časem psal o Analytics kódu optimalizovaném pro rychlost [David Grudl](https://phpfashion.com/rychlejsi-stranky-s-google-universal-analytics). Jeho skript je rovněž asynchronní, ale přidává parametr `defer`. Tím se zajistí neblokující načítání i ve starších Explorerech verze 8 a 9. Jenže se v nich skript spustí [až po rozparsování HTML](http://jecas.cz/async-defer#defer-async), ve kterém mohou být běžné synchronní skripty. Může se tedy stát, že se měření spustí tak pozdě, že se ani nezapočítá. Dávám proto přednost výše uvedenému oficiálnímu asynchronnímu kódu.

Dále budeme s přidáním nového webu pokračovat přímo v rozhraní Analytics. 

## Kontrolní seznam pro přidání nového webu do Analytics: 

* Vložte web přes záložku Administrátor  
<small>Asi budete vkládat nový účet. Nemusí to být úplně jednoduché, proto raději [tento návod](http://jecas.cz/pridat-google-analytics).</small> 
* Nastavte správné časové pásmo   
<small> To je dost důležité kvůli správnému měření návštěv.  
(*Administrátor > Výběr dat > Nastavení výběru dat*)</small> 
* Vyfiltrujte si IP adresy, ze kterých přistupují tvůrci webu  
<small>Viz [vyloučení vlastních návštěv](http://jecas.cz/vylouceni-svych-navstev).  
(*Administrátor > Výběr dat > Filtry*)</small> 
* Propojte účty [Search Console](google-search-console.md) a AdWords  
<small>Poskytnou další zajímavá data.  
(*Administrátor >  Služba > Všechny služby*)</small> 
* Nastavte cíle  
<small> Více v další části článku.  
(*Administrátor > Výběr dat > Cíle*)</small> 
* Zapněte sledování vyhledávání na webu
<small> S GET parametry to je jednoduché. U POST nebo AJAX hledání je [potřeba to trochu nastavovat](http://jecas.cz/ga-mereni#vyhledavani).  
(*Administrátor > Výběr dat > Nastavení*)</small> 
* Přepněte měnu ve výběr dat na „Kč“ nebo odpovídající  
<small>(*Administrátor > Výběr dat > Nastavení*)</small> 
* Odfiltrujte roboty  
<small>(*Administrátor > Výběr dat > Nastavení*)</small> 
* Nastavte práva lidem, kteří budou s Analytics pracovat  
<small>Pozor, jsou zde tři sloupce. Je potřeba přidat uživatele do správného. [Návod](http://jecas.cz/ga-pridat-uzivatele). Práva běžným uživatelům nastavte na „Číst a analyzovat“. Ostatním by měla stačit „Spolupráce“. Pozor na „Správa uživatelů“, lidé pak mohou odebrat práva také vám.  
(*Administrátor > Správa uživatelů*)</small> 
* E-shopům také povolte „elektronický obchod“.  
<small> Opět doporučuji poradit se s analytikem.  
(*Administrátor > Výběr dat > Nastavení elektronického obchodu*)</small> 

Pro své weby si asi vystačíte s jedním účtem. Jednotlivé weby pak máte jako služby. Weby klientů  je vhodné mít každý pod zvláštním účtem, kvůli případnému převodu na jinou osobu.

## Nastavení a měření konverzních cílů webu

Nastavení cílů je pro každý web zásadní. Opět by měl poradit analytik. Pokud tápete, zde je několik obvyklých možností:

* odeslání košíku v e-shopu
* odeslání kontaktního formuláře
* určitá doba strávená na stránce
* přihlášení k newsletteru

Cíle nastavíte v horním menu Analytics: *Administrátor > Výběr dat > Cíle*.

### Měření cílů pomocí událostí

V rozhraní Analytics jde cíle vložit jako zhlédnutí konkrétní stránky. Obvykle to stačí. Někdy se ale při splnění cíle URL nezmění. Pak se vám může hodit měření pomocí událostí. Vývojář vloží kus javascriptového kódu, který cíl po splnění podmínky započítá. Například na Vzhůru dolů se nákup [e-booku](http://www.vzhurudolu.cz/ebook) měří tímto kódem:

```javascript
ga('send', 'event', {
  'eventCategory': 'Ebook order',
  'eventAction': 'Thanks'
});
```

Pokud události neznáte, tady je [povídání přímo od Google](https://support.google.com/analytics/answer/1033068?hl=cs).

### Měření elektronického obchodu

Úplně nejlepší je měřit cíle i s jejich peněžní hodnotou. 

Potřebujete plugin pro elektronický obchod:

```javascript
ga('require', 'ecommerce');
```

Přidáte zrealizovaný obchod s cenou a měnou, která by měla odpovídat měně nastavené na výběru dat v Analytics:

```javascript
ga('ecommerce:addTransaction', {
  'id': '29911',     
  'revenue': '14280',
  'currency': 'CZK'  
});
```

Pak už položky, které odpovídají zboží v košíku:

```javascript
ga('ecommerce:addItem', {
  'id': '644',                   // ID hotelu
  'name': 'Apartmány Na Vadaši', // Jméno hotelu
  'category': 'Štúrovo'          // Obec
});
```

Nakonec to celé odešlete do Analytics:

```javascript
ga('ecommerce:send');
```

V rozhraní teď v části *Konverze > Přehled* uvidíme statistiky pro elektronický obchod. Samozřejmě jen v případě, pokud jsme si jejich sbírání nastavili. Podívejte se na kontrolní seznam v článku výše.

## Shrnutí základů vložení Google Analytics pro vývojáře

* Zvolte mezi Tag Managerem a přímým vložením.
* Pokud jste se rozhodli pro přímé vložení, použijte asynchronní kód Analytics.
* V rozhraní Analytics si web správně nastavte podle mého kontrolního seznamu.
* Nastavte si měření cílů a elektronického obchodu.

Podívejte se i na článek [o nástrojích a měření v Analytics](google-analytics-vyvojari.md).

<div class="web-only text-center text-small" markdown="1">
Na článku spolupracovali: [Daniel Střelec](https://www.danielstrelec.cz/) a [Miroslav Pecka](http://miroslavpecka.cz/).</div>
