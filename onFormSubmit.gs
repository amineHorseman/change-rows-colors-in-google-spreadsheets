// set DataValidation on form submit
function onFormSubmit(e){

  // DataValidation values :  
  var options = new Array();
  options[0]='Free';
  options[1]='In progress';
  options[2]='Finished';
  options[3]='Correcting';
  options[4]='Done';
  options[5]='Recommended by Chief Editor';
  options[6]='Error';
  options[7]='Reject';
  
  // Initialization :
  var defaultValue = 'Free';
  var columnToChange = 6;
  var defaultColor = '#93c47d';  // green
  var inProgressLineColor = '#f1c232';  // yellow
  var nbColumnsInRow = 13;
  var inProgressStatusColumn = 10;
  var languageStatusColumn = 8;
  var publicCibleColumn = 9;
  var choosenPublicCibleColumn = 11;
  var EditorNameColumn = 7;
  var lastNameColumn = 2;
  var fistNameColumn = 2;
  var descriptionColumn = 5;
  var adminRemarksColumn = 13;
  
  // Create the DataValidation cell
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var cell = sheet.getRange(e.range.getRow(), columnToChange);
  var dv = SpreadsheetApp.newDataValidation();
  dv.setAllowInvalid(false);  
  dv.requireValueInList(options, true);
  cell.setDataValidation(dv.build());
  var range = e.range;
  
  // Set style
  cell.setBackground(defaultColor);
  cell.setFontWeight("bold");
  
  // Set value (Free or InProgress) and default Editor name
  var inProgress = sheet.getRange(range.getRow(), inProgressStatusColumn).getValue();
  if (inProgress == 'Oui')
  {
    cell.setValue('In progress');
    var name = sheet.getRange(range.getRow(), fistNameColumn).getValue();
    sheet.getRange(range.getRow(), EditorNameColumn).setValue(name);
    rowRange = sheet.getRange(range.getRow(),1,1,nbColumnsInRow).setBackground(inProgressLineColor);
  }
  else cell.setValue(defaultValue); 
  
  
  // set "Public Cible" column 
  var optionsPublic = new Array();
  optionsPublic[0]='Débutants';
  optionsPublic[1]='Gens du domaine';
  optionsPublic[2]='Experts confirmés';
  optionsPublic[3]='Gens du domaine et Experts confirmés';
  optionsPublic[4]='Tout le monde';
  optionsPublic[5]='???';
  cell = sheet.getRange(range.getRow(), publicCibleColumn);
  dv = SpreadsheetApp.newDataValidation();
  dv.setAllowInvalid(false);
  dv.requireValueInList(optionsPublic, true);
  cell.setDataValidation(dv.build());
  var publicCible = sheet.getRange(range.getRow(), choosenPublicCibleColumn).getValue();
  if (publicCible == "")
    cell.setValue(optionsPublic[5]); 
  else cell.setValue(publicCible);
  
  // set "Languages" column
  cell = sheet.getRange(range.getRow(), languageStatusColumn);
  var lang = cell.getValue();
  var optionsLang = new Array();
  optionsLang[0]='العربية';
  optionsLang[1]='Français';
  optionsLang[2]='English';
  optionsLang[3]='???';
  dv = SpreadsheetApp.newDataValidation();
  dv.setAllowInvalid(false);
  dv.requireValueInList(optionsLang, true);
  cell.setDataValidation(dv.build());
  if (lang == "")
    cell.setValue(optionsLang[3]); 
  else cell.setValue(lang);
  
  // set vertical & horizontal alignement to center
  for (var i=0; i<=nbColumnsInRow; i++)
    sheet.getRange(range.getRow(),i+1).setHorizontalAlignment("center");
  sheet.getRange(range.getRow(),descriptionColumn).setHorizontalAlignment("left");    // "description"
  sheet.getRange(range.getRow(),adminRemarksColumn).setHorizontalAlignment("left");   // "admins remarks"
  for (var i=0; i<=nbColumnsInRow; i++)
    sheet.getRange(range.getRow(),i+1).setVerticalAlignment("middle")
    
}

// set conditionnal formating on change
function onEdit(e){
  
  // Initialization :
  var columnToChange = 6;
  var nbOptions = 7;
  var nbColumnsInRow = 13;
  var descriptionColumn = 5;
  var adminRemarksColumn = 13;
  
  // DataValidation values :  
  var options = new Array();
  options[0]='Free';
  options[1]='In progress';
  options[2]='Finished';
  options[3]='Correcting';
  options[4]='Done';
  options[5]='Recommended by Chief Editor';
  options[6]='Error';
  options[7]='Reject';
  
  // Background color for state column :
  var colors = new Array();
  colors[0]='#93c47d';  // green
  colors[1]='#f1c232';  // yellow
  colors[2]='#ffb2b2';  // light red
  colors[3]='#ff8b00';  // orange
  colors[4]='#ff0000';  // red
  colors[5]='#6d9eeb';  // blue
  colors[6]='#999999';  // grey
  colors[7]='#777777';  // bold grey
  
  // Background color for entire line :
  var lineColors = new Array();
  lineColors[0]='#ffffff';  // white
  lineColors[1]='#f1c232';  // yellow
  lineColors[2]='#ffb2b2';  // light red
  lineColors[3]='#ff8b00';  // orange
  lineColors[4]='#ff0000';  // red
  lineColors[5]='#ffffff';  // white
  lineColors[6]='#999999';  // grey
  lineColors[7]='#777777';  // bold grey
  
  // Get the current range :
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = e.range;
  var value = range.getValue();
  
  // set background colors for the entire line :
  var rowRange = sheet.getRange(range.getRow(),1,1,nbColumnsInRow);
  for (var i=0; i<=nbOptions; i++)
    if (value == options[i])
      rowRange.setBackground(lineColors[i]);
  
  // set background color for the status column :
  if (range.getColumn() == columnToChange)
    for (var i=0; i<=nbOptions; i++)
      if (value == options[i])
        range.setBackground(colors[i]);
  
  // set vertical & horizontal alignement to center
  for (var i=0; i<=nbColumnsInRow; i++)
    sheet.getRange(range.getRow(),i+1).setHorizontalAlignment("center");
  sheet.getRange(range.getRow(),descriptionColumn).setHorizontalAlignment("left");    // "description"
  sheet.getRange(range.getRow(),adminRemarksColumn).setHorizontalAlignment("left");   // "admins remarks"
  for (var i=0; i<=nbColumnsInRow; i++)
    sheet.getRange(range.getRow(),i+1).setVerticalAlignment("middle")
}

