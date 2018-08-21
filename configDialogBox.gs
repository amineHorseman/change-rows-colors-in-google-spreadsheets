
function onInstall(e) {
  var data = [3, 4, 'Low:Yellow, Medium:#ff8b00, High:red']; // default parameters on install
  setProperties(data);
  onOpen(e);
}

function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('ChangeRowColors')
      .addItem('Settings', 'showDialog')
      .addItem('Help', 'showDoc')
      .addToUi();
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('dialogBox')
       .setWidth(500)
       .setHeight(150);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Plugin settings (ChangeRowColors)');
}

function showDoc() {
  var html = HtmlService.createHtmlOutputFromFile('helpBox')
       .setWidth(500)
       .setHeight(500);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Plugin documentation (ChangeRowColors)');
}

