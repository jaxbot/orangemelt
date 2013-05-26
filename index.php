<!DOCTYPE HTML>
   <html>
		<head>
			<title>OrangeMelt</title>
			<link rel='stylesheet' href='common/home.css' type='text/css'>
			<script src='common/home.js'></script>
			<script src='common/map.js'></script>
			<script src='common/events.js'></script>
			<script src='common/data.js'></script>
			<script type="text/javascript">

			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-25303672-2']);
			_gaq.push(['_setDomainName', 'orangemelt.com']);
			_gaq.push(['_trackPageview']);

			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();

			</script>
		</head>
		<body>
			<div id='sky'></div>
			<div id='trees'></div>
			<div id='logo'></div>
			
			<div id='content'>
				<h1>An endless, open world to create, edit, and explore.</h1>
				Made when I was bored. An evolving work in progress. <b>Scroll to enjoy.</b>
			</div>
			<div id='map' onMouseMove='mousemoved(event);'>
				<div id='cursortracker' onClick='placeObjectClick()'></div>
			</div>
			<div id='menu'>
			</div>
			
			<div id='controls'>
				<input type='button' onClick='menuAddPlant();' value='Plants'>
				<input type='button' onClick='menuAddBuilding();' value='Buildings'>
				<input type='button' onClick='menuAddPath();' value='Paths'>
				<input type='button' onClick='menuHide();' id='menuHide' value='X' style='display:none'>
			</div>
			<script>
				renderSky();
				addMapElement("grass", 2000, 2000);
                addObject("tree1", 100, 100);
                addObject("tree2", 200, 200);
            </script>
		</body>
	</html>
