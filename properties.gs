
function getProperties() {
  var documentProperties = PropertiesService.getDocumentProperties();
  var columnToWatch = documentProperties.getProperty('columnToWatch').replace(/<\/?[^>]+(>|$)/g, "");
  var nbColumnsInRow = documentProperties.getProperty('nbColumnsInRow').replace(/<\/?[^>]+(>|$)/g, "");
  var defaultColor = documentProperties.getProperty('defaultColor').replace(/<\/?[^>]+(>|$)/g, "");
  var ignoreCase = documentProperties.getProperty('ignoreCase').replace(/<\/?[^>]+(>|$)/g, "");
  var formatingRules = documentProperties.getProperty('formatingRules').replace(/<\/?[^>]+(>|$)/g, "");

  var data = [{
    "columnToWatch": parseInt(columnToWatch),
    "nbColumnsInRow": parseInt(nbColumnsInRow),
    "defaultColor": defaultColor,
    "ignoreCase": ignoreCase,
    "formatingRules": parseFormatingRules(formatingRules)
  }];
  return data;
}

function setProperties(data){
  data = data[0];
  var columnToWatch = data["columnToWatch"].replace(/<\/?[^>]+(>|$)/g, "");
  var nbColumnsInRow = data["nbColumnsInRow"].replace(/<\/?[^>]+(>|$)/g, ""); 
  var defaultColor = data["defaultColor"].replace(/<\/?[^>]+(>|$)/g, "");
  var ignoreCase = data["ignoreCase"].replace(/<\/?[^>]+(>|$)/g, ""); 
  var formatingString = data["formatingRules"].replace(/<\/?[^>]+(>|$)/g, "");
  
  var documentProperties = PropertiesService.getDocumentProperties();
  documentProperties.setProperty('columnToWatch', columnToWatch);
  documentProperties.setProperty('nbColumnsInRow', nbColumnsInRow);
  documentProperties.setProperty('defaultColor', defaultColor);
  documentProperties.setProperty('ignoreCase', ignoreCase);
  documentProperties.setProperty('formatingRules', formatingString);
}

function parseFormatingRules(formatingString) {
  // parse string and convert it to array
  if (formatingString != "") {
    var formatingElements = formatingString.split(",");
    var formatingRules = new Array();
    for(var i = 0; i < formatingElements.length; i++){
      var rule = formatingElements[i].split(":");
      formatingRules[i] = [rule[0].trim(), rule[1].trim()];
    }
  }
  else formatingRules = [];
  
  return formatingRules;
}