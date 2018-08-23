
function onInstall(e) {
  // set default properties
  var data = [3, 4, 'low:yellow, medium:#ff8b00, high:red'];
  setProperties(data);
  
  // set onFormSubmit trigger
  var sheet = SpreadsheetApp.getActive();
  ScriptApp.newTrigger("onFormSubmit")
           .forSpreadsheet(sheet)
           .onFormSubmit()
           .create();
  
  // create menu items
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

