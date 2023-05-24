// Toggle console.log debug output for plugin troubleshooting
var debug = false;

function onError(error) {
  if(debug){
    console.log(error);
  }
}

function tabListener(tabId, changeInfo, tab) {
  browser.pageAction.hide(tabId);
  console.log("stuff");
  var res = browser.tabs.get(tabId);
  res.then(
    function(value){
      browser.pageAction.setIcon(
      {
        tabId: tabId,
        path: "icons/red.png"
      }
    );
    }
    , 
    onError
  );
  browser.pageAction.show(tabId);
}

browser.tabs.onUpdated.addListener(tabListener);
