
function changeRowColor(e){
  // get parameters
  var data = getProperties(); 
  data = data[0];
  var columnToWatch = data["columnToWatch"];
  var nbColumnsInRow = data["nbColumnsInRow"];
  var defaultColor = data["defaultColor"];
  var ignoreCase = data["ignoreCase"];
  var formatingRules = data["formatingRules"];
  
  // get the current row 
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var rowRange = sheet.getRange(e.range.getRow(),1,1,nbColumnsInRow);
  
  // change background color for the entire line
  applyFormatingRulesToRow(rowRange, columnToWatch, formatingRules, ignoreCase, defaultColor)
}

function applyFormatingRulesToRow(rowRange, columnToWatch, formatingRules, ignoreCase, defaultColor) {
    var value = rowRange.getValues()[0][columnToWatch-1];
  
    for (var i=0; i<formatingRules.length; i++) {
      var matchingValue = formatingRules[i][0];
      if (ignoreCase === 'true') {
        value = value.toLowerCase();
        matchingValue = matchingValue.toLowerCase();
      }
      if (value == matchingValue) {
        rowRange.setBackground(formatingRules[i][1]);
        break;
      }
      // if no matching value found, set the background to default color
      rowRange.setBackground(defaultColor);
    }
}

function onEdit(e){
  changeRowColor(e);
}

function onFormSubmit(e){ 
  changeRowColor(e);
}


function getRowsCount() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var rowsCount = sheet.getLastRow()-1;
  return rowsCount;
}


function parseAllRows() {
  // get parameters
  var data = getProperties(); 
  data = data[0];
  var columnToWatch = data["columnToWatch"];
  var nbColumnsInRow = data["nbColumnsInRow"];
  var defaultColor = data["defaultColor"];
  var ignoreCase = data["ignoreCase"];
  var formatingRules = data["formatingRules"];
  
  // iterate over rows and apply the formating rules
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = SpreadsheetApp.getActiveSheet().getActiveRange();
  var numRows = sheet.getLastRow()-1;
  for (var i = 0 ; i < numRows; i++){
    var row = sheet.getRange(i+2,1,1,nbColumnsInRow);
    applyFormatingRulesToRow(row, columnToWatch, formatingRules, ignoreCase, defaultColor);
  }
}
