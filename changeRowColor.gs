
function changeRowColor(e){
  // get parameters
  var documentProperties = PropertiesService.getDocumentProperties();
  var columnToWatch = documentProperties.getProperty('columnToWatch');
  var nbColumnsInRow = documentProperties.getProperty('nbColumnsInRow');
  var formatingRules = getFormatingRules(documentProperties);
  
  // get the current range
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = e.range;
  var value = range.getValue();

  // change background color for the entire line
  var rowRange = sheet.getRange(range.getRow(),1,1,nbColumnsInRow);
  if (range.getColumn() == columnToWatch)
    for (var i=0; i<formatingRules.length; i++)
      if (value == formatingRules[i][0])
        rowRange.setBackground(formatingRules[i][1]);   
}

function getFormatingRules(documentProperties) {
  // parse formatingRules property
  var formatingString = documentProperties.getProperty('formatingRules');
  var formatingElements = formatingString.split(",");
  var formatingRules = new Array();
  
  // store colors and values to array
  for(var i = 0; i < formatingElements.length; i++){
    var rule = formatingElements[i].split(":");
    formatingRules[i] = [rule[0].trim(), rule[1].trim()];
  }
  
  return formatingRules;
}

function onEdit(e){  
  changeRowColor(e);
}

function onFormSubmit(e){  
  changeRowColor(e);
}
