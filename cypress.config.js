const { defineConfig } = require("cypress");
const xlsx = require("xlsx");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      screenshotOnRunFailure=true;
      
      on('task',{
        
        generateJSONFromExcel(args){
          const wb = xlsx.readFile(args.excelFilePath, {dateNF: "mm/dd/yyyy" });
          const ws = wb.Sheets[args.sheetName];
          return xlsx.utils.sheet_to_json(ws, { raw: false });
        }
      })
    }
  }
})