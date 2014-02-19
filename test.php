<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
<?php
require "inc-head.php";
?>

<body>
	<!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
<?php
?>

<?php
?>

<?php 
if(count($_FILES['filesToUpload'])) {
	foreach ($_FILES['uploads']['filesToUpload'] as $file) {
	  
		var_dump($file);	
		//do your upload stuff here
		echo $file;

	}
}
?>
							<form method="post" action="test.php" enctype="multipart/form-data">
								<input name="filesToUpload[]" type="file" accept="image/*" capture="camera" multiple="multiple" />
								<button type="submit">Up</button>
							</form>
							
								
<?php
require "inc-footer.php";
?>
		</body>
</html>
