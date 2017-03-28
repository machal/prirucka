# Minimální velikost aktivní plochy

Robert Wadlow byl podle Wikipedie nejvyšším člověkem v historii. Přezdívalo se mu Obr z Altonu. Když navrhuji rozhraní, dost na něj myslím. Hned vysvětlím proč. 

Titěrné aktivní plochy v uživatelském rozhraní jsou častým hříchem responzivních webů. Ano, myší se trefíte skoro na cokoliv.

Průměrný palec sedmnáctileté dívky bude ale menší než palec Roberta Wadlowa. Ten totiž měřil 2,72 m a vážil okolo 220 kg. Proto raději při vymýšlení rozhraní myslím na Obra z Altonu než na mladé dívky, jestli mi rozumíte.

Co se týká minimalní velikost aktivní plochy, moderní webařina se nejčastěji odkazuje na další výzkum Stevena Hoobera, tentokrát s Patti Shank: „Making mLearning Usable: How We Use Mobile Devices“. 
[vrdl.in/aug5z](http://shoobe01.blogspot.cz/2014/11/making-mlearning-usable-how-we-use.html) 

Zjistili, že potřebná minimální velikost se různí podle vzdálenosti od kraje obrazovky:

* ve středu obrazovky je 7 čtverečních milimetrů
* na krajích obrazovky je to 11 čtverečních milimetrů

Přiznávám, že ve svých myšlenkách na Obra z Altonu si pravidlo zjednodušuji. Chci aktivní plochu vždy **alespoň jeden čtvereční centimetr**.

![FotoŠkoda.cz](dist/images/original/vdwd/triky-ui-6.png)

*E-shop FotoŠkoda.cz má jeden z těch povedenějších košíků na mobilech. Všechno velké, navigace jednoznačná. Jen prvky v té šedivé ploše s „Pojištěním“ bych ani na pětiapůlpalcovém iPhone palcem netrefil. Na výšku alespoň centimetr, prosím!*

K podobným závěrům došly i velké firmy jako Apple, Microsoft a Google. Hlouběji to rozepisuje Martin Pešout v článku „Velikosti dotykových oblastí pod drobnohledem“. [vrdl.in/7t4b6](http://www.martinpesout.cz/velikosti-dotykovych-oblasti-pod-drobnohledem/)

Za předpokladu, že máte správně nastavenou meta značku pro viewport, to dokonce lze zapsat v CSS tak, aby ve všech dnešních mobilních zařízeních byla plocha přibližně centimetr veliká:

```css
/* 10mm ≅ 63px ≅ 4rem */
.touch { width: 4rem; height: 4rem; }
```

Pokud chcete kód vysvětlit, rozebírám to ve svém článku na Smashing Magazine. [http://vrdl.in/h8n7i](https://www.smashingmagazine.com/2016/10/how-to-poison-the-mobile-user/#5-make-all-tap-targets-nice-and-small)

Budou to lidé trefovat palcem? Navrhněte to na plochu centimetru čtverečního. Navrhněte to i pro obra z Altonu.

