
function onInstall(e) {
  // set default properties
  PropertiesService.getDocumentProperties().deleteAllProperties();
  data = [{
    "columnToWatch": 3,
    "nbColumnsInRow": 4,
    "formatingRules": "Low:yellow, Medium:#ff8b00, High:red"
  }];
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
       .setWidth(530)
       .setHeight(220);
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
