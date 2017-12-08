# Testování webů v odečítačích obrazovky 

Asi víte, že odečítač obrazovky (taky *čtečka* nebo *screen reader*) je software, který umožňuje slepým nebo jinak zrakově postiženým lidem používat vaše weby.

Mimochodem: Ano, *používat*, nikoliv jen číst, proto je české i anglické označení vlastně dost zavádějící.

Protože jste webaři a protože chcete dělat věci dobře, jste zvyklí testovat svá díla na všech možných prohlížečích a zařízeních. A není důvod netestovat na odečítačích. Zkusím vám to teď usnadnit.

Radek Pavlíček [doporučuje](http://poslepu.cz/testovani-pristupnosti-webu-doporucene-kombinace-screen-readeru-a-prohlizece/) následující kombinace:

- Windows: [JAWS](http://www.galop.cz/jaws) s Internet Explorerem nebo [NVDA](https://www.nvaccess.org/) s Firefoxem 
- macOS: [VoiceOver](https://www.apple.com/accessibility/mac/vision/) se Safari 
- iOS: [VoiceOver](https://www.apple.com/accessibility/iphone/vision/) se Safari 
- Android: [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=cs) s Chrome nebo Firefoxem

Osobně na Windows používám NVDA a na Apple zařízeních VoiceOver. A protože obojí nepoužívám denně, udělal jsem si tahák, který snad pomůže i vám.

## Jak testovat na NVDA a Firefoxu? {#windows-nvda}

NVDA je potřeba nejprve stáhnout a nainstalovat. Je to zdarma nebo za drobný příspěvek, kterým je určitě vhodné autory podpořit. [nvaccess.org](https://www.nvaccess.org/download/)

- Zapnutí a vypnutí: <kbd>Ctrl Alt N</kbd> (Pokud je aplikace NVDA už spuštěná.)
- Čtení od pozice kurzoru: <kbd>Insert ↓</kbd>
- Zastavení čtení: <kbd>Ctrl</kbd>
- Čtení od začátku stránky: <kbd>+</kbd> na numerické klávesnici
- Seznam prvků: <kbd>Insert F7</kbd> (Seznam odkazů, nadpisů nebo [WAI-ARIA oblastí](wai-aria.md))

Nezapomeňte, že nejlepší je VoiceOver používat v kombinaci se Safari.

Kompletní návod v češtině je na [blindfriendly.cz](http://ewn.blindfriendly.cz/).

## Jak testovat na JAWS a Internet Exploreru? {#windows-jaws}

K testování na JAWS jsem se zatím nedostal, takže budu jen velmi stručný. JAWS je totiž placený software, ale *prý* je možné licenci pro testování u distributora nějakým způsobem poptat.

Stručně o používání píše [Radek ve svém článku](http://poslepu.cz/testovani-pristupnosti-webu-doporucene-kombinace-screen-readeru-a-prohlizece/). Kompletní návod v češtině je na [blindfriendly.cz](http://ewj.blindfriendly.cz/).



## Jak používat VoiceOver na macOS? {#macos-voiceover}

VoiceOver instalovat nemusíte, je už ve vašem Macu připravený. Může být ale vypnutý, což změníte v sekci *Accessibility* aplikace *Systems Preferences*. 

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


