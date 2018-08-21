
function getProperties() {
  var documentProperties = PropertiesService.getDocumentProperties();
  var columnToWatch = documentProperties.getProperty('columnToWatch');
  var nbColumnsInRow = documentProperties.getProperty('nbColumnsInRow');
  var formatingRules = documentProperties.getProperty('formatingRules');
  var data = []
  data[0] = parseInt(columnToWatch);
  data[1] = parseInt(nbColumnsInRow);
  data[2] = formatingRules;
  return data;
}

function setProperties(data){
  data = data[0];
  var columnToWatch = data["columnToWatch"];
  var nbColumnsInRow = data["nbColumnsInRow"];                        
  var formatingString = data["formatingString"];
                        
  var documentProperties = PropertiesService.getDocumentProperties();
  documentProperties.setProperty('columnToWatch', columnToWatch);
  documentProperties.setProperty('nbColumnsInRow', nbColumnsInRow);
  documentProperties.setProperty('formatingRules', formatingString);
}

function parseFormatingRules(formatingString) {
  // parse string and convert it to array
  var formatingElements = formatingString.split(",");
  var formatingRules = new Array();
  for(var i = 0; i < formatingElements.length; i++){
    var rule = formatingElements[i].split(":");
    formatingRules[i] = [rule[0].trim(), rule[1].trim()];
  }
  
  return formatingRules;
}