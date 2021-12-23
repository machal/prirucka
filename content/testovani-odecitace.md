# Testování přístupnosti webů v odečítačích obrazovky 

Jak nainstalovat, spustit a používat screen readery? Pojďme si ukázat, jak testovat weby přímo tak jak je „vidí“ zrakově hendikepovaní uživatelé. 

Asi víte, že odečítač obrazovky (taky *čtečka* nebo [screen reader](https://en.wikipedia.org/wiki/Screen_reader)) je software, který umožňuje slepým nebo jinak zrakově postiženým lidem používat vaše weby.

Opravdu *používat* – a to interaktivně – ne jen *číst*. České i anglické označení téhle kategorie software je vlastně dost zavádějící.

Protože jste webaři a protože chcete dělat věci dobře, jste zvyklí [testovat svá díla](jak-testovat-responzivni-weby.md) na všech možných prohlížečích a zařízeních. A není důvod netestovat na odečítačích. Je to poměrně snadné, velmi užitečné a na děláním webů dostanete dost jiný pohled.

<!-- AdSnippet -->

Radek Pavlíček [doporučuje](http://poslepu.cz/testovani-pristupnosti-webu-doporucene-kombinace-screen-readeru-a-prohlizece/) následující kombinace odečítačů a prohlížečů:

- [Windows: NVDA s Firefoxem](#windows-nvda)
- [Windows: JAWS s Internet Explorerem](#windows-jaws)
- [macOS: VoiceOver se Safari](#macos-voiceover)
- [iOS: VoiceOver se Safari](#ios-voiceover)
- [Android: TalkBack s Chrome nebo Firefoxem](#android-talkback)

Vychází to z kombinací, které používají sami zrakově hendikepovaní. To zase vychází z toho, jak je který odečítač optimalizovaný pro který prohlížeč. Jiné kombinace jsou trochu bez záruky.

Osobně na Windows používám odečítač NVDA a na Apple zařízeních vestavěný VoiceOver. A protože obojí nepoužívám denně, udělal jsem si tahák, který snad pomůže i vám.


## Jak testovat na NVDA a Firefoxu?{#windows-nvda}

[NVDA](https://www.nvaccess.org/) je potřeba nejprve stáhnout a nainstalovat. Je to zdarma nebo za drobný příspěvek, kterým je určitě vhodné autory podpořit: utíkejte na [nvaccess.org](https://www.nvaccess.org/download/).

- Zapnutí a vypnutí čtení: <kbd>Ctrl Alt N</kbd> (Pokud je aplikace NVDA už spuštěná.)
- Čtení od pozice kurzoru: <kbd>Insert ↓</kbd>
- Zastavení čtení: <kbd>Ctrl</kbd>
- Čtení od začátku stránky: <kbd>+</kbd> na numerické klávesnici
- Seznam prvků: <kbd>Insert F7</kbd> (Seznam odkazů, nadpisů nebo [WAI-ARIA oblastí](wai-aria.md))

Kompletní návod v češtině je opět na [blindfriendly.cz](http://ewn.blindfriendly.cz/).


## Jak testovat na JAWS a Internet Exploreru?{#windows-jaws}

K testování na [JAWS](http://www.galop.cz/jaws) jsem se zatím nedostal, takže budu jen velmi stručný. JAWS je myslím nejrozšířenější čtečka pro Windows. Jde o placený software, ale *prý* je možné licenci pro testování u distributora nějakým způsobem poptat.

<!-- AdSnippet -->

Stručně o používání píše [Radek ve svém článku](http://poslepu.cz/testovani-pristupnosti-webu-doporucene-kombinace-screen-readeru-a-prohlizece/). Kompletní návod v češtině je na [blindfriendly.cz](http://ewj.blindfriendly.cz/).


## Jak používat VoiceOver na macOS?{#macos-voiceover}

[VoiceOver](https://www.apple.com/accessibility/mac/vision/) instalovat nemusíte, je už ve vašem Macu připravený. Může být ale vypnutý, což změníte v sekci *Accessibility* aplikace *Systems Preferences*. 

Nezapomeňte, že nejlepší je VoiceOver používat v kombinaci se Safari.

- Zapnutí a vypnutí: <kbd>Cmd F5</kbd> (Na laptopech nezapomeňte ještě zmáčknout <kbd>Fn</kbd>.)
- Vstup do oblasti, např. webové stránky: <kbd>Ctrl Alt Shift ↓</kbd> nebo kliknutím do ní
- Navigace po prvcích stránky: <kbd>Ctrl Alt ←/→</kbd> 
- Číst vše od polohy kurzoru: <kbd>Ctrl Alt A</kbd> 
- Otevření rotoru: <kbd>Ctrl Alt U</kbd> 

Rotor umí vypsat všechny navigační prvky stránky, například i [WAI-ARIA oblastí](wai-aria.md). Ovládá se šipkami. Aktivuje mezerníkem.

Tohle vám bude asi stačit. Pokud byste se chtěli naučit i další zkratky, zkuste si projít nápovědu na [accessibility.psu.edu](http://accessibility.psu.edu/screenreaders/voiceover/).

Podívejte se na video „WAI-ARIA“.

YouTube: [youtu.be/sO_xOGgrE2Y](https://www.youtube.com/watch?v=sO_xOGgrE2Y)

## Jak používat VoiceOver na iOS?{#ios-voiceover}

I [na iOS je VoiceOver](https://www.apple.com/accessibility/iphone/vision/) předinstalovaný. 

Než jej začnete používat, doporučuji tento postup:

1. Zapnutí možnosti jednorázové aktivace: *Nastavení* / *Obecné* / *Zpřístupnění*. Dole najděte *Zkratka zpřístupnění* a nastavte si tam *VoiceOver*.
2. Pak v téže sekci části *Nastavení* VoiceOver zapněte. Na iOS 11 je to hned první položka. 

Teď můžete VoiceOver instantně aktivovat a deaktivovat trojitým stisknutím tlačítka Home. 

Pokud byste totiž přeskočili první bod, VoiceOver spustíte, ale nemusí se vám podařit jej vypnout. Což je bez taháku *not funny*. iOS se při aktivním VoiceOveru totiž celý ovládá *trošku* jinak:

- *Klepnutím* vyberete položku
- *Dvojitým klepnutím* aktivujete položku
- Stránku posunujete *třemi prsty*
- Při čtení se pohybujete *šviháním (swipe) doleva nebo doprava*.
- I na iOS můžete [aktivovat rotor](https://support.apple.com/cs-cz/HT204783) se seznamem dostupných prvků. Stačí točit dvěmi prsty imaginární kolečko veprostřed obrazovky. Položky se aktivují švihnutím nahoru nebo dolů

Na iOS je ovládání přes VoiceOver a gesta fakt vyladěné. Moc se mi to líbí a rád weby takhle testuji. (Dodatek: Ano, jsem Apple ovce.)


## Android: TalkBack s Chrome nebo Firefoxem{#android-talkback}

[TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=cs) by na Adroidu také být měl už předinstalovaný. Nebo si jej prostě zdarma stáhněte z Google Play.

Zapnutí a vypnutí TalkBacku:

- Zapnout je potřeba v *Nastavení* / *Přístupnost* / *Talkback*
- Dočasně deaktivovat nebo aktivovat pak třívteřinovým podržením obou tlačítek hlasitosti

Vypadá to, že není možné nechat TalkBack pořád zapnutý a jen občas jej aktivovat jako to dělám na iOS. 

Po každém zamčení zařízení se totiž permanentně zapnutý TalkBack automaticky aktivuje. To ponechat nemůžu, protože by mě náš Honza – hlavní uživatel tabletu s Androidem – prostě vykostil.

Když už to slavnostně pustíte, ovládání je pak podobné VoiceOveru:

- *Klepnutím* vyberete položku
- *Dvojitým klepnutím* aktivujete položku
- Čtení i tady posunujete *švihnutím doleva nebo doprava*
- Stránku posunujete *třemi prsty*
- Procházení seznamem položek (něco jako rotor na iOS) je možné *švihnutím prstem nahoru nebo dolů*

Více je v oficiální [nápovědě od Google](https://support.google.com/accessibility/android/answer/6283677?hl=cs).

Věřím, že vás návod nakopne k tomu, abyste [přístupnost](https://www.vzhurudolu.cz/pristupnost) začali sami ověřovat testovat pomocí reálných odečítačů. Sám jsem v tom zatím dost jalový, takže budu samozřejmě moc rád za každé doplnění.

<!-- AdSnippet -->
