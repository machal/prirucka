# Kapitola 3: Vazby mezi AMP a vaším webem

AMP verze vaší stránky musí nějak koexistovat vedle běžného responzivního webu a přitom se dělit o stejného rodiče – backendový kód a databázi.

Analogie s rodičem je tady docela na místě. AMP a váš běžný web mají vlastně sourozenecký vztah. V momentě návrhu architektury obou verzí si tak můžete zahrát na pánaboha a nastavit vztah podle stvořitelových potřeb:

* [Dvě oddělené verze](amp-implementace-extra-verze.md) – AMP a HTML jsou oddělení sourozenci, kteří o sobě prakticky nevědí. Vám se ale může brzy začít protivit, že na péči o ně potřebujete dvakrát tolik času.
* [Nejprve HTML, pak AMP](amp-implementace-vyjimky.md) – vaše AMP sdílí podstatnou část frontendového i backendového kódu s běžným webem. Je to vlastně klon. Vy jen během klonování upravíte některé části (DNA) kódu.
* [Nejprve AMP, pak HTML](amp-implementace-nejprve-amp.md) – tady to platí naopak. Prvorozená je v tomhle případě AMP verze. Pomocí výjimek v kódu z ní pak vytvoříte plnohodnotnou responzivní verzi.
* [Jen AMP](amp-implementace-jen-amp.md) – nejefektivnější cesta, ale ne pro každého. Prostě si nadělíte jedináčka. Frontendový kód vycházející striktně z AMP vám řeší obě varianty distribuce.

I když to z názvů metod soužití obou verzí nemusí být patrné, jde vlastně o míru upřednostnění AMP a velikosti sdíleného kódu.

<figure>
<img src="../dist/images/original/vdamp/vazby.png" alt="">
<figcaption markdown="1">
_Obrázek: Zjednodušené schéma přístupů k implementaci AMP._
</figcaption>
</figure>

Pokud se bavíme o technických možnostech implementace, zmiňme dvě zvláštnosti:

* V rámci implementace do populárních redakčních systémů se hodí vědět o existenci [pluginů](amp-implementace-pluginy.md), které vám mohou ušetřit opravdu hodně času při vývoji, ať už zvolíte kteroukoliv z metod stvoření popsaných výše.
* AMP se dá také skvěle [kombinovat s PWA](amp-pwa.md) (progresivními webovými aplikacemi), což může být vlastně jakýkoliv moderní web.

Pojďme se teď podívat na variantu, kterou sice z dlouhodobé perspektivy příliš nedoporučujeme, je ale skvělá v situaci, kdy si chcete nasazení AMP vyzkoušet. Třeba proto, že zase tak moc nevěříte tomu, že tady bude ještě za pět let.
