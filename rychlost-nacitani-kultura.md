# Rychlost načítání jako součást kultury vývoje

Začněme citátem:

> Speed is product feature number one.

Larry Page, spoluzakladatel Google


## Narvěte rychlost načítání do svého týmového DNA

Tipy na zvýšení rychlosti uvedené v předchozím článku nejsou v zásadě nic nového.

Mám ale odsledováno, že i dobře optimalizovaná stránka časem na rychlosti ztratí. Nebo, že znalostmi nabušený frontendista narazí na hradbu programátorů, správců serverů, grafiků nebo šéfů projektu kroutících hlavami:

„Nene, to kešování na serveru udělat jinak nepůjde.“

„Támhle je potřeba přidat pět jQuery pluginů, protože to tak produkťák chce.“

„Tady je zase nutné přidat celé jQueryUI (ach bože!), protože grafik v PéeSDé použil 4 jeho komponenty.“

A je to celé v čudu.

Ne, frontendista nemůže být na rychlost načítání sám. O její důležitosti musí být přesvědčený celý tým. 

Mohlo by pomoci zařadit aktuální rychlost načítání do dashboardu, co všichni sledují. Hned vedle konverzního poměru. Fakt. 

Tak jako programátoři pouští před publikováním verze unit testy, pouštějte testy rychlosti načítání.

## WebpageTest a PageSpeed Insights

Pokud rychlost načítání nijak netestujete, začněte s [PageSpeeed Insights](https://developers.google.com/speed/pagespeed/insights/). Pro pokročilejší tady je [WebpageTest](http://www.webpagetest.org/).

Oba nástroje mají svá API, ze kterých lze dolovat data pro vaše dashboardy. 

## SpeedCurve

„Rychlostní křivka“ je fantastický nástroj, kterém sdělíte adresy typových šablon vašeho webu. On vám je jednou za čas zkoukne a do reportů vyplivne jak si vedete v čase nebo také v porovnání s podobnými světovými weby.

*TODO: obrázek SpeedCurve*

Je to drahé (minimálě 20 dolarů měsíčně), ale být firmou nebo vyvíjet vlastní produkt, rozhodně to zvážím.


## NewRelic Browser

Monitoring frontendu od autorů populárního nástroje pro hlídání výkonnosti. Do stránky si dáte (docela komplikovaný) javascriptový kód a NewRelic vám pak zobrazuje statistiky.

*TODO: obrázek NewRelic Browser*

## grunt-perfbudget

„Lowcost“ monitoring. [Gruntem](grunt.md) testuje proti API WebpageTest.org. Nastavíte mu parametry – já si třeba na webu hlídám, aby [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) nešel přes hodnotu 2000:

```
perfbudget: {
  default: {
    options: {
      url: 'http://www.vzhurudolu.cz/ebook',
      key: 'A.393688d7205d1193096b3473d97245bc',
      location: 'ec2-eu-west-1:Chrome',
      connectivity: '3G',
      timeout: 600,
      budget: {
        SpeedIndex: '2000'
      }
    }
  }
}
```

Když je pak na příkazové řádce spustíte, vrací vám výsledek testu:

```
$ grunt perfbudget
Running "perfbudget:default" (perfbudget) task
>> -----------------------------------------------
>> Test for http://www.vzhurudolu.cz/ebook 	  FAILED
>> -----------------------------------------------
>> SpeedIndex: 2429 [FAIL]. Budget is 2000
>> Summary: http://www.webpagetest.org/result/150813_GN_FDM/
```

Není to samozřejmě bez nevýhod. Test čeká ve frontě a tak na jeho výsledek čekáte řádově minuty až desítky minut podle toho jakou zvolíte testovací lokaci a její parametry.
