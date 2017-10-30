# HTTPS

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

### Disqus a další služby třetích stran





