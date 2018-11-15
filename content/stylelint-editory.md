# Stylelint: Jak si jej nainstalovat v editorech kódu?

Pojďme si rozjet [Stylelint](stylelint.md) přímo v editoru. Je to totiž to první místo, kde bychom jej měli používat.


## Sublime Text {#atom}

- Přes Package Control si nainstalujte [SublimeLinter](http://sublimelinter.readthedocs.io):  
  `Ctrl/Cmd + Shift + p` → „Package Control: Install Package“  → „SublimeLinter“  
- V příkazové řádce si globálně nainstalujte balíček [stylelint_d](https://github.com/jo-sm/stylelint_d):  
  `npm install stylelint_d -g`
- Přes Package Control si nainstalujte [SublimeLinter-contrib-stylelint_d](https://github.com/jo-sm/SublimeLinter-contrib-stylelint_d):  
  `Ctrl/Cmd + Shift + p` → „Package Control: Install Package“  → „SublimeLinter-stylelint_d“  

To, že vám Stylelint funguje, poznáte tak, že před problematickými řádky řádcích kódu se začne zobrazovat tečka s chybovou hláškou.

<!-- AdSnippet -->

Předpokládám, že používáte Sublime ve verzi 3. Dále, že už máte nainstalovaný zvýrazňovač syntaxe pro CSS a preprocesory. Bez toho to nebude fungovat. 

Já se ještě trochu utavil na tom, že pro správu verzí NPM používám NVM. Nakonec [pomohlo nastavení](https://github.com/SublimeLinter/SublimeLinter/issues/128#issuecomment-87272340) jedné z distribucí jako výchozí `$ nvm alias default v8.1.2`.

<div class="related" markdown="1">
- [Sublime Text a další nástroje, které používám pro frontend kodéřinu](nastroje.md)
</div>


## Atom {#atom}

V „Settings“ / Install“ najděte balíčky [linter](https://atom.io/packages/linter), [linter-ui-default](https://atom.io/packages/linter-ui-default) a [linter-stylelint](https://atom.io/packages/) a nainstalujte je se všemi závislostmi, které bude Atom hlásit.  

Úspěšná instalace vypadá i tady tak, že se postižené řádky začnou zvýrazňovat tečkou a chyby vypisovat ve spodním panelu „Linter“.   


## VS Code {#vs-code}

Tady to je jednoduché: Ve „View“ / „Extensions“ hledejte nejnovější verzi balíčku [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). 

Po instalaci se vám začnou zvýrazňovat prohřešky přímo v kódu. Detaily uvidíte v panelu „Problems“.

<!-- AdSnippet -->

## Visual Studio 2017 {#visual-studio}

Ve „velkém“ Visual Studiu máte dvě možnosti prostřednictvím doplňků:

- [NPM Task Runner](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner) - v okně Task Runner Explorer ukazuje výstupy, ale o opravdová integrace Stylelint to není.
- [MultiLinter](https://marketplace.visualstudio.com/items?itemName=glat.MultiLinter) - wrapper pro další lintery, který umí i Stylelint. Ukazuje výstupy v okně Output a přímo u kódu, což chcete. Náročnější je trochu jeho nastavení.

Detailní návod pro obě možnosti hledejte [v textu](https://gist.github.com/martindybal/bf947805551210440ab4a2b12e667b2e/#file-vs-stylelint-md) od [Martin Dybala](https://www.linkedin.com/in/martin-dybal-b1062277), kterému tímto děkuji.

<!-- AdSnippet -->

## Další

Pluginy pro Emacs a Vim jsou k nalezení [v seznamu nástrojů](https://stylelint.io/user-guide/complementary-tools/#editor-plugins) na oficiálním webu Stylelintu.

Pokud se vám povedla instalace v jiném editoru, budu moc vděčný za její popis v komentářích.

<!-- AdSnippet -->
