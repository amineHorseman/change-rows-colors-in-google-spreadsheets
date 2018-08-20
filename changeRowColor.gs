
var columnToWatch = 3;
var formating = [['Low','yellow'],
                 ['Medium','#ff8b00'],
                 ['High','red']];
var nbColumnsInRow = 4;

// Change line color according to the value of the columnToWatch
function changeRowColor(e){
  // Get the current range
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = e.range;
  var value = range.getValue();

  // change background color for the entire line
  var rowRange = sheet.getRange(range.getRow(),1,1,nbColumnsInRow);
  if (range.getColumn() == columnToWatch)
    for (var i=0; i<=formating.length; i++)
      if (value == formating[i][0])
        rowRange.setBackground(formating[i][1]);   
}

function onEdit(e){  
  changeRowColor(e);
}

function onFormSubmit(e){  
  changeRowColor(e);
}
