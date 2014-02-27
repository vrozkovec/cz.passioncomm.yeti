/css/less/bootstrap-less-src - zdrojové soubory které byly použity pro vygenerování Bootstrapu
/css/less/style.less - LESS soubor, který byl použitý k vygenerování hlavního CSS style.min.css
/blog.php a /blog.2.php - různé umístění sekce Explore more work


================================================
Vložení responzivního retina obrázku
------------------------------------------------

1. způsob
~~~~~~~~~~
<img src="images/yeti-mobile.png"
	data-mobile-src="images/yeti-mobile.png"
	data-mobile-src2x="images/yeti-mobile@2x.png"
	data-tablet-src="images/yeti-tablet.png"
	data-tablet-src2x="images/yeti-tablet@2x.png"
	data-desktop-src="images/yeti-desktop.png"
	data-desktop-src2x="images/yeti-desktop@2x.png" 
	class="hires"
	width="600" height="590" />
~~~~~~~~~~

pro standardní rozlišení se využívají tyto atributy:
* data-mobile-src
* data-tablet-src
* data-desktop-src

* pro Retina rozlišení jejich 2x varianty

2. způsob
---------

V případě, že je pro každé rozlišení stejný obrázek, pak lze obrázek vložit takto:
~~~~~~~~~~
<img src="css/img/preloader.gif" 
	data-src="css/img/preloader.gif" 
	data-src2x="css/img/preloader@2x.gif" 
	class="hires" 
	width="32" height="32" />
~~~~~~~~~~

logika atributů data-src a data-src2x je shodná jako v předchozím případě.

každý responzivní Retina <img> tag také musí mít class="hires" a nadefinovanou šířku a výšku.




