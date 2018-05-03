/******
* This is a small module to routinely download Bitcoin 
* ticker prices to a Google sheet. The data is pulled 
* from Kraken Market's open API, found here:
* https://www.kraken.com/help/api.
*
* The script pulls in ticker values from columns starting 
* at C5 to C, but this can be modified below for each user's 
* case. Ticker values can be looked up here:
* https://cryptowatch.de/markets/kraken/btc/usd
* 
* Requests can be automated using the createTrigger
* function. If run, the Google sheet will update every
* minute (forever) until the sheet is deleted or
* the function deleteAllTriggers is run.
******/

/**
* Takes a list of BTC tickers and downloads their price
* from Kraken Market's open API. Then, it outputs the price
* to a Google sheet on columns D5:D. 
* 
* Ticker values must be placed within columns C5:C, but this 
* can be changed below.
*/
function updateTickerValues() {  
  // Get active sheet
  var sheet = SpreadsheetApp.getActiveSheet();  

  // Get input for Kraken and the cell to be used for output
  var inputs = sheet.getRange("C5:C")
  var output = sheet.getRange("D5:D")
  
  var end = inputs.getValues().length;
  for(var i = 0; i < end; i++) { 
    // Get input and check if blank
    var input = inputs.getCell(i+1, 1).getDisplayValue();
    if(input == '') {
      break;
    }
    
    // Send request to Kraken market and parse out ticker price 
    var kraken_request = krakenRequest(input);
    if(kraken_request != null) {
      output.getCell(i+1, 1).setValue(kraken_request);
    }
  }
}

/**
* Takes in a BTC ticker and returns its current
* price via Kraken Market
* 
* @param {string} ticker The BTC ticker to get the price of
* @returns {string | null} The price of the BTC ticker
*/
function krakenRequest(ticker) {
  var url = "https://api.kraken.com/0/public/Ticker?pair=" + ticker;
  var response = JSON.parse(UrlFetchApp.fetch(url));
  if(response["error"].length == 0) {
    var result = response["result"][Object.keys(response["result"])[0]]["c"][0];
    return result;
  } else {
    return null; 
  }
}

/**
* Sets the Google sheet to update the BTC prices every minute
*/
function createTrigger() {
  // Trigger every 1 minute
  ScriptApp.newTrigger('updateTickerValues')
      .timeBased()
      .everyMinutes(1)
      .create();
}

/**
* Stops the Google sheet from updating
*/
function deleteAllTriggers() {
  // Loop over all triggers and delete them
  var allTriggers = ScriptApp.getProjectTriggers();
  
  for (var i = 0; i < allTriggers.length; i++) {
    ScriptApp.deleteTrigger(allTriggers[i]);
  }
}
