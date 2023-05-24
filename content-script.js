raw = document.documentElement.innerHTML;
data = btoa(unescape(encodeURIComponent( raw )));
var setting = browser.storage.local.set({
		data: data
	});

//console.log("Trigger!");