// Toggle console.log debug output for plugin troubleshooting
var debug = true;

// Settings
var endpoint = "http://localhost:5000/fingerprint";

function onError(error) {
	if(debug){
		console.log("Error: " + error);
	}
}

function debugPrint(message) {
  if(debug){
    console.log(message);
  }
}

function doPrint(){
	var thedata = [];
	var gettingScope = browser.storage.local.get("data");
	gettingScope.then(
		function(fromstorage){
				thedata = fromstorage.data;

				var xhr = new XMLHttpRequest();
				var method = "POST"; // or other HTTP method
				var endpoint = "http://localhost:5000/fingerprint";
				data = thedata;
				var data = { data: data, tags: ["all"] }; // JSON object to be sent

				xhr.open(method, endpoint, true);
				xhr.setRequestHeader("Content-Type", "application/json");

				xhr.onload = function() {
					if (xhr.status === 200) {
					// Request was successful
					var response = xhr.responseText;
					document.getElementById("results").value = response;
				} else {
					// Request failed
					console.error("Request failed. Status code: " + xhr.status);
				}
			};

			var jsonData = JSON.stringify(data); // Convert JSON object to a string
			xhr.send(jsonData);

		}
		,
		onError
	);
}

document.getElementById("dofingerprint").addEventListener("click", (e) => {
	doPrint();
});

