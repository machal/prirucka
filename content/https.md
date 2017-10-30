# HTTPS

Shrnu zkušenosti s nedávným přesunem Vzhůru dolů na zabezpečený protokol.


- [Praktické důvody](#proc) pro přechod na HTTPS
- Tříkrokový [návod na přechod](#jak)
- [Moje zkušenosti](#zkusenosti): opruz s Disqus, Google Search Console a lokálním vývojem


## Proč mít web na HTTPS? {#proc}

Důvody jsou dvou typů: bezpečnostní a praktické.

Z bezpečnosního hlediska vám HTTPS zajistí bezpečnější přenos citlivých dat, ale i například hlaviček pokud citlivá data nemáte. Téhle úrovni argumentace se nebudu do hloubky věnovat, protože jí nerozumím. Odkážu vás na [Michala Špačka](https://www.michalspacek.cz/prednasky/https-vsude-proc-f5forum), [Bohumila Jahodu](http://jecas.cz/https) nebo skvělý přesvědčovací web [Does my site need HTTPS?](https://doesmysiteneedhttps.com/) (odpověď zní: „YES!“).

HTTPS byste měli na webu mít ale i čistě prakticky. Kvůli prohlížečům, které před nezabezpečenými weby běžícím na HTTP varují stále naléhavěji. Podívejte se na obrázek. Běžní uživatelé budou jednou před příchodem na nezabezpečený web zažívat stejné pocity, jako kdyby vstupovali na ztrouchnivělé prkno vedoucí přes medvědí příkop.

Tlaky pro přechod na HTTPS ale nepřicházejí jen ze strany prohlížečů:

- Jde o doporučení vyhledávačů. Google říká, že [HTTPS je jeden z řadících signálů](https://security.googleblog.com/2014/08/https-as-ranking-signal_6.html).
- HTTPS je podmína pro rozběhnutí rychlého [HTTP/2](http-2.md) (což chcete a už asi víte) a Google jej [silně doporučuje pro](https://www.ampproject.org/docs/getting-started/) rozběhnutí [AMP verze webu](/blog/40-amp) (což někteří chcete, ale ještě možná nevíte).
- Některé [funkce z HTML5 bez HTTPS nefungují](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https#https_is_the_future_of_the_web), nebo je potřeba je povolovat. Týká se například příjmu audia nebo videa od uživatele, jeho geolokace atd. 
- A opakuji to necitelnější: cejchování nezabezpečených stránek a formulářů ze strany prohlížečů. Však se podívejte na obrázek.

*TODO IMG*

*Obrázek: Jak různé prohlížeče na Macu označují nezabezepčený a zabezpečený web. A podle slov výrobců prohlížečů se to bude postupně přitvrzovat.*

Pokud tedy weby nemáte na HTTPS, pojďme na to.

## Jak přejít na HTTPS? {#jak)

Budu jen velmi stručný, protože skvělých detailních návodů jsou internety plné.

### 1) Na hostingu si nechte vygenerovat certifikát {#jak-1}

Certifikát je možné dostat zdarma, některé české hostingy to ale (samozřejmě) nějak drobně zpoplatňují.

### 2) Odstraňte odkazy na nezabezpečený HTTP obsah {#jak-2}

Jde o odkazy na zdroje stránky - CSS, JS, obrázky, ale taky raději o odkazy uvnitř webu, vložené například přes nějaký editor redakčního systému. 

### 3) Přesměrovat všechno z HTTP na HTTPS {#jak-3}

Pokud máte server Apache přístup do `.htaccess`, obvykle stačí přidat něco takového:

```
# redirect na https
RewriteCond %{HTTPS} off
RewriteRule .* https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Dost zjednodušuji a dívám se na to hlavně vývojářsky. Pokud opravdu budete přecházet, držte se výborného kontrolního [seznamu Jaroslava Hlavinky](https://jakdelatseo.cz/checklist-pro-prechod-z-http-na-https/) nebo [detailního průvodce Dušana Janovského](https://www.jakpsatweb.cz/https.html).

Já z nich při převádění Vzhůru dolů vycházel. I tak jsem se nevyhnul některým bolestným zkušenostem, které vám jako obvykle rád nasdílím.

## Zkušenosti z převodu Vzhůru dolů {#zkusenosti}

### Disqus a další služby třetích stran {#zkusenosti-disqus}

Ve stránce můžete mít lajkovací tlačítka Facebooku, Twitteru a dalších služeb. Nebo komentáře – například od Disqus – jako já. Tyhle služby obvykle zobrazují obsah podle URL, kterou ale přechodem na HTTPS měníte.

Disqus má sice [migrační nástroj](https://help.disqus.com/customer/portal/articles/286778-migration-tools) a [postup konverze URL](https://woorkup.com/migrate-disqus-comments-https/) na zabezpečenou verzi vypadá snadno. Já to ovšem ani přes veškerou snahu nedokázal. Jejich podpora mi navíc ukázala, jak dokáže krásně mlčet. Asi jste si všimli, že komentářích na webu úplně nelpím, takže jsem to prostě vzdal a začal s nimi odznovu.

### Google Search Console {#zkusenosti-gse}

O data ze [Search Console](google-search-console.md) jsem přesměrování URL nechtěl přijít. Ale asi to jinak nejde. Search Console má nějaký [migrační nástroj](https://support.google.com/webmasters/answer/83106?hl=en&ref_topic=6029673), ale zrovna přesun z HTTP na HTTPS není mezi podporovanými typy přesunů.

Musíte tam tedy přidat nový web s HTTPS adresou a smířit se s tím, že po přechodu vám začne u původní HTTP verze hlásit velké množství chyb s přesměrováním.

### Lokální vývoj {#zkusenosti-lokal}

Jak ale po přechodu na HTTPS vyřešit lokální vývoj? Na vlastním počítači HTTPS nepotřebuju. Na druhou stranu si myslím, že by na lokální mašině měla aplikace běžet ve stejném prostředí jako na produkci. Zeptal jsem se milých kolegů a kolegyň na naší [frontendistické diskuzi](https://www.facebook.com/groups/frontendisti/permalink/1943434769201371/) a dostal zajímavé možnosti:

1. Nechat si [MAMPem vygenerovat](http://documentation.mamp.info/en/MAMP-PRO-Mac/Settings/Hosts/SSL/) self-signed certifikát. Nebo jiným nástrojem pro vaše prostředí. Prohlížeč pak ale zobrazoval varovnou obrazovku – certifikát mu smrděl. To se na Macu vyřeší [přidáním certifikátu do Keychain Access](https://css-tricks.com/trusting-ssl-locally-mac/). Pokud jste to řešili pro jiné platformy, napište mi prosím – přidám to sem. 
2. Udělat v `.htaccess` podmínku, která neudělá přesměrování na zabezpečený protokol na localhostu: `RewriteCond %{REMOTE_ADDR} !=127.0.0.1`. Další možnost [ukazuje David Grudl](https://www.facebook.com/groups/frontendisti/permalink/1943434769201371/?comment_id=1943589395852575&comment_tracking=%7B%22tn%22%3A%22R2%22%7D).
3. S Dockerem je to jednoduché: „Kontejner aplikace jede na HTTP a TLS s přesměrování tam dodává až load balancer v produkci.“ píše Honza Pobořil.

Docker zatím nepoužívám a chtěl jsem prostředí co nejpodobnější produkci, takže moje řešení je v bodě jedna.

Měli jste s přechodem i jiné potíže, neuvedené u mě, ani v odkazovaných checklistech? Napište je is řešením do komentářů.

Pojďme to shrnout? Ano, HTTPS potřebujete. Ano, přesun není složitý. Ano, vždycky se na něčem zaseknete. :-)



