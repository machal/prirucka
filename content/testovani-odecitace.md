# Testování přístupnosti webů v odečítačích obrazovky 

Asi víte, že odečítač obrazovky (taky *čtečka* nebo *screen reader*) je software, který umožňuje slepým nebo jinak zrakově postiženým lidem používat vaše weby.

Mimochodem: Ano, *používat*, nikoliv jen číst, proto je české i anglické označení vlastně dost zavádějící.

Protože jste webaři a protože chcete dělat věci dobře, jste zvyklí testovat svá díla na všech možných prohlížečích a zařízeních. A není důvod netestovat na odečítačích. Zkusím vám to teď usnadnit.

Radek Pavlíček [doporučuje](http://poslepu.cz/testovani-pristupnosti-webu-doporucene-kombinace-screen-readeru-a-prohlizece/) následující kombinace:

- [Windows: NVDA s Firefoxem](#windows-nvda)
- [Windows: JAWS s Internet Explorerem](#windows-jaws)
- [macOS: VoiceOver se Safari](#macos-voiceover)
- [iOS: VoiceOver se Safari](#ios-voiceover)
- [Android: TalkBack s Chrome nebo Firefoxem](#android-talkback)

Osobně na Windows používám NVDA a na Apple zařízeních VoiceOver. A protože obojí nepoužívám denně, udělal jsem si tahák, který snad pomůže i vám.


## Jak testovat na NVDA a Firefoxu? {#windows-nvda}

[NVDA](https://www.nvaccess.org/) je potřeba nejprve stáhnout a nainstalovat. Je to zdarma nebo za drobný příspěvek, kterým je určitě vhodné autory podpořit. [nvaccess.org](https://www.nvaccess.org/download/)

- Zapnutí a vypnutí: <kbd>Ctrl Alt N</kbd> (Pokud je aplikace NVDA už spuštěná.)
- Čtení od pozice kurzoru: <kbd>Insert ↓</kbd>
- Zastavení čtení: <kbd>Ctrl</kbd>
- Čtení od začátku stránky: <kbd>+</kbd> na numerické klávesnici
- Seznam prvků: <kbd>Insert F7</kbd> (Seznam odkazů, nadpisů nebo [WAI-ARIA oblastí](wai-aria.md))

Nezapomeňte, že nejlepší je VoiceOver používat v kombinaci se Safari.

Kompletní návod v češtině je na [blindfriendly.cz](http://ewn.blindfriendly.cz/).


## Jak testovat na JAWS a Internet Exploreru? {#windows-jaws}

K testování na [JAWS](http://www.galop.cz/jaws) jsem se zatím nedostal, takže budu jen velmi stručný. JAWS je totiž placený software, ale *prý* je možné licenci pro testování u distributora nějakým způsobem poptat.

Stručně o používání píše [Radek ve svém článku](http://poslepu.cz/testovani-pristupnosti-webu-doporucene-kombinace-screen-readeru-a-prohlizece/). Kompletní návod v češtině je na [blindfriendly.cz](http://ewj.blindfriendly.cz/).


## Jak používat VoiceOver na macOS? {#macos-voiceover}

[VoiceOver](https://www.apple.com/accessibility/mac/vision/) instalovat nemusíte, je už ve vašem Macu připravený. Může být ale vypnutý, což změníte v sekci *Accessibility* aplikace *Systems Preferences*. 

Nezapomeňte, že nejlepší je VoiceOver používat v kombinaci se Safari.

- Zapnutí a vypnutí: <kbd>(Fn) Cmd f5</kbd>
- Vstup do oblasti (např. webová stránka): <kbd>Ctrl Alt Shift ↓</kbd> nebo kliknutím do ní
- Navigace po prvcích stránky <kbd>Ctrl Alt ←/→</kbd> 
- Číst vše od polohy kurzoru <kbd>Ctrl Alt A</kbd> 
- Otevření rotoru: <kbd>Ctrl Alt U</kbd> (Rotor umí vypsat všechny navigační prvky stránky, například i [WAI-ARIA oblastí](wai-aria.md). Ovládá se šipkami. Aktivuje mezerníkem.)

Tohle vám bude asi stačit. Pokud byste se chtěli naučit i další zkratky, zkuste si projít nápovědu na [accessibility.psu.edu](http://accessibility.psu.edu/screenreaders/voiceover/).

<p class="video">
Video: <a href="https://www.youtube.com/watch?v=sO_xOGgrE2Y">WAI-ARIA</a> ~ Jak testovat WAI-ARIA role. I za pomocí VoiceOveru na macOS
</p>


## Jak používat VoiceOver na iOS? {#ios-voiceover}

I [na iOS je VoiceOver](https://www.apple.com/accessibility/iphone/vision/) je opět předinstalovaný. 

Než jej začnete používat, doporučuji tento postup:

1. V *Nastavení* / *Obecné* / *Zpřístupnění* dole najděte *Zkratka zpřístupnění* a nastavte si tam *VoiceOver*
2. Pak v téže sekci části Nastavení VoiceOver zapněte. Na iOS 11 je to hned první položka. 

Teď můžete VoiceOver instantně aktivovat a deaktivovat trojitým stisknutím tlačítka Home. 

Pokud byste totiž přeskočili první bod, VoiceOver spustíte, ale nemusí se vám podařit jej vypnout.

Takhle se totiž iOS a obsah prohlížeče ovládá po zapnutí VoiceOveru:

- Klepnutím vyberete položku
- Dvojitým klepnutím aktivujete položku
- Stránku posunujete třemi prsty
- Při čtení se pohybujete šviháním (swipe) doleva nebo doprava
- I na iOS můžete [aktivovat rotor](https://support.apple.com/cs-cz/HT204783) se seznamem dostupných prvků. Stačí točit dvěmi prsty imaginární kolečko veprostřed obrazovky. Položky se aktivují švihnutím nahoru nebo dolů.


## Android: TalkBack s Chrome nebo Firefoxem {#android-talkback}

[TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=cs) by na Adroidu také být měl. Nebo si jej prostě zdarma nainstalujte.

Jsou dvě možnosti zapnutí a vypnutí TalkBacku:

- Zapnout je TalkBack potřeba v *Nastavení* / *Přístupnost* / *Talkback*
- Dočasně deaktivovat nebo aktivovat pak třívteřinovým podržením obou tlačítek hlasitosti

Vypadá to, že není možné mít TalkBack pořád zapnutý a jen občas jej deaktivovat. Po každém zamčení zařízení se totiž zapnutý TalkBack automaticky aktivuje.

Ovládání je pak podobné VoiceOveru:

- Klepnutím vyberete položku
- Dvojitým klepnutím aktivujete položku
- Čtení i tady posunujete švihnutím doleva nebo doprava
- Stránku posunujete třemi prsty
- Procházení seznamem položek (něco jako rotor na iOS) je možné švihnutím prstu nahoru nebo dolů

Více je v oficiální [nápovědě od Google](https://support.google.com/accessibility/android/answer/6283677?hl=cs).

