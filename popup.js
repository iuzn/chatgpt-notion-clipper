// retrieve the current active tab
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var activeTab = tabs[0];
  // do something with the active tab
});

// add a click handler to a button in the popup
document.getElementById("my-button").addEventListener("click", function() {
  // do something when the button is clicked
});
