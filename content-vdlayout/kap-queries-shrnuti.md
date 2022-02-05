# Shrnutí třetí kapitoly

Otestujte si, co jste se naučili v kapitole o layoutových dotazech.

1. **Jaký je rozdíl mezi Media Queries a Container Queries**  
a. jde o chyták, Container Queries neexistují  
b. v Media Queries se ptáme na velikost okna, v Container Queries na velikost rodičovského prvku  
c. v Media Queries se ptáme na velikost rodičovského prvku, v Container Queries na velikost okna  
1. **Jak zapíšeme dotaz na minimální šířku okna?**  
a. `@query (min-width: …)`  
b. `@screen (min-width: …)`  
c. `@media (min-width: …)`  
1. **Na co se ptá dotaz `(orientation: portrait)`?**  
a. zda je obrazovka zařízení na výšku (méně široká než vysoká)  
b. zda je obrazovka zařízení na šířku (více široká než vysoká)  
c. zda byl autor kresby na obrázku orientovaný více na kresbu portrétů než krajinek  
1. **K čemu slouží CSS vlastnost `contain`?**  
a. definuje zapouzdření (nezávislost) určité části stránky  
b. vypisuje obsah na obrazovku, například `contain: "ahoj"`  
c. nejde o vlastnost, ale o dotaz, zda prvek obsahuje určitý text: `@contain ("ahoj")`
1. **Co dělá zápis `@container (min-width: 30em)`?**  
a. zjišťujeme šířku kontejneru na odpadky při automatické analýze obrázku v prohlížeči  
b. jeho prostřednictvím se ptáme na minimální šířku rodičovského prvku  
c. zjišťujeme šířku obrazovky uživatele
1. **Jaké jsou klíčové triky pro „No Queries“ dotazy?**  
a. stačí uvést `display:flex` nebo `display:grid` a funguje to samo  
b. vlastnost `flex-wrap` v gridu a zápis `repeat(auto-fit, minmax(…, …))` ve flexboxu  
c. vlastnost `flex-wrap` ve flexboxu a zápis `repeat(auto-fit, minmax(…, …))` v gridu  

---

Řešení:

1. **Jaký je rozdíl mezi Media Queries a Container Queries**  
b. v Media Queries se ptáme na velikost okna, v Container Queries na velikost rodičovského prvku  
1. **Jak zapíšeme dotaz na minimální šířku okna?**  
c. `@media (min-width: …)`  
1. **Na co se ptá dotaz `(orientation: portrait)`?**  
a. zda je obrazovka zařízení na výšku (méně široká než vysoká)  
1. **K čemu slouží CSS vlastnost `contain`?**  
a. definuje zapouzdření (nezávislost) určité části stránky  
1. **Co dělá zápis `@container (min-width: 30em)`?**  
b. jeho prostřednictvím se ptáme na minimální šířku rodičovského prvku  
1. **Jaké jsou klíčové triky pro „No Queries“ dotazy?**  
c. vlastnost `flex-wrap` ve flexboxu a zápis `repeat(auto-fit, minmax(…, …))` v gridu  
