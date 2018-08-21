
function changeRowColor(e){
  // get parameters
  var data = getProperties(); 
  var columnToWatch = data[0];
  var nbColumnsInRow = data[1];
  var formatingRules = parseFormatingRules(data[2]);
  
  // get the current range
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = e.range;
  var value = range.getValue();

  // change background color for the entire line
  var rowRange = sheet.getRange(range.getRow(),1,1,nbColumnsInRow);
  if (range.getColumn() == columnToWatch)
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
