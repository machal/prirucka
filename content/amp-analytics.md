# Měření návštěvnosti v AMP

V AMP je možné sledovat chování návštěvníků mnoha způsoby, podobně jako u běžných stránek. Předpokládáme, že měříte pomocí Google Analytics, jehož nastavení je hlavním obsahem tohoto textu. Nejdříve se ale mrkneme na všechny možnosti.

## Dva typy měření

Pro analytiku jsou v technologii AMP k dispozici dvě komponenty, `amp-pixel` a `amp-analytics`. Možná si na ně vzpomenete [z druhé kapitoly](amp-komponenty-reklama-analytika.md).

### amp-pixel

Je určený pro základní analytiku, která se chová jako měřicí pixel:

```html
<amp-pixel src="<adresa-pro-mereni>"
  layout="nodisplay">
</amp-pixel>
```

Vysvětlíme:

* `<adresa-pro-mereni>` – adresa měřicího koncového bodu vaší aplikace. Nemusí to být samozřejmě pixelový obrázek, ale třeba `https://example.com/mereni/zmer-me.`
* `layout="nodisplay"` – prvek, který se spustí, ale nezobrazí. To už asi víte z textu [o layoutu v AMP](amp-komponenty-layout.md).

Více o pixelu je na [vrdl.in/amppixel](https://amp.dev/documentation/components/amp-pixel).

### amp-analytics

Pokročilejší varianta, která už počítá s tím, že máte dodavatele analytického řešení. O nastavení pro Google Analytics si něco řekneme za chvilku.

Ukázkou kódu vás pro jistotu upozorníme, že i tuhle komponentu – na rozdíl od `amp-pixel` – musíte nainstalovat:

```html
<script async custom-element="amp-analytics"
  src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js">
</script>
```

Ohromnou výhodou analytického řešení v AMP je princip „jednou změř, pošli všem“. Na rozdíl od běžných webů se tudíž nestává, že by se na stránce mnohokrát počítalo pořád to samé.

Raději zmiňme, že nemusíte měřit jen pomocí Google Analytics. Seznam „Analytics vendors“ čítá na desítky položek, jsou mezi nimi například Facebook Pixel, Gemius nebo Adobe Analytics. Najdete v něm jistě všechny významné dodavatele.

Více informací o `amp-analytics` i dodavatelích je v dokumentaci komponenty. [vrdl.in/ampanalytics](https://amp.dev/documentation/components/amp-analytics).

Můžete samozřejmě použít i Google Tag Manager. Pavel Jašek z Googlu nám jeho využití upřesnil: „Pro měření AMP stránky je potřeba nasadit samostatný kontejner. V případě AMP se používají připravené hodnoty Page variables, stejně jako to je v datové vrstvě běžného Tag Manageru.“ Detailní návod je v textu „Průvodce nastavením AMP a Správce značek“.  [vrdl.in/ampgtm](https://support.google.com/tagmanager/answer/9205783?hl=cs)

## Měření pomocí Google Analytics

Google doporučuje měřit AMP přes svoje Analytics centrálním skriptem `gtag.js`, což by ostatně měla být standardní cesta i pro běžné weby.

Do AMP stránky nejprve vložíme měřicí komponentu. To už jsme udělali v textu výše. Následně měříme:

```html
<amp-analytics type="gtag"
  data-credentials="include">
<script type="application/json">
{
  "vars" : {
    "gtag_id": "<VASE_GA_ID>",
    "config" : {
      "<VASE_GA_ID>": {
        "groups": "default"
      }
    }
  }
}
</script>
</amp-analytics>
```

`<VASE_ID>` je nutné nahradit vaším měřicím ID. Samozřejmě je možné používat snad všechna speciální nastavení – měření událostí, změnu parametrů, prolinkovávání více domén do jednoho měření a tak dále. Za těmito specialitami vás ale odkazujeme na dokumentaci:

* „Měření stránek AMP“: [vrdl.in/ampmer](https://support.google.com/analytics/answer/6343176)
* „Add Analytics to AMP pages“: [vrdl.in/ampanalyticsnast](https://developers.google.com/analytics/devguides/collection/amp-analytics/)

Teď si možná kladete otázku, zda AMP měřit ve stejném profilu Google Analytics jako běžný web, nebo ne. Ukážeme vám obě možnosti.

### Měření ve dvou profilech

Google toto měření doporučuje, protože (teď zhruba citujeme z dokumentace na výše uvedeném odkaze):

„AMP stránky se načítají rychleji a jejich měření ukazuje jiné vzorce chování. Pravděpodobně tedy dostanete jiné metriky na AMP a jiné na non-AMP stránkách.“

Může tomu tak být v případech, kdy máte AMP nasazené na úplně všech stránkách a AMP verze navíc vypadá jinak než ta původní (což ale příliš nedoporučujeme).

Například na webu Vzhůru dolů považujeme AMP jen za jiný distribuční kanál pro tentýž web. AMP je navíc v době psaní tohoto textu nasazené jen na některé vstupní šablony – konkrétně články a detaily školení. V takovém případě nedává smysl měření na dvou místech.

### Měření v jednom profilu

Jeho výhodou je porovnání čísel pro různé zdroje návštěvnosti.

Pro měření AMP v samostatném segmentu je potřeba udělat následující:

1. Měřit AMP i běžný web v jednom profilu Google Analytics (se stejným `<VASE_GA_ID>`).
2. Propojit návštěvnost z AMP s tou na běžném webu pomocí hodnoty AMP Client ID. V nastavení Analytics na běžném webu je potřeba použít `'use_amp_client_id': true` a do HTML hlavičky AMP verze přidat: `<meta name="amp-google-client-id-api" content="googleanalytics">`. Bez tohoto se uživatel non-AMP stránky identifikuje jinak než tentýž na AMP stránce a Analytics nedokážou propojit jeho chování.
3. V Google Analytics odfiltrovat referraly z `cdn.ampproject.org`: _Správce (Admin) › Služba (Property) › Údaje o měření (Tracking info) › Seznam vyloučených odkazujících zdrojů (Referral Exclusion List) › Přidat (Add)_.
4. Tamtéž přidat nový zdroj dat z AMP návštěvnosti. Více najdete například v textu  „What's Your AMP Traffic Really Doing? Set Up Reporting in 10 Minutes“. [moz.com/blog/amp-reporting](https://moz.com/blog/amp-reporting)

Nastavení AMP client ID je zde zcela klíčové. Více informací najdete v textu „Set up Google AMP Client ID API“. [vrdl.in/ampid](https://support.google.com/analytics/answer/7486764).

V Google Analytics lze návštěvníky z AMP stránek měřit také jednoduše pomocí dimenze _Zdroj dat (Data Source)_. Vyzkoušejte si ji například v reportu _Chování ›  Obsah webu › Všechny stránky_. Ukazuje buď „web“, nebo „amp“.

## Vaší AMP verzi se nedaří? A měříte správně?

Po nasazení AMP a prvních měřeních se vám může zdát, že na konverze žádný vliv nemělo. Nebo že snad dokonce míra konverzí poklesla. Nebo že se vám zvýšila metrika Míra okamžitého opuštění (Bounce Rate). Všechno to může ukazovat nějaký problém na webu, ale také na problém s měřením.

Vzhledem k tomu, že hlubší analytika už je daleko za oblastí našich znalostí a schopností, s jistou úlevou vás odkazujeme na oči otevírající text „So your AMP test doesn’t perform – now what?“ na blogu AMP. [vrdl.in/ampdoesntper](https://blog.amp.dev/2018/11/08/so-your-amp-test-doesnt-perform%e2%80%8a-%e2%80%8anow-what/)

V uvedeném textu se dozvíte, že problémy změřené na AMP stránkách nakonec problémy být nemusejí:

* Nižší konverze AMP stránek můžeme sledovat například v situaci, kdy AMP stránky jsou použité jen jako vstupní a vzdálené od místa skutečných konverzí, a tedy se opět porovnávají jablka s hruškami.
* Míra opuštění (Bounce Rate) zase může narůst a to proto, že se měření na AMP stránkách spouští rychleji.
