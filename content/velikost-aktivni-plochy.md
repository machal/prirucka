# Minimální velikost aktivní plochy

Robert Wadlow byl podle Wikipedie nejvyšším člověkem v historii. Přezdívalo se mu Obr z Altonu. Když navrhuji rozhraní, dost na něj myslím. Hned vysvětlím proč. 

Titěrné aktivní plochy v uživatelském rozhraní jsou častým hříchem responzivních webů. Ano, myší se trefíte skoro na cokoliv.

Palec sedmnáctileté dívky bude menší než palec Roberta Wadlowa. Ten totiž měřil 2,72 m a vážil okolo 220 kg. Proto raději při vymýšlení rozhraní myslím na Obra z Altonu než na mladé dívky, jestli mi rozumíte.

Co se týká minimalní velikost aktivní plochy, moderní webařina se nejčastěji odkazuje na další výzkum Stevena Hoobera, tentokrát s Patti Shank: „Making mLearning Usable: How We Use Mobile Devices“. 
[vrdl.in/aug5z](http://shoobe01.blogspot.cz/2014/11/making-mlearning-usable-how-we-use.html) 

Zjistili, že potřebná minimální velikost se různí podle vzdálenosti od kraje obrazovky:

* ve středu obrazovky je 7 čtverečních milimetrů
* na krajích obrazovky je to 11 čtverečních milimetrů

Přiznávám, že ve svých myšlenkách na Obra z Altonu si pravidlo zjednodušuji. Chci aktivní plochu vždy **alespoň jeden čtvereční centimetr**.

<figure>
<img src="dist/images/original/vdwd/triky-ui-6.jpg" alt="">
<figcaption markdown="1">    
*E-shop FotoŠkoda.cz má jeden z těch povedenějších košíků na mobilech. Všechno velké, navigace jednoznačná. Jen prvky v té šedivé ploše s „Pojištěním“ bych ani na pětiapůlpalcovém iPhone palcem netrefil. Na výšku alespoň centimetr, prosím*
</figcaption> 
</figure>


K podobným závěrům došly i velké firmy jako Apple, Microsoft a Google. Hlouběji to rozepisuje Martin Pešout v článku „Velikosti dotykových oblastí pod drobnohledem“. [vrdl.in/7t4b6](http://www.martinpesout.cz/velikosti-dotykovych-oblasti-pod-drobnohledem/)

Za předpokladu, že máte správně nastavenou meta značku pro viewport, to dokonce lze zapsat v CSS tak, aby ve všech dnešních mobilních zařízeních byla plocha přibližně centimetr veliká.

Podle Joshe Clarka, kterého cituji v předchozích textech, mají téměř všechna dotyková zařízení rozlišení kolem 160 DPI (CSS pixelů na palec). Přepočtem do centimetrů čtverečních dostaneme při obvyklé výchozí velikosti písma v prohlížečích (`16px`) tento výsledek:


```css
/* 10mm při 160 DPI ≅ 63px ≅ 4rem */
.touch { width: 4rem; height: 4rem; }
```

Pokud by vás zajímalo detailní vysvětlení, rozebírám to ve svém článku na Smashing Magazine. [vrdl.in/h8n7i](https://www.smashingmagazine.com/2016/10/how-to-poison-the-mobile-user/#5-make-all-tap-targets-nice-and-small)

Budou to lidé trefovat palcem? Navrhněte to na plochu centimetru čtverečního. Navrhněte to i pro obra z Altonu.

