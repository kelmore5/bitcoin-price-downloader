# Bitcoin Price Updater

This is a tool to download Bitcoin ticker prices from Kraken Market via its API.

Using the Excel template and the Google script from lib, this tool finds the BTC
ticker using columns C5:C and outputs their current price in D5:D.

The script can be edited to change where the input is retrieved or you can just use
the provided template and add more tickers to the C column.

BTC tickers can be looked up at Kraken Market, [here](https://cryptowatch.de/markets/kraken/btc/usd)

Also, there is an option to run the script automatically every x minutes/hours/days. If
you'd like the Google sheet to stay updated, use the createTrigger and deleteAllTriggers
functions to add and remove said automation.

This has been checked and was working on **May 3, 2018**, but I have no plans to maintain the project.

## Install

The easiest way to utilize this project is to make a copy of the Google sheet using [this](https://docs.google.com/spreadsheets/d/1aGEiwC4Xu0AjfJZHydHrtq9XWuXme05gdUNUNnr5Wxw/edit?usp=sharing) 
shareable link

Otherwise, you can download the spreadsheet and script from the lib folder and upload them to your
own Google drive for use.

## Extra Links

- [Kraken Market Prices](https://cryptowatch.de/markets/kraken/btc/usd)
- [Kraken API](https://www.kraken.com/help/api)
- [Google Sheets Scripts](https://developers.google.com/apps-script/guides/sheets)

## Proof of Concept

You can check out a demo from a slideshow I've created [here](https://docs.google.com/presentation/d/10fd89NcMXuS0FX39vZr521cwJP_hWqC2oxUkFSWUXBs/edit?usp=sharing)
or you can just look at spreadsheet from the [shared link](https://docs.google.com/spreadsheets/d/1aGEiwC4Xu0AjfJZHydHrtq9XWuXme05gdUNUNnr5Wxw/edit?usp=sharing) given above.

Either way, below are some pictures to give a proof of concept.

Here's a picture of the template spreadsheet:

![Template Spreadsheet](/demo/spreadsheet_template.png "Template Spreadsheet")

The spreadsheet filled out after the script is run:

![Filled Spreadsheet](/demo/spreadsheet_filled.png "Filled Spreadsheet")

How to setup the script and various functions:

![Script Demo](/demo/google_script.png "Script Demo")

Running the script:

![Run the Script](/demo/google_script_run.png "Run the Script")


