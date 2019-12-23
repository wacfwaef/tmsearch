console.log("background running");

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
       sendServiceRequest(response.data);
    });
  });
function sendServiceRequest(Text)
    {
        Text.replace(" ","+");
        var newURL = "https://www.transfermarkt.pt/schnellsuche/ergebnis/schnellsuche?query=" + Text;
        chrome.tabs.create({ url: newURL });
    }
    
