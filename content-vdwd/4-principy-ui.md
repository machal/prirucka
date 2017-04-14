# Čtyři principy návrhu responzivního rozhraní

My, dnešní webdesignéři, musíme předpokládat, že: 

* všechna zařízení mohou být dotyková,
* jeden člověk se na naše weby dívá z různých zařízení,
* nejčastěji je ovládá tím nejtlustším prstem – palcem.

Během let navrhování a implementace responzivních webů jsem dospěl k následujícím čtyřem principům, ze kterých vždy vycházím: 

## 1) Konzistence

Jeden uživatel se na naše weby dívá přes různá zařízení. Pokud to není nutné, nenuťme je učit se ovládání webu na každém zařízení znova. Rozhraní musí být co nejvíce podobné napříč všemi zařízeními.

## 2) Jednoduchost

Když to přeženu, uživatelé umějí klikat a sahat palcem, posunovat stránku a mačkat tlačítko pro návrat v historii. Nic dalšího pro jistotu nepředpokládám. Proto se pokud možno snažím vyhnout složitějším ovládacím prvkům jako jsou karusely, delší formuláře nebo modální okna.

Pokud byste s mými předpoklady nesouhlasili, přečtěte si například tyto dva texty:

- „UX Myth: People don’t scroll“. [vrdl.in/hu8b9](http://uxmyths.com/post/654047943/myth-people-dont-scroll) 
- „Do people actually use browser’s back button?“ na Quoře. [vrdl.in/slvtq](https://www.quora.com/Do-people-actually-use-browsers-back-button)

## 3) Přirozený proud

To co je na stránce nahoře je důležité, co uprostřed málo důležité a ke konci stránky zase důležitost roste. Nejpřirozenější směr konzumace informací v naší části světa je zleva doprava a shora dolů. 

Proto se vyhýbám prvkům, které uživatele nutí vracet se proti přirozenému proudu: například záložkovým navigacím uprostřed stránky. 

## 4) Očividnost

Co oči nevidí, srdce nepálí. Jenže co oči uživatele nevidí, srdce designéra pálit může. Lidé prostě schované prvky neotevírají tak často jako bychom si přáli. 

Proto je lepší zobrazit alespoň pár položek hlavní navigace, nebudovat závislost rozhraní na ikonách a na důležitých místech uživatelského rozhraní se vyhýbat vysouvacím nabídkám. Luke Wroblewski to hezky shrnul do anglického „Obvious Always Wins“. [vrdl.in/t93f2](http://www.lukew.com/ff/entry.asp?1945)

Tak, dogma je na světě. A teď si pojďme říct, na jakých základech jsem své čtyři principy vystavěl.
