var admitButtonText = ['permitir', 'admitir', 'admit', 'allow'];
var hadError = false;
var isWorking = false;

// find that button and click it
function clickAdmit() {
  chrome.storage.sync.get('isWorking', function(result) {
    isWorking =  result.isWorking
  });
  if (isWorking) {
    try {
      var possibleAdmitButtons = document.querySelectorAll('div[role="dialog"] div[role="button"]');
      for (var possibleAdmitButton of possibleAdmitButtons) {
        var possibleButtonText = possibleAdmitButton.textContent.trim().toLowerCase();
  
        if (admitButtonText.includes(possibleButtonText)) {
          possibleAdmitButton.click();
          break;
        }
      }
    } catch(err) {
      if (!hadError) {
        console.log("Meet auto admit error: ");
        console.log(err.message);
        hadError = true;
      }
    }
  }
}
  
setInterval(clickAdmit, 1000);

