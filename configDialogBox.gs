
function onInstall(e) {
  // set default properties
  PropertiesService.getDocumentProperties().deleteAllProperties();
  data = [{
    "columnToWatch": 3,
    "nbColumnsInRow": 4,
    "defaultColor": "white",
    "ignoreCase": "true",
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
      .createMenu('ChangeRowsColors')
      .addItem('Settings', 'showDialog')
      .addItem('Parse all rows', 'showParseAllDialog')
      .addItem('Help', 'showDoc')
      .addToUi();
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('dialogBox')
       .setWidth(530)
       .setHeight(280);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Plugin settings (ChangeRowsColors)');
}

function showDoc() {
  var html = HtmlService.createHtmlOutputFromFile('helpBox')
       .setWidth(600)
       .setHeight(500);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Plugin documentation (ChangeRowsColors)');
}

function showParseAllDialog() {
  var html = HtmlService.createHtmlOutputFromFile('parseAllDialogBox')
       .setWidth(400)
       .setHeight(100);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Parse all rows (ChangeRowsColors)');
}
