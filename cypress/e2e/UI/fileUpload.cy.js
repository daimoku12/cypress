//https://www.npmjs.com/package/cypress-file-upload
//npm install --save-dev cypress-file-upload
//To be able to use any custom command you need to add it to cypress/support/commands.js like this: import 'cypress-file-upload';
//Files to upload should be under Fixtures folder

describe('File upload', () => 
{
  it('Single file upload', () => {
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile("AssertionsCheatSheet.pdf")
    cy.get('#file-submit').click();
    cy.wait(3000)
    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
  })

  it('File upload - Rename', () => {
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('#file-upload').attachFile({filePath:'AssertionsCheatSheet.pdf', fileName:'test.pdf'})
    cy.get('#file-submit').click();
    cy.wait(3000)
    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
  })

  it('File upload - Drag and Drop', () => {
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('#drag-drop-upload').attachFile("test1.pdf", {subjectType:'drag-n-drop'})
  })

  it('Multiple Files upload', () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get('#filesToUpload').attachFile(['DockerCheatSheet.pdf', 'CommandsCheatSheet.pdf'])
  })

  it.only('Shadow DOM', () => {
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
    cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('CommandsCheatSheet.pdf')
  })
})