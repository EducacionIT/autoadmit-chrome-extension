
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({isWorking: false, color: '#3aa757'}, function() {
    console.log('Meet auto admit is running');
    // alert('Meet auto admit is running');
    // TODO -> define
    chrome.browserAction.setIcon({path: `images/auto_meet-128_off.png`});
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  // change state
  chrome.storage.sync.get(['isWorking'], function(result) { 
    chrome.storage.sync.set({'isWorking': !result.isWorking});
    // change icon
    chrome.browserAction.setIcon({path: `images/auto_meet-128${!result.isWorking ? '' : '_off'}.png`});
    alert('Autoadmitir esta ' + (!result.isWorking ? 'activo' : 'inactivo') );
  });  
});


