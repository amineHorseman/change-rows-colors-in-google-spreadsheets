
function changeRowColor(e){
  // get parameters
  var data = getProperties(); 
  data = data[0];
  var columnToWatch = data["columnToWatch"];
  var nbColumnsInRow = data["nbColumnsInRow"];
  var formatingRules = data["formatingRules"];
  
  // get the current row values
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var rowRange = sheet.getRange(e.range.getRow(),1,1,nbColumnsInRow);
  var value = rowRange.getValues()[0][columnToWatch-1];
  
  // change background color for the entire line
    for (var i=0; i<formatingRules.length; i++) {
      if (value == formatingRules[i][0]) {
        rowRange.setBackground(formatingRules[i][1]);
        break;
      }
      // if no matching value found, set the background to default color
      rowRange.setBackground("white");
    }
}

function onEdit(e){
  changeRowColor(e);
}

function onFormSubmit(e){ 
  changeRowColor(e);
}
